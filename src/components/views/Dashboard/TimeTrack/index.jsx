import "./style.scss";
import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddTime from "@mui/icons-material/Update";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StopIcon from "@mui/icons-material/Stop";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  id,
  Date,
  Begin,
  End,
  Duration,
  Rate,
  Activity,
  Description,
  Action
) {
  return { Date, Begin, End, Duration, Rate, Activity, Description, Action };
}

const rows = [
  createData(
    "--.--.---",
    "--:--",
    "--:--",
    "--:-- h",
    "----$",
    "N/A",
    "N/A",
    true
  ),
].sort((a, b) => (a.Date < b.Date ? -1 : 1));

function Row(props) {
  const { row } = props;
  const [isRecording, setIsRecordAction] = useState(false);
  return (
    <TableRow key={row.Date}>
      <TableCell component="th" scope="row">
        {row.Date}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {row.Begin}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {row.End}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {row.Duration}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {row.Rate}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <div className="activitiyCell">{row.Activity}</div>
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {row.Description}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setIsRecordAction(!isRecording)}>
            {isRecording ? <StopIcon /> : <PlayCircleIcon />}
          </Button>
          <Button>
            <BorderColorIcon />
          </Button>
          <Button>
            <AutoDeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default function TimeTrack() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rowData, setRowData] = useState(rows);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const addRow = () => {
    const newRow = createData(
      "10.2.2020",
      `${timeString}`,
      "--:--",
      "--:--h",
      "----$",
      "N/A",
      "N/A",
      true
    );
    setRowData([...rowData, newRow]);
  };

  return (
    <TableContainer component={Paper}>
      <div className="addTime" onClick={addRow}>
        <AddTime style={{ background: "gainsboro", borderRadius: "6px" }} />
      </div>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead style={{ background: "#c9c2cf" }}>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Begin</TableCell>
            <TableCell align="right">End</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="center">Activity</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rowData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : rowData
          ).map((row) => (
            <Row key={row.Date} row={row} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
