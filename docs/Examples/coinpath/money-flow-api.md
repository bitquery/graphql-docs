# Coinpath® API

Coinpath® api is targeted to help build compliance solutions by providing money tracking capabilities. This API is supported for [all blockchains we support](https://account.bitquery.io/admin/accounts) and tokens built on them.

## What Is Depth?

Please check following image to understand the depth (hop).

![coinpath](/img/depth_coinpath.png)

## What Is Direction?

It;s direction of fund flow, inbound (Incoming) or outbound (Outgoing).

## Minimum Tx Amount

It's a `parameter` available inside `Options`, which allow you to filter transaction based on amount.

## Maximum Address Tx Count

If defined > 0, then it will not try to expand an addresses for the next depth, having more that this count of transactions. Use to stop on exchange-type addresses and not expand them

## Maximum Total Tx Count

Do not extend the next depth in case total tx count on prev hop exceed this metric. Used to prevent hanging on the calculatomg for a long time

## Complexity Limit

If the initial count of transactions for the address under coinpath is exceeding this value, do not proceed and return an error. Works for the same reason as the previous parameter.

## Seed

A random number which can be used to prevent caching of results. Needed omly if blockchain data expected to be modified during coipath calculations

## Destination Of Funds From An Address

In 2019, Upbit exchange was hacked and tweeted out the [hackers address](https://explorer.bitquery.io/ethereum/address/0xa09871aeadf4994ca12f5c0b6056bbd1d343c029/graph?from=2018-03-01&till=2021-01-31), using the following API you can track destination of fund over multiple hops (depth).

[Open this query on IDE](https://ide.bitquery.io/destination-of-funds-for-upbit-hackers)

```graphql
{
  ethereum(network: ethereum) {
    outbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2018-03-01", till: "2021-01-31" }
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

## Source Of Funds From An Address

To check the source of funds, you can use the following API. You can increase depth based on your requirements.

[Open this query on IDE](https://ide.bitquery.io/All-inbound-transactions-to-Upbit-hacker-address)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        direction: inbound
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2018-03-01", till: "2021-01-31" }
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

## Relation Between Two Addresses On Ethereum

Using combination of above two queries you can check if two address ever transacted in the past.

[Open this query on IDE](https://ide.bitquery.io/Relation-between-two-ethereum-addresses)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      sender: { is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5" }
      currency: { is: "ETH" }
      depth: { lteq: 1 }
      options: {
        direction: inbound
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2019-11-20", till: "2019-11-30" }
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
      transaction {
        value
        hash
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
    outbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      receiver: { is: "0xb3a9b79f4d5dc2cdcdc00da22869502cbf65a0a5" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2019-11-20", till: "2019-11-30" }
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

## Tracing SOL Movement Between Two Addresses On Solana

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

## Getting Inflows ( Fund Moving In) To A Cardano Wallet /Address

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

## Get Transactions From Multiple Addresses To A Final Destination Address

You can get the trasactions to a final destination addresses from an initial addresses no matter how many hops happen.
Below is an example on how to use it. You can access the query [here](https://ide.bitquery.io/Ethereum-inbound-coinpath-from-one-address-to-another)

```
query ($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
      finalAddress: {is: "0xa910f92acdaf488fa6ef02174fb86208ad7722ba"}
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
{
  "inboundDepth": 3,
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "address": "0xbfba2df39ae248e3dfdefa7a92ac3df9be260bf7",
  "currency": "ETH",
  "from": "2018-10-01",
  "till": "2023-10-11T23:59:59",
  "dateFormat": "%Y-%m"
}
```

This field can be used to filter the results of the query to only include coinpaths that end at a specific address. For example, the query in the example above will only return coinpaths that end at the address `0xa910f92acdaf488fa6ef02174fb86208ad7722ba`.

The `finalAddress` field can also be used to calculate the total amount of funds that were sent to a specific address. To do this, you can use the count field to count the number of coinpaths that end at the address, and the amount field to sum the amount of funds that were sent in each coinpath.
