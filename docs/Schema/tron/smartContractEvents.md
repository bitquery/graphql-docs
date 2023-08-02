# Smart Contract Events

The `smartContractEvents` field allows us to fetch information about the smart contract events from Tron blockchain.

Here is an example that demonstrates hwo to retrieve events data:

```
{
  tron {
    smartContractEvents(
      date: {after: "2023-07-25"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      arguments {
        argument
        argumentType
        index
        value
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
        contractType
      }
      smartContractEvent {
        name
        signature
        signatureHash
      }
      txHash
      txFrom {
        address
      }
    }
  }
}
```

<details>

<summary>Filtering Smart Contract Events</summary>

Smart contract events can be filtered using the following arguments:

-   `any`:
-   `date`: filter by date of smart contract events
-   `height`: filter by block height where transaction is included
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `smartContractAddress`: filter by smart contract address
-   `smartContractEvent`: filter by name of the smart contract event
-   `time`: filter by time of the smart contract event
-   `txFrom`: filter by transaction from address
-   `txHash`: filter by transaction hash
-   `txTo`: filter by transaction to address

</details>

The following fields are available for `smartContractEvents`:

-   `any`:
-   `arguments`: returns arguments of call
-   `block`: returns block where transaction is included
-   `count`: returns count and other metrics of smart contract events
-   `countBigInt`: returns count and other metrics as BigInt
-   `date`: returns date of smart contract events
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `maximum`: returns maximum for selected measurable field of Tron Events
-   `minimum`: returns minimum for selected measurable field of Tron Events
-   `smartContract`: returns smart contract being evented
-   `smartContractEvent`: returns smart contract method invoked
-   `txFrom`: returns transaction from address
-   `txHash`: returns transaction hash
-   `txTo`: returns transaction to address
