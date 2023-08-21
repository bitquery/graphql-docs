# Coinpath

The Coinpath API allows you to get the money flow for an address on the Stellar blockchain. You can track any levels of fund movement with this API. This is a very useful API for crypto investigations. 

```
query ($network: StellarNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $currency: String!) {
  stellar(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 1, offset: 0}}
      date: {since: $from, till: $till}
      currencyTo: {is: $currency}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount: amountTo
      currency: currencyTo {
        symbol
        name
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 1, offset: 0}}
      date: {since: $from, till: $till}
      currencyFrom: {is: $currency}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount: amountFrom
      currency: currencyFrom {
        symbol
        name
      }
      depth
      count
    }
  }
}
{
  "network": "stellar",
  "address": "GCANO3ORT3BQ5KCUHWD7Z4VY7AWWY544VKOQTSXYHLCZLHUCD6CIGOUE",
  "currency": "Lumen",
  "from": "2023-08-14",
  "till": "2023-08-21T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Coinpath</summary>

- **initialAddress**

  The address that is the starting point for the coinpath. This is the address that you are interested in tracing the funds to or from. The `is` operator is used to specify that the initial address must be equal to the value of the `$address` variable.

- **depth**

  The maximum depth of the coinpath. This specifies the number of hops that the coinpath should follow.

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **direction** - The direction of the coinpath. This can be either `inbound` or `outbound`.
  - **asc** or **desc**- The order in which the results should be returned.
  - **limitBy** - This object specifies the limits for the results. The following fields are supported:
    - **each** - The maximum number of results for each depth.
    - **limit** - The maximum number of total results.
    - **offset** - The offset from the first result to return.

- **date**

  This object specifies the date range for the query.

- **currencyTo**

  The asset that was received by the receiver's account in native asset (XLM) .

- **currencyFrom**

  The asset that was sent from the sender's account in native asset (XLM)

- **initialDate**

  The date on which the initial transaction was created.

- **initialTime**

  The time at which the initial transaction was created.

- **receiver**

  The account that received the funds.

- **time**

  The time at which the transaction was created.

- **sender**

  The account that sent the funds.

</details>

## Fields

- **initialAddress**

  The address that is the starting point for the coinpath.

- **depth**

  The maximum depth of the coinpath. This specifies the number of hops that the coinpath should follow.

- **options**

  This object specifies the options for the query. The following fields are supported:

  - **direction** - The direction of the coinpath. This can be either `inbound` or `outbound`.
  - **asc** or **desc**- The order in which the results should be returned.
  - **limitBy** - This object specifies the limits for the results. The following fields are supported:
    - **each** - The maximum number of results for each of the limitBy field.
    - **limit** - The maximum number of total results.
    - **offset** - The offset from the first result to return.

- **date**

  This object specifies the date range for the query.

- **currencyTo**

  The asset that was received by the receiver's account in native asset (XLM).

- **currencyFrom**

  The asset that was sent from the sender's account in native asset (XLM)
