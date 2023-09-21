---
title:  Polygon Active Addresses API
---


<head>
<meta name="title" content="Polygon Active Addresses API"/>
<meta name="description" content="Get Active addresses on the Polygon (Matic) blockchain. Also, get active addresses for tokens or NFTs on the Polygon blockchain."/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Active Addresses API" />
<meta property="og:description" content="Get Active addresses on the Polygon (Matic) blockchain. Also, get active addresses for tokens or NFTs on the Polygon blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Active Addresses API" />
<meta property="twitter:description" content="Get Active addresses on the Polygon (Matic) blockchain. Also, get active addresses for tokens or NFTs on the Polygon blockchain." />
</head>


# Active Addresses

The `activeAddresses` field allows us to retrieve details about the active addresses from the Polygon blockchain.

Here is an example that demonstrates how to retrieve the number of active addresses from the Polygon blockchain:

```
query MyQuery {
  ethereum(network: matic) {
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
-   `txFrom`:  Filter by the address that created the transaction.
-   `txHash`: Filter by the transaction hash

</details>

The following are available fields for the `activeAddresses`:

-   `address`: returns the address and its annotation.
-   `count`: returns the aggregate count of active addresses.
-   `countBigInt`: returns the aggregate count of active addresses in `BigInt` format.


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::