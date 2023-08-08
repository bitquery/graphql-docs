# Transfers

The Transfers API allows you to query information about transfers on the Filecoin blockchain.



```
query ($network: FilecoinNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    transfers(
      options: {desc: "block.height", limit: 10}
      date: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        annotation
        address
      }
      receiver {
        annotation
        address
      }
      currency {
        symbol
        address
        decimals
        name
        tokenId
        tokenType
      }
      amount
      amount_usd: amount(in: USD)
      hash
      transferType
      callHash
      callPath
      messageMethod {
        id
        name
      }
      method {
        name
        id
      }
    }
  }
}

<!-- Parameters -->

{
  "network": "filecoin",
  "from": "2023-08-01",
  "till": "2023-08-08T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```