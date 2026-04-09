---
title: "Cosmos Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos coinpath flows. Trace funds between addresses with depth and amounts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Coinpath API

Trace fund flows between Cosmos addresses using the Coinpath API to analyze financial relationships and transaction paths.

## Trace Cosmos Coinpath Outflows from an Address

Trace outgoing fund flows from a specific Cosmos address. Returns the 10 most recent coinpath transactions with USD amounts, block info, currency details, and sender/receiver addresses.

**Variations:** Change `initialAddress` to trace a different wallet, adjust the `date` filter for a wider window, or increase `limit`. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for depth options.

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
    ) {
      amount(in: USD)
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
        value
      }
    }
  }
}
```

## Trace Cosmos Coinpath Flow Between Two Addresses

Analyze the fund flow between two specific Cosmos addresses. Returns coinpath transactions from one address to another, with amounts in USD, block details, and currency info.

**Variations:** Swap `initialAddress` and `receiver` to trace the reverse direction. Adjust the `date` range or remove it for all-time flows. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for multi-hop depth tracing.

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
      receiver: {is: "cosmos1a6usu3y3t5fcxa4kdtv4cgj7cmav7j0l6uzuvq"}
    ) {
      amount(in: USD)
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
        value
      }
    }
  }
}
```

## Get Cosmos Coinpath Transfers Above Minimum Amount Between Addresses

Filter coinpath transactions between two addresses by a minimum transfer amount. Only returns transactions of 200 or more, useful for focusing on significant fund movements.

**Variations:** Adjust `minimumTxAmount` to set a different threshold. Remove the `receiver` filter to see all outflows above the minimum. See [query features](/docs/category/query-features) for additional filtering.

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10, minimumTxAmount: 200}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
      receiver: {is: "cosmos1a6usu3y3t5fcxa4kdtv4cgj7cmav7j0l6uzuvq"}
    ) {
      amount(in: USD)
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
        value
      }
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Staking examples](https://docs.bitquery.io/v1/docs/Examples/Staking/stake_examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)