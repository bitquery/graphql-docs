---
title: "Cardano Address API"
description: "Cardano address GraphQL: native multi-asset balances, staking stake and rewards, and controlled stake for Shelley-style addresses."
keywords: ["Cardano API", "Cardano Address", "Bitquery", "GraphQL"]
---

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
