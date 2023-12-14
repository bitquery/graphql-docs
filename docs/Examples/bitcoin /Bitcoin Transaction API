
# Transaction API

## Get Latest Transaction

  
```
query ($network: BitcoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {

bitcoin(network: $network) {

transactions(

options: {desc: ["block.height", "index"], limit: $limit, offset: $offset}

time: {since: $from, till: $till}

) {

block {

timestamp {

time(format: "%Y-%m-%d %H:%M:%S")

}

height

}

inputValue

input_value_usd: inputValue(in: USD)

outputCount

inputCount

index

hash

feeValue

fee_value_usd: feeValue(in: USD)
}}}
```
  

The query retrieves the latest 10 transactions from the Bitcoin blockchain, providing details such as the block height, timestamp, currency address and name, fee, group, transaction hash, index, sender's address, subtype, and type of each transaction.

  

## Avg. Fee per transaction for each day

```
query ($network: BitcoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {

bitcoin(network: $network) {

transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {

date: date {

date(format: $dateFormat)

}

count: countBigInt

feeValue

avgFee: feeValue(calculate: average)
}}}
```
  

The query retrieves the latest 7 days average fee per transaction from the Bitcoin blockchain, providing details such as the average fee by per day for a week.

  

## Get Count of Transactions by a Particular Address[​](https://docs.bitquery.io/v1/docs/Examples/algorand/transactions#get-count-of-transactions-by-a-particular-address)

  
```
query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

transactions(

options: {desc: ["block.height"]}

inputAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}

) {

block {

timestamp {

time(format: "%Y-%m-%d %H:%M:%S")

}

height

}

inputValue

hash

feeValue

outputValue

}}}
  ```

The query retrieves the count of all transactions sent by the specified Bitcoin address ("ADDRESS_HERE") from the Bitcoin blockchain.
