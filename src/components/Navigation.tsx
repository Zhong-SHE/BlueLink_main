import { FiX } from "react-icons/fi";

interface NavigationProps {
    handleClick: () => void;
    scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
    handleClick,
    scrollToSection,
}) => {
    const handleScrollAndClose = (id: string) => {
        handleClick();
        scrollToSection(id);
    };

    return (
        <div className="bg-[#0F172A] text-white fixed top-0 left-0 w-full h-screen z-50 flex flex-col gap-24">
            <div className="flex justify-between items-center p-5">
                <FiX className="text-2xl transition-animation cursor-pointer" onClick={handleClick} />
            </div>
            <div className="flex flex-col justify-center items-center gap-6 max-md:gap-4">
                {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                    <p
                        key={item}
                        onClick={() => handleScrollAndClose(item.toLowerCase())}
                        className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
