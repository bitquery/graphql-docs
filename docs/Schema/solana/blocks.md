# Blocks

The Blocks API returns information about blocks on the Solana network. The fields in the schema include: 

```
query ($network: SolanaNetwork!,$from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      date: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      transactionCount
      parentSlot
      rewards
      blockHash
    }
  }
}
<!-- Parameters -->
{
  "network": "solana",
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Blocks</summary>

`rewards`: This field allows you to filter blocks by the amount of rewards they contain. 

`previousBlockHash`: This field allows you to filter blocks by their previous block hash.

`parentSlot`: This field allows you to filter blocks by their parent slot. 

`options`: Filter returned data by ordering, limiting, and constraining it.

`height`: This field allows you to filter blocks by their height. 

`date`: This field allows you to filter blocks by their date. 

`blockHash`: This field allows you to filter blocks by their block hash. 

`any`: This field allows you to filter blocks by any of the other fields (OR logic). 

`transactionCount`: This field allows you to filter blocks by the number of transactions they contain. 
</details>