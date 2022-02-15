import React from "react";
import "../../App.css";
import { Button } from "../Button";
import Box from "@mui/material/Box";

function Gan() {
  function getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        alert(xhr.response);
      }
    };
    xhr.open("get", "http://backend:8088/api/gan", true);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.send();
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
            }}
          />
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
