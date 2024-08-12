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

## Top Transaction Failures on Hedera

This query retrieves the top transaction failures on the Hedera network and helps in identifying the most common reasons for transaction failures.

```
query MyQuery {
  hedera(network: hedera) {
    transactions(
      date: {since: "2024-01-01"}
      success: false
      options: {desc: "count", limit: 10}
    ) {
      count
      result {
        name
        id
      }
    }
  }
}


```

- **count**: Indicates the number of failed transactions for this specific error.
- **result.name**: Describes the error that caused the transaction to fail, such as "INSUFFICIENT_BALANCE".
- **result.id**: The unique identifier for the error.

## Latest Smart Contract Calls on Hedera

Smart contracts calls in Hedera help you identify the calls made during the transaction including details on whether the tx was a swap or transfer and so on. The `memo` field will have details about the transaction for example ` "memo": "HashPack swap DOVU to HBAR",`
The below query gets the latest calls for a particular date.
You can run the query [here](https://ide.bitquery.io/latest-Hedera-Calls)

```
query MyQuery {
  hedera(network: hedera) {
    calls(
      date: {since: "2024-01-01"}
      success: true
      options: {desc: "consensusTimestamp.time", limit: 100}
    ) {
      transactionFee
      memo
      smartContractEntity {
        num
        id
      }
      result {
        name
        id
      }
      consensusTimestamp {
        time
      }
      feeCurrency {
        name
      }
    }
  }
}

```
