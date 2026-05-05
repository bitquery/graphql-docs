---
title: "Stellar Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar transactions. Get fees, hashes, senders, operation counts, and timestamps."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Transactions API

Explore Stellar transaction records — fees, hashes, senders, operation counts, and block timestamps — through the Bitquery GraphQL API.

## Get Latest Stellar Transactions

List the latest Stellar transactions alongside their fee, hash, success status, sender, operation count, and timestamp. [Run the query on the IDE](https://ide.bitquery.io/Latest-Transactions-on-Stellar).

**Variations:** Adjust the `date` filter for a different day, raise `limit` for deeper history, or add a `sender` filter to scope results to one account. See [query features](/docs/category/query-features) for sorting and pagination.

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

## Get Latest Stellar Transactions by Sender

Look up all transactions sent by a particular Stellar account, including fee, hash, memos, success flag, operation count, timestamp, and sequence number.

**Variations:** Swap the `sender` address to monitor a different account, drop the `date` filter for an open-ended time range, or add `success: {is: true}` to return only confirmed transactions.

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

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar payments examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-payments-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
