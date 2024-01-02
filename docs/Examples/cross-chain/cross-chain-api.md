# Cross-Chain Capabilities with Bitquery's API

In this section we see how to use Bitquery APIs to get information across multiple chains in one go.

# Table of Contents

1. [Balance of a Wallet](#balance-of-a-Wallet)
2. [Token Transfers](#token-transfers-tracking)
3. [Cross-Chain Trade Insights](#cross-chain-trade)
4. [Universal Token Tracking](#universal-token-tracking)


<a name="balance-of-a-Wallet"></a>

## Balance of a Wallet

Retrieve address balances across multiple blockchains in one query.

[Query Example](https://ide.bitquery.io/Query-to-check-balance-on-multiple-blockchains_3)

```
query ($address: String!) {
  ethereum: ethereum {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  bsc: ethereum(network: bsc) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  cronos: ethereum(network: cronos) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  celo: ethereum(network: celo_mainnet) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  matic: ethereum(network: matic) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  velas: ethereum(network: velas) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  moonbeam: ethereum(network: moonbeam) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  fantom: ethereum(network: fantom) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  avalanche: ethereum(network: avalanche) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  klaytn: ethereum(network: klaytn) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  bitcoin: bitcoin {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  zcash: bitcoin(network: zcash) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  bitcoinsv: bitcoin(network: bitcoinsv) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  bitcash: bitcoin(network: bitcash) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  litecoin: bitcoin(network: litecoin) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  dash: bitcoin(network: dash) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  dogecoin: bitcoin(network: dogecoin) {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  cardano: cardano {
    addressStats(address: {is: $address}) {
      address {
        balance
        balanceInUSD: balance(in: USD)
      }
    }
  }
  tron: tron {
    address(address: {is: "TVFKwzE8qeETLaZEHMx2tjEsdnujAgAWaA"}) {
      balances {
        currency {
          name
          symbol
        }
        value
        usdValue: value(in: USD)
      }
    }
  }
}

{
  "address": "0xb3eaf12a04d9e9df7efa681a92043ef4371ed6fe"
}
```
    
<a name="token-transfers-tracking"></a>

## Token Transfers Tracking 

Monitor token movements across different chains for any address.

[You can find the query here](https://ide.bitquery.io/Cross-chain-transfers)

```

query ($address: String!) {
  ethereum: ethereum {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  bsc: ethereum(network: bsc) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  cronos: ethereum(network: cronos) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  celo: ethereum(network: celo_mainnet) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  matic: ethereum(network: matic) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  velas: ethereum(network: velas) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  moonbeam: ethereum(network: moonbeam) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  fantom: ethereum(network: fantom) {
    address(address: {is: $address}) {
      balances {
        value
        usdValue: value(in: USD)
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
  avalanche: ethereum(network: avalanche) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  klaytn: ethereum(network: klaytn) {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
  tron: tron {
    transfers(
      any: [{sender: {is: $address}}, {receiver: {is: $address}}]
      options: {limit: 100}
    ) {
      amount
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        name
        symbol
      }
      amount
    }
  }
}
```
    
<a name="cross-chain-trade"></a>

## Cross-Chain Trade Insights

Gain in-depth insights into token trades spanning various blockchains.

-   [Query Example](https://ide.bitquery.io/Cross-chain-Trades)
    
```
query ($limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum: ethereum {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  bsc: ethereum(network: bsc) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  cronos: ethereum(network: cronos) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  celo: ethereum(network: celo_mainnet) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  matic: ethereum(network: matic) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  velas: ethereum(network: velas) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  moonbeam: ethereum(network: moonbeam) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  fantom: ethereum(network: fantom) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  avalanche: ethereum(network: avalanche) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
  klaytn: ethereum(network: klaytn) {
    dexTrades(
      options: {desc: "count", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      makerOrTaker: {is: $address}
    ) {
      ...TradeInfo
    }
  }
}

fragment TradeInfo on EthereumDexTrades {
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
  dates: count(uniq: dates)
  started: minimum(of: date)
}
{
  "limit": 10,
  "offset": 0,
  "address": "0x225fa3acd63bc510a2286e9132c017167536bf76",
  "from": "2023-12-07",
  "till": "2023-12-14T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<a name="universal-token-tracking"></a>

## Universal Token Tracking

Keep track of tokens across diverse blockchain networks.

-   [Query Example](https://ide.bitquery.io/multi-chain-token-tracing)
    

```
query ($from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum: ethereum {
    transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      amount: {gt: 0}
      date: {since: $from, till: $till}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
  
  bsc: ethereum(network: bsc) {
    transfers(
      currency: {is: "0x55d398326f99059fF775485246999027B3197955"}
      amount: {gt: 0}
      date: {since: $from, till: $till}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
  
  celo: ethereum(network: celo_mainnet) {
    transfers(
      currency: {is: "0xf6d198cd2a85bb2f3021cdbdab6b878474079be7 "}
      amount: {gt: 0}
      date: {since: $from, till: $till}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
   matic: ethereum(network: matic) {
    transfers(
      currency: {is: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F "}
      amount: {gt: 0}
      date: {since: $from, till: $till}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
  
  avalanche: ethereum(network: avalanche) {
    transfers(
      currency: {is: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7 "}
      amount: {gt: 0}
      date: {since: $from, till: $till}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}

```