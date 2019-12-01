import * as React from "react";
import { Select, MenuItem } from "@material-ui/core";

export interface Props {
  list: string[];
  width?: number;
}
const FC: React.FC<Props> = ({ list, width = 100 }) => (
  <Select style={{ width }} onChange={() => {}}>
    {list.map((k, i) => (
      <MenuItem value={k} key={i}>
        {k}
      </MenuItem>
    ))}
  </Select>
);

export default FC;
