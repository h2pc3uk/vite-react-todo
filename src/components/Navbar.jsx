import { useState, useRef } from "react";
import "../index.css";
import { useOnClickOutside } from "../useOnClickOutside";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    
    const ref = useRef();
    console.log(ref.current);

    useOnClickOutside(ref, dropdown, () => setDropdown(false));

    return (
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li ref={ref}>
                    <button onClick={() => setDropdown((prev) => !prev)}>
                        SERVICES <span>&#8595;</span>
                    </button>
                    {dropdown && (
                        <ul>
                            <li>DEISGN</li>
                            <li>DEVELOPMENT</li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
