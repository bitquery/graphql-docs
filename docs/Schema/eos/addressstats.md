---
title: "EOS Address Stats API"
description: "Query EOS address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["EOS API", "EOS Address Stats", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="EOS Address Stats API"/>
<meta name="description" content="Query EOS address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."/>
<meta name="keywords" content="EOS API, EOS Address Stats, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="EOS Address Stats API" />
<meta property="og:description" content="Query EOS address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="EOS Address Stats API" />
<meta property="twitter:description" content="Query EOS address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
</head>

# EOS Address Stats API

```
query MyQuery {
  eos(network: eos) {
    addressStats(address: {is: "your address"}) {
      address {
        balance
        callTxCount
        calledTxCount
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
        firstTransferAt {
          time
        }
        lastTransferAt {
          time
        }
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        otherTxCount
        receiveAmount
        receiveFromCount
        receiveFromCurrencies
        receiveTxCount
        sendAmount
        sendToCount
        sendToCurrencies
        sendTxCount
      }
    }
  }
}

```

<details><summary> Filtering Address Stats</summary>

Address data can be filtered using following arguments:

-   `address`: filter by specific address or a list of addresses.

</details>

## Fields

- **balance** : The balance of the account in EOS tokens.
- **callTxCount** : The number of transactions that the account has called.
- **calledTxCount** : The number of transactions that have called the account.
- **daysWithReceived** : The number of days that the account has received tokens.
- **daysWithSent** : The number of days that the account has sent tokens.
- **daysWithTransactions** : The number of days that the account has been involved in a transaction.
- **daysWithTransfers** : The number of days that the account has transferred tokens.
- **firstTransferAt** : The timestamp of the first transfer made by the account.
- **lastTransferAt** : The timestamp of the last transfer made by the account.
- **firstTxAt** : The timestamp of the first transaction made by the account.
- **lastTxAt** : The timestamp of the last transaction made by the account.
- **otherTxCount** : The number of transactions that the account has been involved in that are not calls or transfers.
- **receiveAmount** : The total amount of tokens that the account has received.
- **receiveFromCount** : The number of accounts that have sent tokens to the account.
- **receiveFromCurrencies** : The currencies that the account has received tokens in.
- **receiveTxCount** : The number of transactions that the account has received tokens in.
- **sendAmount** : The total amount of tokens that the account has sent.
- **sendToCount** : The number of accounts that the account has sent tokens to.
- **sendToCurrencies** : The currencies that the account has sent tokens in.
- **sendTxCount** : The number of transactions that the account has sent tokens in.

## Related Resources

- [EOS schema overview](https://docs.bitquery.io/v1/docs/Schema/eos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [EOS Coinpath API](https://docs.bitquery.io/v1/docs/Schema/eos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
