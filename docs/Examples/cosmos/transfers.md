---
title: "Cosmos Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos transfers. Get transfers by signer, currency, value, and time."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Cosmos Transfers API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Cosmos transfers. Get transfers by signer, currency, value, and time."/>
<meta name="keywords" content="Cosmos API examples, Cosmos GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos Transfers API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Cosmos transfers. Get transfers by signer, currency, value, and time." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos Transfers API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Cosmos transfers. Get transfers by signer, currency, value, and time." />
</head>

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

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos address examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

