---
title: "Stellar Payments API Examples"
description: "Example GraphQL queries for Stellar payments. Get amounts, currencies, issuers, paths, and counterparties."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Payments API

Retrieve Stellar payment transactions — amounts, currencies, issuers, sender/receiver addresses, and multi-hop routing paths — through the Bitquery GraphQL API.

## Get Latest Stellar Payment Transactions

List the latest Stellar payment transactions with amounts, currencies, issuers, sender/receiver addresses, and the multi-hop routing path. The `path` field returns an array of intermediate assets — each with `asset_code`, `asset_type`, and `asset_issuer` — showing how the payment was routed across the DEX. [Run the query on the IDE](https://ide.bitquery.io/Latest-Payments-on-Stellar).

**Variations:** Add a `sender` or `receiver` filter to track a specific account, change `date` for historical lookups, or reduce `limit` for a quick snapshot. See [query features](/docs/category/query-features) for pagination.

```
query MyQuery {
  stellar(network: stellar) {
    payments(
      date: {is: "2024-07-17"}
      options: {limit: 100, desc: "timestamp.time"}
    ) {
      amountTo
      amountFrom
      debitedFromValue
      creditedToValue
      currencyTo {
        name
      }
      currencyFrom {
        name
      }
      issuerTo {
        address
      }
      issuerFrom {
        address
      }
      timestamp {
        time
      }
      success
      sender {
        address
      }
      receiver {
        address
      }
      path
    }
  }
}

```

Example `path` response:

```
"path": [
  {
    "asset_code": "AQUA",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA"
  },
  {
    "asset_code": "USD",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GB3OE4IBQTYQFZZS5RXQHE4IPQL7ONOFOSAIS2NFRNMJKZEAI3AAUT2A"
  },
  {
    "asset_code": "SGB",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GAME5YNKHIPRSMN2BI3HLS3OYD4NE6FQ2WKUUJPYYM6GU4MRDUBPHN6B"
  },
  {
    "asset_code": "IBMWorldWire",
    "asset_type": "credit_alphanum12",
    "asset_issuer": "GB6KHHHS52HXXFRG5V5QKF2D2DMYHW6GICHPH3FJGJS5MYIPVXDL74TY"
  }
]

```

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar trades examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-tradeeffects-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)