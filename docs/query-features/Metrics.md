---
sidebar_position: 6
title: "Metrics in Bitquery GraphQL API"
description: "Use the IDE metrics API and utilities metrics to inspect query cost, points, SQL requests, and chain-specific usage."
keywords: [Bitquery, metrics, API usage, query cost, GraphQL]
---

# Metrics

The Bitquery IDE exposes a metrics API through the `utilities` field, letting you inspect query cost, point consumption, and resource breakdown for any executed query.

![metrics](/img/ide/metrics.png)

The metrics API returns a JSON object with the following properties:

- points : The number of data points collected for the query.
- sqlRequestsCount : The number of SQL requests made for the query.
- list: A list of metrics for the query. Each metric object has the following fields:

    - name: The name of the metric.
    - cost: The cost of the metric in points.
    - value: The value of the metric.
    - price: The price of the metric in USD.




The following query fetches API usage metrics for a specific query ID, returning total data points consumed and the number of SQL requests executed.

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

The response `list` array breaks down cost by resource type. For example, the entry below shows memory consumption:

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
The `Extra Memory Consumption, GB` metric measures the additional memory allocated to process the query beyond the baseline.


Some chains have specific metrics that you can get using the metrics API. For example, the Tron chain has a `netUsage` metric that you can use to get the network usage for a query.

## Related Resources

- [Utilities API](https://docs.bitquery.io/v1/docs/query-features/utilities/utilities)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
- [Bitquery API FAQ](https://docs.bitquery.io/v1/docs/building-queries/FAQ)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/)