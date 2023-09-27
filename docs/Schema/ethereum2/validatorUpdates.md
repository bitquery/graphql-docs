---
title: ETH2 Validator Updates API
---

<head>
<meta name="title" content="ETH2 Validator Updates API"/>
<meta name="description" content="Get information on Validator Updates on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain."/>
<meta name="keywords" content="ETH2 api, ETH2 python api, ETH2 nft api, ETH2 scan api, ETH2 matic api, ETH2 api docs, ETH2 crypto api, ETH2 blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="ETH2 Validator Updates API" />
<meta property="og:description" content="Get information on Validator Updates on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="ETH2 Validator Updates API" />
<meta property="twitter:description" content="Get Validator Updates information on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />
</head>

```
query ($network: Ethereum2Network!) {
  ethereum2(network: $network) {
    validatorUpdates(
      options: {desc: "validatorBalanceChange", limit: 10}
      epoch: {is: "217623"}
    ) {
      validator {
        index
        pubkey
      }
      validatorBalanceChange
      amount_usd: validatorBalanceChange(in: USD)
      eth1 {
        blockHash
        depositCount
        depositRootHash
      }
      epoch
      blockRootHash
      block {
        height
        timestamp {
          time
        }
      }
      parentRootHash
      proposer {
        pubkey
        index
      }
      stateRootHash
      validatorBalance
      validatorActivationEpoch
      validatorEffectiveBalance
      validatorExitEpoch
      validatorSlashed
      validatorStatus
      validatorWithdrawableEpoch
      validatorWithdrawalCredentials
    }
  }
}

{
  "network": "eth2"
}
```
<details>
<summary>Filtering validatorUpdates</summary>
`options`: This field contains a set of options that can be used to customize the response.

`limit`: This option can be used to limit the number of results that are returned. 

`epoch`: This field specifies the epoch number that the validator updates should be returned for.

`any`: This field can be used to filter the results by any of the other fields (OR) in the response. 

`blockProposerIndex`: This field specifies the index of the block proposer for the validator updates that should be returned.

`blockProposerPubkey`: This field specifies the public key of the block proposer for the validator updates that should be returned.

`blockRootHash`: This field specifies the hash of the block root for the validator updates that should be returned.

`date`: This field specifies the date of the validator updates that should be returned.

`eth1DepositCount`: This field specifies the number of ETH1 deposits that were associated with the validator updates that should be returned.

`eth1BlockHash`: This field specifies the hash of the ETH1 block that was associated with the validator updates that should be returned.

`eth1DepositRootHash`: This field specifies the hash of the ETH1 deposit root that was associated with the validator updates that should be returned.

`height`: This field specifies the height of the block that the validator updates should be returned for.

`stateRootHash`: This field specifies the hash of the state root at the time the validator updates were applied.

`time`: This field specifies the time of the validator updates that should be returned.

`validatorWithdrawalCredentials`: This field specifies the validator's withdrawal credentials.

`validatorWithdrawableEpoch`: This field contains the epoch number at which the validator's rewards will be withdrawable.

`validatorStatus`: This field indicates the current status of the validator.

`validatorSlashed`: This field indicates whether the validator was slashed.

`validatorPubkey`: This field specifies the public key of the validator that was updated.

`validatorIndex`: This field specifies the index of the validator that was updated.

`validatorExitEpoch`: This field contains the epoch number at which the validator will exit the network.

`validatorBalanceChange`: This field contains the amount of ETH that the validator's balance was changed by.

`validatorEffectiveBalance`: This field contains the validator's effective balance after the update was applied.

`validatorBalance`: This field contains the validator's balance before the update was applied.

`validatorActivationEpoch`: This field contains the epoch number at which the validator was activated.

</details>

### Fields

`validator`: This field contains information about the validator that was updated.

`validatorBalanceChange`: This field contains the amount of ETH that the validator's balance was changed by.

`amount_usd`: This field contains the amount of ETH that the validator's balance was changed by, in USD.

`eth1`: This field contains information about the ETH1 deposit that was associated with the validator update.

`epoch`: This field contains the epoch number at which the validator update was applied.

`blockRootHash`: This field contains the hash of the block root that the validator update was included in.

`block`: This field contains information about the block that the validator update was included in.

`parentRootHash`: This field contains the hash of the parent block's root.

`proposer`: This field contains information about the block proposer.

`stateRootHash`: This field contains the hash of the state root at the time the validator update was applied.

`validatorBalance`: This field contains the validator's balance before the update was applied.

`validatorActivationEpoch`: This field contains the epoch number at which the validator was activated.

`validatorEffectiveBalance`: This field contains the validator's effective balance after the update was applied.

`validatorExitEpoch`: This field contains the epoch number at which the validator will exit the network.

`validatorSlashed`: This field indicates whether the validator was slashed.

`validatorStatus`: This field indicates the current status of the validator.

`validatorWithdrawableEpoch`: This field contains the epoch number at which the validator's rewards will be withdrawable.

`validatorWithdrawalCredentials`: This field contains the validator's withdrawal credentials.






