---
sidebar_position: 3
description: In this tutorial, we'll explore how to use GraphQL to retrieve historical trading data and use machine learning with Python to build a simple cryptocurrency price prediction model.
---

# Building an ML Model With Crypto Price Data

Cryptocurrency markets are known for their volatility, making them a fascinating domain for data science and predictive modeling. In this tutorial, we'll explore how to use GraphQL to retrieve historical trading data and use machine learning with Python to build a simple cryptocurrency price prediction model.

We will use the Bitquery API for fetching Ethereum-based decentralized exchange (DEX) trading data and scikit-learn for building a Random Forest Regressor model.

## Prerequisites

You need to have these libraries and packages installed to process the next part of the tutorial. Use the snippet below to install the following:

```
import pandas as pd
from sklearn.preprocessing import StandardScaler

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

pip install graphql-core
```

This command installs the graphql-core package, which is a Python library for working with GraphQL queries and responses. It is used to make GraphQL requests to the Bitquery API for fetching cryptocurrency trading data.

## Step 1: Fetching Historical Trading Data with GraphQL

First, we need to obtain historical trading data for our cryptocurrency. We'll use GraphQL and Bitquery API for this purpose. The code snippet below demonstrates how to construct a GraphQL query to retrieve Ethereum DEX trades for a specific base and quote currency within a given time range.

    import requests

    graphql_endpoint = "https://graphql.bitquery.io/"
    headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ory_at_...'
    }

**Replace with actual values for $baseAddress and $interval**

    base_address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    interval = 5

### Define the GraphQL query

    graphql_query = """
    query ($baseAddress: String, $interval: Int) {
    ethereum(network: ethereum) {
    dexTrades(
    baseCurrency: {is: $baseAddress}
    date: {since: "2023-07-30", till: "2023-07-31"}
    options: {limit: 1000, desc: "timeInterval.minute"}
    quoteCurrency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
    priceAsymmetry: {lt: 1}
    ) {
    timeInterval {
    minute(count: $interval)
    }
    sellCurrency: quoteCurrency {
    address
    }
    avg: quotePrice(calculate: average)


    }
    }
    }
    """

**Define the variables for the query**

    variables = {
    "baseAddress": base_address,
    "interval": interval
    }

## Make the GraphQL request

    response = requests.post(graphql_endpoint, json={"query": graphql_query, "variables": variables}, headers=headers)

### Check the response

    if response.status_code == 200:
    json_data = response.json()
    print(json_data)
    else:
    print(f"Error: {response.status_code}, {response.text}")

The output of this step would be JSON Data in the format as shown below:

    {'data': {'ethereum': {'dexTrades': [{'timeInterval': {'minute': '2023-07-30 23:55:00'}, 'sellCurrency': {'address': '0xdac17f958d2ee523a2206206994597c13d831ec7'}, 'avg': 1862.5050814903102},

## Step 2: Data Preprocessing

After obtaining the trading data, we need to preprocess it and build a machine-learning model for price prediction. In the following code snippet, we extract the required data, convert it into DataFrame and finally convert the timestamp to a numeric format.

## Extract relevant data

    trade_data = json_data['data']['ethereum']['dexTrades']
    df = pd.json_normalize(trade_data)

    df['timeInterval.minute'] = pd.to_datetime(df['timeInterval.minute'])

## Convert datetime to timestamp (numeric representation)

    df['timeInterval.minute'] = df['timeInterval.minute'].astype(int) / 10**9  # divide by 10^9 to convert nanoseconds to seconds

**Now column is of float data type**

    print(df['timeInterval.minute'])

After running the code, you will be able to see a normalized DataFrame with timestamp data converted to float.

## Step 3: Training and Evaluating the Model

This step involves defining features, splitting the data, standardizing features, building a RandomForestRegressor model, training the model, making predictions, and evaluating the model. Here, the target is ‘avg’ as we are going to predict the price of the current day.

### Define features and target

    features = ['timeInterval.minute']
    target = ['avg']

    X = df[features]
    y = df[target]

### Split the data into training and testing sets

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

### Standardize the features

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

### Build a RandomForestRegressor model

    model = RandomForestRegressor(n_estimators=100, random_state=42)

### Train the model

    model.fit(X_train_scaled, y_train)

### Make predictions on the test set

    predictions = model.predict(X_test_scaled)

### Evaluate the model

    mse = mean_squared_error(y_test, predictions)
    print(f'Mean Squared Error: {mse}')

Sample Output:

    Mean Squared Error: 0.66590544255975

## Step 5: Testing in Recent Prices Data

Now, let's apply our trained model to predict recent cryptocurrency prices. We'll construct another GraphQL query to fetch recent trading data and use our model for predictions. To get the recent prices data, you can use the query below:

### Define the GraphQL query

    graphql_query =
    query ($baseAddress: String, $interval: Int) {
    ethereum(network: ethereum) {
    dexTrades(
    baseCurrency: {is: $baseAddress}
    date: {since: "2024-01-01", till: "2024-01-02"}
    options: {limit: 1000, desc: "timeInterval.minute"}
    quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    priceAsymmetry: {lt: 1}
    ) {
    timeInterval {
    minute(count: $interval)
    }
    sellCurrency: quoteCurrency {
    address
    }
    avg: quotePrice(calculate: average)


    }
    }
    }

Now, follow the same steps to normalize the data as we did to get the training dataset. After obtaining the dataset, preprocess the features as discussed earlier. Now, do feature engineering for the testing data to obtain the ‘avg’ as we targeted.

We preprocess the recent trading data and use our trained model for predictions.

    features = ['timeInterval.minute']
    target = ['avg']

    X = df[features]
    y = df[target]

### Split the data into training and testing sets

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

### Standardize the features

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    recent_prices_predictions = model.predict(X_test_scaled)

### Display predictions for recent prices

    print("Predictions for Recent Prices:")
    print(recent_prices_predictions)

**Sample Output:**

Predictions for Recent Prices: [1856.33533188 1876.33664406 1881.45406742 1855.9330]

Thus, we have built an ML model with blockchain data using BitQuery DEX API to fetch Ethereum-based decentralized exchange (DEX) trading data.
