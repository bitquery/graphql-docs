# Stellar Trade Effects API

A successful trade operation will yield zero or more effects. These effects represent specific changes that occur in the ledger. 


## Latest Trade Effects on Stellar

You can run the query [here](https://ide.bitquery.io/Latest-Trade-Effects-on-Stellar)

```
query MyQuery {
  stellar(network: stellar) {
    tradeEffects(
      date: {is: "2024-07-17"}
      options: {limit: 10, desc: "timestamp.time"}
    ) {
      address {
        address
      }
      effectIndex
      buyIssuer {
        address
      }
      buyCurrency {
        name
        address
      }
      buyAmount
      sellAmount
      priceAmount
      order
      operation {
        name
      }
      seller {
        address
      }
      sellIssuer {
        address
      }
      sellCurrency {
        name
        address
      }
      timestamp {
        time
      }
    }
  }
}

```