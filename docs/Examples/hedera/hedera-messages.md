---
title: "Hedera Messages API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Hedera network messages. Get memos, node accounts, and timestamps."
keywords: [Hedera API examples, Hedera GraphQL queries, Bitquery]
---

# Hedera Messages API


In this section we will see how to get information on messages on Hedera.

## Latest Messages

This query retrieves the latest messages on the Hedera network.

```
query MyQuery {
  hedera(network: hedera) {
    messages(date: {is: "2024-07-22"}, options: {limit: 10, desc: "time.time"}) {
      feeCurrency {
        name
      }
      transactionHash
      topicRunningHash
      result {
        id
        name
      }
      payerAccount {
        num
        id
      }
      success
      time {
        time
      }
      message
      memo
      nodeAccount {
        id
        num
      }
    }
  }
}

```

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Hedera inputs/outputs examples](https://docs.bitquery.io/v1/docs/Examples/hedera/hedera-io)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
