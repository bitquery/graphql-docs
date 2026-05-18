---
title: "Blockchain Address API Examples"
description: "Example GraphQL queries for addresses across chains. Get transactions, balances, transfers, and coinpath."
keywords: [address API examples, GraphQL queries, Bitquery]
sidebar_position: 1
---

# Address API

The Address API lets you query transactions, token transfers, balances, DEX trades, smart contract calls, and fund flow (Coinpath) for any address across all supported blockchains. Below are cross-chain examples you can adapt by changing the address and network.


## Get All Transactions for an Ethereum Address
Get all transactions sent and received by an Ethereum address using the `any` filter (OR on `txSender` and `txTo`). Returns block timestamps, gas values in ETH and USD, and success/revert status.

**Variations:** Query multiple addresses with `{in: ["addr1", "addr2"]}`. Add `date` or `success: true` filters. Apply [limit/offset](/docs/query-features/filtering/options) for pagination. Switch `network` for other EVM chains.

[Open this query on IDE](https://ide.bitquery.io/ethereum-transactions-of-an-address)

```graphql
{
  ethereum(network: ethereum) {
    transactions(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      any: [{txTo: {is: "0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575"}}, {txSender: {is: "0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575"}}]
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      success
      address: to {
        address
        annotation
      }
      gasValue
      gas_value_usd: gasValue(in: USD)
      gasCurrency {
        symbol
      }
      hash
    }
  }
}
```


## Get Ethereum Token Transfers Sent and Received by an Address

Fetch all token transfers (sent and received) for a wallet using the `any` filter on `sender` and `receiver`. Returns token symbols, USD amounts, and transaction hashes within a date range.

**Variations:** Add `currency: {is: "TOKEN_ADDRESS"}` to filter for a specific token. Use [aggregations](/docs/query-features/aggregation/) like `sum` on `amount` for total volume. Remove the `date` filter for all-time data.

[Open this query on IDE](https://ide.bitquery.io/Ethereum-transfers-sent-and-received-by-an-Ethereum-address)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", asc: "currency.symbol", limit: 10, offset: 0}
      date: {since: "2023-07-14", till: "2023-07-21"}
      amount: {gt: 0}
      any: [{receiver: {is: "0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575"}}, {sender: {is: "0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575"}}]
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


## Track Transfers Sent by Multiple Ethereum Addresses

Query outbound token transfers from multiple wallets in a single API call using `sender: {in: [...]}`. Supports up to 100 addresses per query — useful for monitoring exchange hot wallets, treasury addresses, or a portfolio of wallets.

**Variations:** Switch `sender` to `receiver` for inbound transfers. Add `currency` to filter by token. Use [sorting](/docs/query-features/filtering/sorting) by `sender.address` to group results by wallet.

[Open this query on IDE](https://ide.bitquery.io/Transfers-sent-by-multiple-addresses)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "sender.address", asc: "currency.symbol", limit: 10, offset: 0}
      date: {since: "2023-07-14", till: "2023-07-21"}
      amount: {gt: 0}
      sender: {in: ["0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575", "0x93ff65b50b2f12387bc448d5ee17c1600cd66626"]}
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


## Query DEX Trades for an Ethereum Address

Retrieve all DEX swap activity for a specific wallet using the `makerOrTaker` filter. Returns buy/sell currencies, USD amounts, trade counts, and median and latest prices per pair — useful for building a wallet's trading history or P&L reports.

**Variations:** Filter by `exchange` or `smartContractAddress` for a specific DEX. Add `buyCurrency` or `sellCurrency` for a specific token. Use [aggregations](/docs/query-features/aggregation/) like `sum` on `buyAmount` for total volume traded.

[Open this query on IDE](https://ide.bitquery.io/Trades-of-an-address)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {desc: "count", limit: 10, offset: 0}
      date: {since: "2023-05-14", till: "2023-07-21"}
      makerOrTaker: {is: "0x8e90e03e654ef936095083152c2a1b217d5bdf2e"}
    ) {
      sellCurrency {
        symbol
        address
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      buyCurrency {
        symbol
        address
      }
      buyAmount
      buy_amount_usd: buyAmount(in: USD)
      count
      median_price: price(calculate: median)
      last_price: maximum(of: block, get: price)
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
    }
  }
}
```


## Query Address Balances on Polygon and Bitcoin Networks

Check token balances for any wallet address. The first query returns all token balances on Polygon. The second shows the Bitcoin UTXO-based approach — sum outputs and subtract inputs to calculate BTC balance.

[Open this query on IDE](https://ide.bitquery.io/Balance-of-a-matic-address)

```
{
  ethereum(network: matic) {
    address(address: {is: "0x67bc4c44ce5327d9aee3772a8a7ac092107d7a21"}) {
      balances {
        value
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
}

```

**Variations:** On EVM chains, remove the `currency` filter for all token balances or use `currency: {in: [...]}` for specific tokens. For UTXO chains (Bitcoin, Litecoin, Dogecoin), use the inputs/outputs pattern below — balance = `outputs.value - inputs.value`. Add `value(in: USD)` for USD-equivalent amounts.

[Open this query on IDE](https://ide.bitquery.io/Input-outputs-of-an-address_1)


```graphql
{
  bitcoin(network: bitcoin) {
    inputs(inputAddress: {is: "bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf"}) {
      count
      value
      value_usd: value(in: USD)
    }
    outputs(outputAddress: {is: "bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf"}) {
      count
      value
      value_usd: value(in: USD)
    }
  }
}

```


## Track USDT Balance History for an Ethereum Address
Track how a wallet's token balance changed over time with block-level detail. Returns the balance value, transfer amount, timestamp, and block number for each update. For richer balance tracking, see the [V2 BalanceUpdates API](https://docs.bitquery.io/docs/examples/balances/balance-api/).

**Variations:** Change the `currency` to track a different token. Adjust the `date` filter for different time periods. Remove `currency` to see all token balance changes for the wallet.

[Open this query on IDE](https://ide.bitquery.io/usdt-balance-history-template_1)

```graphql
{
  ethereum {
    address(address: {is: "0x28c6c06298d514db089934071355e5743bf21d60"}) {
      balances(
        currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
        date: {after: "2023-07-01"}
      ) {
        history {
          value
          transferAmount
          timestamp
          block
        }
        currency {
          name
          symbol
        }
      }
      smartContract {
        currency {
          symbol
          name
          tokenType
        }
      }
    }
  }
}
```

## Get Smart Contract Calls for a Polygon Address
List all smart contract method calls made by a specific wallet address. Returns method names, signature hashes, contract addresses, gas costs, and transaction hashes — useful for understanding what a wallet has interacted with.

**Variations:** Add `smartContractAddress` to filter calls to a specific contract. Use `smartContractMethod: {is: "transfer"}` for a specific function. Switch `network` to any EVM chain. Apply [count aggregation](/docs/query-features/aggregation/count) to rank contracts by interaction frequency.

[Open this query on IDE](https://ide.bitquery.io/query/XVYLusoNeGcYm5b3)

```graphql
{
  ethereum(network: matic) {
    smartContractCalls(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2023-05-14", till: "2023-07-21"}
      caller: {is: "0x67bc4c44ce5327d9aee3772a8a7ac092107d7a21"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      smartContractMethod {
        name
        signatureHash
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      external
      gasValue
      gas_value_usd: gasValue(in: USD)
    }
  }
}

```

## Trace Inbound ETH Sources to an Ethereum Address with Coinpath

Trace where an address received its funds from using Coinpath's `inbound` direction. Returns sender addresses, amounts, smart contract details, and hop depth — essential for compliance checks, AML investigations, and source-of-funds verification.

**Variations:** Increase `depth: {lteq: N}` for deeper tracing. Change `currency` to track ERC-20 tokens. Adjust `limitBy` to control results per hop. See [Coinpath Explained](/docs/building-queries/Coinpath-Explained/Overview) for a detailed walkthrough.

[Open this query on IDE](https://ide.bitquery.io/Source-of-funds-of-an-address)

```graphql
 {
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      currency: {is: "ETH"}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2018-03-01", till: "2021-01-31"}
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


## Track Outbound ETH Destinations from an Ethereum Address with Coinpath

Trace where an address sent its funds using Coinpath's default outbound direction. Maps the destination wallets and contracts that received ETH from the target address — useful for tracking fund disbursements and outflow analysis.

**Variations:** Combine with the inbound query above in a single request (using [aliases](/docs/query-features/aliases)) for a complete fund-flow picture. Increase `depth` for multi-hop tracing. Add a `date` filter for a specific time window.


[Open this query on IDE](https://ide.bitquery.io/Destination-of-funds-for-an-address)

```graphql
{
  ethereum(network: ethereum) {
    outbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      currency: {is: "ETH"}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2018-03-01", till: "2021-01-31"}
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

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cross-chain examples](https://docs.bitquery.io/v1/docs/Examples/cross-chain/cross-chain-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)


