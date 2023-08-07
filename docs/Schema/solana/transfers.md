# Transfers

Below are the fields in the schema

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