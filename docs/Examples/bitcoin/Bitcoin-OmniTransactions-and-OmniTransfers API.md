---
title: "Bitcoin Omni API Examples"
description: "Example GraphQL queries for Bitcoin Omni Layer data. Get Omni transactions and transfers by address."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Bitcoin OmniTransactions and OmniTransfers API

The Omni Layer is a protocol built on top of Bitcoin for creating and trading custom tokens (like USDT on Bitcoin). These APIs return Omni-specific transaction and transfer data.

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

Fetch the latest Omni Layer transactions on Bitcoin with block height, timestamp, fee in USD, transaction hash, and sender address. Ordered by block height descending.

**Variations:** Add `txSender: {is: "..."}` to filter by a specific address. Adjust `date` for different periods. Use [limit/offset](/docs/query-features/filtering/options) for pagination.

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

Get all Omni token transfers from a specific wallet address. Returns the block hash, sender (`transferFrom`), and receiver (`transferTo`) for each transfer. Replace `ADDRESS_HERE` with the target Bitcoin address.

**Variations:** Add `transferTo` filter instead of `txSender` to track incoming Omni transfers. Include `date` for a time-bounded query. Add `currency` fields if available to identify the specific Omni token.

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)