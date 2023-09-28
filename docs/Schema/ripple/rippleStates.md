---
title: Ripple States API
---

<head>
<meta name="title" content="Ripple States API"/>
<meta name="description" content="Explore Ripple's RippleState objects effortlessly with Bitquery's rippleStates API. Get insights into balances, accounts, and more."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple api, Ripple api docs, Ripple crypto api, Ripple blockchain api, ripple network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple States API" />
<meta property="og:description" content="Explore Ripple's RippleState objects effortlessly with Bitquery's rippleStates API. Get insights into balances, accounts, and more." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple States API" />
<meta property="twitter:description" content="Explore Ripple's RippleState objects effortlessly with Bitquery's rippleStates API. Get insights into balances, accounts, and more." />
</head>

A `RippleState` object connects two accounts in a single currency.There can only be one RippleState object per currency for any given pair of accounts. Bitquery's rippleStates API gives you information this object.

```
query ($network: RippleNetwork!) {
  ripple(network: $network) {
    rippleStates(
      transactionHash: {is: "tx hash here"}
    ) {
      balance
      block
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      flags
      lowAccount {
        annotation
        address
      }
      highAccount {
        annotation
        address
      }
      prevBalance
      operation
      prevTxnId
      prevLedgerSequence
      timestamp {
        time
      }
      transaction {
        type
        sender
        index
        hash
      }
    }
  }
}
<!-- Parameters -->
{
  "network": "ripple"
}

```

<details><summary>Filtering rippleStates</summary>

- `transactionHash`: The hash of the transaction that created the RippleState object.
- `transactionType`: The type of transaction that created the RippleState object.
- `transactionSender`: The account that created the RippleState object.
- `transactionIndex`: The index of the transaction that created the RippleState object.
- `time`: The timestamp of the transaction that created the RippleState object.
- `prevTxnId`: The ID of the previous transaction, if any.
- `prevLedgerSequence`: The ledger sequence of the previous transaction, if any.
- `prevBalance`: The previous balance of the RippleState object.
- `options`: A dictionary of options that can be used to filter the results. The following options are supported:
  - `asc` or `desc`: The field to sort the results by
  - `limit`: The maximum number of results to return.
  - `offset`: The number of results to skip.
- `operation`: The type of operation that created the RippleState object.
- `lowAccount`: The low account of the RippleState object.
- `highAccount`: The high account of the RippleState object.
- `flags`: The flags of the RippleState object.
- `date`: The date of the RippleState object.
- `currencySymbol`: The symbol of the currency of the RippleState object.
- `block`: The block number of the transaction that created the RippleState object.
- `balance`: The balance of the RippleState object.
- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.

</details>

## Fields

- `balance`: The balance of the trust line. If it is a positive balance, the high account is the issuer. If the balance is negative, the low account is the issuer.
- `block`: The block number of the transaction that created the RippleState object.
- `currency`: The currency of the trust line, e.g. USD
- `flags`: The flags of the trust line.
- `lowAccount`: The low account of the trust line.
- `highAccount`: The high account of the trust line.
- `prevBalance`: The previous balance of the trust line.
- `operation`: The type of operation that created the RippleState object.
- `prevTxnId`: The ID of the previous transaction, if any.
- `prevLedgerSequence`: The ledger sequence of the previous transaction, if any.
- `timestamp`: The timestamp of the transaction that created the RippleState object.
- `transaction`: The transaction that created the RippleState object.
