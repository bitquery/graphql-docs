---
title: Bitcoin OmniTransfers API
---

<head>
<meta name="title" content="Bitcoin Omnitransfers API"/>
<meta name="description" content="Get information on transaction details and wallets on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain."/>
<meta name="keywords" content="Bitcoin api, Bitcoin python api, Bitcoin nft api, Bitcoin scan api, Bitcoin matic api, Bitcoin api docs, Bitcoin crypto api, Bitcoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin Omnitransfers API" />
<meta property="og:description" content="Get information on transaction details and wallets on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Omnitransfers API" />
<meta property="twitter:description" content="Get information on transaction details and wallets on Bitcoin blockchain. Also, get blocks information for tokens or NFTs on the Bitcoin blockchain." />
</head>

The `omniTransfers` field allows us to fetch information about omni transfers from Bitcoin network.

Here's an exmaple that demonstrates `omniTransfers` query:

```
{
  bitcoin {
    omniTransfers(
      date: {after: "2023-07-22"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      blockHash
      currency {
        address
        name
        symbol
      }
      date {
        date
      }
      direction
      divisible
      hash
      index
      ismine
      transferFrom
      transferTo
      txSender
      type
      typeInt
      value
    }
  }
}
```

<details>
<summary>Filtering Omni Transfers</summary>

Omni Transfers can be filtered using the following arguments:

-   `any`:
-   `date`: filter by selecting date in range, list or just date
-   `feeValue`: filter by total fee value of transaction
-   `height`: filter by block height
-   `invalidReason`:
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `time`: filter by selecting date in rang, list or just date
-   `txHash`: filter by transaction hash
-   `txIndex`: filter by index of transaction in the block
-   `txSender`: filter by transaction sender
-   `type`: filter by type of transaction
-   `typeId`: filter by type Id of transaction
-   `valid`:
-   `version`: filter by version

</details>

-   `any`:
-   `block`: returns details of block in which transaction is included
-   `blockHash`: returns block hash
-   `count`: returns aggregate count of omni transfers
-   `countBigInt`: returns count as BigInt
-   `currency`: returns details of currency
-   `date`: returns date of transfer
-   `direction`: 
-   `divisible`:
-   `expression`:
-   `feeValue`: returns total fee value of transactions
-   `hash`: returns transaction hash
-   `index`: returns index of transaction in the block 
-   `ismine`:
-   `maximum`: returns maximum for selected measurable field of Bitcoin omni transfers  
-   `minimum`: returns minimum for selected measurable field of Bitcoin omni transfers
-   `transferFrom`: 
-   `transferTo`:
-   `txSender`: returns transaction sender
-   `type`: returns type of transfer
-   `typeInt`: returns type as Int
-   `value`: returns value
