---
title: "Bitcoin Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin coinpath and fund flow data. Track transfers between addresses, depth, direction, and transaction paths."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Coinpath API

The Bitcoin Coinpath API traces the flow of funds between addresses on the Bitcoin blockchain. Use it for AML investigations, source-of-funds verification, and mapping transaction paths between wallets. See [Coinpath Explained](/docs/building-queries/Coinpath-Explained/Overview) for a detailed guide.

import VideoPlayer from "../../../src/components/HomepageFeatures/videoplayer.js";

## Explore Bitcoin Coinpath Flow from a Seed Address

[Run API](https://ide.bitquery.io/Destination-of-Funds-from-a-Specific-Address-on-Bitcoin)

```
{
  bitcoin(network: bitcoin) {
    coinpath(
      initialAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
      date: {after: "2023-10-10"}
      options: {limit: 10, asc: "block.height", seed: 10}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
      currency {
        name
        address
      }
    }
  }
}

```

Trace the outbound fund flow from a seed address. Returns the direct recipients, amounts in USD, block heights, and transaction hashes. The `seed` option controls the starting point for multi-hop tracing.

**Variations:** Add `depth: {lteq: N}` for multi-hop tracing. Use `options: {direction: inbound}` to trace funds flowing into the address instead. Adjust `date` for a specific time window.

## Bitcoin Coinpath Inflows to a Specific Receiver Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    coinpath(
      date: {after: "2023-10-10"}
      options: {limit: 10, desc: "block.height"}
      receiver: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
    }
  }
}

```

Track all incoming fund paths to a specific Bitcoin address using the `receiver` filter. Returns sender addresses, USD amounts, and transaction hashes — useful for identifying who sent funds to a wallet.

**Variations:** Swap `receiver` for `sender` to trace outflows. Add `initialAddress` to find paths between two specific addresses. Adjust `limit` and `date` for different result sets.

## Bitcoin Coinpath Between Initial and Receiver Addresses

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    coinpath(
      date: {after: "2023-10-10"}
      options: {limit: 10, desc: "block.height"}
      receiver: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
      initialAddress: {is: "bc1pu349c0fvmqnv5s0aj3aracrsvn696hzhuyyukn6r5c9h03y88plql53h5h"}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
    }
  }
}

```

Trace the fund flow between two specific Bitcoin addresses by combining `initialAddress` and `receiver` filters. Returns the transaction paths, amounts, and block details — the standard pattern for verifying whether funds moved from address A to address B.

**Variations:** Increase `limit` for more results. Add `depth: {lteq: N}` for multi-hop paths. Adjust `date` for different time periods. Combine with the inbound/outbound queries above for comprehensive fund-flow analysis.

## Video Tutorial | How to Trace Bitcoin Fund Flows with Coinpath API

<VideoPlayer url="https://www.youtube.com/watch?v=pEVNAhfEOJ4" />

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin address API examples](https://docs.bitquery.io/v1/docs/Examples/bitcoin/bitcoin-address-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)