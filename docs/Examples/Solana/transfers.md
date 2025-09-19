---
title: Solana Historical Transfers API Documentation
description: Comprehensive guide to Solana token transfers, SPL transfers, and wallet transaction monitoring using Bitquery's GraphQL API.
keywords:
  - Solana transfers API
  - Solana token transfers
  - SPL token transfers
  - Solana wallet transfers
  - Solana transaction monitoring
  - Solana transfer history
  - Solana balance tracking
  - Solana transfer analytics
  - Solana transfer data
  - Solana transfer queries
---

# Solana Historical Transfers API

The Solana Historical Transfers API provides comprehensive access to token transfer data on the Solana blockchain, including SPL token transfers, SOL transfers, and detailed transaction information. This API enables real-time monitoring and historical analysis of all transfer activities across the Solana network.

## What is Solana Transfers API?

Bitquery's Solana Transfers API helps you fetch detailed transfer data by writing GraphQL queries. You can track token movements, monitor wallet activities, analyze transfer patterns, and build comprehensive dashboards for Solana-based applications.

## What are the capabilities of Bitquery Solana Transfers API?

The Solana Transfers API offers extensive capabilities:

- **Real-time and Historical Data**: Access both live and historical transfer information. For realtime information access the [new streaming Solana docs](https://docs.bitquery.io/docs/blockchain/Solana/)
- **Comprehensive Filtering**: Filter by wallet addresses, token types, time periods, and transaction signatures
- **Multi-token Support**: Track SOL, SPL tokens, and custom tokens
- **Detailed Transaction Data**: Get complete transfer details including amounts, timestamps, and transaction metadata
- **Balance Tracking**: Calculate wallet balances by analyzing incoming and outgoing transfers
- **Program Integration**: Identify which Solana programs initiated transfers
- **Flexible Querying**: Use GraphQL's powerful querying capabilities for complex data retrieval

## Difference between Solana RPC and Bitquery Solana Transfers API?

**Solana RPC**

- Raw transaction data requiring custom parsing
- No built-in transfer aggregation or filtering
- Limited historical data access
- Requires significant development effort for transfer analysis

**Bitquery Solana Transfers API**

- Pre-parsed, structured transfer data
- Built-in filtering, aggregation, and historical analysis
- Real-time streaming capabilities
- Ready-to-use transfer analytics and monitoring

## Real-time Streaming and Webhooks

For real-time transfer monitoring, you can convert GraphQL queries to subscriptions for live data streams. This enables:

- **WebSocket Connections**: Monitor transfers in real-time via WebSocket
- **Webhook Integration**: Set up automated notifications for specific transfer patterns
- **Live Dashboards**: Build real-time transfer tracking applications

Learn more about [WebSocket subscriptions](https://docs.bitquery.io/docs/subscriptions/websockets/) and [real-time Solana data streams](https://docs.bitquery.io/docs/streams/real-time-solana-data/).

For streaming real-time data, check our [Solana Streaming API docs](https://docs.bitquery.io/docs/examples/Solana/)

## Recent transfers to/from a wallet address

This query retrieves the most recent 100 transfers involving a specific wallet address, showing both incoming and outgoing transactions. The `any` keyword allows us to search for transfers where the wallet is either the sender OR receiver in a single query.

You can run the query [here](https://ide.bitquery.io/Transfers-of-an-address_1)

```
query MyQuery {
  solana {
    transfers(
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Find the Sender of a Token to An Address

This query identifies all senders who have transferred a specific token to a particular wallet address. This is useful for tracking token sources.

[Run query](https://ide.bitquery.io/find-sender-of-a-token)

```
query MyQuery {
  solana(network: solana) {
    transfers(
      options: {desc: "block.timestamp.iso8601", limit: 100}
      date: {is: "2025-09-19"}
      currency: {is: "BEgRWQSg9emtttqwWgf6Rp3U17EyaoUaerDZrFMzpump"}
      receiverAddress: {is: "AQ46kfYT3hW28Xg5gWHrJkzFSz1oGWBHC3FsTbqgMEco"}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```

## Historical Inflow/Outflow from a Wallet

This query demonstrates how to analyze wallet activity at a specific block height by separating incoming (inflow) and outgoing (outflow) transfers. This is particularly useful for understanding wallet behavior during specific events or time periods.

You can run the query [here](https://ide.bitquery.io/outflowinflow-of-an-address-on-Solana)

```
{
  solana(network: solana) {
    outflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      senderAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }

    inflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      receiverAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }
  }
}


```

## Transfers of a wallet for a specific time period

This query demonstrates how to retrieve transfers for a specific wallet within a defined time range. This is essential for time-based analysis, reporting, and compliance requirements.

Test the API [here](https://ide.bitquery.io/Transfers-of-a-wallet-for-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transfers(
      time:{since:"2025-07-24T14:00:00Z" till:"2025-07-24T16:00:00Z"}
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Top Transfers of a token

This query identifies the largest transfers for a specific token, sorted by transfer amount. This is useful for identifying significant token movements and whale activity.

Try the query [here](https://ide.bitquery.io/v1-top-transfers-of-a-solana-token_1).

```
query MyQuery {
  solana {
    transfers(
      currency: {is: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"}
      options: {desc: "amount", limit: 10}
      date: {after: "2025-02-10"}
    ) {
      amount
      block {
        height
        hash
      }
      currency {
        symbol
        name
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```

## Historical Balance of a Wallet Address using transfers

This query demonstrates how to calculate a wallet's historical balance by analyzing all incoming and outgoing transfers up to a specific point in time. The balance is calculated by subtracting total outgoing transfers from total incoming transfers, with amounts converted to USD for accurate valuation.

Test the query [here](https://ide.bitquery.io/solana-money-sent-and-recieved-by-an-address_5)

```
{
  solana {
    sent: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      senderAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
    recieved: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      receiverAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
  }
}

```

## Get Transaction details for a specific signature

This query retrieves all transfer details contained within a specific transaction signature. This is essential for transaction analysis, debugging, and understanding the complete flow of a multi-transfer transaction.

Test the query [here](https://ide.bitquery.io/get-historical-transaction-detail-on-Solana).

```
query MyQuery {
  solana(network: solana) {
    transfers(
      date: {is: "2025-07-19"}
      options: {limit: 1000, desc: ["transaction.transactionIndex", "block.height"]}
      signature: {is: "4p2Qbd3vH5xXDHLQRfEivHjAcoWTxad5ZcWjZmiHVtf1CnnvQC28Z2sLXgb8Bo7ivjNVmwYAE34phFPgcvKVph6k"}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```

## Get transfers data for a specific time period

This query retrieves all transfers within a specific time window across the entire Solana network. This is useful for network-wide analysis, but requires careful time range selection due to the high volume of transfers on Solana.

**Important Notes:**

- Keep time ranges small (1 day or less) to avoid memory limits
- Use this for network analysis and trending
- Consider using pagination for larger datasets

Test the API [here](https://ide.bitquery.io/get-transfers-data-for-a-particular-time-period).

```
query MyQuery {
  solana(network: solana) {
    transfers(
      time: {since: "2025-07-19T01:00:00Z", till: "2025-07-19T01:15:00Z"}
      options: {limit: 10, desc: ["transaction.transactionIndex", "block.height"]}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```
