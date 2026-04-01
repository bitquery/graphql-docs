---
title: "Inputs & Outputs API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics."
keywords: [inputs outputs API examples, GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Inputs & Outputs API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics."/>
<meta name="keywords" content="inputs outputs API examples, GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Inputs & Outputs API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Inputs & Outputs API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for chain inputs and outputs. Get spend volume, currencies, and Flow token metrics." />
</head>

# Inputs and Outputs

## Getting Spend Volume of a Token

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

