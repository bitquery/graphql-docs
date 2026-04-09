---
title: "Tron Smart Contract Calls API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron smart contract calls. Filter by method, contract, energy usage, and arguments."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Smart Contract Calls API

Query Tron smart contract calls by method name, contract address, energy usage, and call arguments.

## List Latest Tron Smart Contract Calls With Energy Usage and Methods

Fetch the most recent smart contract calls on Tron, returning call amount, arguments, energy and net usage, method name and signature, and transaction hash.

**Variations:** Add a `smartContractAddress` filter to scope to a specific contract, or adjust `limit` and `date` for different windows.

```
{
  tron {
    smartContractCalls(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      amount
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
      energyUsageTotal
      netUsage
      smartContract {
        address {
          address
        }
      }
      smartContractMethod {
        name
        signature
      }
      txHash
    }
  }
}
```

## Filter Tron Smart Contract Calls by USDT Contract Address

Retrieve smart contract calls targeting a specific Tron contract address (here, USDT). Returns call details, energy usage, method signature, and transaction hash.

**Variations:** Replace the `smartContractAddress` with any Tron contract, or add a `smartContractMethod` filter to narrow by method name.

```
{
  tron {
    smartContractCalls(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
    ) {
      amount
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
      energyUsageTotal
      netUsage(
        smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
        smartContractMethod: {is: "Transfer"}
      )
      smartContract {
        address {
          address
        }
      }
      smartContractMethod {
        name
        signature
      }
      txHash
    }
  }
}
```

## Filter Tron USDT Contract Calls by transfer Method Name

Filter calls to a specific Tron contract down to a single method (here, `transfer`), useful for tracking token transfer invocations.

**Variations:** Change `smartContractMethod` to target other methods like `approve` or `transferFrom`.

```
{
  tron {
    smartContractCalls(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      smartContractMethod: {is: "transfer"}
    ) {
      amount
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
      energyUsageTotal
      netUsage(
        smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
        smartContractMethod: {is: "Transfer"}
      )
      smartContract {
        address {
          address
        }
      }
      smartContractMethod {
        name
        signature
      }
      txHash
    }
  }
}
```

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron smart contract events examples](https://docs.bitquery.io/v1/docs/Examples/tron/smartContractEvents)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
