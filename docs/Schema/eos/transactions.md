# EOS Transactions API

Bitquery's EOS Transactions API gives you information on cpuUsageUs, status of transaction and, netUsage details. Below are the fields in the schema:

```
query ($from: ISO8601DateTime, $till: ISO8601DateTime) {
  eos {
    transactions(
      options: {desc: "block.height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      hash
      cpuUsageUs
      netUsageWords
      scheduled
      success
    }
  }
}
{
  "network": "eos",
  "from": "2023-08-23T07:15:24.000Z",
  "till": "2023-08-23T07:45:24.000Z",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transactions</summary>

- **options**
  - **asc** or **desc** The field to sort the results by in ascending or descending
  - **limit** The maximum number of transactions to return.
  - **offset** The offset from the beginning of the results.
- **time** : A filter that can be used to select transactions created within a specified time range.
- **height**
  - The height of the block in which the transaction was included.
- **date**
  - The date of the transaction.
- **any** : A catch-all filter ( OR logic) that can be used to select transactions that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.
- **success**
  - A boolean value indicating whether the transaction was successful.
- **scheduled**
  - A boolean value indicating whether the transaction was scheduled.
- **txIndex**
  - The transaction index in the block.
- **txHash**
  - The hash of the transaction.

</details>

## Fields

- **block**
  - **timestamp**
    The timestamp of the block in which the transaction was included.
  - **height** The height of the block in which the transaction was included.
- **hash** The hash of the transaction.
- **cpuUsageUs** The amount of CPU resources used by the transaction.
- **netUsageWords** The amount of network resources used by the transaction.
- **scheduled** A boolean value indicating whether the transaction was scheduled.
- **success** A boolean value indicating whether the transaction was successful.
