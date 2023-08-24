# Conflux Arguments API

Bitquery's  Conflux Arguments API gives you information on the arguments passed during on chain updates to functions. Below are the fields in the schema:

```
query ($network: ConfluxNetwork!) {
  conflux(network: $network) {
    arguments(
      txHash: {is: "tx hash here"}
        options: {limit: 10}
    ) {
      smartContractSignature {
        ... on Method {
          name
          signature
          signatureHash
        }
        ... on Event {
          name
          signature
          signatureHash
        }
      }
      transaction {
        hash
        txFrom {
          address
          annotation
        }
      }
      smartContract {
        contractType
      }
      argument {
        type
        name
      }
      value {
        value
      }
    }
  }
}
{
  "network":"conflux_hydra"
}
```

<details><summary>Filtering Arguments</summary>

- `any`: A catch-all filter ( OR logic) that can be used to select arguments that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.
- `argument`: Filter by specific argument for smart contract method or event
- `argumentType`: Filter by argument type for smart contract method or event
- `callDepth`: Filter by call depth
- `caller`: Filter by address of the caller
- `date`: Filter by selecting time in range, list or just time
- `height`: Filter by height of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `smartContractAddress`: Filter by smart contract address
- `smartContractEvent`: Filter by smart contract event
- `smartContractMethod`: Filter by smart contract method
- `time`: Filter by selecting time in range, list or just time
- `txFrom`: Filter by address which created transaction
- `txHash`: Filter by transaction hash
- `value`: Filter by argument value

</details>

The following are available fields for the `arguments`:

- `any`:
- `argument`: returns method or event argument
- `block`: returns information of block
- `callDepth`: returns depth of call
- `caller`: returns information about caller
- `count`: returns aggregate count of argument
- `countBigInt`: returns aggregate count of argument in `BigInt` format
- `date`: returns date on which smart contract call or event happened
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `smartContract`: returns information about smart contract being called
- `smartContractSignature`: returns signature of contract method or event
- `success`:
- `transaction`: returns transaction information
- `value`: returns value of method or event argument
