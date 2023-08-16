# Transfers

Ripple transfers API helps you get information on transfers in the network. 

For more info on XRP Transfers, [read here](https://xrpl.org/transfer-fees.html)

According to the official documentation:

> The transfer fee does not apply when sending or receiving  _directly_ 
> to and from the issuing account, but it does apply when transferring
> from an  [operational
> address](https://xrpl.org/issuing-and-operational-addresses.html)  to
> another user.
> 
> XRP never has a transfer fee, because it never has an issuer


```
query ($network: RippleNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    transfers(
      options: {desc: "block", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time
      }
      amountFrom
      amount_from_usd: amountFrom(in: USD)
      amountTo
      amount_to_usd: amountTo(in: USD)
      block
      currencyFrom {
        address
        name
        symbol
        tokenId
        tokenType
        decimals
      }
      currencyTo {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      direction
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      transaction {
        hash
        index
        sender
        type
      }
    }
  }
}
<!-- Parameters -->
{
  "network": "ripple",
  "from": "2023-08-16T09:12:01.000Z",
  "till": "2023-08-16T09:42:01.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Transfers</summary>

-   `options`: This object contains options that control the pagination and sorting of the results.
 
-   `time`: This object contains the start and end dates and times of the time range to filter the results by.
-   `sender`: This field filters the results to only include transfers sent by the specified address.
-   `receiver`: This field filters the results to only include transfers received by the specified address.
-   `direction`: This field filters the results to only include transfers in the specified type. Some of the options include `fee`, `trade` and `payment`
 -   `currencyToSymbol`: This field filters the results to only include transfers to the specified currency symbol.
-   `date`: This field filters the results to only include transfers that occurred on the specified date. 
-   `block`: This field filters the results to only include transfers that occurred in the specified block.
-   `currencyFromSymbol`: This field filters the results to only include transfers from the specified currency symbol.
-   `any`: This field can be used to filter the results by any of the other fields in the response.

</details>

## Fields

-   `timestamp`  (object): The timestamp of the transfer.
    -   `time`: The timestamp in ISO 8601 format.
-   `amountFrom`: The amount of the transfer from the sender.
-   `amountFromUsd`: The amount of the transfer from the sender in USD.
-   `amountTo`: The amount of the transfer to the receiver.
-   `amountToUsd`: The amount of the transfer to the receiver in USD.
-   `block`: The block number in which the transfer was included.
-   `currencyFrom`: The currency that was transferred from.
    -   `address`: The address of the currency.
    -   `name`: The name of the currency.
    -   `symbol`: The symbol of the currency.
    -   `tokenId`: The token ID of the currency (if applicable).
    -   `tokenType`: The token type of the currency (if applicable).
    -   `decimals`: The number of decimal places in the currency.
-   `currencyTo`: The currency that was transferred to.
    -   `address`: The address of the currency.
    -   `decimals`: The number of decimal places in the currency.
    -   `name`: The name of the currency.
    -   `symbol`: The symbol of the currency.
    -   `tokenId`: The token ID of the currency (if applicable).
    -   `tokenType`: The token type of the currency (if applicable).
-   `direction`: The direction of the transfer. Valid values are  `send`  and  `receive`.
-   `receiver`: The address of the receiver.
-   `sender`: The address of the sender.
-   `transaction`: The transaction ID of the transfer.