import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
//import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
//  Avatar,
  Box,
  Card,
 // Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  //Typography,
  makeStyles
 
} from '@material-ui/core';
import axios from 'axios';
//import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  //const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  /* const handleSelectAll = event => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map(customer => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  }; */

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>매장</TableCell>
                <TableCell>매장명</TableCell>
                <TableCell>판매일자</TableCell>
                <TableCell>전표번호</TableCell>
                <TableCell>시즌별</TableCell>
                <TableCell>판매요인</TableCell>
                <TableCell>판매여부</TableCell>
                <TableCell>STYLE</TableCell>
                <TableCell>COLOR</TableCell>
                <TableCell>44</TableCell>
                <TableCell>55</TableCell>
                <TableCell>66</TableCell>
                <TableCell>77</TableCell>
                <TableCell>S</TableCell>
                <TableCell>M</TableCell>
                <TableCell>L</TableCell>
                <TableCell>F</TableCell>
                <TableCell>합계</TableCell>
                <TableCell>TAG가</TableCell>
                <TableCell>판매가</TableCell>
                <TableCell>마진</TableCell>
                <TableCell>DC</TableCell>
                <TableCell>실판매금액</TableCell>
                <TableCell>수금금액</TableCell>
                <TableCell>판매금액</TableCell>
                <TableCell>TAG가</TableCell>
                <TableCell>원가</TableCell>
                <TableCell>원가금액</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer, index) => (
                <TableRow
                hover
                key={index}
                 /*  
                  key={index}
                  selected={selectedCustomerIds.indexOf(customer.index) !== -1} */
                >
                   <TableCell>{customer.shop_cd}</TableCell>
                  <TableCell>{customer.shop_nm}</TableCell>
                  <TableCell>{customer.sale_dt}</TableCell>
                  <TableCell>{customer.sale_no}</TableCell>
                  <TableCell>{customer.ys}</TableCell>
                  <TableCell>{customer.sale_cnd}</TableCell>
                  <TableCell>{customer.div}</TableCell>
                  <TableCell>{customer.styleno}</TableCell>
                  <TableCell>{customer.color}</TableCell>
                  <TableCell>{customer.sqty1}</TableCell>
                  <TableCell>{customer.sqty2}</TableCell>
                  <TableCell>{customer.sqty3}</TableCell>
                  <TableCell>{customer.sqty4}</TableCell>
                  <TableCell>{customer.sqty5}</TableCell>
                  <TableCell>{customer.sqty6}</TableCell>
                  <TableCell>{customer.sqty7}</TableCell>
                  <TableCell>{customer.sqty8}</TableCell>
                  <TableCell>{customer.sale_div}</TableCell>
                  <TableCell>{customer.tag_prc}</TableCell>
                  <TableCell>{customer.sale_prc}</TableCell>
                  <TableCell>{customer.charge_rate}</TableCell>
                  <TableCell>{customer.discount}</TableCell>
                  <TableCell>{customer.samt}</TableCell>
                  <TableCell>{customer.ssamt}</TableCell>
                  <TableCell>{customer.nsamt}</TableCell>
                  <TableCell>{customer.tag_amt}</TableCell>
                  <TableCell>{customer.kor_cost}</TableCell>
                  <TableCell>{customer.ksamt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
