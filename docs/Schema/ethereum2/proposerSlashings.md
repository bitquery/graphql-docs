# Proposer Slashings

The proposerSlashings API returns a list of proposer slashings for a given Ethereum 2.0 network. A proposer slashing occurs when a validator is found to have double signed a block. 
The proposerSlashings API can be used to get information about proposer slashings, such as the date of the slashing, the block height, and the validator's index. 

```
query ($network: Ethereum2Network!) {
  ethereum2(network: $network) {
    proposerSlashings(
      options: {asc: "date.date", limit: 10}
      slashingEpoch: {is: 217770}
    ) {
      date: date {
        date
      }
      slashing_proposers: countBigInt(uniq: slashing_proposers)
      block {
        height
        timestamp {
          time
        }
      }
      blockRoot
      eth1 {
        blockHash
        depositCount
        depositRootHash
      }
      headerOrder
      parentRoot
      proposer {
        index
        pubkey
      }
      slashing {
        bodyRoot
        epoch
        parentRoot
        proposer {
          index
          pubkey
        }
        signature
        slot
      }
    }
  }
}
<!-- Parameters -->
{
  "network": "eth2"
}
```

<details><summary>Filtering proposerSlashings</summary>

`limit`: The maximum number of results to return.

`slashingEpoch`: The slashing epoch to filter the results by.

`height`: The block height to filter the results by.

`date`: The date of the proposer slashing to filter the results by.

`blockRootHash`: The block root hash to filter the results by.

`blockProposerIndex`: The index of the proposer in the block to filter the results by.

`any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

`slashingSlot`: The slot of the slashing to filter the results by.

`slashingProposerIndex`: The index of the proposer in the slashing to filter the results by.

`time`: The timestamp of the proposer slashing to filter the results by.
</details>


### Fields

`date`: The date of the proposer slashing.

`slashing_proposers`: The number of unique proposers in the result set.

`block`: The block that the proposer slashing occurred in.

`height`: The block height.

`timestamp`: The block timestamp.

`blockRoot`: The block root hash.

`eth1`: The ETH1 block that the block was proposed for.

`blockHash`: The ETH1 block hash.

`depositCount`: The number of deposits in the ETH1 block.

`depositRootHash`: The deposit root hash of the ETH1 block.

`headerOrder`: The header order of the block.

`parentRoot`: The parent root hash of the block.

`proposer`: The proposer of the block.

`index`: The index of the proposer in the validator set.

`pubkey`: The public key of the proposer.

`slashing`: The slashing information.

`bodyRoot`: The body root hash of the block.

`epoch`: The epoch of the slashing.

`parentRoot`: The parent root hash of the block.

`proposer`: The proposer of the block.

`signature`: The signature of the slashing.

`slot`: The slot of the slashing.