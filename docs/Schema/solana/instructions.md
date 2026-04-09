---
title: "Solana Instructions API"
description: "Query Solana instructions data using Bitquery GraphQL API. Get program instructions, programs, and instruction-level data."
keywords: ["Solana API", "Solana Instructions", "Bitquery", "GraphQL"]
---

# Instructions

The Solana instructions API allows you to query information about instructions that have been executed on the Solana blockchain. This information includes the program that executed the instruction, the accounts that were affected by the instruction, the data that was passed to the instruction, and the log message that was produced by the instruction.

Instructions are the fundamental unit of execution on Solana—every transaction contains one or more instructions, each targeting a specific program (smart contract). Querying at the instruction level lets you analyze DeFi protocol interactions, NFT minting calls, and program-specific logic that transfer-level queries alone cannot reveal. Use this API for program analytics, debugging failed transactions, and building dashboards that break down activity by program and instruction type.

The schema includes the following fields:

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


<details>

<summary>Filtering Instructions</summary>

</details>

## Fields

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Solana Coinpath API](https://docs.bitquery.io/v1/docs/Schema/solana/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
