---
title: "Address Stats API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for EVM address statistics. Get balance, send/receive amounts, and transaction counts."
keywords: [address stats API examples, GraphQL queries, Bitquery]
---

# Address Stats API


## Get Balance, Transfers, and Transaction Stats for an Ethereum Address

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

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain address API examples](https://docs.bitquery.io/v1/docs/Examples/address/Blockchain-Address-API-Examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)