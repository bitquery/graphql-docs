# Ripple Trades API

Ripple Trades API provides all details regarding trades on Ripple Blockchain. Below are some examples of `trades` API:

## Get Trades for a currency on Ripple

We are using the below query to get the trades for a specific currency `CNY`. You can find the query [here](https://ide.bitquery.io/trades-for-CNY-on-ripple).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $currency: String!) {
  ripple(network: $network) {
    transfers(
      options: {desc: "block", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      direction: {is: "trade"}
      any: [{currencyToSymbol: {is: $currency}}, {currencyFromSymbol: {is: $currency}}]
    ) {
      timestamp {
        time
      }
      transaction {
        type
      }
      amountFrom
      amount_from_usd: amountFrom(in: USD)
      amountTo
      amount_to_usd: amountTo(in: USD)
      block
      direction
      currencyFrom {
        address
        name
        symbol
        tokenId
        tokenType
        decimals
      }
      currencyTo {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      direction
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "currency": "CNY",
  "network": "ripple",
  "from": "2024-06-28",
  "till": "2024-07-05T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Video Tutorial | How to get Trades of a currency on Ripple Blockchain

<VideoPlayer url="https://www.youtube.com/watch?v=SXuebEC9skY" />
