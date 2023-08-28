# Transactions

The Flow Transaction API provides information about transactions from the Flow Blockchain.

<details>

<summary>Filtering Transactions</summary>

You can filter transaction data using following fields:

-   any: a catch-all field that applies OR logic and allows to filter data using any of the other fields
-   blockId: filter by id/hash of block
-   collectionId: filter by id/hash of the collection
-   date: filter date of transaction creation
-   eventsCount: filter by count of events in the transaction
-   gasLimit: filter by gas limit of transaction 
-   height: filter by height of block where transaction is included
-   indexInCollection: filter index of transaction in the collection
-   options: filter data by ordering and limiting it
-   payer: filter by account paying for the transaction fee
-   proposalKeyId: filter by id of proposal key on proposal account
  
-   proposalKeySequenceNumber: filter by sequence number for the proposal key
-   referenceBlockId: filter by block id used to determine transaction expiry
-   statusCode: filter by status code of the transaction
-   time: filter by time when transaction is created
-   transacitonId: filter by id/hash of the transaction

</details>

### Returned Transaction Information

-   any: a catch-all filter that allows to fetch data using any of the other field
-   block: returns information about block where transaction is included
-   collectionId: returns SHA3-256 has of the collection contents
-   count: returns count and other metrics of Flow Transaction
-   countBigInt: returns count and other metrics of Flow Transaction as BigInt
-   date: returns date when transaction was created
-   errorMessage: returns error message if any
-   eventsCount: returns count of events in the transaction
-   expression: performs arithematic operation on value of other fields and returns output
-   gasLimit: returns gas limit of transaction
-   id: returns id/hash of transaction
-   indexInColleciton: returns transaction index inside collection
-   maximum: returns maximum for selected measurable field of Flow Transaction
-   minimum: returns minimum for selected measurable field of Flow Transaction
-   payer: returns the account paying for the transaction fees
-   proposalKeyId: returns Id of proposal key on the proposal account
-   proposalKeySequenceNumber: returns sequence number for proposal key
-   proposer: returns the account that specifies a proposal key
-   referenceBlockId: returns Block id used to determine transaction expiry
-   script: returns raw script code for the cadence script encoded as UTF-8 bytes
-   statusCode: returns status code of transaction where 0 is success and 1 is failure
-   time: returns time the transaction was created
