# Overview

Bitquery's Stellar APIs give you information on the network's blocks, transactions, addresses, operations, payments and so on.
To get started, visit the [Stellar Explorer](https://explorer.bitquery.io/stellar)

![explorer](/img/ide/stellar.png)

To retrieve data from the Stellar blockchain, you need to use the API as shown below:

```
query{
  stellar{
    __typename
  }
}
```