import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layouts";
import "../components/Navbar/navbar.css";
import "../components/Layouts/HomeLayout.css";
import "./builder/builder.css";

import { DataProvider } from "@/context/DataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
