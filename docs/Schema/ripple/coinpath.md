---
title: Ripple Coinpath API
---

<head>
<meta name="title" content="Ripple Coinpath API"/>
<meta name="description" content="Track flow of funds up to any depth on the Ripple blockchain. Also, get information on blocks for tokens or NFTs on the Ripple blockchain."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple api, Ripple api docs, Ripple crypto api, Ripple blockchain api, ripple network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple Coinpath API" />
<meta property="og:description" content="Track flow of funds up to any depth on the Ripple blockchain. Also, get information on blocks for tokens or NFTs on the Ripple blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple Coinpath API" />
<meta property="twitter:description" content="Track flow of funds up to any depth on the Ripple blockchain. Also, get blocks information for tokens or NFTs on the Ripple blockchain." />
</head>

The `coinpath` API allows us to retrieve detailed information about flow of funds on the XRP network.

```
query ($network: RippleNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $currency: String!) {
  ripple(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit, offset: $offset}}
      date: {since: $from, till: $till}
      currencyTo: {is: $currency}
    ) {
      sender {
        address
        annotation
        lastTransferAt {
          time
        }
        firstTransferAt {
          time
        }
      }
      receiver {
        address
        annotation
        lastTransferAt {
          time
        }
        firstTransferAt {
          time
        }
      }
      amount: amountTo
      currency: currencyTo {
        symbol
        name
        decimals
        address
        tokenId
        tokenType
      }
      depth
      count
      currencyFrom {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      transaction {
        valueTo
        valueFrom
        index
        hash
      }
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit, offset: $offset}}
      date: {since: $from, till: $till}
      currencyFrom: {is: $currency}
    ) {
      sender {
        address
        annotation
        lastTransferAt {
          time
        }
        firstTransferAt {
          time
        }
      }
      receiver {
        address
        annotation
        lastTransferAt {
          time
        }
        firstTransferAt {
          time
        }
      }
      amount: amountTo
      currency: currencyTo {
        symbol
        name
        decimals
        address
        tokenId
        tokenType
      }
      depth
      count
      currencyFrom {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      transaction {
        valueTo
        valueFrom
        index
        hash
      }
    }
  }
}

{
  "inboundDepth": 1,
  "outboundDepth": 1,
  "limit": 10,
  "offset": 0,
  "network": "ripple",
  "address": "rBTwLga3i2gz3doX6Gva3MgEV8ZCD8jjah",
  "currency": "XRP",
  "from": "2023-08-10",
  "till": "2023-08-17T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Coinpath Results</summary>

- `initialAddress`: This field specifies the address that you want to track the flow of funds for.
- `depth`: This field specifies the number of hops to follow the flow of funds.
- `options`: This field specifies the options for the query, such as the order of the results and the number of results to return.
- `date`: This field specifies the date and time range for the query.
  - `since`: This keyword specifies the start date and time for the range.
  - `till`: This keyword specifies the end date and time for the range.
- `currency`: This field specifies the currency that you want to track the flow of funds for.

</details>

## Fields

- `sender`: This field specifies the address that sent the funds.
- `receiver`: This field specifies the address that received the funds.
- `amount`: This field specifies the amount of funds that were transferred.
- `currency`: This field specifies the currency that the funds were transferred in.
- `depth`: This field specifies the number of hops that the funds traveled.
- `count`: This field specifies the number of transactions that were involved in the flow of funds.
- `currencyFrom`: This field specifies the currency that the funds were originally held in, if the funds were converted.
- `transaction`: This field specifies the transaction that was used to transfer the funds.
