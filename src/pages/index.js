import Layout from "@theme/Layout";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.href = "/docs/intro";
  });

  return <Layout title="" description="" />;
}
