---
title: "Solana Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana addresses. Get balances, annotations, and multi-address lookups."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

# Solana Address API

The Solana Address API returns balance, annotation, and address metadata for Solana wallets. Use it for quick balance lookups and multi-address queries.

## Get Latest Solana Address Balance

Look up the current SOL balance and annotation for a single Solana address. [Run query](https://ide.bitquery.io/address-balance-api).

**Variations:** For SPL token balances, use the [transfers API](/docs/Examples/Solana/transfers) with aggregation instead. Combine with the multi-address query below for batch lookups.

```
query MyQuery {
  solana {
    address(address: {is: "AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv"}) {
      address
      annotation
      balance
    }
  }
}
```

## Query Multiple Solana Address Balances

Batch-query SOL balances for multiple Solana addresses in one request using `address: {in: [...]}`. Returns balance and annotation for each address. [Run query](https://ide.bitquery.io/latest-balances-of-multiple-addresses).

**Variations:** Add or remove addresses from the array. Combine with the [transfers API](/docs/Examples/Solana/transfers) for per-token balances across wallets.

```
query MyQuery {
  solana {
    address(address: {in: ["AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv","u4JVgijAL87QWhuig6YNnJCoxgEKbYZt1q3nPbfbUBC","9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}) {
      address
      annotation
      balance
    }
  }
}
```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transfers examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
