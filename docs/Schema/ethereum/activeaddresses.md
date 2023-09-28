---
title: "Ethereum Active Addresses API"
---

<head>
<meta name="title" content="Ethereum Active Addresses API"/>

<meta name="description" content="Access Historical & Current Ethereum Addresses"/>

<meta name="keywords" content="Ethereum, Ethereum Active Address, Ethereum Address, Ethereum Addresses, ERC20 Addresses, Token Holders, NFT holders"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Active Addresses API" />

<meta property="og:description" content="Access Historical & Current Ethereum Addresses" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Active Addresses API" />

<meta property="twitter:description" content="Access Historical & Current Ethereum Addresses" />
</head>

The `activeAddresses` field allows us to retrieve details about the active addresses from the Ethereum blockchain.

Here is an example that demonstrates how to retrieve the number of active addresses from the Ethereum blockchain:

```
query MyQuery {
  ethereum {
    activeAddresses(date: {after: "2023-07-17T00:00:00Z"}) {
      count(uniq: address)
    }
  }
}
```

<details>
<summary>Filtering Acitve Addresses</summary>

Active Addresses can be filtered using the following arguments:

-   `amount`: Filtered by the amount of tokens.
-   `currency`: Filtered by the currency the address holds.
-   `date`: Filter by date
-   `entityId`: Filter by ERC721 entity id.
-   `external`:
-   `height`: Filter by block height.
-   `options`: Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.
-   `receiver`: Filter by the address of the receiver
-   `sender`: Filter by the address of the sender
-   `success`: Filter by success of the transaction
-   `time`: Filter by time
-   `txFrom`: Filter by the address that created the transaction.
-   `txHash`: Filter by the transaction hash

</details>

The following are available fields for the `activeAddresses`:

-   `address`: returns the address and its annotation.
-   `count`: returns the aggregate count of active addresses.
-   `countBigInt`: returns the aggregate count of active addresses in `BigInt` format.
