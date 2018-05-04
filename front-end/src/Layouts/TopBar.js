import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  // menuButton: {
    //   marginLeft: -12,
    //   marginRight: 20,
    // },
};

function TopBar(props) {
    const { classes } = props;
    return (
        <div style={{height:'10vh'}}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                  {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                  {/*<MenuIcon />*/}
                  {/*</IconButton>*/}
                <Typography variant="title" color="inherit" align="left" className={classes.flex}>
                  Outdoors at UVA - Gear Inventory
                </Typography>
                <Button color="inherit">GearMaster Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        </div>
    );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);