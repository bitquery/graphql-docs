# Blocks

```
query ($network: Ethereum2Network!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum2(network: $network) {
    blocks(
      options: {asc: "date.date", limit: 10}
      date: {since: $from, till: $till}
    ) {
      date: date {
        date(format: $dateFormat)
      }
      count: countBigInt
      proposers: countBigInt(uniq: block_proposers)
      attestationsCount
      attesterSlashingsCount
      blockRoot
      depositsCount
      epoch
      eth1 {
        blockHash
        depositRootHash
        depositCount
      }
      graffiti
      height
      parentRoot
      proposer {
        index
        pubkey
      }
      proposerSlashingsCount
      voluntaryExitsCount
      signature
      stateRoot
      randaoReveal
    }
  }
}
<!-- Parameters -->

{
  "network": "eth2",
  "from": "2023-07-19",
  "till": "2023-07-26T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details> <summary>Filtering Blocks</summary>

`any` (or condition): This field can be used to filter the results by any of the other fields in the response.

`blockProposerIndex`: Index of the validator that proposed the block.

`blockRootHash`: Hash of the block's root.

`date`: The date and time that the block was proposed.

`height`: The height of the block in the chain.

`options`: Allows you to specify additional options for the query. For example, you could use options=include_signatures=true to include the signatures of the validators that signed the block.

`time`: This field is the time that the block was proposed.
</details>


###  Fields

`date`: This field contains the date of the block.

`count`: This field contains the number of blocks that match the query criteria.

`proposers`: This field contains the number of unique block proposers that match the query criteria.

`attestationsCount`: This field contains the number of attestations that were included in the block.

`attesterSlashingsCount`: This field contains the number of attester slashings that were included in the block.

`blockRoot`: This field contains the hash of the block's root.

`depositsCount`: This field contains the number of deposits that were included in the block.

`epoch`: This field contains the epoch number of the block.

`eth1`: This field contains information about the ETH1 block that was included in the block.

`graffiti`: This field contains the graffiti that was included in the block.

`height`: This field contains the height of the block in the chain.

`parentRoot`: This field contains the hash of the parent block's root.

`proposer`: This field contains information about the block proposer.

`proposerSlashingsCount`: This field contains the number of proposer slashings that were included in the block.

`voluntaryExitsCount`: This field contains the number of voluntary exits that were included in the block.

`signature`: This field contains the signature of the block.

`stateRoot`: This field contains the hash of the block's state root.

`randaoReveal`: This field contains the RANDAO reveal of the block.