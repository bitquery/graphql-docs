---
title: "EOS Proposers API"
description: "EOSIO DPoS producers via blocks aggregate: producer account, blocks produced, min/max dates, height, hash, and timestamps."
keywords: ["EOS API", "EOS Proposers", "Bitquery", "GraphQL"]
---

# EOS Producers API

```
query ( $from: ISO8601DateTime, $till: ISO8601DateTime) {
  eos {
    blocks(
      options: {desc: "count", limit: 10, offset: 0}
      date: {since: $from, till: $till}
    ) {
      address: producer {
        address
        annotation
      }
      count
      min_date: minimum(of: date)
      max_date: maximum(of: date)
      timestamp {
        time
      }
      hash
      height
    }
  }
}

{

  "network": "eos",
  "from": "2023-08-21T13:24:13.000Z",
  "till": "2023-08-22T13:24:13.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Proposers</summary>

- **options** : A set of options that can be used to filter the results.
  - **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **date** : A filter that can be used to select blocks produced within a specified date range.

- **blockHash** : A filter that can be used to select blocks with a specific hash.
- **any** : A catch-all filter (OR logic) that can be used to select blocks that match any of the other filters.
- **height** : A filter that can be used to select blocks with a specific height.
- **time** : A filter that can be used to select blocks created within a specified time range.
- **proposer** : A filter that can be used to select blocks produced by a specific producer. The producer's EOS account address can be used to filter the results.


</details>

## Fields

- **address** : The EOS account address of the producer.
- **count** : The number of blocks that the producer has produced.
- **min_date** : The earliest date that the producer produced a block.
- **max_date** : The latest date that the producer produced a block.
- **timestamp** : The timestamp of the block.
- **hash** : The hash of the block.
- **height** : The block number.

## Related Resources

- [EOS schema overview](https://docs.bitquery.io/v1/docs/Schema/eos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [EOS Coinpath API](https://docs.bitquery.io/v1/docs/Schema/eos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
