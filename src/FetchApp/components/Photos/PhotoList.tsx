import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { PhotoContext } from "../../contexts/PhotoContext";
import { Photo, responseType } from "../../types/data";

const PhotoList = () => {


  const { photos } = useContext(PhotoContext) as responseType;
  return (
    <Table padding="normal" width="50%">
      <TableBody >
        {photos.map((photo: Photo) => (
          <TableRow  key={photo.id} sx={{verticalAlign:'top'}}>
            <TableCell
              sx={{ margin: "15px", border: 0 , paddingY:'30px'}}
              align="right"
            >
              <img
                height="150px"
                min-width="150px"
                alt=""
                src={photo.src.small}
              />
            </TableCell>
            <TableCell
              sx={{ margin: "15px", border: 0 ,  paddingY:'30px'}}
              padding="normal"
              align="left"
            >
              <Card sx={{ width: "400px" }}>
                <CardHeader title ={photo.alt} variant='h3'></CardHeader>
                <CardContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </CardContent>
              </Card>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default PhotoList;
