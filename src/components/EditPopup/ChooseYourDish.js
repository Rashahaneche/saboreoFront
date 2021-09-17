import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DishList from "./DishList";
import DishEdit from "./DishEdit";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dishId, setDishId] = React.useState("");
  const [isVisible, setIsVisible]=React.useState(false);

  const handleChange = (event) => {
    setDishId(event.target.value || "");
  };

  const openModal = () => {
    setIsVisible(true)
    setOpen(false)
  }

  const onEdited = () => {
    setIsVisible(false)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please select the dish to edit</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Select dish</InputLabel>
              <Select
                native
                value={dishId}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <DishList/>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={openModal} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      {isVisible && <DishEdit id={dishId} onEdited={onEdited}/>}
    </div>
  );
}
