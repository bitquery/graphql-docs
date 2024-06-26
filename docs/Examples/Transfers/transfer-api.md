---
sidebar_position: 1
---

# Transfer API

Transfer API is available for all blockchains that have smart contract capabilities, especially EVMs. This api helps you get token (native or non-native) transfers. Let's see a few examples.

## All transfers for a token

To get all transfers for a token, you can use the following api. In this API, we are mentioning WBNB token transfer, and for that, we are mentioning its token address 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c. You can get transfers for more than one currency by mentioning their address using `{in: ["currency1", "currency2"…]}` instead of using `{is: "currency"}`. Additionally to get transfers for the native token, you need to use its symbol directly for example, in case of a BNB chain `BNB` is the native token, therefore you can just mention its symbol like `{is: "BNB"}`.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## Transfers sent by an address

To check all transfers sent by an address you can following query.

[Open this query in IDE](https://ide.bitquery.io/WBNB-transfers-of-a-sender-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      sender: { in: ["0x170d2ed0b2a5d9f450652be814784f964749ffa4"] }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## Transfers received by address

To check all transfers received by an address use following query.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-of-a-receiver-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      receiver: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## All transfers of a address

We can use `any` filter, which is basically an `OR` condition to get all transfers sent and received by an address.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-of-an-address-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      any: [
        { sender: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] } }
        { receiver: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] } }
      ]
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## Biggest transfers of a token

To check the biggest transfers of a token, you can use the following query. In this query, we are ordering results based on the transfer amount.

[Open this query on IDE](https://ide.bitquery.io/Top-10-WBNB-Transfers-on-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "amount", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## Transfers of a transaction

To check all transfers in a transaction use following query.

[Open this query on IDE](https://ide.bitquery.io/All-transfers-for-a-transaction-on-binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      amount: { gt: 0 }
      txHash: {
        is: "0xda0e780b6c527ced6e7d29e002643f65fc194b6f23df153cf35b4396f71a80d6"
      }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## All transfers in a block

To check all transfers in a block use following query.

[Open this query on IDE](https://ide.bitquery.io/All-transfers-in-a-block-on-binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(amount: { gt: 0 }, height: { is: 30068951 }) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## All internal transfers

Internal transfers are triggered by smart contract and using the following query you can check only internal transfers by using filter `external : false`.

```graphql
{
  ethereum(network: bsc) {
    transfers(amount: { gt: 0 }, height: { is: 30068951 }, external: false) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## Summary of token received by a wallet

Our GraphQL APIs are very good for aggregation. For example, in the following query, we are getting all currencies with the amount received by address on the Binance chain since 1st Jan 2023.
Note: As the BNB chain has a huge amount of data, therefore to optimize the query you should use date and try not to query data over 1 year, otherwise it might not return results.

https://ide.bitquery.io/Summary-of-tokens-received-by-an-address

```graphql
{
  ethereum(network: bsc) {
    transfers(
      amount: { gt: 0 }
      receiver: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      date: { since: "2023-01-01" }
    ) {
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
    }
  }
}
```

## Latest Filecoin Transfers

The query below allows gets the latest Filecoin transfers made on the Filecoin network ordered by descending order of block height and limited to 10 responses between the two dates `from` and `till`

[Access query here](https://ide.bitquery.io/latest-filecoin-transfers)

```

  query ($network: FilecoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    blocks(
      options: {desc: "height", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      count
      messageCount
      reward
      minerTips
    }
  }
}

<!-- Parameters -->
{

  "limit": 10,
  "offset": 0,
  "network": "filecoin",
  "from": "2023-02-22",
  "till": "2023-03-01T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## SPL (Solana Program Library ) Token Transfers

This query is used to fetch the SPL token transfers on the Solana network within a specific time frame. It excludes SOL transfers and only considers those transactions where the transferred amount is greater than zero.

You can run the query [here](https://ide.bitquery.io/solana_transfers_token_)

```

query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    transfers(
      options: {desc: "block.height", limit: $limit, offset: $offset}
      time: {since: $from, till: $till}
      currency:{not:"SOL"}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        signature
      }
    }
  }
}


{
  "limit": 10,
  "offset": 0,
  "network": "solana",
  "from": "2024-01-12T21:35:54.000Z",
  "till": "2024-01-12T23:50:54.999Z",
  "dateFormat": "%Y-%m-%d"
}
```

## Celo NFT Transfers

The below query gets transfers for ChinChilla Gang (GANG) NFT and CeloPunks NFT collection on Celo network by mentioning the curency smart contract in the `  currency: {in:}` filter. You can use it to retrieve the most recent transfers for specific NFT collections
You can find the query [here](https://ide.bitquery.io/Celo-NFT-Transfers)

```
query MyQuery {
  ethereum(network: celo_mainnet) {
    transfers(
      currency: {in: ["0xc8DF51073CD581902b4fb50131d31f29343131F0","0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160"]}
      options: {limit: 10, desc: "block.height"}
    ) {
      currency {
        address
        name
        symbol
        tokenType
      }
      amount
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        gas
        gasPrice
        gasValue
        hash
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
    }
  }
}


```

## Detailed NFT Transfers

NFT transfers are much better supported on our V2 APIs (Streaming APIs). Therefore please check [streaming APIs](https://bitquery.io/products/streaming).
