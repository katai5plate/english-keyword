import * as React from "react";
import * as keywords from "./keywords.json";
import * as _ from "@material-ui/core";
import SelectForm from "./components/organisms/SelectForm";

const keywordList = keywords.reduce(
  (p, { spel, ...c }) => [
    ...p,
    ...spel.map(v => ({
      ...c,
      spel: v.replace(/-/, ""),
      category: v.match(/-$/) ? "prefix" : v.match(/^-/) ? "suffix" : "root"
    }))
  ],
  [] as {
    spel: string;
    mean: string[];
    category: string;
  }[]
);

const FC: React.FC = () => {
  console.log(keywordList);
  const [data] = React.useState(keywordList);
  return (
    <React.Fragment>
      <_.Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <SelectForm
          text="Prefix"
          list={data
            .filter(({ category }) => category === "prefix")
            .map(({ spel }) => spel)}
        />
        <SelectForm
          text="Root"
          list={data
            .filter(({ category }) => category === "root")
            .map(({ spel }) => spel)}
        />
        <SelectForm
          text="Suffix"
          list={data
            .filter(({ category }) => category === "suffix")
            .map(({ spel }) => spel)}
        />
      </_.Grid>
    </React.Fragment>
  );
};

export default FC;
