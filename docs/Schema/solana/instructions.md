---
title: "Solana Instructions API"
description: "Query Solana instructions data using Bitquery GraphQL API. Get program instructions, programs, and instruction-level data."
keywords: ["Solana API", "Solana Instructions", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Solana Instructions API"/>
<meta name="description" content="Query Solana instructions data using Bitquery GraphQL API. Get program instructions, programs, and instruction-level data."/>
<meta name="keywords" content="Solana API, Solana Instructions, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Instructions API" />
<meta property="og:description" content="Query Solana instructions data using Bitquery GraphQL API. Get program instructions, programs, and instruction-level data." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Instructions API" />
<meta property="twitter:description" content="Query Solana instructions data using Bitquery GraphQL API. Get program instructions, programs, and instruction-level data." />
</head>

# Instructions

The Solana instructions API allows you to query information about instructions that have been executed on the Solana blockchain. This information includes the program that executed the instruction, the accounts that were affected by the instruction, the data that was passed to the instruction, and the log message that was produced by the instruction. The schema includes the following fields:

```
query ($network: SolanaNetwork!, $signature: String!) {
  solana(network: $network) {
    instructions(signature: {is: $signature}) {
      program {
        id
        name
        parsedName
        parsed
      }
      accountsCount
      data {
        hex
      }
      log {
        consumed
        logs
        result
        totalGas
        instruction
      }
      action {
        name
        type
      }
      externalAction {
        type
        name
      }
      externalProgram {
        id
        name
        parsed
        parsedName
      }
      transaction {
        transactionIndex
        success
        signature
        feePayer
      }
    }
  }
}
<!-- Parameters -->
{
  "signature": "126VTE4UyQJU7FR68aeaFno11WMYUYX2SRn1dVVT83beQnP3sY2hpHyP2uRgni4u3a2jR2kRnGqs2br2K3V8BkE6",
  "network": "solana"
}

```


<details><summary>Filtering Instructions</summary></details>

## Fields

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Solana Coinpath API](https://docs.bitquery.io/v1/docs/Schema/solana/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
