import React from 'react';
import cx from 'classnames';
import logo from './logo.svg';
import styles from './index.module.scss';

function MainPage({ id, className }) {
  const classes = cx(styles.className, className);

  return (
    <div id={id} className={classes}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App/index.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainPage;
