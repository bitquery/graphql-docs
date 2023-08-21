# Operations

An operation is a command that tells the Stellar network to do something, such as send money, or create an account. A transaction is a group of operations that are submitted to the Stellar network together.

```
query ($network: StellarNetwork!, $hash: String!) {
 stellar(network: $network) {
   operations(
     options: {asc: "index", limit: 10, offset: 0}
     transactionHash: {is: $hash}
   ) {
     timestamp {
       time(format: "%Y-%m-%d %H:%M:%S")
     }
     index
     block
     sourceAccount {
       address
       annotation
     }
     operation
     success
   }
 }
}

{
 "hash": "tx hash",
 "network": "stellar"
}

```

<details><summary>Filtering</summary>

- **transactionHash**

  The hash of the transaction that contains the operation.

- **transactionSender**

  The address of the account that submitted the transaction that contains the operation.

- **transactionIndex**

  The index of the operation in the transaction.

- **time**

  The time at which the operation was created.

- **success**

  A boolean value that indicates whether the operation was successful.

- **sourceAccount**

  The account that created the operation.

- **operation**

  The type of the operation to use as a filter

- **index**

  The index of the operation in the transaction.

- **details**

  A JSON object that contains additional information about the operation. The specific content of this object depends on the type of operation.

- **date**

  The date on which the operation was created.

- **block**

  The number of the block in which the operation was created.

- **any**

  A catch-all field (OR logic) that can be used to filter for operations that match any of the fields.

</details>

## Fields

- **timestamp**

  The time at which the operation was created.

- **index**

  The index of the operation in the transaction.

- **block**

  The number of the block in which the operation was created.

- **sourceAccount**

  The account that created the operation.

- **operation**

  The type of the operation for example `manage_sell_offer`

- **success**

  A boolean value that indicates whether the operation was successful.
