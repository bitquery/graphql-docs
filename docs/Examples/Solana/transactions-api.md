# Solana Transactions API

## Transactions in a specific timeperiod

This below query will get you the transactions for a specific timeperiod. You can change the timeperiod values as per your need.
You can run the query [here](https://ide.bitquery.io/transactions-in-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transactions(
      time:{since:"2025-07-25T00:00:00Z" till:"2025-07-25T01:00:00Z"}
      options: {limit: 10, desc: ["transactionIndex", "block.height"]}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```

## Transactions of an address for a specific timeperiod

This below query will get you the transactions of an address for a specific timeperiod. You can change the address and timeperiod values as per your need.
You can run the query [here](https://ide.bitquery.io/transactions-of-an-address-in-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transactions(
      time: {since: "2025-07-19T01:00:00Z" till:"2025-07-19T21:00:00Z"}
      options: {limit: 100, desc: ["transactionIndex", "block.height"]}
      signer: {is: "9vKgXDW6N3S4QDdqswq7m9U9eWp839HanvQ7RhUTtKZ1"}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```
