# Event Fields

The Flow Event Fields API provides information about events from the Flow Blockchain.

<details>

<summary>Filtering Events Fields Information</summary>

You can filter the events fields data using the following fields:

-   any: a catch-all filter that applies OR logic and allows us to filter data using other fields.
-   blockId: filter by id of block where transactio is included 
-   date: filter by date when transaction is created
-   eventIndex: filter by index of event in the transaction
-   fieldAsFix: filter by value of field as fix point number
-   fieldAsInt: filter by value of field as Integer
-   height: filter by heigh of the block where transaction is included
-   options: filter data using ordering and limiting it
-   smartContractAddress: filter by address of smart contract that is being called
-   smartContractMethod: filter by invoked method of smart contract 
-   time: filter time the transaction was created
-   transactionId: filter by transaction id
-   transactionIndexInCollection: filter by index of the transaction in the collection
-   transactionStatusCode: filter by status code of the transaction
-   type: filter by type of the field

</details>

### Returned Event Fields Information

-   any: a catch-all field that allows you to fetch data using any of the other fields
-   block: provides information about block where transaction is included
-   count: provides count and other metrics for Flow Event Fields
-   countBigInt: provides count and other metrics for Flow Event Fields as BigInt
-   date: returns date when the transaction is crated
-   eventIndex:filter by index of event in the transaction
-   expression: performs arithematic operation on value of other fields and returns output
-   field: returns value and type of the field as json
-   fieldAsFix: returns field value as fixed point number
-   fieldAsInt: returns fiedl value as integer
-   index: returns index of field in the transaction
-   maximum: returns maximum for selected measurable field for Flow Event Field
-   minimum: returns minimum for selected measurable field for Flow Event Field
-   smartContractAddress: returns address of smart contract being called
-   smartContractMethod: returns smart contract method being invoked
-   time: returns time when transaction is created
-   transaction: returns information about transaction
-   type: returns type of field
