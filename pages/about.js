import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

import { Template } from "../src/components/common";
const About = ({ readme }) => {
  return (
    <Template className={"container mx-auto p-5"}>
      <Markdown source={readme} />
      <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
    </Template>
  );
}
About.getInitialProps = async function () {
  const res = await fetch(
    "https://raw.githubusercontent.com/moiagg/Moia-Next/develop/README.md"
  );
  const data = await res.text()

  return {
    readme: data
  }
}
export default About;