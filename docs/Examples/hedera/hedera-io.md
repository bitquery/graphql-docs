---
title: "Hedera Inputs & Outputs API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Hedera transfers and account balances. Get inputs, outputs, and token movements."
keywords: [Hedera API examples, Hedera GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Hedera Inputs & Outputs API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Hedera transfers and account balances. Get inputs, outputs, and token movements."/>
<meta name="keywords" content="Hedera API examples, Hedera GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Inputs & Outputs API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Hedera transfers and account balances. Get inputs, outputs, and token movements." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Inputs & Outputs API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Hedera transfers and account balances. Get inputs, outputs, and token movements." />
</head>

# Hedera Inputs & Outputs API


In this section we will see some examples on tracing funds from/to an hedera address.

## Most Transfered Token

You can run the query [here](https://ide.bitquery.io/Hedera-inputs)

This will give you the top tokens based on the count of inputs by fetching the inputs (incoming transactions) and sorting them in descending order based on countBigInt

```
{
  hedera(network: hedera) {
    inputs(options: {desc: "countBigInt", limit: 100}) {
      countBigInt
      currency {
        symbol
        address
        tokenId
        name
        decimals
      }
    }
  }
}


```

## Latest Inputs to an Address

To find the latest inputs (incoming transactions) to a specific Hedera address, you can use the following GraphQL query. It fetches the latest 10 inputs (transactions) to the address `0.0.6187183`, sorted by the most recent timestamp.

```
query MyQuery {
  hedera(network: hedera) {
    inputs(
      options: {limit: 10, desc: "time.time"}
      transferEntity:{is:"0.0.6187183"}
    ) {
      amount
      currency {
        name
      }
      memo
      feeCurrency {
        name
      }
      success
      time {
        time
      }
      transactionHash
      transferEntity {
        num
        id
      }
      payerAccount {
        id
        num
      }
      nodeAccount {
        id
        num
      }
      result {
        id
        name
      }
    }
  }
}

```

## Latest Outputs to an Address

To find the latest outputs (outputs transactions) to a specific Hedera address, you can use the following GraphQL query. It fetches the latest 10 inputs (transactions) to the address `0.0.6187183`, sorted by the most recent timestamp.

```
query MyQuery {
  hedera(network: hedera) {
    outputs(
      options: {limit: 10, desc: "time.time"}
      transferEntity:{is:"0.0.6187183"}
    ) {
      amount
      currency {
        name
      }
      memo
      feeCurrency {
        name
      }
      success
      time {
        time
      }
      transactionHash
      transferEntity {
        num
        id
      }
      payerAccount {
        id
        num
      }
      nodeAccount {
        id
        num
      }
      result {
        id
        name
      }
    }
  }
}

```

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Hedera transactions examples](https://docs.bitquery.io/v1/docs/Examples/hedera/hedera-transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
