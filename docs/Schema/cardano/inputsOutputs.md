---
title: "Cardano Inputs and Outputs API"
description: "Query Cardano inputs outputs data using Bitquery GraphQL API. Get transaction inputs, outputs, and UTXO-style movements."
keywords: ["Cardano API", "Cardano Inputs and Outputs", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cardano Inputs and Outputs API"/>
<meta name="description" content="Query Cardano inputs outputs data using Bitquery GraphQL API. Get transaction inputs, outputs, and UTXO-style movements."/>
<meta name="keywords" content="Cardano API, Cardano Inputs and Outputs, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cardano Inputs and Outputs API" />
<meta property="og:description" content="Query Cardano inputs outputs data using Bitquery GraphQL API. Get transaction inputs, outputs, and UTXO-style movements." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cardano Inputs and Outputs API" />
<meta property="twitter:description" content="Query Cardano inputs outputs data using Bitquery GraphQL API. Get transaction inputs, outputs, and UTXO-style movements." />
</head>

# Inputs and Outputs

The Inputs and Outputs API schema returns information about the inputs and outputs of a transaction. The schema includes the following fields:

```
query ($network: CardanoNetwork!, $hash: String!) {
  cardano(network: $network) {
    inputs(
      txHash: {is: $hash}
      options: {asc: "inputIndex", limit: 10, offset: 0}
    ) {
      inputIndex
      address: inputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
    }
    outputs(
      txHash: {is: $hash}
      options: {asc: "outputIndex", limit: 10, offset: 0}
    ) {
      outputIndex
      address: outputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
      outputDirection
    }
  }
}
<!-- Parameters -->

{
  "network": "cardano",
  "hash": "bdc00acd38d54ae9beb2ae583f8c0405aca17e509b81803f588fd719b505bc31"
}
```
<details>
<summary>Filtering Input Output</summary>

`date`
The date of the transaction.

`currency`
The currency of the value. 

`height`
The height of the block in which the transaction was included.

`inOutputIndex`
The index of the input or output within the transaction.

`inOutputTxId`
The hash of the transaction that the input or output came from.

`inputAddress`
The address of the input or output.

`inputIndex`
The index of the input within the transaction.

`inputSource`
The source of the input, either "UTxO" or "reward".

`inputValue`
The amount of ADA transferred into the input or output.

`options`
Additional options for the query, such as sorting and pagination.

`time`
The timestamp of the transaction.

`txHash`
The hash of the transaction.

`txIndex`
The index of the transaction within the block.

`outputAddress`
The address of the output.

`outputDirection`
The direction of the output, either "incoming" or "outgoing".

`outputIndex`
The index of the output within the transaction.

`outputValue`
The amount of ADA transferred out of the output.

</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
