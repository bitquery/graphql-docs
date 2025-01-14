---
title: "Ethereum Smart Contract Calls API"
---

<head>
<meta name="title" content="Ethereum Smart Contract Calls API"/>

<meta name="description" content="Explore Ethereum smart contract call data. Analyze smart contract calls with detailed information."/>

<meta name="keywords" content="Ethereum, smart contract, Ethereum smart contracts, blockchain transactions, blockchain analysis, smart contract calls, DApps, cryptocurrency, token transfers, crypto transactions, Ethereum transactions, blockchain analytics, Ethereum data"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Smart Contract Calls API" />

<meta property="og:description" content="Explore Ethereum smart contract call data. Analyze smart contract calls with detailed information."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Smart Contract Calls API" />

<meta property="twitter:description" content="Explore Ethereum smart contract call data. Analyze smart contract calls with detailed information." />
</head>

`smartContractCalls` type allows you to retrieve smart contract calls made to any smart contract on Ethereum Blockchain.

Here's an example query that retrieves 10 latest smart contract calls made to USDT smart contract on Ethereum blockchain.

```
{
  ethereum {
    smartContractCalls(
      smartContractAddress: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      options: {limit: 10, desc: "block.timestamp.iso8601"}
      date: {after: "2023-07-17T00:00:00Z"}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      amount
      arguments {
        argument
        argumentType
        index
        value
      }
      callDepth
      gasValue
      smartContract {
        address {
          address
          annotation
        }
      }
      smartContractMethod {
        name
        signature
        signatureHash
      }
    }
  }
}

```

<details>
<summary>Filtering Smart Contract Calls</summary>

Smart Contract Calls can be filtered using following arguments:

- `any`:
- `callDepth`: Filter by call depth of smart contract calls. Available comparision operators are `in`, `is`, `not`, `notIn`.
- `caller`: Filter by caller of that call. Avaiable comparision operators are `in`, `is`, `not`, `notIn`.
- `date`: Filter by date on which smart contract calls was executed. Date should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operators are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.
- `external`:
- `height`: Filter by height of block where smart contract call was executed. Available comparision operators are `between`, `gt`, `gteq`, `in`, `is`, `lt`, `lteq`, `not`, `notIn`.
- `options`: Filter returned data by ordering, limiting and constrainting smart contract call data. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset
- `smartContractAddress`: Filter by address of the smart contract. Available comaprision operators are `in`, `is`, `not`, `notIn`.
- `smartContractMethod`: Filter by method of the smart contract was called. Available comaprision operators are `in`, `is`, `not`, `notIn`.
- `smartContractType`: Filter by type of the smart contract on which call happened. Avaiable comparision operators are `in`, `is`, `not`, `notIn`.
- `success`:
- `time`: Filter by time when smart contract call was executed. Time should be in ISO8601-encoded datetime string. Ex, June 17th, 2023 will be `2023-07-17T00:00:00Z`. Available comparision operator are `after`, `before`, `between`, `in`, `is`, `not`, `notIn`, `since`, `tiil`.
- `txFrom`: Filter by the address responsible for executing smart contract calls. Available comparision operators are `in`, `is`, `not`, `notIn`.
- `txHash`: Filter by transaction hash of the transaction in which smart contract call was executed. Available comparision operators are `is`, `in`, `not`, `notIn`.

</details>

- `amount`: returns amount transferred in the smart contract call
- `any` :
- `arguments`: returns details of the arguments passed while executing smart contract call
- `block`: returns details of block in which smart contract call was executed
- `callDepth`: returns details internal calls that were made in that particular transaction
- `caller`: returns details of address that executed smart contract
- `count`: returns aggregate count of smart contract calls
- `countBigInt`: returns aggregate count of smart contract calls in `BigInt` format
- `date`: returns date on smart contract call was executed
- `expression`: performs arithematic operation and returns value of the operation
- `gasValue`: returns gas consumed by a particular smart contract call
- `maximum`: returns maximum of selected measurable fields) of `smartContractCalls`
- `minimum`: returns minimum of selected measurable fields) of `smartContractCalls`
- `smartContract`: returns details of smart contract
- `smartContractMethod`: returns details of method to which the call was made
- `success`: returns if calls is successful or not
- `transaction`: returns details of the transaction in which smart contract call was executed