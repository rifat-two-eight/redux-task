import { Link } from "react-router";
import { ModeToggle } from "../Mode-toggle";

const Navbar = () => {
    return (
        <div className="mt-4 flex justify-between">
            <div className="flex items-center gap-2">
                <img src="/task.png" alt="" />
                <h3>Task Manage</h3>
            </div>
            <div className="flex gap-2">
                <Link to="/">Task</Link>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;