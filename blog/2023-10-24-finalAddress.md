---
slug: coinpath-update
title: New finalAddress field added for granularity in Coinpath
authors: [Divyasshree]
tags: [bitquery]
---

# Coinpath Update

Coinpath now supports a `finalAddress` filter that makes sure that the outbound coinpath now includes only the transactions that were sent to the specified finalAddress. 

You use this filer by mentioning

 `finalAddress: {is:}`

## Example
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
