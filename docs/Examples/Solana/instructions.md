# Solana Instructions Data

## Recent Solana Instructions

The below query allows you to retrieve a set of instructions from the Solana blockchain network. These instructions form the building blocks of transactions and smart contracts on the network.
The fields within the instructions `{}` specify the data that the query will return for each instruction. This includes details about the action, block, transaction, program, log, external action, external program, and raw data associated with each instruction.

You can run the query [here](https://ide.bitquery.io/Solana-Instructions)

```
query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!) {
  solana(network: $network) {
    instructions(
      options: {limit: $limit, offset: $offset, desc: "block.timestamp.time"}
      date: {is: "2024-01-01"}
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

This will return the last 100 instructions from the Solana network on a particular day. You can adjust the limit and offset and period parameters as needed to retrieve different sets of instructions.

## Find Transactions based on Program

The below query find all instructions, corresponding transactions and program logs for a specific program on the Solana blockchain.
You can run the query [here](https://ide.bitquery.io/Solana-compactupdatevotestate-Action_2)

```
query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!) {
  solana(network: $network) {
    instructions(
      options: {limit: $limit, offset: $offset, desc: "block.timestamp.time"}
      date: {is: "2024-01-01"}
      parsedActionName: {is: "compactupdatevotestate"}
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
## Recent Solana Transactions

The query provided retrieves the latest transactions on the Solana blockchain following block number `286563743` after the timestamp of `2024-12-18T06:30:00Z`. It details the count of instructions within each transaction, identifies the account that initiated the transaction, and lists the unique signature that distinguishes the transaction. Additionally, it specifies the number of inner instructions, which are instructions nested within other instructions, among other transaction-related information. You can run the query [here](https://ide.bitquery.io/Recent-Solana-Transactions_1)

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
