# Messages API

Our Cosmos Messages API provides all the information related to messages generated on Cosmos Blockchain.

## Retrieve Messages within a Specific Block

```
{
  cosmos {
    messages(blockHeight: {is: 16494924}) {
      index
      json
      senders
      success
      transaction {
        hash
        signer {
          address
        }
      }
      type
    }
  }
}
```

This query retrieves messages from a specific block with the height of 16494924 in the Cosmos blockchain. It includes the index of the message, the JSON content of the message body, sender(s) of the message, success status of the associated transaction, the transaction hash, the address of the transaction signer, and the type of the message.

## Count Types of Messages Sent by a Specific Address

```
{
  cosmos {
    messages(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      transactionSigner: {is: "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      index
      json
      senders
      success
      transaction {
        hash
        signer {
          address
        }
      }
      type
    }
  }
}
```

This query retrieves messages from the Cosmos blockchain where transactions signed by the address "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg". The query includes information such as the block height and timestamp, message index, JSON content of the message, sender(s) of the message, success status of the transaction, transaction hash, the address of the transaction signer, and the type of the message. The result is limited to the latest 10 messages.

## Explore Messages of a Specific Type

```
{
  cosmos {
    messages(blockHeight: {is: 16494924}) {
      count(uniq: types)
    }
  }
}
```

This query retrieves the count of unique types of messages present in the block with a block height of 16494924 from the Cosmos blockchain. It provides information about the variety of message types contained within that specific block, helping to understand the diversity of actions or transactions taking place in that block.
