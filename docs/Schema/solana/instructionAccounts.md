# InstructionAccounts

This API returns information about the accounts involved in an instruction. An instruction is the smallest execution logic on Solana. One transaction can have 1 or more instructions. Below are the fields in the API:

```
query ($network: SolanaNetwork!, $signature: String!) {
  solana(network: $network) {
    instructionAccounts(signature: {is: $signature}) {
      instruction {
        action {
          name
        }
        program {
          parsedName
        }
      }
      account {
        index
        name
        owner
        type
      }
      block {
        height
        hash
        previousBlockHash
        timestamp {
          time
        }
      }
      transaction {
        feePayer
        signature
        success
        transactionIndex
      }
    }
  }
}

<!-- Parameters -->

{
  "signature": "19d4fXU8iyMfSkzMadyxzRb9iAkiULA7QYyKPA8rkJP3KPLnhLQLengqj8GpSHVrN4FbCJuFFCgLJc4ifuJjQCs",
  "network": "solana"
}
```


<details><summary>Filtering instructionAccounts</summary>

`account`

This field filters the results by the account that was affected by the instruction. You can filter by the account index, name, owner, or type.

`transactionIndex`

This field filters the results by the transaction index of the instruction.

`time`

This field filters the results by the timestamp of the block in which the instruction was included.

`success`

This field filters the results by the success of the transaction that included the instruction.

`signature`

This field filters the results by the signature of the transaction that included the instruction.

`programId`

This field filters the results by the program ID of the program that was used to execute the instruction.

`previousBlockHash`

This field filters the results by the hash of the previous block.

`parsedType`

This field filters the results by the parsed type of the account that was affected by the instruction.

`parsedProgramName`

This field filters the results by the parsed program name of the program that was used to execute the instruction.

`parsedActionName`

This field filters the results by the parsed action name of the action that was performed by the instruction.

`parsed`

This field filters the results by the parsed instruction object.

`options`

 Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.

`height`

This field filters the results by the block height of the block in which the instruction was included.

`feePayer`

This field filters the results by the address of the account that paid the transaction fee.

`fee`

This field filters the results by the transaction fee.

`external`

This field filters the results by whether the instruction was external.

`date`

This field filters the results by the date of the block in which the instruction was included.

`callPath`

This field filters the results by the call path of the instruction.

`blockHash`

This field filters the results by the hash of the block in which the instruction was included.

`any`

 A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
group: A filter that groups the results by a specific field.

`accountType`

This field filters the results by the type of the account that was affected by the instruction.

`accountOwner`

This field filters the results by the owner of the account that was affected by the instruction.

`accountIndex`

This field filters the results by the index of the account that was affected by the instruction.
</details>

## Fields

-   **instruction**
    
    This object contains information about the instruction itself.
    
    -   **action**
        
        This field contains the name of the action that was performed by the instruction.
        
    -   **program**
        
        This field contains the name of the program that was used to execute the instruction.
        
-   **account**
    
    This object contains information about the account that was affected by the instruction.
    
    -   **index**
        
        This field contains the unique identifier for the account.
        
    -   **name**
        
        This field contains the human-readable name of the account.
        
    -   **owner**
        
        This field contains the address of the account owner.
        
    -   **type**
        
        This field contains the type of the account, such as `tokenAccount` or `programAccount`.
        
-   **block**
    
    This object contains information about the block in which the instruction was included.
    
    -   **height**
        
        This field contains the number of blocks that have been processed since the genesis block.
        
    -   **hash**
        
        This field contains the unique identifier for the block.
        
    -   **previousBlockHash**
        
        This field contains the hash of the previous block.
        
    -   **timestamp**
        
        This field contains the Unix timestamp of the block.
        
-   **transaction**
    
    This object contains information about the transaction that included the instruction.
    
    -   **feePayer**
        
        This field contains the address of the account that paid the transaction fee.
        
    -   **signature**
        
        This field contains the cryptographic signature of the transaction.
        
    -   **success**
        
        This field indicates whether the transaction was successful.
        
    -   **transactionIndex**
        
        This field is a unique identifier for the transaction within the block.