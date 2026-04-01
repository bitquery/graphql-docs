---
title: "Cosmos Messages API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos messages. Get message types by block and message counts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Cosmos Messages API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Cosmos messages. Get message types by block and message counts."/>
<meta name="keywords" content="Cosmos API examples, Cosmos GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos Messages API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Cosmos messages. Get message types by block and message counts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos Messages API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Cosmos messages. Get message types by block and message counts." />
</head>

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

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transactions examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
