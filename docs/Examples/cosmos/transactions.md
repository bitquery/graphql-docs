# Transactions API

Our Cosmos Transactions API provides information related to transactions created on Cosmos Blockchain.

## Retrieve Specific Transaction

```
{
  cosmos {
    transactions(
      hash: {is: "028b49185b0be6adf7b24804a3c28cd3a0a01c9b0ce0c6eb2e7dce1f5c0dc6b2"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      fee
      feeCurrency {
        name
        address
      }
      gasUsed
      index
      rawTx
      signer {
        address
      }
      type
    }
  }
}
```

This query retrieves transaction details based on a specific transaction hash. It fetches information such as the block's height and timestamp where the transaction is included, the transaction fee, fee currency details including its name and address, gas used, index of the transaction, raw transaction data, signer's address, and the transaction type. 

## Fetch Transactions from a Specific Address on a Given Date

```
{
  cosmos {
    transactions(
      date: {is: "2023-08-09"}
      signer: {is: "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      fee
      feeCurrency {
        name
        address
      }
      gasUsed
      index
      rawTx
      signer {
        address
      }
      type
    }
  }
}
```

This query retrieves transactions from a specific date, filtered by a particular signer's address. It retrieves information including the block's height and timestamp of each transaction, transaction fee, details about the fee currency including its name and address, gas used, transaction index, raw transaction data, signer's address, and transaction type.


