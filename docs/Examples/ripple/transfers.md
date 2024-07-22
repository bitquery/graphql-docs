# Ripple Transfers API

Ripple Transfers API provides all details regarding transfers on Ripple Blockchain. Below are some examples of `transfers` API:

## Get Transfers for a currency on Ripple

We are using the below query to get all types of transfers for a specific currency `CNY`. You can find the query [here](https://ide.bitquery.io/All-types-of-transfers-for-tokens).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $currency: String!) {
  ripple(network: $network) {
    transfers(
      options: {desc: "block", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      any: [{currencyToSymbol: {is: $currency}}, {currencyFromSymbol: {is: $currency}}]
    ) {
      timestamp {
        time
      }
      amountFrom
      amount_from_usd: amountFrom(in: USD)
      amountTo
      amount_to_usd: amountTo(in: USD)
      block
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

## Total Transfers done by a Ripple address

We are using the below query to get the total transfers done by a specific address `rs9ineLqrCzeAGS1bxsrW8x2n3bRJYAh3Q`. You can find the query [here](https://ide.bitquery.io/Total-transfers-done-by-a-ripple-address).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ripple(network: $network) {
    transfers(
      options: {desc: "count", asc: "currencyTo.symbol", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      any: [{receiver: {is: $address}}, {sender: {is: $address}}]
    ) {
      currencyTo {
        symbol
        name
      }
      currencyFrom {
        symbol
        name
      }
      count
      senders: count(uniq: senders)
      receivers: count(uniq: receivers)
      days: count(uniq: dates)
      from_date: minimum(of: date)
      till_date: maximum(of: date)
      amountTo
      amount_to_usd: amountTo(in: USD)
      amountFrom
      amount_from_usd: amountFrom(in: USD)
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "address": "rs9ineLqrCzeAGS1bxsrW8x2n3bRJYAh3Q",
  "network": "ripple",
  "from": "2024-06-28",
  "till": "2024-07-05T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## All Historical Transfers of an individual address

We are using the below query to get all the historical transfers done by a specific address `rs9ineLqrCzeAGS1bxsrW8x2n3bRJYAh3Q`. You can find the query [here](https://ide.bitquery.io/All-historical-transfers-of-an-individual-address).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ripple(network: $network) {
    transfers(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      any: [{receiver: {is: $address}}, {sender: {is: $address}}]
    ) {
      timestamp {
        time
      }
      block
      direction
      amountFrom
      amount_from_usd: amountFrom(in: USD)
      amountTo
      amount_to_usd: amountTo(in: USD)
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
  "address": "rs9ineLqrCzeAGS1bxsrW8x2n3bRJYAh3Q",
  "network": "ripple",
  "from": "2024-06-28",
  "till": "2024-07-05T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```
