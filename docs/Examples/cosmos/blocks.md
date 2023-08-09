# Blocks API

Our Cosmos Blocks API provides all the information related to blocks produced on Cosmos network.

## Retrieve the 10 Most Recent Blocks

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      hash
      header
      height
      metadata
      proposer {
        address
      }
      timestamp {
        iso8601
      }
    }
  }
}
```

This query retrieves details about the 10 most recent blocks on the Cosmos blockchain. It includes information like block hash, header, height, metadata, block proposer's address, and timestamp for each block. The results are ordered by timestamp in descending order.

## Filter Blocks Based on Block Proposer

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      options: {desc: "timestamp.iso8601", limit: 10}
      proposer: {is: "13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F"}
    ) {
      hash
      height
      proposer {
        address
      }
      timestamp {
        iso8601
      }
    }
  }
}
```

This query fetches details about the 10 most recent blocks on the Cosmos blockchain. It specifically filters the results to include only blocks proposed by the address `13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F`. It retrieves information such as the block hash, block height, address of the block proposer, and timestamp for each of these filtered blocks. The results are sorted based on the timestamp in descending order.

## Count Blocks Associated with a Specific Block Proposer

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      proposer: {is: "13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F"}
    ) {
      count(uniq: blocks)
    }
  }
}
```

This query counts the number of blocks proposed by the address `13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F` on the Cosmos blockchain after the date "2023-08-07". It provides the total count of unique blocks that were proposed by the specified address within the specified timeframe.