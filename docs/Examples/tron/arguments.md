---
title: "Tron Smart Contract Arguments API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron smart contract call arguments. Filter by method, block, and transaction index."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Tron Smart Contract Arguments API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Tron smart contract call arguments. Filter by method, block, and transaction index."/>
<meta name="keywords" content="Tron API examples, Tron GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Smart Contract Arguments API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Tron smart contract call arguments. Filter by method, block, and transaction index." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Smart Contract Arguments API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Tron smart contract call arguments. Filter by method, block, and transaction index." />
</head>

# Arguments API


Our Ton Arguments API provides all details regarding smart contract or event arguments on Tron Blockchain.

## Get Arguments For Latest Smart Contract Calls and Events

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return list of 10 latest arguments for smart contract calls from Tron Blockchain.

## Filter arguments by event name

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
      smartContractEvent: {is: "Transfer"}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return the arguments where name of event is `Transfer`.

## Filter Arguments by Block Height

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
      smartContractEvent: {is: "Transfer"}
      height: {gt: 53392720}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return data of arguments for `Transfer` events happened after block height of 53392720.

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron smart contract calls examples](https://docs.bitquery.io/v1/docs/Examples/tron/smartContractCalls)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)