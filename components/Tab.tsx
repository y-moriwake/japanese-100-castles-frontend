import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 0,
        backgroundColor: "#dddcd6"
    },
});

const CenteredTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        // 押されたタブのindex
        console.log(`${value}`);
        console.log(event);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="日本100名城" />
                <Tab label="Coming Soon..." />
                <Tab label="Coming Soon..." />
                <Tab label="利用規約" />
            </Tabs>
        </Paper>
    );
}

export default CenteredTabs;