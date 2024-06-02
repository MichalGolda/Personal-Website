import { useContext } from "react";
import { NavContext } from "../_context/navContext";

export const useNavContext = () => useContext(NavContext);
