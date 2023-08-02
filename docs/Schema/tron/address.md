# Address

The `address` feild allows us to retrieve details about address or smart contract from Tron blockchain.

Here is an example that demonstrates use `address` query:

```
{
  tron {
    address(address: {is: "TMY19SeunpGTRoxB1yCF1EBeZjcGNy3333"}) {
      address
      annotation
      balance
    }
  }
}
```

<details>
<summary>Filtering options</summary>

Address data can be filtered using the following arguments:

-   `address`: filter using specific address or list of addresses

</details>

-   `address`: returns address
-   `annotation`: returns annotation of address
-   `balance`: returns balance of the address
-   `balances`: returns token balance history of address
-   `claimableRewards`: returns rewards that a witness or a user has not yet withdrawn
-   `smartContract`: returns details is address is smart contract
