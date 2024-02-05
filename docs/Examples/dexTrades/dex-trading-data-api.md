# DEX Trading Data APIs

Our DEX trading APIs provides DEX data for 100s of DEXs from [40+ blockchains](https://account.bitquery.io/user/system_status). Let's see some of example of getting DEX data.

## Buy/Sell Currency vs Base/Quote Currency

Before starting, we need to understand a major difference between Buy/Sell Currency vs Base/Quote Currency, as you will encounter to this going forward. As you already know AMMs have swaps; there is normally no buying or selling happening as you are trading with Liquidity pools. We store these Swaps normally.

In the case of Buy/Sell Currency, we look into only 1 side of the swap.

However, in the case of Base/Quote Currency, we look at both sides of the swap.

For example - Let's say there are 3 trades.
1 - A <-> B
2 - B <-> C
3 - C <-> A

Now when you query, give me all trades where sellCurrency is B, and we will give only 1st trade (Swap). However, if you query saying give me all trades where quoteCurrency is B, we will give both 1st and 2nd because Base/Quote currency looks at both sides of the trade.

## Time vs Date

Time and Date are two different filter. Date do not cosider full time.

For example, if you use `date: {since: "23-07-17T23:59:59"}` here it won't cosider `23:59:59`.
Therefore if you want to use full time, please use `time: {since: "023-07-17T23:59:59"}`.

We use UTC timezone and support ISO8601 Datetime format.

## How we get USD price?

USD doesn't exist on blockchain. We get USD price for all cryptocurrencies trades on major exchanges using our partner [Cryptorank](https://cryptorank.io/exchanges/dex) and we store them on hourly candle basis.

We multiple this USD price to trades, transfers to get USD amounts.

Additionly, we do store historical USD pricing data and multiply them on the same time in which transaction/transfer/trade happened.

## priceAsymmetry

There might be difference in USD amount of buy/sell or base/quote Amounts. `priceAsymmetry` is a filter that can help filter those trades. Let's understand using an example.
If you put this filter like `priceAsymmetry : {lt: 1}` It means only give trades where BuyAmount (or Base Amount) in USD and SellAmount (or Quote Amount) in USD has less than $1 difference.

## How to calculate USD pricing with our APIs?

If you see this [query](https://ide.bitquery.io/Ethereum-Trades-for-specific-time), we are using `expression` to calculate price; in some cases where we don't have Buy or sell amount, you can use this to calculate USD prices because if you have USD price in anywhere in result, you will able to derive USD prices. Additionally, we have a field called `quote price`; it is used with Base/quote currency to get the quote price per token.

## Difference b/w protocol and exchange

Protocols are basically rules or behavior to explain how a system will work. In the context of DEX, A DEX protocol is a set of smart contracts showing how DEX will work. When a protocol is deployed by any entity on the blockchain, it becomes an actual exchange. 
For example, Uniswap is an exchange and a protocol. Uniswap protocol deployed by the Uniswap team created the Uniswap exchange. In the case of PancakeSwap, the exchange is PancakeSwap, but the protocol is still Uniswap.

## How to check if exchange is indexed by Bitquery?

If Bitquery index a protocol (ex - Uniswap v2 protocol), therefore any other exchange which is implemented this Uniswap V2, we have already indexed them. We might not be naming them, but you can get their trades using [**this API**](https://ide.bitquery.io/query/pzizr56shpq6wQrX), by simply replacing exchangeAddress with that exchange's factory address.

## Trades for a specific time on Ethereum

To get trades from the Ethereum blockchain for a specific time, please use the following API.

[Open this query on IDE](https://ide.bitquery.io/Ethereum-Trades-for-specific-time).

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			time: { since: "2023-07-17T00:00:00", till: "2023-07-17T23:59:59" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			buyAmount
			buyCurrency {
				address
				symbol
			}
			buy_amount_usd: buyAmount(in: USD)
			sellAmount
			sellCurrency {
				address
				symbol
			}
			sell_amount_usd: sellAmount(in: USD)
			transaction {
				hash
			}
			PriceInUSD1: expression(get: "buy_amount_usd / buyAmount")
			PriceInUSD2: expression(get: "sell_amount_usd / buyAmount")
		}
	}
}
```

## Trades for an DEX Exchange

To get trades for specific exchange you can you use `exchangeName` (Not recommended) or `exchangeAddress` (recommended). In the following example we are getting, Uniswap's trades. To showcase, we have used both exchangeName and exchangeAddress. In exchange address we have entered factory address of Uniswap v1, v2 and V3 because Uniswap is one exchange with 3 different version deployemnt.

[Open this query in IDE](https://ide.bitquery.io/Trades-for-Uniswap)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-11" }
			exchangeName: { is: "Uniswap" }
			exchangeAddress: {
				in: [
					"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
					"0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95"
					"0x1f98431c8ad98523631ae4a59f267346ea31f984"
				]
			}
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			buyAmount
			buy_amount_usd: buyAmount(in: USD)
			buyCurrency {
				address
				symbol
			}
			sellAmount
			sell_amount_usd: sellAmount(in: USD)
			sellCurrency {
				address
				symbol
			}
			transaction {
				hash
			}
		}
	}
}
```

## Trades for a protocol

Using `protocol` filter you can get trades for any protocol such as Uniswap v3. In the following query we are getting trades for Uniswap v3 protocol, regardless the exchange. In other words, we are getting trades from all exchange that are using Uniswap v3.

[Open this in IDE](https://ide.bitquery.io/Trades-for-protocol-uniswap-v3)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-11" }
			protocol: { is: "Uniswap v3" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			buyAmount
			buy_amount_usd: buyAmount(in: USD)
			buyCurrency {
				address
				symbol
			}
			sellAmount
			sell_amount_usd: sellAmount(in: USD)
			sellCurrency {
				address
				symbol
			}
			transaction {
				hash
			}
		}
	}
}
```

## Trades of a wallet address

You can use `txSender` to see the trades where transaction sender is specific address.

[Open this query on IDE](https://ide.bitquery.io/Trades-for-a-given-wallet)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-19" }
			txSender: { is: "0x5D53F622b9F69e03ea0A960EDc65B6457A1aB235" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			baseAmount
			base_amount_usd: baseAmount(in: USD)
			baseCurrency {
				address
				symbol
			}
			quoteAmount
			quote_amount_usd: quoteAmount(in: USD)
			quoteCurrency {
				address
				symbol
			}
			maker {
				address
			}
			taker {
				address
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Trade for a token

To get trades for a token you can either use buy/sell currency filter or base/quote currency filter. In the following example we are getting trades for [SHIB token](https://explorer.bitquery.io/ethereum/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce).

https://ide.bitquery.io/Trades-for-SHIB-token

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-11" }
			baseCurrency: { is: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			baseAmount
			base_amount_usd: baseAmount(in: USD)
			baseCurrency {
				address
				symbol
			}
			quoteAmount
			quote_amount_usd: quoteAmount(in: USD)
			quoteCurrency {
				address
				symbol
			}
			maker {
				address
			}
			taker {
				address
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## All pairs of a token

To get all pairs for a give token you can use following api.

[Open this on IDE](https://ide.bitquery.io/Pairs-for-give-token-on-ethereum)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
			options: {
				desc: "count"
				limit: 10
				offset: 0
				limitBy: { each: "smartContract.address.address", limit: 1 }
			}
		) {
			baseCurrency {
				symbol
				name
				address
			}
			quoteCurrency {
				symbol
				name
				address
			}
			smartContract {
				address {
					address
				}
			}
			count
		}
	}
}
```

## Trades for a trading pair

You can use both buy/sell or Base/Quote currency to get trades for a given currency pair. In the following example we are getting trades for [WOJAK](https://explorer.bitquery.io/ethereum/token/0x5026f006b85729a8b14553fae6af249ad16c9aab) / [WETH](https://explorer.bitquery.io/ethereum/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) currency pair.

https://ide.bitquery.io/Trades-for-a-trading-pair-on-Ethereum

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-19" }
			buyCurrency: { is: "0x5026f006b85729a8b14553fae6af249ad16c9aab" }
			quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			baseAmount
			base_amount_usd: baseAmount(in: USD)
			baseCurrency {
				address
				symbol
			}
			quoteAmount
			quote_amount_usd: quoteAmount(in: USD)
			quotePrice
			priceInUSD: expression(get: "quote_amount_usd/baseAmount")
			quoteCurrency {
				address
				symbol
			}
			maker {
				address
			}
			taker {
				address
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Trades for a pair token (Pool token)

To get trades for pair tokens, you should use buy/sell; in the case of using Base/Quote, it will replicate the result.
For example, if there is a swap A <-> B, using Base/Quote, it will give two results in one A as the base currency and in another B as the quote currency.

[Open this query in IDE](https://ide.bitquery.io/Trades-for-a-pair-token-on-ethereum)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-10", till: "2023-07-19" }
			smartContractAddress: {
				is: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852"
			}
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
				address {
					address
				}
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			buyAmount
			buy_amount_usd: buyAmount(in: USD)
			buyCurrency {
				address
				symbol
			}
			sellAmount
			sell_amount_usd: sellAmount(in: USD)
			sellCurrency {
				address
				symbol
			}
			transaction {
				hash
				txFrom {
					address
				}
			}
		}
	}
}
```

## Latest USD price of a token

As we already know, USD doesn't exist on the blockchain. Additionally, there will be tokens that do not have pairs with USDT or other stablecoins. In this case, getting USD prices becomes [price index problem](https://bitquery.io/blog/dex-price-index). However, we have USD pricing for several tokens, and actually, you can derive the USD price of tokens using it.
In the following example, we are getting the latest trade for ERUTA/WETH trading pair because the latest trade = latest price. In this case, we have the USD price of WETH. Therefore, we are deriving the ERUTA USD price by dividing `sell_amount_usd` by `buyAmount`.
This is a very effective way to get the USD price for assets that are traded against WETH or WBNB in the case of the Binance chain and so on.

[Open this query on IDE](https://ide.bitquery.io/Latest-price-of-ERUTA)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 1
				offset: 0
			}
			buyCurrency: { is: "0x409b46013c78c63cf376f17466aef87895617451" }
			sellCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
			}
			buyAmount
			buyCurrency {
				symbol
			}
			buy_amount_usd: buyAmount(in: USD)
			sellAmount
			sellCurrency {
				symbol
			}
			sell_amount_usd: sellAmount(in: USD)
			priceInUSD: expression(get: "sell_amount_usd / buyAmount")
		}
	}
}
```

## Latest Trading pairs of an exchange

To get latest pairs of an exchange, we can use Event APIs, let's get latest pairs by tracking `PairCreated` event from the [PancakeSwap factory contract](https://explorer.bitquery.io/bsc/smart_contract/0xbcfccbde45ce874adcb698cc183debcf17952812/events) on BNB chain.

[Open this query on IDE](https://ide.bitquery.io/Latest-Pair-Created-on-Pancake-Swap_1_1)

```graphql
{
	ethereum(network: bsc) {
		arguments(
			options: { desc: ["block.height"], limit: 10 }
			smartContractAddress: {
				in: ["0xbcfccbde45ce874adcb698cc183debcf17952812"]
			}
			smartContractEvent: { is: "PairCreated" }
			date: { after: "2023-07-17" }
		) {
			block {
				height
			}
			transaction {
				hash
			}
			pair: any(of: argument_value, argument: { is: "pair" })
			token0: any(of: argument_value, argument: { is: "token0" })
			token0Name: any(
				of: argument_value
				argument: { is: "token0" }
				as: token_name
			)
			token1: any(of: argument_value, argument: { is: "token1" })
			token1Name: any(
				of: argument_value
				argument: { is: "token1" }
				as: token_name
			)
		}
	}
}
```

## Querying an exchange not listed on Bitquery

To get an exchange which is not listed on Bitquery, you just need to use their factory address. In the following example, we do not have GIBX Swap listed on our explorer, but we do index GIBX, and you can get it's trade using GIBX Swap factory address.

https://ide.bitquery.io/GIBX-trades

```graphql
{
	ethereum(network: bsc) {
		dexTrades(
			options: {
				desc: ["block.height", "tradeIndex"]
				limit: 10
				offset: 0
			}
			date: { since: "2023-07-11", till: "2023-07-17" }
			exchangeAddress: {
				is: "0x97bCD9BB482144291D77ee53bFa99317A82066E8"
			}
		) {
			block {
				timestamp {
					time(format: "%Y-%m-%d %H:%M:%S")
				}
				height
			}
			tradeIndex
			protocol
			exchange {
				fullName
			}
			smartContract {
				address {
					address
					annotation
				}
			}
			exchange {
				address {
					address
				}
			}
			buyAmount
			buy_amount_usd: buyAmount(in: USD)
			buyCurrency {
				address
				symbol
			}
			sellAmount
			sell_amount_usd: sellAmount(in: USD)
			sellCurrency {
				address
				symbol
			}
			transaction {
				hash
			}
		}
	}
}
```

## Liquidity in a pool token

To see liquidity in pair tokens, we need to know two things,

1 - What tokens are in this pair 
2- The balance of tokens in the Pair token contract.

Let's take an example of WETH/USDC token pair [0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640](https://explorer.bitquery.io/ethereum/smart_contract/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640). To see which token makes this pool token use [**this API**](https://ide.bitquery.io/tokens-in-pair-contract). As we can see, it has WETH and USDC tokens.

Now we will use the balance API to get the balance of WETH and USDC tokens in our pair contract.

[Open this query in IDE](https://ide.bitquery.io/liquidity-of-token-pair-on-ethereum-using-balance-api)

```graphql
{
	ethereum(network: ethereum) {
		address(address: { is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" }) {
			balances(
				currency: {
					in: [
						"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
						"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
					]
				}
			) {
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

## Liquidity Removed and Added in a pool token

To track liquidity details for a pair token we can track `Mint` and `Burn` events. In the following example we are tracking lquidity add and remove for USDC/WETH token pair [0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640](https://explorer.bitquery.io/ethereum/smart_contract/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640/events)

[Open this query on IDE](https://ide.bitquery.io/Mint-and-burn-to-track-liquidity)

```graphql
{
	ethereum {
		mint: arguments(
			options: { limit: 10, desc: "block.height" }
			smartContractAddress: {
				is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
			}
			smartContractEvent: { is: "Mint" }
		) {
			block {
				height
			}
			transaction {
				hash
			}
			amount0: any(of: argument_value, argument: { is: "amount0" })
			owner: any(of: argument_value, argument: { is: "owner" })
			tickUpper: any(of: argument_value, argument: { is: "tickUpper" })
			sender: any(of: argument_value, argument: { is: "sender" })
			amount1: any(of: argument_value, argument: { is: "amount1" })
			tickLower: any(of: argument_value, argument: { is: "tickLower" })
			amount: any(of: argument_value, argument: { is: "amount" })
		}
		burn: arguments(
			options: { limit: 10, desc: "block.height" }
			smartContractAddress: {
				is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
			}
			smartContractEvent: { is: "Burn" }
		) {
			block {
				height
			}
			transaction {
				hash
			}
			amount0: any(of: argument_value, argument: { is: "amount0" })
			owner: any(of: argument_value, argument: { is: "owner" })
			tickUpper: any(of: argument_value, argument: { is: "tickUpper" })
			amount1: any(of: argument_value, argument: { is: "amount1" })
			tickLower: any(of: argument_value, argument: { is: "tickLower" })
			amount: any(of: argument_value, argument: { is: "amount" })
		}
	}
}
```

## Currencies in pair token

To check currency pair in a Pool token, you can use following API.

[Open this query in IDE](https://ide.bitquery.io/tokens-in-pair-contract)

```graphql
{
	ethereum(network: ethereum) {
		dexTrades(
			options: { limit: 1 }
			date: { after: "2023-07-01" }
			smartContractAddress: {
				is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
			}
		) {
			buyCurrency {
				address
				symbol
			}
			sellCurrency {
				address
				symbol
			}
			smartContract {
				address {
					address
				}
			}
		}
	}
}
```

## Get Number of Trades for a Particular Uniswap Pool Above Certain Value

We can get number of trades for a uniswap pool above particular value using `count` field and passing value which we want to `tradeAmountUSD` filter along with address of that pools smart contract passed to `smartContractAddress` field.

Check query [here](https://ide.bitquery.io/Ethereum-Get-Count-of-Trades-Above-Certain-USD-Value-for-a-Pool).

````
{
  ethereum {
    dexTrades(
      smartContractAddress: {is: "0xcc1d85cd93ea833772913445282bd56354a90467"}
      tradeAmountUsd: {gt: 500}
      time: {since: "2023-08-22T04:54:35Z"}
    ) {
      count(uniq: txs)
    }
  }
}```
````

## Get 24H Volume of a Uniswap Pool

We can get volume of Uniswap pool using `tradeAmount` field. It gives us trade amount in USD using `timeInterval` field we can set interval to 24H. We have also set limit to 30 days so we will get 24H volume for last 30 days.

Check query [here](https://ide.bitquery.io/Ethereum-24H-Trading-Value-of-a-Pool-for-last-30-days).

```
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 30, desc: "timeInterval.hour"}
      date: {since: "2023-08-21"}
      smartContractAddress: {is: "0xcc1d85cd93ea833772913445282bd56354a90467"}
    ) {
      count
      tradeAmount(in: USD)
      timeInterval {
        hour(count: 24)
      }
    }
  }
}
```
