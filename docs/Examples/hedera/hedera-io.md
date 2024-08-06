# Hedera Inputs & Outputs API

In this section we will see some examples on tracing funds from/to an hedera address.

## Most Transfered Token

You can run the query [here](https://ide.bitquery.io/Hedera-inputs)

This will give you the top tokens based on the count of inputs by fetching the inputs (incoming transactions) and sorting them in descending order based on countBigInt

```
{
  hedera(network: hedera) {
    inputs(options: {desc: "countBigInt", limit: 100}) {
      countBigInt
      currency {
        symbol
        address
        tokenId
        name
        decimals
      }
    }
  }
}


```
