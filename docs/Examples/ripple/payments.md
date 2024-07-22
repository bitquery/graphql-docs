# Ripple Payments API

Ripple Payments API provides all details regarding payments on Ripple Blockchain. Below are some examples of `payments` API:

import VideoPlayer from "../../../src/components/HomepageFeatures/videoplayer.js";

## Get Latest Payments on Ripple

We are using the below query to get the latest payments on Ripple Blockchain. You can find the query [here](https://ide.bitquery.io/Latest-payments-on-ripple-blockchain).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    payments(
      options: {desc: "timestamp.time", limit: $limit, offset: $offset}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time
      }
      block
      transaction {
        index
        hash
      }
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      amountCurrency {
        symbol
        name
      }
      amount
      amount_usd: amount(in: USD)
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "network": "ripple",
  "from": "2024-07-05T10:57:14.000Z",
  "till": "2024-07-05T11:27:14.999Z",
  "dateFormat": "%Y-%m-%d"
}
```

## Get Payments of an Address on Ripple

We are using the below query to get the payments of a specific address `rLR5BTsGcnMp5SwUzX1V9VCTbN1hayH61R` on Ripple Blockchain. You can find the query [here](https://ide.bitquery.io/Payments-of-an-address-on-ripple).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ripple(network: $network) {
    payments(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      any: [{receiver: {is: $address}}, {sender: {is: $address}}]
    ) {
      timestamp {
        time
      }
      block
      transaction {
        index
      }
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      amountCurrency {
        symbol
        name
      }
      amount
      amount_usd: amount(in: USD)
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "address": "rLR5BTsGcnMp5SwUzX1V9VCTbN1hayH61R",
  "network": "ripple",
  "from": "2024-06-28",
  "till": "2024-07-05T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Video Tutorial | How to get payments data on Ripple Blockchain

<VideoPlayer url="https://youtu.be/wTpMKEcjBqs" />
