import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>About page</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default About;