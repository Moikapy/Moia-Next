import { Template} from '../src/components/common'
import HelloWorld from '../src/components/HelloWorld'
const Index = () => (
    <Template title={'Moi Next'} className={"container mx-auto mt-5 h-100"}>
        <HelloWorld>
            <img className="mx-auto" style={{width:'50px'}} src="/static/moi.png" alt="my image" />
            <h1>Hello World!</h1>
            <p className="lead">Welcome to Moi-Next</p>    
        </HelloWorld>
    </Template>
);

export default Index