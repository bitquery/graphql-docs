---
sidebar_position: 3
title: "Sorting in Bitquery GraphQL API"
description: "Sort API results with asc, desc, and descByInteger options in Bitquery GraphQL for blocks, trades, and events."
keywords: [Bitquery, GraphQL, sorting, asc, desc, options]
---

<head>
<meta name="title" content="Sorting in Bitquery GraphQL API"/>
<meta name="description" content="Sort API results with asc, desc, and descByInteger options in Bitquery GraphQL for blocks, trades, and events."/>
<meta name="keywords" content="Bitquery, GraphQL, sorting, asc, desc, options"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Sorting in Bitquery GraphQL API" />
<meta property="og:description" content="Sort API results with asc, desc, and descByInteger options in Bitquery GraphQL for blocks, trades, and events." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Sorting in Bitquery GraphQL API" />
<meta property="twitter:description" content="Sort API results with asc, desc, and descByInteger options in Bitquery GraphQL for blocks, trades, and events." />
</head>

# Sorting

You can sort the results in ascending or descending order using two filters.


### Asc or Desc

For every API, you will find the option to sort the results.

![sorting](/img/ide/sorting.png)

In the   ```asc ``` or ```desc``` field you mention the field used to sort.

```options: {desc: "block.height"}```

This example, the results are sorted using block height from latest to oldest.

There's another flavour of this sorting option called `descbyInteger` which is not used much. It converts the filter field to Integer and then sorts the results.

Here's an example of how you can use it ```options: {descByInteger: "tradeIndex"}```

## Related Resources

- [Options filter](https://docs.bitquery.io/v1/docs/query-features/filtering/options)
- [Limits and limitBy](https://docs.bitquery.io/v1/docs/query-features/filtering/limits)
- [Filtering fields](https://docs.bitquery.io/v1/docs/query-features/filtering/fields)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [Schema — Ethereum overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)

