# Address

The Address API provides basic information about addresses on the Hedera Blockchain. It offers information about various aspects, including the balance of the native currency associated with the address, any available annotations, and more.

Here's an example that shows how to retrieve the balance of an address:

```
{
  hedera {
    address(address: {is: "0x0000000000000000000000000000000000000c9d"}) {
      address
      balance
    }
  }
}
```

<details>
<summary>Fitlering Address</summary>

Use the `address` field to filter by a specific address or a list of addresses, you can use both EVM address format and compact format.

</details>

### Returned Address Information

- `address`: provides the address itself
- `annotation`: offers any available annotation associated with the address
- `balance`: displays the balance of the native currency
- `tokenBalances`: shows balances of all tokens, both fungible and non-fungible