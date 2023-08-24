# Conflux Smart Contract Events API

```
query ($network: ConfluxNetwork!, $hash: String!) {
  conflux(network: $network) {
    smartContractEvents(
      options: {limit: 10, offset: 0}
      txHash: {is: $hash}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
        protocolType
      }
      smartContractEvent {
        name
        signatureHash
        signature
      }
      count
      transaction {
        hash
      }
    }
  }
}
{

  "network": "conflux_hydra",
  "hash": "tx hash"
}
```

<details><summary>Filtering Events</summary>

Smart contract events can be filtered using the following arguments:

- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
- `date`: filter by date of smart contract events
- `height`: filter by block height where transaction is included
- `options`: filter returned data by ordering, limiting, and constraining it
- `smartContractAddress`: filter by smart contract address
- `smartContractEvent`: filter by name of the smart contract event
- `time`: filter by time of the smart contract event
- `txFrom`: filter by transaction from address
- `txHash`: filter by transaction hash
- `txTo`: filter by transaction to address

</details>

## Fields

- **smartContract**
  - The smart contract that emitted the event.
    - **address**
      - The address of the smart contract.
    - **annotation**
      - A annotation field that contains any information about the address
    - **contractType**
      - The type of the smart contract.
    - **protocolType**
      - The protocol that the smart contract is deployed on.
- **smartContractEvent**
  - The name of the event that was emitted.
  - **signatureHash**
    - The hash of the event signature.
  - **signature**
    - The signature of the event.
- **count**
  - The number of times the event was emitted.
- **transaction**
  - The hash of the transaction that emitted the event.
