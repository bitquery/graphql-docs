# Transactions

Avalanche Transactions API is used to get information about transactions, such as the sender, the recipient, the amount, the fee, and the timestamp. Here are the fields in the schema:

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

<details><summary>Filtering Transactions</summary>


`limit`: The maximum number of results to return.

`offset`: The offset to start the results from.

`date`: The date of the transaction.

`amount`: The amount of the transaction.

`any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

`feePayer`: The address that paid the fee for the transaction.

`feeRatio`: The fee ratio of the transaction.

`gasCurrency`: The currency of the gas used by the transaction.

`gasValue`: The gas value of the transaction.

`height`: The height of the block that the transaction was included in.

`time`: The timestamp of the transaction.

`txCreates`: The address of the contract that was created by the transaction.

`txIndex`: The index of the transaction in the block.

`txHash`: The hash of the transaction.

`txType`: The type of the transaction.

`txTo`: The address of the recipient of the transaction.

`txSender`: The address of the sender of the transaction.

</details>

### Fields

`block`: The block that the transaction was included in.

`timestamp`: The timestamp of the block.

`height`: The height of the block.

`address`: The address of the sender of the transaction.

`hash`: The hash of the transaction.

`gasValue`: The gas value of the transaction.

`gas_value_usd`: The gas value of the transaction in USD.

`creates`: The address of the contract that was created by the transaction.

`currency`: The currency of the transaction.

`feePayer`: The address that paid the fee for the transaction.

`error`: The error code of the transaction, if any.

`gas`: The gas used by the transaction.

`gasPrice`: The gas price of the transaction.

`gasCurrency`: The currency of the gas used by the transaction.

`nonce`: The nonce of the transaction.

`index`: The index of the transaction in the block.

`success`: Whether the transaction was successful.

`to`: The address of the recipient of the transaction.

`txType`: The type of the transaction