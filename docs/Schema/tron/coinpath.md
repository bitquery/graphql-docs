---
title: Tron Coinpath API
---

<head>
<meta name="title" content="Tron Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Tron network.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `currency`: filter by currency of transfer
- `date`: filter by date of the transfer
- `depth`: fitler by depth of the call
- `initialAddress`: filter by initial address of transfer
- `initialDate`: filter by initial date of transfer
- `initialTime`: filter by initial time of the transfer
- `options`: filter returned data by ordering, limiting, and constraining it.
- `receiver`: filter by receiver of transfer
- `sender`: filter by sender of transfer
- `time`: fitler by time of the transfer

</details>

- `amount`: returns transfered value
- `any`:
- `block`: returns block where transaction is included
- `count`: returns count of transfers
- `countBigInt`: returns coutn as BigInt
- `currency`: returns currency of transfer
- `depth`: returns depth of the graph
- `maximum`: returns maximum of selected measurable field of coinpath
- `minimum`: returns minimum of selected measurable field of coinpath
- `receiver`: returns receiver address
- `sender`: returns sender address
- `transaction`: returns transaction of transfer happened
