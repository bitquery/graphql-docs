---
title: Tron Smart Contract Calls API
---

<head>
<meta name="title" content="Tron Smart Contract Calls API"/>
<meta name="description" content="Get information on smart contract calls and arguments passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron api, Tron api docs, Tron crypto api, Tron blockchain api, network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Smart Contract Calls API" />
<meta property="og:description" content="Get information on smart contract calls and arguments passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Smart Contract Calls API" />
<meta property="twitter:description" content="Get information on smart contract calls and arguments passed on Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `smartContractCalls` field allows us to fetch details about the blocks from the Tron blockchain.

Here is an example that demonstrates how to fetch smart contract calls data:

```
{
  tron {
    smartContractCalls(
      date: {after: "2023-07-25"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      amount
      arguments {
        argument
        argumentType
        index
        value
      }
      block {
        timestamp {
          iso8601
        }
      }
      callDepth
      energyUsageTotal
      fee
      netUsage
      smartContract {
        contractType
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
      txHash
    }
  }
}
```

<details>

<summary>Filtering Smart Contract Calls</summary>

Smart contract calls can be filtered using the following arguments:

- `any`:
- `date`: filter by date of the smart contract calls
- `external`: filter by external or internal smart contract calls
- `height`: filter by block height
- `options`: filter returned data by ordering, limiting, and constraining it
- `smartContractAddress`: filter by smart contract address being called
- `smartContractMethod`: filter by smart contract method being called
- `success`: filter by success of the call
- `time`: filter by time on which smart contract call was made
- `txFrom`: filter by action from address
- `txHash`: filter by transaction hash where transfer happened
- `txTo`: filter by action to address

</details>

The following fields are available for `smartContractCalls`:

- `amount`: returns amount of currency
- `any`:
- `arguments`: returns amount of smart contract calls
- `block`: returns block where transaction is included
- `callDepth`: returns call depth
- `count`: returns count and other metrics of smart contract calls
- `countBigInt`: returns count and other metrics as `BigInt`
- `date`: returns date of smart contract calls
- `energyUsageTotal`: returns total energy usage for smart contract calls
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`: returns if calls is external or internal
- `fee`: returns fee consumed by smart contract call
- `maximum`: returns maximum for selected measurable field of Tron calls
- `minimum`: returns minimum for selected measurable field of Tron calls
- `netUsage`: returns net energy usage of smart contract call
- `smartContract`: returns details of smart contract being called
- `smartContractMethod`: returns details of smart contract method being called
- `success`: returns if call was success or not
- `txFrom`: returns transaction from address
- `txTo`: returns transaction to address
