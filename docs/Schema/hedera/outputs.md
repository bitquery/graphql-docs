# Outputs

The Outputs API provides information about transaction outputs on the Hedera Blockchain.

<details>

<summary>Filtering Outputs</summary>

-   `any`: A field to filter results based on any of the other fields.
-   `date`: Filter by the date of the transaction.
-   `entityType`: Filter by the entity type.
-   `nodeAccount`: Filter by the address of the node.
-   `options`: Filter data by sorting, ordering, and constraining.
-   `payerAccount`: Filter payer account.
-   `result`: Filter by the transaction result.
-   `success`: Filter by the success of the transaction.
-   `transactionHash`: Filter by the transaction hash.
-   `transferEntity`: Filter by the transfer entity.

</details>

### Returned Outputs Information

-   `amount`: Returns the transferred amount.
-   `any`: A catch-all field for filtering using any of the other fields.
-   `consensusTimestamp`: Returns the consensus timestamp of the transaction.
-   `count`: Returns count and other metrics.
-   `countBigInt`: Returns count and other metrics as BigInt.
-   `currency`: Returns details of the currency.
-   `date`: Returns the date of the transfer.
-   `entity`: Returns details of the entity.
-   `expression`: Performs arithmetic operations on fields and returns the results.
-   `feeCurrency`: Returns details of the currency in which the fee is paid.
-   `initialBalance`: Returns the initial balance.
-   `maxFee`: Returns the maximum fee for the transaction.
-   `maximum`: Returns maximum for the selected measurable field for Hedera Outputs.
-   `memo`: Returns the value of the memo field.
-   `minimum`: Returns minimum for selected measurable field for Hedera Outputs.
-   `nodeAccount`: Returns the specific account of the node where the transaction is being sent.
-   `payerAccount`: Returns the specific account in the transaction.
-   `result`: Returns the transaction result.
-   `success`: Returns success of the transaction as boolean.
-   `time`: Returns transaction time.
-   `transactionFee`: Returns fee consumed by the transaction.
-   `transactionHash`: Returns the hash of the transaction.
-   `transactionValidDurationInSec`: Returns duration of transaction validity in seconds.
-   `transferEntity`: Returns details of the transfer account.
-   `validStart`: Returns the timestamp when the transaction validity starts.
