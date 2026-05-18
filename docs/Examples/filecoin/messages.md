---
title: "Filecoin Messages API Examples"
description: "Example GraphQL queries for Filecoin messages and storage deals. Track publish, faults, and on-chain actors."
keywords: [Filecoin API examples, Filecoin GraphQL queries, Bitquery]
---

# Filecoin Storage & Deal Data Examples

:::caution Deprecated

The Filecoin dataset on the V1 API is **deprecated** and may be removed in a future release. Existing queries will continue to work but no new data is being ingested.

:::

Monitor Filecoin storage-deal lifecycle events — deal publishing, slashing penalties, sector pre-commits, and fault declarations. For background on the deal flow, see the [Filecoin official documentation](https://docs.filecoin.io/storage-providers/filecoin-deals/storage-deals).

## Count Filecoin PublishStorageDeals Messages to f05 in a Date Range

Count `PublishStorageDeals` messages sent to Filecoin's built-in storage market actor (`f05`) during a given date range. Each message corresponds to a batch of newly published deals, making this a quick way to gauge deal-making activity.

**Variations:** Widen or narrow the `date` window, or replace `f05` with a specific provider address to count deals for a single miner. See [query features](/docs/category/query-features) for aggregation options.

[Open this query on IDE](https://ide.bitquery.io/Weekly-PublishStorageDeals-Messages-Count)

```
query ($network: FilecoinNetwork!) {
  filecoin(network: $network) {
    messages(
      any: {receiver: {is: "f05"}}
      method: {is: 4}
      date: {since: "2023-10-10", till: "2023-10-17"}
    ) {
      count
    }
  }
}
{
  "network": "filecoin"
}

```

## List Filecoin Slashing Burn Transfers From a Storage Provider

Retrieve burn transfers caused by slashing penalties for a specific Filecoin storage provider. Slashing fires when a provider fails to prove sector storage or is terminated — each burn record includes the amount, timestamp, and transaction hash.

**Variations:** Swap `sender` to inspect a different provider, remove `limit` to fetch all burn events, or add a `date` filter for a specific window. See [query features](/docs/category/query-features) for pagination.

[Open this query on IDE](https://ide.bitquery.io/Slashing-for-a-Provider-on-Filecoin)

```
{
  filecoin(network: filecoin) {
    transfers(
      transferType: {is: burn}
      options: {limit: 10}
      sender: {is: "f0100057"}
    ) {
      transferType
      receiver {
        address
      }
      sender {
        address
      }
      amount
      block {
        timestamp {
          time
        }
      }
      hash
    }
  }
}

```

## List Filecoin RemoveExpiredAllocations Burn Transfers From a Provider

List burn transfers triggered by the removal of expired DataCap allocations for a Filecoin provider. These events reclaim unused DataCap tokens back to the client, making them useful for auditing allocation lifecycle.

**Variations:** Change `sender` to a different provider address, or add `date` constraints to scope the results. See [query features](/docs/category/query-features) for sorting and filtering.

[Open this query on IDE](https://ide.bitquery.io/RemoveExpiredAllocations-Filecoin)

```
{
  filecoin(network: filecoin) {
    transfers(
      transferType: {is: burn}
      options: {limit: 10}
      sender: {is: "f0100057"}
    ) {
      transferType
      receiver {
        address
      }
      sender {
        address
      }
      amount
      block {
        timestamp {
          time
        }
      }
      hash
    }
  }
}

```

## List Filecoin PreCommit Sector Messages on a Calendar Date

Fetch PreCommitSector messages (method 6) submitted on a given calendar date. Each message represents a provider pledging a new sector before the sealing process begins — useful for monitoring network growth.

**Variations:** Set `date` to any calendar day, add a `sender` filter to isolate a single provider, or increase `limit` for more results. See [query features](/docs/category/query-features) for pagination.

[Open this query on IDE](https://ide.bitquery.io/PreCommit-Storage-Messages--day)

```
query MyQuery {
  filecoin(network: filecoin) {
    messages(method: {is: 6}, date: {is: "2023-12-01"}, options: {limit: 10}) {
      amount
      sender {
        account
        address
        type
      }
      receiver {
        account
        address
        annotation
        type
      }
      success
      method {
        id
        name
      }
      hash
    }
  }
}

```

## List Filecoin DeclareFaults Messages for a Receiver Actor

Retrieve DeclareFaults messages (method 10) sent to a specific Filecoin actor. These indicate a provider has reported faulty sectors — the response includes burn amounts, over-estimation burns, refunds, and gas details for each fault declaration.

**Variations:** Change `receiver` to target a different actor, add `date` filters, or drop the `method` filter to view all message types for the actor. See [query features](/docs/category/query-features) for sorting.

[Open this query on IDE](https://ide.bitquery.io/Filecoin-DeclareFaults-Message)

```
query MyQuery {
  filecoin(network: filecoin) {
    messages(receiver: {is: "f0680529"}, options: {limit: 10}, method: {is: 10}) {
      amount
      burned
      hash
      method {
        id
        name
      }
      overEstimationBurn
      refundDecimal
      refund
      receiver {
        account
        address
        type
      }
      returnValue
      sender {
        type
        annotation
        address
        account
      }
      signature
      signedHash
    }
  }
}

```

## Related Resources

- [Filecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/filecoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain API examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)