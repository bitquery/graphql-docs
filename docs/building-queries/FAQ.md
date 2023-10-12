# Glossary and Frequently Asked Questions

## What is the difference between a transfer and a transaction on chain?

Please read the difference between Transfers and transactions [**here**](https://community.bitquery.io/t/transfers-vs-transactions-what-is-the-difference/1589).

## How to calculate the price of a token in USD?

We can calculate price of a token in USD using `buyAmountUSD` and `sellAmount` fields.

The USD price is then calculated by dividing the `buyAmountUSD` field by the `sellAmount` field. This gives us the USD price of the sell currency in terms of the buy currency.

For example, if the `buyAmountUSD` field is 100 USD and the `sellAmount` field is 1 ETH, then the USD price of ETH is 100 USD / 1 ETH = 100 USD/ETH.

Below is the query to calculate price of a token betweeen two dates `from` and `to`

```
query ($from: ISO8601DateTime!, $to: ISO8601DateTime!, $limit: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      time: {after: $from, before: $to}
      options: {limit: $limit, asc: ["block.height", "tradeIndex"]}
      buyCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      transaction {
        hash
      }
      tradeIndex
      buyCurrency {
        symbol
        address
        name
        tokenType
        decimals
      }
      buyAmount
      buyAmountUSD: buyAmount(in: USD)
      sellCurrency {
        symbol
        address
        name
        tokenType
        decimals
      }
      sellAmount
      sellAmountUSD: sellAmount(in: USD)
      usdPrice: expression(get: "buyAmountUSD / sellAmount")
      maker {
        address
      }
      taker {
        address
      }
      protocol
      exchange {
        address {
          address
        }
        name
      }
      smartContract {
        address {
          address
        }
      }
    }
  }
}
<!-- Parameters -->
{
  "from": "2023-05-17T12:06:59.000Z",
  "to": "2023-05-17T12:21:59.000Z",
  "limit": 10
}
```

## How to use priceAsymmetry to filter anomalies and outliers in Trades ?

The priceAsymmetry metric is being used to filter outliers of anomalies. This means that trades that have a price asymmetry that is greater than 1 will be excluded from the results. This helps to ensure that the results are more accurate and reliable, as it removes any trades that may have been caused by anomalies.


priceAsymmetry measures how close the trade’s prices are to each other. If the price asymmetry is less than 0.01, then the difference between the prices is less than 1%.
However, the value of 0.01 might be too small and could omit a lot of trades. To improve your anomaly filtering mechanism, , add another filter like `tradeAmountUsd: {gt: 100}` filter to only include trades with a trade amount of more than 100 USD.

Here’s an example query for [WETH trades](https://ide.bitquery.io/PriceAsymmetry-and-TradeAmountUSD)

```
query ($baseAddress: String, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: $baseAddress}
      date: {since: "2023-07-30", till: "2023-07-30"}
      options: {limit: 500, desc: "timeInterval.minute"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      tradeAmountUsd: {gt: 100}
      priceAsymmetry: {lt: 1}
    ) {
      timeInterval {
        minute(count: $interval)
      }
      sellCurrency: quoteCurrency {
        address
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: date, get: quote_price)
      close: maximum(of: date, get: quote_price)
    }
  }
}

{
  "interval": 5,
  "baseAddress": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
}


```

## How to calculate the marketcap of a token ?

`Market capitalization = Latest token price * Total supply`

Above, we have already shown how to get the USD price of an asset; now, let's get the supply.

**Query to get supply**

`Total supply =  Initial Supply + Minted supply - Burned supply`

In the following query, we will get the initial supply from the contract attributed and then use transfer API to get mint and burns by checking how many tokens were sent or received from the dead address.

[Open this query on IDE](https://ide.bitquery.io/Supply-of-Drip-token).

```
{
  ethereum(network: bsc) {
    address(address: {is: "0x20f663cea80face82acdfa3aae6862d246ce0333"}) {
      annotation
      address
      smartContract {
        attributes {
          name
          value
        }
        contractType
        currency {
          symbol
          name
          decimals
          tokenType
        }
      }
    }
    transfers(date: {since: null, till: null}, amount: {gt: 0}) {
      minted: amount(
        calculate: sum
        sender: {is: "0x0000000000000000000000000000000000000000"}
      )
      burned: amount(
        calculate: sum
        receiver: {is: "0x0000000000000000000000000000000000000000"}
      )
      currency(currency: {is: "0x20f663cea80face82acdfa3aae6862d246ce0333"}) {
        symbol
        name
      }
    }
  }
}

```

Note: In many cases token attributes shown as null in those cases you should find other ways to get supply of the token.
