"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DataType } from "../comments/page";

const CommentCard = (props: DataType) => {
  const { id, body, name, email } = props;
  return (
    <>
      <Card sx={{ maxWidth: 250 }} raised>
        <CardContent>
          <Typography component="h1" variant="h4">
            {name}
          </Typography>

          <Typography variant="subtitle1">
            {" "}
            {`${body.substring(0, 130)}...`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" href={`comments/${id}`}>
            learn more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CommentCard;
