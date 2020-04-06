import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';

import IconButton from '@material-ui/core/IconButton/IconButton';
import Link from '@material-ui/core/Link/Link';
import Tooltip from '@material-ui/core/Tooltip';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

export default function QuickLinks() {
    return (
        <div>
            <Link 
                component="button"
                onClick={()=> {
                    window.open("https://www.linkedin.com/in/curtislokhangliu/");
                }}
            >
                <Tooltip title="LinkedIn">
                    <IconButton color="default" aria-label="linkedin" component="span">
                        <LinkedInIcon className="icon" fontSize="large" style={{ color: '#f2f2f2'}}/>
                    </IconButton>
                </Tooltip>
            </Link>

            <Link 
                component="button"
                onClick={()=> {
                    window.open("http://www.instagram.com/hellocartis/");
                }}
            >
                <Tooltip title="Personal Instagram: hellocartis">
                    <IconButton color="default" aria-label="instagram_hc" component="span">
                        <SportsMotorsportsIcon className="icon" fontSize="large" style={{ color: '#f2f2f2'}}/>
                    </IconButton>
                </Tooltip>
            </Link>

            <Link 
                component="button"
                onClick={()=> {
                    window.open("https://github.com/hellocartis");
                }}
            >
                <Tooltip title="WIP:Github">
                    <IconButton color="default" aria-label="github" component="span">
                        <GitHubIcon className="icon" fontSize="large" style={{ color: '#f2f2f2'}}/>
                    </IconButton>
                </Tooltip>
            </Link>
            <Link 
                component="button"
                onClick={()=> {
                    window.open("http://www.instagram.com/hcwraps/");
                }}
            >
                <Tooltip title="Car Wrap Hobby">
                    <IconButton color="default" aria-label="hcwrap" component="span">
                        <DirectionsCarIcon className="icon" fontSize="large" style={{ color: '#f2f2f2'}}/>
                    </IconButton>
                </Tooltip>
            </Link>
        </div>
    );
}

