# Conflux Address API

The Address API schema returns information about a wallet. The schema includes the following fields:

```

query ($network: ConfluxNetwork!, $address: String!) {
  conflux(network: $network) {
    address(address: {is: $address}) {
      balance
      annotation
      address
    }
  }
}

{
  "network": "conflux_hydra",
  "address": "address here"
}
```

<details><summary>Filtering Address</summary>

`address`
The address of the wallet

</details>

## Fields

- `address`: returns the address and its annotation (if an annotation is given to that address).
- `balance`: returns the current balance of the address.
