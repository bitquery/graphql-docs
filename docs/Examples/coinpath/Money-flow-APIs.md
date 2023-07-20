# Coinpath® API

Coinpath® api is targeted to help build compliance solutions by providing money tracking capabilities. This API is supported for [all blockchains we support](https://account.bitquery.io/admin/accounts) and tokens built on them.


## What is depth?
Please check following image to understand the depth (hop).

/img/depth_coinpath.png

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
