import React, { useEffect } from 'react';

const DynamicHead = ({ title }) => {
    const favicon ='../asserts/favicon.svg'
    useEffect(() => {
        // Change the document title
        document.title = title;

        // Change the favicon
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = favicon;
        } else {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.type = 'image/svg+xml';
            newLink.href = favicon;
            document.head.appendChild(newLink);
        }
    }, [title, favicon]);

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default DynamicHead;
