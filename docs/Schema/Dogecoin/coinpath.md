---
title: Dogecoin Coinpath API
description: "Track DOGE fund flows up to any depth on the Dogecoin blockchain using Coinpath technology via Bitquery GraphQL."
---

<head>
<meta name="title" content="Dogecoin Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Dogecoin blockchain. Trace DOGE movements across addresses with Coinpath for compliance, auditing, and investigation."/>
<meta name="keywords" content="Dogecoin api, Dogecoin coinpath, DOGE fund flow, Dogecoin blockchain api, Dogecoin transaction tracing, Bitquery, GraphQL, DOGE api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dogecoin Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Dogecoin blockchain. Trace DOGE movements with Coinpath for compliance and investigation." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dogecoin Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Dogecoin blockchain. Trace DOGE movements with Coinpath for compliance and investigation." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Dash.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `date`: Filter by the date of the transaction.
- `depth`: Filter by the depth of the transaction.
- `initialAddress`: Filter by the initial address.
- `initialDate`: Filter by the initial date.
- `initialTime`: Filter by the initial time.
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `receiver`: Filter by the receiver's address.
- `sender`: Filter by the sender's address.
- `time`: Filter by the time of the transaction.

</details>

The following are available fields for the `coinpath`:

- `amount`: returns the amount of tokens involved in the transaction.
- `any`:
- `block`: returns details of the block where the transaction happened.
- `count`: returns the aggregate count of transactions.
- `countBigInt`: returns the aggregate count of transactions in BigInt format.
- `currency`: returns details of the currency used in the transaction.
- `depth`: returns depth information.
- `maximum`: returns maximum of selected coinpath measurable fields
- `minimum`: returns minimum of selected coinpath measurable fields
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`: returns transaction details.
- `transactions`: returns attributes of transactions.

## Related Resources

- [Dogecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/Dogecoin/overview)
- [Dogecoin API examples](https://docs.bitquery.io/v1/docs/Examples/Dogecoin)
- [Coinpath (Dogecoin)](https://docs.bitquery.io/v1/docs/Schema/Dogecoin/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

