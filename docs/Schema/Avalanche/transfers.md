# Transfers

The Avalanche Transfers API can be used to get information about transfers, such as the sender, the recipient, the amount, the currency, and the timestamp. Below are the fields in the schema:

```
query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.height", limit: 10}
      date: {since: $from, till: $till}
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
        gasValue
        gasPrice
        gas
        txFrom {
          address
          annotation
        }
      }
      external
      success
      entityId
    }
  }
}
<!-- Parameters -->
{
  "network": "avalanche",
  "from": "2023-07-21",
  "till": "2023-07-28T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transfers</summary>

`options`: A set of options that control the behavior of the query.

`limit`: The maximum number of results to return.

`date`: The date of the transfers to filter by.

`amount`: The amount of the transfer to filter by.

`any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

`currency`: The currency of the transfer to filter by.


`entityId`: The ID of the transfer to filter by.

`external`: Whether the transfer was external or internal

`height`: The height of the block that the transfer was included in.

`sender`: The address of the sender of the transfer to filter by.

`receiver`: The address of the recipient of the transfer to filter by.

`time`: The timestamp of the transfer to filter by.

`txFrom`: The address of the sender of the transaction that the transfer was included in.

`txHash`: The hash of the transaction that the transfer was included in
</details>


### Fields

`block`: The block that the transfer was included in.

`timestamp`: The timestamp of the block.

`height`: The height of the block.

`sender`: The address of the sender of the transfer.

`receiver`: The address of the recipient of the transfer.

`currency`: The currency of the transfer.

`amount`: The amount of the transfer.

`amount_usd`: The amount of the transfer in USD.

`transaction`: The transaction that the transfer was included in.

`hash`: The hash of the transaction.

`gasValue`: The gas value of the transaction.

`gasPrice`: The gas price of the transaction.

`gas`: The gas used by the transaction.

`txFrom`: The address of the sender of the transaction.

`external`: Whether the transfer was external.

`success`: Whether the transfer was successful.

`entityId`: The ID of the transfer.