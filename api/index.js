import express from "express";
// const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  if (!PORT) {
    throw err;
  }
  console.log(`server is running on port: ${PORT}`);
});
