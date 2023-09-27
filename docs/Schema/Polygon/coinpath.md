---
title:  Polygon Coinpath® API
---


<head>
<meta name="title" content="Polygon Coinpath® - Money Flow API"/>
<meta name="description" content= "Trace tokens on Polygon blockchain and learn about source, destination and involved parties in the transactions."/>
<meta name="keywords" content="polygon api, polygon compliance, polygon money tracking, polygon balance, polygon balance history, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Coinpath® - Money Flow API" />
<meta property="og:description" content="Trace tokens on the Polygon blockchain and learn about the transactions source, destination, and involved parties." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Blocks API" />
<meta property="twitter:description" content="Trace tokens on the Polygon blockchain and learn about the transactions' source, destination, and involved parties." />
</head>

## Coinpath

The `coinpath` API allows us to retrieve detailed information about flow of funds in the chain.

```
{
  ethereum(network: matic) {
    inbound: coinpath(
      initialAddress: {is: "0xaa5e8d18aae59d1db33d59ccdbb865d2127dd68d"}
      currency: {is: "MATIC"}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2023-09-15", till: "2023-09-22"}
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
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: {is: "0xaa5e8d18aae59d1db33d59ccdbb865d2127dd68d"}
      currency: {is: "MATIC"}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2023-09-15", till: "2023-09-22"}
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
      }
      depth
      count
    }
  }
}

```

Check more examples of Coinpath APIs **[here](/docs/Examples/coinpath/money-flow-api.md)**.

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
- `maximum`: returns maximum of selected [coinpath measurable fields](/v1/docs/graphql-reference/objects/ethereum-coinpath)
- `minimum`: returns minimum of selected [coinpath measurable fields](/v1/docs/graphql-reference/objects/ethereum-coinpath)
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`:  returns transaction details.
- `transactions`: returns attributes of transactions.



:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::