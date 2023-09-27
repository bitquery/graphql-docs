---
title: Tron Address API
---

<head>
<meta name="title" content="Tron Address API"/>
<meta name="description" content="Get address balance and history on the Tron blockchain. Also, get address balance and history for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron address balance and history API" />
<meta property="og:description" content="Get address balance and history on the Tron   blockchain. Also, get address balance and history for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron address balance and history API" />
<meta property="twitter:description" content="Get address balance and history on the Tron blockchain. Also, get address balance and history for tokens or NFTs on the Tron blockchain." />
</head>

The `address` field allows us to retrieve details about address or smart contract from Tron blockchain.

Here is an example that demonstrates use `address` query:

```
{
  tron {
    address(address: {is: "TMY19SeunpGTRoxB1yCF1EBeZjcGNy3333"}) {
      address
      annotation
      balance
    }
  }
}
```

<details>
<summary>Filtering options</summary>

Address data can be filtered using the following arguments:

-   `address`: filter using specific address or list of addresses

</details>

-   `address`: returns address
-   `annotation`: returns annotation of address
-   `balance`: returns balance of the address
-   `balances`: returns token balance history of address
-   `claimableRewards`: returns rewards that a witness or a user has not yet withdrawn
-   `smartContract`: returns details is address is smart contract
