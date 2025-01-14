---
title: Tron Transfers API
---

<head>
<meta name="title" content="Tron Transfers API"/>
<meta name="description" content="Get information on transfer details and wallets on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Transfers API" />
<meta property="og:description" content="Get information on transfer details and wallets on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Transfers API" />
<meta property="twitter:description" content="Get information on transfer details and wallets on Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `transfers` field allows us to fetch token transfer details from Tron blockchain.

Here is an example that demonstrates how to fetch transfers from a particular block:

```
{
  tron {
    transfers(
      height: {is: 53420250}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

<details>
<summary>Filtering Transfer</summary>

- `amount`: filter by amount of token transferred
- `any`:
- `contractType`: filter by contract type
- `currency`: filter by currency address
- `date`: filter by date of the transfer
- `entityId`: filter by ERC-721 entity id
- `external`: filter by if call is external or internal
- `height`: filter by block where transaction is included
- `options`: filter returned data by ordering, limiting, and constraining it
- `receiver`: filter by address of receiver
- `sender`: filter by address of sender
- `success`: filter by success of transaction
- `time`: filter by time of transaction
- `txFrom`: filter by address that executed the transaction
- `txHash`: filter by transaction hash
- `txTo`: filter by address where transaction was sent

</details>

- `amount`: returns transfer amount
- `any`:
- `block`: returns block where transaction is included
- `contractType`: returns contract type
- `count`: returns count and other metrics
- `countBigInt`: returns count and other metrics as BigInt
- `currency`: returns currency of transfer
- `date`: returns date of transaction
- `energyUsageTotal`: returns total energy usage for transfer
- `entityId`: returns ERC-721 entity Id
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `external`: returns if transfer is external or internal
- `fee`: returns fee consumed for transfer
- `maximum`: returns maximum of selected measurable field of Tron Transfers
- `minimum`: returns minimum of selected measurable field of Tron Transfers
- `netUsage`: 
- `receiver`: returns address of transfer receiver
- `sender`: returns address of transfer sender
- `success`: returns success of transfer
- `txFrom`: returns transaction from address
- `txHash`: returns transaction hash
- `txTo`: returns transaction to address