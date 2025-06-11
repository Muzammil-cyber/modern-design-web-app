import Button from "@/components/Button";
import { NAV_LINKS } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface NavBarMobileProps {
    isOpened: boolean
}

export default function NavBarMobile({ isOpened }: NavBarMobileProps) {
    return (
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-col items-center gap-4 px-4 py-4 ">
                        {NAV_LINKS.map((link) => (
                            <a
                                href={link.href}
                                key={link.label}
                                className={twMerge("  text-white")}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button variant="secondary" className="w-full">
                            Log In
                        </Button>
                        <Button variant="primary" className="w-full">
                            Sign Up
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}