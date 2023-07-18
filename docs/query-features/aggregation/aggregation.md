---
sidebar_position: 1
---


# Aggregation in V1 

Aggregation is a way to group data and calculate aggregate values. The API supports a variety of aggregation functions, including `sum`, `count`, `average`, `maximum`, and `minimum`.

The following is an example of a query that calculates the total amount of ETH sent by the address 0xd576769d320c81fdedb8b7e7e97042d7789134c4 between January 1, 2023 and January 31, 2023:

```
query ($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(date: {since: $from, till: $till}, txSender: {is: $address}) {
      amount(calculate: sum)
    }
  }
}

```
This query will return the following field:

amount: The total amount of ETH sent by the address 0xd576769d320c81fdedb8b7e7e97042d7789134c4 between January 1, 2023 and January 31, 2023.

> Notes:

- The calculate keyword is case-sensitive.

- The calculate keyword can only be used on fields that contain numeric values.


Here's another example where we calculate the average gas price, the maximum gas price, and the median gas price for transactions sent between the dates 2023-01-01 and 2023-01-31.


```
query ($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
      date: date {
        date(format: $dateFormat)
      }
      gasPrice
      gasValue
      average: gasValue(calculate: average)
      maxGasPrice: gasPrice(calculate: maximum)
      medianGasPrice: gasPrice(calculate: median)
    }
  }
}

parameters: 

{
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "from": "2023-07-11",
  "till": "2023-07-18T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```


> Notes:

The calculate argument can be used to specify the aggregation function that should be used.