import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import AddBox from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import Add from "../components/Car/add.tsx";
import { carsSelector } from "../store/reducers/cars/index";
import { ICar } from "../store/reducers/cars/types";
import { Delete, Edit } from "../store/reducers/cars/actions";
const LIST_ROWS_PER_PAGE = [10, 25, 50];

interface ICarRow {
  car: ICar;
  setCar: (ICar) => void;
}
const CarRow = ({ car, setCar }: ICarRow) => {
  const dispatch = useDispatch();

  const deleteCarHandle = (id: string) => {
    console.log(id, deleteCarHandle);
    dispatch(Delete(id));
  };
  const editCarHandle = (id: string) => {
    setCar(car);
  };
  return (
    <TableRow key={car?.id}>
      <TableCell>
        <IconButton onClick={() => deleteCarHandle(car?.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => editCarHandle(car?.id)}>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell>{car?.id}</TableCell>
      <TableCell>{car?.make}</TableCell>
      <TableCell>{car?.model}</TableCell>
      <TableCell>{car?.year}</TableCell>
    </TableRow>
  );
};

export default function CarsGrid(props) {
  const count = 10000;
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    LIST_ROWS_PER_PAGE[0]
  );
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState<ICar>(null);

  const cars = useSelector(carsSelector(pageNumber, rowsPerPage));

  useEffect(() => {
    if (car) {
      setOpen(true);
    }
  }, [car]);

  const AddCarHandle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCar(null);
  };

  const setPage = (number: number) => {
    setPageNumber(number);
  };

  const handleChangePage = (event: unknown, newPageNumber: number) => {
    setPage(newPageNumber);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getRows = () => {
    return (
      (Array.isArray(cars) &&
        cars.map((car: ICar) => (
          <CarRow car={car} setCar={setCar} key={car.id} />
        ))) ||
      []
    );
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell key={0}></TableCell>
            <TableCell key={1}>№</TableCell>
            <TableCell key={2}>Make</TableCell>
            <TableCell key={3}>Model</TableCell>
            <TableCell key={4}>Year</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{getRows()}</TableBody>
        <TableFooter>
          <TableRow>
            <TableCell key={0}>
              <IconButton onClick={AddCarHandle}>
                <AddBox />
              </IconButton>
            </TableCell>
            <TablePagination
              rowsPerPageOptions={LIST_ROWS_PER_PAGE}
              colSpan={3}
              count={count}
              rowsPerPage={rowsPerPage}
              page={pageNumber}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Add open={open} handleClose={handleClose} car={car} />
    </>
  );
}
