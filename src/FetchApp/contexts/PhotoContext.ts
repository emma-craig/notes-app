import { createContext } from "react";
import { ErrorResponse, PhotosWithTotalResults } from "pexels";

const PhotoContext = createContext<ErrorResponse | PhotosWithTotalResults |undefined>(undefined)
const CocktailsContext = createContext

export  {PhotoContext, CocktailsContext}