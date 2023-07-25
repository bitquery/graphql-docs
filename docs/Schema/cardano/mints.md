
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