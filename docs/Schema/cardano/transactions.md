# Transactions

The Transactions API schema returns a list of transactions that occurred on the Cardano blockchain within a specified date range. The schema includes the following fields:

```
query {
  cardano(network: cardano) {
    transactions(
      options: {desc: ["block.height", "index"], limit: 10}
      date: {since: "2023-07-17", till: "2023-07-24T23:59:59"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      inputValue
      input_value_usd: inputValue(in: USD)
      outputCount
      inputCount
      index
      hash
      feeValue
      fee_value_usd: feeValue(in: USD)
      invalidBefore
      invalidHereafter
      mintCount
      withdrawalValue
      withdrawalCount
      outputValue
    }
  }
}

```

`block`: The block in which the transaction was included.

`inputValue`: The total value of the inputs to the transaction.

`input_value_usd`: The value of the inputs to the transaction in USD.

`outputCount`: The number of outputs from the transaction.

`inputCount`: The number of inputs to the transaction.

`index`: The index of the transaction in the block.

`hash`: The hash of the transaction.

`feeValue`: The fee paid for the transaction.

`fee_value_usd`: The fee paid for the transaction in USD.

`invalidBefore`: The height of the block before which the transaction is invalid.

`invalidHereafter`: The height of the block after which the transaction is invalid.

`mintCount`: The number of mints created by the transaction.

`withdrawalValue`: The total value of the withdrawals from the transaction.

`withdrawalCount`: The number of withdrawals from the transaction.

`outputValue`: The total value of the outputs from the transaction.

<details>

<summary>Filtering Transactions</summary>

`date`
The date of the transaction.

`depositValue`
The total amount of ADA deposited into the transaction.

`feeValue`
The fee paid for the transaction.

`height`
The height of the block in which the transaction was included

`inputCount`
The number of inputs used by the transaction.

`inputValue`
The total amount of ADA transferred into the transaction.

`mintCount`
The number of mints created by the transaction.

`options`
Additional options for the query, such as limits, sorting and pagination.

`outputAddress`
The address of the output that received the funds.

`outputCount`
The number of outputs created by the transaction.

`outputValue`
The total amount of ADA transferred out of the transaction.
`time`
The timestamp of the transaction.

`txHash`
The hash of the transaction.
`txIndex`
The index of the transaction within the block.

`txSize`
The size of the transaction in bytes.

`withdrawalCount`
The number of withdrawals created by the transaction.

`withdrawalValue`
The total amount of ADA withdrawn from the transaction.

`inputAddress`
The address of the input that sent the funds.

</details>
