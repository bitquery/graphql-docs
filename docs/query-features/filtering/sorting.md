---
sidebar_position: 3
title: "Sorting in Bitquery GraphQL API"
description: "Sort API results with asc, desc, and descByInteger options in Bitquery GraphQL for blocks, trades, and events."
keywords: [Bitquery, GraphQL, sorting, asc, desc, options]
---

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

## When to Use This

Choosing the right sort direction keeps your results aligned with how people read blockchain data: time-ordered feeds, leaderboards, or stable numeric ordering. Use **desc** when you want the newest or largest values first—common for latest blocks, most recent transfers, or highest-volume trades—because many schemas expose height, timestamps, or amounts as comparable fields. Use **asc** when you need chronological buildup from the genesis or from a start cursor, such as replaying events in order or walking forward through a range you already filtered.

**descByInteger** helps when the field you sort on is stored or exposed in a way that sorts more reliably as an integer (for example dense numeric indices like trade or log positions). If plain **desc** or **asc** does not order the way you expect for a given field, **descByInteger** is worth trying before changing the query shape.

- **Latest-first timelines:** Sort by block height or an equivalent time-like field with **desc** so the first row is the most recent activity in your window.
- **Oldest-first or range replay:** Use **asc** on the same field when you need strict forward order through a bounded interval.
- **Leaderboards and “top N”:** Pair **desc** with a limit in **options** (see the options doc) so the API returns the highest values without returning the full matching set.
- **Numeric indices:** Prefer **descByInteger** for fields that behave like integer sequence numbers when string or scalar sorting would mis-order values.

## Related Resources

- [Options filter](https://docs.bitquery.io/v1/docs/query-features/filtering/options)
- [Limits and limitBy](https://docs.bitquery.io/v1/docs/query-features/filtering/limits)
- [Filtering fields](https://docs.bitquery.io/v1/docs/query-features/filtering/fields)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [Schema — Ethereum overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)

