---
title: "Cosmos Event Attributes API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos event attributes. Filter by event type and time ranges."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Attributes API

Query event attributes from the Cosmos blockchain, including attribute names, event types, message metadata, and transaction details.

## Get Recent Cosmos Event Attributes

Fetch the most recent event attributes from the Cosmos blockchain, sorted by block timestamp. Returns attribute names, event types, associated message info, and transaction details.

**Variations:** Add an `eventType` filter to narrow results to a specific event. Adjust the `date` range or increase `limit` for broader coverage. See [query features](/docs/category/query-features) for sorting and filtering.

```
{
  cosmos {
    attributes(
      date: {after: "2023-08-08"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      attribute
      block {
        height
        timestamp {
          iso8601
        }
      }
      eventType
      message {
        senders
        type
      }
      transaction {
        hash
        signer {
          address
        }
      }
      value
    }
  }
}
```

## Filter Cosmos Event Attributes by Event Type

Filter event attributes to a specific event type such as `proposal_vote`. Returns the 10 most recent matching attributes with full block, message, and transaction details.

**Variations:** Replace `proposal_vote` with other event types like `transfer`, `delegate`, or `unbond`. Combine with additional filters like `transactionSigner` to narrow results further. See [query features](/docs/category/query-features) for available filters.

```
{
  cosmos {
    attributes(
      date: {after: "2023-08-08"}
      eventType: {is: "proposal_vote"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      attribute
      block {
        height
        timestamp {
          iso8601
        }
      }
      eventType
      message {
        senders
        type
      }
      transaction {
        hash
        signer {
          address
        }
      }
      value
    }
  }
}
```

## Count Cosmos Event Attributes

Count the total occurrences of a specific event type (e.g., `proposal_vote`) within a date range. Useful for tracking governance activity or event frequency over time.

**Variations:** Change the `eventType` to count different events. Remove the `eventType` filter to count all attributes. Use different `uniq` values for alternative aggregations. See [query features](/docs/category/query-features) for counting options.

```
{
  cosmos {
    attributes(date: {after: "2023-08-08"}, eventType: {is: "proposal_vote"}) {
      count(uniq: times)
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos messages examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/messages)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)