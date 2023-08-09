# Coinpath API

Our Cosmos Coinpath API provides comprehensive information about money flow of addresses on the Cosmos blockchain.

## Explore Destination of Funds from a Specific Address

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
    ) {
      amount(in: USD)
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
        value
      }
    }
  }
}
```

This query retrieves a list of coinpath transactions initiated from a specific initial address (`cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw`) after a certain date (`2023-08-07`). The query limits the results to 10 transactions and orders them by timestamp in descending order. For each transaction, it provides details such as the transferred amount in USD, block height, timestamp, currency information, sender and receiver addresses, transaction hash, and value.

## Investigate Relationship Between Two Addresses

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
      receiver: {is: "cosmos1a6usu3y3t5fcxa4kdtv4cgj7cmav7j0l6uzuvq"}
    ) {
      amount(in: USD)
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
        value
      }
    }
  }
}
```

This query explores the relationship between two specific addresses (`initialAddress` and `receiver`) within the context of transactions that occurred after August 7, 2023. It retrieves a maximum of 10 transactions initiated from the initial address and received by the specified receiver. 

For each transaction, the query provides details like the transferred amount in USD, block height, timestamp, currency information, sender and receiver addresses, transaction hash, and value. By analyzing these transactions, users can gain insights into the flow of funds between the two addresses and understand their financial interactions.

## Retrieve Transactions Exceeding a Certain Value from a Specific Address

```
{
  cosmos {
    coinpath(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10, minimumTxAmount: 200}
      initialAddress: {is: "cosmos1ypejmkpfqrqmv5w7cscq874xf8rlggq7w44rsw"}
      receiver: {is: "cosmos1a6usu3y3t5fcxa4kdtv4cgj7cmav7j0l6uzuvq"}
    ) {
      amount(in: USD)
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
        value
      }
    }
  }
}
```

This query retrieves 10 latest transactions initiated from the initial address and received by the specified receiver, where the minimum transaction amount is set to 200. 