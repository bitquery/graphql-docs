---
title: "UTXO Input Output API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for UTXO inputs and outputs on Bitcoin-family chains. Get scripts, values, and transaction links."
keywords: [UTXO API examples, Bitcoin GraphQL queries, Bitquery]
---

# UTXO Input output API

Inspect raw UTXO inputs and outputs for [UTXO](https://www.geeksforgeeks.org/what-is-unspent-transaction-output-utxo/)-based blockchains like Bitcoin, Litecoin, Dogecoin, and Zcash.


## List Bitcoin Transaction Inputs and Outputs With Scripts and Values

Get a complete breakdown of every input and output in a given Bitcoin transaction. Returns script types, addresses, values in both BTC and USD, output direction, and references to the linked spending or funding transactions.

**Variations:** Filter by `inputScriptType`, `inputAddress`, or `inputValue` to narrow results. Change `network` to `litecoin`, `zcash`, or `dogecoin` for other UTXO chains. See [query features](/docs/category/query-features) for sorting and pagination.

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
