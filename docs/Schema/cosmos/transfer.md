# Transfers

The Transfers API returns information about token transfers on Cosmos network.

Here's an example that demostrates how to fetch 10 latest transfers:

```
{
  cosmos {
    transfers(
      date: {after: "2023-08-07"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      messageIndex
      messageType
      receiver {
        address
      }
      sender {
        address
      }
      senders
      transaction {
        index
        signer {
          address
        }
      }
      type
      value
    }
  }
}
```

<details>

<summary>Filtering Transfers</summary>

-   `any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields 

-   `block`: filter by the block where transaction is included

-   `blockHash`: filter by the hash of the block

-   `currency`: filter by the currency used in the transfer

-   `date`: filter the date on which transaction was created

-   `index`: filter by index of the transaction in the block

-   `options`: filter data by ordering, limiting, and constraining it

-   `receiver`: filter by receiver of the transfer

-   `sender`: filter by sender of the transfer

-   `senders`: filter by senders of the message

-   `time`: filter by the time

-   `transactionHash`: filter by the transaction hash where message is included

-   `transactionIndex`: filter by the transaction index

-   `transactionSigner`: filter by transaction signer

-   `type`: filter by type of transfer

-   `typeTransfer`: 

-   `value`: filter by value of transfer

</details>

-   `any`: a catch-all field that can be used to fetch the results by any of the other fields

-   `block`: reutrns information of block where transaction is included

-   `count`: returns count and other metrics

-   `countBigInt`: returns count and other metrics as BigInt

-   `currency`: returns currency of the transfer

-   `date`: returns date of the transfer

-   `delegated`: returns boolean of delegated status

-   `expression`: performs arithematic operation on fields in the query and returns value of the operation

-   `maximum`: returns maximum for selected [measurable field of Cosmos Transfer](/v1/docs/graphql-reference/enums/cosmos-transfers-measurable)

-   `messageIndex`: returns index of message in the transaction

-   `messageType`: returns type of message

-   `minimum`: returns minimum for selected [measurable field of Cosmos Transfer](/v1/docs/graphql-reference/enums/cosmos-transfers-measurable)

-   `receiver`: returns receiver address of the transfer

-   `sender`: returns sender address of the transfer

-   `senders`: returns message senders

-   `transaction`: returns information of transaction where message is included

-   `type`: returns type of the transfer

-   `value`: returns value of the transfer

-   `valueDecimal`: returns value as decimal
