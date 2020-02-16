import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage';

function App({ id, className }) {
  const classes = cx(styles.className, className);

  return (
    <Router basename="/">
      <div id={id} className={classes}>
        <main>
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
