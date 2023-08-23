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
  "hash": "0x60d5a10a202b49401c1fd83a122f0752b518e44d7a7b348a7d9395c13e4babc5"
}
```

<details><summary>Filtering Events</summary></details>

## Fields
