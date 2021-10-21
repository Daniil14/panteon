import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import styles from './App.module.scss';

// Components:
import Sidebar from 'components/Sidebar/Sidebar';
import Projects from 'pages/Projects/Projects';
import Create from 'pages/Create/Create';
import Settings from 'pages/Settings/Settings';
import Statistic from 'pages/Statistic/Statistic';
import Auth from 'pages/Auth/Auth';

const App = () => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Router>
            <div className={styles.container}>
                {isAuth
                    ? (<>
                        <Sidebar/>
                        <main className={styles.main}>
                            <div className={styles.wrapper}>
                                <Switch>
                                    <Route path="/" exact={true} children={<Projects/>}/>
                                    <Route path="/settings" children={() => <Settings/>}/>
                                    <Route path="/create" children={() => <Create/>}/>
                                    <Route path="/projects" children={() => <h1>projects</h1>}/>
                                    <Route path="/statistic" children={() => <Statistic/>}/>
                                    <Redirect to="/"/>
                                </Switch>
                            </div>
                        </main>
                    </>)
                    : (
                        <Switch>
                            <Route path="/" exact={true} children={<Auth setIsAuth={setIsAuth}/>}/>
                            <Redirect to="/"/>
                        </Switch>
                    )
                }
            </div>
        </Router>
    );
}

export default App;
