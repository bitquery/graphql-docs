# Transfers

The Transfers API allows you to query information about transfers on the Filecoin blockchain.


```
query ($network: FilecoinNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    transfers(
      options: {desc: "block.height", limit: 10}
      date: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        annotation
        address
      }
      receiver {
        annotation
        address
      }
      currency {
        symbol
        address
        decimals
        name
        tokenId
        tokenType
      }
      amount
      amount_usd: amount(in: USD)
      hash
      transferType
      callHash
      callPath
      messageMethod {
        id
        name
      }
      method {
        name
        id
      }
    }
  }
}

<!-- Parameters -->

{
  "network": "filecoin",
  "from": "2023-08-01",
  "till": "2023-08-08T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transfers</summary>

**options**

-  `asc` or  `desc`: The order in which the results are returned. 
-   `limit`: The maximum number of results to return.
-   `offset`: The number of results to skip.

**date**

-   `since`: The start date of the time range. 
-   `till`: The end date of the time range. 

**transferType**

-   `transferType`: The type of transfer. Can be `burn`, `miner`, `reward` and so on.

**time**

-   `time`: The time of the transfer. The format is  `YYYY-MM-DDTHH:mm:ssZ`.

**sender**

-   `sender`: The address that sent the FIL.

**receiver**

-   `receiver`: The address that received the FIL.

**method**

-   `method`: The method used to transfer the FIL. 

**messageMethod**

-   `messageMethod`: The message method used to transfer the FIL. 

**height**

-   `height`: The block height of the transfer.

**hash**

-   `hash`: The hash of the transfer.

**any**

-   `any`: A catch-all field that can be used to filter on any other field in the transfer.

**amount**

-   `amount`: The amount of FIL transferred.

</details>

## Fields


-   **block**
    -   **timestamp**
        -   The timestamp of the block in which the transfer was included.
    -   **height**
        -   The height of the block in which the transfer was included.
-   **sender**
    -   **annotation**
        -   An optional annotation that was attached to the transfer by the sender.
    -   **address**
        -   The address of the sender of the transfer.
-   **receiver**
    -   **annotation**
        -   An optional annotation that was attached to the transfer by the receiver.
    -   **address**
        -   The address of the receiver of the transfer.
-   **currency**
    -   **symbol**
        -   The symbol of the currency that was transferred.
-   **amount**
    -   The amount of currency that was transferred.
-   **amount_usd**
    -   The amount of the transfer in FIL.
-   **hash**
    -   The hash of the transfer transaction.
-   **method**
    -   The name of the method that was used to perform the transfer.
-   **transferType**
    -  The type of transfer. Can be `burn`, `miner`, `reward` and so on.