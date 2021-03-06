import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AddMember from '../Components/AddMember';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InventoryTable from '../Components/Table';
import Checkout from '../Components/Checkout';
import CheckoutTable from '../Components/CheckoutTable.js';
import CheckIn from '../Components/CheckIn';
import Slide from '@material-ui/core/Slide';
import Accession from '../Components/Accession';
import Notes from '../Components/Notes';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonAuto extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Slide in={true} direction='right' style={{ transitionDelay: 300}}  mountOnEnter unmountOnExit>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="on"
                            className={classes.tabs}>

                            <Tab label="Check Out Gear" />
                            <Tab label="Current Checkouts" />
                            <Tab label="Past Checkouts" />
                            <Tab label="Check In Gear" />
                            <Tab label="Edit Inventory" />
                            <Tab label="Accession Gear" />
                            <Tab label="Add Member"/>
                        </Tabs>
                    </Slide>
                </AppBar>
                {value === 0 && <TabContainer> <Checkout apiHost={this.props.apiHost} /> </TabContainer>}
                {value === 1 && <CheckoutTable apiHost={this.props.apiHost} checkoutURL="/checkout/current" pastCheckouts={false}/>}
                {value === 2 && <CheckoutTable apiHost={this.props.apiHost} checkoutURL="/checkout/past" pastCheckouts={true}/>}
                {value === 3 && <TabContainer> <CheckIn apiHost={this.props.apiHost}/>  </TabContainer>}
                {value === 4 && <InventoryTable loggedIn={this.props.loggedIn} apiHost={this.props.apiHost} data={this.props.data}/> }
                {value === 5 && <TabContainer><Accession apiHost={this.props.apiHost}/></TabContainer> }
                {value === 6 && <TabContainer><AddMember apiHost={this.props.apiHost}/></TabContainer>}
            </div>
        );
    }
}

ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
