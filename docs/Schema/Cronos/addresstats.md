# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum (network: cronos){
    addressStats(address: {is: "0x01445c31581c354b7338ac35693ab2001b50b9ae"}) {
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
