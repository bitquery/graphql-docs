# Smart contract call API

Our Smart contract call API allows you access to parsed smart contract calls and arguments for all the blockchains we support.

## All Smart contract calls for a blockchain

You can use our SmartContractCalls to get contract calls for any blockchain. In the following example, we are getting smart contract calls for Ethereum with details like arguments, transaction, caller, and [calldepth](https://community.bitquery.io/t/bitquery-trace-api/1556).

[Open this query on IDE](https://ide.bitquery.io/Smart-contract-calls-on-Ethereum)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-25", till: "2023-07-25" }
      external: true
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: caller {
        address
        annotation
      }
      arguments {
        argument
        value
      }
      callDepth
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractMethod {
        name
        signatureHash
      }
      transaction {
        hash
      }
    }
  }
}
```

## All Smart contract call for a specific contract

[Open this query on IDE](https://ide.bitquery.io/Calls-for-a-specific-ethereum-smart-contract)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
      date: { since: "2023-07-18", till: "2023-07-23" }
      smartContractAddress: { is: "0x1a0ad011913a150f69f6a19df447a0cfd9551054" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## List of calls of a smart contract

To check the list of methods (calls) done on a smart contract you can use following api.

[Open this query on IDE](https://ide.bitquery.io/List-of-smart-contract-calls-of-a-smart-contract)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {
        desc: "block.timestamp.time"
        limit: 10
        offset: 0
        limitBy: { each: "smartContractMethod.name", limit: 1 }
      }
      date: { since: "2023-07-18", till: "2023-07-25" }
      smartContractAddress: { is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## Specific method call from a specific contract

To check the specific method call from a specific smart contract you can use the api below.

[Open this query on IDE](https://ide.bitquery.io/specific-smart-contract-call-by-a-specific-contact-on-ethereum)

```
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2023-07-18", till: "2023-07-24"}
      caller: {is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"}
      smartContractMethod: {is: "getReserves"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}

```

## Method calls by specific address

To check method calls by a specific [smart contract address](https://explorer.bitquery.io/ethereum/smart_contract/0x1a0ad011913a150f69f6a19df447a0cfd9551054/calls_contracts), you can use following API.

[Open this query on IDE](https://ide.bitquery.io/calls-details-for-ethereum-smart-contract-call)

```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
      date: { since: "2023-07-18", till: "2023-07-20" }
      caller: { is: "0x1a0ad011913a150f69f6a19df447a0cfd9551054" }
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
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}
```

## Smart contract arguments API

```graphql
{
  ethereum(network: bsc) {
    arguments(
      options: { desc: ["block.height", "transaction.hash"], limit: 10 }
      smartContractAddress: { is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad" }
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
      smartContract {
        address {
          address
        }
      }
      smartContractSignature {
        __typename
        ... on Method {
          name
          signature
        }
      }
    }
  }
}
```

## Arguments Filtering

To filter specific argument, please use following API.

```
{
  ethereum(network: bsc) {
    arguments(
      options: {desc: ["block.height", "transaction.hash"], limit: 10}
      smartContractAddress: {is: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"}
    smartContractMethod:{is: "execute"}
      argument: {is: "deadline"}
      value: {is: "1690285647"}
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
      smartContract {
        address {
          address
        }
      }
      smartContractSignature {
        __typename
        ... on Method {
          name
          signature
        }
      }
    }
  }
}

```

Our v1 APIs support Argument Filtering, however we would rather suggest using V2 APIs for this. They are much more powerful in arguments, allowing argument aggregation and filtering.

## Blacklist Calls on a Token

To restrict certain addresses from performing specific actions within your smart contract, you can utilize the blacklist functionality. The query below utilizes the `smartContractMethod: {is: "blacklist"}` to fetch transactions where an address was blacklisted. 
You can run the query [here](https://ide.bitquery.io/PEPE-Blacklist-calls)

```
query ($network: EthereumNetwork!, $address: String!, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {limit: $limit, offset: $offset}
      smartContractAddress: {is: $address}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
      }
      smartContractMethod(smartContractMethod: {is: "blacklist"}) {
        name
        signature
      }
      amount
      date {
        date
      }
      transaction {
        hash
        txFrom {
          address
          annotation
        }
      }
      block {
        timestamp {
          time
        }
      }
      caller {
        address
        annotation
      }
      success
      gasValue
      external
    }
  }
}
{
  "limit": 30,
  "offset": 0,
  "network": "ethereum",
  "address": "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  "dateFormat": "%Y-%m-%d"
}



```
