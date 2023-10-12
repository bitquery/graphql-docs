---
title: Dash Blocks API
---

<head>
<meta name="title" content="Dash Blocks API"/>
<meta name="description" content="Get information on blocks on the Dash blockchain. Also, get information on blocks for tokens on the Dash blockchain."/>
<meta name="keywords" content="Dash api, Dash python api, Dash nft api, Dash scan api, Dash matic api, Dash api docs, Dash crypto api, Dash blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dash Blocks API" />
<meta property="og:description" content="Get information on blocks on the Dash   blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dash Blocks API" />
<meta property="twitter:description" content="Get blocks information on the Dash blockchain. Also, get blocks information for tokens or NFTs on the Dash blockchain." />
</head>

The `blocks` field allows us to retrieve details about the blocks from the Dash network.

Here is an example that demonstrates how to retrieve blocks data:

```
query MyQuery {
  bitcoin(network: dash) {
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
- `chainwork`: returns chainwork for Dash
- `count`: returns aggregate count of blocks
- `countBigInt`: returns aggregate count of blocks in `BigInt` format
- `date`: returns date when block was mined
- `difficulty`: returns difficulty
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `height`: returns height of the block
- `maximum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/Dash-blocks-measureable) of Dash Blocks
- `medianTime`: returns median timestamp for block
- `minimum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/Dash-blocks-measureable) of Dash Blocks
- `timestamp`: returns block timestamp
- `transactionCount`: returns number of transactions in block
