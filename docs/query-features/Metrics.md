---
sidebar_position: 6
title: "Metrics in Bitquery GraphQL API"
description: "Use the IDE metrics API and utilities metrics to inspect query cost, points, SQL requests, and chain-specific usage."
keywords: [Bitquery, metrics, API usage, query cost, GraphQL]
---

<head>
<meta name="title" content="Metrics in Bitquery GraphQL API"/>
<meta name="description" content="Use the IDE metrics API and utilities metrics to inspect query cost, points, SQL requests, and chain-specific usage."/>
<meta name="keywords" content="Bitquery, metrics, API usage, query cost, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Metrics in Bitquery GraphQL API" />
<meta property="og:description" content="Use the IDE metrics API and utilities metrics to inspect query cost, points, SQL requests, and chain-specific usage." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Metrics in Bitquery GraphQL API" />
<meta property="twitter:description" content="Use the IDE metrics API and utilities metrics to inspect query cost, points, SQL requests, and chain-specific usage." />
</head>

# Metrics

The IDE Builder provides a metrics API that you can use to get details on your usage. 

![metrics](/img/ide/metrics.png)

The metrics API returns a JSON object with the following properties:

- points : The number of data points collected for the query.
- sqlRequestsCount : The number of SQL requests made for the query.
- list: A list of metrics for the query. Each metric object has the following fields:

    - name: The name of the metric.
    - cost: The cost of the metric in points.
    - value: The value of the metric.
    - price: The price of the metric in USD.




Here's an example query: 

```
query MyQuery {
  utilities {
    metrics(queryId: "the id of your query") {
      points
      sqlRequestsCount
    }
  }
}
```

And one of the response fields in the `list` was 

```
"list": [
          {
            "name": "Extra Memory Consumption, GB",
            "cost": 0.47182208279999993,
            "value": "413879020",
            "price": 1.14
          },
]
```
The Extra Memory Consumption, GB metric measures the amount of extra memory that was used by the query.


Some chains have specific metrics that you can get using the metrics API. For example, the Tron chain has a `netUsage` metric that you can use to get the network usage for a query.

## Related Resources

- [Utilities API](https://docs.bitquery.io/v1/docs/query-features/utilities/utilities)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [Bitquery API FAQ](https://docs.bitquery.io/v1/docs/building-queries/FAQ)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/aggregation)