---
title: "Tron Smart Contract Arguments API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron smart contract call arguments. Filter by method, block, and transaction index."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Arguments API

Query Tron smart contract call and event arguments, including argument names, types, values, and associated blocks.

## List Latest Tron Smart Contract Events and Call Arguments

Fetch the most recent smart contract call and event arguments on Tron, including argument name, type, value, call depth, and block details.

**Variations:** Add a `smartContractAddress` filter to scope to a specific contract, or adjust `limit` for more results.

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

## Filter Tron Arguments by Transfer Event Name

Retrieve only the arguments associated with `Transfer` events on Tron smart contracts.

**Variations:** Replace `"Transfer"` with any event name (e.g., `"Approval"`), or use the `in` operator to match multiple event names at once.

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

## Filter Tron Transfer Arguments After a Minimum Block Height

Fetch `Transfer` event arguments that occurred after a specific Tron block height, useful for incremental data syncing.

**Variations:** Combine `height` with `date` filters for tighter time windows, or change the event name to track other contract events.

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

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron smart contract calls examples](https://docs.bitquery.io/v1/docs/Examples/tron/smartContractCalls)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)