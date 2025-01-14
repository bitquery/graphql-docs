---
title: Bitcoin Outputs API
---

<head>
<meta name="title" content="Bitcoin Outputs API"/>
<meta name="description" content="Get information on wallet outputs and fund flow on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain."/>
<meta name="keywords" content="Bitcoin api, Bitcoin python api, Bitcoin nft api, Bitcoin scan api, Bitcoin matic api, Bitcoin api docs, Bitcoin crypto api, Bitcoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin Outputs API" />
<meta property="og:description" content="Get information on wallet outputs and fund flow on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Outputs API" />
<meta property="twitter:description" content="Get information on wallet outputs and fund flow on Bitcoin blockchain. Also, get blocks information for tokens or NFTs on the Bitcoin blockchain." />
</head>

The `outputs` field allows us to fetch details about transaction outputs from Bitcoin network.

Here is an example that demonstrates `outputs` query:

```
{
  bitcoin {
    outputs(
      date: {after: "2023-07-22"}
      options: {limit: 10, desc: "block.timestamp.iso8601"}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      date {
        date
      }
      outputAddress {
        address
        annotation
      }
      outputDirection
      outputIndex
      outputScript
      outputScriptType {
        annotation
        pattern
        short
        simplePattern
        type
      }
      reqSigs
      transaction {
        hash
        index
      }
      value
    }
  }
}
```

<details>
<summary>Filtering Outputs</summary>

-   `any`:
-   `date`: filter by selecting date in rang, list or just date
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `outputAddress`: filter by output address of transaction
-   `outputDirection`: filter by output direction
-   `outputIndex`: filter by index of the output in the transaction
-   `outputScriptType`: filter by output script
-   `outputValue`: filter by output value
-   `time`: filter by selecting time in range, list or certain time stamp
-   `txHash`: filter by transaction hash
-   `txIndex`: filter by transaction index in the block

</details>

The following are available fields for the `outputs`:

-   `any`:
-   `block`: returns block where transaction is included
-   `count`: returns aggregate count of outputs
-   `countBigInt`: returns count as BigInt
-   `date`: returns date of transaction
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `maximum`: returns maximum for selected measurable field of Bitcoin outputs
-   `minimum`: returns minimum for selected measurable field of Bitcoin outputs
-   `outputAddress`: returns output address
-   `outptuDirection`: returns guessed direction of output
-   `outputIndex`: returns index of output in transaction
-   `outputScript`: returns output script
-   `outputScriptType`: returns type and attributes of output scripts
-   `reqSigs`: 
-   `transaction`: returns transaction ID Hash
-   `value`: returns output value
-   `valueDecimal`: returns output as decimal
