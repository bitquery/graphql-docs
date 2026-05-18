---
title: "Non-EVM Smart Contract Events API Examples"
description: "Example GraphQL queries for events on non-EVM chains like Flow. Get mint, burn, and custom event data."
keywords: [smart contract API examples, GraphQL queries, Bitquery]
---

# Events on Non-EVM Chains

The Smart Contract Events API supports non-EVM blockchains including Flow and Tron. These examples show how to query events like token mints, burns, and DeFi protocol actions on non-EVM chains.

## Token Mint and Burn Events on Flow

:::caution Deprecated
Bitquery has stopped supporting the Flow blockchain. This example is preserved for reference but the data is no longer updated.
:::

Count the total number of `TokensMinted` and `TokensBurned` events on Flow using the `type: {in: [...]}` filter. Returns aggregate counts per event type. [Run query](https://ide.bitquery.io/TokensMinted-in-Flow).

**Variations:** Change the event types to any Flow event names. Add `date` for a specific time period. Use `count(uniq: transactions)` for unique transaction counts.

```
{
  flow{
    events(
      type: {in: ["TokensMinted", "TokensBurned"]}
    ){
      count
      type
    }
  }
}

```

## Borrow events on Tron DAO

Retrieve the latest borrow events from JustLend on Tron by filtering on the event signature hash. Returns the event name, transaction sender, hash, and block height — useful for monitoring DeFi lending activity on Tron. [Run query](https://ide.bitquery.io/TRON-borrow-events-on-JustLend).

**Variations:** Change the event signature hash for other JustLend events (e.g., Supply, Liquidation). Add `date` or `time` filters for a specific period. Use [limit/offset](/docs/query-features/filtering/options) for pagination.

```
query MyQuery {
  tron {
    smartContractEvents(options: {limit: 10, desc: "block.height"}) {
      smartContractEvent(
        smartContractEvent: {is: "2dd79f4fccfd18c360ce7f9132f3621bf05eee18f995224badb32d17f172df73"}
      ) {
        name
      }
      txFrom {
        address
      }
      txHash
      block {
        height
      }
    }
  }
}


```

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [EVM smart contract events examples](https://docs.bitquery.io/v1/docs/Examples/smartcontractEvents/smart-contract-events-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)