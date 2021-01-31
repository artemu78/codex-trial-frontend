import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const LIST_ROWS_PER_PAGE = [10, 25, 50];
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

export default function CarsGrid(props) {
  const count = 10000;
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    LIST_ROWS_PER_PAGE[0]
  );

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));

  const setPage = (number: number) => {
    setPageNumber(number);
    console.log(number);
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

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell key={0} align="center">
              №
            </TableCell>
            <TableCell key={1} align="center">
              Make
            </TableCell>
            <TableCell key={2} align="center">
              Model
            </TableCell>
            <TableCell key={3} align="center">
              Year
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody></TableBody>
        <TableFooter>
          <TableRow>
            <TableCell key={0}>add</TableCell>
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
    </>
  );
}
