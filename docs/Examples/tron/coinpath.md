# Coinpath API

Our Tron Coinpath API provides comprehensive information about money flow of addresses on the Tron blockchain.

## Get Money Flow of Particular Address

```graphql
{
  tron {
    coinpath(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      initialAddress: {is: "TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN"}
      initialDate: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 5}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      depth
      receiver {
        address
        balance
        amountOut
        amountIn
      }
      sender {
        address
        amountIn
        amountOut
        balance
      }
      transaction {
        hash
      }
    }
  }
}
```

This query allows you to retrieve the money flow details originating from a particular address (TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN) for the Tron currency (TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t) after July 31, 2023. The results are ordered in descending order based on block timestamps and are limited to the top 5 entries.

## Get Money Flow With Particular Receiver Address

```graphql
{
  tron {
    coinpath(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      options: {desc: "block.timestamp.iso8601", limit: 5}
      initialDate: {after: "2023-07-31"}
      receiver: {is: "TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN"}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      depth
      receiver {
        address
        balance
        amountOut
        amountIn
      }
      sender {
        address
        amountIn
        amountOut
        balance
      }
      transaction {
        hash
      }
    }
  }
}
```
This query allows you to retrieve the money flow details where the receiver is a particular address (TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN) for the Tron currency (TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t) after July 31, 2023. The results are ordered in descending order based on block timestamps and are limited to the top 5 entries.

