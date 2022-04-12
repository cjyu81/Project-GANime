import React, { useState } from "react";
import "../../App.css";
import { Button } from "../Button";
import { Grid, Box, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import axios from "axios";
import logo from "../../logo.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 100,
}));

function Gan() {
  const [imageList, setImageList] = useState([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ]);
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

    return [res.data, srcValue];
  }

  async function generate() {
    var list = [];
    for (let i = 0; i < 4; i++) {
      let image = await getData();
      list.push(image);
    }
    setImageList(list);
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
          <Box
            sx={{
              width: 1000,
              height: 500,
              backgroundColor: "primary.dark",
              border: "5px dashed blue",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={2} sm={8} md={12}></Grid>
              {Array.from(Array(4)).map((_, index) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={5}
                  key={index}
                  align="center"
                  verticalAlign="center"
                  paddingTop="20%"
                  margin="auto"
                >
                  <Box
                    sx={{
                      width: 250,
                      height: 220,
                      backgroundColor: "primary.dark",
                      border: "5px blue",
                      display: "flex",
                      margin: "auto",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        verticalAlign: "top",
                        display: "block",
                      }}
                    >
                      <img
                        src={imageList[index][1]}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "100%",
                          height: "100%",
                        }}
                      ></img>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </li>
        <li>
          <Button
            style={{ justifyContent: "center" }}
            dest="#"
            onClick={generate}
            className="btns"
            buttonStyle="btn--test"
            buttonSize="btn--large"
          >
            Generate Backgrounds
          </Button>
          {/* <Button
            style={{ justifyContent: "center" }}
            dest="#"
            onClick={() => {
              for (let i = 0; i < imageList.length; i++) {
                console.log(imageList[i][1]);
              }
            }}
            className="btns"
            buttonStyle="btn--test"
            buttonSize="btn--large"
          >
            Print background
          </Button> */}
        </li>
      </ul>
    </div>
  );
}

export default Gan;
