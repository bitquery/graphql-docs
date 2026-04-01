---
title: "Tron Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron blocks. Get recent blocks, witnesses, timestamps, and parent hashes."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Tron Blocks API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Tron blocks. Get recent blocks, witnesses, timestamps, and parent hashes."/>
<meta name="keywords" content="Tron API examples, Tron GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Blocks API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Tron blocks. Get recent blocks, witnesses, timestamps, and parent hashes." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Blocks API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Tron blocks. Get recent blocks, witnesses, timestamps, and parent hashes." />
</head>

# Blocks API


Our Tron API provides all details regarding blocks from Tron Blockchain.

## Get Transaction Trie Root of Block

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

This query returns transaction trie root from the block.

## Filter by Parent Block Hash of Block

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

This query filter block data by parent block hash of that block.

## Filter by Witness address of the Block

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

This query allows us to filter block by it's witness address.

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transactions examples](https://docs.bitquery.io/v1/docs/Examples/tron/transaction)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

