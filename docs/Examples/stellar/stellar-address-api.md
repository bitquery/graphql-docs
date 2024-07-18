# Stellar Address API

This API allows you to retrieve detailed information about Stellar wallet addresses, including their balances and token holdings.


## Latest Balance of a Wallet

In the below query we will retrieve the latest balance of a specific Stellar wallet address. 

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