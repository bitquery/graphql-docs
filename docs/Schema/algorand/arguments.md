
# Arguments

The `arguments` field allows us to fetch information about arguments of smart contract calls and events.

Here is an exmaple that demonstrates how to use `arguments` query:

```
{
  algorand(network: algorand) {
    arguments(options: {limit: 10, desc: "block.timestamp.iso8601"}) {
      argindex
      block {
        timestamp {
          iso8601
        }
      }
      firstRound
      genesisId
      lastRound
      note
      transaction {
        hash
      }
      txSender {
        address
        annotation
      }
      txType
      value
    }
  }
}
```

<details>
<summary>Filtering Arguments</summary>

Arguments can be filtered using following arguments:

- `any`:
- `argindex`: Filter by index of the arugment in the call
- `argument`: Filter by specific argument of smart contract method or event
- `caller`: Filter address of the caller
- `date`: Filter by date in range, list or just date when smart contract call or event happened
- `height`: Filter by when smart contract call or event happened
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `reference`: 
- `smartContractAddress`: Filter by smart contract address where smart contract call or event happened
- `time`: Filter by time in range, list or just time when smart contract call or event happened
- `txFrom`: Filter by address which executed transaction in which smart contract call or event happened
- `txHash`: Filter by hash of transaction in which smart contract call or event happened
- `txIndex`: Filter by index of transaction in the block, in which smart contract call or event happened
- `txType`: Filter by type of transaction in which smart contract call or event happened
- `value`: Filter by value of argument

</details>

The following are available fields for the `arguments`:

- `any`:
- `argindex`: returns argument index in smart contract call or event
- `block`: returns information of block in which smart contract call or event happened
- `count`: returns aggregate count of argument
- `countBigInt`: returns aggregate count of argument in BigInt format
- `date`: returns date on which smart contract call or event happened
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `firstRound`: returns value of first round
- `genesisHash64`: returns value of genesis hash
- `gensisId`: returns valeu of gensis Id
- `lastRound`: returns value of last round
- `maximum`: returns maximum of [measurable arguments](/v1/docs/graphql-reference/enums/algorand-arguments-measureable/)
- `minimum`: returns minimum of [measurable arguments](/v1/docs/graphql-reference/enums/algorand-arguments-measureable/)
- `note`: returns value of note field
- `poolerror`: returns value of pool error field
- `smartContract`: returns information of smart contract being called
- `transaction`: returns information of transaction where call happened
- `txSender`: returns information of transaction sender
- `txType`: returns [transaction type](/v1/docs/graphql-reference/enums/algorand-tx-type) in which transfer happened
- `value`: returns value of argument