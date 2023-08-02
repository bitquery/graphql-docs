# Address API

Our Tron Address API provides all details regarding any address on Tron Blockchain. If given address is a smart contract API also details of that smart contract too.

## Get Address Balance

```
{
    tron {
        address(address: { is: "ADDRESS_HERE"}) {
            address
            annotation
            balance(in: USD)
        }
    }
}
```

Replace `ADDRESS_HERE` with the actual Tron address you want to query. This will return the balance of TRX tokens for given Tron address in USD, along with the address itself and any additional annotation associated with it.

Removing `in` argument will give you balance of TRX tokens for given Tron address.

## Get TRX Token Balance History of Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      balances(currency: {is: "TRX"}) {
        history {
          block
          timestamp
          transferAmount
          value
        }
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will provide the change in balance of the given address for a selected currency. It allows you to obtain the balance history for a particular currency using a single query.

## Get Claimable Rewards of Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      claimableRewards
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will provide the claimable voting reward of the given Tron address.

## Get Smart Contract Details from Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      smartContract {
        contractType
        currency {
          decimals
          name
          symbol
          tokenType
        }
        protocolType
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will fetch basic details of the smart contract, such as contract type and protocol type. If the contract is an ERC-20 token, it will also return additional information like decimals, name, symbol, and token type.