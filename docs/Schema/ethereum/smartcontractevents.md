---
title: "Ethereum Smart Contract Events API"
---

<head>
<meta name="title" content="Ethereum Smart Contract Events API"/>

<meta name="description" content="Get Ethereum Smart Contract Event data using Events API. Explore events in-depth using detailed information of events."/>

<meta name="keywords" content="Ethereum, Smart contract events, USDT contract, Ethereum event monitoring, Event signature, event timestamp, event tracking, Contract signature, Ethereum event"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Smart Contract Events API" />

<meta property="og:description" content="Get Ethereum Smart Contract Event data using Events API. Explore events in-depth using detailed information of events."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Smart Contract Events API" />

<meta property="twitter:description" content="Get Ethereum Smart Contract Event data using Events API. Explore events in-depth using detailed information of events." />
</head>

`smartContractEvents` type allows you to retrieve all events emitted by different smart contracts on Ethereum Blockchain.

Here's an exmaple query that retrieves 10 latest events from USDT smart contract from Ethereum Blockchain:

```
query {
  ethereum {
    smartContractEvents(
      smartContractAddress: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
- `maximum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/ethereum-events-measureable) of `smartContractEvents`
- `minimum`: returns minimum of selected [measurable fields](/v1/docs/graphql-reference/enums/ethereum-events-measureable) of `smartContractEvents`
- `smartContract`: returns details of smart contract on which event happened
- `smartContractEvent`: returns details about smart contract event like name, signature, and signature hash
- `transaction`: returns details about transaction which emitted  smart contract event
