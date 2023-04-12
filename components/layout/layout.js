import { Fragment } from "react";
import MainHeader from "./main-header";


function Layout(props){
    const {children} = props;
    return <Fragment>
        <MainHeader/>
        <main>
            {children}
        </main>
    </Fragment>

}

export default Layout;