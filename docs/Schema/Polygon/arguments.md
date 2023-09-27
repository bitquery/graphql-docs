---
title:  Polygon Argument API
---


<head>
<meta name="title" content="Polygon Smart Contract Calls and Event Argument API"/>
<meta name="description" content="Get decoded Polygon's Smart contract event and Arguments, Run aggregation and filtering in real time of historical Smart contract events and calls."/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Smart Contract Calls and Event Argument API" />
<meta property="og:description" content="Get decoded Polygon's Smart contract event and Arguments, Run aggregation and filtering in real time of historical Smart contract events and calls." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Smart Contract Calls and Event Argument API" />
<meta property="twitter:description" content="Get decoded Polygon's Smart contract event and Arguments, Run aggregation and filtering in real time of historical Smart contract events and calls." />
</head>


# Arguments

The `arguments` field allows us to fetch information about arguments of smart contract calls and evetns.

Here is an exmaple that demonstrates how to use `arguments` query:

```
{
  ethereum(network: matic) {
    arguments(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2021-03-14"}
      smartContractMethod: {is: "performUpkeep"}
      smartContractAddress: {is: "0x7b3ec232b08bd7b4b3305be0c044d907b2df960b"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      transaction {
        hash
      }
      argument {
        name
      }
      value {
        value
      }
    }
  }
}

```

<details>
<summary>Filtering Arguments</summary>

- `any`:
- `argument`: Filter by specific argument for smart contract method or event
- `argumentType`: Filter by argument type for smart contract method or event
- `callDepth`: Filter by call depth
- `caller`: Filter by address of the caller 
- `date`: Filter by selecting time in range, list or just time
- `external`:
- `height`: Filter by height of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `reference`:
- `signatureType`:
- `smartContractAddress`: Filter by smart contract address
- `smartContractEvent`: Filter by smart contract event
- `smartContractMethod`: Filter by smart contract method
- `time`: Filter by selecting time in range, list or just time
- `txFrom`: Filter by address which created transaction
- `txHash`: Filter by transaction hash
- `value`: Filter by argument value

</details>

The following are available fields for the `arguments`:

- `any`: Used for `or` condition
- `argument`: returns method or event argument
- `block`: returns information of block
- `callDepth`: returns depth of call
- `caller`: returns information about caller
- `count`: returns aggregate count of argument
- `countBigInt`: returns aggregate count of argument in `BigInt` format
- `date`: returns date on which smart contract call or event happened
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`: Is call external or internal
- `index`: 
- `maximum`: Aggregated and get maximum value for given argument
- `minimum`: Aggregated and get minimum value for given argument
- `number`: Covert into Number
- `reference`:
- `smartContract`: returns information about smart contract being called
- `smartContractSignature`: returns signature of contract method or event
- `success`:
- `transaction`: returns transaction information
- `value`: returns value of method or event argument



:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::