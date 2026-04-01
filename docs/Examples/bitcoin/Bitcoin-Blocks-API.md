---
title: "Bitcoin Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin block data. Get recent blocks, height, difficulty, transaction counts, and timestamps."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Blocks API

Our Bitcoin Blocks API provides all the information related to blocks produced on Bitcoin network.

## Retrieve the 10 Most Recent Blocks

```
query  {
  bitcoin(network: bitcoin) {
    blocks(options: {desc: "height", limit: 10}, date: {after: "2023-10-10"}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      difficulty
      transactionCount
      blockSizeBigInt
    }
  }
}


```

This query retrieves details about the 10 most recent blocks on the Bitcoin blockchain. It includes information like block hash, height, difficulty, block size, and timestamp for each block. The results are ordered by block heights in descending order.

## Get the Blocks with maximum Transactions

```
query  {
  bitcoin(network: bitcoin) {
    blocks(options: {limit: 10, desc: "transactionCount"}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      difficulty
      maximum(of: transaction_count, get: transaction_count)
      transactionCount
    }
  }
}

```

This query fetches details about the 10 most transaction-laden blocks on the Bitcoin blockchain. We can see the difficulty, timestamp and number of transaction in each block.

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
