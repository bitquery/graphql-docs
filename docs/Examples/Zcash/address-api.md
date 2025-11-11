---
title: "Zcash API - Address Analysis, Transactions, Balance, Stats"

description: "Get Zcash address details, transaction history, balance, stats, inbound and outbound transactions using Zcash GraphQL API. Analyze Zcash blockchain addresses with real-time data."
---

# Zcash API - Address Analysis, Transactions, Balance, Stats

Get comprehensive Zcash address details, transaction history, balance, statistics, and analyze inbound/outbound transactions using our Zcash GraphQL API. Access real-time and historical Zcash blockchain data for any address.

The below GraphQL APIs are examples of data points you can get with Bitquery for Zcash addresses.

If you have any question on other data points reach out to [support](https://t.me/Bloxy_info).

:::note

To query data via GraphQL **outside the Bitquery IDE**, you need to generate an API access token.

Follow the steps here to create one: [How to generate Bitquery API token ➤](https://docs.bitquery.io/docs/authorisation/how-to-generate/)

:::

<head>

<title>Zcash API - Address Analysis, Transactions, Balance, Stats</title>

<meta
  name="title"
  content="Zcash API - Address Analysis, Transactions, Balance, Stats"
/>

<meta
  name="description"
  content="Get Zcash address details, transaction history, balance, stats, inbound and outbound transactions using Zcash GraphQL API. Analyze Zcash blockchain addresses with real-time data."
/>

<meta
  name="keywords"
  content="Zcash API,Zcash address API,Zcash blockchain API,Zcash transaction API,Zcash address analysis,Zcash balance API,Zcash address stats,Zcash GraphQL API,Zcash address query,Zcash transaction history,Zcash address explorer,Zcash blockchain data,Zcash address balance,Zcash UTXO API,Zcash address transactions,blockchain API,crypto API,blockchain data,UTXO blockchain,Zcash"
/>

<meta name="robots" content="index, follow" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="language" content="English" />

<meta property="og:type" content="website" />

<meta
  property="og:title"
  content="Zcash API - Address Analysis, Transactions, Balance, Stats"
/>

<meta
  property="og:description"
  content="Get Zcash address details, transaction history, balance, stats, inbound and outbound transactions using Zcash GraphQL API."
/>

<meta property="twitter:card" content="summary_large_image" />

<meta
  property="twitter:title"
  content="Zcash API - Address Analysis, Transactions, Balance, Stats"
/>

<meta
  property="twitter:description"
  content="Get Zcash address details, transaction history, balance, stats, inbound and outbound transactions using Zcash GraphQL API."
/>

</head>

---

### Table of Contents

- [Get Address Details Using Address Stats ➤](#get-address-details-using-address-stats)
- [Balance of an Address using Inputs and Outputs ➤](#balance-of-an-address-using-inputs-and-outputs)
- [Inbound Transaction Details ➤](#inbound-transaction-details)
- [Outbound Transaction Details ➤](#outbound-transaction-details)

---

## Get Address Details Using Address Stats

Get comprehensive statistics for any Zcash address including balance, transaction counts, first and last activity timestamps, and unique sender/receiver counts.

[Try Zcash Address Stats Query ➤](https://ide.bitquery.io/Address-Stats-for-Zcash)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
query MyQuery {
  bitcoin(network: zcash) {
    addressStats(address: { is: "t1UYsZVJkLPeMjxEtACvSxfWuNmddpWfxzs" }) {
      address {
        address
        balance(in: USD)
        firstActive {
          time
        }
        lastActive {
          time
        }
        outboundTransactions
        uniqueDaysWithTransfers
        uniqueReceivers
        uniqueSenders
        inboundTransactions
      }
    }
  }
}
```

</details>

## Balance of an Address using Inputs and Outputs

Calculate the balance of a Zcash address by aggregating all inputs and outputs. This query returns the total value received (inputs) and sent (outputs) for an address, along with transaction counts and date ranges.

[Try Zcash Address Balance Query ➤](https://ide.bitquery.io/Zcash-balance-of-an-address)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
{
  bitcoin(network: zcash) {
    inputs(
      date: { since: null, till: null }
      inputAddress: { is: "t1UYsZVJkLPeMjxEtACvSxfWuNmddpWfxzs" }
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
    outputs(
      date: { since: null, till: null }
      outputAddress: { is: "t1UYsZVJkLPeMjxEtACvSxfWuNmddpWfxzs" }
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}
```

</details>

## Inbound Transaction Details

Get a list of all inbound transactions for a Zcash address, including transaction hashes, timestamps, input/output values, and fees. This query returns transactions where the specified address is the receiver.

[Try Zcash Inbound Transactions Query ➤](https://ide.bitquery.io/Inbound-Transactions-Zcash)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
query MyQuery {
  bitcoin(network: zcash) {
    transactions(
      outputAddress: { is: "t1UYsZVJkLPeMjxEtACvSxfWuNmddpWfxzs" }
      options: { limit: 100 }
    ) {
      block {
        timestamp {
          time
        }
      }
      feeValue
      hash
      index
      outputValue
      inputValue
    }
  }
}
```

</details>

## Outbound Transaction Details

Get a list of all outbound transactions for a Zcash address, including transaction hashes, timestamps, input/output values, and fees. This query returns transactions where the specified address is the sender.

[Try Zcash Outbound Transactions Query ➤](https://ide.bitquery.io/Outbound-Transactions-Zcash)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
query MyQuery {
  bitcoin(network: zcash) {
    transactions(
      inputAddress: { is: "t1UYsZVJkLPeMjxEtACvSxfWuNmddpWfxzs" }
      options: { limit: 100 }
    ) {
      block {
        timestamp {
          time
        }
      }
      feeValue
      hash
      index
      outputValue
      inputValue
    }
  }
}
```

</details>

---

:::tip

**Analyzing Multiple Addresses?**

You can query multiple addresses at once by using `{in: ["address1", "address2", "address3"]}` instead of `{is: "address"}` in the address filter.

:::

:::tip

**Need More Zcash Data?**

Check out our other Zcash examples:

- [UTXO Input/Output API ➤](https://docs.bitquery.io/docs/Examples/Transactions/input-output-api/)
- [Transaction API ➤](https://docs.bitquery.io/docs/Examples/Transactions/transaction-api/)

:::
