---
title: "Cardano Mints API"
description: "Cardano mint API: newly minted native token amounts with policy and asset IDs, plus block, time, and parent transaction hash and index."
keywords: ["Cardano API", "Cardano Mints", "Bitquery", "GraphQL"]
---

# Mints

The Mints API query returns information about the mints on the Cardano network. A mint is an event where new tokens are created. The query returns information about the block that the mint occurred in, the amount of tokens minted, the transaction that minted the tokens, and the currency that was minted.

On Cardano, native tokens are defined by **minting policies** rather than smart contracts: any transaction can mint or burn tokens if it satisfies the associated policy script. This API surfaces those mint and burn events with policy IDs, asset names, and quantities. Use it to track token issuance for NFT collections, fungible-token launches, and supply-management workflows where you need to verify on-chain minting activity against expected schedules or caps.

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
