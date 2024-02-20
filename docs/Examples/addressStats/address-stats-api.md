
# Address Stats API


The Address Stats API provides comprehensive statistical data for a specific Ethereum address. In the below qeurey we are getting information for `0x21a31ee1afc51d94c2efccaa2092ad1028285549` by specifiying it in `address` filter.
```
{
  ethereum(network: ethereum) {
    addressStats(address: {is: "0x21a31ee1afc51d94c2efccaa2092ad1028285549"}) {
      address {
        balance
        receiveAmount
        sendAmount
        calledTxCount
        callTxCount
        daysWithReceived
        daysWithSent
        daysWithTransfers
        daysWithTransactions
        feeAmount
        firstTransferAt {
          time
        }
        lastTransferAt {
          time
        }
        receiveTxCount
        receiveFromCurrencies
        receiveFromCount
        sendToCount
        sendToCurrencies
        sendTxCount
      }
    }
  }
}

```
Please note that all amounts (`balance`, `receiveAmount`, `sendAmount`, and `feeAmount`) are returned as strings.