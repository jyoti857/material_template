import { Typography } from "@material-ui/core";
import { FC, ReactNode } from "react";

interface TitleProps{
  children: ReactNode
}
const Title:FC<any> = ({children}: TitleProps) => {

  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {children}
    </Typography>
  )
}

export default Title;