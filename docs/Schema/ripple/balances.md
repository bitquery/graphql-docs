---
title: "Ripple Balances API"
---

<head>
<meta name="title" content="Ripple Balances API"/>

<meta name="description" content="Access XRP Ledger account balances with the Balances API. Query balance history, transaction details, and currency info. Technical account data retrieval."/>

<meta name="keywords" content="Ripple network, XRP Ledger, Ripple API, XRP transactions, Ripple blockchain, Account balances, Transaction history, Transaction hash, Token ID, Token type, Block number, Current balance, Account owner, Transaction flags"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ripple Balances API" />

<meta property="og:description" content="Access XRP Ledger account balances with the Balances API. Query balance history, transaction details, and currency info. Technical account data retrieval."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ripple Balances API" />

<meta property="twitter:description" content="Access XRP Ledger account balances with the Balances API. Query balance history, transaction details, and currency info. Technical account data retrieval." />
</head>

The Balances API gives you information about the balances of an account on the XRP Ledger. The following are the fields in the schema:

```
query ($network: RippleNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    balances(
      date: {since: $from, till: $till}
      account: {is: $address}
      options: {limit: 10, offset: 0, desc: ["block", "transaction.index"]}
    ) {
      transaction {
        hash
        index
        sender
        type
      }
      timestamp {
        time
      }
      prevBalance
      operation
      issuer {
        address
        annotation
      }
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      block
      balance
      account {
        address
        annotation
      }
      flags
    }
  }
}

<!-- Parameters -->

{
  "address": "rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM",
  "network": "ripple",
  "from": "2023-08-09",
  "till": "2023-08-16T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Balances</summary>

- `date`: This field specifies the date and time range for the balance history.

- `account`: This field specifies the address of the account that the balance history is needed.
- `options`: This field specifies the options for the query, such as the order of the results and the number of results to return.

- `transactionType`: This field specifies the type of transaction that caused the balance change.
- `transactionSender`: This field specifies the address of the sender of the transaction.
- `transactionIndex`: This field specifies the index of the transaction in the ledger.
- `transactionHash`: This field specifies the hash of the transaction.
- `prevLedgerSequence`: This field specifies the previous ledger sequence of the transaction.
- `time`: This field specifies the timestamp of the transaction.
- `prevBalance`: This field specifies the balance of the account before the transaction.
- `operation`: This field specifies the operation that was performed on the account.
- `issuer`: This field specifies the issuer of the currency.
- `flags`: This field specifies the flags of the transaction.
- `currencySymbol`: This field specifies the symbol of the currency that the balance is denominated in.
- `block`: This field specifies the block number of the transaction.
- `balance`: This field specifies the balance of the account after the transaction.
- `any`A catch-all field ( OR Logic) that can be used to filter on any other field in the payments API.

</details>

## Fields

- `network`: This field specifies the network that the account belongs to,, in this case it is `ripple`
- `transaction`: This field specifies the transaction that caused the balance change.
  - `hash`: This field specifies the hash of the transaction.
  - `index`: This field specifies the index of the transaction in the ledger.
  - `sender`: This field specifies the address of the sender of the transaction.
  - `type`: This field specifies the type of the transaction.
- `timestamp`: This field specifies the timestamp of the transaction.
- `prevBalance`: This field specifies the balance of the account before the transaction.
- `operation`: This field specifies the operation that was performed on the account.
- `issuer`: This field specifies the issuer of the currency.
- `date`: This field specifies the date of the balance change.
- `currency`: This field specifies the currency that the balance is denominated in.
  - `address`: This field specifies the address of the currency.
  - `decimals`: This field specifies the number of decimal places for the currency.
  - `name`: This field specifies the name of the currency.
  - `symbol`: This field specifies the symbol of the currency.
  - `tokenId`: This field specifies the token ID of the currency, if it is a token.
  - `tokenType`: This field specifies the token type of the currency, if it is a token.
- `block`: This field specifies the block number of the transaction.
- `balance`: This field specifies the balance of the account after the transaction.
- `account`: This field specifies the account that owns the balance.
- `flags`: This field specifies the flags of the transaction.
