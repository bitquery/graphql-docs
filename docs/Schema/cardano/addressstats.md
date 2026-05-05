---
title: "Cardano Address Stats API"
description: "Query Cardano address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Cardano API", "Cardano Address Stats", "Bitquery", "GraphQL"]
---

# AddressStats

The AddressStats API schema returns information about a wallet on its inflows, outflows and activity. The schema includes the following fields:

Address statistics provide aggregate metrics for a Cardano address: transaction counts, sent and received amounts, fee totals, and active-day counts. These summaries help staking platforms, compliance tools, and portfolio trackers assess an address's activity profile without replaying individual eUTXO transactions.

```
query MyQuery {
  cardano(network: cardano) {
    addressStats(
      address: {is: "addr1q8wp4tc65hgvvff0lg2dgp8dnd2hy5u4vyz9mgk8qancwmtdf8tun55syv9gvfd0dgdhx02vlyg6dp56up92a5l9qxhs9nhrfy"}
    ) {
      address {
        address
        annotation
        balance
        firstActive {
          time
        }
        inboundTransactions
        inflows
        lastActive {
          time
        }
        outboundTransactions
        outflows
        uniqueDaysWithTransfers
        uniqueReceivers
        uniqueSenders
      }
    }
  }
}
```
<details>
<summary>Filtering AddressStats</summary>

`address`
The address of the wallet

`options`
Additional options for the query, such as sorting and pagination.

</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
