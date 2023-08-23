# Conflux Transfers API



```
query ($network: ConfluxNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transfers(
      options: {desc: "block.height", asc: "currency.symbol"}
      time: {since: $from, till: $till}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
        decimals
        name
        tokenId
        tokenType
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
      entityId
      success
    }
  }
}
{

  "network": "conflux_hydra",
  "from": "2023-08-23T11:32:58.000Z",
  "till": "2023-08-23T12:02:58.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transfers</summary></details>

## Fields
