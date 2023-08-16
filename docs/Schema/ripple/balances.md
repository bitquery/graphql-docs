# Balances

The Balances API gives you information about the balances of an account on the XRP Ledger. The following are the fields in the schema:


```
query ($network: RippleNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    balances(
      date: {since: $from, till: $till}
      account: {is: $address}
      options: {limit: $limit, offset: $offset, desc: ["block", "transaction.index"]}
    ) {
      transaction {
        hash
        index
        sender
        type
      }
      timestamp {
        time
      }
      prevBalance
      operation
      issuer {
        address
        annotation
      }
      date {
        date
      }
      currency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      block
      balance
      account {
        address
        annotation
      }
      flags
    }
  }
}

<!-- Parameters -->

{
  "address": "rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM",
  "network": "ripple",
  "from": "2023-08-09",
  "till": "2023-08-16T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```