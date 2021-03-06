import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { ScreenSmith } from "../ScreenSmith";

const App = () => {
  const [screenDefData, setScreenDefData] = useState([
    {
      UiElementId: "",
      ComponentType: "",
      Representation: "",
      ComponentProperties: {},
      Children: [],
    },
  ]);
  const [screenDefString, setScreenDefString] = useState("");

  const handleClick = (e) => {
    const screenDef = e.target.getAttribute("data-screendef");
    const screenDefObj = {
      UiElementId: "",
      ComponentType: screenDef,
      Representation: "Test",
      ComponentProperties: {},
      Children: [],
    };

    setScreenDefData((prevValue) => [
      {
        ...prevValue,
        Children: [screenDefObj],
      },
    ]);
    setScreenDefString(JSON.stringify(screenDefObj));
  };
  console.log({ screenDefData });
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }} p={2}>
      <Box>
        <Button data-screendef="Button" onClick={handleClick}>
          Button
        </Button>
      </Box>
      <Box p={2}>
        <ScreenSmith definition={screenDefData} />
      </Box>
      <Box p={2}>{screenDefString}</Box>
    </Box>
  );
};

export default App;
