import { Link, makeStyles, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import React, { FC } from "react";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

const Deposits: FC<any> = () => {
  const classes: ClassNameMap<"depositContext">  = useStyles();
  return(
    <React.Fragment>
      <Title>Recent Deosits</Title>
      <Typography component ='p' variant = 'h4'>
        $3,024.00
      </Typography>
      <Typography
        color = 'textSecondary' className = {classes.depositContext}
      >
        on 15 May, 2021
      </Typography>
      <div>
        <Link
          color = 'primary' href='#'
          onClick = {(e: any) => e.preventDefault()}
        >
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Deposits;