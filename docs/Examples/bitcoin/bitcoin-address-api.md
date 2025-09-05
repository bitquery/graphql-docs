# BTC Balance API

Our Input/Output APIs provides all the details regarding any address on Bitcoin Blockchain. To get the balance simply get all inputs and outputs and subtract (outputs - inputs). If will give you bitcoin balance. You can also get bitcoin balance in USD as we also getting usd values inputs and outputs. Remember we actually multiple usd value of bitcoin at the time of transaction as we also have historical usd price of bitcoin.

## Bitcoin Balance API

### Using Balance Cube

[Run Query](https://ide.bitquery.io/Bitcoin-balance_5)

```
{
  bitcoin(network: bitcoin) {
    addressStats(address: {is: "bc1q6xra3s8c5c4vr8m5f9htkuc3neyn4zykv5seua"}) {
      address {
        balance
        inboundTransactions
        firstActive {
          time
        }
        address
        annotation
        outflows
        lastActive {
          time
        }
        uniqueSenders
        uniqueReceivers
      }
    }
  }
}

```

### Using Inputs and Outputs

```
{
  bitcoin(network: bitcoin) {
    inputs(
      inputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
    outputs(
      outputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}


```

Try this API [here](https://ide.bitquery.io/Bitcoin-balance-using-input-outputs)

## Get Balance of Multiple Addresses

To get addresses of multiple bitcoin addresses just by providing them in the parameters.

```
{
  bitcoin(network: bitcoin) {
    inputs(
      inputAddress: {in: ["bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq", "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"]}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
      inputAddress {
        address
      }
    }
    outputs(
      outputAddress: {in: ["bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq", "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"]}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
      outputAddress {
        address
      }
    }
  }
}


```

Try API for getting balance of multiple bitcoin addresses [here].(https://ide.bitquery.io/BTC-balance-API-for-multiple-addresses)

## Get the age of the Address

To get the age of the bitcoin wallet, you can use the following API.

```

query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    addressStats(address: {is: "ADDRESS_HERE"}) {
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
        }
      }
    }
  }
}

```

Replace ADDRESS_HERE with the desired Bitcoin Address you want to query. This query fetches the first and last date, time of the transaction of the wallet in different formats you would need.

## Get net inflow and outflow of bitcoin from an address

To get inflows and outflow of a bitcoin address, use following API.

```
{
  bitcoin(network: bitcoin) {
    outputs(
      date: {since: "2024-03-19", till: "2024-03-26"}
      outputAddress: {is: "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"}
      options: {desc: ["block.height", "outputIndex"], limit: 10, offset: 0}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
    }
    inputs(
      date: {since: "2024-03-19", till: "2024-03-26"}
      inputAddress: {is: "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"}
      options: {desc: ["block.height", "transaction.index"], limit: 10, offset: 0}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      outputTransaction {
        hash
        index
      }
      transaction {
        hash
        index
      }
      inputIndex
      value
      value_usd: value(in: USD)
    }
  }
}

```

Try this API to get inputs and outputs of a bitcoin address here.[https://ide.bitquery.io/Input-and-outputs-of-a-bitcoin-address]
