---
sidebar_position: 1
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