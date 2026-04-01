---
title: "Non-EVM Smart Contract Events API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for events on non-EVM chains like Flow. Get mint, burn, and custom event data."
keywords: [smart contract API examples, GraphQL queries, Bitquery]
---

# Events on Non-EVM Chains

Our Smart contract event API allows you access parsed smart contract events and arguments for all the blockchains we support. In this section let's focus on examples for chain other than ones on EVM.

## Token Mint and Burn Events on Flow

The query below retrieves the number of token `mint` and `burn` events that have been emitted.

You can find the query [here](https://ide.bitquery.io/TokensMinted-in-Flow)

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

The query below gets the latest 10 `borrow` events from the JustLend TRX DAO by using its smart contract address in the `smartContractEvent` field.

You can get the query [here](https://ide.bitquery.io/TRON-borrow-events-on-JustLend)

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
