# MultiversX Transfers API

The MultiversX Transfers API gets information about the sender, receiver, amount, currency, and other details related to transfers on the network. Below are the fields in the schema:

```
query ($network: ElrondNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  elrond(network: $network) {
    transfers(
      options: {desc: "time.time", limit: $limit, offset: $offset}
      time: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      sender {
        address
        annotation
      }
      amount
      currency {
        symbol
      }
      transaction {
        hash
        function
        dataOperation
        data
        receiverShard
        senderShard
        signature
        status
      }
      action
    }
  }
}

{
  "limit": 10,
  "offset": 0,
  "network": "elrond",
  "from": "2023-08-25T12:50:04.000Z",
  "till": "2023-08-25T13:20:04.000Z",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transfers</summary>

- **options** : A set of options that can be used to filter the results.
  - **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **date** : A filter that can be used to select transfers made within a specified date range.

- **txSender** : A filter that can be used to select transfers that were sent to a specific account address.
- **txHash** : A filter that can be used to select transfers with a specific hash.
- **txReceiver** : A filter that can be used to select transfers that were made from a specific account address.
- **time** : A filter that can be used to select transfers created within a specified time range.

- **success** : A filter that can be used to select transfers that were successful or not. The `true` value can be used to select transfers that were successful, while the `false` value can be used to select transfers that were not successful.
- **sender** : A filter that can be used to select transfers that were made by a specific account address. The account address can be used to filter the results.
- **receiver** : A filter that can be used to select transfers that were received by a specific account address. The account address can be used to filter the results.
- **height** : A filter that can be used to select transfers with a specific height. The block number can be used to filter the results.
- **external** : A filter that can be used to select transfers that were external or internal. The `true` value can be used to select transfers that were external, while the `false` value can be used to select transfers that were internal..
- **currency** : A filter that can be used to select transfers that transferred a specific currency. The currency address can be used to filter the results.
- **any** : A catch-all filter ( OR logic) that can be used to select transfers that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.

- **minireceiverShard:** This field allows you to filter the results by the shard where the mini-block was received.
- **minireceiverBlockHash:** This field allows you to filter the results by the hash of the block that received the mini-block.
- **publicKeyBitmap:** This field allows you to filter the results by the public key bitmap of the mini-block. The public key bitmap is a bit array that represents the validators who voted to approve the mini-block.
- **proposer:** This field allows you to filter the results by the address of the block proposer. The block proposer is the validator who submitted the mini-block to the network.
- **previousBlockHash:** This field allows you to filter the results by the hash of the previous block.

</details>

## Fields

- **time:** The time when the transfer was submitted.
- **sender:** The address of the sender of the transfer.
- **amount:** The amount of tokens transferred in the transfer.
- **currency:** The currency of the tokens transferred in the transfer.
- **transaction:** The details of the transfer, including the hash, function, data, and status.
  - `hash`: The hash of the transfer. This is a unique identifier for the transfer.
  - `function`: The function that was called by the transfer, for example `handlePayment`.
  - `dataOperation`: The data operation that was performed by the transfer, for example `ESDTTransfer` .
  - `data`: The data that was passed to the function.
  - `receiverShard`: The shard where the receiver of the transfer resides.
  - `senderShard`: The shard where the sender of the transfer resides.
  - `signature`: The signature of the transfer. This is used to verify the authenticity of the transfer.
  - `status`: The status of the transfer.
- **action:** The type of action performed by the transfer, e.g `fee` transfer .
