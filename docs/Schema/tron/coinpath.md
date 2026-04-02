---
title: Tron Coinpath API
description: "Track fund flows up to any depth on Tron with coinpath."
---

<head>
<meta name="title" content="Tron Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get information on blocks for tokens or NFTs on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Tron blockchain. Also, get blocks information for tokens or NFTs on the Tron blockchain." />
</head>

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Tron network.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `currency`: filter by currency of transfer
- `date`: filter by date of the transfer
- `depth`: fitler by depth of the call
- `initialAddress`: filter by initial address of transfer
- `initialDate`: filter by initial date of transfer
- `initialTime`: filter by initial time of the transfer
- `options`: filter returned data by ordering, limiting, and constraining it.
- `receiver`: filter by receiver of transfer
- `sender`: filter by sender of transfer
- `time`: fitler by time of the transfer

</details>

- `amount`: returns transfered value
- `any`:
- `block`: returns block where transaction is included
- `count`: returns count of transfers
- `countBigInt`: returns coutn as BigInt
- `currency`: returns currency of transfer
- `depth`: returns depth of the graph
- `maximum`: returns maximum of selected measurable field of coinpath
- `minimum`: returns minimum of selected measurable field of coinpath
- `receiver`: returns receiver address
- `sender`: returns sender address
- `transaction`: returns transaction of transfer happened

## Example Query

The following query traces USDT fund flow from an initial address on Tron, returning amounts, block timestamps, sender/receiver balances, depth, and transaction hashes.

```graphql
{
  tron {
    coinpath(
      currency: { is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" }
      initialAddress: { is: "TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN" }
      initialDate: { after: "2023-07-31" }
      options: { desc: "block.timestamp.iso8601", limit: 5 }
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      depth
      receiver {
        address
        balance
        amountOut
        amountIn
      }
      sender {
        address
        amountIn
        amountOut
        balance
      }
      transaction {
        hash
      }
    }
  }
}
```

For more coinpath examples — including receiver-based tracing — see the [Tron Coinpath API examples](/v1/docs/Examples/tron/coinpath) and the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Tron API examples](https://docs.bitquery.io/v1/docs/Examples/tron)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

