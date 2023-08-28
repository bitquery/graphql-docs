# Outputs

The Flow Outputs API provides information about the transaction outputs from the Flow Blockchain.

<details>

<summary>Filtering Outputs</summary>

You can filter the outputs using the following fields:

-   address: filter using output address
-   any: a catch-all filter that applies OR logic and allows to filter data using any of the other fields
-   blockId: filter by id/hash of the block where transaction is included
-   currency: filter by currency of transfer
-   date: filter by date when transaction was created
-   entityId: filter by NFT Id
-   eventIndex: filter by index of the event in the transaction
-   height: filter by height of the block where transaction is included
-   options: filter data by ordering and limiting it 
-   smartContractAddress: filter by address of smart contract being called
-   smartContractMethod: filter by name of smart contract method being called 
-   time: filter by time when transaction was created
-   transactionId: filter by id/hash of the transaction
-   transactionIndexInCollection: filter by index of the transaction in the collection
-   transactionStatusCode: filter by status code of the transaction
-   transferReason: filter by value of transfer reason
-   type: filter by type of output

</details>

### Returned Output Information

-   address: provides details of output address
-   amount: returns output amount value
-   amountDecimal: returns output amount value as Decimal
-   any: a catch-all field that allows to fetch data using any of the other fields
-   block: provides information about block where transaction is included
-   count: returns count and other metrics of Flow Output
-   countBigInt: returns count and other metrics of Flow Output as BigInt
-   currency: returns information about currency of transfer
-   date: returns date when transaction was created
-   entityId: returns NFT Id if NFT transfer happened in the transaction
-   eventIndex: returns index of event in the transaction
-   expression: performs arithematic operation on value of other fields and returns the output
-   maximum: returns maximum for selected measurable field of Flow Output
-   minimum: returns minimum for selected measurable field of Flow Output
-   smartContractAddress: returns address of smart contract being called
-   smartContractMethod: returns information of smart contract method being called
-   time: returns time when transaction is created
-   transaction: returns information of transaction
-   transferReason: returns transfer reason like nft_transfer, fungible_token_transfer, fee
-   type: returns type of output
