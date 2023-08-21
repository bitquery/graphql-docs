# Transfers

Bitquery's Stellar transfers API provides you the following information:

```
query ($network: StellarNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  stellar(network: $network) {
    transfers(
      options: {desc: "block", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time
      }
      block
      transaction {
        hash
        index
        sender
      }
      currencyFrom {
        name
        symbol
        decimals
        address
        tokenType
        tokenId
      }
      currencyTo {
        name
        symbol
        decimals
        address
        tokenType
        tokenId
      }
      amountFrom
      amount_from_usd: amountFrom(in: USD)
      amountTo
      amount_to_usd: amountTo(in: USD)
      direction
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      operation {
        index
        name
      }
    }
  }
}

{
  "network": "stellar",
  "from": "2023-08-21T14:10:33.000Z",
  "till": "2023-08-21T14:40:33.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transfers</summary>

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **desc** or **asc** - The order in which the results should be returned.

  - **limit** - The maximum number of results to return.
  - **offset** - The offset from the first result to return.

- **time**

  This object specifies the date range for the query.

- **transactionSender**

  The account that sent the transaction that created the transfer.

- **transactionIndex**

  The index of the transaction that created the transfer in the ledger.

- **transactionHash**

  The hash of the transaction that created the transfer.

- **sender**

  The account that sent the asset.

- **receiver**

  The account that received the asset.

- **opIndex**

  The index of the operation that created the transfer in the transaction.

- **operation**

  The operation that created the transfer for e.g. `manage_buy_offer` or `payment`

- **direction**

  The direction of the transfer.

- **date**

  The date of the transfer. This can be used to filter for transfers that were created on a specific date.

- **currencyToName**

  The name of the asset that was received by the receiver's account.

- **currencyFromName**

  The name of the asset that was sent from the sender's account.

- **block**

  The number of the block in which the transfer was included.

- **any**

  A catch-all field (OR logic) that can be used to filter for transfers that match any of the other fields.

- **amountTo**

  The amount of the asset that was received by the receiver's account.

- **amountFrom**

  The amount of the asset that was sent from the sender's account.

</details>

## Fields

- **timestamp**

  The time at which the transfer was created.

- **block**

  The number of the block in which the transfer was included.

- **transaction**

  The transaction that created the transfer.

- **currencyFrom**

  The asset that was sent from the sender's account in native asset (Lumens)

- **currencyTo**

  The asset that was received by the receiver's account in native asset (XLM) .

- **amountFrom**

  The amount of the asset that was sent from the sender's account.

- **amountTo**

  The amount of the asset that was received by the receiver's account.

- **direction**

  The direction of the transfer. This can be either `maker` or `taker`.

- **receiver**

  The account that received the asset.

- **sender**

  The account that sent the asset.

- **operation**

  The operation that created the transfer.
