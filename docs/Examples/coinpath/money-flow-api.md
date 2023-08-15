# Coinpath® API

Coinpath® api is targeted to help build compliance solutions by providing money tracking capabilities. This API is supported for [all blockchains we support](https://account.bitquery.io/admin/accounts) and tokens built on them.

## What is depth?

Please check following image to understand the depth (hop).

![coinpath](/img/depth_coinpath.png)

## What is direction?

It;s direction of fund flow, inbound (Incoming) or outbound (Outgoing).

## minimumTxAmount

It's a `parameter` available inside `Options`, which allow you to filter transaction based on amount.

## maximumAddressTxCount

If defined > 0, then it will not try to expand an addresses for the next depth, having more that this count of transactions. Use to stop on exchange-type addresses and not expand them

## maximumTotalTxCount

Do not extend the next depth in case total tx count on prev hop exceed this metric. Used to prevent hanging on the calculatomg for a long time

## complexityLimit

If the initial count of transactions for the address under coinpath is exceeding this value, do not proceed and return an error. Works for the same reason as the previous parameter.

## seed

A random number which can be used to prevent caching of results. Needed omly if blockchain data expected to be modified during coipath calculations

## Destination of funds from an address

In 2019, Upbit exchange was hacked and tweeted out the [hackers address](https://explorer.bitquery.io/ethereum/address/0xa09871aeadf4994ca12f5c0b6056bbd1d343c029/graph?from=2018-03-01&till=2021-01-31), using the following API you can track destination of fund over multiple hops (depth).

[Open this query on IDE](https://ide.bitquery.io/destination-of-funds-for-upbit-hackers)

```graphql
{
  ethereum(network: ethereum) {
    outbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      currency: {is: "ETH"}
      depth: {lteq: 2}
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
        name
      }
      transaction {
        hash
        value
      }
      block {
        height
        timestamp {
          time(format: "%y-%d-%m")
        }
      }
      depth
      count
    }
  }
}

```

## Source of funds from an address

To check the source of funds, you can use the following API. You can increase depth based on your requirements.

[Open this query on IDE](https://ide.bitquery.io/All-inbound-transactions-to-Upbit-hacker-address)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      currency: {is: "ETH"}
      depth: {lteq: 2}
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
        name
      }
      transaction {
        hash
        value
      }
      block {
        height
        timestamp {
          time(format: "%y-%m-%d")
        }
      }
      depth
      count
    }
  }
}
```

## Relation between two addresses

Using combination of above two queries you can check if two address ever transacted in the past.

[Open this query on IDE](https://ide.bitquery.io/Relation-between-two-ethereum-addresses)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      sender: {is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5"}
      currency: {is: "ETH"}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2019-11-20", till: "2019-11-30"}
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
      transaction{
        value
        hash
      }
      block{
        height
        timestamp{
          time(format: "%y-%m-%d")
        }
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: {is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029"}
      receiver: {is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5"}
      currency: {is: "ETH"}
      depth: {lteq: 2}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2019-11-20", till: "2019-11-30"}
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

## Tracing SOL movement between two addresses on Solana

The query below will trace the movement of SOL between two addresses on Solana
The query will return two objects: `inbound` and `outbound`. The `inbound` object will contain information about all inbound transactions to the specified address, and the `outbound` object will contain information about all outbound transactions from the specified address.

[Open this query on IDE](https://ide.bitquery.io/solana-coinpath-example)

```
query ($network: SolanaNetwork!, $address: String!, $inboundDepth: Int!,
        $outboundDepth: Int!, $limit: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime,
        $currency: String!
       ) {
        solana(network: $network) {
          inbound: coinpath(
            initialAddress: {is: $address}
            depth: {lteq: $inboundDepth}
            options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
            date: {since: $from, till: $till}
            currency: { is: $currency }
          ) {
            sender {
              address
              annotation
            }
            receiver {
              address
              annotation
            }
            amount
            currency {
              symbol
              name
            }
            depth
            count
          }
          outbound: coinpath(
            initialAddress: {is: $address}
            depth: {lteq: $outboundDepth}
            options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
            date: {since: $from, till: $till}
            currency: { is: $currency }
          ) {
            sender {
              address
              annotation
            }
            receiver {
              address
              annotation
            }
            amount
            currency {
              symbol
              name
            }
            depth
            count
          }
        }
      }

<!-- Parameters -->

      {
  "inboundDepth": 1,
  "outboundDepth": 1,
  "limit": 10,
  "offset": 0,
  "network": "solana",
  "address": "4yWr7H2p8rt11QnXb2yxQF3zxSdcToReu5qSndWFEJw",
  "currency": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  "from": "2022-09-19",
  "till": "2022-09-26T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Getting inflows ( fund moving in) to a Cardano Wallet /Address

We get the details of tokens moving in to a wallet using the using the `outputs` function and setting the `outputAddress:` as the address of the wallet to which funds are moving in. Below is the sample query that gets token movements into a cardano wallet between two dates. Here's the [query on IDE](https://ide.bitquery.io/All-inflows-into-Cardano-wallet)

```
query ($network: CardanoNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  cardano(network: $network) {
    outputs(
      date: {since: $from, till: $till}
      outputAddress: {is: $address}
      options: {desc: ["block.height", "outputIndex"], limit:10}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
      currency {
        symbol
      }
    }
  }
}

<!-- Parameters -->

{
  "address": "addr1qxz3ve4caaywwg6q82ax9l5xknyc7juvwwsw20cpugyz5gv9zent3m6guu35qw46vtlgddxf3a9ccuaqu5lsrcsg9gss69fhxw",
  "network": "cardano",
  "from": "2022-10-19",
  "till": "2022-10-26T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

