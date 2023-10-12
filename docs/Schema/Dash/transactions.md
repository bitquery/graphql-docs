---
title: Dash Transactions API
---

<head>
<meta name="title" content="Dash Transactions API"/>
<meta name="description" content="Get information on transaction details and wallets on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain."/>
<meta name="keywords" content="Dash api, Dash python api, Dash nft api, Dash scan api, Dash api, Dash api docs, Dash crypto api, Dash blockchain api,dash network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dash Transactions API" />
<meta property="og:description" content="Get information on transaction details and wallets on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dash Transactions API" />
<meta property="twitter:description" content="Get information on transaction details and wallets on Dash blockchain. Also, get blocks information for tokens or NFTs on the Dash blockchain." />
</head>

The `transactions` allows us to fetch details about transactions from Bitcoins network.

Here is an example that demonstrates `transactions` query:

```
{
  bitcoin(network: dash) {
    transactions(
      date: {after: "2023-07-22"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      feeValue(in: USD)
      feeValueDecimal
      hash
      index
      inputCount
      inputCountBigInt
      inputValue
      inputValueDecimal
      minedValue
      minedValueDecimal
      outputCount
      outputCountBigInt
      outputValue
      outputValueDecimal
      txCoinbase
      txLocktime
      txSize
      txVersion
      txVsize
      txWeight
    }
  }
}
```

<details>
<summary>Filtering Transactions</summary>

-   `any`:
-   `date`: filter by selecting date in range, list or just date
-   `feeValue`: filter by fee value
-   `height`: filter by block height
-   `inputAddress`: filter by input address
-   `inputCount`: filter by input count of transaction
-   `minedValue`: filter by transaction's total mined value
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `outputAddress`: filter by output address
-   `outputCount`: filter by output count of transaction 
-   `outputValue`: filter by total output value of transaction
-   `time`: filter by selecting time in range, list or just time
-   `txCoinbase`:
-   `txHash`: filter by transaction hash
-   `txIndex`: fitler by transaction index in block
-   `txLocktime`: filter by transaction locktime
-   `txSize`: filter by transaction size
-   `txVersion`: filter by transaction version
-   `txVsize`: filter by transaction vsize
-   `txWeight`: filter by transaction weight

</details>

The following are available fields for the `transactions`:

-   `any`:
-   `block`: returns block where transaction is included
-   `count`: returns aggregate count of transactions
-   `countBigInt`: returns count as BigInt
-   `date`: returns date of the transactions
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `feeValue`: returns total fee value of transaction
-   `feeValueDecimal`: returns fee value as decimal
-   `hash`: returns transaction hash
-   `index`: returns index of transaction in the block
-   `inputCount`: returns total input count of transaction 
-   `inputCountBigInt`: returns input count as `BigInt`
-   `inputValue`: returns total input value of transactions
-   `inputValueDecimal`: returns input value as decimal
-   `maximum`: returns maximum for selected [measurable field of Dash transaction](/v1/docs/graphql-reference/enums/Dash-transactions-measureable)
-   `minedValue`: returns total mined value of transaction
-   `minedValueDecimal`: returns mined value as decimal
-   `minimum`: returns minimum for selected [measurable field of Dash transaction](/v1/docs/graphql-reference/enums/Dash-transactions-measureable)
-   `outputCount`: returns total output count of transaction
-   `outputCountBigInt`: returns output count as `BigInt`
-   `outputValue`: returns total output value of transaction
-   `outputValueDecimal`: returns output value as decimal
-   `txCoinbase`:  
-   `txLocktime`: returns locktime of transaction
-   `txSize`: returns size of transaction
-   `txversion`: returns version of transaction
-   `txVsize`: returns vsize of transaction
-   `txWeight`: returns transaction weight
