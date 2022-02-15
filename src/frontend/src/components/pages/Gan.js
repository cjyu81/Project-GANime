import React, { useState } from "react";
import "../../App.css";
import { Button } from "../Button";
import Box from "@mui/material/Box";
import axios from "axios";
import logo from "../../logo.svg";

function Gan() {
  const [imageSrc, setImageSrc] = useState("");

  async function getData() {
    let image;
    console.log("Getting data from /api/gan");
    let res = await axios.get("http://localhost:8088/api/gan", {
      responseType: "arraybuffer",
    });
    // let res = await axios.get("https://i.imgur.com/MLsKJLZ.jpg", {
    //   responseType: "arraybuffer",
    // });
    console.log(res);
    alert(res.data);
    // image = res.data;

    // const urlCreator = window.URL || window.webkitURL;
    // var imageUrl = window.URL.createObjectURL(
    //   new Blob([image], { type: "image/png" })
    // );
    // console.log(imageUrl);
    // setImageSrc(imageUrl);
    let base64ImageString = Buffer.from(res.data, "binary").toString("base64");
    let srcValue = "data:image/png;base64," + base64ImageString;
    setImageSrc(srcValue);
    return res.data;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        <li>
          {" "}
          <Box
            sx={{
              width: 1000,
              height: 500,
              backgroundColor: "primary.dark",
              border: "5px dashed blue",
            }}
          >
            {" "}
            {imageSrc == "" ? (
              <img></img>
            ) : (
              <img src={imageSrc} height={500} width={1000}></img>
            )}
          </Box>
        </li>
        <li>
          <Button
            style={{ justifyContent: "center" }}
            dest="#"
            onClick={getData}
            className="btns"
            buttonStyle="btn--test"
            buttonSize="btn--large"
          >
            Generate Background
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Gan;
