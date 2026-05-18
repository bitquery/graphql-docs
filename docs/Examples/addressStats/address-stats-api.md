---
title: "Address Stats API Examples"
description: "Example GraphQL queries for EVM address statistics. Get balance, send/receive amounts, and transaction counts."
keywords: [address stats API examples, GraphQL queries, Bitquery]
---

# Address Stats API


## Get Balance, Transfers, and Transaction Stats for an Ethereum Address

Get a comprehensive statistical snapshot for any Ethereum address in a single query — balance, total sent/received amounts, fee totals, transaction counts, unique counterparties, first and last transfer timestamps, and active days. Useful for wallet profiling, risk scoring, and compliance checks.

:::caution
The `addressStats` query returns pre-aggregated data which may occasionally be slightly out of date. For precise balance calculations, use the inputs/outputs or transfers approach instead.
:::

**Variations:** Switch `network` to `bsc`, `matic`, or any EVM chain. Combine with the [active addresses API](/docs/Examples/activeAddresses/blockchain-active-addresses-api) for broader network metrics. Use [aliases](/docs/query-features/aliases) to query stats for multiple addresses in one request.
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
All amount fields (`balance`, `receiveAmount`, `sendAmount`, `feeAmount`) are returned as strings for precision.

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain address API examples](https://docs.bitquery.io/v1/docs/Examples/address/Blockchain-Address-API-Examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)