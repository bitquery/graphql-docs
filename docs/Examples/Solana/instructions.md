---
title: "Solana Instructions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana instructions. Get program instructions, actions, logs, and transaction context."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

# Solana Instructions Data

The Solana Instructions API returns parsed instruction-level data including program names, action types, execution logs, and raw instruction data. Instructions are the atomic operations that make up Solana transactions.

## Recent Solana Instructions with Actions, Programs, and Logs

Fetch the latest Solana instructions with full details — action name/type, program info, execution logs, external program calls, and raw instruction data. Uses query variables for `limit`, `offset`, and date filtering. [Run query](https://ide.bitquery.io/Solana-Instructions_6).

**Variations:** Add `parsedActionName` to filter by specific actions. Use `program: {id: {is: "..."}}` to filter by program. Adjust `date` for different periods. Change `limit` and `offset` for pagination.

```
query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!) {
  solana(network: $network) {
    instructions(
      options: {limit: $limit, offset: $offset, desc: "block.timestamp.time"}
      date: {since: "2024-12-19"}
    ) {
      action {
        name
        type
      }
      block {
        hash
        timestamp {
          time
        }
      }
      transaction {
        signature
        success
      }
      program {
        name
        parsed
        parsedName
        id
      }
      log {
        consumed
        instruction
        logs
        result
        totalGas
      }
      externalAction {
        name
        type
      }
      externalProgram {
        id
        parsed
        name
        parsedName
      }
      data {
        hex
        base58
      }
    }
  }
}
{
  "limit": 100,
  "offset": 0,
  "network": "solana"
}

```

## Find Solana Instructions by Parsed Action Name

Filter instructions by a specific parsed action name (e.g., `compactupdatevotestate`) to find all occurrences of that operation across the network. Returns full instruction context including logs and program details. [Run query](https://ide.bitquery.io/Solana-compactupdatevotestate-Action_4).

**Variations:** Change `parsedActionName` to any Solana action (`transfer`, `mintTo`, `createAccount`, etc.). Add `program: {id: {is: "..."}}` to narrow by program. Use `transaction: {signature: {is: "..."}}` for a specific transaction.

```
query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!) {
  solana(network: $network) {
    instructions(
      options: {limit: $limit, offset: $offset, desc: "block.height"}
      date: {since: "2024-12-19"}
      parsedActionName: {is: "compactupdatevotestate"}
    ) {
      action {
        name
        type
      }
      block {
        height
        hash
        timestamp {
          time
        }
      }
      transaction {
        signature
        success
      }
      program {
        name
        parsed
        parsedName
        id
      }
      log {
        consumed
        instruction
        logs
        result
        totalGas
      }
      externalAction {
        name
        type
      }
      externalProgram {
        id
        parsed
        name
        parsedName
      }
      data {
        hex
        base58
      }
    }
  }
}

{
  "limit": 100,
  "offset": 0,
  "network": "solana"
}
```
## Recent Solana Transactions After Block Height with Fee and Signer

Get recent Solana transactions after a specific block height and timestamp. Returns fee details, instruction counts (including inner instructions), signer, and success status. [Run query](https://ide.bitquery.io/Recent-Solana-Transactions_1).

**Variations:** Adjust `height: {gteq: N}` and the `time` filter for different starting points. Add `signer: {is: "..."}` for a specific wallet. Use `success: false` to find failed transactions.

```
query MyQuery {
  solana(network: solana) {
    transactions(
      options: {limit: 10, desc: "block.timestamp.time"}
      height: {gteq: 286563743}
    ) {
      block(time: {after: "2024-12-18T06:30:00Z"}) {
        timestamp {
          time
        }
        hash
      }
      transactionFee
      transactionIndex
      signature
      success
      signer
      feePayer
      accountsCount
      instructionsCount
      innerInstructionsCount
    }
  }
}

```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transactions examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transactions-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
