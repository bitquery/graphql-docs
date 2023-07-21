---
sidebar_position: 3
---

# Count


The count of a metric is the number of data points in the metric. This can be useful for calculating the number of events, requests, or other occurrences. Bitquery APIs supports count for "countable" fields.

Take this example that returns the number of transactions that were sent from the specified address between the specified dates. The count field in the response will contain the number of transactions.

```
query ($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(
      date: {since: $from, till: $till}
      txSender: {is: $address}
    ) {
      count
    }
  }
}

Parameters
{
  "network": "bsc",
  "address": "0xa6f79b60359f141df90a0c745125b131caaffd12",
  "from": "2023-04-26",
  "till": "2023-05-03T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Count as a filter

Here's another example where the count metric is used to track events.

This query will return the number of times the PairCreated event has been emitted by smart contracts on the Ethereum network after a particular date. The count field in the response will contain the number of events.

```
{
  ethereum(network: ethereum) {
    arguments(
      options: {desc: "count", limit: 10}
      smartContractEvent: {is: "PairCreated"}
      date: {after: "2023-07-01"}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      index
      pair: any(of: argument_value, argument: {is: "pair"})
      token0: any(of: argument_value, argument: {is: "token0"})
      token0Name: any(of: argument_value, argument: {is: "token0"}, as: token_name)
      token1: any(of: argument_value, argument: {is: "token1"})
      token1Name: any(of: argument_value, argument: {is: "token1"}, as: token_name)
      count
    }
  }
}
```


Notice that the `count` field is used as a sorting field as well in the options where we order by the results by the largest to smallest count.


> Note that this query also uses aliasing by renaming  `any()` fields as `token1Name` and so on. 

## CountBigInt

COUNTBIGINT data type is often used to store large numbers, such as the number of rows in a database table. It is also used to store numbers that may exceed the size of a 32-bit integer.

This might be useful in cases where the count returned is huge, like the number of transactions may exceed the size of a 32-bit integer.

Here's an example of such a query:

```
query MyQuery {
  bitcoin(network: litecoin) {
    transactions(date: {since: "2015-05-08"}) {
      countBigInt
    }
  }
}

```
## Count with Categorisation

The count field is used to count the number of records in each group. Refer the example below:

The query will return the number of transactions of each type that were sent on the Everscale network between two dates. The results will be sorted by the number of transactions, with the types that have the most transactions appearing at the top of the results.

```
query ($network: EverscaleNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  everscale(network: $network) {
    transactions(date: {since: $from, till: $till}) {
      type
      count: countBigInt
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "network": "everscale",
  "from": "2023-07-12",
  "till": "2023-07-19T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```
