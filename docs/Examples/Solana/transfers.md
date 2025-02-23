# Solana Transfers API

## Recent transfers to/from a wallet address

This below query will get you the recent 100 transfers to/from a wallet address. We have used `any` keyword to use this OR functionality.
You can run the query [here](https://ide.bitquery.io/Transfers-of-an-address_1)

```
query MyQuery {
  solana {
    transfers(
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Top Transfers of a token

This query retrieves the top 10 transfers for this token `4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R`. Try the query [here](https://ide.bitquery.io/v1-top-transfers-of-a-solana-token_1).

```
query MyQuery {
  solana {
    transfers(
      currency: {is: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"}
      options: {desc: "amount", limit: 10}
      date: {after: "2025-02-10"}
    ) {
      amount
      block {
        height
        hash
      }
      currency {
        symbol
        name
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```
