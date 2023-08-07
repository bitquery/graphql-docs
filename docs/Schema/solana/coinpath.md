# Coinpath

The Solana Coinpath API allows you to get the money flow for an address on the Solana blockchain. You can track any levels of fund movement with this API. This is a very useful API for crypto investigations. 

```
query ($network: SolanaNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      currency {
        symbol
        name
        address
        decimals
        tokenId
        tokenType
      }
      depth
      count
      signature {
        value
        hash
      }
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      currency {
        symbol
        name
        address
        decimals
        tokenId
        tokenType
      }
      depth
      count
      signature {
        value
        hash
      }
    }
  }
}

<!-- Parameters -->

{
  "network": "solana",
  "address": "aGhLX8kiZ2sWbcdpqwbGMHL1PLBY8Xe3srCFv8aoFbv",
  "from": "2023-07-31",
  "till": "2023-08-07T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```


<details><summary>Filtering Coinpath</summary>

-   **initialAddress**
    
    The address of the account whose coinpath you want to get. The filter can be used to specify the initial address of the coinpath.
    
-   **depth**
    
    The maximum depth of the coinpath. The filter can be used to specify the maximum depth of the fund flow either inbound and outbound.
    
-   **options**
    
    A set of options that can be used to filter the results. The following options are supported:
    
    -   **direction**
        -   The direction of the coinpath. The supported directions are  `inbound`  and  `outbound`.
    -   **asc**
        -   The order of the coinpath. The supported orders are  `asc`  and  `desc`.
    -   **limitBy**
        -   The limit of the coinpath. The limit is the maximum number of accounts that will be included in the coinpath.
    -   **minimumTxAmount**
        -   The minimum amount of funds that must be transferred in a transaction.
    -   **maximumAddressTxCount**
        -   The maximum number of transactions that can be included for a single address.
    -   **maximumTotalTxCount**
        -   The maximum number of transactions that can be included in the coinpath.
    -   **offset**
        -   The offset of the coinpath. The offset is the number of accounts that will be skipped at the beginning of the coinpath.
    -   **seed**
        -   The seed of the coinpath. The seed is a random number that can be used to randomize the order of the coinpath.
-   **date**
    
    The date range of the coinpath. The filter can be used to specify the start date and end date of the coinpath.
    
-   **receiver**
    
    The address of the receiver of the transfer. The filter can be used to specify the receiver address of the coinpath.
    
-   **time**
    
    The timestamp of the transfer. The filter can be used to specify the timestamp of the coinpath.
    
-   **sender**
    
    The address of the sender of the transfer. The filter can be used to specify the sender address of the coinpath.
    
-   **currency**
    
    The currency of the transfer. The filter can be used to specify the currency of the coinpath.
    
-   **initialTime**
    
    The timestamp of the initial transaction. The filter can be used to specify the timestamp of the initial transaction.
    
-   **initialDate**
    
    The date of the initial transaction. The filter can be used to specify the date of the initial transaction.

</details>

## Fields

`sender`

The address of the sender of the transfer.

`receiver`

The address of the receiver of the transfer.

`amount`

The amount of funds that was transferred.

`currency`

The currency that was transferred.

`depth`

The depth of the connection between the two addresses.


`signature`

The signature of the transfer.