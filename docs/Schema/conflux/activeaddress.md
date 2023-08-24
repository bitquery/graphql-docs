# Conflux Active Address API

Conflux Active Address API gives you information on the active addresses on the Conflux chain. The following are the fields on the schema:

```
query ($network: ConfluxNetwork!) {
  conflux(network: $network) {
    activeAddresses(date: {is: "2023-08-10"}, options: {limit: 10}) {
      address {
        address
        annotation
      }
    }
  }
}
{
  "network": "conflux_hydra"
}

```

<details><summary> Filtering Active Address</summary>

`address`
The address of the wallet

</details>

## Fields

`address`
The address of the wallet

`annotation`
Any information about the address
