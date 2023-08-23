# Operations

The Tezos Operations API provides information about operations from the Tezos Blockchain.

<details>

<summary>Filtering Operations</summary>

You can filter the operations using the following fields:

-   `any`: A catch-all filter that applies OR logic and can be used with other fields.
-   `block`: filter by the block where the operation is included.
-   `blockHash`: filter by the hash of the block.
-   `contents`: filter by the contents of the operation.
-   `date`: filter by the date of the operations.
-   `internal`: filter whether the operation is internal or external.
-   `kind`: filter by the type of operation.
-   `opPath`: filter by the value of the operation path.
-   `options`: filter data by ordering, sorting, and constraining.
-   `proto`: filter by the value of the protocol version.
-   `protocol`: filter by the protocol used.
-   `source`: filter by the source of the operation.
-   `success`: filter by the success of the operation.
-   `time`: filter by the time of the operation.
-   `transactionHash`: filter by the hash of the transaction.
-   `transactionSource`: filter by the source of the transaction.

</details>

### Returned Operations Infromation

- `any`: a catch-all field that allows you to fetch data using any of the other fields.
- `block`: returns information about the block where the operation is included.
- `contents`: returns the contents of the operation.
- `count`: returns the count and other metrics.
- `countBigInt`: returns the count and other metrics as BigInt.
- `date`: returns the date when the operation occurred on the blockchain.
- `expression`: performs arithmetic operations on the field values and returns the result.
- `internal`: indicates whether the operation is internal or external.
- `kind`: returns the kind of operation.
- `maximum`: returns the maximum value for the selected measurable field in Tezos operations.
- `minimum`: returns the minimum value for the selected measurable field in Tezos operations.
- `opPath`: returns the value of the operation path.
- `proto`: returns the value of the protocol version.
- `protocol`: returns the protocol used.
- `source`: returns the source of the operation.
- `success`: indicates the success of the operation.
- `timestamp`: returns the timestamp of the operation.
- `transaction`: returns details about the transaction.