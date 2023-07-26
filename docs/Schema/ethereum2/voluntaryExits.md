# Voluntary Exits

```
query ($network: Ethereum2Network!) {
  ethereum2(network: $network) {
    voluntaryExits(options: {asc: "date.date", limit: 10}, height: {is: 6963731}) {
      date: date {
        date
      }
      blockRoot
      block {
        height
        timestamp {
          time
        }
      }
      eth1 {
        depositCount
        depositRootHash
        blockHash
      }
      signature
      stateRoot
      proposer {
        index
        pubkey
      }
      parentRoot
      validator {
        pubkey
        index
      }
      voluntaryExitEpoch
    }
  }
}

<!-- Parameters -->
{
  "network": "eth2"
}
```

<details><summary>Filtering VoluntaryExits</summary>

`options`: This field contains a set of options that can be used to customize the response. For example, you can use the asc option to sort the results in ascending order by the date field. You can also use the limit option to limit the number of results that are returned.

`height`: This field specifies the height of the block that the voluntary exits should be returned for.

`date`: This field specifies the date and time of the voluntary exits that should be returned.

`blockRootHash`: This field specifies the hash of the block root for the voluntary exits that should be returned.

`blockProposerIndex`: This field specifies the index of the block proposer for the voluntary exits that should be returned.

`any`: This field can be used to filter the results by any of the other fields (OR logic) in the response. 

`time`: This field specifies the time of the voluntary exits that should be returned.

`validatorIndex`: This field specifies the index of the validator for the voluntary exits that should be returned.

voluntaryExitEpoch: This field specifies the epoch number at which the voluntary exits were submitted.

</details>

### Fields

`date`: This field contains the date of the voluntary exit.

`blockRoot`: This field contains the hash of the block root that the voluntary exit was included in.

`block`: This field contains information about the block that the voluntary exit was included in.

`eth1`: This field contains information about the ETH1 deposit that was included in the voluntary exit.

`signature`: This field contains the signature of the voluntary exit.

`stateRoot`: This field contains the hash of the state root at the time the voluntary exit was submitted.

`proposer`: This field contains information about the block proposer.

parentRoot: This field contains the hash of the parent block's root.

validator: This field contains information about the validator that submitted the voluntary exit.

voluntaryExitEpoch: This field contains the epoch number at which the voluntary exit was submitted.

height: This field specifies the height of the block that the voluntary exits should be returned for.