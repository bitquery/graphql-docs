# EOS Coinpath

The EOS Coinpath API allows you to get the money flow for an address on the EOS blockchain. You can track any levels of fund movement with this API. This is a very useful API for crypto investigations.

```
query ($address: String!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  eos {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 1}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
            decimals
            tokenType
          }
          protocolType
        }
        amountOut
        amountIn
        balance
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        type
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
            tokenType
            decimals
          }
          protocolType
        }
        amountOut
        amountIn
        balance
        lastTxAt {
          time
        }
        firstTxAt {
          time
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
      block {
        height
      }
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 1}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
            decimals
            tokenType
          }
          protocolType
        }
        amountOut
        amountIn
        balance
        firstTxAt {
          time
        }
        lastTxAt {
          time
        }
        type
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
            tokenType
            decimals
          }
          protocolType
        }
        amountOut
        amountIn
        balance
        lastTxAt {
          time
        }
        firstTxAt {
          time
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
      block {
        height
      }
    }
  }
}


```

<details><summary>Filtering Coinpath</summary>

- **initialAddress** The address of the account whose coinpath you want to retrieve.
- **currency** The currency you want to filter the results by.
- **depth** The maximum depth of the coinpath to retrieve.
- **options**
  - **direction** The direction of the coinpath. Can be `inbound` or `outbound`.
  - **asc** or **desc**: The field to sort the results by in ascending
    or descending order.
  - **limitBy** The field to limit the results by.
  - **date** The date range of the transactions to return.

</details>

## Fields

- **initialAddress** The address of the account whose coinpath you want to retrieve.
- **sender**
  - **address** The address of the sender of the transaction.
  - **annotation** Any additional information about the address.
  - **smartContract** Address of the smart contract involved in the
  - **amountOut** The amount of tokens sent by the sender.
  - **amountIn** The amount of tokens received by the sender.
  - **balance** The sender's balance after the transaction.
  - **firstTxAt** The timestamp of the first transaction in the coinpath.
  - **lastTxAt** The timestamp of the last transaction in the coinpath.
  - **type** The type of transaction.
- **receiver**
  - **address** The address of the receiver of the transaction.
  - **annotation** The annotation for the address that contains additional information.
  - **smartContract** Information about the smart contract that was involved in the transaction, if any.
  - **amountOut** The amount of tokens sent by the receiver.
  - **amountIn** The amount of tokens received by the receiver.
  - **balance** The receiver's balance after the transaction.
  - **firstTxAt** The timestamp of the first transaction in the coinpath.
  - **lastTxAt** The timestamp of the last transaction in the coinpath.
- **amount** The total amount of tokens transferred in the coinpath.
- **currency** The currency of the tokens transferred in the coinpath.
- **depth** The depth of the coinpath.
- **count** The number of transactions in the coinpath.
- **block** The block in which the first transaction in the coinpath was included.
