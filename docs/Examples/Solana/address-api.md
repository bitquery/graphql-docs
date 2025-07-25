# Solana Address API

## Latest Balance of an address

This below query will get you the latest balance of an address.
You can run the query [here](https://ide.bitquery.io/address-balance-api).

```
query MyQuery {
  solana {
    address(address: {is: "AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv"}) {
      address
      annotation
      balance
    }
  }
}
```

## Latest Balance of multiple addresses

This below query will get you the latest balance of multiple addresses. You can specify any other addresses as well. And you can test the API with as many addresses as you like.
You can run the query [here](https://ide.bitquery.io/latest-balances-of-multiple-addresses).

```
query MyQuery {
  solana {
    address(address: {in: ["AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv","u4JVgijAL87QWhuig6YNnJCoxgEKbYZt1q3nPbfbUBC","9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}) {
      address
      annotation
      balance
    }
  }
}
```
