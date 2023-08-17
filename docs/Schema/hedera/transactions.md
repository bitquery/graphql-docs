# Transactions

The Transactions API offers insights into transactions on the Hedera Blockchain.

<details>

<summary>Filtering Transactions</summary>

- `any`: A field that allows filtering data using any of the other fields.
- `date`: Filter by the date of the transaction.
- `entityType`: Filter by entity type.
- `nodeAccount`: Filter by the address of the node.
- `options`: Filter data by sorting, ordering, and constraining.
- `payerAccount`: Filter by a specific account in the transaction.
- `result`: Filter by the result of the transaction.
- `success`: Filter by the success of the transaction.
- `transactionHash`: Filter by the hash of the transaction.

</details>

- `any`: A catch-all field that fetches data using any of the other fields.
- `consensusTimestamp`: Returns the consensus timestamp of the transaction.
- `count`: Returns count and other metrics.
- `countBigInt`: Returns count and other metrics as BigInt.
- `date`: Returns the date of the transactions.
- `entity`: Returns details of the entity.
- `expression`: Performs arithmetic operations on fields and returns the results.
- `feeCurrency`: Returns details about the currency in which the fee is paid.
- `initialBalance`: Returns the initial balance.
- `maxFee`: Returns the maximum fee for the transaction.
- `maximum`: Returns the maximum for the selected measurable field for Hedera Transaction.
- `memo`: Returns the value of the memo field.
- `minimum`: Returns the minimum for selected measurable fields of the transaction.
- `nodeAccount`: Returns the specific account of the node where the transaction is being sent.
- `payerAccount`: Returns the specific account in the transaction.
- `result`: Returns the result of the transaction.
- `success`: Returns success of the transaction as boolean.
- `time`: Returns the time of the transaction.
- `transactionBytes`: Returns transaction bytes.
- `transactionFee`: Returns the fee consumed by the transaction.
- `transactionHash`: Returns the hash of the transaction.
- `transactionType`: Returns the type of the transaction.
- `transactionValidDurationInSec`: Returns the duration of the transaction in seconds.
- `validStart`: Returns the timestamp when the transaction validity starts.