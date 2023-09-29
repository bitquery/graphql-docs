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
