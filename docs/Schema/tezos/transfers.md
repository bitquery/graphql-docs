# Transfers

The Tezos Transfers API provides information about the transfers on the Tezos Blockchain.

<details>

<summary>Filtering Transfers</summary>

You can filter transfers using the following fields:

- `amount`: filter by the amount of tokens transferred.
- `any`: A cathc-all filter that applies OR logic and can be used with other fields.
- `block`: filter by the block where the transaction is included.
- `blockHash`: filter by the hash of a specific block.
- `date`: filter by the date of the transfer.
- `destinationContract`: filter by the value of the destination contract.
- `direction`: filter by the direction of transfers (incoming or outgoing).
- `internal`: filter by whether the transfer is internal or external.
- `kind`: filter by the kind of operation.
- `opPath`: filter by the value of the opPath.
- `options`: filter data by ordering, sorting, and constraining.
- `proto`: filter by the proto value.
- `protocol`: filter by the protocol used for the transaction.
- `receiver`: filter by the address of the transfer receiver.
- `sender`: filter by the address of the transfer sender.
- `time`: filter by the time of the transfer.
- `transactionHash`: filter by the hash of the transaction.
- `transactionSource`: filter by the source of the transaction.

</details>

### Returned Transfers Information

- `amount`: returns the amount of tokens transferred.
- `any`: a catch-all field that allows you to fetch data using any of the other fields.
- `block`: returns details about the block where the transaction is included.
- `count`: returns the count and other metrics.
- `countBigInt`: returns the count and other metrics as BigInt.
- `currency`: returns the currency used in the transfer.
- `date`: returns the date of the transfer.
- `destinationContract`: returns the value of the destination contract.
- `direction`: returns the direction of the transfer (incoming or outgoing).
- `expression`: performs arithmetic operations on the field values and returns the result.
- `internal`: indicates whether the transfer is internal or external.
- `kind`: returns the kind of operation.
- `maximum`: returns the maximum value for the selected measurable field in Tezos Transfers.
- `minimum`: returns the minimum value for the selected measurable field in Tezos Transfers.
- `opPath`: returns the value of the opPath.
- `proto`: returns the proto value.
- `protocol`: returns the protocol used for the transaction.
- `receiver`: returns the address of the transfer receiver.
- `sender`: returns the address of the transfer sender.
- `timestamp`: returns the timestamp of the transfer.
- `transaction`: returns details about the transaction where the transfer is included.