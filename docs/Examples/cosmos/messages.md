---
title: "Cosmos Messages API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos messages. Get message types by block and message counts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Messages API

Query Cosmos blockchain messages, including message types, sender details, and transaction metadata.

## Get Cosmos Messages in a Specific Block

Retrieve all messages from a given block height, returning each message's index, JSON body, senders, success status, transaction hash, signer address, and type.

**Variations:** Change `blockHeight` to a `date` range to query across multiple blocks, or add `options: {limit: N}` to paginate. See [query features](/docs/category/query-features) for sorting and filtering.

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

## Get Latest Cosmos Messages from a Transaction Signer

Fetch the most recent messages signed by a specific address, ordered by timestamp and limited to the latest 10 results.

**Variations:** Adjust the `date` filter or increase `limit` for more history. Replace `transactionSigner` with `sender` to filter by message sender instead. See [query features](/docs/category/query-features) for pagination.

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

## Count Unique Cosmos Message Types in a Block

Count the distinct message types within a specific block. Useful for understanding the diversity of on-chain actions in a single block.

**Variations:** Remove the `blockHeight` filter and add a `date` range to count types across multiple blocks. Use other `uniq` values like `senders` for unique participants.

```
{
  cosmos {
    messages(blockHeight: {is: 16494924}) {
      count(uniq: types)
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transactions examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
