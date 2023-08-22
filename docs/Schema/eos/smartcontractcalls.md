# EOS Smart Contract Calls API

According to the official documentation, EOS smart contracts include definition for

> consensus, fee schedules, account creation and modification, token
> economics, block producer registration, voting, multi-sig, etc.

Bitquery's EOS Smart Contract Calls API captures this information. Below are the fields in this schema:

```
query ( $date: ISO8601DateTime) {
  eos {
    smartContractCalls(
      options: {desc: "block.height", limit: 10, offset: 0}
      date: {is: $date}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: txFrom {
        address
      }
      smartContract {
        address {
          address
          annotation
        }
        contractType
        protocolType
      }
      smartContractMethod {
        name
        signatureHash
      }
      txHash
      actors
      console
      callDepth
      errorCode
      external
      permissions
      receivers
      scheduled
    }
  }
}

{
  "date": "2023-08-22",
  "dateFormat": "%Y-%m-%d"
}

```

<details>

<summary>Filtering Smart Contract Calls</summary>

-   **options**  : A set of options that can be used to filter the results.

    -   **asc** or **desc**  : The order of the results, either "asc" (ascending) or "desc" (descending).
    -   **limit**  : The maximum number of results to return. The default is 10.
    -   **offset**  : The number of results to skip. The default is 0.
-   **date**  : A filter that can be used to select calls made within a specified date range.
-   **txTo**  : A filter that can be used to select calls that were sent to a specific account address.
-   **txHash**  : A filter that can be used to select calls with a specific hash.
-   **txFrom**  : A filter that can be used to select calls that were made from a specific account address.
-   **time**  : A filter that can be used to select calls created within a specified time range.
    
-   **success**  : A filter that can be used to select calls that were successful or not.
-   **smartContractMethod**  : A filter that can be used to select calls that called a specific method in a smart contract.
-   **smartContractAddress**  : A filter that can be used to select calls that called a specific smart contract.
-   **scheduled**  : A filter that can be used to select calls that were scheduled or not.
-   **any**  : A catch-all filter ( OR logic) that can be used to select calls that match any of the other filters.
-   **height**  : A filter that can be used to select calls with a specific height.
-   **external**  : A filter that can be used to select calls that were external or internal.

</details>

## Fields

- **block** : The block that the call was made in.
  - **timestamp** : The timestamp of the block, in ISO 8601 format.
  - **height** : The block number.
- **address** : The address that made the call.
- **smartContract** : The smart contract that was called.
  - **address** : The address of the smart contract.
  - **contractType** : The type of the smart contract.
  - **protocolType** : The protocol type of the smart contract.
- **smartContractMethod** : The method that was called in the smart contract.
  - **name** : The name of the method.
  - **signatureHash** : The signature hash of the method.
- **txHash** : The hash of the transaction that made the call.
- **actors** : The actors involved in the call.
- **console** : The console output of the call.
- **callDepth** : The call depth of the call.
- **errorCode** : The error code of the call, if any.
- **external** : Whether the call was external or internal.
- **permissions** : Whether the permissions were `active` or` inactive` Permissions for an account are used to authorize actions and transactions to other accounts.
- **receivers** : The receivers of the call.
- **scheduled** : `true` or `false` value as to whether the call was scheduled or not.
