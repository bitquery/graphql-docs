# Attributes

The `attributes` field allows us to retrieve information about the attributes from cosmos networks.

Here is an example that demonstrates how to fetch attributes:

```
{
  cosmos {
    attributes(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      attribute
      block {
        timestamp {
          iso8601
        }
      }
      eventType
      message {
        index
        senders
        success
        type
      }
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
<summary>Filtering Attributes</summary>

Attributes can be filtered using following arguments:

-   `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
-   `attribute`: filter by attribute name
-   `blockHash`: filter by block hash
-   `blockHeight`: filter by block height
-   `date`: filter by date of the transaction
-   `eventType`: filter by type of the attribute
-   `messageIndex`: filter by message index in the transaction
-   `messageType`: filter by type of the message
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `senders`: filter by address of the senders
-   `success`: filter by success of transaction
-   `time`: filter by selecting time of transaction
-   `transactionHash`: filter by transaction hash
-   `transactionIndex`: filter by index of transaction in the block
-   `transactionSigner`: filter by address of transaction signer
-   `value`: filter by value of attribute
-   `valueIndex`: filter by index of value

</details>

-   `any`: catch-all field (OR Logic) that can be used to fetch the results by any of the other fields.
-   `attribute`: returns name of attribute
-   `block`: returns details of block in which transaction is included
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as `BigInt`
-   `date`: returns date of the transaction
-   `eventType`: returns event type
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `maximum`: returns maximum for selected [measurable field of cosmos attributes](/v1/docs/graphql-reference/enums/cosmos-attributes-measurable)
-   `message`: returns message info
-   `minimum`:returns minimum for selected [measurable field of cosmos attributes](/v1/docs/graphql-reference/enums/cosmos-attributes-measurable)
-   `transaction`: returns transaction info where message is included
-   `value`: returns value of attribute
-   `valueIndex`: returns index of attribute
