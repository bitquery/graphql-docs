---
sidebar_position: 1
title: Algorand Transactions API
description: Discover Algorand transaction details, including sender, recipient, amount, fee, and timestamp, using the Algorand Transactions API. Explore now! 
image: /img/social-preview/algorand-social.png
keywords: [algorand, algorand crypto, algorand explorer, algorand nft, algorand stats, algorand tvl, algorand staking, algorand block explorer]
---

The Algorand Transactions API can be used to get information about transactions, such as the sender, the recipient, the amount, the fee, and the timestamp. Here are the fields in the schema.

```
query ($network: AlgorandNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  algorand(network: $network) {
    transactions(
      options: {desc: "block.height", asc: "address.address", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      hash
      type
      fee
      fee_usd: fee(in: USD)
      currency {
        tokenId
        symbol
        address
        decimals
        name
      }
      lastRound
      note
      poolerror
      subtype
    }
  }
}
<!-- Parameters -->

{
  "limit": 10,
  "offset": 0,
  "network": "algorand",
  "from": "2023-07-20",
  "till": "2023-07-27T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering transactions</summary>

`limit`: The maximum number of results to return.

`offset`: The offset to start the results from.

`from`: The start date of the transactions to filter by.

`till`: The end date of the transactions to filter by.

`any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
group: A filter that groups the results by a specific field.

`height`: The height of the block that the transaction was included in.

`time`: The timestamp of the transaction.

`txCurrency`: The currency of the transaction.

`txHash`: The hash of the transaction.

`txIndex`: The index of the transaction in the block.

`txSender`: The address of the sender of the transaction.

`txSubtype`: The subtype of the transaction.

`txType`: The type of the transaction.


</details>


### Fields

`block`: The block that the transaction was included in.

`timestamp`: The timestamp of the block.

`height`: The height of the block.

`address`: The address of the sender of the transaction.

`hash`: The hash of the transaction.

`type`: The type of the transaction.

`fee`: The fee paid for the transaction.

`fee_usd`: The fee paid for the transaction in USD.

`currency`: The currency of the transaction.

`lastRound`: The round in which the transaction was finalized.

`note`: The note associated with the transaction.

`poolerror`: The pool error associated with the transaction.

`subtype`: The subtype of the transaction.