---
title: "Tron Smart Contract Events API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron smart contract events. Filter by contract, event name, block, and logs."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Smart Contract Events API

Query Tron smart contract events by contract address, event name, date range, and block details.

## List Latest Tron Smart Contract Events With Arguments and Block Details

Fetch the most recent smart contract events on Tron, returning event arguments, block height and timestamp, contract address, event name and signature, and transaction hash.

**Variations:** Add a `smartContractAddress` filter to scope to a specific contract, or adjust `limit` and `date` for different windows.

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {

      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContract {
        address{
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

## Filter Tron Smart Contract Events by USDT Contract Address

Retrieve smart contract events emitted by a specific Tron contract address (here, USDT). Returns event arguments, block info, event signature, and transaction hash.

**Variations:** Replace the `smartContractAddress` with any TRC-20 contract, or add a `smartContractEvent` filter to narrow to specific event names.

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
    ) {
      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

## Filter Tron USDT Events by Transfer or Approval Event Names

Filter events for a specific Tron contract to only `Transfer` and `Approval` event types, useful for monitoring token movements and allowance changes.

**Variations:** Edit the `in` list to include other event names, or remove `smartContractEvent` to see all events for the contract.

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      smartContractEvent: {in: ["Transfer", "Approval"]}
    ) {
      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

The query retrieves the latest 10 smart contract events on the Tron network that occurred after July 31, 2023, for the smart contract "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" and can include events with names "Transfer", "Approval", and any other event names specified in the in clause. It provides details such as event arguments, block height and timestamp, smart contract address, event name and signature, and transaction hash.

## JustLend Lending Events on Tron (Borrow / Repay / Liquidation)

JustLend is the largest lending protocol on Tron. This query targets its market contracts and surfaces Borrow, Repay, and Liquidate events — the core data for any Tron lending dashboard.

```graphql
{
  tron(network: tron) {
    smartContractEvents(
      smartContractAddress: {is: "TGBr8uh9jBVHJhhkwSJvQM7qkK9VVmMjHe"}
      smartContractEvent: {in: ["Borrow", "RepayBorrow", "LiquidateBorrow"]}
      date: {after: "2026-05-01"}
      options: {desc: "block.timestamp.iso8601", limit: 50}
    ) {
      smartContractEvent {
        name
      }
      arguments {
        argument
        value
      }
      block {
        timestamp {
          iso8601
        }
        height
      }
      txHash
    }
  }
}
```

Returns the most recent 50 lending lifecycle events on a JustLend market. Swap the `smartContractAddress` for any other JustLend jToken market to scope to a specific asset.
## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron smart contract calls examples](https://docs.bitquery.io/v1/docs/Examples/tron/smartContractCalls)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
