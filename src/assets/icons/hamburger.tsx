import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface HamBurgerIconProps {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>
}

export default function HamBurgerIcon({ isOpened, setIsOpened }: HamBurgerIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu md:hidden"
            onClick={() => setIsOpened(!isOpened)}
        >
            <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                    "origin-left transition",
                    isOpened && "rotate-45 -translate-y-1"
                )}
            ></line>
            <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge(
                    "transition",
                    isOpened ? "opacity-0" : ""
                )}
            ></line>
            <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                    "origin-left transition",
                    isOpened && "-rotate-45 translate-y-1"
                )}
            ></line>
        </svg>
    )
}