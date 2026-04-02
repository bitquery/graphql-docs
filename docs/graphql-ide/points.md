---
sidebar_position: 4
title: "Bitquery API Points — Pricing, Consumption & Query Cost"
description: "Understand Bitquery API points: how query cost is calculated from complexity and data volume, plans, free tier, and how to optimize usage and billing."
keywords:
  [
    Bitquery points,
    API pricing,
    query cost,
    billing,
    GraphQL limits,
  ]
---

# What are Points?

At Bitquery we use points system to calculate the cost for a query. Each query will use different number of points, based on the complexity and size of the query requested. For a comprehensive understanding of the points system, please refer to [our detailed post](https://community.bitquery.io/t/introducing-points/874).

When you first sign up, you’ll get 10K free points for the first month on the Developer plan. After that, you’ll need to upgrade or contact our sales team for a trial or paid plan to continue.
For every query you run, you can check the points consumed in real time.

![points](/img/ide/points.png)

Different plans have different limits for points available. You can always request a custom top-up of points by directly contacting us.

Check pricing [here](https://bitquery.io/pricing)

## How are points calculated?

The number of points can vary for various reasons. Even the same query can produce different results. These points are dynamically calculated based on the following factors:

- The quantity of records being queried, either through the count of records in limit or the date range.
- The level of complexity of the query.

For instance, if you include additional addresses, the points will be calculated considering the resources occupied by those addresses. To optimize this query, there are a few approaches you can consider. Firstly, narrowing down the date range can help to refine the results. Secondly, reducing the list of addresses may also be beneficial. However, the effectiveness of these strategies will depend on your specific goal.

## Related Resources

- [Account dashboard — API usage and billing](https://docs.bitquery.io/v1/docs/graphql-ide/account)
- [Common API errors](https://docs.bitquery.io/v1/docs/graphql-ide/errors)
- [Getting started with the IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Use Bitquery in your application](https://docs.bitquery.io/v1/docs/graphql-ide/use-it-in-your-application)
- [Basic structure of a GraphQL query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
