---
sidebar_position: 1
title: Algorand Transfers API
description: Discover Algorand transfer details, including sender, recipient, amount, fee, and timestamp, using the Algorand Transfers API. Explore now! 
image: /img/social-preview/algorand-social.png
keywords: [algorand, algorand crypto, algorand explorer, algorand nft, algorand stats, algorand tvl, algorand staking, algorand block explorer]
---

The `transfers` field allows us to fetch details about token transfers from the Algorand blockchain.

Here is an exmaple that demonstrates how to fetch 10 latest transfers:

```
{
  algorand {
    transfers(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
        symbol
      }
      firstRound
      lastRound
      memo
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      transferType
    }
  }
}
```

<details>
<summary>Filtering Transfers</summary>

Transfer data can be filtered using the following arguments

-   `amount`: filter by amount of transferred token 
-   `any`:
-   `currency`: filter by currency of transferred token 
-   `date`: filter by date of the transfer
-   `height`: filter by block height 
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `receivers`: filter by recevier address of transfer
-   `sender`: filter by sender address of transfer
-   `time`: filter by time of the transfer
-   `transferType`: filter by transfer type 
-   `txHash`: filter by transaction hash of transfer
-   `txIndex`: filter by index in the block where the transaction is included
-   `txSender`: filter by sender address of transaction 
-   `txType`: filter by transaction type

</details>

-   `amount`: returns amount of transferred token
-   `any`:
-   `block`: returns block where transaction is included
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `currency`: returns currency of transferred token
-   `date`: returns date of the transfer
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `firstRound`: returns first round for the transfer
-   `lastRound`: returns last round for the transfer
-   `maximum`: returns maximum for selected [measurable field of Algorand transfers](/v1/docs/graphql-reference/enums/algorand-transfers-measureable)
-   `memo`: returns value of memo field
-   `minimum`: returns minimum for selected [measurable field of Algorand transfers](/v1/docs/graphql-reference/enums/algorand-transfers-measureable)
-   `receiver`: returns address and annotation for receiver of the transfer
-   `sender`: returns address and annotation for sender of the transfer
-   `transaction`: returns details of transaction in which transfer occurred 
-   `transferType`: returns transfer type
