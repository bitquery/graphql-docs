---
title: "Cosmos Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos transactions. Get fees, gas, signers, and raw transaction data."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Transactions API

Our Cosmos Transactions API provides information related to transactions created on Cosmos Blockchain.

## Get Cosmos Transaction by Transaction Hash

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

## Get Cosmos Transactions by Signer and Date

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

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transfers examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)


