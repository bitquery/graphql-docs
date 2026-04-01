---
title: "Tron Smart Contract Calls API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron smart contract calls. Filter by method, contract, energy usage, and arguments."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Smart Contract Calls API


Our Tron Smart Contract Calls API provides detailed information about smart contract calls executed on the Tron Blockchain.

## Get List of Latest Smart Contract Calls

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

This query retrieves the latest 10 smart contract calls on the Tron network that occurred after July 31, 2023, providing details such as call amount, arguments, block height and timestamp, energy usage, net usage, smart contract address, method name and signature, and transaction hash.

## Filter Smart Contract Calls By Contract Address

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

This query retrieves the latest 10 smart contract calls on the Tron network that occurred after July 31, 2023, for a specific smart contract address "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t". It provides details such as call amount, arguments, block height and timestamp, energy usage, net usage for the specified smart contract, smart contract address, method name and signature, and transaction hash.

## Filter Smart Contract Calls By Method Name

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

This query retrieves the latest 10 smart contract calls on the Tron network that occurred after July 31, 2023, specifically for the smart contract "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" and the method "Transfer". It provides details such as call amount, arguments, block height and timestamp, energy usage, net usage for the specified method, smart contract address, method name and signature, and transaction hash.

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron smart contract events examples](https://docs.bitquery.io/v1/docs/Examples/tron/smartContractEvents)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
