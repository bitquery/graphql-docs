# Blocks

The Flow Blocks API provides detailed information about blocks created on the Flow Blockchain.

<details>

<summary>Filtering Blocks</summary>

You can filter the blocks using the following fields:

-   any: a catch-all filter that applies OR logic and allows filtering using any of the other fields
-   collectionCount: filter by collection count in the block
-   date: filter by date when block was created
-   height: filter by height of the block in the blockchain
-   id: filter by id of the block
-   options: filter returned data by ordering, sorting and limiting it
-   parentBlockId: filter by id of parent block
-   time: filter by time when block was created
-   transactionsCount: filter by transaction included in the block

</details>

### Returned Blocks Information

-   any: a catch-all field which can be used to fetch data with any of the other fields
-   blockSignatures: returns BLS signatures of consensus node
-   collectionsCount: returns count of collections in the block
-   count: returns count and other metrics for different fields 
-   countBigInt: returns count and other metrics as BigInt
-   date: returns date when the block was created
-   expression: performs artithematic operatio on value of other field and returns output 
-   height: returns height of the block in the chain
-   id: returns SHA3-256 hash of the entrie block payload
-   maximum: returns maximum for selected measurable field of Flow Blocks
-   minimum: returns minimum for selected measurable field of Flow Blocks
-   parentBlockId: returns id/hash of parent block
-   time: returns time when block was created
-   transactionsCount: returns transaction count of block
