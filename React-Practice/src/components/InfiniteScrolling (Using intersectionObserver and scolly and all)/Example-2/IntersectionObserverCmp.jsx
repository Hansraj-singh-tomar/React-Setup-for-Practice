//! From ChatGPT

import React, { useState, useEffect, useRef } from 'react'

const IntersectionObserverCmp = () => {
    const [items, setItems] = useState(Array.from({ length: 20 })); // Initial list
    const [isLoading, setIsLoading] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries) => {
                console.log("entries", entries);

                const target = entries[0];

                // console.log("target", target);

                if (target.isIntersecting) {
                    loadMoreItems();
                }
            },
            { threshold: 1.0 } // Trigger when 100% of the loader is visible
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (loaderRef.current) {
                // observer.disconnect();
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    const loadMoreItems = () => {
        if (isLoading) return; // Prevent multiple triggers

        setIsLoading(true);
        setTimeout(() => {
            // Simulate a network request
            setItems((prevItems) => [
                ...prevItems,
                ...Array.from({ length: 20 }), // Add 20 more items
            ]);
            setIsLoading(false);
        }, 1500); // Simulate loading delay
    };

    return (
        <div>
            <ul>
                {items.map((_, index) => (
                    <li key={index} style={{ padding: '20px', border: '1px solid #ccc' }}>
                        Item {index + 1}
                    </li>
                ))}
            </ul>
            {/* The loader element */}
            <div ref={loaderRef} style={{ height: '50px', background: 'lightgray' }}>
                {isLoading ? 'Loading more items...' : 'Scroll down to load more'}
            </div>
        </div>
    );
};

export default IntersectionObserverCmp