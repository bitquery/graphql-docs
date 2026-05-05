---
sidebar_position: 1
title: "BNB Smart Chain API — Blockchain Data Schema | Bitquery"
description: "Access BNB Smart Chain blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [BNB Smart Chain API, BNB Smart Chain GraphQL, BNB Smart Chain blockchain data, Bitquery]
---

# BNB API Overview

Bitquery API offers access to indexed data from the BNB blockchain via GraphQL API for developers.

The BNB schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `bsc` as shown below:

```
query {
  ethereum(network: bsc){
    __typename
  }
}
```

Let's dive in and explore the BNB data available through Bitquery API.

BNB Smart Chain (BSC) is an EVM-compatible network where **BNB** pays gas and anchors a large DeFi ecosystem (including major DEXes such as PancakeSwap). Queries use the `ethereum` root with `network: bsc`; Bitquery provides deep coverage of blocks, tokens, contracts, DEX activity, and address-level metrics.

## What You Can Query

- **Blocks** — heights, timestamps, validators/miners where exposed, gas usage, and transaction counts
- **Transactions** — hashes, from/to, status, gas, and calldata for contract interactions
- **Transfers** — BNB and BEP-20 movements with amounts, symbols, and USD values where available
- **Smart contracts** — creation, methods, and events surfaced through the EVM indexing model
- **DEX trades** — swaps, pairs, and volumes consistent with Bitquery’s DEX schemas on EVM chains
- **Coinpath** — token flow graphs across wallets and contracts
- **Active addresses** — engagement signals derived from indexed transfer and transaction activity

## Common Use Cases

- **DEX and token analytics** — pair volumes, liquidity events, and trader behavior on BSC-native markets
- **Whale and treasury monitoring** — large transfers, contract wallets, and recurring payout patterns
- **Ecosystem growth metrics** — active addresses, new contracts, and transfer counts over time
- **Enterprise token operations** — businesses issuing BEP-20 loyalty, reward, or in-game tokens can track distribution, holder activity, and redemption patterns at scale on BSC's low-fee infrastructure

## Related Resources

- [DEX Trades examples](https://docs.bitquery.io/v1/docs/Examples/dexTrades/dex-trading-data-api)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Smart Contract Events examples](https://docs.bitquery.io/v1/docs/Examples/smartcontractEvents/smart-contract-events-api)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
