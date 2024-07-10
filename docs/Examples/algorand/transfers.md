# Algorand Transfers API

Our Algorand Transfers API provides detailed information about Algorand Transfers. Below are some examples of `transfers` API:

## Get Transfers of a specific Asset on Algorand

This query gives you the transfers of a specific Asset in a given timeframe on Algorand network.
You can find the query [here](https://ide.bitquery.io/All-the-transfers-of-an-asset-on-Algorand-Mainnet-in-a-specific-timeframe).

```
query MyQuery {
  algorand(network: algorand) {
    transfers(
      options: {desc: "block.height", limit: 10, offset: 0}
      currency: {is: 31566704}
      date: { since: "2024-07-01", till: "2024-07-09" }
    ) {
      amount
      amount_usd: amount(in: USD)
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      block{
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transferType
      transaction {
        hash
      }
    }
  }
}

```

## Get transfers where sender/receiver of an asset is a particular address

This query gives you the transfers of a specific Asset sent to or from a particular address in a given timeframe on Algorand network.
You can find the query [here](https://ide.bitquery.io/traansfers-where-a-currency-is-sent-from-or-sent-to-a-particular-address).

```
query MyQuery {
  algorand(network: algorand) {
    transfers(
      date: {since: "2024-07-01", till: "2024-07-09"}
      currency: {is: 849191641}
      any: [{sender: {in: ["OLP2LMN4NDMT6FKRFCMV5J7U3LTUFXKOHOMGWYBMIA675FSRVWT4C5HWVI"]}}, {receiver: {in: ["OLP2LMN4NDMT6FKRFCMV5J7U3LTUFXKOHOMGWYBMIA675FSRVWT4C5HWVI"]}}]
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
    }
  }
}

```

## Video Tutorial | How to get Algorand Transfers Data using Bitquery API v1

<VideoPlayer url="https://www.youtube.com/watch?v=Wu4RVrFMJ4Y" />
