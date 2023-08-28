# Arguments

The Flow Arguments API provides information about transaction arguments from the flow blockchain which contains the payload and envelope signatures

<details>

<summary>Filtering Arguments</summary>

You can filter Arguments using the following fields:

-   any: a catch-all field that allows that applis OR logic to filter using any of the other fields
-   blockId: fitler arguments by block Id
-   date: filter by date the transaction was created
-   height: filter by height of the block where transaction is included
-   index: filter by index of argument in the transaction
-   options: filter data by ordering, sorting and constraining it using different fields
-   time: filter by time the transaction was created
-   transactionId: filter arguments by transaction Id
-   transactionIndexInCollection: filter by index of transaction in a collection
-   transactionsStatusCode: filter by status of the transaction
-   type: filter by type of the transaction
-   value: filter by value of the arguments
-   valueAsFix: filter by value of arguments as Fixed-point number 
-   valueAsInt: Filter by value of arguments as integer

</details>

### Returned Argument Information

-   any: a catch-all field that allows to fetch data using any of the other fields
-   block: provides details of block where transaction is included
-   count: returns count and other metrics
-   countBigInt: returns count and other metrics as BigInt
-   date: returns date when the transaction was created
-   expression: performs arithematic operation on values of other fields and returns output value
-   index: returns index of argument in the transaction
-   maximum: returns maximum for selected measurable field of Flow Arguments
-   minimum: returns minimum for selected measurable field of Flow Arguments
-   time: returns time when the transaction was created
-   value: returns value of argument
-   valueAsFix: returns value of argument converted to Fixed point number
-   valueAsInt: returns value of argument converted to Integer 
