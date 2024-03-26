
# Bitcoin Address API

Our Bitcoin Address API provides all the details regarding any address on Cosmos Blockchain.

## Get Balance of Address

```
query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

addressStats(

address: {is: "ADDRESS_HERE"}

) {

address {

balance

}

}

}

}

```

Replace ADDRESS_HERE with the desired Bitcoin address you wish to query. This will return the balance associated with the given Bitcoin address.

  

## Get Balance of Address in USD

  
```
query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

addressStats(address: {is: "ADDRESS_HERE"}) {

address {

balance(in: USD)

}

}

}

}
```
  
  

Replace ADDRESS_HERE with the desired Bitcoin address you want to query. This query will provide the balance of the native currency associated with the given Bitcoin address, displayed in USD. The in operator is utilized to specify the desired currency for balance conversion.

  

## Get Balance of Multiple Addresses[​](https://docs.bitquery.io/v1/docs/Examples/cosmos/address#get-balance-of-multiple-addresses)

  ```

query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

addressStats(address: {in: "[A1,A2]"}) {

address {

balance(in: USD)

}}}}
```
  

Replace A1,A2 with the desired Bitcoin addresses you want to query. The address field fetches essential information for each address, and the balance returns the respective native currency balances. This showcases the ability to pass an array of addresses, allowing you to retrieve balances for multiple addresses at once.

## Get the age of the Address

  
  ```

query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

addressStats(

address: {is: "ADDRESS_HERE"}

) {

address {

firstActive {

year

month

dayOfMonth

}

lastActive {

year

month

dayOfMonth

}}}}}
```
Replace ADDRESS_HERE with the desired Bitcoin Address you want to query. This query fetches the first and last date, time of the transaction of the wallet in different formats you would need.

## Get net inflow and outflow of bitcoin from an address

  
```
query ($network: BitcoinNetwork!) {

bitcoin(network: $network) {

addressStats(

address: {is: "ADDRESS_HERE"}

) {

address {

outflows

inflows

}}}}
```
Replace ADDRESS_HERE with the desired Bitcoin Address you want to query. This query fetches all the transfer related to the wallet and then sums up the outgoing and incoming transactions separately
