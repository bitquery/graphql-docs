---
sidebar_position: 4
---

# Limits

You can limit of the number of results retrieved using the `limit` or `limitby` filter both of which work differently.

### Limit

This limits the number of records simply based on the number you mention. For example
setting limit to 10, returns 10 records.

```
    dexTrades(
      options: { limit: 10}

    )
```

> if you do not specify limit, some pre-defined system limit anyway will be applied, around 10,000 rows of data.

### Limitby

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

#### Limitby Example

Let us take a query with `limitby` and break it down :

```
{
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {in: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xc8c488fDbBB2E72E41710Ade67784f0812160210"]}
      options: {desc: "trades", limit: 4, limitBy: {each: "baseCurrency.address", limit: 1}}
    ) {
      poolToken: smartContract {
        address {
          address
        }
      }
      pair: quoteCurrency {
        address
        symbol
      }
      baseCurrency {
        address
        name
        symbol
      }
      trades: count
    }
  }
}

```

The `limitBy` option in the above query limits the results to returning only 1 result for every `basecurrency` address. This means that the query will return a total of 4 results, one for each of the base currency addresses specified in the `baseCurrency` field

Here is a breakdown of the `limitBy` option in the query:

```
limitBy: {each: "baseCurrency.address", limit: 1}

```

- `each`: The field to limit by, in this case `baseCurrency.address`.
- `limit`: The maximum number of results to return for each value of the `each` field, in this case 1.
