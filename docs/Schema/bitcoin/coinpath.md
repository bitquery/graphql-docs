---
title: Bitcoin Coinpath API
description: "Track flow of funds up to any depth on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain."
---

<head>
<meta name="title" content="Bitcoin Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain."/>
<meta name="keywords" content="Bitcoin coinpath, Bitcoin GraphQL, fund flow, UTXO tracking, Bitquery, Bitcoin blockchain API, money flow, transaction tracing"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Bitcoin blockchain. Also, get information on blocks for tokens or NFTs on the Bitcoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Bitcoin blockchain. Also, get blocks information for tokens or NFTs on the Bitcoin blockchain." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Bitcoin.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `date`: Filter by the date of the transaction.
- `depth`: Filter by the depth of the transaction.
- `initialAddress`: Filter by the initial address.
- `initialDate`: Filter by the initial date.
- `initialTime`: Filter by the initial time.
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `receiver`: Filter by the receiver's address.
- `sender`: Filter by the sender's address.
- `time`: Filter by the time of the transaction.

</details>

The following are available fields for the `coinpath`:

- `amount`: returns the amount of tokens involved in the transaction.
- `any`:
- `block`: returns details of the block where the transaction happened.
- `count`: returns the aggregate count of transactions.
- `countBigInt`: returns the aggregate count of transactions in BigInt format.
- `currency`: returns details of the currency used in the transaction.
- `depth`: returns depth information.
- `maximum`: returns maximum of selected coinpath measurable fields
- `minimum`: returns minimum of selected coinpath measurable fields
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`: returns transaction details.
- `transactions`: returns attributes of transactions.

## Example Query

The following query traces outbound BTC fund flow from a seed address, returning sender/receiver addresses, amounts in USD, block height, and transaction hashes.

[Open this query on IDE](https://ide.bitquery.io/Destination-of-Funds-from-a-Specific-Address-on-Bitcoin)

```graphql
{
  bitcoin(network: bitcoin) {
    coinpath(
      initialAddress: { is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd" }
      date: { after: "2023-10-10" }
      options: { limit: 10, asc: "block.height", seed: 10 }
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
      currency {
        name
        address
      }
    }
  }
}
```

For more coinpath examples — including inbound tracing and two-address relationship analysis — see the [Bitcoin Coinpath API examples](/v1/docs/Examples/bitcoin/Bitcoin-Coinpath-API) and the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Bitcoin API examples](https://docs.bitquery.io/v1/docs/Examples/bitcoin)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)
