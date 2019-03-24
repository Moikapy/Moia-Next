import Package from "../../package.json";
const { version, dependencies } = Package;
//Turns Dependencies into Array
const Deps = Object.keys(dependencies);
//HellowWorld Component
const HelloWorld = props => (
  <div className={props.className}>
    <style jsx>
      {`
        * {
          font-family: monospace;
        }
      `}
    </style>
    {/* CONTENT */}
    {props.children}
    <p>Version: {version}</p>
    <p>Dependecies:</p>
    <ul>
      {Deps.map((dep, index) => (
        <li key={index}>
              <a href={`https://www.npmjs.com/package/${dep}`} target="_blank">{dep}</a>:
          {dependencies[dep]}
        </li>
      ))}
    </ul>
  </div>
);

export default HelloWorld
