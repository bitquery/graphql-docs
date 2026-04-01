---
title: "Inputs & Outputs API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics."
keywords: [inputs outputs API examples, GraphQL queries, Bitquery]
---

# Inputs and Outputs

## Aggregate FlowToken Daily Volumes from Flow Inputs and Outputs

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

