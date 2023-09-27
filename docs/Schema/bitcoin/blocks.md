---
title: Bitcoin Blocks API
---

<head>
<meta name="title" content="Bitcoin Blocks API"/>
<meta name="description" content="Get information on blocks on the Bitcoin blockchain. Also, get information on blocks for tokens on the Bitcoin blockchain."/>
<meta name="keywords" content="Bitcoin api, Bitcoin python api, Bitcoin nft api, Bitcoin scan api, Bitcoin matic api, Bitcoin api docs, Bitcoin crypto api, Bitcoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin Blocks API" />
<meta property="og:description" content="Get information on blocks on the Bitcoin   blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Blocks API" />
<meta property="twitter:description" content="Get blocks information on the Bitcoin blockchain. Also, get blocks information for tokens or NFTs on the Bitcoin blockchain." />
</head>

The `blocks` field allows us to retrieve details about the blocks from the Bitcoin network.

Here is an example that demonstrates how to retrieve blocks data:

```
query MyQuery {
  bitcoin {
    blocks(options: {limit: 10, desc: "timestamp.iso8601"}) {
      blockHash
      blockSize
      blockSizeBigInt
      blockStrippedSize
      blockVersion
      blockWeight
      chainwork
      difficulty
      height
      timestamp {
        iso8601
      }
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

Blocks can be filtered using the following arguments:

- `any`:
- `blockHash`: Filter by block hash
- `blockSize`: Filter by block size
- `blockStrippedSize`: Filter by stripped size of block
- `blockVersion`: Filter by version of the block
- `blockWeight`: Filter by block weight
- `date`: Filter by selecting time in range, list or just date
- `difficulty`: Filter by difficulty of the network
- `height`: Filter by selecting height of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `time`: Filter by selecting time in range, list or just time
- `transactionCount`: Filter by transction count in the block

</details>

The following fields are available for the `blocks`:

- `any`:
- `blockHash`: returns hash of block
- `blockSize`: returns size of the block
- `blockSizeBigInt`: returns size of the block in `BigInt` format
- `blockStrippedSize`: returns stripped size of block
- `blockVersion`: returns version of block
- `blockWeight`: returns block weight
- `chainwork`: returns chainwork for Bitcoin
- `count`: returns aggregate count of blocks
- `countBigInt`: returns aggregate count of blocks in `BigInt` format
- `date`: returns date when block was mined
- `difficulty`: returns difficulty
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `height`: returns height of the block
- `maximum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/bitcoin-blocks-measureable) of Bitcoin Blocks
- `medianTime`: returns median timestamp for block
- `minimum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/bitcoin-blocks-measureable) of Bitcoin Blocks
- `timestamp`: returns block timestamp
- `transactionCount`: returns number of transactions in block
