---
title: "Ethereum Coinpath API"
---

<head>
<meta name="title" content="Ethereum Coinpath API"/>

<meta name="description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details."/>

<meta name="keywords" content="Ethereum,Blockchain, Crypto transactions, Coinpath, Money flow, Token transactions, Transaction details, Transaction count, Crypto analytics, Crypto data analysis, Ethereum blockchain, Token flow analysis, Ethereum technology,Ethereum development, Ethereum transactions, Cryptocurrency tracking"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Coinpath API" />

<meta property="og:description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Coinpath API" />

<meta property="twitter:description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `currency`: Filter by the currency involved in the transaction.
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
- `transaction`:  returns transaction details.
- `transactions`: returns attributes of transactions.