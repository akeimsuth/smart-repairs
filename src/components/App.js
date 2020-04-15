import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import Table from './Table';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function App() {
    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: 'darkblue',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            background: 'blue',
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Repairs
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                style={{ background: 'blue' }}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div style={{ background: 'darkblue' }} className={classes.toolbar} />

                <List style={{ background: 'plum' }}>
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
                    <ListItem className="real">
                        <div style={{ margin: '10px 40px' }} class="row">
                            <DashboardIcon
                                style={{ margin: '0px 40px' }}
                                className="icon"
                            />

                            <Typography
                                variant="h6"
                                style={{ color: 'white', margin: '5px 0px' }}
                                noWrap
                            >
                                hsjnx
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem className="real">
                        <div style={{ margin: '0px 40px' }} class="row">
                            <PersonIcon style={{ margin: '0px 40px' }} className="icon" />

                            <Typography
                                active
                                variant="h6"
                                style={{ color: 'white' }}
                                noWrap
                            >
                                Customers
                            </Typography>
                        </div>
                    </ListItem>
                </List>
                <Divider />
                {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Table />
            </main>
        </div>
    );
}

export default App;
