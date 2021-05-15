import { Table, TableCell, TableRow, TableHead, Theme, TableBody, Link } from "@material-ui/core";
import { ClassNameMap, createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import Title from "./Title";


// Generate Order Data
export function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme?: Theme) => 
  createStyles({
    seeMore: {
      marginTop: theme.spacing(3)
    }
  })
)

const Order: FC<any>  = () => {
  const classes:  ClassNameMap<"seeMore"> = useStyles();
  return (
    <React.Fragment>
      <Title>
        Recent Order
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align='right'>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({amount, date, id, name, shipTo, paymentMethod }) => {
            return (
              <TableRow key = {id}>
                <TableCell>{date}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{shipTo}</TableCell>
                <TableCell>{paymentMethod}</TableCell>
                <TableCell align='right'>{amount}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link
          href='#'
          color='primary'
          onClick={preventDefault}
        >
          See More
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Order;