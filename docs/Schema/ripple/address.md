# Address

Ripple Address API gives you information on wallets on XRP. The following are the fields in the schema:

```
query ($address: String!, $network: RippleNetwork!) {
  ripple(network: $network) {
    addressStats(address: {is: $address}) {
      address {
        address {
          address
          annotation
        }
        balance
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
        firstTransferAt {
          time
        }
        firstTxAt {
          time
        }
        receiveAmount
        receiveFromCount
        receiveFromCurrencies
        receiveTxCount
        sendToCount
        sendToCurrencies
        sendTxCount
        sendAmount
        lastTransferAt {
          time
        }
        lastTxAt {
          time
        }
      }
    }
  }
}
{
  "network": "ripple",
  "address": "rocwwPiFPgytt5Yhe3ctdZTnWw92Resy5"
}
```

<details>
<summary>Filtering Address</summary>

- `address`: The address of the wallet. You can use the `is` operator to filter for wallets that match the specified address.
- `options`: A set of options that control the pagination and sorting of the results.
  - `asc`: The field to sort the results by in ascending order.
  - `ascByInteger`: The field to sort the results by in ascending order, treating the values as integers.
  - `desc`: The field to sort the results by in descending order.
  - `descByInteger`: The field to sort the results by in descending order, treating the values as integers.
  - `limit`: The maximum number of results to return.
  - `limitBy`: A field that can be used to limit the results by a specific value.
  - `offset`: The number of results to skip before returning the results.

</details>

## Fields

- `address`: The address of the wallet.
- `balance`: The current balance of the wallet in XRP.
- `daysWithReceived`: The number of days since the wallet was created that it has received XRP.
- `daysWithSent`: The number of days since the wallet was created that it has sent XRP.
- `daysWithTransactions`: The number of days since the wallet was created that it has had any transactions.
- `daysWithTransfers`: The number of days since the wallet was created that it has had any transfers.
- `firstTransferAt`: The timestamp of the first transfer to the wallet.
- `firstTxAt`: The timestamp of the first transaction involving the wallet.
- `receiveAmount`: The total amount of XRP that has been received by the wallet.
- `receiveFromCount`: The number of unique addresses that have sent XRP to the wallet.
- `receiveFromCurrencies`: The list of currencies that have been sent to the wallet.
- `receiveTxCount`: The number of transactions that have resulted in XRP being received by the wallet.
- `sendToCount`: The number of unique addresses that the wallet has sent XRP to.
- `sendToCurrencies`: The list of currencies that the wallet has sent XRP to.
- `sendTxCount`: The number of transactions that have resulted in XRP being sent by the wallet.
- `sendAmount`: The total amount of XRP that has been sent by the wallet.
- `lastTransferAt`: The timestamp of the most recent transfer to or from the wallet.
- `lastTxAt`: The timestamp of the most recent transaction involving the wallet.
