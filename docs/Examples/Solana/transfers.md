# Solana Transfers API

This API provides near real-time and historical data. For streaming real-time data, check our [Solana Streaming API docs](https://docs.bitquery.io/docs/examples/Solana/)

## Recent transfers to/from a wallet address

This below query will get you the recent 100 transfers to/from a wallet address. We have used `any` keyword to use this OR functionality.
You can run the query [here](https://ide.bitquery.io/Transfers-of-an-address_1)

```
query MyQuery {
  solana {
    transfers(
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Historical Inflow/Outflow from a Wallet

This query retrieves historical transfer data for a specific wallet address, showing both incoming (inflow) and outgoing (outflow) transactions at a particular block height.

You can run the query [here](https://ide.bitquery.io/outflowinflow-of-an-address-on-Solana)

```
{
  solana(network: solana) {
    outflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      senderAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }

    inflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      receiverAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }
  }
}


```

## Transfers of a wallet for a specific timeperiod

Below API can give you transfers of a wallet for a specific timeperiod. Here, we have used the wallet address `7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD` and timperiod is mentioned in `since` and `till` fields. You can change these values according to you and test the API for different wallet address and different timeperiod altogether.
Test the API [here](https://ide.bitquery.io/Transfers-of-a-wallet-for-a-specific-timeperiod).

```
query MyQuery {
  solana {
    transfers(
      time:{since:"2025-07-24T14:00:00Z" till:"2025-07-24T16:00:00Z"}
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Top Transfers of a token

This query retrieves the top 10 transfers for this token `4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R`. Try the query [here](https://ide.bitquery.io/v1-top-transfers-of-a-solana-token_1).

```
query MyQuery {
  solana {
    transfers(
      currency: {is: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"}
      options: {desc: "amount", limit: 10}
      date: {after: "2025-02-10"}
    ) {
      amount
      block {
        height
        hash
      }
      currency {
        symbol
        name
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```

## Historical Balance of a Wallet Address using transfers

You can use the below query to calculate the balance of an address by subtracting all the outgoing transfer amount in USD from incoming transfers amount in USD. Test the query [here](https://ide.bitquery.io/solana-money-sent-and-recieved-by-an-address_5)

```
{
  solana {
    sent: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      senderAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
    recieved: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      receiverAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
  }
}

```

## Get Transaction details for a specific signature

Below API can be used to give transfer details for a specific signature. Here we have queried for transaction signature `4p2Qbd3vH5xXDHLQRfEivHjAcoWTxad5ZcWjZmiHVtf1CnnvQC28Z2sLXgb8Bo7ivjNVmwYAE34phFPgcvKVph6k`, you can look up the transfers contained by any other signature as well. Test the query [here](https://ide.bitquery.io/get-historical-transaction-detail-on-Solana).

```
query MyQuery {
  solana(network: solana) {
    transfers(
      date: {is: "2025-07-19"}
      options: {limit: 1000, desc: ["transaction.transactionIndex", "block.height"]}
      signature: {is: "4p2Qbd3vH5xXDHLQRfEivHjAcoWTxad5ZcWjZmiHVtf1CnnvQC28Z2sLXgb8Bo7ivjNVmwYAE34phFPgcvKVph6k"}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```

## Get transfers data for a specific time period

Below API can give you transfers data for a specific time period, you can change the UTC timestmaps mentioned in `where` clause as per you needs. But try to keep the duration small as Solana processes lot of transfers and the API might throw `memory limit exceeded error`. Test the API [here](https://ide.bitquery.io/get-transfers-data-for-a-particular-time-period).

```
query MyQuery {
  solana(network: solana) {
    transfers(
      time: {since: "2025-07-19T01:00:00Z", till: "2025-07-19T01:15:00Z"}
      options: {limit: 10, desc: ["transaction.transactionIndex", "block.height"]}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```
