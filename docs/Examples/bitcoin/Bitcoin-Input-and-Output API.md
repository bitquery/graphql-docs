
# Inputs and Outputs API

## Get the UTXO Input and Outputs for a specific address

  
```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    spendvolumes: inputs(
      inputAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
    ) {
      date {
        date
      }
      any(of: amount)
      block {
        height
      }
      transaction {
        hash
      }
    }
    recievevolumes: outputs(
      outputAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
    ) {
      date {
        date
      }
      any(of: amount)
      transaction {
        hash
      }
      block {
        height
      }
    }
  }
}

```
  

In this query we have used two of API sets named “inputs” and “outputs” for getting the spent and received bitcoin currency for the address “bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd” with filtering out by block, date and it provides the transaction hash, block height and amount.

  

## Getting Miners Block Rewards per Day

  
```
query ($network: BitcoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {

bitcoin(network: $network) {

outputs(

options: {asc: "date.date"}

date: {since: $from, till: $till}

txIndex: {is: 0}

outputDirection: {is: mining}

outputScriptType: {notIn: ["nulldata", "nonstandard"]}

) {

address: outputAddress {

address

annotation

}

date {

date(format: $dateFormat)

}

reward: value

count(uniq: blocks)

}}}  
```
We can get the miner Blovk reward per day by using the outputs API and using the filters of outputDirection set to mining and we get parameters such as miner address, miner rewards in the whole day and blocks they mined.
