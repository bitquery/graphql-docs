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

<details><summary>Filtering Events</summary></details>

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
