import { useState } from "react";

const MenuBtn: React.FC = () => {

    const [open, setOpen] = useState(false)

    return (
        <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1 mr-4"
        >
            <div
                className={`w-7 h-1 bg-black transition-transform duration-300 origin-center
        ${open ? "rotate-45 translate-y-2" : ""}`}
            />

            <div
                className={`w-5 h-1 bg-black transition-all duration-300
        ${open ? "opacity-0 scale-x-0" : ""}`}
            />

            <div
                className={`w-7 h-1 bg-black transition-transform duration-300 origin-center
        ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />

        </button>
    );
}

export default MenuBtn;