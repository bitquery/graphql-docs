---
title: BNB Coinpath API
description: "Track fund flows up to any depth on BNB Smart Chain with coinpath."
---

<head>
<meta name="title" content="BNB Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the BNB blockchain. Also, get information on blocks for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the BNB blockchain. Also, get information on blocks for tokens or NFTs on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the BNB blockchain. Also, get blocks information for tokens or NFTs on the BNB blockchain." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `currency`: Filter by the currency involved in the transaction.
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

The following query traces outbound BNB fund flow from an address up to 2 hops deep, returning sender/receiver details, amounts, and block timestamps. Add `direction: inbound` inside `options` to trace incoming funds instead.

```graphql
{
  ethereum(network: bsc) {
    coinpath(
      initialAddress: { is: "0x8894e0a0c962cb723c1ef8a1b3c07b89fcb4ea93" }
      currency: { is: "BNB" }
      depth: { lteq: 2 }
      options: {
        seed: 110
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2023-01-01", till: "2023-06-30" }
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
        name
      }
      transaction {
        hash
        value
      }
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d")
        }
      }
      depth
      count
    }
  }
}
```

For more coinpath examples — including inbound tracing, two-address relationship analysis, and multi-hop fund tracking — see the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [BNB Smart Chain schema overview](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

