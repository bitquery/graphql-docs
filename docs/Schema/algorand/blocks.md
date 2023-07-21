# Blocks

The `blocks` field allows us to retrieve details about blocks from Algorand blockchain.

Here's an example that demonstrates how to fetch information about 10 latest block from Algorand:

```
{
  algorand {
    blocks(
      options: {desc: "timestamp.iso8601", limit: 10}
      date: {after: "2023-07-17T00:00:00Z"}
    ) {
      currentProtocol
      hash
      height
      nextProtocol
      nextProtocolApprovals
      nextProtocolSwitchOn
      nextProtocolVoteBefore
      previousBlockHash
      proposer {
        address
        annotation
      }
      reward
      timestamp {
        iso8601
      }
      txnRoot
      upgradeApprove
      upgradePropose
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

Blocks can be filtered using the following arguments:

- `any`: 
- `blockHash`: Filter by block hash
- `blockReward`: Filter by block reward
- `currentProtocol`: Filter by current protocol of the block
- `date`: Filter by date on which block is produced
- `height`: Filter by height of the block
- `nextProtocol`: Filter by next protocol of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `proposer`: Filter by address block proposer or list
- `time`: Filter by selecting the date in a range, list or just date

</details>

- any
- count
- countBigInt
- currentProtocol
- date
- expression
- frac
- hash
- height
- maximum
- minimum
- nextProtocol
- nextProtocolApprovals
- nextProtocolSwitchOn
- nextProtocolVoteBefore
- previousBlockHash
- proposer
- rate
- reward
- see
- timestamp
- txnRoot
- upgradeApprove
- upgradePropose