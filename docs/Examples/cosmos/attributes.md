# Attributes API

Our Cosmos Attribtues API provides all the details regarding event attributes from Cosmos network.

## Get Attributes of Recent Events

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

The query retrieves event attribute information from the Cosmos blockchain, including attribute names, block height and timestamp, event types, message senders and types, transaction hash, signer's address, and attribute values. The results are sorted based on block timestamp in descending order.

## Filter Attributes by Event Type

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

The query retrieves event attribute details from the Cosmos blockchain, specifically targeting `proposal_vote` events. It focuses on recent records, sorting them based on block timestamp in descending order, and limits the output to the latest 10 records.

The query provides information about attribute names, block height, block timestamp, event type, message senders and types, transaction hash, signer's address, and attribute values. This offers insights into recent `proposal_vote` event attributes on the Cosmos network.

## Get Count of Attributes

```
{
  cosmos {
    attributes(date: {after: "2023-08-08"}, eventType: {is: "proposal_vote"}) {
      count(uniq: times)
    }
  }
}
```

The query retrieves a count of unique occurrences of `proposal_vote` event attributes from the Cosmos blockchain, specifically those that occurred after August 8, 2023. The query uses the `count` function with the argument `uniq: times` to calculate the total number of times the `proposal_vote` event attributes appeared within the specified timeframe.