---
title: Ripple Blocks API
---

<head>
<meta name="title" content="Ripple Blocks API"/>
<meta name="description" content="Get information on blocks on the Ripple blockchain. Also, get information on blocks for tokens or NFTs on the Ripple blockchain."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple matic api, Ripple api docs, Ripple crypto api, Ripple blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple Blocks API" />
<meta property="og:description" content="Get information on blocks on the Ripple   blockchain. Also, get information on blocks for tokens or NFTs on the Ripple blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple Blocks API" />
<meta property="twitter:description" content="Get blocks information on the Ripple blockchain. Also, get blocks information for tokens or NFTs on the Ripple blockchain." />
</head>

Ripple Blocks API helps you get information on Blocks in the network. Below are the fields in the API: 

```
query ($network: RippleNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      hash
      totalCoins
      accountHash
    }
  }
}

{
  "network": "ripple",
  "from": "2023-08-15T09:01:24.000Z",
  "till": "2023-08-15T09:31:24.000Z",
  "dateFormat": "%Y-%m-%d"
}
```