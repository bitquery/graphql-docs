---
title: ETH2 Voluntary Exits API
---

<head>
<meta name="title" content="ETH2 Voluntary Exits API"/>
<meta name="description" content="Get information on Voluntary Exits on the ETH2 blockchain. Also, get information on epochs, block root, deposits and validator information on the ETH2 blockchain."/>
<meta name="keywords" content="ETH2 api, ETH2 python api, ETH2 nft api, ETH2 scan api, ETH2 matic api, ETH2 api docs, ETH2 crypto api, ETH2 blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="ETH2 Voluntary Exits API" />
<meta property="og:description" content="Get information on Voluntary Exits on the ETH2 blockchain. Also, get information on epochs, block root, deposits and validator information on the ETH2 blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="ETH2 Voluntary Exits API" />
<meta property="twitter:description" content="Get Voluntary Exits information on the ETH2 blockchain. Also, get information on epochs, block root, deposits and validator information on the ETH2 blockchain." />
</head>

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

`parentRoot`: This field contains the hash of the parent block's root.

`validator`: This field contains information about the validator that submitted the voluntary exit.

`voluntaryExitEpoch`: This field contains the epoch number at which the voluntary exit was submitted.

`height`: This field specifies the height of the block that the voluntary exits should be returned for.