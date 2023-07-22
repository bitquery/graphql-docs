# Coinpath

Everscale Coinpath API provides details on flow of funds. Here's the schema with the fields:


```
query ($network: EverscaleNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  everscale(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit, offset: $offset}}
      date: {since: $from, till: $till}
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
        tokenId
        tokenType
        name
        decimals
        address
      }
      depth
      count
      transaction {
        value
        hash
      }
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit, offset: $offset}}
      date: {since: $from, till: $till}
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
        tokenId
        tokenType
        name
        decimals
        address
      }
      depth
      count
      transaction {
        value
        hash
      }
    }
  }
}

<!-- Parameters -->
{
  "inboundDepth": 1,
  "outboundDepth": 1,
  "limit": 10,
  "offset": 0,
  "network": "everscale",
  "address": "-1:3333333333333333333333333333333333333333333333333333333333333333",
  "from": "2023-07-14",
  "till": "2023-07-21T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details>
<summary>Filtering coinpath</summary>


`currency` is the name of the currency that was transferred in the transaction.

`date` is the date and time that the transaction was executed.

`depth` is the number of transactions that were executed before this transaction.

`initialAddress` is the address of the account that initiated the transaction.

`initialDate` is the date that the initial transaction was executed.

`initialTime` is the time that the initial transaction was executed.

`receiver` is the address of the account that received the transferred value.

`sender` is the address of the account that sent the transferred value.

`time` is the time that the transaction was executed.
</details>