---
title: "Cosmos Coinpath API"
description: "Query Cosmos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Cosmos API", "Cosmos Coinpath", "Bitquery", "GraphQL"]
---

# Coinpath

The coinpath API provides detailed information about the money flow using coinpath technology.

On Cosmos SDK chains, value moves through **messages** (bank sends, IBC transfers, staking rewards) rather than UTXO outputs or EVM internal transactions. Coinpath traces these message-based flows across multiple hops, letting you follow ATOM, CRO, or other native assets through intermediary accounts. This is useful for staking-reward audits, IBC corridor analysis, and compliance investigations across Cosmos Hub, Crypto.org, or Heimdall networks.

<details>
<summary></summary>

-   `currency`: filter by the currency involved in the transactions.
-   `date`: filter by date of the transaction
-   `initialAddress`: filter initial address of the transfer
-   `initialDate`: filter by initial date of the transfer
-   `initialTime`: filter by initial time of the transfer
-   `options`: filter returned data by ordering, limiting and constraining it
-   `receiver`: filter by the receiver of ther transfer
-   `sender`: filter by the sender of the transfer
-   `time`: filter by time of the transfer

</details>

-   `amount`: returns summary of transferred value
-   `any`: catch-all field that can be used to fetch the results by any of the other fields
-   `block`: returns details of block where transaction is included 
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics
-   `currency`: returns currency of transfer
-   `depth`: returns 1- based hop depth of the graph
-   `maximum`: returns maximum for selected measurable field of Cosmos coinpath
-   `minimum`: returns minimum for selected measurable field of Cosmos coinpath
-   `receiver`: returns receiver address
-   `sender`: returns sender address
-   `transaction`: returns message of transfer happened

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
