
# Address

Everscale Address API provides details on the wallet including the following fields


```
query ($network: EverscaleNetwork!) {
  everscale(network: $network) {
    address(
      address: {is: "-1:3333333333333333333333333333333333333333333333333333333333333333"}
    ) {
      address {
        address
        annotation
      }
      balance {
        currency {
          address
          decimals
          name
          symbol
          tokenId
          tokenType
        }
        value
      }
    }
  }
}
{
  "network": "everscale"
}
```

<details>
<summary>Filtering Address</summary>

Address data can be filtered using following arguments:

-   `address`: address of the wallet

</details>