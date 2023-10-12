---
title: Dash Inputs API
---

<head>
<meta name="title" content="Dash Inputs API"/>
<meta name="description" content="Get information on wallet Inputs and fund flow on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain."/>
<meta name="keywords" content="Dash api, Dash python api, Dash nft api, Dash scan api, Dash matic api, Dash api docs, Dash crypto api, Dash blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dash Inputs API" />
<meta property="og:description" content="Get information on wallet Inputs and fund flow on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dash Inputs API" />
<meta property="twitter:description" content="Get information on wallet Inputs and fund flow on Dash blockchain. Also, get blocks information for tokens or NFTs on the Dash blockchain." />
</head>

The `inputs` field allows us to retrieve details about inputs of the transaction from Dash network.

Here is an example that demonstrates `inputs` query:

```
{
  bitcoin(network: dash) {
    inputs(
      options: {limit: 10, desc: "block.timestamp.iso8601"}
      date: {after: "2023-07-22T00:00:00Z"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      inputIndex
      inputScript
      inputAddress {
        address
        annotation
      }
      outputTransaction {
        hash
      }
      transaction {
        hash
      }
      value
    }
  }
}
```

<details>
<summary>Filtering Inputs</summary>

Inputs can be filtered using the following arguments:

-   `any`:
-   `date`: Filter by selecting the range, list or just date
-   `height`: Filter by block where transaction is included
-   `inOutputIndex`:
-   `inOutputTxId`:
-   `inputAddress`: Filter by transaction input address
-   `inputIndex`: Filter by index of input
-   `inputScriptType`: Filter by type and attributes of input scripts
-   `inputValue`: Filter by input value
-   `options`: Filter returned data by ordering, limiting, and constraining it.
-   `time`: Filter by selecting time in range, list or just time
-   `txHash`: Filter by transaction hash
-   `txIndex`: Filter by index of transaction in block

</details>

The following are available fields for the `inputs`:

-   `any`:
-   `block`: returns block where transaction is included
-   `count`: returns aggregate input count
-   `countBigInt`: returns count in `BigInt` format
-   `date`: returns date of the transaction
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `inputAddress`: returns input address
-   `inputIndex`: returns input index
-   `inputScript`: returns input script
-   `inputScriptType`: returns input script types and attributes
-   `maximum`: returns maximum for [selected measurable fields of Dash inputs](/v1/docs/graphql-reference/enums/Dash-inputs-measureable)
-   `minimum`: returns minimum for [selected measurable fields of Dash inputs](/v1/docs/graphql-reference/enums/Dash-inputs-measureable)
-   `outputTransaction`: returns output transaction for this input
-   `transaction`: returns information about transaction of this input
-   `value`: returns input value
-   `valueDecimal`: returns input value as decimal 
