import { ErrorOutline } from "@mui/icons-material";
import { Card, Stack, Avatar, Typography } from "@mui/material";
import React from "react";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 3,
        py: 7,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={3}>
        <Avatar
          sx={{
            bgcolor: "background.error",
            width: "70px",
            height: "70px",
          }}
        >
          <ErrorOutline />
        </Avatar>

        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            fontWeight: 700,
          }}
        >
          {message}
        </Typography>
      </Stack>
    </Card>
  );
};

export default Error;
