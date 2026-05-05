---
sidebar_position: 1
title: "Utilities API in Bitquery GraphQL"
description: "Check account billing, points, and API usage metrics with the Bitquery utilities root query."
keywords: [Bitquery, GraphQL, utilities, API usage, billing, metrics]
---

# Utilities

Utilities method helps understand your API consumption. It provides information on your account, such as your active period, billing day, and points remaining. It also provides metrics on your API usage, such as the number of SQL requests you have made and the cost of those requests.

## Active Period

The activePeriod subfield provides information on your account's active period.To get information on your account's active period, use the following query:

```
query MyQuery {
  utilities {
    activePeriod(apiKey: "your key") {
      pointsRemaining
      billingDay
      isPaid
      isPointsConsumed
      isSpent
      points
      isBlocked
    }
  }
}

```

## Metrics

The metrics subfield provides metrics on your API usage. To get metrics on your API usage, use the following query:

```
{
  utilities {
    metrics(queryId: "QPiCo1pgxRuBnvVs") {
      points
      id
      sqlRequestsCount
      list {
        cost
        max
        value
        valueUnit
        price
        name
      }
    }
  }
}

```

The utilities root query is most valuable **alongside** your regular blockchain data queries: it answers “what is this costing my account?” and “how much capacity do I have left?” while your other operations answer “what happened on-chain?”. Operational teams often check active period and metrics after exploratory query sessions or before scheduled jobs, so spikes in `sqlRequestsCount` or points usage line up with specific dashboards or pipelines. Treat utilities as the control plane for consumption; treat schema queries as the data plane for analytics.

## Practical Tips

- **Before large or repeated jobs**: Inspect points and billing-related fields so batch exports, backfills, or tight polling loops do not exhaust limits unexpectedly.
- **After debugging heavy queries**: Use metrics (including per-query identifiers when you track them) to see which saved queries or integrations drive the most cost, then optimize filters, limits, or frequency.
- **Account health checks**: Use `activePeriod` to confirm whether the account is paid, blocked, or in a points-consumed state before you rely on production automation.
- **Correlate usage with product behavior**: When user-facing features slow down or fail, verifying utilities first rules out quota or billing issues before you dig into GraphQL errors from data queries.
- **Operational dashboards**: Expose utilities to internal tooling so engineers can monitor usage trends the same way they monitor application metrics.

## Related Resources

- [Metrics in Bitquery GraphQL API](https://docs.bitquery.io/v1/docs/query-features/Metrics)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [Bitquery API FAQ](https://docs.bitquery.io/v1/docs/building-queries/FAQ)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/)
