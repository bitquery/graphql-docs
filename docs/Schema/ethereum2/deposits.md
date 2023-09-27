---
title: ETH2 Deposits API
---

<head>
<meta name="title" content="ETH2 Deposits API"/>
<meta name="description" content="Get information on Deposits on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain."/>
<meta name="keywords" content="ETH2 api, ETH2 python api, ETH2 nft api, ETH2 scan api, ETH2 matic api, ETH2 api docs, ETH2 crypto api, ETH2 blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="ETH2 Deposits API" />
<meta property="og:description" content="Get information on Deposits on the ETH2   blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="ETH2 Deposits API" />
<meta property="twitter:description" content="Get Deposits information on the ETH2 blockchain. Also, get information on epochs, block root and  validator information on the ETH2 blockchain." />
</head>

The deposits API allows you to query for deposits that have been made to the Ethereum 2.0 beacon chain. You can use this API to get information about the deposits themselves, such as the amount of ETH that was deposited, the validator that made the deposit, and the block that the deposit was included in. Below are the fields in the schema: 

```
query ($network: Ethereum2Network!, $limit: Int!, $offset: Int!) {
  ethereum2(network: $network) {
    deposits(
      options: {desc: "amount", limit: $limit, offset: $offset}
      height: {is: 6963637}
    ) {
      validator {
        index
        pubkey
      }
      parentRoot
      proof
      proposer {
        index
        pubkey
      }
      signature
      stateRoot
      amount
      blockRoot
      block {
        timestamp {
          time
        }
        height
      }
      eth1 {
        depositRootHash
        depositCount
        blockHash
      }
      depositIndex
    }
  }
}

<!-- Parameters -->

{
  "limit": 10,
  "offset": 0,
  "network": "eth2"
}
```

<details>
<summary>Filtering Deposits</summary>

`options`: This field contains a set of options that can be used to customize the response. For example, you can use the desc option to sort the results in descending order by the amount field. You can also use the limit and offset options to limit the number of results that are returned.

`height`: This field specifies the height of the block that the deposits should be returned for.

`date`: This field specifies the date and time of the deposits that should be returned.

`blockRootHash`: This field specifies the hash of the block root for the deposits that should be returned.

`blockProposerIndex`: This field specifies the index of the block proposer for the deposits that should be returned.

`any`: This field can be used to filter the results by any of the other fields ( OR logic) in the response. 

`time`: This field specifies the time of the deposits that should be returned.

`validatorIndex`: This field specifies the index of the validator for the deposits that should be returned.

</details>


### Fields

`validator`: This field contains information about the validator that made the deposit.

`parentRoot`: This field contains the hash of the parent block's root.

`proof`: This field contains the deposit proof.

`proposer`: This field contains information about the block proposer.

`signature`: This field contains the signature of the deposit.

`stateRoot`: This field contains the hash of the state root at the time the deposit was made.

`amount`: This field contains the amount of ETH that was deposited.

`blockRoot`: This field contains the hash of the block that the deposit was included in.

`block`: This field contains information about the block that the deposit was included in.

`eth1`: This field contains information about the ETH1 deposit that was included in the deposit.

`depositIndex`: This field contains the index of the deposit in the block.

`height`: This field specifies the height of the block that the deposits should be returned for.