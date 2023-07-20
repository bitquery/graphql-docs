---
sidebar_position: 6
---

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