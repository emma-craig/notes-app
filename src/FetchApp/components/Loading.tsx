import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
 
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Stack>
    )}
  export default Loading;