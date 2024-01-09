# Filecoin Storage & Deal Data Examples

In this section we will see some example queries that track different stages in a storae deal flow on Filecoin. For further details on Storage deals on Filecoin, refer to their [official documentation](https://docs.filecoin.io/storage-providers/filecoin-deals/storage-deals).

## PublishStorageDeals

`PublishStorageDeals` message is added to chain when a new set of storage deals are published.
Query to track published storage deals within a specified date range:

```
query ($network: FilecoinNetwork!) {
  filecoin(network: $network) {
    messages(
      any: {receiver: {is: "f05"}}
      method: {is: 4}
      date: {since: "2023-10-10", till: "2023-10-17"}
    ) {
      count
    }
  }
}
{
  "network": "filecoin"
}

```

(Run query here: [PublishStorageDeals](https://ide.bitquery.io/Weekly-PublishStorageDeals-Messages-Count))

## Slashing

Slashing is "a set of penalties which are to be paid by storage providers if they fail to provide sector reliability or decide to voluntarily exit the network".
Below is the query to retrieve storage slashing messages:

```
{
  filecoin(network: filecoin) {
    transfers(
      transferType: {is: burn}
      options: {limit: 10}
      sender: {is: "f0100057"}
    ) {
      transferType
      receiver {
        address
      }
      sender {
        address
      }
      amount
      block {
        timestamp {
          time
        }
      }
      hash
    }
  }
}

```

(Run query here: [Slashings](https://ide.bitquery.io/Slashing-for-a-Provider-on-Filecoin))

## RemoveExpiredAllocations:

The below query helps track messages when expired DataCap allocations are removed and reclaim those DataCap tokens back to the client.

```
{
  filecoin(network: filecoin) {
    transfers(
      transferType: {is: burn}
      options: {limit: 10}
      sender: {is: "f0100057"}
    ) {
      transferType
      receiver {
        address
      }
      sender {
        address
      }
      amount
      block {
        timestamp {
          time
        }
      }
      hash
    }
  }
}

```

(Source: [RemoveExpiredAllocations](https://ide.bitquery.io/RemoveExpiredAllocations-Filecoin))

## Storage Precommit

```
query MyQuery {
  filecoin(network: filecoin) {
    messages(method: {is: 6}, date: {is: "2023-12-01"}, options: {limit: 10}) {
      amount
      sender {
        account
        address
        type
      }
      receiver {
        account
        address
        annotation
        type
      }
      success
      method {
        id
        name
      }
      hash
    }
  }
}

```

(Source: [PreCommit-Storage](https://ide.bitquery.io/PreCommit-Storage-Messages--day))

## Declarefaults

```
query MyQuery {
  filecoin(network: filecoin) {
    messages(receiver: {is: "f0680529"}, options: {limit: 10}, method: {is: 10}) {
      amount
      burned
      hash
      method {
        id
        name
      }
      overEstimationBurn
      refundDecimal
      refund
      receiver {
        account
        address
        type
      }
      returnValue
      sender {
        type
        annotation
        address
        account
      }
      signature
      signedHash
    }
  }
}

```

(Run query here: [DeclareFaults](https://ide.bitquery.io/Filecoin-DeclareFaults-Message))
