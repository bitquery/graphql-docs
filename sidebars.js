// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "GraphQL IDE",
      link: {
        type: "generated-index",
        title: "GraphQL IDE",
        description: "Explore functionalities and usage of the GraphQL IDE.",
      },
      items: [
        "graphql-ide/how-to-start",
        "graphql-ide/ide",
        "graphql-ide/account",
        "graphql-ide/apikey",
        "graphql-ide/errors",
        "graphql-ide/query-builder",
        "graphql-ide/points",
        "graphql-ide/supported-blockchains",
        "graphql-ide/use-it-in-your-application",
        "graphql-ide/v1-and-v2",
      ],
    },
    {
      type: "category",
      label: "Building Queries",
      link: {
        type: "generated-index",
        title: "Building Queries",
        description: "Learn to build and structure queries effectively.",
      },
      items: [
        "building-queries/basic-structure-of-a-query",
        "building-queries/network-selection",
        "building-queries/FAQ",
        {
          type: "category",
          label: "Coinpath Explained",
          items: [
            "building-queries/Coinpath-Explained/Overview",
            {
              type: "category",
              label: "Fund Tracking",
              items: [
                "building-queries/Coinpath-Explained/Fund Tracking/EVM_Chains",
                "building-queries/Coinpath-Explained/Fund Tracking/Ledger_Based_Chains",
                "building-queries/Coinpath-Explained/Fund Tracking/UTXO_Chains",
              ],
            },
            "building-queries/Coinpath-Explained/How_to_read_coinpath_graph",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Schema",
      link: {
        type: "generated-index",
        title: "Blockchain Schema Documentation",
        description: "Comprehensive blockchain schema references.",
      },
      items: [
        {
          type: "category",
          label: "Avalanche",
          items: [
            "Schema/Avalanche/address",
            "Schema/Avalanche/arguments",
            "Schema/Avalanche/blocks",
            "Schema/Avalanche/calls",
            "Schema/Avalanche/coinpath",
            "Schema/Avalanche/overview",
            "Schema/Avalanche/transactions",
            "Schema/Avalanche/transfers",
          ],
        },
        {
          type: "category",
          label: "Cronos",
          items: [
            "Schema/Cronos/activeaddresses",
            "Schema/Cronos/address",
            "Schema/Cronos/addresstats",
            "Schema/Cronos/arguments",
            "Schema/Cronos/blocks",
            "Schema/Cronos/coinpath",
            "Schema/Cronos/dextrades",
            "Schema/Cronos/overview",
            "Schema/Cronos/references",
            "Schema/Cronos/smartcontractcalls",
            "Schema/Cronos/smartcontractevents",
            "Schema/Cronos/transactions",
            "Schema/Cronos/transfers",
          ],
        },
        // Add other blockchains (Dash, Dogecoin, etc.) following a similar structure
      ],
    },
    {
      type: "category",
      label: "Examples",
      link: {
        type: "generated-index",
        title: "API Examples",
        description: "Real-world examples for blockchain APIs.",
      },
      items: [
        {
          type: "category",
          label: "L1 Chains",
          items: [
            {
              type: "category",
              label: "Ethereum",
              items: [
                "Examples/activeAddresses/blockchain-active-addresses-api",
                "Examples/dexTrades/dex-pool-api",
                "Examples/dexTrades/dex-trading-data-api",
                "Examples/dexTrades/ohlc",
                "Examples/Transactions/Trace_API",
              ],
            },
            {
              type: "category",
              label: "Algorand",
              items: [
                "Examples/algorand/address",
                "Examples/algorand/arguments",
                "Examples/algorand/blocks",
                "Examples/algorand/coinpath",
                "Examples/algorand/smartContractCalls",
                "Examples/algorand/transactions",
                "Examples/algorand/transfers",
              ],
            },
            {
              type: "category",
              label: "Avalanche",
              items: [
                "Examples/avalanche/avax-trades-api",
              ],
            },
            {
              type: "category",
              label: "Bitcoin",
              items: [
                "Examples/bitcoin/Bitcoin-Blocks-API",
                "Examples/bitcoin/Bitcoin-Coinpath-API",
                "Examples/bitcoin/Bitcoin-Input-and-Output API",
                "Examples/bitcoin/Bitcoin-OmniTransactions-and-OmniTransfers API",
                "Examples/bitcoin/Bitcoin-Transaction-API",
                "Examples/bitcoin/bitcoin-address-api",
              ],
            },
            {
              type: "category",
              label: "Cosmos",
              items: [
                "Examples/cosmos/address",
                "Examples/cosmos/attributes",
                "Examples/cosmos/blocks",
                "Examples/cosmos/coinpath",
                "Examples/cosmos/messages",
                "Examples/cosmos/transactions",
                "Examples/cosmos/transfers",
              ],
            },
            {
              type: "category",
              label: "Hedera",
              items: [
                "Examples/hedera/hedera-address",
                "Examples/hedera/hedera-api-video",
                "Examples/hedera/hedera-io",
                "Examples/hedera/hedera-messages",
                "Examples/hedera/hedera-transactions",
              ],
            },
            {
              type: "category",
              label: "Filecoin",
              items: [
                "Examples/filecoin/messages",
              ],
            },
            {
              type: "category",
              label: "Flow",
              items: [
                "Examples/Input_Output/IO_examples",
              ],
            },
            {
              type: "category",
              label: "Ripple",
              items: [
                "Examples/ripple/balances",
                "Examples/ripple/nft_token_offers",
                "Examples/ripple/payments",
                "Examples/ripple/trades",
                "Examples/ripple/transfers",
              ],
            },
            {
              type: "category",
              label: "Solana",
              items: [
                "Examples/Solana/instructions",
              ],
            },
            {
              type: "category",
              label: "Stellar",
              items: [
                "Examples/stellar/stellar-address-api",
                "Examples/stellar/stellar-effects-api",
                "Examples/stellar/stellar-liquiditypool-api",
                "Examples/stellar/stellar-payments-api",
                "Examples/stellar/stellar-tradeeffects-api",
                "Examples/stellar/stellar-transactions-api",
              ],
            },
            {
              type: "category",
              label: "Tron",
              items: [
                "Examples/tron/address",
                "Examples/tron/arguments",
                "Examples/tron/blocks",
                "Examples/tron/coinpath",
                "Examples/tron/contracts",
                "Examples/tron/dexTrades",
                "Examples/tron/smartContractCalls",
                "Examples/tron/smartContractEvents",
                "Examples/tron/trades",
                "Examples/tron/transaction",
                "Examples/tron/transfers",
              ],
            },
            {
              type: "category",
              label: "Velas",
              items: [
                "Examples/velas/calls",
                "Examples/velas/events",
                "Examples/velas/trades",
                "Examples/velas/transactions",
                "Examples/velas/transfers",
              ],
            },
            {
              type: "category",
              label: "Zcash",
              items: [
                "Examples/Zcash/address-api",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "L2 Chains",
          items: [
            {
              type: "category",
              label: "Polygon (Matic)",
              items: [
                "Examples/address/specific-queries",
              ],
            },
            {
              type: "category",
              label: "Staking (Beacon Chain)",
              items: [
                "Examples/Beacon Chain Examples/eth2_examples",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Coinpath",
          items: [
            "Examples/coinpath/money-flow-api",
          ],
        },
        {
          type: "category",
          label: "Miscellaneous",
          items: [
            {
              type: "category",
              label: "Smart Contracts",
              items: [
                "Examples/smartcontractCalls/smart-contract-calls-api",
                "Examples/smartcontractEvents/Non_EVM_events",
                "Examples/smartcontractEvents/smart-contract-events-api",
              ],
            },
            {
              type: "category",
              label: "Transactions",
              items: [
                "Examples/Transactions/input-output-api",
                "Examples/Transactions/transaction-api",
              ],
            },
            {
              type: "category",
              label: "Transfers",
              items: [
                "Examples/Transfers/transfer-api",
              ],
            },
           
          ],
        },
      ],
    },
    
    
    {
      type: "category",
      label: "Use Cases",
      link: {
        type: "generated-index",
        title: "Practical Use Cases",
        description: "Explore real-world applications of blockchain APIs.",
      },
      items: [
        "Use-Cases/crypto-ml-price-prediction",
        "Use-Cases/multi-chain-portfolio-tracker",
        "Use-Cases/react-example",
        "Use-Cases/tradeAmount-heatmap",
        "Use-Cases/tradingview",
        "Use-Cases/wordpress-wpgetapi",
      ],
    },
    {
      type: "category",
      label: "API Blog",
      link: {
        type: "generated-index",
        title: "API Blog",
        description: "Latest insights and updates on APIs.",
      },
      items: [
        "API-Blog/dogecoin-wallet-auditing",
      ],
    },
  ],
};

module.exports = sidebars;
