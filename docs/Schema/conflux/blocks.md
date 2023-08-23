# Conflux Blocks API

```
query ($network: ConfluxNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    blocks(
      options: {desc: "height", asc: "address.address", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      epoch
      hash
      pivot
      address: miner {
        address
        annotation
      }
      powerQuality
      blame
    }
  }
}
{
  "network": "conflux_hydra",
  "from": "2023-08-23T08:33:02.000Z",
  "till": "2023-08-23T09:03:02.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary> Filtering Blocks</summary></details>

## Fields