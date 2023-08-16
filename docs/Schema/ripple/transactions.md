# Transactions

The Transactions API gives you information about transactions on the XRP Ledger. The following are the fields in the schema:

```
query ($from: ISO8601DateTime, $till: ISO8601DateTime) {
  chain: ripple {
    transactions(
      options: {asc: "timestamp.time", limit: 10}
      date: {since: $from, till: $till}
    ) {
      block
      accountTxnId
      flags
      hash
      index
      lastLedgerSequence
      memos
      result
      sender {
        annotation
        address
      }
      sequence
      sourceTag
      success
      txSigners
      type
      timestamp {
        time
      }
    }
  }
}
<!-- Parameters -->
{
  "network": "ripple",
  "from": "2023-07-01",
  "till": "2023-07-02"
}
```

<details><summary>Filtering Transactions</summary>

- `hash`: The hash of the transaction.
- `type`: The type of the transaction.
- `time`: The timestamp of the transaction.
- `sourceTag`: The source tag of the transaction.
- `success`: Whether the transaction was successful.
- `sequence`: The sequence number of the transaction.
- `sender`: The account that created the transaction.
- `result`: The result of the transaction.
- `options`: A dictionary of options that can be used to filter the results. The following options are supported:
  - `asc` or `desc`: The field to sort the results by.
  - `limit`: The maximum number of results to return.
  - `offset`: The number of results to skip.
- `memos`: The memos associated with the transaction.
- `lastLedgerSequence`: The ledger sequence of the last ledger that closed before the transaction was included in a ledger.
- `index`: The index of the transaction in the ledger.
- `flags`: The flags of the transaction.
- `fee`: The fee of the transaction.
- `date`: The date of the transaction.
- `block`: The block number of the transaction.
- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields
- `accountTxnId`: The transaction ID of the transaction, unique to the account that created the transaction.

</details>

## Fields

- `block`: The block number of the transaction.
- `accountTxnId`: The transaction ID of the transaction, unique to the account that created the transaction.
- `flags`: The flags of the transaction.
- `hash`: The hash of the transaction.
- `index`: The index of the transaction in the ledger.
- `lastLedgerSequence`: The ledger sequence of the last ledger that closed before the transaction was included in a ledger.
- `memos`: The memos associated with the transaction.
- `result`: The result of the transaction including status information
- `sender`: The account that created the transaction.
- `sequence`: The sequence number of the transaction.
- `sourceTag`: The source tag of the transaction.
- `success`: Whether the transaction was successful.
- `txSigners`: The signers of the transaction.
- `type`: The type of the transaction.
- `timestamp`: The timestamp of the transaction.
