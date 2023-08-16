# Escrows

Escrows are that send XRP when certain conditions are met. You can track escrows with Bitquery APIs in detail. The transactions where escrows happen will have ` "type": "EscrowFinish"` in the transaction detail.
Below are the fields in the API:

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $hash: String!) {
  ripple(network: $network) {
    escrows(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      transactionHash: {is: $hash}
    ) {
      block
      transaction {
        index
        type
        sender
        hash
      }
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      account {
        address
        annotation
      }
      destination {
        address
        annotation
      }
      amount
      amount_usd: amount(in: USD)
      currency {
        symbol
        name
        tokenType
        tokenId
        decimals
        address
      }
      finishAfter
      cancelAfter
      operation
      flags
      destinationTag
      condition
    }
  }
}
<!-- Parameters -->
{
  "limit": 10,
  "offset": 0,
  "hash": "1363D9A135E848842AE3A045572004BDDA098EC362DD0058E3261B0138844D8A",
  "network": "ripple"
}
```

<details><summary>Filtering Escrows</summary>

- **options** - This field allows you to specify the order of the results and the number of results to return.

- **date** - This field allows you to filter the results by time range.

- **transactionHash** - This field allows you to filter the results by a specific transaction hash.

- **transactionType** - This field allows you to filter the results by a specific transaction type.

- **transactionSender** - This field allows you to filter the results by a specific account.

- **transactionIndex** - This field allows you to filter the results in a specific transaction index.

- **time** - This field allows you to filter the results at a specific time.

- **sourceTag** - This field allows you to filter the results with a specific source tag.

- **prevTxnId** - This field allows you to filter the results as a result of a previous transaction.

- **prevLedgerSequence** - This field allows you to filter the results as a result of a previous transaction with a specific ledger sequence.

- **operation** - This field allows you to filter the results for a specific operation.

- **flags** - This field allows you to filter the results to escrows that have specific flags set.

- **finishAfter** - This field allows you to filter the results to escrows that will automatically be finished after a specific time.

- **destinationTag** - This field allows you to filter the results to escrows that have a specific destination tag.

- **destination** - This field allows you to filter the results to escrows that are being sent to a specific account.

- **currencySymbol** - This field allows you to filter the results to escrows that are denominated in a specific currency.

- **condition** - This field allows you to filter the results to escrows that have a specific condition.

- **cancelAfter** - This field allows you to filter the results to escrows that can be cancelled after a specific time.

- **block** - This field allows you to filter the results in a specific block.

- **any** - A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.

- **amount** - This field allows you to filter the results to escrows that have a specific amount.

- **account** - This field allows you to filter the results by a specific address

</details>

## Fields

- `block` - The block number in which the escrow was created.
- `transaction` - The transaction ID for the escrow creation.
- `timestamp` - The timestamp for the escrow creation.
- `account` - The account that created the escrow.
- `destination` - The account that will receive the funds from the escrow.
- `amount` - The amount of funds in the escrow.
- `amount_usd` - The amount of funds in the escrow in USD.
- `currency` - The currency of the funds in the escrow.
- `finishAfter` - The time after which the escrow will automatically be finished.
- `cancelAfter` - The time after which the escrow can be cancelled.
- `operation` - The type of operation that the escrow is for.
- `flags` - The flags for the escrow.
- `destinationTag` - The destination tag for the escrow.
- `condition` - The condition for the escrow.
