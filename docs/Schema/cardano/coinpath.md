---
title: "Cardano Coinpath API"
description: "Query Cardano coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Cardano API", "Cardano Coinpath", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cardano Coinpath API"/>
<meta name="description" content="Query Cardano coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."/>
<meta name="keywords" content="Cardano API, Cardano Coinpath, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cardano Coinpath API" />
<meta property="og:description" content="Query Cardano coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cardano Coinpath API" />
<meta property="twitter:description" content="Query Cardano coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
</head>

# Coinpath

Coinpath APIs are a set of money-tracing APIs that help you track funds from one address to another. 

```
query MyQuery {
  cardano {
    coinpath(
      options: {limit: 10}
      initialAddress: {is: "addr1q97fgk07rtjm8hzs7psr59yjqutnzmm3e9wd8tm4fvth82h8qzjkntdu8u7le0c8e5hzuquj0k58c0lruxggpdr0u0hqa0h2kj"}
    ) {
      amount
      block {
        height
        timestamp {
          time
        }
      }
      currency {
        name
        symbol
        tokenId
        tokenType
        decimals
        address
      }
      depth
      receiver {
        annotation
        address
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        type
      }
      sender {
        address
        annotation
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        receiversCount
        sendersCount
        type
      }
    }
  }
}
```

<details> 
<summary>Filtering Coinpath</summary>


</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
