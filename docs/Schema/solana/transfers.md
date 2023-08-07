# Transfers

The transfers API allows you to get a information on transfers that have occurred on the Solana blockchain.Below are the fields in the schema:

```
query ($network: SolanaNetwork!, $date: ISO8601DateTime, $height: Int) {
  solana(network: $network) {
    transfers(options: {limit: 10}, date: {is: $date}, height: {is: $height}) {
      block {
        height
        timestamp {
          time
        }
        hash
        previousBlockHash
      }
      transaction {
        signature
        accountsCount
        error
        fee
        feePayer
        innerInstructionsCount
        instructionsCount
        recentBlockHash
        success
        signer
      }
      sender {
        address
        mintAccount
        type
      }
      receiver {
        address
        mintAccount
        type
      }
      currency {
        symbol
        address
        tokenType
        tokenId
        name
        decimals
      }
      amount
      transferType
      instruction {
        callPath
        action {
          name
          type
        }
        externalAction {
          name
          type
        }
        external
        externalProgram {
          id
          name
          parsed
          parsedName
        }
        program {
          id
          name
          parsed
          parsedName
        }
      }
    }
  }
}
<!-- Parameters -->
{
  "network": "solana",
  "height": 209945815,
  "from": "2023-07-31",
  "till": "2023-08-07T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details><summary>Filtering Transfers</summary>

`amount`

The amount of currency that was transferred.

`transferType`

The type of transfer. Some of the supported transfer types are mint, burn, and transfer.

`transactionIndex`

The index of the transaction in the block.

`tokenAccount`

The token account that was transferred.

`time`

The timestamp of the transfer.

`success`

Whether the transfer was successful.

`signer`

The address of the signer of the transaction.

`signature`

The signature of the transaction.

`senderType`

The type of the sender account. The supported sender types are program, user, and unknown.

`senderMintAddress`

The mint address of the sender account.

`senderAddress`

The address of the sender account.

`recentBlockHash`

The hash of the most recent block that the transfer was included in.

`receiverType`

The type of the receiver account. 

`receiverMintAddress`

The mint address of the receiver account.

`receiverAddress`

The address of the receiver account.

`programId`

The program ID of the program that was used to perform the transfer.

`previousBlockHash`

The hash of the previous block.

`parsedType`

The parsed type of the transfer.

`parsedActionName`

The parsed name of the action that was used to perform the transfer.

`parsedProgramName`

The parsed name of the program that was used to perform the transfer.

`parsed`

The parsed transfer object.

`options`

A set of options that can be used to filter the results. 

`limit` The maximum number of transfers to return.

`date` The date of the transfers.


`height`

The height of the transfers. 

`feePayer`

The address of the fee payer.

`externalProgramId`

The external program ID of the program that was used to perform the transfer.

`externalParsedType`

The parsed type of the external transfer.

`externalParsedProgramName`

The parsed name of the external program that was used to perform the transfer.

`externalParsedActionName`

The parsed name of the external action that was used to perform the transfer.

`external`

Whether the transfer was an external transfer.

`date`

The date of the transfers. The date should be in the format YYYY-MM-DD.

`currency`

The currency that was transferred.

`callPath`

The call path of the transfer.

`externalParsed`

The parsed external transfer object.

`blockHash`

The hash of the block that the transfer was included in.

`any`

A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.

</details>

## Fields
