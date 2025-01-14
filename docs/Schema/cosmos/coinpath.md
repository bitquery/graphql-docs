# Coinpath

The coinpath API provides detailed information about the money flow using coinpath technology.

<details>
<summary></summary>

-   `currency`: filter by the currency involved in the transactions.
-   `date`: filter by date of the transaction
-   `initialAddress`: filter initial address of the transfer
-   `initialDate`: filter by initial date of the transfer
-   `initialTime`: filter by initial time of the transfer
-   `options`: filter returned data by ordering, limiting and constraining it
-   `receiver`: filter by the receiver of ther transfer
-   `sender`: filter by the sender of the transfer
-   `time`: filter by time of the transfer

</details>

-   `amount`: returns summary of transferred value
-   `any`: catch-all field that can be used to fetch the results by any of the other fields
-   `block`: returns details of block where transaction is included 
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics
-   `currency`: returns currency of transfer
-   `depth`: returns 1- based hop depth of the graph
-   `maximum`: returns maximum for selected measurable field of Cosmos coinpath
-   `minimum`: returns minimum for selected measurable field of Cosmos coinpath
-   `receiver`: returns receiver address
-   `sender`: returns sender address
-   `transaction`: returns message of transfer happened
