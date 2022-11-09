import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const Navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        Navigate("/searched/" + input);
    };
    return (
        <div onSubmit={submitHandler}>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder='Daenerys Targaryen' />
            <button >Search</button>
        </div>
    )
}

export default Search