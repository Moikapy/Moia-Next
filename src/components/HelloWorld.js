import Package from "../../package.json";
const { version, dependencies, devDependencies } = Package;
//Turns Dependencies into Array
const Deps = Object.keys(dependencies);
const devDeps = Object.keys(devDependencies);
//HellowWorld Component
const HelloWorld = props => (
  <div className={props.className}>
    {/* CONTENT */}
    {props.children}
    <p>Version: {version}</p>
    <p>Dependecies:</p>
    <ul>
      {Deps.map((dep, index) => (
        <li key={index}>
          <a href={`https://www.npmjs.com/package/${dep}`} target='_blank'>
            {dep}
          </a>
          :{dependencies[dep]}
        </li>
      ))}
    </ul>
    <p>Dev-Dependecies:</p>
    <ul>
      {devDeps.map((devDep, index) => (
        <li key={index}>
          <a href={`https://www.npmjs.com/package/${devDep}`} target='_blank'>
            {devDep}
          </a>
          :{devDependencies[devDep]}
        </li>
      ))}
    </ul>
  </div>
);

export default HelloWorld;
