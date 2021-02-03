import Head from "next/head";
import CarsGrid from "./grid.tsx";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artem Reva frontend test project. Cars.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CarsGrid />
    </div>
  );
}
