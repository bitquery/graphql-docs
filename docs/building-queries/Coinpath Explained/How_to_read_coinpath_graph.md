---
sidebar_position: 2
---

# How to Read Coinpath Graph

## Different Components of the Money Flow Graph

Taking the Money Flow as a DAG Multigraph(directed acyclic multi graph)

- **Nodes:** Nodes in a graph represent entities, and in the context of Money Flow, these entities are addresses. Addresses can be sending or receiving tokens.
- **Level:** The level of a node in a DAG Multigraph represents the causal order of the transactions, or how many hops away it is from the current address A. A higher level indicates that the transaction occurred later in time, and therefore requires more hops to reach.
- **Edges:** Edges in a DAG Multigraph represent relationships between nodes. In the context of Money Flow, edges represent money transfers between addresses.
- **Multigraph:** A multigraph is a graph that can have multiple edges between the same pair of nodes. This is necessary for Money Flow because an address can send money to another address in multiple sequential transactions.
- **Edge labels:** Edges in a DAG Multigraph can be labeled with additional information. In the context of Money Flow, edges are labeled with the amount of money transferred, the timestamp of the transaction, and other relevant information.

Take a look at this image below
[Example](/img/diagrams/DAG.png)

- Address 1 on the diagram is the originating address,
- It has 2 outbound transfers to Addresses 2 and one transfer to address 3.
- Address 4 receives money from Address 2 and Address 3, and sends to
  Address 2.

- Note, that Address 2 is present in money flow graph twice,
  on level 1 and level 3.

  ### Reading a Coinpath Graph Example

  Let's take this graph for a wallet [address](https://explorer.bitquery.io/ethereum/address/0xa3612cd978b28a36a906ccebfe0c48c2b170b168/graph)

  [graph](/img/diagrams/moneyflow.png)

  - For simplicity, we have set both inbound and outbound levels to 1, which means we are tracking only the immediate transfers of USDT
  - The address has 3 inbound transfers of values 9.99972k USDT, 21.9968k USDT and 19.4366k USDT
  - There is only 1 outbound transfer of 51.4306k USDT
