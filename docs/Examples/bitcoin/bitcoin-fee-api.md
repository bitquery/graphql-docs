# Bitcoin Fee API

This Bitquery API allows you to query Bitcoin transaction fees using GraphQL. You can retrieve detailed fee information for specific addresses, calculate total fees paid by an account, and convert fee values to USD. The examples below demonstrate how to use the API for common fee-related queries.

## Get Bitcoin Transactions and Fees of an Account

Below query will get you bitcoin transactions for a account along with the transaction fees. You can try out the query [here](https://ide.bitquery.io/bitcoin-trxn-fees-for-a-account_2).

```
qquery MyQuery {
  bitcoin(network: bitcoin) {
    transactions(
      options: {limit: 10, desc: ["block.height"]}
      date: {is: "2025-05-08"}
      inputAddress: {is: "bc1qrtjvr4d8qtstw5334mspp7rmrzl55uj3dcwj09"}
    ) {
      block {
        timestamp {
          iso8601
        }
        height
      }
      feeValue
      feeInUSD: feeValue(in:USD)
      feeValueDecimal
      hash
      index
      inputValue
      inputCountBigInt
      inputCount
      index
      outputValueDecimal
      outputValue
      outputCountBigInt
      outputCount
      inputValueDecimal
    }
  }
}
```

## Get Total fees paid by an account on Bitcoin network

Below query will get you total fees paid by an account on Bitcoin network. You can try out the query [here](https://ide.bitquery.io/Get-Total-fees-paid-by-an-account-on-Bitcoin-network).

```
query MyQuery {
  bitcoin(network: bitcoin) {
    transactions(
      date: {is: "2025-05-08"}
      inputAddress: {is: "bc1qrtjvr4d8qtstw5334mspp7rmrzl55uj3dcwj09"}
    ) {
      total_fees_in_usd: feeValue(calculate:sum in:USD)
      total_fees: feeValue(calculate:sum)
    }
  }
}
```
