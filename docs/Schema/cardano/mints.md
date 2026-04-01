---
title: "Cardano Mints API"
description: "Query Cardano mints data using Bitquery GraphQL API. Get mint events, policies, assets, and recipients."
keywords: ["Cardano API", "Cardano Mints", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cardano Mints API"/>
<meta name="description" content="Query Cardano mints data using Bitquery GraphQL API. Get mint events, policies, assets, and recipients."/>
<meta name="keywords" content="Cardano API, Cardano Mints, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cardano Mints API" />
<meta property="og:description" content="Query Cardano mints data using Bitquery GraphQL API. Get mint events, policies, assets, and recipients." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cardano Mints API" />
<meta property="twitter:description" content="Query Cardano mints data using Bitquery GraphQL API. Get mint events, policies, assets, and recipients." />
</head>

# Mints

The Mints API query returns information about the mints on the Cardano network. A mint is an event where new tokens are created. The query returns information about the block that the mint occurred in, the amount of tokens minted, the transaction that minted the tokens, and the currency that was minted.


```
query MyQuery {
  cardano(network: cardano) {
    mints(options: {limit: 10, desc: "block.height"}) {
      block {
        height
        timestamp {
          time
        }
      }
      value
      transaction {
        hash
        index
      }
      currency {
        decimals
        address
        name
        symbol
        tokenId
        tokenType
      }
    }
  }
}
```

<details> <summary>Filtering Mints</summary>

`date`: The date of the mint.

`currency`: The currency that was minted.

`height`: The block height of the mint.

`time`: The time of the mint.

`txHash`: The hash of the transaction that minted the tokens.

`txIndex`: The index of the transaction in the block.

`value`: The amount of tokens minted.
</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
