# Transaction Payload Signatures

The Flow Transaction Payload Signatures API provides information about payload signatures of transaction from the Flow Blockchain.

<details>

<summary>Filtering Transaction Payload Signatures</summary>

You can filter data using following fields:

-   address: filter by address of the account for the signature
-   any: a catch-all filter that applies OR lgoic and allows to filter data using any of the other fields
-   blockId: filter by id/hash of the block where transaction is included
-   collectionId: filter by id of collection where transaction is included
-   date: filter date of the transaction creation
-   eventsCount: filter count of event in the transaction
-   gasLimit: filter by gas limit of transaction
-   height: filter by height of block
-   indexInCollection: filter by index of the transaction in the collection
-   keyId: filter by id of the account key
-   options: filter data by ordering and limiting it
-   payer: filter by address of the payer
-   proposalKeyId: filter by key id of proposal key
-   proposalKeySequenceNumber: filter by sequence number of proposal key
-   proposer: filter by address of proposer
-   referenceBlockId: filter by id/hash of reference block
-   signature: filter by raw signature data
-   statusCode: filter by status code of the transaction
-   time: filter by time when transaction was created
-   transactionId: filter by id/hash of transaction

</details>

### Returned Transaction Payload Signatures Information

-   address: returns address of the account for the signature
-   any: a catch-all field that allows to fetch data using other fields
-   block: returns block where transaction is included
-   collectionId: returns SHA3-256 hash of the collection contents
-   count: returns count and other metrics of Flow Transaction Payload Signature
-   countBigInt: returns count and other metrics of Flow Transaction Payload Signature as BigInt
-   date: returns date of transaction creation
-   expression: performs arithematic operation on value of other fields and returns output 
-   keyId: returns id of the account key
-   maximum: returns maximum for selected measurable field of Flow Transaction Payload Signatures
-   minimum: returns minimum for selected measurable field of Flow Transaction Payload Signatures
-   signature: returns raw signature data
-   time: returns time of transaction creation
-   transaction: returns basic information about transaction
