---
title: ETH2 Attestations API
---

<head>
<meta name="title" content="ETH2 Attestations API"/>
<meta name="description" content="Get information on Attestations on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain."/>
<meta name="keywords" content="ETH2 api, ETH2 python api, ETH2 nft api, ETH2 scan api, ETH2 matic api, ETH2 api docs, ETH2 crypto api, ETH2 blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="ETH2 Attestations API" />
<meta property="og:description" content="Get information on Attestations on the ETH2   blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="ETH2 Attestations API" />
<meta property="twitter:description" content="Get Attestations information on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />
</head>

The attestations API allows you to query for attestations that have been submitted to the Ethereum 2.0 beacon chain. You can use this API to get information about the attestations themselves, such as the epoch number, slot number, and committee index. You can also get information about the block that the attestation was included in, such as the block root hash and timestamp. The below query lists the fields in the schema:

```
query ($network: Ethereum2Network!) {
  ethereum2(network: $network) {
    attestations(
      options: {desc: "block.timestamp.time", limit: 1}
      attestationEpoch: {is: 217582}
    ) {
      committeeIndex
      aggregationBits
      attestationIndex
      validatorInCommitteeIndex
      stateRoot
      parentRoot
      eth1 {
        blockHash
        depositCount
        depositRootHash
      }
      attestation {
        beaconBlockRoot
        epoch
        signature
        slot
        source {
          epoch
          root
        }
        target {
          epoch
          root
        }
      }
      block {
        timestamp {
          time
        }
      }
    }
  }
}



{
  "network": "eth2"
}
```

<details>
<summary>Filtering attestations</summary>

`any`: This field can be used to filter the results by any of the other fields in the response.

`attestationEpoch`: This field specifies the epoch number of the attestations that should be returned.

`attestationSlot`: This field specifies the slot number of the attestations that should be returned.

`blockProposerIndex`: This field specifies the index of the block proposer for the attestations that should be returned.

`blockRootHash`: This field specifies the hash of the block root for the attestations that should be returned.

`committeeIndex`: This field specifies the index of the committee for the attestations that should be returned.

`date`: This field specifies the date and time of the attestations that should be returned.

`height`: This field specifies the height of the attestations that should be returned.

`options`: This field contains a set of options that can be used to customize the response. For example, you can use the limit option to limit the number of results that are returned.

`time`: This field specifies the time of the attestations that should be returned.

`validatorIndex`: This field specifies the index of the validator for the attestations that should be returned.

</details>

### Fields

`committeeIndex`: This field contains the index of the committee that the attestation was submitted to.

`aggregationBits`: This field contains a bitmask that indicates which validators in the committee attested to the same block and slot.

`attestationIndex`: This field contains the index of the attestation within the committee.

`validatorInCommitteeIndex`: This field contains the index of the validator that submitted the attestation.

`stateRoot`: This field contains the hash of the state root at the time the attestation was submitted.

`parentRoot`: This field contains the hash of the parent block's root.

`eth1`: This field contains information about the ETH1 block that was included in the attestation.

`attestation`: This field contains information about the attestation itself.

`beaconBlockRoot`: This field contains the hash of the beacon block that the attestation is for.

`epoch`: This field contains the epoch number of the attestation.

`signature`: This field contains the signature of the attestation.

`slot`: This field contains the slot number of the attestation.

`source`: This field contains information about the source block of the attestation.

`target`: This field contains information about the target block of the attestation.

`block`: This field contains information about the block that the attestation was included in.

`timestamp`: This field contains the timestamp of the block.

`time`: This field contains the time of the block.

`attestationEpoch`: This field specifies the epoch number of the attestations that should be returned.
