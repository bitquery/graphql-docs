# Blocks

Stellar Blocks API helps you get information on Blocks in the network. Below are the fields in the API:

```
query ($network: StellarNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  stellar(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      hash
      protocolVersion
      totalCoins
      feePool
      maxTxSetSize
      baseReserve
      baseFee
    }
  }
}
{
  "network": "stellar",
  "from": "2023-08-17T12:01:51.000Z",
  "till": "2023-08-17T12:31:51.000Z",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Blocks</summary>

- **options** : This object contains the options for ordering and limiting the results
- **time** : This object contains the time range for filtering the blocks.
- **maxTxSetSize** : This field can be used to filter the blocks by the maximum size of the transaction set.
- **height** : This field can be used to filter the blocks by the height of the block in the ledger.
- **hash** : This field can be used to filter the blocks by the hash of the block.
- **feePool** : This field can be used to filter the blocks by the fee pool of the ledger at the time of the block.
- **date** : This field can be used to filter the blocks by the date of the block.
- **baseReserve** : This field can be used to filter the blocks by the base reserve of the ledger at the time of the block.
- **baseFee** : This field can be used to filter the blocks by the base fee of the ledger at the time of the block.
- **any** : A catch-all field ( OR Logic) that can be used to filter on any other field in the blocks API.

</details>

## Fields

- **timestamp** : The timestamp of the block, in ISO 8601 format.
- **height** : The height of the block in the ledger.
- **hash** : The hash of the block.
- **protocolVersion** : The protocol version used to create the block.
- **totalCoins** : The total number of lumens in the ledger at the time of the block.
- **feePool** : The fee pool of the ledger at the time of the block.
- **maxTxSetSize** : The maximum size of a transaction set that can be included in a block.
- **baseReserve** : The base reserve of the ledger at the time of the block.
- **baseFee** : The base fee of the ledger at the time of the block.
