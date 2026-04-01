---
title: "Stellar Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar transactions. Get fees, hashes, senders, operation counts, and timestamps."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Stellar Transactions API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Stellar transactions. Get fees, hashes, senders, operation counts, and timestamps."/>
<meta name="keywords" content="Stellar API examples, Stellar GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Transactions API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Stellar transactions. Get fees, hashes, senders, operation counts, and timestamps." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Transactions API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Stellar transactions. Get fees, hashes, senders, operation counts, and timestamps." />
</head>

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

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar payments examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-payments-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
