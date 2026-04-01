---
title: "Solana Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana transactions. Get transactions by time range, fees, instructions, and block context."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Solana Transactions API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Solana transactions. Get transactions by time range, fees, instructions, and block context."/>
<meta name="keywords" content="Solana API examples, Solana GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Transactions API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Solana transactions. Get transactions by time range, fees, instructions, and block context." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Transactions API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Solana transactions. Get transactions by time range, fees, instructions, and block context." />
</head>

# Solana Transactions API

## Transactions in a specific timeperiod

This below query will get you the transactions for a specific timeperiod. You can change the timeperiod values as per your need.
You can run the query [here](https://ide.bitquery.io/transactions-in-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transactions(
      time:{since:"2025-07-25T00:00:00Z" till:"2025-07-25T01:00:00Z"}
      options: {limit: 10, desc: ["transactionIndex", "block.height"]}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```

## Transactions of an address for a specific timeperiod

This below query will get you the transactions of an address for a specific timeperiod. You can change the address and timeperiod values as per your need.
You can run the query [here](https://ide.bitquery.io/transactions-of-an-address-in-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transactions(
      time: {since: "2025-07-19T01:00:00Z" till:"2025-07-19T21:00:00Z"}
      options: {limit: 100, desc: ["transactionIndex", "block.height"]}
      signer: {is: "9vKgXDW6N3S4QDdqswq7m9U9eWp839HanvQ7RhUTtKZ1"}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transfers examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
