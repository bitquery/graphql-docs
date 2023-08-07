# Algorand Smart Contract Calls API

Our Algorand Smart Contract Calls API provides detailed information about smart contract calls executed on the Algorand Blockchain.

## Get Count of Smart Contract Calls in Latest Block

```
{
  algorand {
    smartContractCalls(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 1}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      count(uniq: calls)
    }
  }
}
```

The query retrieves the latest block and provides the count of unique smart contract calls made within that block.

## Get Latest Smart Contract Calls with Transaction Type

```
{
  algorand {
    smartContractCalls(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      txType: {is: pay}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
      }
      transaction {
        hash
      }
      txSender {
        address
      }
      txType
    }
  }
}
```

The query retrieves information about the latest 10 smart contract calls on the Algorand blockchain with the transaction type "pay," including the timestamp of the block, the smart contract address, the transaction hash, the sender's address, and the transaction type.
