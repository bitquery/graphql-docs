# Address

The Address API allows you to query information about addresses on the Filecoin blockchain.



```
query MyQuery {
  filecoin(network: filecoin) {
    address(address: {is: "f02216385"}) {
      address
      annotation
      balance
    }
  }
}

```
<details><summary>Filtering Address</summary>

`is`: This option specifies that the address must match the specified value.

</details>

## Fields


`address`: The address of the actor.
`annotation`: The annotation for the address.
`balance`: The balance of the address.