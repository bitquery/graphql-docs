# Blocks API

Our Tron API provides all details regarding blocks from Tron Blockchain.

## Get Transaction Trie Root of Block

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

This query returns transaction trie root from the block.

## Filter by Parent Block Hash of Block

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
      parentBlockHash: {is: "00000000032eb5f8fde3751e4c388bc489ea7b456f1fbbe33f1471a274349cee"}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

This query filter block data by parent block hash of that block.

## Filter by Witness address of the Block

```
{
  tron {
    blocks(
      date: {after: "2023-07-30"}
      options: {desc: "timestamp.iso8601", limit: 10}
      witness: {is: "TTMNxTmRpBZnjtUnohX84j25NLkTqDga7j"}
    ) {
      parentBlockHash
      txTrieRoot
      witness {
        address
        annotation
      }
      witnessSignature
      timestamp {
        iso8601
      }
    }
  }
}
```

This query allows us to filter block by it's witness address.

