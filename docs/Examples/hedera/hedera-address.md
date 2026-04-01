---
title: "Hedera Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Hedera accounts. Get latest HBAR balances and account metadata."
keywords: [Hedera API examples, Hedera GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Hedera Address API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Hedera accounts. Get latest HBAR balances and account metadata."/>
<meta name="keywords" content="Hedera API examples, Hedera GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Address API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Hedera accounts. Get latest HBAR balances and account metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Address API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Hedera accounts. Get latest HBAR balances and account metadata." />
</head>

# Hedera Address API

In this section we will see how to get information on wallets on Hedera.

## Latest Balance of an Address

This query retrieves the latest balance of an address on Hedera.

You can run the query [here](https://ide.bitquery.io/hedera-balance)

```
{
  hedera {
    address(address: {is: "0.0.1881237"}) {
      balance
    }
  }
}

```

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Hedera transactions examples](https://docs.bitquery.io/v1/docs/Examples/hedera/hedera-transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
