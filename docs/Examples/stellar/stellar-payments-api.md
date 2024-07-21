# Stellar Payments API

This API enables you to access and analyze payment transactions on the Stellar network, providing detailed information about each payment, including amounts, currencies, issuers, timestamps, and paths.

## Latest Payments on Stellar

Below is the query to get the latest payment transactions on the Stellar network. This query provides details about the amount transferred, the currency and issuer involved, sender and receiver addresses, and the transaction path.
You can run the query [here](https://ide.bitquery.io/Latest-Payments-on-Stellar)

```
query MyQuery {
  stellar(network: stellar) {
    payments(
      date: {is: "2024-07-17"}
      options: {limit: 100, desc: "timestamp.time"}
    ) {
      amountTo
      amountFrom
      debitedFromValue
      creditedToValue
      currencyTo {
        name
      }
      currencyFrom {
        name
      }
      issuerTo {
        address
      }
      issuerFrom {
        address
      }
      timestamp {
        time
      }
      success
      sender {
        address
      }
      receiver {
        address
      }
      path
    }
  }
}

```

The path field contains an array of assets involved in the payment path. Each asset is represented with its code, type, and issuer. Here's an example of what the path field response might look like:

```
"path": [
  {
    "asset_code": "AQUA",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA"
  },
  {
    "asset_code": "USD",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GB3OE4IBQTYQFZZS5RXQHE4IPQL7ONOFOSAIS2NFRNMJKZEAI3AAUT2A"
  },
  {
    "asset_code": "SGB",
    "asset_type": "credit_alphanum4",
    "asset_issuer": "GAME5YNKHIPRSMN2BI3HLS3OYD4NE6FQ2WKUUJPYYM6GU4MRDUBPHN6B"
  },
  {
    "asset_code": "IBMWorldWire",
    "asset_type": "credit_alphanum12",
    "asset_issuer": "GB6KHHHS52HXXFRG5V5QKF2D2DMYHW6GICHPH3FJGJS5MYIPVXDL74TY"
  }
]

```
