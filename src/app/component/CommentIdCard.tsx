import React from "react";
import { DataType } from "../comments/page";

import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";

const CommentIdCard: React.FC<DataType> = (props) => {
  const { id, name, email, body } = props;

  return (
    <>
      <Card sx={{ maxWidth: 400 }} raised>
        <CardContent>
          <Typography component="h1" variant="h4">
            {name}
          </Typography>

          <Typography variant="subtitle1"> {body}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CommentIdCard;
