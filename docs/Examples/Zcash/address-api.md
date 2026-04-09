---
title: "Zcash API - Address Analysis, Transactions, Balance, Stats"

description: "Get Zcash address details, transaction history, balance, stats, inbound and outbound transactions using Zcash GraphQL API. Analyze Zcash blockchain addresses with real-time data."
---

# Zcash API - Address Analysis, Transactions, Balance, Stats

Analyze Zcash addresses — check balances, pull transaction history, and trace fund flows using the Bitquery GraphQL API.

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
- [ZCash Find Trace of an Address ➤](#zcash-find-trace-of-an-address)

---

## Get Address Details Using Address Stats

Pull a full profile of any Zcash address in one call — balance (in USD or ZEC), total inbound/outbound transactions, unique sender/receiver counts, and first/last active timestamps.

**Variations:** Pass multiple addresses with `{in: [...]}`, request the balance in a different fiat currency, or add `date` filters. See [address stats schema](/docs/Schema/bitcoin/addressstats) for all available fields.

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

Compute the balance of a Zcash address by aggregating all UTXO inputs (funds received) and outputs (funds sent). Returns totals in both ZEC and USD along with the first and last active dates.

**Variations:** Add `date` filters to compute the balance for a specific time window, or swap the address to audit a different wallet. See [query features](/docs/category/query-features) for aggregation helpers.

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

Retrieve all transactions received by a Zcash address, including transaction hashes, block timestamps, input/output values, and fee amounts.

**Variations:** Adjust `limit` for more results, add `date` ranges for a specific period, or sort by `feeValue` to surface high-fee transactions. See [query features](/docs/category/query-features) for sorting and pagination.

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

Retrieve all transactions sent from a Zcash address, including transaction hashes, block timestamps, input/output values, and fee amounts.

**Variations:** Add an `outputAddress` filter to isolate direct transfers between two wallets, or increase `limit` for a full transaction history. See [query features](/docs/category/query-features) for pagination.

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


## ZCash Find Trace of an Address

Follow the flow of funds through a Zcash address using the Coinpath API. Traces inbound hops up to a configurable depth and returns sender/receiver pairs, transaction hashes, amounts, and block context — useful for compliance investigations and fund-source analysis.

**Variations:** Switch `direction` to `outbound` to trace where funds went, increase `depth` for deeper analysis, or add `date` constraints. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for depth and direction details.

[Try Zcash Address Trace Query ➤](https://ide.bitquery.io/ZCash-Find-Trace-of-an-Address)

<details>
  <summary>Click to expand GraphQL query</summary>

```graphql
query MyQuery {
  bitcoin(network: zcash) {
    coinpath(
      options: {limit: 10, desc: "block.height", direction: inbound}
      sender: {is: "t1QYB8sG7UEf74EZRPMo5KwXEiMUD7uCzhu"}
      depth: {lteq: 2}
    ) {
      amount
      currency {
        name
        decimals
      }
      receiver {
        address
        type
      }
      sender {
        address
        type
      }
      transaction {
        hash
        index
        valueOut
        valueIn
      }
      block {
        timestamp {
          time
        }
        height
      }
      depth
      transactions {
        amount
        txHash
      }
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

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [UTXO Input/Output API Examples](https://docs.bitquery.io/v1/docs/Examples/Transactions/input-output-api)
- [Transaction API Examples](https://docs.bitquery.io/v1/docs/Examples/Transactions/transaction-api)
- [Coinpath Money Flow API](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
