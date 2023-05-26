"use client";
import { PostElmType } from "../post/page";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const PostsCard: React.FC<PostElmType> = (props) => {
  const { id, body, title } = props;
  return (
    <>
      <Card sx={{ maxWidth: 250 }} raised>
        <CardContent>
          <Typography component="h1" variant="h4">
            {`${title.substring(0, 15)}...`}
          </Typography>

          <Typography variant="subtitle1">
            {`${body.substring(0, 130)}...`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" href={`post/${id}`}>
            learn more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PostsCard;
