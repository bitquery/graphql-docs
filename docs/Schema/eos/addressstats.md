# Address Stats

```
query MyQuery {
  eos(network: eos) {
    addressStats(address: {is: "your address"}) {
      address {
        balance
        callTxCount
        calledTxCount
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
        firstTransferAt {
          time
        }
        lastTransferAt {
          time
        }
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        otherTxCount
        receiveAmount
        receiveFromCount
        receiveFromCurrencies
        receiveTxCount
        sendAmount
        sendToCount
        sendToCurrencies
        sendTxCount
      }
    }
  }
}

```

<details><summary> Filtering Address Stats</summary>

Address data can be filtered using following arguments:

-   `address`: filter by specific address or a list of addresses.

</details>

## Fields

- **balance** : The balance of the account in EOS tokens.
- **callTxCount** : The number of transactions that the account has called.
- **calledTxCount** : The number of transactions that have called the account.
- **daysWithReceived** : The number of days that the account has received tokens.
- **daysWithSent** : The number of days that the account has sent tokens.
- **daysWithTransactions** : The number of days that the account has been involved in a transaction.
- **daysWithTransfers** : The number of days that the account has transferred tokens.
- **firstTransferAt** : The timestamp of the first transfer made by the account.
- **lastTransferAt** : The timestamp of the last transfer made by the account.
- **firstTxAt** : The timestamp of the first transaction made by the account.
- **lastTxAt** : The timestamp of the last transaction made by the account.
- **otherTxCount** : The number of transactions that the account has been involved in that are not calls or transfers.
- **receiveAmount** : The total amount of tokens that the account has received.
- **receiveFromCount** : The number of accounts that have sent tokens to the account.
- **receiveFromCurrencies** : The currencies that the account has received tokens in.
- **receiveTxCount** : The number of transactions that the account has received tokens in.
- **sendAmount** : The total amount of tokens that the account has sent.
- **sendToCount** : The number of accounts that the account has sent tokens to.
- **sendToCurrencies** : The currencies that the account has sent tokens in.
- **sendTxCount** : The number of transactions that the account has sent tokens in.
