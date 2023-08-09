# Transfers API

Our Cosmos Transfers API provides all the information about token transfers happened on Cosmos Blockchain.

## Get Transfers by a Specific Signer, Arranged by Timestamp and Value

```
{
  cosmos {
    transfers(
      transactionSigner: {is: "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg"}
      options: {desc: ["block.timestamp.iso8601", "value"], limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      type
      value
    }
  }
}
```

This query retrieves the latest transfers involving a specific transaction signer's address. It orders the results by both the timestamp and the value of the transfers in descending order, limiting the output to the top 10 transfers. For each transfer, it provides information such as the block height, timestamp, currency details, receiver's address, sender's address, transaction hash, transfer type, and transfer value.

## Fetch the Most Recent Transfer of a Specific Currency

```
{
  cosmos {
    transfers(
      options: {desc: "value", limit: 10}
      date: {after: "2023-08-05"}
      currency: {is: "Atom"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      type
      value
    }
  }
}
```

This query fetches the latest 10 transfers of a specific currency, "Atom," on the Cosmos network. The transfers are arranged in descending order based on their value. The query filters transfers that occurred after August 5th, 2023. 

For each transfer, it retrieves details such as the block's height, timestamp, currency address and name, receiver's and sender's addresses, transaction hash, transfer type, and the transferred value.

