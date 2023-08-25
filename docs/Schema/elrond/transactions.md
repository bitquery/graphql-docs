# MultiversX Transaction API

he MultiversX Transactions API allows you to query information about transactions on the MultiversX blockchain. You can use this API to get information about the sender, receiver, amount, currency, and other details of a transaction.
Below are the fields in the schema:

```
query ($network: ElrondNetwork!,$from: ISO8601DateTime, $till: ISO8601DateTime) {
  elrond(network: $network) {
    transactions(
      options: {desc: "time.time", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      senderBlock {
        height
        shard
        round
        previousBlockHash
        hash
        epoch
      }
      index
      hash
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      value
      value_usd: value(in: USD)
      senderShard
      signature
      status
      receiverShard
      fee
      action {
        description
        category
        name
      }
    }
  }
}
{

  "network": "elrond",
  "from": "2023-08-25T12:57:50.000Z",
  "till": "2023-08-25T13:27:50.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transactions</summary>

**options** : A set of options that can be used to filter the results.

- **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
- **limit** : The maximum number of results to return. The default is 10.
- **offset** : The number of results to skip. The default is 0.
- **date** : A filter that can be used to select transactions made within a specified date range.

- **txSender** : A filter that can be used to select transactions that were sent to a specific account address.
- **txHash** : A filter that can be used to select transactions with a specific hash.
- **txReceiver** : A filter that can be used to select transactions that were made from a specific account address.
- **time** : A filter that can be used to select transactions created within a specified time range.

- **success** : A filter that can be used to select transactions that were successful or not. The `true` value can be used to select transactions that were successful, while the `false` value can be used to select transactions that were not successful.
- **sender** : A filter that can be used to select transactions that were made by a specific account address. The account address can be used to filter the results.
- **receiver** : A filter that can be used to select transactions that were received by a specific account address. The account address can be used to filter the results.
- **height** : A filter that can be used to select transactions with a specific height. The block number can be used to filter the results.
- **external** : A filter that can be used to select transactions that were external or internal. The `true` value can be used to select transactions that were external, while the `false` value can be used to select transactions that were internal..
- **currency** : A filter that can be used to select transactions that transferred a specific currency. The currency address can be used to filter the results.
- **any** : A catch-all filter ( OR logic) that can be used to select transactions that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.

- **minireceiverShard:** This field allows you to filter the results by the shard where the mini-block was received.
- **minireceiverBlockHash:** This field allows you to filter the results by the hash of the block that received the mini-block.
- **publicKeyBitmap:** This field allows you to filter the results by the public key bitmap of the mini-block. The public key bitmap is a bit array that represents the validators who voted to approve the mini-block.
- **proposer:** This field allows you to filter the results by the address of the block proposer. The block proposer is the validator who submitted the mini-block to the network.
- **previousBlockHash:** This field allows you to filter the results by the hash of the previous block.

</details>

## Fields

- **time:** The time when the transaction was submitted.
- **senderBlock:** The block that the transaction was included in. This includes the following fields:
  - `height`: The height of the block.
  - `shard`: The shard where the block was mined.
  - `round`: The round of the block.
  - `previousBlockHash`: The hash of the previous block.
  - `hash`: The hash of the block.
  - `epoch`: The epoch of the block.
- **index:** The index of the transaction in the block.
- **hash:** The hash of the transaction. This is a unique identifier for the transaction.
- **sender:** The address of the sender of the transaction. This is a 32-byte hex string.
- **receiver:** The address of the receiver of the transaction. This is a 32-byte hex string.
- **value:** The amount of tokens transferred in the transaction. This is a number.
- **value_usd:** The value of the transaction in USD. This is calculated using the current exchange rate.
- **senderShard:** The shard where the sender of the transaction resides.
- **signature:** The signature of the transaction. This is used to verify the authenticity of the transaction.
- **status:** The status of the transaction.
- **receiverShard:** The shard where the receiver of the transaction resides.
- **fee:** The fee paid for the transaction. This is a number.
- **action:** The type of action performed by the transaction. This includes the following fields:
  - `description`: A description of the action indicating for example if it was a Transfer
  - `category`: The category of the action for example `esdtNft`
