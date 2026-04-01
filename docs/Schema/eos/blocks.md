---
title: "EOS Blocks API"
description: "Query EOS blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["EOS API", "EOS Blocks", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="EOS Blocks API"/>
<meta name="description" content="Query EOS blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."/>
<meta name="keywords" content="EOS API, EOS Blocks, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="EOS Blocks API" />
<meta property="og:description" content="Query EOS blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="EOS Blocks API" />
<meta property="twitter:description" content="Query EOS blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
</head>

# EOS Blocks API

Bitquery's EOS blocks API provides information on blocks in the EOS chain. Below are the fields in the schema:

```
query ($from: ISO8601DateTime, $till: ISO8601DateTime) {
  eos {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      hash
      producer {
        address
        annotation
      }
    }
  }
}
{

  "network": "eos",
  "from": "2023-08-22T09:27:46.000Z",
  "till": "2023-08-22T09:57:46.000Z",
  "dateFormat": "%Y-%m-%d"
}
```

<details>
<summary>Filtering Blocks</summary>

-   **options**  : A set of options that can be used to filter the results.
    -   **desc** or **asc**  : The order of the results, either "asc" (ascending) or "desc" (descending). 
    -   **limit**  : The maximum number of results to return. The default is 10.
    -   **offset**  : The number of results to skip. The default is 0.
-   **time**  : A filter that can be used to select blocks created within a specified time range.
  
-   **proposer**  : A filter that can be used to select blocks created by a specific producer.
-   **height**  : A filter that can be used to select blocks with a specific height.
-   **date**  : A filter that can be used to select blocks created on a specific date.
-   **blockHash**  : A filter that can be used to select blocks with a specific hash.
-   **any**  : A catch-all filter (OR logic) that can be used to select blocks that match any of the other filters.

</details>

## Fields

- **timestamp** : The timestamp of the block, in ISO 8601 format.
- **height** : The block number.
- **hash** : The block hash.
- **producer** : The producer who created the block.
  - **address** : The producer's EOS account address.
  - **annotation** : The producer's annotation for the block.

## Related Resources

- [EOS schema overview](https://docs.bitquery.io/v1/docs/Schema/eos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [EOS Coinpath API](https://docs.bitquery.io/v1/docs/Schema/eos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
