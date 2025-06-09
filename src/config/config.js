import { io } from "socket.io-client";

const URL = "https://nodeapi-dzib.onrender.com";

export const socket = io(URL);
export const navbarBrand = "UniversalVideoShare";
