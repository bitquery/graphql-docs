# Address

Stellar Address API helps you get information on Addresses in the network. Below are the fields in the API:

```
query ($address: String!, $network: StellarNetwork!) {
  stellar(network: $network) {
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

  "network": "stellar",
  "address": "GDG4MD4RNOOKIQEV4YIYKKUODPDYIP3MBMXNBKNJ773L44RDLQYXK3YG"
}
```

<details><summary>Filtering Address</summary>

- `address`: The address of the wallet. You can use the `is` operator to filter for wallets that match the specified address.
- `options`: A set of options that control the pagination and sorting of the results.

  - `asc`: The field to sort the results by in ascending order.
  - `ascByInteger`: The field to sort the results by in ascending order, treating the values as integers.
  - `desc`: The field to sort the results by in descending order.
  - `descByInteger`: The field to sort the results by in descending order, treating the values as integers.
  - `limit`: The maximum number of results to return.
  - `limitBy`: A field that can be used to limit the results by a specific value.
  - `offset`: The number of results to skip before returning the result
  </details>

- **address** : This field contains the following subfields:
  - **address** : The Stellar address.
  - **annotation** : An optional annotation that can be set by the user.
- **balance** : The current balance of the address in XLM.
- **daysWithReceived** : The number of days since the address was created that it has received funds.
- **daysWithSent** : The number of days since the address was created that it has sent funds.
- **daysWithTransactions** : The number of days since the address was created that it has had any transactions.
- **daysWithTransfers** : The number of days since the address was created that it has had any transfers.
- **firstTransferAt** : The timestamp of the first transfer to or from the address.
- **firstTxAt** : The timestamp of the first transaction to or from the address.
- **receiveAmount** : The total amount of funds received by the address.
- **receiveFromCount** : The number of unique addresses that have sent funds to the address.
- **receiveFromCurrencies** : The currencies that have been received by the address.
- **receiveTxCount** : The number of transactions in which the address received funds.
- **sendToCount** : The number of unique addresses that the address has sent funds to.
- **sendToCurrencies** : The currencies that the address has sent funds to.
- **sendTxCount** : The number of transactions in which the address sent funds.
- **sendAmount** : The total amount of funds sent by the address.
- **lastTransferAt** : The timestamp of the most recent transfer to or from the address.
- **lastTxAt** : The timestamp of the most recent transaction to or from the address.
