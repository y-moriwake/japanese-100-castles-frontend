import { ChangeEvent } from 'react';
import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '30rem',
            },
        },
        button: {
            marginTop: 7,
            height: 56,
            width: '6rem',
        },
    }),
);

const BasicTextFields = () => {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const buttonSubmit = () => {
        console.log(inputText);
    };

    return (
        <div>
            <TextField onChange={handleChange} className={classes.root} id="outlined-basic" label="100名城を検索する🏯" variant="outlined" />
            <Button onClick={buttonSubmit} className={classes.button} size="large" variant="contained" color="primary">
                検索
            </Button>
        </div>
    );
}

export default BasicTextFields;
