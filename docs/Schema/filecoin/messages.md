# Messages

According to the [official Filecoin documentation](https://docs.filecoin.io/basics/the-blockchain/blocks-and-tipsets/),

> A  _message_  represents communication between two actors, and thus
> changes in network state. The messages are listed in their order of
> appearance, deduplicated and returned in canonical order of execution.
> So, in other words, a block describes all changes to the network state
> in a given epoch.

```
query ($network: FilecoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    messages(
      options: {asc: "date.date", limit: 10}
      date: {since: $from, till: $till}
    ) {
      date: date {
        date(format: $dateFormat)
      }
      sender {
        account
        address
        type
        annotation
      }
      receiver {
        account
        address
        annotation
        type
      }
      signature
      signatureType
      signedHash
    }
  }
}
<!-- Parameters -->

{

  "network": "filecoin",
  "from": "2023-08-02",
  "till": "2023-08-09T23:59:59",
  "dateFormat": "%Y-%m-%d"
}


```

<details><summary>Filtering Messages</summary>

  

**options**

-   `asc`: The order in which the results are returned. Can be either  `"asc"`  (ascending) or  `"desc"`  (descending). 
-   `limit`: The maximum number of results to return. 
-   `offset`: The number of results to skip. The default is 0.

**date**

-   `since`: The start date of the time range. 
-   `till`: The end date of the time range. 

**time:** The time of the message. 

**success:** Whether or not the message was successfully executed.

**sender:** The address of the sender of the message.

**receiver:** The address of the receiver of the message.

**method:** The method of the message.

**index:** The index of the message in the block.

**height:** The block height of the message.

**hash:** The hash of the message.

**any:** A catch-all field that can be used to filter on any other field in the message.

**amount:** The amount of FIL transferred in the message.

</details>

## Fields

-   **date:**  The date and time of the message.
-   **sender:**  The address of the sender of the message.
-   **receiver:**  The address of the receiver of the message.
-   **signature:**  The signature of the message.
-   **signatureType:**  The type of signature used to sign the message.
-   **signedHash:**  The hash of the message that was signed.