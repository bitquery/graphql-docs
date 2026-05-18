---
title: "Algorand Address API Examples"
description: "Example GraphQL queries for Algorand addresses. Get balances, assets, and smart contract bytecode."
keywords: [Algorand API examples, Algorand GraphQL queries, Bitquery]
---

# Algorand Address API

Look up Algorand address balances, assets, and smart contract details using the Address API.

## Get Algorand Address Balance

Fetch the native ALGO balance for a specific Algorand address. Replace `ADDRESS_HERE` with your target address.

**Variations:** Use the `in` operator to query multiple addresses, or add a `date` filter. See [query features](/docs/category/query-features) for more options.

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

## Get Algorand Balances for Multiple Addresses

Retrieve ALGO balances for multiple Algorand addresses in a single query. Replace the placeholder addresses with your targets.

**Variations:** Switch to the `is` operator for a single address lookup, or combine with `options` for sorting and pagination. See [query features](/docs/category/query-features) for details.

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

## Get Algorand Smart Contract Bytecode and Source

Retrieve the bytecode and source code of an Algorand smart contract. Replace `SMART_CONTRACT_ADDRESS` with the contract address.

**Variations:** Add the `balance` field to also fetch the contract's ALGO holdings. See [query features](/docs/category/query-features) for filtering options.

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

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand coinpath examples](https://docs.bitquery.io/v1/docs/Examples/algorand/coinpath)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)