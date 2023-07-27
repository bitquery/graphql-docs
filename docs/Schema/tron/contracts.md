# Contracts

The `contracts` field allows us to fetch details about contract from Tron blockchain.

Here is an example that demonstrates how to use contracts query:

```
{
  tron {
    contracts(
      date: {after: "2023-07-26"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      amount
      contractType
      currency {
        address
        name
        symbol
      }
      energyUsageTotal
      fee
      netUsage
      txHash
      txOwner {
        address
        annotation
      }
    }
  }
}
```

<details>
<summary>Fileting Contracts</summary>

Contracts can be filtered using the following arguments:

-   `any`:
-   `contracType`: filter by contract type
-   `currency`: filter by currency of transfer
-   `date`: filter by date of transfer
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `success`: filter by success of a call
-   `time`: filter by time of transaction
-   `txHash`: filter by transaction hash
-   `txOwner`: filter by address of transaction owner

</details>

The following fields are available for the `contracts`:

-   `amount`: returns amount of currency transferred
-   `any`:
-   `block`: returns block in which transaction is included
-   `contractType`: returns contract type
-   `count`: returns count and other metrics of contracts
-   `countBigInt`: returns count and other metrics as BigInt
-   `currency`: returns currency details 
-   `date`: returns date of the transaction
-   `energyUsageTotal`: returns total energy usage
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns fee consumed 
-   `maximum`: returns maximum for selected [measurable field](/v1/docs/graphql-reference/enums/tron-contracts-measureable) of Tron contracts
-   `minimum`: returns maximum for selected [measurable field](/v1/docs/graphql-reference/enums/tron-contracts-measureable) of Tron contracts
-   `netUsage`: returns net usages
-   `success`: returns is call was successful or not
-   `txHash`: returns transaction hash
-   `txOwner`: returns address of transaction owner
