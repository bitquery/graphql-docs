---
title: "ZenZEC API - Latest Trades, Price, Volume on Solana"

description: "Get ZenZEC token latest trades, price, volume, and DEX trading data on Solana blockchain using ZenZEC GraphQL API. Track ZenZEC token transactions and market activity."
---

# zenZEC API - Latest Trades, Price, Volume on Solana

Get ZenZEC token latest trades, price, volume, and DEX trading data on Solana blockchain using our GraphQL API. Track ZenZEC token transactions, market activity, and trading pairs.

The below GraphQL API is an example of data points you can get with Bitquery for ZenZEC token.

If you have any question on other data points reach out to [support](https://t.me/Bloxy_info).

:::note

To query data via GraphQL **outside the Bitquery IDE**, you need to generate an API access token.

Follow the steps here to create one: [How to generate Bitquery API token ➤](https://docs.bitquery.io/docs/authorisation/how-to-generate/)

:::

:::warning

**Different Endpoint Required**

This query uses a different endpoint: `https://streaming.bitquery.io/graphql`

Make sure to use this endpoint when querying ZenZEC data.

:::

<head>

<title>ZenZEC API - Latest Trades, Price, Volume on Solana</title>

<meta
  name="title"
  content="ZenZEC API - Latest Trades, Price, Volume on Solana"
/>

<meta
  name="description"
  content="Get ZenZEC token latest trades, price, volume, and DEX trading data on Solana blockchain using ZenZEC GraphQL API. Track ZenZEC token transactions and market activity."
/>

<meta
  name="keywords"
  content="ZenZEC API,ZenZEC token API,ZenZEC Solana API,ZenZEC trades API,ZenZEC price API,ZenZEC volume API,ZenZEC DEX API,ZenZEC GraphQL API,ZenZEC token trades,ZenZEC blockchain API,ZenZEC token data,ZenZEC trading pairs,ZenZEC market data,Solana DEX API,Solana token API,blockchain API,crypto API"
/>

<meta name="robots" content="index, follow" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="language" content="English" />

<meta property="og:type" content="website" />

<meta
  property="og:title"
  content="ZenZEC API - Latest Trades, Price, Volume on Solana"
/>

<meta
  property="og:description"
  content="Get ZenZEC token latest trades, price, volume, and DEX trading data on Solana blockchain using ZenZEC GraphQL API."
/>

<meta property="twitter:card" content="summary_large_image" />

<meta
  property="twitter:title"
  content="ZenZEC API - Latest Trades, Price, Volume on Solana"
/>

<meta
  property="twitter:description"
  content="Get ZenZEC token latest trades, price, volume, and DEX trading data on Solana blockchain using ZenZEC GraphQL API."
/>

</head>

---

### Table of Contents

- [Get Latest Trades for ZenZEC Token ➤](#get-latest-trades-for-zenzec-token)

---

## Get Latest Trades for ZenZEC Token

Get the latest 50 trades for ZenZEC token including trade details, prices, amounts, market information, and DEX protocol data.

[Try ZenZEC Latest Trades Query ➤](https://ide.bitquery.io/Latest-Trades-of-zenZEC-COin)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
query LatestTrades {
  Solana(network: solana) {
    DEXTradeByTokens(
      orderBy: {descending: Block_Time}
      limit: {count: 50}
      where: {Trade: {Currency: {MintAddress: {is: "JDt9rRGaieF6aN1cJkXFeUmsy7ZE4yY3CZb8tVMXVroS"}}}}
    ) {
      Block {
        Time
      }
      Transaction {
        Signature
      }
      Trade {
        Market {
          MarketAddress
        }
        Dex {
          ProtocolName
          ProtocolFamily
        }
        AmountInUSD
        PriceInUSD
        Amount
        Currency {
          Name
        }
        Side {
          Type
          Currency {
            Symbol
            MintAddress
            Name
          }
          AmountInUSD
          Amount
        }
      }
    }
  }
}
```

</details>


:::tip

**Need More Solana Token Data?**

Check out our other Solana examples:
- [Solana Transfers API ➤](https://docs.bitquery.io/docs/Examples/Solana/transfers)
- [Solana DEX Trades API ➤](https://docs.bitquery.io/docs/Examples/dexTrades/)

:::
