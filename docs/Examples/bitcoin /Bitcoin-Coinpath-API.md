# Coinpath API

Our Bitcoin Coinpath API provides comprehensive information about money flow of addresses on the Cosmos blockchain.

## Explore Destination of Funds from a Specific Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    coinpath(
      initialAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
      date: {after: "2023-10-10"}
      options: {limit: 10, desc: "block.height"}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
    }
  }
}

```

This query retrieves a list of coinpath transactions initiated from a specific initial address (bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd) after a certain date (2023-10-10). The query limits the results to 10 transactions and orders them by timestamp in descending order. For each transaction, it provides details such as the transferred amount in USD, block height, timestamp, currency information, sender and receiver addresses, transaction hash, and value.

## Get Money Flow With Particular Receiver Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    coinpath(
      date: {after: "2023-10-10"}
      options: {limit: 10, desc: "block.height"}
      receiver: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
    }
  }
}

```

This query allows you to retrieve the money flow details where the receiver is a particular address (bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd) after October 10, 2023. The results are ordered in descending order based on block heights and are limited to the top 10 entries.

## Investigate Relationship Between Two Addresses

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    coinpath(
      date: {after: "2023-10-10"}
      options: {limit: 10, desc: "block.height"}
      receiver: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
      initialAddress: {is: "bc1pu349c0fvmqnv5s0aj3aracrsvn696hzhuyyukn6r5c9h03y88plql53h5h"}
    ) {
      amount(in: USD)
      block {
        height
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        hash
      }
    }
  }
}

```

This query explores the relationship between two specific addresses (initialAddress and receiver) within the context of transactions that occurred after October 10, 2023. It retrieves a maximum of 10 transactions initiated from the initial address and received by the specified receiver.

For each transaction, the query provides details like the transferred amount in USD, block height, timestamp, currency information, sender and receiver addresses, transaction hash, and value. By analyzing these transactions, users can gain insights into the flow of funds between the two addresses and understand their financial interactions.
