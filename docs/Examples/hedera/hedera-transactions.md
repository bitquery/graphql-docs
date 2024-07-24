# Hedera Transactions API

In this section we will see how to get information on transactions on Hedera.

## Latest Transactions

This query retrieves the latest transactions on the Hedera network.
You can run the query [here](https://ide.bitquery.io/Latest-Hedera-Transactions)

```
query MyQuery {
  hedera(network: hedera) {
    transactions(date: {is: "2024-07-22"}, options: {limit: 10, desc: "time.time"}) {
      memo
      entity {
        id
        num
      }
      nodeAccount {
        num
        id
        shardId
        realmId
      }
      payerAccount {
        id
        num
      }
      result {
        name
        id
      }
      success
      time {
        time
      }
      transactionHash
    }
  }
}

```

## Latest Transactions From an Address

This query retrieves the latest transactions from a specific address on the Hedera network.

You can run the query [here](https://ide.bitquery.io/Latest-Hedera-Transactions-from-an-address)

```
query MyQuery {
  hedera(network: hedera) {
    transactions(
      date: {is: "2024-07-22"}
      options: {limit: 10, desc: "time.time"}
      payerAccount: {is: "0.0.1459478"}
    ) {
      memo
      entity {
        id
        num
      }
      nodeAccount {
        num
        id
        shardId
        realmId
      }
      payerAccount {
        id
        num
      }
      result {
        name
        id
      }
      success
      time {
        time
      }
      transactionHash
    }
  }
}

```