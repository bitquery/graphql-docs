# Transactions

The Tezos Transactions API allows you to retrieve information about transactions on the Tezos blockchain.

<details>

<summary>Filtering Transactions</summary>

You can filter transactions using various field:

-   `allocatedDestinationContract`: filter by whether there is allocated destination contract.
-   `amount`: filter based on the transferred amount.
-   `any`: A catch-all filter that applies OR logic and can be used with other fields.
-   `block`: filter transactions by block.
-   `blockHash`: filter transactions by block hash.
-   `burnAmount`: filter by the burn amount.
-   `consumedGas`: filter by the gas consumed.
-   `date`: filter by the date of the transaction.
-   `destinationContract`: filter by the destination contract.
-   `fee`: filter by the amount of fee consumed.
-   `gasLimit`: filter by the gas limit for the transaction.
-   `hash`: filter by the hash of the transaction.
-   `internal`: filter by whether the transaction is internal or external.
-   `opPath`: filter by the value of the opPath.
-   `options`: filter data by ordering, sorting, and constraining.
-   `paidStorageAmount`: filter by the amount paid for storage.
-   `paidStorageSizeDiff`: filter by the Amount of storage used by operations.
-   `proto`: filter by the proto value.
-   `protocol`: filter by the protocol used in the transaction.
-   `receiver`: filter by the address of the receiver.
-   `sender`: filter by the address of the sender.
-   `source`: filter by the source of the transaction.
-   `status`: filter by the status of the transaction.
-   `storageSize`: filter by the storage size of the transaction.
-   `success`: filter by the success of the transaction.
-   `time`: filter by the time of the transaction.

</details>

### Returned Transactions Information

-   `allocatedDestinationContract`: indicates whether there is allocated destination contract.
-   `amount`: returns the transferred amount.
-   `any`: a catch-all field that allows you to fetch data from any of the other fields.
-   `block`: returns details about the block where the transaction is included.
-   `burnAmount`: returns the burn amount.
-   `consumedGas`: returns the gas consumed by the transaction.
-   `count`: returns the count and other metrics.
-   `countBigInt`: returns the count and other metrics as BigInt.
-   `date`: returns the date of the transaction.
-   `destinationContract`: returns the destination contract.
-   `expression`: performs arithmetic operations on fields and returns the result.
-   `fee`: returns the transaction fee.
-   `gasLimit`: returns the gas limit of the transaction.
-   `hash`: returns the hash of the transaction.
-   `internal`: indicates whether the transaction is internal or external.
-   `maximum`: returns the maximum value for the selected measurable field in Tezos Transactions.
-   `minimum`: returns the minimum value for the selected measurable field in Tezos Transactions.
-   `opPath`: returns the value of the opPath.
-   `paidStorageAmount`: returns the amount paid for storage.
-   `paidStorageSizeDiff`: returns the amount of storage used by operations.
-   `proto`: returns the proto value.
-   `protocol`: returns the protocol used in the transaction.
-   `receiver`: returns the address of the receiver.
-   `sender`: returns the address of the sender.
-   `source`: returns the source of the transaction.
-   `status`: returns the status of the transaction.
-   `storageSize`: returns the storage size.
-   `success`: indicates the success of the transaction.
-   `timestamp`: returns the timestamp of the transaction.
