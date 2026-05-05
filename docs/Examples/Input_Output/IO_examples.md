---
title: "Inputs & Outputs API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics."
keywords: [inputs outputs API examples, GraphQL queries, Bitquery]
---

# Inputs and Outputs

## Aggregate FlowToken Daily Volumes from Flow Inputs and Outputs

:::caution Deprecated
Bitquery has stopped supporting the Flow blockchain. This example is preserved for reference but the data is no longer updated.
:::

Aggregate daily spend and receive volumes for a token using the `outputs` (spend) and `inputs` (receive) APIs with `amount(calculate: sum)` grouped by date. Uses [aliases](/docs/query-features/aliases) to label the two directions in one query.

**Variations:** Change `currency` for a different token. Adjust the `date` range. Switch to other chains that use the inputs/outputs model (e.g., Bitcoin with `bitcoin` schema). Add `count` for transaction counts per day.

```
query MyQuery {
  flow(network: flow) {
    spendvolume: outputs(
      date: {before: "2023-07-10", after: "2023-07-01"}
      currency: {is: "FlowToken"}
    ) {
      amount(calculate: sum)
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
      }
    }
    recievevolume: inputs(
      date: {before: "2023-07-10", after: "2023-07-01"}
      currency: {is: "FlowToken"}
    ) {
      amount(calculate: sum)
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
      }
    }
  }
}

```

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [UTXO input/output examples](https://docs.bitquery.io/v1/docs/Examples/Transactions/input-output-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

