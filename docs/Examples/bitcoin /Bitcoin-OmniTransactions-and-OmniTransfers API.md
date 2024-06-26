# Bitcoin OmniTransactions and OmniTransfers API

## Get the Latest Omni Transaction on Bitcoin

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    omniTransactions(
      options: {desc: "block.height", limit: 10}
      date: {after: "2023-11-20"}
    ) {
      block {
        height
      }
      blockHash
      date {
        date
      }
      feeValue(in: USD)
      hash
      index
      txSender
    }
  }
}

```

This query retrieves the latest 10 omnitransaction on the bitcoin blockchain, providing details as such block height, blok time, fee value, transaction hash and the sender of the transaction

## Get all the Omni Transfers for a particular Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    omniTransfers(options: {desc: "block.height"}, txSender: {is: "ADDRESS_HERE"}) {
      block {
        height
      }
      blockHash
      transferFrom
      transferTo
    }
  }
}

```

This query provides all the omni transfers from a particular wallet address which is mentioned as “ADDRESS_HERE” and provides the block hash, transfer initiator and transfer receiver for each transfer
