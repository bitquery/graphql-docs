---
title: "Ripple Blocks API"
---

<head>
<meta name="title" content="Ripple Blocks API"/>

<meta name="description" content="Access real-time Ripple blockchain data with our Blocks API. Monitor blocks, explore the XRP blocks effortlessly"/>

<meta name="keywords" content="Ripple Developer, XRP Developer Ripple Developer Tools,  Ripple API, Ripple Smart Contracts, Ripple Developer Documentation, Ripple Developer Resources, XRP Development Tutorials XRP Explorer, XRP API"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ripple Blocks API" />

<meta property="og:description" content="Access real-time Ripple blockchain data with our Blocks API. Monitor blocks, explore the XRP blocks effortlessly"/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ripple Blocks API" />

<meta property="twitter:description" content="Access real-time Ripple blockchain data with our Blocks API. Monitor blocks, explore the XRP blocks effortlessly" />
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