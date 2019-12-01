import * as React from "react";
import { FormControl } from "@material-ui/core";
import FormLabel from "../atoms/FormLabel";
import SelectBox from "../molecules/SelectBox";

interface Props {
  text: string;
  list: string[];
}
const FC: React.FC<Props> = ({ text, list }) => (
  <FormControl>
    <FormLabel text={text} />
    <SelectBox list={list} />
  </FormControl>
);

export default FC;
