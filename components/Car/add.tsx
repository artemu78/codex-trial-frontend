import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Add, Edit } from "../../store/reducers/cars/actions";
import { ICar } from "../../store/reducers/cars/types";

interface IAddPopup {
  open: boolean;
  handleClose: () => void;
  car?: ICar;
}
export default function AddPopup({ open, handleClose, car }: IAddPopup) {
  const dispatch = useDispatch();
  const id = car?.id;
  const [make, setMake] = React.useState<string>(car?.make || "");
  const [model, setModel] = React.useState<string>(car?.model || "");
  const [year, setYear] = React.useState<string>(car?.year.toString() || "");

  useEffect(() => {
    setMake(car?.make || "");
    setModel(car?.model || "");
    setYear(car?.year.toString() || "");
  }, [car]);

  const save = () => {
    if (id) {
      dispatch(Edit({ make, model, year: parseInt(year.toString()), id }));
    } else {
      dispatch(Add({ make, model, year: parseInt(year.toString()), id }));
    }
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Car</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill new car parameters</DialogContentText>
        <TextField
          autoFocus
          id="make"
          label="Car brand"
          type="text"
          fullWidth
          margin="normal"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMake(event.target.value);
          }}
          value={make}
        />
        <TextField
          id="model"
          label="Car model"
          type="text"
          fullWidth
          margin="normal"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setModel(event.target.value);
          }}
          value={model}
        />
        <TextField
          autoFocus
          id="year"
          label="Year"
          type="number"
          margin="normal"
          inputProps={{ maxLength: 4, max: new Date().getFullYear() }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setYear(event.target.value);
          }}
          value={year}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={save}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
