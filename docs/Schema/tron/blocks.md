---
title: Tron Blocks API
---

<head>
<meta name="title" content="Tron Blocks API"/>
<meta name="description" content="Get information on blocks on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron api, Tron api docs, Tron crypto api, Tron blockchain api,tron network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Blocks API" />
<meta property="og:description" content="Get information on blocks on the Tron   blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Blocks API" />
<meta property="twitter:description" content="Get blocks information on the Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `blocks` field allows us to fetch details about the blocks from Tron network.

Here is an example that demonstrates how to retrieve blocks data:

```
{
  tron {
    blocks(
      date: {after: "2023-07-23"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      hash
      height
      parentBlockHash
      timestamp {
        iso8601
      }
      txTrieRoot
      version
      witness {
        address
        annotation
      }
      witnessSignature
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

- `any`:
- `blockHash`: filter by hash of the block
- `date`: filter by date of the block
- `height`: filter by block height
- `options`: filter returned data by ordering, limiting, and constraining it.
- `parentBlockHash`: fitler by parent block hash
- `time`: filter by selecting time in range, list or just time
- `version`: fitler by block version
- `witness`: filter by block witness

</details>

- `any`:
- `count`: returns aggregate count of the blocks
- `countBigInt`: returns count as `BigInt`
- `date`: returns date of the block
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `hash`: returns block hash
- `height`: returns block height
- `maximum`: returns maximum of selected measurable field of Tron Blocks
- `minimum`: returns minimum of selected measurable field of Tron Blocks
- `parentBlockHash`: returns parent block hash for the block
- `timestamp`: returns timestamp of the block
- `txTrieRoot`: returns transaction trie root hash
- `version`: returns block version
- `witness`: returns block witness
- `witnessSignature`: returns block witness signature
