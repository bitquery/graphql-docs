---
title: "Cardano Coinpath API"
description: "Query Cardano coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Cardano API", "Cardano Coinpath", "Bitquery", "GraphQL"]
---

# Coinpath

Coinpath APIs are a set of money-tracing APIs that help you track funds from one address to another. 

Cardano uses an **eUTXO** model, so coinpath traces how ADA and native tokens flow through transaction outputs across multiple hops. This is valuable for compliance investigations, treasury auditing, and understanding multi-step fund flows in Cardano's native-token ecosystem. The API returns depth, amounts, currency details (including policy-based native tokens), and sender/receiver metadata for each hop in the trace.

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
