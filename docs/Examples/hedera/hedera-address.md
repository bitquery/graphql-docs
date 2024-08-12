# Hedera Address API

In this section we will see how to get information on wallets on Hedera.

## Latest Balance of an Address

This query retrieves the latest balance of an address on Hedera.

You can run the query [here](https://ide.bitquery.io/hedera-balance)

```
{
  hedera {
    address(address: {is: "0.0.1881237"}) {
      balance
    }
  }
}

```
