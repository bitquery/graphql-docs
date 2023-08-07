# Algorand Transaction API

Our Algorand Transaction API provides detailed information about Algorand Transactions. Below are some examples of `transactions` API:

## Get Latest Transactions

```
{
  algorand {
    transactions(
      date: {after: "2023-08-05"}
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
      fee
      group
      hash
      index
      sender {
        address
      }
      subtype
      type
    }
  }
}
```

The query retrieves the latest 10 transactions from the Algorand blockchain, providing details such as the block height, timestamp, currency address and name, fee, group, transaction hash, index, sender's address, subtype, and type of each transaction.

## Get Count of Transactions by a Particular Address

```
{
  algorand {
    transactions(
      txSender: {is: "ADDRESS_HERE"}
    ) {
      count
    }
  }
}
```

The query retrieves the count of all transactions sent by the specified Algorand address ("ADDRESS_HERE") from the Algorand blockchain.

## Get Information about a Particular Transaction

```
{
  algorand {
    transactions(
      txHash: {is: "TXN_HASH_HERE"}
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
      sender {
        address
      }
      subtype
      type
    }
  }
}
```

The query retrieves details of a specific transaction with the given transaction hash ("TXN_HASH_HERE") from the Algorand blockchain, including the block height, timestamp, currency address and name, sender's address, subtype, and type of the transaction.