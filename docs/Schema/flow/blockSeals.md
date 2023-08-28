# Block Seals

The Flow Block Seals API provides you information about blocks seal from the Flow Blockchain. A block seal is an attestation that execution result of a specific block has been verified and approved by a quorum of verification nodes.

<details>

<summary>Filtering Block Seal</summary>

You can filter block seal data using following fields:

-   any: a catch-all filter that applies OR logic and allows filter using any of the other fields
-   blockId: filter by blocks Id/hash
-   blockSealId: filter by seal id of block
-   height: filter height of the block in the chain
-   index: filter by index
-   options: filter returned data by ordering, sorting and limiting using different fields
-   time: filter by time of block seal being created

</details>

### Returned Block Seal Information

-   any: a catch-all field that allows us to fetch data using any of the other field
-   block: returns information about the block
-   count: returns count and other metrics of other fields
-   countBigInt: returns count and other metrics of other fields as BigInt
-   date: returns date of the block seal being created
-   executionReceiptId: returns Id of the execution receipt being sealed
-   executionReceiptSignatures: returns BLS singatures of verification nodes on execution receipt contents
-   expression: performs arithematic operation on value of other fields and returns output
-   index: returns index inside block
-   maximum: returns maximum for selected measurable field of Flow Block Seals
-   minimum: returns minimum for selected measurable field of Flow Block Seals
-   resultApprovalSIgnatures: returns BLS signatures of verification nodes on the result approval contents
-   sealId: returns Id of the block being sealed
-   time: returns the time block being sealed
