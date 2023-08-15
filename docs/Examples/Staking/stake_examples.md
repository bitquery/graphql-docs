## Staking Data Examples

## Get Staking Data for a Stake Address on Cardano

Below is an example to get the staking information for the address using the `staking` function. The `rewardsAmount` field returns the total amount of staking rewards that have been earned by the address. You can access the query [here](https://ide.bitquery.io/Cardano-stake-data-for-a-stake-address)

```
query MyQuery {
  cardano {
    address(
      address: {is: "stake1u9l0967s948z2v3fzwcrff2rudm9ujhvn4zj9j3auxc74tcnsdf7k"}
    ) {
      address {
        address
      }
      staking {
        rewardsAmount
      }
    }
  }
}

```