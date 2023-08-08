# Blocks

The Filecoin Blocks API allows you to query information about blocks on the Filecoin blockchain.


```
query ($network: FilecoinNetwork!) {
  filecoin(network: $network) {
    blocks(options: {limit: 10, desc: "height"}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      hash
      address: miner {
        address
        annotation
      }
      ticket
      parentStateRoot
      parentMessageReceipts
      messages
      electionProof
      forkSignalling
      height
      index
    }
  }
}

{
  "network": "filecoin"
}
```
<details><summary>Filtering Blocks</summary>

`any`: This field allows you to filter blocks by any of the other fields in the response. For example, you could use the any field to filter blocks by timestamp, hash, or address.

`blockHash`: This field allows you to filter blocks by their hash.

`blockIndex`: This field allows you to filter blocks by their index in the chain.

`height`: This field allows you to filter blocks by their height.

`date`: This field allows you to filter blocks by their date.

`time`: This field allows you to filter blocks by their time.

`options`: This field allows you to specify options for the query. For example, you can use the options field to specify the maximum number of results to return or the order of the blocks to return.

`miner`: This field allows you to filter blocks by the address of the miner that produced the block.


</details>

## Fields

`timestamp`: The timestamp of the block.

`hash`: The hash of the block.

`address`: The address of the miner that produced the block.

`ticket`: The ticket that was used to produce the block.

`parentStateRoot`: The root hash of the parent state of the block.

`parentMessageReceipts`: The receipts for the messages in the parent block.

`messages`: The messages in the block.

`electionProof`: The election proof for the block.

`forkSignalling`: The fork signalling information for the block.

`height`: The height of the block.

`index`: The index of the block in the chain.