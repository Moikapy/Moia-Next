
const HelloWorld = props => (
    <div className={props.className}>
    <style jsx>{`
        *{
            font-family:monospace
        }
    `}
    </style>
    {/* CONTENT */}     
    {props.children}

  </div>
);


const getInitialProps = async function() {

};

HelloWorld.getInitialProps;
export default HelloWorld
