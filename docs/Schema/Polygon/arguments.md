
# Arguments

The `arguments` field allows us to fetch information about arguments of smart contract calls and evetns.

Here is an exmaple that demonstrates how to use `arguments` query:

```
```

<details>
<summary>Filtering Arguments</summary>

- `any`:
- `argument`: Filter by specific argument for smart contract method or event
- `argumentType`: Filter by argument type for smart contract method or event
- `callDepth`: Filter by call depth
- `caller`: Filter by address of the caller 
- `date`: Filter by selecting time in range, list or just time
- `external`:
- `height`: Filter by height of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `reference`:
- `signatureType`:
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
- `external`:
- `index`: 
- `maximum`:
- `minimum`:
- `number`:
- `reference`:
- `smartContract`: returns information about smart contract being called
- `smartContractSignature`: returns signature of contract method or event
- `success`:
- `transaction`: returns transaction information
- `value`: returns value of method or event argument