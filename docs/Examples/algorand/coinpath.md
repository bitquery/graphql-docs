---
title: "Algorand Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Algorand coinpath. Trace senders, receivers, and transaction counts."
keywords: [Algorand API examples, Algorand GraphQL queries, Bitquery]
---

# Algorand Coinpath API

Our Algorand Coinpath API provides detailed information about money flow of addresses on the Algorand Blockchain.

## Get Algorand Coinpath Transactions for Sender After Date

```
{
  algorand {
    coinpath(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      sender: {is: "SENDER_ADDRESS_HERE"}
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
      }
      transaction {
        hash
        value
      }
    }
  }
}
```

Replace `SENDER_ADDRESS_HERE` with the actual Algorand address of the sender you want to query. This query will return detailed information about the latest 10 coinpath transactions from the Algorand blockchain. The transactions will be filtered to include only those where the specified sender address sent tokens after the date "2023-08-05". The query will fetch the amount of tokens involved, the timestamp of the block where each transaction occurred, the currency address and name, the depth of each transaction, the receiver's address, and the transaction hash and value.

## Count Algorand Coinpath Transactions Received by Address After Date

```
{
  algorand {
    coinpath(
      date: {after: "2023-08-01"}
      receiver: {is: "BWSNMG43TUYEOHE76J6KDWIY6MU4U6JFJYGAYCZA2RF5IS3XPO3P3G4FEI"}
    ) {
      count
    }
  }
}
```

Replace BWSNMG43TUYEOHE76J6KDWIY6MU4U6JFJYGAYCZA2RF5IS3XPO3P3G4FEI with the actual Algorand address of the receiver you want to query. This query will return the count of coinpath transactions received by the specified Algorand address after the date "2023-08-01" from the Algorand blockchain. It provides the total number of coinpath transactions received by the specified receiver address within the specified timeframe.

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath money flow examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
