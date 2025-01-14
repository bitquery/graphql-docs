---
title: Polygon Smart Contract Events API
---


<head>
<meta name="title" content="Polygon Smart Contract Events API"/>
<meta name="description" content="Get decoded real time and historical Polygon smart contract events with decoded arguments details"/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Smart Contract Events API" />
<meta property="og:description" content="Get decoded real time and historical Polygon smart contract events with decoded arguments details" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Smart Contract Events API" />
<meta property="twitter:description" content="Get decoded real time and historical Polygon smart contract events with decoded arguments details" />
</head>


## Smart Contract Events

`smartContractEvents` type allows you to retrieve all events emitted by different smart contracts on Polygon Blockchain.

Here's an exmaple query that retrieves 10 latest events from USDT smart contract from Polygon Blockchain:

```
query {
  ethereum(network: matic) {
    smartContractEvents(
      smartContractAddress: {is: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      date: {after: "2023-07-17T00:00:00Z"}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      smartContractEvent {
        name
        signature
        signatureHash
      }
      transaction {
        hash
      }
    }
  }
}

```

Read **[this](/docs/Examples/smartcontractEvents/smart-contract-events-api.md)**, to learn more about our Smart Contract Event APIs.


<details>
<summary>Filtering Transactions</summary>

Smart Contract Events can be filtered using following arguments:

- `any`:
- `date`: Filter by date on which smart contract event happened. Date should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operators are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.
  
- `height`: Filter by height of block where smart contract event happened. Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.
  
- `options`: Filter returned data by ordering, limiting and constrainting smart contract events data. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`
  
- `smartContractAddress`: Filter by address of the smart contract. Available comaprision operators are `in`, `is`, `not`, `notIn`.
- `smartContractType`: Filter by type of the smart contract on which event happened. Avaiable comparision operators are `in`, `is`, `not`, `notIn`.

- `time`: Filter by time when smart contract event happened. Time should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.
  
- `txFrom`: Filter by the address responsible for creating the transaction that emitted an event. Available comparision operators are `in`, `is`, `not`, `notIn`.
  
- `txHash`: Filter by transaction hash of the transaction which emitted smart contract event. Available comparision operators are `is`, `in`, `not`, `notIn`.

</details>

`smartContractEvents` field has following subfields which returns relevant information about smart contract evevts.

- `any`:
- `arguments`: eturns details about arguments passed to smart contract events.
- `block`: returns block details in which smart contract event happened
- `count`: returns aggregate count of smart contract events
- `countBigInt`: returns aggregate count of smart contract events in `BigInt` format
- `date`: returns date of smart contract event
- `expression`: performs arithematic operation and returns value of the operation
- `maximum`: returns maximum of selected measurable fields of `smartContractEvents`
- `minimum`: returns minimum of selected measurable fields of `smartContractEvents`
- `smartContract`: returns details of smart contract on which event happened
- `smartContractEvent`: returns details about smart contract event like name, signature, and signature hash
- `transaction`: returns details about transaction which emitted  smart contract event


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::
