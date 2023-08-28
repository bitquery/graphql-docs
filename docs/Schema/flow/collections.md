# Collections

The Flow Collections API provides information about collections from the Flow Blockchain. A collection is batch of transactions that have been includes in a block.

<details>

<summary>Filtering Collections</summary>

You can filer the collections data using the following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   blockId: filter by id of the block where collection is included
-   collectionId: filter by SHA3-256 hash of the collection contents
-   date: filter by date the transaction was created
-   height: filter by block height
-   index: filter by index of collection in the block
-   options: filter data by ordering, sorting and limiting it
-   time: filter by time the transaction was created
-   transactionsCount: filter by transaction count in collection

</details>

### Returned Collections Information

-   any: a catch-all fields to fetch data using any of the other fields
-   block: provides basic information about block where collection is included
-   count: returns count and other metrics for Flow Collections
-   countBigInt: returns count and other metrics for Flow Collections as BigInt
-   date: returns date when collection was created
-   expression: performs arithematic operations on value of other fields and returns output
-   id: returns SHA3-256 hash of the collection contents
-   index: returns index of collection inside block
-   maximum: returns maximum for selected measurable field of Flow Collections
-   minimum: returns minimum for selected measurable field of Flow Collections
-   signatures: returns BLS signatures of the collection nodes guaranteeing the collection
-   time: returns time the collection was created
-   transactionsCount: returns count of transactions inside collection
