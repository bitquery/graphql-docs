# Transaction Envelope Signatures

The Flow Transaction Envelope Signatures API provides details about envelope signatures of transaction from the Flow Blockchain.

<details>

<summary>Filtering Transaction Envelope Signatures</summary>

You can filter the data using following fields:

-   address: filter by address of the account for the signature
-   any: a catch-all field that applies OR logic and allows to filter data using any of the other fields
-   blockId: filter by id/hash of block where transaction is included
-   collectionId: filter by id of collection where transaction is included
-   date: filter by date of transaction creation
-   eventsCount: filter by count of events in the transaction
-   gasLimit: filter by gas limit of the transaction
-   height: filter by height of the block where transaction is included
-   indexInCollection: filter by index of transaction in the collection
-   keyId: filter by id of account key
-   options: filter data by ordering and limiting it
-   payer: filter by address of payer
-   proposalKeyId: filter by key id of proposal key
-   proposalKeySequenceNumber: filter by sequence number of proposal key
-   proposer: filter by address of proposer
-   referenceBlockId: filter by id/hash of reference block
-   signature: filter by raw signature data
-   statusCode: filter by status code of the transaction
-   time: filter by time when transaction was created
-   transactionId: filter by id/hash of transaction

</details>

### Returned Transaction Envelope Signatures Information

-   address: returns address of account for the signature
-   any: a catch-all feild that allows to fetch data using any of the other fields
-   block: returns information about block where transaction was included
-   collectionId: returns SHA3-256 has of the collection contents
-   count: returns count and other metrics of Flow Transaction Envelope Signatures
-   countBigInt: returns count and other metrics of Flow Transaction Envelope Signatures as BigInt
-   date: returns date when transaction was created
-   expression: performs arithematic operation on value of other fields and returns output
-   keyId: returns id of the account key
-   maximum: returns maximum for selected measurable field of Flow Transaction Envelope Signatures
-   minimum: returns minimum for selected measurable field of Flow Transaction Envelope Signatures
-   signature: returns raw signature data
-   time: returns time the transaction was created
-   transaction: returns basic information about transaction
