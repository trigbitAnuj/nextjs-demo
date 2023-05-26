"use client";
import { Button } from "@mui/material";

interface Props {
  error: Error;
  reset(): void;
}
const error: React.FC<Props> = ({ error, reset }) => {
  return (
    <>
      <h1>{error.message || "Something went wrong"}</h1>
      <Button variant="outlined" color="error" onClick={reset}>
        Try Again
      </Button>
    </>
  );
};

export default error;
