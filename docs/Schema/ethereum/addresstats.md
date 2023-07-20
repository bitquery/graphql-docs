# Address Stats

The `addressstats` allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum {
    addressStats(address: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
      address {
        balance
        callTxCount
        calledTxCount
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
        feeAmount
        otherTxCount
        receiveAmount
        receiveFromCurrencies
        receiveTxCount
        receiveFromCount
        sendAmount
        sendToCount
        sendToCurrencies
        sendTxCount
      }
    }
  }
}
```

<details>
<summary>Filtering Address Stats</summary>

-   `address`: Filter by a specific address or a list of addresses
-   `options`:  Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.

</details>

-   `address`: Returns statistics for the blockchain address
