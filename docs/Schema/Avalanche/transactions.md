# Transactions

Avalanche Transactions API

```
query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(
      options: {desc: "block.height", limit: 10}
      date: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      creates {
        address
        annotation
        smartContract {
          protocolType
          contractType
        }
      }
      currency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      feePayer
      error
      gas
      gasPrice
      gasCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      nonce
      index
      success
      to {
        address
        annotation
      }
      txType
    }
  }
}

{

  "network": "avalanche",
  "from": "2023-07-20",
  "till": "2023-07-27T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```