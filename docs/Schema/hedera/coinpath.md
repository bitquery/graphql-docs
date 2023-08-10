# Coinpath

The Coinpath API offers information related to the flow of funds on the Hedera Blockchain.

<details>

<summary>Filtering Data</summary>

You can filter the information fetched from the API using the following filters:

- `date`: Filter by the date of the transfer.
- `depth`: Filter by the depth of the transfer.
- `initialAddress`: Filter by the address of the initial transfer.
- `initialDate`: Filter by the date of the initial transfer.
- `initialTime`: Filter by the time of the initial transfer.
- `options`: Filter the returned data by sorting, limiting, and constraining it.
- `receiver`:  Filter by specific receiver(s) or list of receivers.
- `sender`: Filter by specific sender(s) or list of senders.
- `time`: Filter by the time of the transfer.

</details>

### Returned Coinpath Information

- `amount`: Returns the amount of tokens transferred.
- `any`: A field that retrieves results based on any of the other fields.
- `block`: Provides details about the block where the transaction is included, such as block hash and block timestamp.
- `count`: Returns the count of transfers and other metrics.
- `countBigInt`: Returns the count and other metrics as BigInt.
- `depth`: Returns the 1-hop depth of the graph.
- `maximum`: Returns the maximum value for selected measurable fields. 
- `minimum`: Returns the minimum value for selected measurable fields.
- `receiver`:  Provides information about the receiver, including the address and annotation (if available).
- `sender`: Provides information about the sender, including the address and annotation (if available).
- `transactions`: Returns details about transactions, including the amount, height, hash, and more.
