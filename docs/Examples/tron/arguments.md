# Arguments API

Our Ton Arguments API provides all details regarding smart contract or event arguments on Tron Blockchain.

## Get Arguments For Latest Smart Contract Calls and Events

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return list of 10 latest arguments for smart contract calls from Tron Blockchain.

## Filter arguments by event name

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
      smartContractEvent: {is: "Transfer"}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return the arguments where name of event is `Transfer`.

## Filter Arguments by Block Height

```
{
  tron {
    arguments(
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-30"}
      smartContractEvent: {is: "Transfer"}
      height: {gt: 53392720}
    ) {
      argument {
        name
        type
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      callDepth
      owner {
        address
      }
      txHash
      txIndex
      value {
        value
      }
    }
  }
}
```

This query will return data of arguments for `Transfer` events happened after block height of 53392720.