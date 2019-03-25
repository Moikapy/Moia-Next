import Head from "next/head";
import Navbar from "../Navbar";
import Package from "../../../package.json";
const { name } = Package;
const Template = ({ title, className, children }) => (
  <span id='template'>
    <Head>
      <title>{title || name}</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
      <link rel='stylesheet' href='./static/bootstrap.min.css' />
    </Head>
    <Navbar siteName={"Moi-Next"} />
    <br />
    <div className={className}>{children}</div>
    {/* GLOBAL CSS */}
    <style jsx>
      {`
        #template {
          font-family: monospace;
        }
      `}
    </style>
  </span>
);
export default Template;
