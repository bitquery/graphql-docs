# Calls

In Filecoin, calls are used to invoke methods on actors and transfer FIL. Bitquery's Calls API provides you the following information:

```
query ($network: FilecoinNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    calls(date: {since: $from, till: $till}, options: {limit: 10}) {
      callPath
      callHash
      method {
        id
        name
      }
      messageMethod {
        id
        name
      }
      receiver {
        address
        account
        annotation
        type
      }
      sender {
        account
        address
        annotation
        type
      }
      success
      hash
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

<details><summary>Filtering Calls</summary>

-   **date**

The `date` filter allows you to filter calls by date. The `since` and `till` fields can be used to specify the start and end dates, respectively. 

-   **options**

The `options` filter allows you to specify additional options for the query like  `limit` field .
-   **time**

The `time` filter allows you to filter calls by timestamp.

-   **sender**

The `sender` filter allows you to filter calls by the sender address. 

-   **receiver**

The `receiver` filter allows you to filter calls by the receiver address. 

-   **method**

The `method` filter allows you to filter calls by the method name. 

-   **messageMethod**

The `messageMethod` filter allows you to filter calls by the message method name.

-   **height**

The `height` filter allows you to filter calls by the block height. T

-   **hash**

The `hash` filter allows you to filter calls by the call hash. 

-   **any**

The `any` filter allows you to filter calls by any of the other fields. 

-   **amount**

The `amount` filter allows you to filter calls by the amount of FIL transferred. 

</details>

## Fields


-   `callPath`: The call trace for the message
-   `callHash`: The hash of the call.
-   `method`: The method that was called.
-   `messageMethod`: The method that was called on the message.
-   `receiver`: The address of the actor that received the call.
-   `sender`: The address of the actor that made the call.
-   `success`: Whether the call was successful.
-   `hash`: The hash of the message that was called.