# Address

Stellar Address API helps you get information on Address balance in the network. Below are the fields in the API:

```
query ($network: StellarNetwork!) {
  stellar(network: $network) {
    address(
      address: {is: "GDBRKQ43BSDBSCXKPD42RNK3BXDPOYBL6NI6IFSEW2FG7DBNN55435D5"}
    ) {
      address
      annotation
      balance
      tokenBalances {
        assetIssuer
        assetType
        balance
        assetCode
      }
    }
  }
}
{
  "network": "stellar"
}

```

<details>
<summary>Filtering Address</summary>

**address**

    The Stellar address of the account.

</details>

## Fields

- **address**

  The Stellar address of the account.

- **annotation**

  The annotation for the address that contains additional information.

- **balance**

  The balance of the account in XLM. This is the total amount of XLM that the account holds.

- **tokenBalances**

  An array of objects that represent the balances of the account in other assets. Each object has the following fields:

  - **assetIssuer** The Stellar address of the asset issuer.
  - **assetType** The type of the asset. This can be either `native` (for XLM) or `credit_alphanum4` (for other assets).
  - **balance** The balance of the account in the asset.
  - **assetCode** The symb of the asset.
