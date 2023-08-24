# Conflux Blocks API

Bitquery's Conflux blocks API provides information on blocks in the Conflux chain. Below are the fields in the schema:

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

<details><summary> Filtering Blocks</summary>

- **options** : A set of options that can be used to filter the results.
  - **desc** or **asc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **time** : A filter that can be used to select blocks created within a specified time range.

- **any** : A catch-all filter (OR logic) that can be used to select blocks that match any of the other filters.
- **height** : A filter that can be used to select blocks with a specific height.
- **date** : A filter that can be used to select blocks created on a specific date.
- **blockHash** : A filter that can be used to select blocks with a specific hash.
- **miner**: Filter by the miner who mined the block.

</details>

## Fields

`timestamp`: The Unix timestamp for when the block was created.

`height`: The height of the block in the chain.

`epoch`: The epoch of the block.

`hash`: The hash of the block.

`pivot`: The pivot block hash of the block.

`address`: The address of the miner who mined the block.

`powerQuality`: The PoW quality of the block.

`blame`: The blame score of the block.
