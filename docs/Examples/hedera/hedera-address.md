# Hedera Address API


## Latest Balance of an Address

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