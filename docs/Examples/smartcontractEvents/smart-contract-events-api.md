# Smart contract event API

Our Smart contract event API allows you access parsed smart contract events and arguments for all the blockchains we support.

## All Smart contract event for a blockchain

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-event-API_1_1)

```graphql
{
  ethereum(network: ethereum) {
    smartContractEvents(
      options: {desc: "block.height", limit: 10, offset: 0}
      date: {since: "2023-07-24", till: "2023-07-25"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      arguments {
        argument
        value
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractEvent {
        name
        signatureHash
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
    }
  }
}
```

## All Smart contract event for a specific contract

To check specific smart contract events, you need to mention the smart contract address. For example, in the following query, we are getting [AAVE's V3 Pool smart contract](https://explorer.bitquery.io/ethereum/smart_contract/0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2/events) events.

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-event-for-Aave-v3-pool)

```graphql
{
  ethereum(network: ethereum) {
    smartContractEvents(
      options: {desc: "block.height", limit: 10, offset: 0}
      date: {since: "2023-07-24", till: "2023-07-25"}
      smartContractAddress: {is: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      arguments {
        argument
        value
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractEvent {
        name
        signatureHash
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
    }
  }
}
```



## Specific Smart contract event from a contract

We can also get specific event for a given smart contract using our SmartContractEvent API. For example in the following query are getting `Repay` event from the [AAVE's V3 Pool smart contract](https://explorer.bitquery.io/ethereum/smart_contract/0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2/events).


[Open this query on IDE]https://ide.bitquery.io/Repay-event---Smart-contract-event-for-Aave-v3-pool


```graphql
{
  ethereum(network: ethereum) {
    smartContractEvents(
      options: {desc: "block.height", limit: 10, offset: 0}
      date: {since: "2023-07-24", till: "2023-07-25"}
      smartContractAddress: {is: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2"}
      smartContractEvent: {is: "Repay"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      arguments {
        argument
        value
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractEvent {
        name
        signatureHash
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
    }
  }
}
```


## Smart contract arguments API

We have an `arguments` API, which provides parsed smart contracts. Let's get the latest pair created from PancakeSwap by getting `PairCreated` events as shown below. Additionally, you can write another API in a different way using `any`; here is [an example](https://ide.bitquery.io/Latest-Pair-Created-on-Pancake-Swap_1_1_1).

```
{
  ethereum(network: bsc) {
    arguments(
      options: {desc: ["block.height", "transaction.hash"], limit: 10}
      smartContractAddress: {in: "0xbcfccbde45ce874adcb698cc183debcf17952812"}
      smartContractEvent: {is: "PairCreated"}
    ) {
      block {
        height
      }
      argument {
        name
      }
      value {
        value
      }
      transaction {
        hash
      }
    }
  }
}
```



## Arguments Filtering

Let's see how to do argument filtering using our V1 API. 

```graphql
{
  ethereum(network: bsc) {
    arguments(
      options: {desc: ["block.height", "index","transaction.hash"], limit: 10}
      smartContractAddress: {in: "0xbcfccbde45ce874adcb698cc183debcf17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "token0"}
      value: {is: "0x1c6b5bb16a12365cc27d83db7302fe2040b897cd"}
    ) {
      block {
        height
      }
      index
      argument {
        name
      }
      value {
        value
      }
      transaction {
        hash
      }
    }
  }
}

```

Our v1 APIs support Argument Filtering, however we would rather suggest using V2 APIs for this. They are much more powerful in arguments, allowing argument aggregation and filtering.