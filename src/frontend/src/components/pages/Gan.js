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
    console.log("Getting data from /api/gan/");
    let res = await axios.get("http://localhost:8088/api/stylegan/", {
      responseType: "arraybuffer",
    });
    // let res = await axios.get("https://i.imgur.com/MLsKJLZ.jpg", {
    //   responseType: "arraybuffer",
    // });
    console.log(res);
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
              width: 600,
              height: 600,
              backgroundColor: "white",
              border: 5,
              borderLeft: 5,
              borderRight: 5,
              borderColor: "primary.secondary",
            }}
          >
            {" "}
            {imageSrc == "" ? (
              <img></img>
            ) : (
              <img
                src={imageSrc}
                // height={500}
                // width={1000}
                width="100%"
                height="100%"
                objectFit="contain"
              ></img>
            )}
          </Box>
        </li>
        <li>
          <Box textAlign="center" paddingTop={5}>
            {" "}
            <Button
              style={{ justifyContent: "center" }}
              dest="#"
              onClick={getData}
              className="btns"
              buttonStyle="btn--test"
              buttonSize="btn--large"
              margin="auto"
              display="block"
            >
              Generate Background
            </Button>
          </Box>
        </li>
      </ul>
    </div>
  );
}

export default Gan;
