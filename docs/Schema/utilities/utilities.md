# Utilities

Utilities method helps understand your API consumption. It provides information on your account, such as your active period, billing day, and points remaining. It also provides metrics on your API usage, such as the number of SQL requests you have made and the cost of those requests.

## Active Period

The activePeriod subfield provides information on your account's active period.To get information on your account's active period, use the following query:

```
query MyQuery {
  utilities {
    activePeriod(apiKey: "your key") {
      pointsRemaining
      billingDay
      isPaid
      isPointsConsumed
      isSpent
      points
      isBlocked
    }
  }
}

```

## Metrics

The metrics subfield provides metrics on your API usage. To get metrics on your API usage, use the following query:

```
{
  utilities {
    metrics(queryId: "QPiCo1pgxRuBnvVs") {
      points
      id
      sqlRequestsCount
      list {
        cost
        max
        value
        valueUnit
        price
        name
      }
    }
  }
}

```
