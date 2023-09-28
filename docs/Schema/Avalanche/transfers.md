---
title: "Avalanche Transfers API"
---

<head>
<meta name="title" content="Avalanche Transfers API"/>

<meta name="description" content="Access Avalanche Transfers data with the Avalanche Transfers API. Retrieve sender, recipient, amount, currency, and timestamp info. Explore query options and filter by various fields."/>

<meta name="keywords" content="Avalanche token transfers, Avalanche transfers, Token transfer data, Avalanche blockchain, Token transaction history, Transfer API, Avalanche network, AVAX token transfers, AVAX transfers, Token transfer data, AVAX blockchain, Token transaction history, Transfer API, AVAX network"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Avalanche Transfers API" />

<meta property="og:description" content="Access Avalanche Transfers data with the Avalanche Transfers API. Retrieve sender, recipient, amount, currency, and timestamp info. Explore query options and filter by various fields."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Avalanche Transfers API" />

<meta property="twitter:description" content="Access Avalanche Transfers data with the Avalanche Transfers API. Retrieve sender, recipient, amount, currency, and timestamp info. Explore query options and filter by various fields." />
</head>

The Avalanche Transfers API can be used to get information about transfers, such as the sender, the recipient, the amount, the currency, and the timestamp. Below are the fields in the schema:

```
query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.height", limit: 10}
      date: {since: $from, till: $till}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
        decimals
        name
        tokenId
        tokenType
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
        gasValue
        gasPrice
        gas
        txFrom {
          address
          annotation
        }
      }
      external
      success
      entityId
    }
  }
}
<!-- Parameters -->
{
  "network": "avalanche",
  "from": "2023-07-21",
  "till": "2023-07-28T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transfers</summary>

`options`: A set of options that control the behavior of the query.

`limit`: The maximum number of results to return.

`date`: The date of the transfers to filter by.

`amount`: The amount of the transfer to filter by.

`any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

`currency`: The currency of the transfer to filter by.


`entityId`: The ID of the transfer to filter by.

`external`: Whether the transfer was external or internal

`height`: The height of the block that the transfer was included in.

`sender`: The address of the sender of the transfer to filter by.

`receiver`: The address of the recipient of the transfer to filter by.

`time`: The timestamp of the transfer to filter by.

`txFrom`: The address of the sender of the transaction that the transfer was included in.

`txHash`: The hash of the transaction that the transfer was included in
</details>


### Fields

`block`: The block that the transfer was included in.

`timestamp`: The timestamp of the block.

`height`: The height of the block.

`sender`: The address of the sender of the transfer.

`receiver`: The address of the recipient of the transfer.

`currency`: The currency of the transfer.

`amount`: The amount of the transfer.

`amount_usd`: The amount of the transfer in USD.

`transaction`: The transaction that the transfer was included in.

`hash`: The hash of the transaction.

`gasValue`: The gas value of the transaction.

`gasPrice`: The gas price of the transaction.

`gas`: The gas used by the transaction.

`txFrom`: The address of the sender of the transaction.

`external`: Whether the transfer was external.

`success`: Whether the transfer was successful.

`entityId`: The ID of the transfer.