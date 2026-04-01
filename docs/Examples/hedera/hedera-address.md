---
title: "Hedera Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Hedera accounts. Get latest HBAR balances and account metadata."
keywords: [Hedera API examples, Hedera GraphQL queries, Bitquery]
---

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
