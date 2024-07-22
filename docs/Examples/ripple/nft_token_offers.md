# Ripple NFT Token Offers API

Ripple NFT Token Offers API provides all details regarding NFT Token offers on Ripple Blockchain. Below are some examples of `nftokenOffers` API:

## Get NFT Token Offers from a specific Transaction Sender

We are using the below query to get the NFT Token Offers from a particular address `rBEARbo4Prn33894evmvYcAf9yAQjp4VJF` on Ripple Blockchain. You can find the query [here](https://ide.bitquery.io/NFT-Token-offers-API-on-Ripple-blockchain).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ripple(network: $network) {
    nftokenOffers(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      transactionSender: {is: $address}
    ) {
      block
      transaction {
        index
        type
      }
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      fromAccount {
        address
        annotation
      }
      destinationAccount {
        address
        annotation
      }
      nftokenCurrency {
        name
        symbol
      }
      currency {
        name
        symbol
      }
      nftokenAmount
      nftoken_amount_usd: nftokenAmount(in: USD)
      amount
      amount_usd: amount(in: USD)
      operation
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "address": "rBEARbo4Prn33894evmvYcAf9yAQjp4VJF",
  "network": "ripple"
}
```
