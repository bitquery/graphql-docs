# Events

The Flow Events API provides information about events emiited on the Flow Blockchain.

<details>

<summary>Filtering Events</summary>

-   any: a catch-all filter that applies OR logic and allows us to filter data using other fields
-   blockId: filter by id of the block where the transaction is included
-   date: filter by date when transaction is created
-   height: filter by height of the block
-   index: filter by index of event in the transaction
-   options: filter data by ordering and limiting it
-   smartContractAddress: filter by address of smart contract being called
-   smartContractMethod: filter by smart contract method being invoked 
-   time: filter by time when event is emitted
-   transactionId: filter by id of transaction
-   transactionIndexInCollection: filter by index of transaction in the collection
-   transactionStatusCode: filter by status code of transaction
-   type: filter by type of the event

</details>

### Returned Transaction Information

-   any: a catch-all field to fetch data using any of the other fields
-   block: provides information about block where transaction is included
-   count: returns count and other metrics for Flow Event
-   countBigInt: returns count and other metrics for Flow Event
-   date: returns date when transaction was created
-   expression: perform arithematic operation on values of other fields and returns output 
-   index: returns index of event in the transaction
-   maximum: returns maximum for selected measurable field of Flow Event
-   minimum: returns minimum for selected measurable field of Flow Event
-   smartContractAddress: returns address of smart contract being called
-   smartContractMethod: returns information about invoked smart contract method 
-   time: returns time when transaction was created
-   transaction: returns details of transaction
-   type: returns type of event
