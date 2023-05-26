"use client";
import React from "react";
import { PostElmType } from "../post/page";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";

const PostIdCard = (props: PostElmType) => {
  const { id, title, body } = props;

  return (
    <>
      <Card sx={{ maxWidth: 600 }} raised>
        <CardContent>
          <Typography component="h1" variant="h4">
            {title}
          </Typography>

          <Typography variant="subtitle1"> {body}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default PostIdCard;
