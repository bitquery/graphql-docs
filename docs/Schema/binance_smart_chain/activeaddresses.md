---
title:  BNB Active Addresses API
description: "Query active addresses and counts on BNB Smart Chain."
---


<head>
<meta name="title" content="BNB Active Addresses API"/>
<meta name="description" content="Get Active addresses on the BNB blockchain. Also, get active addresses for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB Active Addresses API" />
<meta property="og:description" content="Get Active addresses on the BNB   blockchain. Also, get active addresses for tokens or NFTs on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB Active Addresses API" />
<meta property="twitter:description" content="Get Active addresses on the BNB blockchain. Also, get active addresses for tokens or NFTs on the BNB blockchain." />
</head>


The `activeAddresses` field allows us to retrieve details about the active addresses from the BNB blockchain.

Active addresses count distinct wallets that participated in transfers on BSC during a given period—a key engagement metric for ecosystem dashboards, DeFi protocol growth reports, and investor-facing analytics. You can filter by currency, amount thresholds, sender/receiver roles, and date ranges to segment the count by token, whale activity, or specific time windows.

Here is an example that demonstrates how to retrieve the number of active addresses from the BNB blockchain:

```
query MyQuery {
  ethereum (network: bsc){
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

## Related Resources

- [BNB Smart Chain schema overview](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (BNB Smart Chain)](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

