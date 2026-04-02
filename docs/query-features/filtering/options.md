---
sidebar_position: 1
title: "Options Filter in Bitquery GraphQL API"
description: "Combine limit, offset, ascending and descending sort in the options argument for Bitquery GraphQL queries."
keywords: [Bitquery, GraphQL, options, limit, offset, sorting]
---

# Options

The options filter contains most of the sorting and result limiting features as shown in the screenshot.


![sorting](/img/ide/options.png)

You can select one or more options, use them in combination or alone to fitler your results.

``` options: {limit: 1, descByInteger: "tradeIndex"}```

In this example, the results will be limited to 1 result, and the results will be sorted by the tradeIndex field in descending order.

Here's another example:
``` options: {asc: "block.height", limit: 2000}```

### Passing as Parameters

``` options: {asc: "date.date", offset: $offset}```

The parameters are passsed in the query

```
query ($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $offset:Int) {
}
```

> Notes:

- The options filter is case-sensitive.
- The limit and offset option must be a positive integer.

## Practical Tips

The **options** argument is the main place you cap result size, skip pages of rows, and declare sort order in one object. Thinking in terms of “shape of the answer” (how many rows, in what order, starting where) keeps queries predictable and easier to cache on your side.

Use **limit** and **offset** together when you are paginating through a stable sort: each page asks for the same **limit** and increases **offset** by that step. This pattern fits admin UIs and exports where users step through results; combine it with an explicit **asc** or **desc** on a unique or nearly unique field so pages do not shuffle between requests. For “give me only the top ten” style answers, set **limit** without **offset** and sort so the first rows are the ones you care about—for example highest amount or newest block.

Performance-wise, tighter **limit** values reduce payload size and work on the API. Very large limits can still be heavy even when legal; prefer smaller pages or narrower time and filter ranges when latency matters. Remember that **options** is case-sensitive and that **limit** and **offset** must be positive integers, so validate or coerce variables before sending the request.

- **Pagination:** Same **limit**, increasing **offset**, with a fixed sort key—ideal for sequential browsing when you do not need cursor-based APIs.
- **Top-N dashboards:** **limit** plus **desc** (or **descByInteger** when appropriate) returns a small leaderboard without post-sorting in your app.
- **Parameterized paging:** Pass **offset** (and optionally **limit**) as query variables so your client controls the page without duplicating query text.
- **Cost and latency:** Prefer reasonable **limit** values and sharper filters over one enormous pull; sort plus limit still scans according to your filters, so narrowing time and scope helps most.

## Related Resources

- [Sorting](https://docs.bitquery.io/v1/docs/query-features/filtering/sorting)
- [Limits and limitBy](https://docs.bitquery.io/v1/docs/query-features/filtering/limits)
- [Network selection](https://docs.bitquery.io/v1/docs/building-queries/network-selection)
- [EVM arguments](https://docs.bitquery.io/v1/docs/query-features/arguments/EVM_arguments)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)