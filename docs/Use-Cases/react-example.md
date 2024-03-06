---
sidebar_position: 3
description: In this tutorial we will see how to use Bitquery APIs with ReactJS
---

# Using Bitquery APIs with ReactJS to get Top Gainers and Losers

Below is a step-by-step tutorial on how to create a React application that displays the top gainers and losers on a particular date using React hooks, async/await for fetching data, and Bitquery V1 APIs for price information.

### Prerequisites

- Basic understanding of React and JavaScript.
- Node.js and npm installed on your machine.
- An API key from Bitquery. Sign up [here](https://account.bitquery.io/auth/signup) to get an API key.

### Step 1: Setting Up Your React Component

First, we import the necessary hooks and styles in your `GainersLosers` component file:

```
import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure the path is correct for your project structure

```

### Step 2: Creating the `fetchData` Function

The `fetchData` function is an asynchronous function responsible for fetching trading data from the V1 APis. Here's a step-by-step breakdown:

1.  **Defining the Function**: The function takes one parameter, `sortOrder`, which determines the sorting of the fetched data (ascending or descending).

```
const sortQuery = sortOrder === "asc" ? "asc: \"final\"" : "desc: \"final\"";
```

2.  **Setting the Sort Query**: Based on `sortOrder`, set the appropriate sort query string. We will write the query to calculate the performance and identify the top gainer or loser, we use the following formula:

`Percentage Change = ((Current Price - Initial Price) / Initial Price) * 100`

By applying this formula to each trading pair, we can determine the percentage change and identify the top gainers and losers based on their performance within a specific time frame.

```
const response = await fetch("https://graphql.bitquery.io", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "******"
    },
    body: JSON.stringify({
      query: `query ($network: EthereumNetwork!, $isdate: ISO8601DateTime) {
         ethereum(network: $network) {
            dexTrades(
               date: {is: $isdate}
               options: {limitBy: {each: "smartContract.address.address", limit: 1}, limit: 10,  ${sortQuery}}
            ) {
               smartContract {
                  address {
                     address
                  }
               }
               first_trade_quote_price: minimum(of: block, get: quote_price)
               last_trade_quote_price: maximum(of: block, get: quote_price)
               diff: expression(get: \"last_trade_quote_price - first_trade_quote_price\")
               div: expression(get: \"diff / first_trade_quote_price\")
               final: expression(get: \"div*100\")
               baseCurrency {
                  symbol
                  address
               }
               quoteCurrency {
                  symbol
                  address
               }
               protocol
            }
         }
      }`,
      variables: {
        network: "ethereum",
        isdate: "2023-04-18"
      }
    })
  });

```

3.  **Making the API Request**: Make a POST request to the v1 API. Include the necessary headers and the body containing your GraphQL query. The query fetches trading data based on certain conditions and sorts them as specified.

4.  **Parsing the Response**: Await the response from the API, then parse it as JSON.
5.  **Returning the Data**: Log the JSON data for debugging purposes and return the relevant part of the data for rendering in your component.

This is complete `fetchData` function.

```
async function fetchData(sortOrder) {
  const sortQuery = sortOrder === "asc" ? "asc: \"final\"" : "desc: \"final\"";
  const response = await fetch("https://graphql.bitquery.io", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "******"
    },
    body: JSON.stringify({
      query: `query ($network: EthereumNetwork!, $isdate: ISO8601DateTime) {
         ethereum(network: $network) {
            dexTrades(
               date: {is: $isdate}
               options: {limitBy: {each: "smartContract.address.address", limit: 1}, limit: 10,  ${sortQuery}}
            ) {
               smartContract {
                  address {
                     address
                  }
               }
               first_trade_quote_price: minimum(of: block, get: quote_price)
               last_trade_quote_price: maximum(of: block, get: quote_price)
               diff: expression(get: \"last_trade_quote_price - first_trade_quote_price\")
               div: expression(get: \"diff / first_trade_quote_price\")
               final: expression(get: \"div*100\")
               baseCurrency {
                  symbol
                  address
               }
               quoteCurrency {
                  symbol
                  address
               }
               protocol
            }
         }
      }`,
      variables: {
        network: "ethereum",
        isdate: "2023-04-18"
      }
    })
  });
  const jsonData = await response.json();
  console.log(jsonData)
  return jsonData.data.ethereum.dexTrades;
}
```

### Step 3: Building the `GainersLosers` Component

1.  **Initializing State**: Use `useState` to create `data` and `isGainer` states. `data` will store the fetched trading data, and `isGainer` will determine whether to show top gainers or losers.
2.  **Fetching Data on Component Mount and State Change**: Use `useEffect` to call `fetchData` whenever the component mounts or the value of `isGainer` changes. Update the `data` state with the fetched data.
3.  **Rendering the UI**: Display buttons to toggle between gainers and losers, and render a table to show the trading data. Use conditional rendering to apply the "active" class to the currently selected button.

```
function GainersLosers() {
  const [data, setData] = useState([]);
  const [isGainer, setIsGainer] = useState(true);

  useEffect(() => {
    const sortOrder = isGainer ? "desc" : "asc";
    fetchData(sortOrder).then(dextrades => setData(dextrades));
  }, [isGainer]);

// return statement goes here
}

```

### Step 4: Displaying the Data

Inside the `return` statement of your `GainersLosers` component, construct a table that maps over your `data` state to display each trade's details. Ensure to key each row by a unique identifier (`index` in this case).

```
 return (
    <div>
      <h2>Top Gainers and Losers</h2>
      <div className="button-container">
        <button onClick={() => setIsGainer(true)} className={isGainer ? "active" : ""}>Top Gainers</button>
        <button onClick={() => setIsGainer(false)} className={!isGainer ? "active" : ""}>Top Losers</button>
      </div>
      <table id="dataTable">
        <thead>
          <tr>
            <th>PAIR</th>
            <th>DEX</th>
            <th>1HR PRICE</th>
            <th>24HR PRICE</th>
            <th>CONTRACT</th>
            <th>PERCENTAGE CHANGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trade, index) => (
            <tr key={index}>
              <td>{`${trade.baseCurrency.symbol}/${trade.quoteCurrency.symbol}`}</td>
              <td>{trade.protocol}</td>
              <td>{Number(trade.first_trade_quote_price).toExponential(5)}</td>
              <td>{Number(trade.last_trade_quote_price).toExponential(5)}</td>
              <td>{trade.smartContract.address.address}</td>
              <td>{Number(trade.final).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

```

### Step 5: Exporting the Component

Finally, ensure to export the `GainersLosers` component so it can be used elsewhere in your React application.

```
export default GainersLosers;

```

That concludes the step-by-step guide for creating the `GainersLosers` component. This component demonstrates how to fetch and display data from a V1 API, manage state with hooks, and dynamically update the UI based on user interactions.
