---
title: "Cosmos Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos addresses. Get balances, transfers, and signer activity."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Cosmos Address API

Query Cosmos address data including native token balances, USD valuations, staking rewards, and delegation details.

## Get Cosmos Address Balance

Retrieve the native currency balance for a Cosmos address. Replace `ADDRESS_HERE` with the target address.

**Variations:** Use `balance(in: USD)` to get the USD-equivalent value. Pass an array of addresses with `address: {in: [...]}` to query multiple balances at once.

```
{
  cosmos {
    address(address: {is: "ADDRESS_HERE"}) {
      balance
    }
  }
}
```

## Get Cosmos Address Balance in USD

Get the native currency balance for a Cosmos address converted to USD. Replace `ADDRESS_HERE` with the target address.

**Variations:** Change `in: USD` to other supported fiat currencies. See [query features](/docs/category/query-features) for currency conversion options.

```
{
  cosmos {
    address(address: {is: "ADDRESS_HERE"}) {
      balance(in: USD)
    }
  }
}
```

## Get Cosmos Balances for Multiple Addresses

Query native currency balances for multiple Cosmos addresses in a single request. Replace the `ADDRESS_HERE` placeholders with actual addresses.

**Variations:** Add `balance(in: USD)` for USD values. Combine with `currency` filters for specific token balances.

```
{
  cosmos {
    address(address: {in: ["ADDRESS_HERE", "ADDRESS_HERE"]}) {
      balance
    }
  }
}
```

## Get Staking Rewards and Delegated Tokens for a Cosmos Address

Retrieve staking rewards and reward token details for a Cosmos address. Try this query in the [GraphQL IDE](https://ide.bitquery.io/cosmos-staking-reward-and-delegation0_7).

**Variations:** Add additional address fields for a complete staking overview. See [query features](/docs/category/query-features) for filtering options.

```graphql
query MyQuery {
  cosmos {
    address(address: {is: "cosmos18sqvyf4ss84qree7gndph5chmm82fgls9as2zq"}) {
      reward
      rewardTokensInfo {
        denom
        amount
      }
    }
  }
}

```

To get delegated values, use [this query](https://ide.bitquery.io/cosmos-delegate-values) to sum ATOM transfer values grouped by type.

```
{
  cosmos {
    transfers(
      currency: {is: "Atom"}
      transactionSigner: {is: "cosmos1usat8mm2uldpa79wwya4ax2uvge42yag6902sa"}
    ) {
      value(calculate: sum)
      type
    }
  }
}
```

To get delegation data across all currencies, use the following query which includes currency details in the response.

```
{
  cosmos {
    transfers(
      transactionSigner: {is: "cosmos1usat8mm2uldpa79wwya4ax2uvge42yag6902sa"}
    ) {
      value(calculate: sum)
      type
      currency{
        name
        symbol
        address
      }
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transfers examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)