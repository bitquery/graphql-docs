# Smart Contract Events API

Our Tron Smart Contract Events API provides detailed information about smart contract events executed made on Tron Blockchain.

## Get List of Latest Smart Contract Events

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {

      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContract {
        address{
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

This query retrieves the latest 10 smart contract events on the Tron network that occurred after July 31, 2023, providing details such as event arguments, block height and timestamp, smart contract addresses, event name and signature, and transaction hash. Note that there is a duplicate entry for "smartContract" in the query, which could be removed for better optimization.

## Filter Smart Contract Events By Contract Address

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
    ) {
      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

This query retrieves the latest 10 smart contract events on the Tron network that occurred after July 31, 2023, specifically for the smart contract "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t". It provides details such as event arguments and values, block height and timestamp, smart contract address, event name and signature, and transaction hash.

## Filter Smart Contract Events By List of Event Name

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      smartContractAddress: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      smartContractEvent: {in: ["Transfer", "Approval"]}
    ) {
      arguments {
        argument
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContract {
        address {
          address
        }
      }
      smartContractEvent {
        name
        signature
      }
      txHash
    }
  }
}
```

The query retrieves the latest 10 smart contract events on the Tron network that occurred after July 31, 2023, for the smart contract "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" and can include events with names "Transfer", "Approval", and any other event names specified in the in clause. It provides details such as event arguments, block height and timestamp, smart contract address, event name and signature, and transaction hash.
