---
title: BNB Address API
description: "Look up address balances, annotations, and smart contract details on BNB Smart Chain."
---

<head>
<meta name="title" content="BNB Address API"/>
<meta name="description" content="Get address balance and history on the BNB blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB address balance and history API" />
<meta property="og:description" content="Get address balance and history on the BNB   blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB address balance and history API" />
<meta property="twitter:description" content="Get address balance and history on the BNB blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain." />
</head>

The `address` allows us to retrieve information about a specific address.

On BNB Smart Chain, addresses follow the same EVM model as Ethereum: EOAs hold BNB and interact with contracts, while contract addresses expose BEP-20 token metadata, protocol type, and on-chain attributes. The address API returns balance, annotation, balance history, and smart contract details. Use it for wallet lookups, token supply checks, and verifying contract properties before querying transfers or DEX activity on BSC.

Here is an example that demonstrates how to retrieve basic information about the USDT smart contract:

```
query {
  ethereum(network: bsc) {
    address(address: {is: "0x55d398326f99059ff775485246999027b3197955"}) {
      smartContract {
        attributes {
          address {
            address
            annotation
          }
          name
          value
          type
        }
        contractType
        protocolType
        currency {
          decimals
          name
          symbol
          tokenType
        }
      }
      balance
      annotation
      address
    }
  }
}
```

<details>
<summary>Filtering Addresses</summary>
- `address`: Filter by a specific address or a list of addresses.

</details>

The following are available fields for the address:

- `address`: Returns the address.
- `annotation`: Returns the annotation of the address if available.
- `balance`: Returns the current balance of the address.
- `balances`: Returns the balance history of the address.
- `smartContract`: Returns details if the address is that of a smart contract.

## Related Resources

- [BNB Smart Chain schema overview](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (BNB Smart Chain)](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

