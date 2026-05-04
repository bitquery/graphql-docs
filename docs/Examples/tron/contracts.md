# Contracts API

Our Tron Contracts API provides detailed information about smart contracts (TRC10, TRC20, TRC721) deployed on the Tron blockchain.

## Get Newly Deployed TRC20 Contracts on Tron

Track new TRC20 contract deployments on Tron in real time. This is the most common "new tokens on Tron" query and powers token-discovery dashboards and trading bots.

Run the query [here](https://ide.bitquery.io/new-contract-creations).

```graphql
{
  tron(network: tron) {
    smartContractCalls(
      smartContractMethod: {is: "Contract Creation"}
      date: {after: "2026-05-01"}
      options: {desc: "block.timestamp.iso8601", limit: 25}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      txHash
      caller {
        address
      }
      smartContract {
        address {
          address
        }
        contractType
        protocolType
        currency {
          symbol
          name
          tokenType
          decimals
        }
      }
    }
  }
}
```

Returns the latest 25 contract creations on Tron with the deployer (caller) address, the new contract address, and when the contract is a TRC20, the API also returns its symbol, name, decimals, and token type.

## Get Top Tron Contracts by Daily Activity

Rank Tron smart contracts by how many calls they receive.

Run the query [here](https://ide.bitquery.io/top-tron-contracts-by-activity).

```graphql
{
  tron(network: tron) {
    smartContractCalls(
      date: {since: "2024-01-01", till: "2024-01-31"}
      options: {desc: "count", limit: 25}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
      }
      calls: count
      unique_callers: count(uniq: callers)
      total_energy: energyUsageTotal(calculate: sum)
    }
  }
}
```

Returns the top 25 most-called Tron contracts in January 2024, with unique caller count and total energy consumed — the data shape used in "Tron dApp leaderboard" widgets.

## Find All Contracts Deployed by an Address

Pull every contract deployed by a specific Tron deployer address. This is useful for due-diligence on token issuers and tracking serial contract deployers.

Run the query [here](https://ide.bitquery.io/contracts-created-by-an-address).

```graphql
{
  tron(network: tron) {
    smartContractCalls(
      caller: {is: "DEPLOYER_ADDRESS_HERE"}
      smartContractMethod: {is: "Contract Creation"}
      options: {desc: "block.timestamp.iso8601", limit: 50}
      date: {since: "2026-05-01"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      smartContract {
        address {
          address
        }
        contractType
        currency {
          symbol
          name
        }
      }
      txHash
    }
  }
}
```

Replace `DEPLOYER_ADDRESS_HERE` with the deployer wallet to list every contract that address has created on Tron.

