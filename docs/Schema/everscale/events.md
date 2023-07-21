# Events

Everscale Events API provides details on flow of events. Here's the schema with the fields:


```
query ($network: EverscaleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  everscale(network: $network) {
    events(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
    ) {
      timestamp {
        time
      }
      shardedBlock {
        hash
      }
      transactions {
        hash
        aborted
        endStatus
        account
        originalStatus
        type
      }
      messages {
        hash
        value
        typeName
      }
      smartContractMethod {
        name
        signature
      }
      blockShard
      blockHash
      height
      previousBlock
      smartContractAddress {
        address
        annotation
      }
    }
  }
}
<!-- Parameters -->

{
  "limit": 10,
  "offset": 0,
  "address": "-1:3333333333333333333333333333333333333333333333333333333333333333",
  "network": "everscale"
}
```

<details>
<summary>Events Filtering</summary>

`currency` - The currency of the transaction.

`date`-	The date and time of the transaction.

`depth`- The depth of the transaction.

`initialAddress`- The address of the initial account.

`initialDate` - 	The date of the initial transaction.

`initialTime` -	The time of the initial transaction.

`receiver` - The address of the receiver.

`sender` -	The address of the sender.

`time` - The time of the transaction.
</details>