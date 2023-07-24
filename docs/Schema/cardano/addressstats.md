# AddressStats

The AddressStats API schema returns information about a wallet on its inflows, outflows and activity. The schema includes the following fields:


```
query MyQuery {
  cardano(network: cardano) {
    addressStats(
      address: {is: "addr1q8wp4tc65hgvvff0lg2dgp8dnd2hy5u4vyz9mgk8qancwmtdf8tun55syv9gvfd0dgdhx02vlyg6dp56up92a5l9qxhs9nhrfy"}
    ) {
      address {
        address
        annotation
        balance
        firstActive {
          time
        }
        inboundTransactions
        inflows
        lastActive {
          time
        }
        outboundTransactions
        outflows
        uniqueDaysWithTransfers
        uniqueReceivers
        uniqueSenders
      }
    }
  }
}
```
<details>
<summary>Filtering AddressStats</summary>

`address`
The address of the wallet

`options`
Additional options for the query, such as sorting and pagination.

</details>
