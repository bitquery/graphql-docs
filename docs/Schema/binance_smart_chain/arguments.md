---
title: BNB Arguments API
description: "Query event and call arguments for BNB Smart Chain smart contracts."
---

<head>
<meta name="title" content="BNB Arguments API"/>
<meta name="description" content="Get event and call arguments on the BNB blockchain. Also, get event and call arguments for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB Arguments API" />
<meta property="og:description" content="Get event and call arguments on the BNB   blockchain. Also, get event and call arguments for tokens or NFTs on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB Arguments API" />
<meta property="twitter:description" content="Get event and call arguments on the BNB blockchain. Also, get event and call arguments for tokens or NFTs on the BNB blockchain." />
</head>


The `arguments` field allows us to fetch information about arguments of smart contract calls and evetns.

Here is an exmaple that demonstrates how to use `arguments` query:

```
{
  ethereum(network: bsc) {
    arguments(
      smartContractEvent: {is: "PairCreated"}
      options: {desc: "block.height", limit: 6}
    ) {
      block {
        height
      }
      argument {
        name
        type
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

- `any`:
- `argument`: returns method or event argument
- `block`: returns information of block
- `callDepth`: returns depth of call
- `caller`: returns information about caller
- `count`: returns aggregate count of argument
- `countBigInt`: returns aggregate count of argument in `BigInt` format
- `date`: returns date on which smart contract call or event happened
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`:
- `index`:
- `maximum`:
- `minimum`:
- `number`:
- `reference`:
- `smartContract`: returns information about smart contract being called
- `smartContractSignature`: returns signature of contract method or event
- `success`:
- `transaction`: returns transaction information
- `value`: returns value of method or event argument

## Related Resources

- [BNB Smart Chain schema overview](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (BNB Smart Chain)](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

