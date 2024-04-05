import { createContext } from "react";
import { ErrorResponse, PhotosWithTotalResults } from "pexels";

const PhotoContext = createContext<ErrorResponse | PhotosWithTotalResults |null>(null)

export  default PhotoContext