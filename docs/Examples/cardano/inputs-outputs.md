---
title: "Cardano Inputs and Outputs API Examples"
description: "Example GraphQL queries for Cardano inputs and outputs. Compute address balances from UTXOs and list transfers in a date range."
keywords:
  [
    Cardano API examples,
    Cardano GraphQL queries,
    Bitquery,
    Cardano inputs,
    Cardano outputs,
    UTXO,
    eUTXO,
  ]
---

# Cardano Inputs and Outputs API

Cardano uses an **eUTXO** model, so balances and activity for an address are reconstructed from its `inputs` (funds spent) and `outputs` (funds received). These APIs return raw UTXO-level data with transaction hashes, indexes, values in ADA and USD, and timestamps.

## Compute Cardano Address Balance via Inputs and Outputs

Calculate a Cardano address's activity by summing all `outputs` (received) and subtracting all `inputs` (spent) for ADA. Returns total counts, ADA values, USD-equivalent values, and first/last active dates. The balance equals `outputs.value - inputs.value`.

**Variations:** Add `date: {since: ..., till: ...}` to scope the window, pass `inputAddress: {in: [...]}` and `outputAddress: {in: [...]}` to aggregate across multiple addresses in one call, or remove the `currency` filter to include native tokens alongside ADA. Compare with the `addressStats` shortcut in the [address examples](/docs/Examples/cardano/address).

```
{
  cardano(network: cardano) {
    inputs(
      currency: {is: "ADA"}
      inputAddress: {is: "addr1v9m34968vfwya2dydafkaq48ag9pzerznwjf0ewu4jj5vfsvgmyhk"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
    outputs(
      currency: {is: "ADA"}
      outputAddress: {is: "addr1v9m34968vfwya2dydafkaq48ag9pzerznwjf0ewu4jj5vfsvgmyhk"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}
```

## List Cardano Outputs Received by an Address in a Date Range

Return individual UTXO outputs received by a Cardano address within a specific time window. Includes block height, timestamp, transaction hash, output index, output direction, and values in ADA and USD. Ideal for transaction reports and wallet activity feeds.

**Variations:** Swap `outputs` for `inputs` (and `outputAddress` for `inputAddress`) to see outgoing UTXOs, remove the `currency` filter to include native-token transfers, or change `limit` / `offset` for pagination. Drop the `currency` filter entirely to see all asset types transferred.

```
{
  cardano(network: cardano) {
    outputs(
      currency: {is: "ADA"}
      date: {since: "2022-10-19", till: "2022-10-26T23:59:59"}
      outputAddress: {is: "addr1qxz3ve4caaywwg6q82ax9l5xknyc7juvwwsw20cpugyz5gv9zent3m6guu35qw46vtlgddxf3a9ccuaqu5lsrcsg9gss69fhxw"}
      options: {desc: ["block.height", "outputIndex"], limit: 10, offset: 0}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Inputs and Outputs schema](https://docs.bitquery.io/v1/docs/Schema/cardano/inputsOutputs)
- [Cardano Address API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/address)
- [Cardano Coinpath API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)