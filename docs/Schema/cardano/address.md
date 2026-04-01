---
title: "Cardano Address API"
description: "Query Cardano address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Cardano API", "Cardano Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cardano Address API"/>
<meta name="description" content="Query Cardano address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Cardano API, Cardano Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cardano Address API" />
<meta property="og:description" content="Query Cardano address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cardano Address API" />
<meta property="twitter:description" content="Query Cardano address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

The Address API schema returns information about a wallet. The schema includes the following fields:


```
query MyQuery {
  cardano(network: cardano) {
    address(
      address: {is: "addr1q8wp4tc65hgvvff0lg2dgp8dnd2hy5u4vyz9mgk8qancwmtdf8tun55syv9gvfd0dgdhx02vlyg6dp56up92a5l9qxhs9nhrfy"}
    ) {
      address {
        address
        annotation
      }
      balance {
        value
        currency {
          name
          decimals
          address
          tokenType
          symbol
          tokenId
        }
      }
      staking {
        controlledTotalStake
        rewardsAmount
        rewardsAvailable
        stakedAmount
        stakedAmountWithRewards
        withdrawnAmount
        address {
          address
          annotation
        }
      }
    }
  }
}
```

<details> <summary>Filtering Address</summary>

`address`
The address of the wallet
 </details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
