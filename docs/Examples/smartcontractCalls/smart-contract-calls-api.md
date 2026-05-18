---
title: "Smart Contract Calls API Examples"
description: "Example GraphQL queries for EVM smart contract calls. Get methods, arguments, call depth, and callers."
keywords: [smart contract API examples, GraphQL queries, Bitquery]
---

# Smart contract call API

The Smart Contract Calls API returns parsed method calls with decoded arguments, caller addresses, gas costs, and call depth for all supported blockchains. Use it to monitor contract interactions, debug transactions, or analyze protocol usage.

## Get Recent Ethereum Smart Contract Calls with Callers and Arguments

Retrieve the latest smart contract method calls on Ethereum with decoded arguments, caller address, call depth, and method signature. The `external: true` filter returns only top-level calls (not internal sub-calls triggered by other contracts).

**Variations:** Remove `external: true` to include internal calls at every depth. Add `smartContractAddress` for a specific contract or `smartContractMethod` for a specific function. Switch `network` to any EVM chain. Use [count aggregation](/docs/query-features/aggregation/count) to measure call frequency.

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-calls-on-Ethereum)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-25", till: "2023-07-25" }
      external: true
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: caller {
        address
        annotation
      }
      arguments {
        argument
        value
      }
      callDepth
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractMethod {
        name
        signatureHash
      }
      transaction {
        hash
      }
    }
  }
}
```

## Get Ethereum Smart Contract Calls for One Contract Address

Get all method calls made to a specific smart contract within a date range. Returns method names, signature hashes, gas costs in ETH and USD, and transaction hashes — useful for monitoring a contract's on-chain activity.

**Variations:** Add `smartContractMethod: {is: "transfer"}` to filter by function. Use `gasValue(calculate: sum)` for total gas spent. Apply [sorting](/docs/query-features/filtering/sorting) by `gasValue` to find the most expensive calls.

[Open this query on IDE](https://ide.bitquery.io/Calls-for-a-specific-ethereum-smart-contract)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
      date: { since: "2023-07-18", till: "2023-07-23" }
      smartContractAddress: { is: "0x1a0ad011913a150f69f6a19df447a0cfd9551054" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## List Latest Ethereum Smart Contract Calls Grouped by Method Name

List the distinct methods called on a smart contract using `limitBy: {each: "smartContractMethod.name", limit: 1}`. This returns one example call per method — useful for discovering what functions a contract exposes and how they are used.

**Variations:** Increase the `limit` in `limitBy` to see more calls per method. Remove `limitBy` for all calls. Add [count aggregation](/docs/query-features/aggregation/count) grouped by method name to rank functions by usage frequency.

[Open this query on IDE](https://ide.bitquery.io/List-of-smart-contract-calls-of-a-smart-contract)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {
        desc: "block.timestamp.time"
        limit: 10
        offset: 0
        limitBy: { each: "smartContractMethod.name", limit: 1 }
      }
      date: { since: "2023-07-18", till: "2023-07-25" }
      smartContractAddress: { is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## Get Ethereum getReserves Calls from a Specific Caller Contract

Filter calls by both `caller` (the contract making the call) and `smartContractMethod` (the function being invoked). This example finds all `getReserves` calls made by the Uniswap Universal Router — useful for tracking how a protocol reads liquidity pool reserves.

**Variations:** Change the method name to any function (e.g., `swap`, `transfer`, `approve`). Add `smartContractAddress` to also filter by the target contract. Use [limit/offset](/docs/query-features/filtering/options) for pagination.

[Open this query on IDE](https://ide.bitquery.io/specific-smart-contract-call-by-a-specific-contact-on-ethereum)

```
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2023-07-18", till: "2023-07-24"}
      caller: {is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"}
      smartContractMethod: {is: "getReserves"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}

```

## Get Ethereum Smart Contract Calls Where One Address Is Caller

List all contract calls initiated by a specific address (EOA or contract). Returns decoded arguments, method signatures, and gas costs for each call — useful for auditing what a wallet or contract has interacted with.

**Variations:** Add `smartContractAddress` to see calls to a specific target. Use `external: true` for top-level calls only. Apply [aggregations](/docs/query-features/aggregation/) like `count` grouped by `smartContract.address` to rank interaction targets.

[Open this query on IDE](https://ide.bitquery.io/calls-details-for-ethereum-smart-contract-call)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
      date: { since: "2023-07-18", till: "2023-07-20" }
      caller: { is: "0x1a0ad011913a150f69f6a19df447a0cfd9551054" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      arguments {
        argument
        value
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## List BSC Smart Contract Parsed Arguments by Block and Transaction

Retrieve parsed smart contract arguments for a specific contract on BSC. The `arguments` API returns each argument name and value along with the method signature, sorted by block height and transaction hash.

**Variations:** Add `smartContractEvent` to filter by event instead of method. Use `argument: {is: "tokenAddress"}` to find calls with a specific argument. Switch `network` to any EVM chain.

```graphql
{
  ethereum(network: bsc) {
    arguments(
      options: { desc: ["block.height", "transaction.hash"], limit: 10 }
      smartContractAddress: { is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad" }
    ) {
      block {
        height
      }
      argument {
        name
      }
      value {
        value
      }
      transaction {
        hash
      }
      smartContract {
        address {
          address
        }
      }
      smartContractSignature {
        __typename
        ... on Method {
          name
          signature
        }
      }
    }
  }
}
```

## Arguments Filtering

Filter by a specific argument name and value to find exact contract interactions. This query finds `execute` calls where the `deadline` argument equals a specific timestamp — useful for pinpointing transactions with known parameters.

```
{
  ethereum(network: bsc) {
    arguments(
      options: {desc: ["block.height", "transaction.hash"], limit: 10}
      smartContractAddress: {is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"}
    smartContractMethod:{is: "execute"}
      argument: {is: "deadline"}
      value: {is: "1690285647"}
    ) {
      block {
        height
      }
      argument {
        name
      }
      value {
        value
      }
      transaction {
        hash
      }
      smartContract {
        address {
          address
        }
      }
      smartContractSignature {
        __typename
        ... on Method {
          name
          signature
        }
      }
    }
  }
}

```

:::note
V1 supports basic argument filtering. For advanced argument aggregation and multi-condition filtering, use the [V2 APIs](https://docs.bitquery.io/docs/examples/calls/smartcontract/) which offer richer capabilities.
:::

## Get Ethereum Blacklist Smart Contract Calls for a Token Contract

Find all `blacklist` method calls on a token contract to see which addresses were restricted. Uses `smartContractMethod: {is: "blacklist"}` with query variables for the contract address — useful for compliance monitoring and token security audits.

**Variations:** Change the method name to `pause`, `unpause`, `setFee`, or any admin function. Filter by `caller` to see who triggered the blacklist. Add `success: false` to find failed blacklist attempts.

You can run the query [here](https://ide.bitquery.io/PEPE-Blacklist-calls)

```
query ($network: EthereumNetwork!, $address: String!, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {limit: $limit, offset: $offset}
      smartContractAddress: {is: $address}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
      }
      smartContractMethod(smartContractMethod: {is: "blacklist"}) {
        name
        signature
      }
      amount
      date {
        date
      }
      transaction {
        hash
        txFrom {
          address
          annotation
        }
      }
      block {
        timestamp {
          time
        }
      }
      caller {
        address
        annotation
      }
      success
      gasValue
      external
    }
  }
}
{
  "limit": 30,
  "offset": 0,
  "network": "ethereum",
  "address": "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  "dateFormat": "%Y-%m-%d"
}



```

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Smart contract events examples](https://docs.bitquery.io/v1/docs/Examples/smartcontractEvents/smart-contract-events-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)