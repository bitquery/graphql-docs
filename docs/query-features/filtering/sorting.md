---
sidebar_position: 3
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


