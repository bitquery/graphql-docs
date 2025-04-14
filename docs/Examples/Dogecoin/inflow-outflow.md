# Tranfers of an Address on DogeCoin Network

Doge Coin is one of the most famous meme coin in the cryptocurrency space. Using [this](https://ide.bitquery.io/zFB1y4MP5B) query, we can get the transfers of Doge Coin to a particular address.

```graphql
query (
  $network: BitcoinNetwork!
  $address: String!
  $inboundDepth: Int!
  $outboundDepth: Int!
  $limit: Int!
  $from: ISO8601DateTime
  $till: ISO8601DateTime
) {
  bitcoin(network: $network) {
    inbound: coinpath(
      initialAddress: { is: $address }
      depth: { lteq: $inboundDepth }
      options: {
        direction: inbound
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: $limit }
      }
      date: { since: $from, till: $till }
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      transaction {
        hash
      }
      amount
      depth
      count
    }
    outbound: coinpath(
      initialAddress: { is: $address }
      depth: { lteq: $outboundDepth }
      options: {
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: $limit }
      }
      date: { since: $from, till: $till }
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      transactions {
        amount
        txHash
        txValue
      }
      amount
      depth
      count
    }
  }
}
```
