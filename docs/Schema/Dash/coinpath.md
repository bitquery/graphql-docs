---
title: Dash Coinpath API
description: "Track fund flows up to any depth on Dash with coinpath."
---

<head>
<meta name="title" content="Dash Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain."/>
<meta name="keywords" content="Dash api, Dash python api, Dash nft api, Dash scan api, Dash matic api, Dash api docs, Dash crypto api, Dash blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dash Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Dash blockchain. Also, get information on blocks for tokens or NFTs on the Dash blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dash Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Dash blockchain. Also, get blocks information for tokens or NFTs on the Dash blockchain." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Dash.

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
- `maximum`: returns maximum of selected measurable fields of coinpath
- `minimum`: returns minimum of selected measurable fields of coinpath
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`: returns transaction details.
- `transactions`: returns attributes of transactions.

## Example Query

The following query traces outbound DASH fund flow from an address, returning sender/receiver addresses, amounts, block height, and transaction hashes. Dash uses the UTXO model, so coinpath queries go through the `bitcoin` schema with `network: dash`.

```graphql
{
  bitcoin(network: dash) {
    coinpath(
      initialAddress: { is: "XpESxaUmonkq8RaLLp46Brx2K39ggQe226" }
      date: { after: "2023-01-01" }
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
      }
      depth
      count
    }
  }
}
```

For more coinpath examples — including inbound tracing and multi-hop fund tracking — see the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [Dash schema overview](https://docs.bitquery.io/v1/docs/Schema/Dash/overview)
- [Blockchain API examples](https://docs.bitquery.io/v1/docs/Examples/overview)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

