# Transactions


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