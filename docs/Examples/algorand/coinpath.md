# Algorand Coinpath API

Our Algorand Coinpath API provides detailed information about money flow of addresses on the Algorand Blockchain.

## Get Transactions for Sender after Date

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

## Get Count of Coinpath Transactions for Receiver after Date

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
