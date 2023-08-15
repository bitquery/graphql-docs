# Overview

Bitquery's Ripple APIs give you information on the network's blocks, transactions, addresses, offers, payments and so on.
To get started, visit the [Ripple Explorer](https://explorer.bitquery.io/ripple)

![explorer](/img/ide/ripple.png)

To retrieve data from the Ripple blockchain, you need to use the API as shown below:

```
query{
  ripple{
    __typename
  }
}
```