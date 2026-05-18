---
title: "Tron Blocks API Examples"
description: "Example GraphQL queries for Tron blocks. Get recent blocks, witnesses, timestamps, and parent hashes."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Blocks API

Retrieve Tron block data including trie roots, witnesses, timestamps, and parent block hashes.

## List Tron Block Trie Roots, Witnesses, and Timestamps

Fetch the latest Tron blocks with their transaction trie roots, witness addresses and annotations, signatures, and timestamps.

**Variations:** Adjust the `date` filter or increase `limit` to retrieve more blocks. Add a `height` filter to target a specific block range.

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

## Filter Tron Blocks by Parent Block Hash

Find a Tron block by its parent block hash, useful for traversing the chain or verifying block lineage.

**Variations:** Replace the hash value to look up a different block's children, or combine with a [date filter](/docs/category/query-features) to narrow results.

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
      parentBlockHash: {is: "00000000032eb5f8fde3751e4c388bc489ea7b456f1fbbe33f1471a274349cee"}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

## Filter Tron Blocks by Witness Address

Retrieve Tron blocks produced by a specific witness (super representative) address.

**Variations:** Change the `witness` address to query a different super representative, or remove the filter to see all witnesses.

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
      witness: {is: "TTMNxTmRpBZnjtUnohX84j25NLkTqDga7j"}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transactions examples](https://docs.bitquery.io/v1/docs/Examples/tron/transaction)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
