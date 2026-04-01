---
title: "Solana Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana addresses. Get balances, annotations, and multi-address lookups."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Solana Address API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Solana addresses. Get balances, annotations, and multi-address lookups."/>
<meta name="keywords" content="Solana API examples, Solana GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Address API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Solana addresses. Get balances, annotations, and multi-address lookups." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Address API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Solana addresses. Get balances, annotations, and multi-address lookups." />
</head>

# Solana Address API

## Latest Balance of an address

This below query will get you the latest balance of an address.
You can run the query [here](https://ide.bitquery.io/address-balance-api).

```
query MyQuery {
  solana {
    address(address: {is: "AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv"}) {
      address
      annotation
      balance
    }
  }
}
```

## Latest Balance of multiple addresses

This below query will get you the latest balance of multiple addresses. You can specify any other addresses as well. And you can test the API with as many addresses as you like.
You can run the query [here](https://ide.bitquery.io/latest-balances-of-multiple-addresses).

```
query MyQuery {
  solana {
    address(address: {in: ["AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv","u4JVgijAL87QWhuig6YNnJCoxgEKbYZt1q3nPbfbUBC","9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}) {
      address
      annotation
      balance
    }
  }
}
```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transfers examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
