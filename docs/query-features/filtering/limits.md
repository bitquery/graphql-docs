---
sidebar_position: 4
---

# Limits

You can limit of the number of results retrieved using the ```limit``` or  ```limitby``` filter both of which work differently. 

### limit

This limits the number of records simply based on the number you mention. For example 
setting limit to 10, returns 10 records.

```
    dexTrades(
      options: { limit: 10}
      
    ) 
```


> if you do not specify limit, some pre-defined system limit anyway will be applied, around 10,000 rows of data.

### limitby

Limits the number of results returned by a query.

Arguments:

`each`: The field to limit by. If this is not specified, the limit will be applied to the entire result set.

`limit`: The maximum number of results to return.

`offset`: The offset of the first result to return.


Take this example:

```
 options: {limitBy: {each: "buyCurrency.name", limit: 1}}
```

This limits the results to returning only 1 result for every currency name in the buy side.