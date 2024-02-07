---
sidebar_position: 1
---

# Coinpath for EVM Networks

EVM Chains have balances, associated with accounts, and transfer is a
record of changing these balances of adding / subtracting amounts.

- The algorithm is recursive, meaning that it starts at the initial address(es) and then calculates the money flow for each subsequent level, going deeper and deeper into the graph.
- At each level, the algorithm considers all of the incoming and outgoing transactions for the addresses on that level. It then uses a set of rules to determine how to associate the incoming and outgoing transactions, and how to assign amounts to the money flow edges.
- The algorithm can be implemented in a number of different ways, but the two most common methods are the "last received - first spent" (LRFS) method and the "proportional" method.
- The LRFS method is the simpler of the two methods, and it is the method that is used by the Coinpath API. With the LRFS method, the algorithm always associates incoming transactions with outgoing transactions in the order that they were received.

### Here is a simplified explanation of how the LRFS method works:

1.  The algorithm starts at the initial address(es) and calculates the money flow for each subsequent level, going deeper and deeper into the graph.
2.  At each level, the algorithm considers all of the incoming and outgoing transactions for the addresses on that level.
3.  The algorithm then associates each incoming transaction with the first outgoing transaction that is equal to or less than the amount of the incoming transaction.
4.  If there is more than one outgoing transaction that is equal to or less than the amount of the incoming transaction, the algorithm gives priority to the outgoing transaction that was sent first.
5.  The algorithm repeats steps 3 and 4 until all of the incoming transactions have been associated with outgoing transactions.
