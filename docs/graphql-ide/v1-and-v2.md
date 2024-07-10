# Difference between Bitquery GraphQL V1 and V2 APIs

Today we will explain the difference between our V1 and V2 APIs. Let’s start with naming; we call our V2 APIs as Streaming APIs. Additionally, there is also a difference in the endpoint.

If you have any questions please comment on [this community post](https://community.bitquery.io/t/difference-between-bitquery-graphql-v1-and-v2-apis/1561).

## Endpoints

V1 — https://graphql.bitquery.io/
V2 — https://streaming.bitquery.io/graphql

If you want to access V1 on IDE, please use [this link](https://ide.bitquery.io/), and for V2, please use [this link](https://streaming.bitquery.io/).

Also, Here are [examples of V1](https://ide.bitquery.io/explore/ethereum) and [getting a starter guide](https://community.bitquery.io/t/how-to-get-started-with-bitquerys-blockchain-graphql-apis/13). Additionally, check out [examples of V2](https://ide.bitquery.io/explore/EVM) and [V2 docs](https://docs.bitquery.io/).

Now, let’s talk about a few features which we added in new Streaming APIs (V2).

## 1. Real-time APIs

As the name suggests, V2 APIs are designed to provide [real-time blockchain data without any delay](https://bitquery.io/blog/analysis-of-blockchain-availabilitybased-on-block-lag).

It combines both real-time and historical data. Therefore, provides a seamless view of querying blockchains with real-time updates.

## 2. WebSocket support

Streaming API support WebSockets through [GraphQL Subscriptions](https://graphql.org/blog/subscriptions-in-graphql-and-relay/), it’s an [event-based data subscription](https://docs.bitquery.io/docs/ide/subscription/) where you can write a query, and whenever a query has new data, it will be pushed to you. Because of this, you can now access real-time blockchain updates.

GraphQL subscriptions are very useful for building notification services.

## 3. New blockchains

V1 APIs support [40+ blockchains](https://account.bitquery.io/user/system_status). However, Streaming APIs currently have Ethereum, Binance Smart Chain, and **Arbitrum.**

We are adding Optimism and slowly migrating more chains from V1 API in which Real timeliness becomes critical for a better user experience.

## 4. Token holder API

Streaming APIs have [BalanceUpdates](https://docs.bitquery.io/docs/evm/balances/) APIs which allow you to aggregate data to get token balances or holders.

You can get them for any time in the past for NFTs and fungible tokens. Additionally, you can get the holders with over a specific balance.

Here is an example of [token holder API](https://docs.bitquery.io/docs/examples/balances/tokenHolders-api/).

## 5. NFT support

One of the major improvements we brought in V2 APIs is [NFT APIs](https://bitquery.io/products/nft-apis).

Now you can query all sorts of NFT data, such as Ownership, Metadata, Transfers, trades, origin & history, using our APIs.

Check out our [Opensea](https://bitquery.io/blog/opensea-nft-api) and [Blur APIs](https://bitquery.io/blog/blur-nft-marketplace-api).

## 6. Call data and Trace APIs

Many times our users look for [trace data](https://community.bitquery.io/t/bitquery-trace-api/1556) with raw transaction data for various reasons, including data verifiability.

We now support much richer call data with path and argument details, opcodes, and raw data in our V2 APIs.

See examples of our [Trace APIs](https://ide.bitquery.io/Transaction-Call-Trace-v2_1).

## 7. Argument filtering

This is our game-changing feature in which you can query the Arguments of a smart contract like a Mysql table.

You can check data for specific argument values, aggregate argument values, etc.

Check our [Blur marketplace API](https://bitquery.io/blog/blur-nft-marketplace-api) article to see the usage of this feature.

## What’s Next?

We are very excited to see enable more features in our Streaming APIs. Here are a few things which we will enable in the upcoming weeks.

* **Mempool data** — We already have Mempool data, and we are going to enable it soon in our V2 APIs.
* **Cross-chain queries** — We are going to add Cross chain queries functionality where you can query multiple blockchains using 1 query.
* **More blockchains** — We are adding Optimism and going to add more blockchains with high throughput.
* [**Data in the cloud** ](https://bitquery.io/products/streaming)— This is our new product, which uses streaming internally, using which we will allow complete historical and Real-time data through AWS, Snowflake, Google, and other Cloud vendors.

If you have questions about our APIs, please check out [Telegram](https://t.me/bloxy_info), and the [forum](https://community.bitquery.io/).