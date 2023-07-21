
# Token API
Bitquery's flexible GraphQL APIs will help you get all sorts of token related data. We will show example of USDT on Ethereum but you can actually use same APIs to get data for any token on all chains supported by Bitquery.


## Token Price API

Latest trade = Latest price. In the following example, we are getting the latest trade. However, to get the price in USD, we need to apply a trick. As you know, USD doesn't exist on the blockchain. Therefore, we need to derive it. Bitquery gets the USD price of tokens listed on centralized exchanges through its partner, Cryptorank. We save them on a historical basis at the 1-hour candle and provide USD conversion of buy/sell or base/quote amount by using this USD value. Now if you have USD price anywhere in the result, you can drive the USD value of other parameters using it, including price; please check the following query, for example.


[Open this query on IDE](https://ide.bitquery.io/Token-Price-in-USDT-Template_1_1_1)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      options: {desc: ["block.height"], limit: 1}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      quotePrice
      quoteAmountInUSD: quoteAmount(in: USD)
      baseAmount
      quotePriceInUSD: expression(get: "quoteAmountInUSD / baseAmount")
      exchange {
        fullNameWithId
        address {
          address
          annotation
        }
      }
    }
  }
}

```

## Token OHLC Price Data API

To get OHLC(Open-High-Low-Close) data you can use our Dextrades api, following query shows an example of USDT ohlc price against WETH token.


[Open this query on IDE](https://ide.bitquery.io/USDC-OHLC-Data-template)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      time: {since: "2023-06-01T00:00:00Z", till: "2023-06-20T00:00:00Z"}
      priceAsymmetry: {lt: 1}
      tradeAmountUsd: {gt: 100}
      options: {limit: 10, desc: "timeInterval.minute"}
    ) {
      timeInterval {
        minute(count: 5)
      }
      baseCurrency {
        name
      }
      quoteCurrency {
        name
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
    }
  }
}

```


## Token Stats API

Using transfers apis you can stats like `median transfer`, `average transfer`, `total transfer amount and count`, `Unique sender and receivers` using our transfer api. Let's see an example of [USDT token](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7).

[Open this query on IDE](https://ide.bitquery.io/USDT-Token-API_1)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      amount: {gt: 0}
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

## Token Transaction API
If you want to see all transactions sent to [USDT token](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7) contract address, you can use following query.

[Open this query on IDE](https://ide.bitquery.io/query/RNqa8PqNZ4CfQR9U)

```graphql
{
  ethereum {
    transactions(
      txTo: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      options: {limit: 10, desc: "block.height"}
      date: {after: "2023-07-01"}
    ) {
      amount
      block {
        height
        timestamp {
          time(format: "%y-%m-%d")
        }
      }
      feePayer
      gas
      gasCurrency {
        symbol
      }
      gasPrice
      gasValue
      hash
      to {
        address
      }
      sender {
        address
      }
    }
  }
}
```

## Token Transaction Tracking API

If you want to track source and destination of USDT funds from an address you can use our Coinpath API.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transaction-Tracking-Template_1_1)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: {is: "0x477573f212a7bdd5f7c12889bd1ad0aa44fb82aa"}
      currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2020-10-08", till: "2020-10-09"}
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
      block {
        timestamp {
          time
        }
      }
    }
    outbound: coinpath(
      initialAddress: {is: "0x477573f212a7bdd5f7c12889bd1ad0aa44fb82aa"}
      currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2020-10-08", till: "2020-10-09"}
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
      block {
        timestamp {
          time
        }
      }
    }
  }
}
```

## Token Transaction History API
To check the latest [USDT token](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7) transfers, try following api. It can give historical USDT transactions too.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transaction-History-API-Template_1)


```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", limit: 10}
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {after: "2023-07-01"}
    ) {
      currency {
        name
        symbol
      }
      block {
        timestamp {
          time
        }
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
      receiver {
        address
        annotation
      }
      success
    }
  }
}
```

## Token supply
To check the token supply, you can use the following API. It also calculates Mint and burn by checking the amount sent to the dead address.

[Open this query on IDE](https://ide.bitquery.io/Total-Circulating-Supply-of-a-USDT-Template)

```graphql
{
  initialSupply: ethereum(network: ethereum) {
    address(address: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
      annotation
      address
      smartContract {
        attributes {
          address {
            address
          }
          name
          type
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
    burn: transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      receiver: {is: "0x0000000000000000000000000000000000000000"}
    ) {
      amount(calculate: sum)
    }
    mint: transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      sender: {is: "0x0000000000000000000000000000000000000000"}
    ) {
      amount(calculate: sum)
    }
  }
}
```

## Token Conversion API
You can get USD price of token using our DEXtrade API.


[Open this query on IDE](https://ide.bitquery.io/Get-USDT-Price-in-USD-Template)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 1, offset: 0}
      buyCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
      priceInUSD: expression(get: "buy_amount_usd / buyAmount")
    }
  }
}
```


## Token Pool API (Pairs of token)
To check all pairs of a token, you can use our DEXtrade API. It also provides the Pool addresses and exchange names with the protocol used by the exchange. In this query, we are using the [USDT token](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7) as an example.

[Open this query on IDE](https://ide.bitquery.io/query/xA8yam1LgfrPxNnP)


```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {since: "2023-06-29", till: "2023-07-06T23:59:59"}
      options: {desc: "count", limit: 10, offset: 0}
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
      poolAddress: smartContract {
        address {
          address
        }
      }
      exchange {
        address {
          address
        }
        name
        fullNameWithId
        fullName
      }
      protocol
      count
    }
  }
}
```

## Token Balance API

To get the token balance of any address, you can use the following API. In our example, we are getting the USDT balance for this Ethereum address[0x28c6c06298d514db089934071355e5743bf21d60](https://explorer.bitquery.io/ethereum/address/0x28c6c06298d514db089934071355e5743bf21d60).

[Open this query on IDE](https://ide.bitquery.io/USDT-Balance-API-Template)

```graphql
{
  ethereum(network: ethereum) {
    address(address: {is: "0x28c6c06298d514db089934071355e5743bf21d60"}) {
      balances(currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}) {
        value
      }
    }
  }
}

```

## Token Trace API
You also get the smart contract call trace for any transaction using our API. Our V2 APIs have much better data on call trace. Check [here](https://docs.bitquery.io/docs/examples/calls/smartcontract/).

[Open this query](https://ide.bitquery.io/Transaction-Call-Trace_1_1)


```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {limit: 10, offset: 0, asc: "callDepth"}
      txHash: {is: "0xfd2ce83798867583d37c044d988d3cb343efd57713dc1135edec80af2985db36"}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
        protocolType
      }
      smartContractMethod {
        name
        signatureHash
      }
      address: caller {
        address
        annotation
      }
      success
      amount
      amount_usd: amount(in: USD)
      gasValue
      gas_value_usd: gasValue(in: USD)
      callDepth
    }
  }
}
```

## Token Wallet History API
You can get transaction history for any token for any address using following api.

[Open this query on IDE](https://ide.bitquery.io/USDT-Wallet-History-v1_1_1_1)


```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", asc: "currency.symbol", limit: 10, offset: 0}
      date: {since: "2023-06-27", till: "2023-07-04T23:59:59"}
      amount: {gt: 0}
      any: [{receiver: {is: "0xf6e8516ce73c290f43dd32d57f7ba9056d62d244"}}, {sender: {is: "0xf6e8516ce73c290f43dd32d57f7ba9056d62d244"}}]
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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

## Token Transfer API
You can check any token's transfers using our transfer API.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transfer-API-Template)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", limit: 10}
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {after: "2023-07-01"}
    ) {
      currency {
        name
        symbol
      }
      block {
        timestamp {
          time
        }
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
      receiver {
        address
        annotation
      }
      success
    }
  }
}

```

## Token All Time High & Low Price API
You can use our DEXtrades api to get All time, low of high of any token.

[Open this query on IDE](https://ide.bitquery.io/USDC-All-time-high-low-v1_1_1_1_1_1)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      time: {since: "2021-01-13T00:00:00Z", till: "2023-06-20T00:00:00Z"}
      priceAsymmetry: {lt: 1}
      tradeAmountUsd: {gt: 5000}
      options: {limit: 10, desc: "timeInterval.year"}
    ) {
      timeInterval {
        year(count: 5)
      }
      baseCurrency {
        name
      }
      quoteCurrency {
        name
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
    }
  }
}

```

## Token Token Holder API

Check our V2 API, it has support for [token holder API](https://docs.bitquery.io/docs/examples/balances/tokenHolders-api/).

## Token Balance History API

We can also provide balance history for any token for any address; check the following example.

[Open this query on IDE](https://ide.bitquery.io/usdt-balance-history-template)

```
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
    }
  }
}

```

## Token Approval Events API
You can also track token approvals permissions using `Approval` event.

[Open this query on IDE](https://ide.bitquery.io/Get-USDT-Approval-Events-Template)

```graphql
 {
  ethereum {
    smartContractEvents(
      smartContractAddress: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      smartContractEvent: {is: "Approval"}
      options: {limit: 10, desc: "block.timestamp.iso8601"}
    ) {
      smartContractEvent {
        name
        signature
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
      block {
        timestamp {
          iso8601
        }
      }
    }
  }
}

```