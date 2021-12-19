import React, { useState } from "react";
import cn from "classnames";

import "../scss/accordeon.scss";

const AccordeonItem = ({ title, id, children }) => {
    const [isOpen, setIsOpen] = useState(0);

    const handleOpen = (id) => {
        isOpen === id ? setIsOpen(0) : setIsOpen(id);
    };

    return (
        <div
            className={cn("accordeon__item", { opened: isOpen === id })}
            onClick={() => handleOpen(id)}
            tabIndex="1"
        >
            <div className="accordeon__header">
                <span className="accordeon__title">
                    {title}
                </span>
                <span className="accordeon__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                    </svg>
                </span>
            </div>
            {isOpen === id && <div className="accordeon__content">{children}</div>}
        </div>
    );
};

export default AccordeonItem;
