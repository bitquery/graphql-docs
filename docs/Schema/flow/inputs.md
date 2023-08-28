# Inputs

The Flow Inputs API provides information about transaction inputs from the Flow Blockchain.

<details>

<summary>Filtering Inputs</summary>

You can filter the input using the following fields:

-   address: filter using input address
-   any: a catch-all filter that applies OR logic and allows to filter data using any of the other fields
-   blockId: filter by id of the block where transaction is included
-   currency: filter by currency of transfer
-   date: filter by date when transaction was created
-   entityId: filter by NFT Id
-   eventIndex: filter by index of event in the transaction
-   height: filter by height of the block where transaction is included
-   options: filter data by ordering and limiting it
-   smartContractAddress: filter by address of smart contract being called
-   smartContractMethod: filter by name of smart contract method being called
-   time: filter by time when the transaction was created
-   transactionId: filter by hash/id of the transaciton
-   transactionIndexInCollection: filter by index of transaction in the collection
-   transactionStatusCode: filter by transaction
-   transferReason: filter by value of transfer reason
-   type: filter by type of input

</details>

### Returned Input information

-   address: provides details of input address
-   amount: returns input amount value
-   amountDecimal: returns input amount value as Decimal
-   any: a cathc-all field that allows to fetch data using any of the other fields
-   block: provides information about block where transaction is included
-   count: returns count and other metrics of Flow Input
-   countBigInt: returns count and other metrics of Flow Input as BigInt
-   currency: returns information about currency of transfer
-   date: returns date when transaction was created
-   entityId: returns NFT Id if NFT transfer happend in the transaction
-   eventIndex: returns index of event in the transaction
-   expression: performs arithematic operation on value of other fields and returns the output
-   maximum: returns maximum for selected measurable field of Flow Input
-   minimum: returns minimum for selected measurable field of Flow Input
-   smartContractAddress: returns address of smart contract being called
-   smartContractMethod: returns information of smart contract method being called
-   time: returns time when transaction is created
-   transaction: returns information of transaction
-   transferReason: returns transfer reason like nft_transfer, fungible_token_transfer, fee
-   type: returns type of input
