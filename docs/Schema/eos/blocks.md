# EOS Blocks API

Bitquery's EOS blocks API provides information on blocks in the EOS chain. Below are the fields in the schema:

```
query ($from: ISO8601DateTime, $till: ISO8601DateTime) {
  eos {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      hash
      producer {
        address
        annotation
      }
    }
  }
}
{

  "network": "eos",
  "from": "2023-08-22T09:27:46.000Z",
  "till": "2023-08-22T09:57:46.000Z",
  "dateFormat": "%Y-%m-%d"
}
```

<details>
<summary>Filtering Blocks</summary>

-   **options**  : A set of options that can be used to filter the results.
    -   **desc** or **asc**  : The order of the results, either "asc" (ascending) or "desc" (descending). 
    -   **limit**  : The maximum number of results to return. The default is 10.
    -   **offset**  : The number of results to skip. The default is 0.
-   **time**  : A filter that can be used to select blocks created within a specified time range.
  
-   **proposer**  : A filter that can be used to select blocks created by a specific producer.
-   **height**  : A filter that can be used to select blocks with a specific height.
-   **date**  : A filter that can be used to select blocks created on a specific date.
-   **blockHash**  : A filter that can be used to select blocks with a specific hash.
-   **any**  : A catch-all filter (OR logic) that can be used to select blocks that match any of the other filters.

</details>

## Fields

- **timestamp** : The timestamp of the block, in ISO 8601 format.
- **height** : The block number.
- **hash** : The block hash.
- **producer** : The producer who created the block.
  - **address** : The producer's EOS account address.
  - **annotation** : The producer's annotation for the block.
