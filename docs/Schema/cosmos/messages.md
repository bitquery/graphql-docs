# Messages

The `messages` field allows us to retrieve detaild information about messages from Cosmos blockchain.

Here is an example that demonstrates retrieving message from Cosmos hub:

```
{
  cosmos {
    messages(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      index
      json
      senders
      transaction {
        hash
        signer {
          address
        }
      }
    }
  }
}
```

<details>
<summary>Filtering Messages</summary>

-   `any`: a catch-all filter (OR logic) that can be used to fetch the results by any of the other fields
-   `blockHash`: filter by block hash
-   `blockHeight`: filter by block height
-   `date`: filter by date on which transaction was created
-   `index`: filter by index of message in transaction
-   `options`: filter returned data by ordering, limiting and constraining it
-   `senders`: filter by message sender
-   `success`: filter by success of transaction
-   `transactionHash`: filter by transaction hash
-   `transactionIndex`: filter by index of transaction in block
-   `transactionSigner`: filter by transaction signer
-   `type`: filter by type of the message

</details>

-   `any`: a catch-all field can be used to fetch the results by any of the other fields
-   `block`: returns information of block where transaction is included
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `date`: return date on which transaction is created
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `index`: returns index of message in transaction
-   `json`: returns body of message
-   `maximum`: returns maximum for selected measurable field of Cosmos message
-   `minimum`: returns minimum for selected measurable field of Cosmos message
-   `senders`: returns message sender(s)
-   `success`: returns success of transaction as boolean
-   `transaction`: returns transaction formation where message is included
-   `type`: returns type of message
