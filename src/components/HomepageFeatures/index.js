import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Data Platform',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
       Real time blockchain data APIs through Grpahql subscription (Webhook).
      </>
    ),
  },
  {
    title: 'GraphQL API',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
        Query blockchains data such as trades, transfers, balance, nfts, tokens, and more using powerful, unified Graphql APIs.
      </>
    ),
  },
  {
    title: 'Cloud Data Sets',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
Access blockchain data through cloud infra such as AWS s3, Snowflake, Microsoft Azure, Google Bigquery, and more.
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
