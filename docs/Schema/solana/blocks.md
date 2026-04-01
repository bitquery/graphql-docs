---
title: "Solana Blocks API"
description: "Query Solana blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Solana API", "Solana Blocks", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Solana Blocks API"/>
<meta name="description" content="Query Solana blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."/>
<meta name="keywords" content="Solana API, Solana Blocks, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Blocks API" />
<meta property="og:description" content="Query Solana blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Blocks API" />
<meta property="twitter:description" content="Query Solana blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
</head>

# Blocks

The Blocks API returns information about blocks on the Solana network. The fields in the schema include: 

```
query ($network: SolanaNetwork!,$from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      date: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      transactionCount
      parentSlot
      rewards
      blockHash
    }
  }
}
<!-- Parameters -->
{
  "network": "solana",
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Blocks</summary>

`rewards`: This field allows you to filter blocks by the amount of rewards they contain. 

`previousBlockHash`: This field allows you to filter blocks by their previous block hash.

`parentSlot`: This field allows you to filter blocks by their parent slot. 

`options`: Filter returned data by ordering, limiting, and constraining it.

`height`: This field allows you to filter blocks by their height. 

`date`: This field allows you to filter blocks by their date. 

`blockHash`: This field allows you to filter blocks by their block hash. 

`any`: This field allows you to filter blocks by any of the other fields (OR logic). 

`transactionCount`: This field allows you to filter blocks by the number of transactions they contain. 
</details>

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Solana Coinpath API](https://docs.bitquery.io/v1/docs/Schema/solana/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
