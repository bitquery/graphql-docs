---
title: "Cardano Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cardano Coinpath. Trace ADA flows in and out of a wallet with multi-hop depth."
keywords: [Cardano API examples, Cardano GraphQL queries, Bitquery, Cardano coinpath, fund tracing, eUTXO]
---

# Cardano Coinpath API

Coinpath traces the flow of funds between Cardano addresses across multiple hops. Because Cardano uses an **eUTXO** model, the API walks chains of UTXOs forward (outbound) and backward (inbound) from an initial address, returning senders, receivers, hop depth, and aggregate amounts — useful for compliance checks, treasury tracing, and address-relationship analysis.

## Trace ADA Inbound and Outbound Flows for a Cardano Address

Query both incoming and outgoing ADA flows for a Cardano address in a single request, limited to 2 hops on each side. The `inbound` block walks backward to the fund sources; the `outbound` block walks forward to the destinations. Each hop returns sender, receiver, amount, depth, and a transaction count.

**Variations:** Increase `depth: {lteq: N}` (typically 3 – 5) for broader tracing, raise `limitBy.limit` for more paths per hop, widen the `date` window, or keep only the `inbound` / `outbound` block if you need a single direction. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for depth and direction semantics.

```
{
  cardano(network: cardano) {
    inbound: coinpath(
      currency: {is: "ADA"}
      initialAddress: {is: "addr1q8hq60cyqg68aqfzs9geq084yj0tvvpm7rnckn6gsf3ahyrwak0antyvs6lyd7ymqg2zp6q8999vsdadmpm70x93f8msd7uwux"}
      depth: {lteq: 2}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 2}}
      date: {since: "2023-11-30", till: "2023-12-18"}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      depth
      count
    }
    outbound: coinpath(
      currency: {is: "ADA"}
      initialAddress: {is: "addr1q8hq60cyqg68aqfzs9geq084yj0tvvpm7rnckn6gsf3ahyrwak0antyvs6lyd7ymqg2zp6q8999vsdadmpm70x93f8msd7uwux"}
      depth: {lteq: 2}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 2}}
      date: {since: "2023-11-30", till: "2023-12-18"}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      depth
      count
    }
  }
}
```

## Deeper Outbound ADA Trace from a Cardano Address

Walk forward from a single Cardano address up to 3 hops deep to see where its ADA is flowing. Returning `amount`, `depth`, and `count` per hop makes this a compact view for DAO treasury audits, fraud investigations, and source-of-funds verification when you need more breadth than the 2-hop example above.

**Variations:** Raise `depth: {lteq: N}` (5 – 7 is common for forensic work) and raise `limitBy.limit` for wider coverage per hop. Flip to inbound tracing by adding `direction: inbound` to `options`. Set `options: {seed: 110, ...}` (any random integer) if you run the same query repeatedly in parallel and want to bypass intermediate-stage caching — see [money-flow examples](/docs/Examples/coinpath/money-flow-api) for the caching note.

```
{
  cardano(network: cardano) {
    coinpath(
      currency: {is: "ADA"}
      initialAddress: {is: "addr1q8hq60cyqg68aqfzs9geq084yj0tvvpm7rnckn6gsf3ahyrwak0antyvs6lyd7ymqg2zp6q8999vsdadmpm70x93f8msd7uwux"}
      depth: {lteq: 3}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 5}}
      date: {since: "2023-01-01", till: "2023-12-31"}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      depth
      count
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Coinpath schema](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Coinpath money-flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
