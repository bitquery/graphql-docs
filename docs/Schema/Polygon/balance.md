---
title:  Polygon Address Balance API
---


<head>
<meta name="title" content="Polygon Address Balance API"/>
<meta name="description" content= "Polygon balance API will help get the balance or balance history of any address or smart contract on the Polygon blockchain."/>
<meta name="keywords" content="polygon api, polygon balance, polygon balance history, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Address Balance API" />
<meta property="og:description" content="Polygon balance API will help get the balance or balance history of any address or smart contract on the Polygon blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Address Balance API" />
<meta property="twitter:description" content="Polygon balance API will help get the balance or balance history of any address or smart contract on the Polygon blockchain." />
</head>

# Address

The `address` api also allow you pull balance details including balance history.

You can filter using currency smart contract address and get balance for specific currency. In case of native currency, you can just mention "MATIC".

Here is an example on getting balance of [0x198905a3e2e3ffeb20169adf9ceaf0f9e66c35b9](https://explorer.bitquery.io/matic/address/0x198905a3e2e3ffeb20169adf9ceaf0f9e66c35b9):

```
{
  ethereum(network: matic) {
    address(address: {is: "0x198905a3e2e3ffeb20169adf9ceaf0f9e66c35b9"}) {
      balances {
        currency {
          address
          name
          symbol
        }
        value
      }
    }
  }
}

```

<details>
<summary>Filtering Addresses</summary>
- `address`: Filter by a specific address or a list of addresses.
- `currency` : In `balances` we can filter using currency address.
- `history` :  You can get the balance history of an address and use block height and timestamp as filters.

</details>

The following are available fields for the address:

- `balances`: Returns the details on Balances.
- `history`: Returns the historical balance details.
- `currency`: Returns the details of currency.



:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::