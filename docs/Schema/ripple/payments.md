---
title: Ripple Payments API
---

<head>
<meta name="title" content="Ripple Payments API"/>
<meta name="description" content="Get information on Ripple payments including issuer, receiver, amount and invoice."/>
<meta name="keywords" content="Ripple api, Ripple python api, Ripple nft api, Ripple scan api, Ripple api, Ripple api docs, Ripple crypto api, Ripple blockchain api, ripple network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple Payments API" />
<meta property="og:description" content="Get information on Ripple payments including issuer, receiver, amount and invoice." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple Payments API" />
<meta property="twitter:description" content="Get information on Ripple payments including issuer, receiver, amount and invoice." />
</head>

Ripple payments API retrieves information on payments made on the Ripple network including sender, receiver, transaction details,amount, issuer and so on. Below are the fields in the schema:

```
query ($network: RippleNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ripple(network: $network) {
    payments(
      options: {desc: "timestamp.time", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      timestamp {
        time
      }
      block
      transaction {
        index
        hash
      }
      receiver {
        address
        annotation
      }
      sender {
        address
        annotation
      }
      amountCurrency {
        symbol
        name
      }
      amount
      amount_usd: amount(in: USD)
      deliverMinAmount
      sendMaxIssuer {
        address
        annotation
      }
      sendMaxCurrency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
      sendMaxAmount
      tag
      invoice
      flags
      deliveredIssuer {
        annotation
        address
      }
      deliveredCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
      deliverMinIssuer {
        annotation
        address
      }
      deliveredAmount
      deliverMinCurrency {
        tokenType
        tokenId
        symbol
        name
        decimals
        address
      }
    }
  }
}
{

  "network": "ripple",
  "from": "2023-08-15T12:44:07.000Z",
  "till": "2023-08-15T13:14:07.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Payments</summary>

- **options** - This field allows you to specify the order of the results and the number of results to return. The `desc` property can be used to specify that the results should be ordered in descending order by timestamp. The `limit` property can be used to specify the maximum number of results to return. The `offset` property can be used to specify the number of results to skip.
- **time** - This field allows you to filter the results by time range. The `since` property can be used to specify the start date and time for the time range filter. The `till` property can be used to specify the end date and time for the time range filter.
- **transactionIndex** - This field allows you to filter the results by transaction index.
- **transactionHash** - This field allows you to filter the results by transaction hash.
- **tag** - This field allows you to filter the results by tag.
- **sendMaxIssuer** - This field allows you to filter the results by the issuer of the maximum amount that the sender can send.
- **sendMaxCurrency** - This field allows you to filter the results by the currency of the maximum amount that the sender can send.
- **sendMaxAmount** - This field allows you to filter the results by the maximum amount that the sender can send.
- **sender** - This field allows you to filter the results by the sender address.
- **receiver** - This field allows you to filter the results by the receiver address.
- **partial** - This field allows you to filter the results to include payments that only partially matched the other filters.
- **invoice** - This field allows you to filter the results by invoice.
- **flags** - This field allows you to filter the results by flags.
- **deliverMinIssuer** - This field allows you to filter the results by the issuer of the minimum amount that was delivered.
- **deliverMinCurrency** - This field allows you to filter the results by the currency of the minimum amount that was delivered.
- **deliverMinAmount** - This field allows you to filter the results by the minimum amount that was delivered.
- **deliveredIssuer** - This field allows you to filter the results by the issuer of the amount that was delivered.
- **deliveredCurrency** - This field allows you to filter the results by the currency of the amount that was delivered.
- **deliveredAmount** - This field allows you to filter the results by the amount that was delivered.
- **date** - This field allows you to filter the results by date. The date can be specified in the format `YYYY-MM-DD`.
- **block** - This field allows you to filter the results by block number.
- **any** - A catch-all field ( OR Logic) that can be used to filter on any other field in the payments API.
- **amountIssuer** - This field allows you to filter the results by the issuer of the amount.
- **amountCurrency** - This field allows you to filter the results by the currency of the amount.
- **amount** - This field allows you to filter the results by the amount.

</details>

## Fields

- `timestamp` - The timestamp for the payment.
- `block` - The block number in which the payment was included.
- `transaction` - The transaction ID for the payment.
- `receiver` - The address that received the payment.
- `sender` - The address that sent the payment.
- `amountCurrency` - The currency of the payment.
- `amount` - The amount of the payment.
- `amount_usd` - The amount of the payment in USD.
- `deliverMinAmount` - The minimum amount that the receiver must accept.
- `sendMaxIssuer` - The issuer of the maximum amount that the sender can send.
- `sendMaxCurrency` - The currency of the maximum amount that the sender can send.
- `sendMaxAmount` - The maximum amount that the sender can send.
- `tag` - The tag for the payment.
- `invoice` - The invoice for the payment.
- `flags` - The flags for the payment. A flag is a decimal denoting the payment type
- `deliveredIssuer` - The issuer of the amount that was delivered.
- `deliveredCurrency` - The currency of the amount that was delivered.
- `deliverMinIssuer` - The issuer of the minimum amount that was delivered.
- `deliveredAmount` - The amount that was delivered.
- `deliverMinCurrency` - The currency of the minimum amount that was delivered.
