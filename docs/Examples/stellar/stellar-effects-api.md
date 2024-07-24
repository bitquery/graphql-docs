# Stellar Effects API

All changes on the ledger are recorded as effects including changes after transactions, trades and so on. In this section we will see how to use Bitquery API to get effects information.

## Latest Effects

This query retrieves the latest effects from the Stellar ledger on a particular date. Effects represent state changes on the ledger and can include various types of operations, such as account creation, payments, and trades. 

```
query MyQuery {
  stellar(network: stellar) {
    effects(options: {limit: 10, desc: "timestamp.time"}, date: {is: "2024-07-16"}) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}


```

## Search a Particular Effect

This query retrieves effects of a specific type using `effect: {is:}` , such as "account_credited", which indicates that an account was credited with an asset. You can run the query [here](https://ide.bitquery.io/Latest-Account-Credit-Effect-on-Stellar)

```
query MyQuery {
  stellar(network: stellar) {
    effects(
      options: {limit: 10, desc: "timestamp.time"}
      date: {is: "2024-07-16"}
      effect: {is: "account_credited"}
    ) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}

```
