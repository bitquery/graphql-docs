---
title: "Filecoin Arguments API"
description: "Query Filecoin GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."
keywords: ["Filecoin API", "Filecoin Arguments", "Bitquery", "GraphQL"]
---

# Arguments

The Filecoin arguments API exposes decoded parameters from actor method calls on the Filecoin network. Actor methods—such as storage-deal proposals, miner sector commitments, and payment-channel updates—carry structured inputs that this API surfaces as queryable fields. Use it when you need to inspect what was passed into a specific actor call rather than just whether a message succeeded, for example to audit deal terms, verify miner commitments, or analyze market-actor interactions programmatically.

## Related Resources

- [Filecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/filecoin/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Filecoin Coinpath API](https://docs.bitquery.io/v1/docs/Schema/filecoin/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
