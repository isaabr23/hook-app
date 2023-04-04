import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                            {/* exact es que la direccion path sea exactamente igual (/about, /login, etc)  */}
                        <Route exact path="/" component={ HomeScreen } />

                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />

                        {/* cuando el usuario accede a una pagina que no exuste hay varias maneras de redireccionarlo 
                        <Route component={ MiPagina404 } />
                        <Redirect to="/" />*/}

                    </Switch>
                </div>        
            </div> 
        </Router>
    )
}
