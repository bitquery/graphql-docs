import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Data Platform',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
        Subscribe on the real-time data and build winning blockchain
          applications.
      </>
    ),
  },
  {
    title: 'GraphQL API',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
        Build effective GraphQL queries to any blockchain data in minutes and embed them in your applications.
        Now with Websockets and subscription features!
      </>
    ),
  },
  {
    title: 'Cloud Data Sets',
    Svg: require('@site/static/img/BitqueryBW.svg').default,
    description: (
      <>
        Develop cloud applications using precise comprehensive archive datasets of all major blockchain networks.
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
