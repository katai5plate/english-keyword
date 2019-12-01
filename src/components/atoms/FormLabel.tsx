import * as React from "react";
import { InputLabel } from "@material-ui/core";

export interface Props {
  text: string;
}
const FC: React.FC<Props> = ({ text }) => <InputLabel>{text}</InputLabel>;

export default FC;
