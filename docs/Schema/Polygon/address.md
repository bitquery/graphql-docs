---
title:  Polygon Token, Smart contract Details API
---


<head>
<meta name="title" content="Polygon Token, Smart contract Details API"/>
<meta name="description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain."/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Token, Smart contract Details API" />
<meta property="og:description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Token, Smart contract Details API" />
<meta property="twitter:description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain." />
</head>

# Address

The `address` allows us to retrieve information about a specific address including any smart contract.

Therefore, this api can be helpful to get the initial supply and other attributes of any token.

Here is an example that demonstrates how to retrieve basic information about the USDT Token smart contract:

```
query {
  ethereum(network: matic) {
    address(address: {is: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"}) {
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


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::