# Ripple Balance API

Ripple Balance API provides all details regarding balances on Ripple Blockchain. Below are some examples of `balance` API:

## Get Historical Balance of an address on Ripple

We are using the below query to get all historical balance of an address `rs9ineLqrCzeAGS1bxsrW8x2n3bRJYAh3Q` on Ripple Blockchain. You can find the query [here](https://ide.bitquery.io/historical-balances-of-a-ripple-address).

```
query ($network: RippleNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ripple(network: $network) {
    balances(
      date: {since: $from, till: $till}
      account: {is: $address}
      options: {limit: $limit, offset: $offset, desc: ["block", "transaction.index"]}
    ) {
      transaction {
        hash
        index
        sender
        type
      }
      timestamp {
        time
      }
      prevBalance
      operation
      issuer {
        address
        annotation
      }
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      block
      balance
      account {
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
