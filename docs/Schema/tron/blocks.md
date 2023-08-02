# Blocks

The `blocks` field allows us to fetch details about the blocks from Tron network.

Here is an example that demonstrates how to retrieve blocks data:

```
{
  tron {
    blocks(
      date: {after: "2023-07-23"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      hash
      height
      parentBlockHash
      timestamp {
        iso8601
      }
      txTrieRoot
      version
      witness {
        address
        annotation
      }
      witnessSignature
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

-   `any`:
-   `blockHash`: filter by hash of the block
-   `date`: filter by date of the block
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it.
-   `parentBlockHash`: fitler by parent block hash
-   `time`: filter by selecting time in range, list or just time
-   `version`: fitler by block version
-   `witness`: filter by block witness

</details>

-   `any`:
-   `count`: returns aggregate count of the blocks
-   `countBigInt`: returns count as `BigInt`
-   `date`: returns date of the block
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `hash`: returns block hash
-   `height`: returns block height
-   `maximum`: returns maximum of selected [measurable field of Tron Blocks](/v1/docs/graphql-reference/enums/tron-blocks-measureable)
-   `minimum`: returns minimum of selected measurable field of Tron Blocks
-   `parentBlockHash`: returns parent block hash for the block
-   `timestamp`: returns timestamp of the block
-   `txTrieRoot`: returns transaction trie root hash
-   `version`: returns block version
-   `witness`: returns block witness
-   `witnessSignature`: returns block witness signature
