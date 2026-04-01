---
title: "Bitcoin Omni API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin Omni Layer data. Get Omni transactions and transfers by address."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Bitcoin OmniTransactions and OmniTransfers API

## Get the Latest Omni Transaction on Bitcoin

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    omniTransactions(
      options: {desc: "block.height", limit: 10}
      date: {after: "2023-11-20"}
    ) {
      block {
        height
      }
      blockHash
      date {
        date
      }
      feeValue(in: USD)
      hash
      index
      txSender
    }
  }
}

```

This query retrieves the latest 10 omnitransaction on the bitcoin blockchain, providing details as such block height, blok time, fee value, transaction hash and the sender of the transaction

## Get all the Omni Transfers for a particular Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    omniTransfers(options: {desc: "block.height"}, txSender: {is: "ADDRESS_HERE"}) {
      block {
        height
      }
      blockHash
      transferFrom
      transferTo
    }
  }
}

```

This query provides all the omni transfers from a particular wallet address which is mentioned as “ADDRESS_HERE” and provides the block hash, transfer initiator and transfer receiver for each transfer

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
