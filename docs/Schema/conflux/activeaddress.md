# Conflux Active Address API


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
<details><summary> Filtering Active Address</summary></details>

## Fields