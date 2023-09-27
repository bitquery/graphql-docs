---
title: Tron Arguments API
---

<head>
<meta name="title" content="Tron Arguments API"/>
<meta name="description" content="Get event and call arguments on the Tron blockchain. Also, get event and call arguments for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Arguments API" />
<meta property="og:description" content="Get event and call arguments on the Tron   blockchain. Also, get event and call arguments for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Arguments API" />
<meta property="twitter:description" content="Get event and call arguments on the Tron blockchain. Also, get event and call arguments for tokens or NFTs on the Tron blockchain." />
</head>

The `arguments` field allows us to fetch details about arguments of smart contract calls and events.

Here is an example that demonstrates how to use `arguments` query:

```
{
  tron {
    arguments(
      date: {after: "2023-07-22"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
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
      owner {
        address
      }
      receiver {
        address
      }
      smartContract {
        address {
          address
        }
        contractType
      }
      txHash
      txIndex
    }
  }
}
```

<details>
<summary>Filtering Arguments</summary>

- `any`:
- `arguments`: filter by method or event argument
- `argumentType`: filter by argument type
- `callDepth`: filter by depth of the call
- `date`: filter by selecting date in range, list or just date
- `external`: filter by if call is external or internal
- `height`: filter by block height
- `options`: filter returned data by ordering, limiting, and constraining it.
- `owner`: filter by owner address
- `receiver`: filter by receiver address
- `reference`: filter by address value of method or event argument
- `signatureType`: filter by signature of contract method or event
- `smartContractAddress`: filter by smart contract address
- `smartContractEvent`: filter by name of the smart contract event
- `smartContractMethod`: filter by name of the smart contract method
- `time`: filter by selecting time in range, list or jus time
- `txHash`: filter by hash of transaction
- `txIndex`: filter by transaction index in the block
- `value`: filter by value of the argument

</details>

- `any`:
- `argument`: returns method or event argument
- `block`: returns block where transaction is included
- `callDepth`: returns depth of call
- `count`: returns aggregate count of arguments
- `countBigInt`: returns count as `BigInt`
- `date`: returns date of transaction
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`: returns if transaction is external or internal call
- `index`: returns index of transaction in the block
- `maximum`: returns maximum of selected measurable field
- `minimum`: returns minimum of selected measurable field
- `number`:
- `owner`: returns owner address
- `receiver`: returns transaction receiver
- `reference`: returns address value of method or event argument
- `smartContract`: returns smart contract being called
- `smartContractSignature`: returns contract method or event
- `txHash`: returns transaction hash
- `txIndex`: returns transaction index in block
- `value`: returns value of method or event argument
