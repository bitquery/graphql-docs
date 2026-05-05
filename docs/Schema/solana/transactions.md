---
title: "Solana Transactions API — Signature, Fee, Fee Payer, Signer, Block Context"
description: "Query Solana transactions with Bitquery V1 GraphQL: signature, transaction fee, fee payer, signer, success, instruction counts, and full block context. Built for fee analysis, wallet activity, audit, and reconciliation."
keywords:
  [
    "Solana transactions API",
    "Solana fee payer",
    "Solana signer",
    "Solana failed transactions",
    "Solana audit",
    "Solana fee analysis",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Transactions

The Solana **transactions API** on Bitquery V1 returns indexed transaction-level data on the Solana blockchain: **signature**, **block** context, **transactionFee**, **success**, **feePayer**, **innerInstructionsCount**, **instructionsCount**, **signer**, and **transactionIndex** within the block. It covers the full historical chain and is the reference surface for **fee analysis**, **wallet activity reporting**, **audit and reconciliation**, **operations dashboards**, and **failure analytics**.

For raw parsed instruction data, program IDs, or DEX swap decoding, see the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** (also: [V1 vs V2](/docs/graphql-ide/v1-and-v2)).

```
query ($network: SolanaNetwork!, $date: ISO8601DateTime, $height: Int) {
  solana(network: $network) {
    transactions(options: {limit: 10}, date: {is: $date}, height: {is: $height}) {
      signature
      block {
        timestamp {
          time
        }
        height
        parentSlot
        hash
        previousBlockHash
      }
      transactionFee
      success
      feePayer
      innerInstructionsCount
      instructionsCount
      signer
      transactionIndex
    }
  }
}

{
  "network": "solana",
  "height": 208986228,
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Common use cases

- **Fee analysis and capacity planning** — see [transactions in a date range](/docs/Examples/Solana/transactions-api#date-range).
- **Wallet activity reporting** — fetch [a wallet's signed transactions in a window](/docs/Examples/Solana/transactions-api#wallet-signed-range).
- **Failure analytics and debugging** — filter to [failed transactions](/docs/Examples/Solana/transactions-api#failed-transactions).
- **Sponsored transactions and treasuries** — distinguish [fee payer from signer](/docs/Examples/Solana/transactions-api#fee-payer-vs-signer) for relayer cost attribution.
- **Audit and reconciliation** — pair with [transfers](/docs/Examples/Solana/transfers#parallel-sent-received-range) to attach fee, signer, and success status to every booked movement.

<details>

<summary>Filtering Transactions</summary>

`transactionIndex`: This field allows you to filter transactions by their index in the block.

`transactionFee`: This field allows you to filter transactions by their fee.

`success`: This field allows you to filter transactions by whether or not they were successful.

`signer`: This field allows you to filter transactions by the account that signed the transaction.

`signature`: This field allows you to filter transactions by their signature.

`recentBlockHash`: This field allows you to filter transactions by the hash of the most recent block they were included in.

`previousBlockHash`: This field allows you to filter transactions by the hash of the block that they were included in.

`parentSlot`: This field allows you to filter transactions by the parent slot of the block that they were included in.

`options`: This field allows you to filter returned data by ordering, limiting, and constraining it.

`instructionsCount`: This field allows you to filter transactions by the number of instructions they contain.

`innerInstructionsCount`: This field allows you to filter transactions by the number of inner instructions they contain.

`height`: This field allows you to filter transactions by their height.

`feePayer`: This field allows you to filter transactions by the account that paid the transaction fee.

`fee`: This field allows you to filter transactions by their fee.

`date`: This field allows you to filter transactions by their date.

`blockHash`: This field allows you to filter transactions by their block hash.

`any`: This field allows you to filter transactions by any of the other fields in OR condition.

`accountsCount`: This field allows you to filter transactions by the number of accounts they interact with.

</details>

## Fields

`signature`: The signature of the transaction.

`block`: The block that the transaction was included in.

`transactionFee`: The transaction fee.

`success`: Whether or not the transaction was successful.

`feePayer`: The account that paid the transaction fee.

`innerInstructionsCount`: The number of inner instructions in the transaction.

`instructionsCount`: The total number of instructions in the transaction.

`signer`: The account that signed the transaction.

`transactionIndex`: The index of the transaction in the block.

## Related Resources

- [Solana transactions examples (V1)](/docs/Examples/Solana/transactions-api)
- [Solana transfers schema (V1)](/docs/Schema/solana/transfers)
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [Solana address schema (V1)](/docs/Schema/solana/address)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [Solana Coinpath API (V1)](/docs/Schema/solana/coinpath)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
