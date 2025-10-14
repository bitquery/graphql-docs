---
title: "Coinpath® API - Money Flow Tracking, Fund Tracing, Bundle Detection"
description: "Track money flow, trace funds across multiple hops, detect token bundling, analyze funding patterns, and build compliance solutions with Coinpath® API. Support for all major blockchains including Ethereum, Bitcoin, Solana, and more."
---

# Coinpath® API - Money Flow Tracking, Fund Tracing, Transaction Paths

Track money flow and fund movements across blockchain networks with Coinpath® API. Get transaction paths, trace funds across multiple hops (depth), analyze inbound and outbound flows, and build compliance solutions.

Coinpath® API supports all blockchains we support on the [v1 endpoint](https://ide.bitquery.io/?endpoint=https://graphql.bitquery.io) and tokens built on them, enabling comprehensive money tracking capabilities for compliance, fraud detection, and forensic analysis.

The graphQL APIs below are examples of data points you can get with Coinpath®. If you have questions about other compliance use cases, reach out to [support](https://t.me/Bloxy_info).

:::note
To query data via GraphQL **outside the Bitquery IDE**, you need to generate an API access token.

Follow the steps here to create one: [How to generate Bitquery API token ➤](https://docs.bitquery.io/docs/authorisation/how-to-generate/)
:::

<head>
<title>Coinpath® API - Money Flow Tracking, Fund Tracing, Bundle Detection</title>
<meta
  name="title"
  content="Coinpath® API - Money Flow Tracking, Fund Tracing, Bundle Detection"
/>
<meta
  name="description"
  content="Track money flow, trace funds across multiple hops, detect token bundling, analyze funding patterns, and build compliance solutions with Coinpath® API. Support for all major blockchains including Ethereum, Bitcoin, Solana, and more."
/>
<meta
  name="keywords"
  content="Coinpath API,money flow tracking,fund tracing,bundle detection,token bundling,sybil attack detection,wash trading,funding history,transaction path analysis,blockchain compliance,crypto forensics,AML compliance,fund flow analysis,inbound outbound tracking,blockchain money tracking,Ethereum fund tracking,Bitcoin transaction tracing,Solana coinpath,multi-hop analysis,address relationship,wallet tracking,blockchain forensics,crypto investigation,on-chain analysis,transaction graph,address clustering,fund destination,source of funds,bot detection,coordinated funding,wallet funding patterns"
/>
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />

<meta property="og:type" content="website" />
<meta
  property="og:title"
  content="Coinpath® API - Money Flow Tracking, Fund Tracing, Bundle Detection"
/>
<meta
  property="og:description"
  content="Track money flow, detect token bundling, analyze funding patterns across blockchain networks for compliance and forensic analysis"
/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:title" content="Coinpath® API - Money Flow Tracking, Fund Tracing, Bundle Detection"/>
<meta property="twitter:description" content="Track money flow, detect token bundling, analyze funding patterns for compliance and forensic analysis"/>
</head>

---

### Table of Contents

### 1. Understanding Coinpath Concepts

- [What Is Depth (Hops)?](#what-is-depth)
- [What Is Direction?](#what-is-direction)
- [Minimum Transaction Amount](#minimum-tx-amount)
- [Maximum Address Transaction Count](#maximum-address-tx-count)
- [Maximum Total Transaction Count](#maximum-total-tx-count)
- [Complexity Limit](#complexity-limit)
- [Seed Parameter](#seed)

### 2. Fund Flow Tracking

- [Destination of Funds from an Address](#destination-of-funds-from-an-address)
- [Source of Funds to an Address](#source-of-funds-from-an-address)
- [Relation Between Two Addresses on Ethereum](#relation-between-two-addresses-on-ethereum)
- [Tracing SOL Movement on Solana](#tracing-sol-movement-between-two-addresses-on-solana)

### 3. Multi-Chain Examples

- [Cardano Wallet Inflows](#getting-inflows--fund-moving-in-to-a-cardano-wallet-address)
- [Ethereum Multi-Hop Tracking](#get-transactions-from-multiple-addresses-to-a-final-destination-address)

### 4. Funding History & Bundle Detection

- [Get First Transfer to an Address (Who Funded First?)](#get-first-transfer-to-an-address-who-funded-first)
- [Get Recent Transfers Before Specific Block](#get-recent-transfers-before-specific-block)
- [Find Relation Between Creator of a Token and Buyer](#find-relation-between-creator-of-a-token-and-buyer)


## Understanding Coinpath Concepts

## What Is Depth?

Please check following image to understand the depth (hop).

![coinpath](/img/depth_coinpath.png)

## What Is Direction?

It's the direction of fund flow: **inbound** (incoming funds) or **outbound** (outgoing funds). This parameter determines whether you're tracking money coming into an address or money going out of an address.

## Minimum Tx Amount

A `parameter` available inside `Options` that allows you to filter transactions based on amount. This helps focus on significant fund movements and exclude dust transactions from your analysis.

## Maximum Address Tx Count

If defined > 0, the API will not expand addresses for the next depth if they have more than this count of transactions. Use this to stop on exchange-type addresses and prevent unnecessary expansion of high-volume wallets.

## Maximum Total Tx Count

Prevents extending to the next depth if the total transaction count on the previous hop exceeds this metric. Used to prevent long computation times and optimize query performance.

## Complexity Limit

If the initial count of transactions for the address under coinpath exceeds this value, the query will not proceed and returns an error. This prevents timeouts and ensures efficient resource usage.

## Seed

A random number used to prevent caching of results. Only needed if blockchain data is expected to be modified during coinpath calculations.

---

## Fund Flow Tracking

## Destination Of Funds From An Address

Track where funds are going from a specific address across multiple hops. In 2019, Upbit exchange was hacked and tweeted out the [hacker's address](https://explorer.bitquery.io/ethereum/address/0xa09871aeadf4994ca12f5c0b6056bbd1d343c029/graph?from=2018-03-01&till=2021-01-31). Using the following API, you can track the destination of funds over multiple hops (depth) for compliance and forensic analysis.

[Open this query on IDE](https://ide.bitquery.io/destination-of-funds-for-upbit-hackers)

```graphql
{
  ethereum(network: ethereum) {
    outbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
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

## Source Of Funds From An Address

Track where funds came from to a specific address using inbound direction. This API helps identify the origin of funds across multiple transaction hops. You can increase the depth parameter based on your compliance or investigation requirements.

[Open this query on IDE](https://ide.bitquery.io/All-inbound-transactions-to-Upbit-hacker-address)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        direction: inbound
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
          time(format: "%y-%m-%d")
        }
      }
      depth
      count
    }
  }
}
```

## Relation Between Two Addresses On Ethereum

Analyze the relationship between two Ethereum addresses by combining inbound and outbound coinpath queries. This helps determine if two addresses have ever transacted directly or through intermediary hops, useful for fraud detection and compliance screening.

[Open this query on IDE](https://ide.bitquery.io/Relation-between-two-ethereum-addresses)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      sender: { is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5" }
      currency: { is: "ETH" }
      depth: { lteq: 1 }
      options: {
        direction: inbound
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2019-11-20", till: "2019-11-30" }
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
      transaction {
        value
        hash
      }
      block {
        height
        timestamp {
          time(format: "%y-%m-%d")
        }
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      receiver: { is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2019-11-20", till: "2019-11-30" }
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

---

## Multi-Chain Examples

## Tracing SOL Movement Between Two Addresses On Solana

Track Solana (SOL) token movements between addresses using Coinpath API. The query below traces the movement of SOL with customizable depth parameters. The query returns two objects: `inbound` and `outbound`. The `inbound` object contains all incoming transactions to the specified address, while the `outbound` object contains all outgoing transactions from the address.

[Open this query on IDE](https://ide.bitquery.io/solana-coinpath-example)

```
query ($network: SolanaNetwork!, $address: String!, $inboundDepth: Int!,
        $outboundDepth: Int!, $limit: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime,
        $currency: String!
       ) {
        solana(network: $network) {
          inbound: coinpath(
            initialAddress: {is: $address}
            depth: {lteq: $inboundDepth}
            options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
            date: {since: $from, till: $till}
            currency: { is: $currency }
          ) {
            sender {
              address
              annotation
            }
            receiver {
              address
              annotation
            }
            amount
            currency {
              symbol
              name
            }
            depth
            count
          }
          outbound: coinpath(
            initialAddress: {is: $address}
            depth: {lteq: $outboundDepth}
            options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
            date: {since: $from, till: $till}
            currency: { is: $currency }
          ) {
            sender {
              address
              annotation
            }
            receiver {
              address
              annotation
            }
            amount
            currency {
              symbol
              name
            }
            depth
            count
          }
        }
      }

<!-- Parameters -->

      {
  "inboundDepth": 1,
  "outboundDepth": 1,
  "limit": 10,
  "offset": 0,
  "network": "solana",
  "address": "4yWr7H2p8rt11QnXb2yxQF3zxSdcToReu5qSndWFEJw",
  "currency": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  "from": "2022-09-19",
  "till": "2022-09-26T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Getting Inflows (Funds Moving In) To A Cardano Wallet/Address

Track all incoming token transfers to a Cardano wallet address. Get details of tokens moving into a wallet using the `outputs` function with `outputAddress` set to the target wallet address. The query below retrieves all token movements into a Cardano wallet between specified dates.

[Open this query on IDE](https://ide.bitquery.io/All-inflows-into-Cardano-wallet)

```
query ($network: CardanoNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  cardano(network: $network) {
    outputs(
      date: {since: $from, till: $till}
      outputAddress: {is: $address}
      options: {desc: ["block.height", "outputIndex"], limit:10}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
    }
  }
}

<!-- Parameters -->

{
  "address": "addr1qxz3ve4caaywwg6q82ax9l5xknyc7juvwwsw20cpugyz5gv9zent3m6guu35qw46vtlgddxf3a9ccuaqu5lsrcsg9gss69fhxw",
  "network": "cardano",
  "from": "2022-10-19",
  "till": "2022-10-26T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

## Get Transactions From Multiple Addresses To A Final Destination Address

Track multi-hop transaction paths from an initial address to a final destination address, regardless of how many intermediate addresses are involved. Use the `finalAddress` parameter to filter coinpaths that end at a specific target address. This is particularly useful for tracking fund flows in money laundering investigations and compliance monitoring.

[Open this query on IDE](https://ide.bitquery.io/Ethereum-inbound-coinpath-from-one-address-to-another)

```
query ($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
      finalAddress: {is: "0xa910f92acdaf488fa6ef02174fb86208ad7722ba"}
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
{
  "inboundDepth": 3,
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "address": "0xbfba2df39ae248e3dfdefa7a92ac3df9be260bf7",
  "currency": "ETH",
  "from": "2018-10-01",
  "till": "2023-10-11T23:59:59",
  "dateFormat": "%Y-%m"
}
```

This field can be used to filter the results of the query to only include coinpaths that end at a specific address. For example, the query in the example above will only return coinpaths that end at the address `0xa910f92acdaf488fa6ef02174fb86208ad7722ba`.

The `finalAddress` field can also be used to calculate the total amount of funds that were sent to a specific address. To do this, you can use the count field to count the number of coinpaths that end at the address, and the amount field to sum the amount of funds that were sent in each coinpath.

---

## Funding History of Address

Detect bundled tokens and hidden funding patterns by analyzing the complete funding history of an address. This section helps identify suspicious wallet behaviors, token bundling schemes, and coordinated funding activities often used to manipulate markets or hide fund origins. **Bundle Detection**: Identify wallets funded by the same source to detect token bundling

### Get First Transfer to an Address (Who Funded First?)

Identify the original funding source of a wallet address. This is critical for detecting bundled tokens where multiple wallets are funded from the same source address to create artificial trading volume or manipulate token launches.

:::info Performance Note
These queries search across the entire blockchain history to find the earliest transfer. Depending on the address age and blockchain size, the query may take additional time to execute. For faster results, consider adding date filters if you have an approximate time range.
:::

#### Solana

[Run Query](https://ide.bitquery.io/Find-earliest-funding-of-an-address-using-Coinpath)

```
query MyQuery {
  solana(network: solana) {
    transfers(
      receiverAddress: {is: "CreQJ2t94QK5dsxUZGXfPJ8Nx7wA9LHr5chxjSMkbNft"}
      options: {limit: 1, asc: "block.timestamp.time"}
    ) {
      block {
        timestamp {
          time
        }
        height
      }
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      sender {
        type
        mintAccount
        address
      }
      receiver {
        type
        mintAccount
        address
      }
    }
  }
}
```

#### Ethereum

[Run Query](https://ide.bitquery.io/Find-earliest-funding-of-an-address-using-Coinpath-ethereum)

```
query MyQuery {
  ethereum(network: ethereum) {
    transfers(
      receiver: {is: "0x116763c54E8F269B471768c791d197037a79653D"}
      options: {limit: 1, asc: "block.timestamp.time"}
    ) {
      block {
        timestamp {
          time
        }
        height
      }
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      receiver {
        smartContract {
          contractType
        }
        annotation
        address
      }
      sender {
        annotation
        address
        smartContract {
          contractType
        }
      }
      success
    }
  }
}
```

### Get Recent Transfers Before Specific Block

Track recent funding activity before trading begins on a DEX. This helps detect just-in-time wallet funding patterns common in bot operations and coordinated pump schemes.

#### Solana

[Run Query](https://ide.bitquery.io/Find-recent-funding-of-an-address-using-Coinpath-Solana)

```
query MyQuery {
  solana(network: solana) {
    transfers(
      receiverAddress: {is: "CreQJ2t94QK5dsxUZGXfPJ8Nx7wA9LHr5chxjSMkbNft"}
      options: {limit: 1, asc: "block.timestamp.time"}
      height: {lteq: 353744732}
    ) {
      block {
        timestamp {
          time
        }
        height
      }
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      sender {
        type
        mintAccount
        address
      }
      receiver {
        type
        mintAccount
        address
      }
    }
  }
}

```

#### Ethereum

[Run Query](https://ide.bitquery.io/Find-recent-funding-of-an-address-using-Coinpath-ethereum)

```
query MyQuery {
  ethereum(network: ethereum) {
    transfers(
      receiver: {is: "0x116763c54E8F269B471768c791d197037a79653D"}
      options: {limit: 1, desc: "block.timestamp.time"}
      height: {lteq: 21662204}
    ) {
      block {
        timestamp {
          time
        }
        height
      }
      currency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      receiver {
        smartContract {
          contractType
        }
        annotation
        address
      }
      sender {
        annotation
        address
        smartContract {
          contractType
        }
      }
      success
    }
  }
}


```

Use this to find:

- Wallets funded right before token launches
- Coordinated funding timing patterns
- Source addresses funding multiple trading wallets

### Find Relation Between Creator of a Token and Buyer

#### Solana

[Run Query](https://ide.bitquery.io/Find-relation-between-pumpfun-creator-and-buyer_2)

```
{
  solana(network: solana) {
    coinpath(
      initialAddress: {is: "F3oHfZ4MniLiygXTkwugUgQ9zn1vgZiH4rtMtcbPbxTC"}
      depth: {lteq: 2}
      options: {direction: inbound, asc: "block.timestamp.time", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2025-10-01"}
      finalAddress: {is: "3YJmmFMwq5z6YBMVusJjsiowqT4S3BCWUGo61wbvjqwd"}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      currency {
        symbol
        name
      }
      depth
      count
      block {
        timestamp {
          time
        }
        height
      }
    }
  }
}
`

```

## Related Resources

You may also be interested in:

- [Cross-Chain API ➤](https://docs.bitquery.io/docs/Examples/cross-chain/cross-chain-api/)
- [Solana DEX Trades API ➤](https://docs.bitquery.io/docs/blockchain/Solana/solana-dextrades/)
- [Blockchain Address API Examples ➤](https://docs.bitquery.io/docs/blockchain/Ethereum/balances/balance-api/)
- [Transaction API ➤](https://docs.bitquery.io/docs/blockchain/Ethereum/transactions/transaction-api/)
- [Transfers API ➤](https://docs.bitquery.io/docs/blockchain/Ethereum/transfers/erc20-token-transfer-api/)

## Need Help?

If you have questions about Coinpath API or need assistance with compliance and forensic analysis use cases, reach out to our [support team](https://t.me/Bloxy_info).
