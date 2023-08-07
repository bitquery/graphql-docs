# Algorand Address API

Our Algorand Address API provides all details regarding any address on Algorand Blockchain. If given address is a smart contract, API also provides details of that smart contract too. Below are some examples of `address` API:

## Get Balance of An Address

```
{
  algorand {
    address(
      address: {is: "ADDRESS_HERE"}
    ) {
      address {
        address
      }
      balance
    }
  }
}
```

Replace `ADDRESS_HERE` with the actual Algorand address you want to query. This query will return the balance of the address in the Algorand blockchain along with the address itself. The `is` operator is used to filter for a single specific address, ensuring that only data related to that exact address is returned.

## Get Balance of Multiple Addresses

```
{
  algorand {
    address(address: {in: ["ADDRESS_ONE", "ADDRESS_TWO", "ADDRESS_THREE"]}) {
      address {
        address
      }
      balance
    }
  }
}
```

Replace addresses in the array with the actual Algorand addresses you want to query. This query will retrieve the balances of these addresses from the Algorand blockchain. The `in` operator allows you to filter multiple addresses at once by specifying a list of addresses to retrieve their information.

## Get Bytecode & Source of Smart Contract

```
{
  algorand {
    address(address: {is: "SMART_CONTRACT_ADDRESS"}) {
      smartContract {
        address {
          address
        }
        bytecode
        source
      }
    }
  }
}
```


Replace `SMART_CONTRACT_ADDRESS` with the actual Algorand address of the smart contract you want to query. This will return the bytecode, source code, and the address of the specified smart contract on the Algorand blockchain.