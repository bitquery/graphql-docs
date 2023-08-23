# Conflux Smart Contract Calls API

```
query ($network: ConfluxNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    smartContractCalls(
      options: {desc: "block.height", asc: "address.address", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: caller {
        address
        annotation
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractMethod {
        name
        signatureHash
      }
      transaction {
        hash
      }
    }
  }
}
{
  "network": "conflux_hydra",
  "from": "2023-08-23T11:17:03.000Z",
  "till": "2023-08-23T11:47:03.000Z",
  "dateFormat": "%Y-%m-%d"
}
```
<details><summary>Filtering Calls</summary></details>

## Fields