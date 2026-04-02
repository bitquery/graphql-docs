---
title: "Ethereum Coinpath API"
description: "Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more."
---

<head>
<meta name="title" content="Ethereum Coinpath API"/>

<meta name="description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details."/>

<meta name="keywords" content="Ethereum coinpath, Ethereum GraphQL, fund flow, token flow, Bitquery, money flow, blockchain analytics, ERC-20 tracing, transaction graph"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Coinpath API" />

<meta property="og:description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details."/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Coinpath API" />

<meta property="twitter:description" content="Retrieve detailed money flow information using the coinpath API. Filter by currency, date, sender, receiver, and more. Explore transaction details." />
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
- `transaction`:  returns transaction details.
- `transactions`: returns attributes of transactions.

## Example Query

The following query traces outbound fund flow from an address up to 2 hops deep, returning sender/receiver details, amounts, block timestamps, and transaction hashes. You can switch to inbound tracing by adding `direction: inbound` inside `options`.

[Open this query on IDE](https://ide.bitquery.io/destination-of-funds-for-upbit-hackers)

```graphql
{
  ethereum(network: ethereum) {
    coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        seed: 110
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2018-03-01", till: "2021-01-31" }
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
          time(format: "%y-%d-%m")
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

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)
