# Get Latest Price of Doge Coin in USD

Doge Coin is one of the most famous meme coin in the cryptocurrency space. Using [this](https://ide.bitquery.io/dogecoin-price-in-use_1) query, we can get the latest price of Doge Coin in `USD`.

```graphql
query MyQuery {
  bitcoin(network: dogecoin) {
    inputs(
      options: { limit: 1, desc: "block.timestamp.time" }
      time: { after: "2024-12-18T00:00:00Z" }
    ) {
      amount: value
      usd: value(in: USD)
      price: expression(get: "usd/amount")
      block {
        timestamp {
          time
        }
      }
    }
  }
}
```
