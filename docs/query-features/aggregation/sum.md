---
sidebar_position: 4
---

# Sum


The sum of a metric is the total value of all the data points in the metric. This can be useful for calculating total sales, volume, or other metrics.

As we have seen [earlier](docs/query-features/aggregation/aggregation.md), we calculate sum by memtioning it in the fields that support summation.

`amount(calculate: sum)`

## Summation with criteria

We can also caculate sum by restricting the results with additional criterion. Let's look at an example: The query will return the sum of the amounts of tokens transferred to and from the specified address, in USD

```

query ($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    transfers(
      date: {since: $from, till: $till}
      amount: {gt: 0}
      any: [{receiver: {is: $address}}, {sender: {is: $address}}]
      options: {limit: $limit, offset: $offset, asc: "currency.symbol"}
    ) {
      sum_in: amount(calculate: sum, receiver: {is: $address})
      sum_out: amount(calculate: sum, sender: {is: $address})
      sum_in_usd: amount(in: USD, calculate: sum, receiver: {is: $address})
      sum_out_usd: amount(in: USD, calculate: sum, sender: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}

{
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "address": "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511",
  "from": "2022-06-17",
  "till": "2022-06-24T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

By mention the address as a sender or receiver we are calculating:

- The total amount of ETH that was transferred into and out of the address, as `sum_in` and `sum_out` fields
- The total amount of ETH that was transferred into and out of the address as the `sum_in_usd` and `sum_out_usd` fields