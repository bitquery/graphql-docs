---
title: "UTXO Input Output API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for UTXO inputs and outputs on Bitcoin-family chains. Get scripts, values, and transaction links."
keywords: [UTXO API examples, Bitcoin GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="UTXO Input Output API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for UTXO inputs and outputs on Bitcoin-family chains. Get scripts, values, and transaction links."/>
<meta name="keywords" content="UTXO API examples, Bitcoin GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="UTXO Input Output API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for UTXO inputs and outputs on Bitcoin-family chains. Get scripts, values, and transaction links." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="UTXO Input Output API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for UTXO inputs and outputs on Bitcoin-family chains. Get scripts, values, and transaction links." />
</head>

# UTXO Input output API


[UTXO](https://www.geeksforgeeks.org/what-is-unspent-transaction-output-utxo/) based blockchains such as Bitcoin. Litecoin, Zcash as inputs and outputs. Let's see some examples. 




## All inputs and outputs of a transaction 

To check all inputs and outputs of a Bitcoin transaction, you can use the following query. Additionally, there are filters like `inputScriptType` , `inputAddress`, `inputValue`, which you can use to get transactions based on your requirements.

[Open this query on IDE](https://ide.bitquery.io/All-input-and-outputs-for-a-given-bitcoin-transaction)


```graphql
{
  bitcoin(network: bitcoin) {
    inputs(
      txHash: {is: "54b18b4232719fc7b8445bc2aa0ff5ee598a8a93b5f20334b3b445ed395be60c"}
      options: {asc: "inputIndex"}
    ) {
      inputIndex
      block {
        height
        timestamp {
          time(format: "%y-%d-%m")
        }
      }
      address: inputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      inputScript
      inputScriptType {
        pattern
        simplePattern
      }
      outputTransaction {
        hash
      }
      transaction {
        hash
      }
      value
    }
    outputs(
      txHash: {is: "54b18b4232719fc7b8445bc2aa0ff5ee598a8a93b5f20334b3b445ed395be60c"}
      options: {asc: "outputIndex"}
    ) {
      outputIndex
      address: outputAddress {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      outputDirection
      block {
        height
        timestamp {
          time(format: "%y-%d-%m")
        }
      }
      outputDirection
      outputScript
      outputScriptType {
        pattern
        short
        simplePattern
        type
      }
      reqSigs
      transaction {
        hash
      }
    }
  }
}

```

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Input/Output examples folder](https://docs.bitquery.io/v1/docs/Examples/Input_Output/IO_examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
