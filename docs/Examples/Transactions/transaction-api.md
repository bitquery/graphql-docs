---
title: "Multi-Chain Transaction API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for transactions on Bitcoin, Ethereum, and other networks. Get hashes, senders, receivers, and aggregates."
keywords: [transaction API examples, GraphQL queries, Bitquery]
---

# Transaction API

The Transaction API returns raw transaction data — hashes, senders, receivers, gas costs, fees, success status, and more — across all supported blockchains. Works for EVM chains (Ethereum, BSC, Polygon), UTXO chains (Bitcoin, Dash, Dogecoin), and others (Solana, Cosmos).

## Get Recent Bitcoin Transactions With Fees Sizes and In Out Values

Fetch the latest Bitcoin transactions with full UTXO details — input/output values in BTC and USD, fee amounts, transaction size, weight, and coinbase flag. Covers all the fields a block explorer would display.

**Variations:** Add `txHash: {is: "..."}` to look up a single transaction. Use `date` for a specific period. Apply [sorting](/docs/query-features/filtering/sorting) by `feeValue` to find highest-fee transactions. Switch `network` to `litecoin`, `dogecoin`, or `dash`.

[Open this query on IDE](https://ide.bitquery.io/Latest-Transaction-on-Bitcoin)

```graphql
{
  bitcoin(network: bitcoin) {
    transactions(
      options: { desc: ["block.height", "index"], limit: 10, offset: 0 }
      date: { since: "2023-07-13", till: "2023-07-20" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      inputValue
      input_value_usd: inputValue(in: USD)
      outputCount
      inputCount
      index
      hash
      feeValue
      fee_value_usd: feeValue(in: USD)
      feeValueDecimal
      minedValue
      minedValueDecimal
      outputValue
      outputValueDecimal
      txCoinbase
      txLocktime
      txSize
      txVersion
      txVsize
      txWeight
    }
  }
}
```

## Get Recent Ethereum Transactions With Gas Nonce and Recipients

Retrieve the latest Ethereum transactions with sender, receiver, gas price, nonce, success/error status, and contract creation details. Returns both ETH and USD gas values.

**Variations:** Add `txSender` or `txTo` to filter by address. Use `success: true` to exclude reverts. Filter by `txType` for specific transaction types. Switch `network` to `bsc`, `matic`, or any EVM chain.

[Open this query on IDE](https://ide.bitquery.io/Ethereum-Transaction-API)

```graphql
{
  ethereum(network: ethereum) {
    transactions(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-12" }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      creates {
        address
      }
      currency {
        name
      }
      error
      feePayer
      gas
      gasCurrency {
        name
        symbol
      }
      gasPrice
      gasValue
      nonce
      success
      to {
        address
      }
      txType
    }
  }
}
```

## List Ethereum Transactions Inside One Block by Block Height

Get all transactions in a specific Ethereum block by filtering on `height`. Useful for block-level analysis, MEV research, or reconstructing the full execution of a block.

**Variations:** Use `height: {in: [N, M]}` to query multiple blocks. Add `success: false` to find reverted transactions in the block. Apply [count aggregation](/docs/query-features/aggregation/count) for total transaction count per block.

[Open this query on IDE](https://ide.bitquery.io/Transaction-in-ethereum-block)

```graphql
{
  ethereum(network: ethereum) {
    transactions(
      options: { desc: "block.height", limit: 10, offset: 0 }
      height: { is: 17680897 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      creates {
        address
      }
      currency {
        name
      }
      error
      feePayer
      gas
      gasCurrency {
        name
        symbol
      }
      gasPrice
      gasValue
      nonce
      success
      to {
        address
      }
      txType
    }
  }
}
```

## Get Ethereum Transactions To From or Creating One User Address

Get the complete transaction history for an address using the `any` filter (OR condition) across `txSender`, `txTo`, and `txCreates`. Captures all transactions where the address was a sender, receiver, or contract creator.

**Variations:** Remove `txCreates` if you only need sent/received. Use [limit/offset](/docs/query-features/filtering/options) for pagination. Add `date` to narrow the time window. Use [aliases](/docs/query-features/aliases) to rename fields for cleaner API responses.

[Access the query here](https://ide.bitquery.io/Ethereum-transaction-of-an-address)

```graphql
{
  ethereum(network: ethereum) {
    transactions(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-01-01" }
      any: [
        { txSender: { is: "0xa0c68c638235ee32657e8f720a23cec1bfc77c77" } }
        { txTo: { is: "0xa0c68c638235ee32657e8f720a23cec1bfc77c77" } }
        { txCreates: { is: "0xa0c68c638235ee32657e8f720a23cec1bfc77c77" } }
      ]
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      hash
      gasValue
      gas_value_usd: gasValue(in: USD)
      creates {
        address
      }
      currency {
        name
      }
      error
      feePayer
      gas
      gasCurrency {
        name
        symbol
      }
      gasPrice
      gasValue
      nonce
      success
      to {
        address
      }
      txType
    }
  }
}
```

## Get Daily Solana Transaction Counts for the Last Ten Days

Aggregate daily transaction counts on Solana sorted by most recent date. A minimal query pattern for tracking network throughput and activity trends.

**Variations:** Change `limit` for more or fewer days. Use `asc: "date.date"` for chronological order. Add fields like `gasValue(calculate: sum)` for daily fee totals. Switch to [other aggregations](/docs/query-features/aggregation/) like `average` for per-transaction metrics.

[Access the query here](https://ide.bitquery.io/Get-daily-Solana-transaction-volume-for-the-last-10-days)

```
# Get count of transaction per day on Solana for last 10 days in descending.
# Change limit to get more or less.

query get_per_day_transaction_count_of_solana_for_last_ten_days{
  solana(network: solana) {
    transactions(options: {desc: "date.date", limit: 10}) {
      date {
        date
      }
      count
    }
  }
}
```

## Get Cronos or Crypto.org Chain Transaction Details by Hash

Look up a single Cosmos-based transaction by hash. Returns block height, timestamp, gas used/wanted, fee details, signer address, transaction type, success flag, memo, and the raw transaction data. Works for Cronos and Crypto.org chains.

**Variations:** Remove the `hash` filter and add `date` + `options: {limit: N}` to browse recent transactions. Filter by `type` for specific transaction types (e.g., bridge, delegate). The `rawTx` field contains the full encoded transaction including source channel and auth info.

You can find the query [here](https://ide.bitquery.io/Cronos-Bridged-Tx-Info)

```
query ($network: CosmosNetwork!, $hash: String!) {
  cosmos(network: $network) {
    transactions(hash: {is: $hash}) {
      block {
        height
        timestamp {
          time
        }
      }
      code
      fee
      feeCurrency {
        name
        symbol
      }
      gasUsed
      gasWanted
      index
      signer {
        address
        annotation
      }
      type
      success
      memo
      rawTx
    }
  }
}

```

## Count Unique Ethereum Transaction Senders and Receivers on One Date

Count the number of unique transaction senders and receivers on a specific date using `count(uniq: senders)` and `count(uniq: receivers)`. Useful for measuring daily active addresses and network engagement.

**Variations:** Change the `date` to any day or use `date: {since: ..., till: ...}` for a range. Add `count(uniq: dates)` for active days in the range. Use [aliases](/docs/query-features/aliases) to rename the output fields. Switch `network` for other EVM chains.

```
query MyQuery {
  ethereum(network: ethereum) {
    transactions(date: {is: "2024-01-01"}) {
      Unique_senders:count(uniq: senders)
      Unique_receivers:count(uniq: receivers)
    }
  }
}

```

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
