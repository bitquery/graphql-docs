---
sidebar_position: 1
---

# Address API

Our APIs can provide all sorts of details for any address on the blockchain. Let's see some examples.


## Transactions of an Address
To check transactions sent and received by an address, you can use following API. You can get same data for multiple addresses, just use `{in: ["address1", "address2"]}` instead of `{is: "address"}`.

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


## Transfers of an Address

To get token transfers of addresses use following API, in this example we are showing all sent and received token transfers of an address.

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


## Transfers sent by multiple addresses

You can transfers for multiple addresses, for example in the following query we are getting transfers sent by two addresses (0xa106c1a6c0e46826fbb4e82b9337bb880c3e2575 & 0x93ff65b50b2f12387bc448d5ee17c1600cd66626). You can use upto 100 addresses in a query.

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


## Trades of an Address

To check trades of an address you can use our DEX trade API. 

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


## Balance of an Address

To check balance of an address use our balance API.

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

For UTXO based blockchains such as Bitcoin, Litcoin, dogecoin, you can get inputs and outputs and to calculate the balance, you just need to subtrack input value from output value (`outputs.value - inputs.value`)

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


## Balance history of an Address
You can also get balance history of any address using our v1 APIs. Additionly in V2 we have created [`BalanceUpdates`](https://docs.bitquery.io/docs/examples/balances/balance-api/) API, which extend this capabilities.

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

## Smart Contract calls of an address
TO get smart contract call of an address use our SmartContractCalls API.

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

## Source of funds from an address

To check the source of funds for any address you can use our Coinpath APIs.

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


## Destination of funds from an address

Coinpath API also helpful to get the destination of funds. Check following example.


https://ide.bitquery.io/Destination-of-funds-for-an-address

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