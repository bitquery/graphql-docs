---
title: "Filecoin Address API"
---

<head>
<meta name="title" content="Filecoin Address API"/>

<meta name="description" content="Explore Filecoin addresses with the Address API: query balances, annotations, and more on the blockchain. Get started now!"/>

<meta name="keywords" content="filecoin, filecoin explorer, filecoin marketcap, filecoin api, filecoin data"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Filecoin Address API" />

<meta property="og:description" content="Explore Filecoin addresses with the Address API: query balances, annotations, and more on the blockchain. Get started now!"/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Filecoin Address API" />

<meta property="twitter:description" content="Explore Filecoin addresses with the Address API: query balances, annotations, and more on the blockchain. Get started now!" />
</head>

The Address API allows you to query information about addresses on the Filecoin blockchain.

```
query MyQuery {
  filecoin(network: filecoin) {
    address(address: {is: "f02216385"}) {
      address
      annotation
      balance
    }
  }
}

```
<details><summary>Filtering Address</summary>

`is`: This option specifies that the address must match the specified value.

</details>

## Fields


`address`: The address of the actor.
`annotation`: The annotation for the address.
`balance`: The balance of the address.