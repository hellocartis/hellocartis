import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavTabs from './NavTabs';



class App extends Component {

    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div className="Header">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="Welcome">
                        Welcome
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Navigation/>
            </div>
        )
    }
}

class Navigation extends Component {

    render () {
        return (
            <NavTabs />
        );
    }  
}

export default App;



