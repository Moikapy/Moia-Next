import Head from "next/head";
import Package from "../../../package.json";
const Container = ({title,className,children}) =>(
    <span>
        <Head>
            <title>{title||Package.name}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </Head>
        <div className={className}>
            {children}
        </div>
    </span>
)
export default Container