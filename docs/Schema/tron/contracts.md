---
title: Tron Smart Contract API
---

<head>
<meta name="title" content="Tron Smart Contract API"/>
<meta name="description" content="Get information on smart contract ownership, energy usage and fee passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Smart Contract API" />
<meta property="og:description" content="Get information on smart contract ownership, energy usage and fee passed on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Smart Contract API" />
<meta property="twitter:description" content="Get information on smart contract ownership, energy usage and fee passed on Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `contracts` field allows us to fetch details about contract from Tron blockchain.

Here is an example that demonstrates how to use contracts query:

```
{
  tron {
    contracts(
      date: {after: "2023-07-26"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      amount
      contractType
      currency {
        address
        name
        symbol
      }
      energyUsageTotal
      fee
      netUsage
      txHash
      txOwner {
        address
        annotation
      }
    }
  }
}
```

<details>
<summary>Fileting Contracts</summary>

Contracts can be filtered using the following arguments:

-   `any`:
-   `contracType`: filter by contract type
-   `currency`: filter by currency of transfer
-   `date`: filter by date of transfer
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `success`: filter by success of a call
-   `time`: filter by time of transaction
-   `txHash`: filter by transaction hash
-   `txOwner`: filter by address of transaction owner

</details>

The following fields are available for the `contracts`:

-   `amount`: returns amount of currency transferred
-   `any`:
-   `block`: returns block in which transaction is included
-   `contractType`: returns contract type
-   `count`: returns count and other metrics of contracts
-   `countBigInt`: returns count and other metrics as BigInt
-   `currency`: returns currency details 
-   `date`: returns date of the transaction
-   `energyUsageTotal`: returns total energy usage
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns fee consumed 
-   `maximum`: returns maximum for selected [measurable field](/v1/docs/graphql-reference/enums/tron-contracts-measureable) of Tron contracts
-   `minimum`: returns maximum for selected [measurable field](/v1/docs/graphql-reference/enums/tron-contracts-measureable) of Tron contracts
-   `netUsage`: returns net usages
-   `success`: returns is call was successful or not
-   `txHash`: returns transaction hash
-   `txOwner`: returns address of transaction owner
