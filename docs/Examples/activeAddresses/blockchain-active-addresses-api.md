
# Active address API

Use our activeAddresses API to get active address for any blockchain, currency, block etc.



## Active addresses for blockchain

To get active addresses for the complete blockchain, you can use the following query. In the following query, we re getting active addresses since 1st Jan 2023. Also, using date will optimize the api and produce results quickly.

[Open this query on IDE](https://ide.bitquery.io/active-addresses-on-blockchain)

```graphql
{
  ethereum {
    activeAddresses (date: {since: "2023-01-01"}) {
      uniqueAddresses: count(uniq: address)
    }
  }
}

```

## Active addresses for currencies

You can also get active addresses for specific currencies. In the following example we are getting active addresses for [USDT](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7)


[Open this query on IDE](https://ide.bitquery.io/active-addresses-for-USDT-on-Ethereum)

```graphql
{
  ethereum {
    activeAddresses(currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
      uniqueAddresses: count(uniq: address)
    }
  }
}
```