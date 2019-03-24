import Head from "next/head";
import Navbar from '../Navbar'
import Package from "../../../package.json";
const {name}=Package;
const Container = ({ title, className, children }) => (
  <span>
    <Head>
      <title>{title || name}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="stylesheet" href="./static/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className={className}>{children}</div>
      <script href="./static/bootstrap.min.js" />
      <script href="./static/jquery3.3.1.min.js" />
  </span>
);
export default Container