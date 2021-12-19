import React from "react";
import AccordeonItem from "./components/AccordeonItem.jsx";
import data from './data';
import "./scss/main.scss";

export default function App() {
    return (
        <div className="App">
            <div className="b-accordeon">
                <h1>{data.title}</h1>
                {data.rows.filter(item => item.active).slice(0, data.maxCount).map((item, key) => 
                    <AccordeonItem title={item.question} id={item.id} key={key}>
                        {item.answer}
                    </AccordeonItem>
                )}
            </div>
        </div>
    );
}
