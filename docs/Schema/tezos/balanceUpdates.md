# Balance Updates

The balanceUpdates API allows you to retrieve information about balance updates for a specific address.

Here's an example that demonstrates how to fetch balance updates data:

```

```

<details>

<summary>Filtering Balance Updates</summary>

You can filter balance updates data using the following fields:

-   `address`: filter by address
-   `any`: a catch-all field that allows filtering data using any of the other fields
-   `attribute`: filter using attributes
-   `block`: filter by block where the transaction is included
-   `blockHash`: filter by block hash
-   `category`: filter by category
-   `change`: filter by change in value
-   `cycle`: filter by cycle
-   `date`: filter by date of the transaction
-   `freezer`: filter by the value of the freezer field
-   `internal`: filter by whether the transfer is internal or external
-   `kind`: filter by kind of balance update
-   `opPath`: filter by value of opPath
-   `options`: filter data by limiting, sorting, and constraining
-   `proto`: filter by proto value
-   `protocol`: filter by protocol used for the transaction
-   `source`: filter by source
-   `time`: filter by time of the transaction
-   `transactionHash`: filter by transaction hash
-   `transactionSource`: filter by transaction source

</details>

### Returned Balance Updates Information

-   `address`: returns the address
-   `any`: a catch-all field to fetch data using any of the other fields
-   `attribute`: returns the value of the attribute
-   `block`: returns information about blocks where the transaction is included
-   `category`: returns the category of balance updates
-   `change`: returns the change value
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `cycle`: returns the cycle value
-   `date`: returns the date of the transaction
-   `expression`: performs arithmetic operations on the value of the field and returns the output value
-   `freezer`: returns the freezer value as a boolean
-   `internal`: returns whether the transfer is internal or external
-   `kind`: returns the kind of balance update
-   `maximum`: returns the maximum for the selected measurable field of Tezos Balance Updates
-   `minimum`: returns the minimum for the selected measurable field of Tezos Balance Updates
-   `opPath`: returns the value of opPath
-   `proto`: returns the proto value
-   `protocol`: returns the protocol used for the transaction
-   `source`: returns the source of the transaction
-   `timestamp`: returns the timestamp of the transaction
-   `transaction`: returns details of the transaction
