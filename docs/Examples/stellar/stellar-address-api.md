# Stellar Address API


## Latest Balance of a Wallet

```
query MyQuery {
  stellar(network: stellar) {
    address(address: {is: "GA5Q3UHRKBBZFUQBFF3CEEPY322UIEALGUA7KS7LKGMAK7WJ4NF3W742"}) {
      balance
      tokenBalances {
        balance
        assetType
        assetIssuer
        assetCode
      }
    }
  }
}

```
You can run the query [here](https://ide.bitquery.io/latest-balance-of-stellar-wallet)