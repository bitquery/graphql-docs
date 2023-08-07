# Address

The Solana address API gives you information of the balance of a wallet in SOL.

```
query MyQuery {
  solana(network: solana) {
    address(address: {is: "address of the wallet"}) {
      address
      balance
      annotation
    }
  }
}


```



<details><summary>Filtering Address</summary></details>

## Fields


`address`

The address field specifies the address of the account that you want to get the balance for. The `is` keyword is used to specify that the address must match the value that is provided.

`annotation`

Any label on the account.

`balance`

The balance of the account in SOL.

The balance of the account.

