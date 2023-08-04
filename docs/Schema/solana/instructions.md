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

