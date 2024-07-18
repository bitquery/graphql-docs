# Stellar Transactions API

## Latest Transactions

You can run the query [here](https://ide.bitquery.io/Latest-Transactions-on-Stellar)

```

query MyQuery {
  stellar(network: stellar) {
    transactions(
      date: {is: "2024-07-17"}
      options: {limit: 10, desc: "timestamp.time"}
    ) {
      fee
      hash
      memos
      memoType
      success
      sender {
        address
      }
      operationCount
      timestamp {
        time
      }
    }
  }
}

```

## Latest Transactions by a Sender

```
query MyQuery {
  stellar(network: stellar) {
    transactions(
      date: {is: "2024-07-17"}
      options: {limit: 10, desc: "timestamp.time"}
      sender: {is: "GB53FW6ARYKG7UAJN2QLKJGDTQXUWBI5RYEHBOMLN2K7CBWXBXTDSLV2"}
    ) {
      fee
      hash
      memos
      memoType
      success
      sender {
        address
      }
      operationCount
      timestamp {
        time
      }
      sequence
    }
  }
}

```
