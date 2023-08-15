import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build Multi-chain Apps',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
      Unified APIs to query blockchains using our <a href='https://ide.bitquery.io/'>GraphQL IDE</a> and build multi-chain apps faster than ever.
      </>
    ),
  },
  {
    title: 'Blockchain GraphQL API',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
        Query <a href='https://account.bitquery.io/user/system_status'>40+ blockchains</a> data such as trades, transfers, balance, nfts, tokens, and more using powerful, unified Graphql APIs.
      </>
    ),
  },
  {
    title: 'Historical and Real time data',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
Complete historical (archival) and real-time indexed blockchain data through APIs, SQL and Cloud infra.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
