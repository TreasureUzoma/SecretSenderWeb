import { useEffect, useRef, useState } from "react";
import SectionOne from "./home/SectionOne";
import SectionTwo from "./home/SectionTwo";
import SectionThree from "./home/SectionThree";

const HomeMain = () => {
    const [visibleIndex, setVisibleIndex] = useState(Array(6).fill(false)); // 6 items to track
    const sectionsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the container
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute("data-index");
                    setVisibleIndex(prev => {
                        const newVisibleIndex = [...prev];
                        newVisibleIndex[index] = true;
                        return newVisibleIndex;
                    });
                    observer.unobserve(entry.target); // Stop observing after it has become visible
                }
            });
        }, options);

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main className="text-center font-bold p-5">
            <SectionOne
                visibleIndex={visibleIndex}
                setVisibleIndex={setVisibleIndex}
                sectionsRef={sectionsRef}
            />
            <SectionTwo />
            <SectionThree
                visibleIndex={visibleIndex}
                setVisibleIndex={setVisibleIndex}
                sectionsRef={sectionsRef}
            />
        </main>
    );
};

export default HomeMain;
