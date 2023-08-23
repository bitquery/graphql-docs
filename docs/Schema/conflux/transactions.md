# Conflux Transactions API

```
query ($network: ConfluxNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transactions(
      options: {desc: "block.height", asc: "address.address", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
        hash
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      creates {
        annotation
        address
      }
      success
    }
  }
}
{
  "network": "conflux_hydra",
  "from": "2023-08-23T11:27:27.000Z",
  "till": "2023-08-23T11:57:27.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transactions</summary></details>

## Fields