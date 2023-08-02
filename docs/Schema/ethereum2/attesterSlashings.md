# Attester Slashings


```
query ($network: Ethereum2Network!) {
  ethereum2(network: $network) {
    attesterSlashings(
      options: {asc: "date.date", limit: 10}
      attestationEpoch: {is: 217605}
    ) {
      date: date {
        date
      }
      attestationOrder
      attesterSlashingIndex
      attestation {
        epoch
        signature
        slot
        beaconBlockRoot
        source {
          epoch
          root
        }
        target {
          epoch
          root
        }
      }
      eth1 {
        blockHash
        depositCount
        depositRootHash
      }
      parentRoot
      proposer {
        index
        pubkey
      }
      stateRoot
      validator {
        index
        pubkey
      }
      validatorInAttestationIndex
    }
  }
}
<!-- Parameters -->
{
  "network": "eth2"
}
```

<details><summary>Filtering attesterSlashings</summary>

`options`: This field contains a set of options that can be used to customize the response. For example, you can use the asc option to sort the results in ascending order by the date field. You can also use the limit option to limit the number of results that are returned.

`attestationEpoch`: This field specifies the epoch number of the attestations that should be returned.

`any`: This field can be used to filter the results by any of the other fields in the response.

`attestationSlot`: This field specifies the slot number of the attestations that should be returned.

`blockProposerIndex`: This field specifies the index of the block proposer for the attestations that should be returned.

`blockRootHash`: This field specifies the hash of the block root for the attestations that should be returned.

`date`: This field specifies the date and time of the attestations that should be returned.

`height`: This field specifies the height of the attestations that should be returned.

`time`: This field specifies the time of the attestations that should be returned.

`validatorIndex`: This field specifies the index of the validator for the attestations that should be returned.
</details>


### Fields

`attestationOrder`: This field contains the order of the attester slashing in the attestation.

`attesterSlashingIndex`: This field contains the index of the attester slashing in the block.

`attestation`: This field contains information about the attestation that was slashed.

`eth1`: This field contains information about the ETH1 block that was included in the attestation.

`parentRoot`: This field contains the hash of the parent block's root.

`proposer`: This field contains information about the block proposer.

`stateRoot`: This field contains the hash of the state root at the time the attestation was slashed.

`validator`: This field contains information about the validator that was slashed.

`validatorInAttestationIndex`: This field contains the index of the validator in the attestation.

`date`: This field contains the date and time of the attester slashing..

`attestationEpoch`: This field specifies the epoch number of the attestations that should be returned.