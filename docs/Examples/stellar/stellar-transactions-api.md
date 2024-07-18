# Stellar Transactions API

This API enables you to access and analyze transactions on the Stellar network, providing detailed information about each transaction, including the fee, hash, sender, and timestamp.

## Latest Transactions

In this query we retrieve the latest transactions on the Stellar network, including details such as the transaction fee, hash, success status, sender's address, operation count, and timestamp.

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

In this query we retrieve the most recent transactions sent by a specific address, including transaction fee, hash, memos, success status, operation count, timestamp, and sequence number.

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
