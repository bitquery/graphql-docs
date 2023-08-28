# Transaction Authorizers

The Flow Transaction Authorizers API provides information about transaction authorizers from the Flow Blcockhain.

<details>

<summary>Filtering Transaction Authorizers Data</summary>

You can filter the transaction authorizer data using following fields:

-   any: a catch-all filter that applies OR logic and allows filter using any of the other field
-   authorizer: filter by account authorizing the trasnaction to mutate their state
-   blockId: filter by hash/id of the block
-   collectionId: filter by id of collection
-   date: filter by date when transaction was created
-   eventsCount: filter by count of events in the transaction
-   gasLimit: filter by gas limit of transaction
-   height: filter by height of block where transaction is included
-   indexInCollection: filter by index of transaction in collection
-   options: filter data by ordering and limiting it
-   payer: filter by address of payer
-   proposalKeyId: filter by key id of proposal key
-   proposalKeySequenceNumber: filter by sequence number of proposal key
-   proposer: filter by address of proposer
-   referenceBlockId: filter by id/hash of reference block
-   stautsCode: filter by status code of the transaction
-   time: filter by time when transaction was created
-   transactionId: filter by id/hash of transaction 

</details>

### Returned Transaction Authorizers Information

-   any: a catch-all field that allows to fetch data using any of the other field
-   authorizer: returns account authorizing the transaction to mutate their state
-   block: returns information about block where transaction is included
-   collectionId: returns SHA3-256 hash of the collection contents
-   count: returns count and other metrics of Flow Transaction Authorizer
-   countBigInt: returns count and other metrics of Flow Transaction Authorizer as BigInt
-   date: returns date when transaction created 
-   expression: performs arithematic operation on value of other fields and returns output
-   maximum: returns maximum for selected measurable field of Flow Transaction Authorizer
-   minimum: returns minimum for selected measurable field of Flow Transaction Authorizer
-   time: returns time of transaction creation 
-   transaction: returns information about transaction
