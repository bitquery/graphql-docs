---
sidebar_position: 2
---

# Fields

Each method for every API will have different set of fields as filters. For example, the blocks method will have the following fields as filters:

 - date: The date of the block. The since and till options can be used
   to filter the results by date.
   
 - time: The time of the block. The before option can be used to filter
   the results by time.
   
  
 - size: The size of the block in bytes. The gteq option can be used to
   filter the results by size.
   
   
 - miner: The miner who mined the block.
   
   
 - height: The height of the block in the blockchain.
  
 - blockReward: The block reward for the block.
   
   
 - blockHash: The hash of the block.

Here's another example of fields available for filtering in `transactions` method:

![tx](/img/ide/transactions.png)

You can use any combination of fields to filter your results if they contradict each other.


## Using maker and taker in your query

