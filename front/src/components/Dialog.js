import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        textAlign: 'center',
        marginTop: 20
    }
}));

function FormDialog({dispatch}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const writeText = (event) => {
        setText(event.target.value)
    }
    const writeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addText = () => {
        dispatch({ type: 'ADD_TEXT', payload: { title: title, text: text } })
        setOpen(false);
    };

    return (
        <div className={classes.btn}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add text
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add text</DialogTitle>
            <DialogContent>
            <DialogContentText>
                \ (•◡•) /
            </DialogContentText>
            <TextField
                onKeyUpCapture={writeTitle}
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
            />
            <TextField
                onKeyUpCapture={writeText}
                label="Multiline"
                multiline
                margin="dense"
                fullWidth
                rows={4}
                type="text"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addText} color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}
  
export default connect(mapDispatchToProps)(FormDialog)
