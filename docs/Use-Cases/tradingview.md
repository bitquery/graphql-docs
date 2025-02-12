---
sidebar_position: 1
---

# Build a tradingview chart app for blockchain data

This tutorial will help you build a TradingView chart app with blockchain data from Bitquery.

### Price Index for DEX Tokens

The tutorial uses the token ADVT, which is not traded against USDT. As a result, we obtain the WETH - ADVT price and use it to calculate the token's price in USDT. However, if your chosen token is traded against USDT, you can accomplish this in a single query.

Query 1: Get ADVT price against WETH

```graphql
query MyQuery {
  ethereum(network: ethereum) {
    dexTrades(
      quoteCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      options: { limit: 1, desc: "block.height" }
    ) {
      timeInterval {
        minute(count: 15, format: "%Y-%m-%dT%H:%M:%SZ")
      }
      buyCurrency: baseCurrency {
        symbol
        address
      }
      sellCurrency: quoteCurrency {
        symbol
        address
      }
      sellAmountInUsd: quoteAmount
      tradeAmount(in: USD)
      averageQuotePrice: quotePrice(calculate: average)
      block {
        height
      }
    }
  }
}
```

Query 2: Get WETH price against USDT

```js
 query: `
            {
              ethereum(network: ethereum) {
                dexTrades(
                  options: {asc: "timeInterval.minute"}
                  date: {since: "2021-06-20T07:23:21.000Z", till: "2023-04-03T15:23:21.000"}
                  baseCurrency: {is: "0x69e37422cb87d963367f73a119c8ce9a4d529b72"}
                  quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
                  tradeAmountUsd: {gt: 10}
                  exchangeName: {is: "Uniswap"}
                ) {
                  timeInterval {
                    minute(count: 15, format: "%Y-%m-%dT%H:%M:%SZ")
                  }
                  volume: quoteAmount
                  high: quotePrice(calculate: maximum)
                  low: quotePrice(calculate: minimum)
                  open: minimum(of: block, get: quote_price)
                  close: maximum(of: block, get: quote_price)
                }
              }
            }
```

## A Step-by-step guide to building the Tradingview app

### Bitquery.js

Import the necessary files

```react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';
```

Define the TradingViewData component:

```js
export function TradingViewData() {
  // Component logic will go here
}
```

#### Set up state variables

Inside the TradingViewData component, add the following state variables using the useState hook:

```js
const [tradingData, setTradingData] = useState(null);
const [WETHprice, setWETHprice] = useState(null);
```

We use two functions to fetch the data.

The **fetchMyQueryData** function uses the axios library to fetch the WETH -USDT price from the Bitquery API.

```react
const fetchMyQueryData = async () => {
    try {
      const response = await axios.post(
        'https://graphql.bitquery.io',
        {
          query: `
          query MyQuery {
            ethereum(network: ethereum) {
              dexTrades(
                quoteCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
                baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
                options: {limit: 1, desc: "block.height"}
              ) {
                timeInterval {
                  minute(count: 15, format: "%Y-%m-%dT%H:%M:%SZ")
                }
                buyCurrency: baseCurrency {
                  symbol
                  address
                }
                sellCurrency: quoteCurrency {
                  symbol
                  address
                }
                sellAmountInUsd: quoteAmount
                tradeAmount(in: USD)
                averageQuotePrice: quotePrice(calculate: average)
                block {
                  height
                }
              }
            }
          }
          `
        },
        {
          headers: {
            'Content-Type': 'application/json',
           'Authorization': 'Bearer ory_at_...'
          }
        }
      );

      setWETHprice(response.data?.data?.ethereum.dexTrades[0]?.averageQuotePrice);
    } catch (error) {
      console.log(error);
    }
  };
```

The **fetchMyQueryData** function is called immediately after the component is mounted. This ensures that the WETH- USDT price is fetched before the chart is created.

The useEffect hook is used to call the **fetchData** function whenever the tradingData or WETHprice state variables change. This ensures that the chart is updated whenever the trading data changes.

```react
useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://graphql.bitquery.io',
          {
            query: `
            {
              ethereum(network: ethereum) {
                dexTrades(
                  options: {asc: "timeInterval.minute"}
                  date: {since: "2021-06-20T07:23:21.000Z", till: "2023-04-03T15:23:21.000"}
                  baseCurrency: {is: "0x69e37422cb87d963367f73a119c8ce9a4d529b72"}
                  quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
                  tradeAmountUsd: {gt: 10}
                  exchangeName: {is: "Uniswap"}
                ) {
                  timeInterval {
                    minute(count: 15, format: "%Y-%m-%dT%H:%M:%SZ")
                  }
                  volume: quoteAmount
                  high: quotePrice(calculate: maximum)
                  low: quotePrice(calculate: minimum)
                  open: minimum(of: block, get: quote_price)
                  close: maximum(of: block, get: quote_price)
                }
              }
            }

            `
          },
          {
            headers: {
              'Content-Type': 'application/json',
             Authorization': 'Bearer ory_at_...
            }
          }
        );
        setTradingData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
```

Get your Access Token here https://account.bitquery.io/user/api_v2/access_tokens

#### Calculate token prices

Add another useEffect hook to calculate the prices of the DEX tokens based on the WETH-USDT price and the retrieved trading data:

```js
useEffect(() => {
  if (tradingData && WETHprice) {
    const data = tradingData.data.ethereum.dexTrades.map((trade) => {
      const open = Number(trade.open) * WETHprice * 1000000; // Scale up the number by 1,000,000
      const high = Number(trade.high) * WETHprice * 1000000;
      const low = Number(trade.low) * WETHprice * 1000000;
      const close = Number(trade.close) * WETHprice * 1000000;

      return {
        time: new Date(trade.timeInterval.minute).getTime() / 1000,
        open,
        high,
        low,
        close,
        volume: Number(trade.volume),
      };
    });

    const chart = createChart(document.getElementById("firstContainer"), {
      priceScale: 10,
    });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);
  }
}, [tradingData, WETHprice]);
```

#### Render the chart

Finally, render the chart using the TradingViewData component:

```
return (
  <div>
    {tradingData ? (
      <div id="firstContainer" style={{ height: 600, width: '100%' }}></div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

```

### App

App.js file renders the component

```js
import "./App.css";
import { TradingViewData } from "./bitquery";
function App() {
  return (
    <div className="App">
      <TradingViewData />
    </div>
  );
}

export default App;
```

That's it! You have now implemented a tradingview clone for blockchain data. Make sure to replace 'YOUR KEY' in the code with your actual API key to fetch the data correctly.

This is how it will look finally!
![chart](/img/tv.png)

The full code is available in this repo here https://github.com/bitquery/Tradingview-Application
