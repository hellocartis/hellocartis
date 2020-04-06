import React, {Component} from 'react';
import PropTypes from 'prop-types';
import background from './images/main_background.png';
import './App.css';
import QuickLinks from './QuickLinks.js';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Link from '@material-ui/core/Link/Link';
import InstagramIcon from '@material-ui/icons/Instagram';


class App extends Component {

    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div>
                <div className="App" style={{backgroundImage: `url(${background})` }}>
                    <div className="App-content">
                        <h1>Curtis Liu</h1>
                        <QuickLinks/>
                    </div>
                </div>
                <div className="bottomright">
                    <Link componenet="button"
                        onClick={()=> {
                            window.open("http://www.instagram.com/duy.n.bui/")
                        }}
                    >
                    <IconButton color="default" aria-label="instagram_db" component="span" >
                                <InstagramIcon className="icon" fontSize="small" style={{ color: '#cccccc'}}/>
                            </IconButton>
                    </Link>
                    Photocredit: duy.n.bui
                </div>
            </div>
            
        );
    }
}

export default App;

