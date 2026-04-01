---
title: "Stellar Effects API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar ledger effects. Get state changes, operations, and transaction links."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Stellar Effects API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Stellar ledger effects. Get state changes, operations, and transaction links."/>
<meta name="keywords" content="Stellar API examples, Stellar GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Effects API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Stellar ledger effects. Get state changes, operations, and transaction links." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Effects API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Stellar ledger effects. Get state changes, operations, and transaction links." />
</head>

# Stellar Effects API

All changes on the ledger are recorded as effects including changes after transactions, trades and so on. In this section we will see how to use Bitquery API to get effects information.

## Latest Effects

This query retrieves the latest effects from the Stellar ledger on a particular date. Effects represent state changes on the ledger and can include various types of operations, such as account creation, payments, and trades. 

```
query MyQuery {
  stellar(network: stellar) {
    effects(options: {limit: 10, desc: "timestamp.time"}, date: {is: "2024-07-16"}) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}


```

## Search a Particular Effect

This query retrieves effects of a specific type using `effect: {is:}` , such as "account_credited", which indicates that an account was credited with an asset. You can run the query [here](https://ide.bitquery.io/Latest-Account-Credit-Effect-on-Stellar)

```
query MyQuery {
  stellar(network: stellar) {
    effects(
      options: {limit: 10, desc: "timestamp.time"}
      date: {is: "2024-07-16"}
      effect: {is: "account_credited"}
    ) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}

```

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar liquidity pool examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-liquiditypool-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
