# Blocks

```
query ($network: RippleNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      hash
      totalCoins
      accountHash
    }
  }
}

{
  "network": "ripple",
  "from": "2023-08-15T09:01:24.000Z",
  "till": "2023-08-15T09:31:24.000Z",
  "dateFormat": "%Y-%m-%d"
}
```