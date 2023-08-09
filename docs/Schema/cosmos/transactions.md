# Transaction

The Transactions API returns information about transactions on Cosmos network.

Here is an example that demonstrates how to fetch 10 latest transactions:

```
{
  cosmos {
    transactions(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      code
      fee
      feeCurrency {
        address
        name
      }
      gasUsed
      hash
      index
      rawTx
      signer {
        address
      }
      type
    }
  }
}
```

<details>

<summary>Filtering Transactions</summary>

-   `any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

-   `blockHash`: filter by hash of block where transaction is included

-   `blockHeight`: filter by height of the block where transaction is included

-   `code`: filter by code

-   `date`: filter by date of the transaction

-   `fee`: filter by fee of the transaction

-   `gasUsed`: filter by gas used

-   `gasWanted`: filter by gas wanted

-   `hash`: filter by transaction hash

-   `index`: filter by index of transaction in the block

-   `memo`: filter by memo

-   `options`: filter data by ordering, limiting and constraining it

-   `signer`: filter by transaction signer

-   `success`: filter by transaction success

-   `time`: filter by time of the transaction

-   `type`: filter by transaction type

</details>

-   `any`: a catch-all field that can be used to fetch the results by any of the other fields

-   `block`: returns block where transaction is included

-   `code`: returns code

-   `count`: returns count and other metrics

-   `countBigInt`: returns count and other metrics as BigInt

-   `date`: returns date of the transaction

-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns fee of the transaction

-   `feeCurrency`: returns fee currency

-   `feeDecimal`: returns fee decimal

-   `gasUsed`: returns gas used

-   `gasWanted`: returns gas wanted

-   `hash`: returns hash of the transaction

-   `index`: returns index of transaction in the block

-   `maximum`: returns maximum of selected measurable field of Cosmos transaction

-   `memo`: returns memo

-   `minimum`: returns minimum of selected measurable field of Cosmos transaction

-   `rawTx`: returns raw transaction

-   `signer`: returns signer of the transaction

-   `success`: returns success of the transaction as boolean

-   `type`: returns type of transaction
