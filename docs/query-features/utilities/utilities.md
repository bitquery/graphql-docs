---
sidebar_position: 1
title: "Utilities API in Bitquery GraphQL"
description: "Check account billing, points, and API usage metrics with the Bitquery utilities root query."
keywords: [Bitquery, GraphQL, utilities, API usage, billing, metrics]
---

<head>
<meta name="title" content="Utilities API in Bitquery GraphQL"/>
<meta name="description" content="Check account billing, points, and API usage metrics with the Bitquery utilities root query."/>
<meta name="keywords" content="Bitquery, GraphQL, utilities, API usage, billing, metrics"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Utilities API in Bitquery GraphQL" />
<meta property="og:description" content="Check account billing, points, and API usage metrics with the Bitquery utilities root query." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Utilities API in Bitquery GraphQL" />
<meta property="twitter:description" content="Check account billing, points, and API usage metrics with the Bitquery utilities root query." />
</head>

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

## Related Resources

- [Metrics in Bitquery GraphQL API](https://docs.bitquery.io/v1/docs/query-features/Metrics)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [Bitquery API FAQ](https://docs.bitquery.io/v1/docs/building-queries/FAQ)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/aggregation)
