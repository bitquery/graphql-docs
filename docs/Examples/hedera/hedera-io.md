# Hedera Inputs & Outputs API

In this section we will see some examples on tracing funds from/to an hedera address.

## Most Transfered Token

You can run the query [here](https://ide.bitquery.io/Hedera-inputs)

This will give you the top tokens based on the count of inputs by fetching the inputs (incoming transactions) and sorting them in descending order based on countBigInt

```
{
  hedera(network: hedera) {
    inputs(options: {desc: "countBigInt", limit: 100}) {
      countBigInt
      currency {
        symbol
        address
        tokenId
        name
        decimals
      }
    }
  }
}


```

## Latest Inputs to an Address

To find the latest inputs (incoming transactions) to a specific Hedera address, you can use the following GraphQL query. It fetches the latest 10 inputs (transactions) to the address `0.0.6187183`, sorted by the most recent timestamp.

```
query MyQuery {
  hedera(network: hedera) {
    inputs(
      options: {limit: 10, desc: "time.time"}
      transferEntity:{is:"0.0.6187183"}
    ) {
      amount
      currency {
        name
      }
      memo
      feeCurrency {
        name
      }
      success
      time {
        time
      }
      transactionHash
      transferEntity {
        num
        id
      }
      payerAccount {
        id
        num
      }
      nodeAccount {
        id
        num
      }
      result {
        id
        name
      }
    }
  }
}

```

## Latest Outputs to an Address

To find the latest outputs (outputs transactions) to a specific Hedera address, you can use the following GraphQL query. It fetches the latest 10 inputs (transactions) to the address `0.0.6187183`, sorted by the most recent timestamp.

```
query MyQuery {
  hedera(network: hedera) {
    outputs(
      options: {limit: 10, desc: "time.time"}
      transferEntity:{is:"0.0.6187183"}
    ) {
      amount
      currency {
        name
      }
      memo
      feeCurrency {
        name
      }
      success
      time {
        time
      }
      transactionHash
      transferEntity {
        num
        id
      }
      payerAccount {
        id
        num
      }
      nodeAccount {
        id
        num
      }
      result {
        id
        name
      }
    }
  }
}

```
