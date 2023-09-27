---
title: Tron Smart Contract Events API
---

<head>
<meta name="title" content="Tron Smart Contract Events API"/>
<meta name="description" content="Get information on smart contract events and arguments passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron api, Tron api docs, Tron crypto api, Tron blockchain api, network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Smart Contract Events API" />
<meta property="og:description" content="Get information on smart contract events and arguments passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Smart Contract Events API" />
<meta property="twitter:description" content="Get information on smart contract events and arguments passed on Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `smartContractEvents` field allows us to fetch information about the smart contract events from Tron blockchain.

Here is an example that demonstrates hwo to retrieve events data:

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-25"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      arguments {
        argument
        argumentType
        index
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
        contractType
      }
      smartContractEvent {
        name
        signature
        signatureHash
      }
      txHash
      txFrom {
        address
      }
    }
  }
}
```

<details>

<summary>Filtering Smart Contract Events</summary>

Smart contract events can be filtered using the following arguments:

- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
- `date`: filter by date of smart contract events
- `height`: filter by block height where transaction is included
- `options`: filter returned data by ordering, limiting, and constraining it
- `smartContractAddress`: filter by smart contract address
- `smartContractEvent`: filter by name of the smart contract event
- `time`: filter by time of the smart contract event
- `txFrom`: filter by transaction from address
- `txHash`: filter by transaction hash
- `txTo`: filter by transaction to address

</details>

The following fields are available for `smartContractEvents`:

- `arguments`: returns arguments of call
- `block`: returns block where transaction is included
- `count`: returns count and other metrics of smart contract events
- `countBigInt`: returns count and other metrics as BigInt
- `date`: returns date of smart contract events
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `maximum`: returns maximum for selected measurable field of Tron Events
- `minimum`: returns minimum for selected measurable field of Tron Events
- `smartContract`: returns smart contract being evented
- `smartContractEvent`: returns smart contract method invoked
- `txFrom`: returns transaction from address
- `txHash`: returns transaction hash
- `txTo`: returns transaction to address
