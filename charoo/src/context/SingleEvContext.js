import { useState, createContext } from "react";

export const SingleEvContext = createContext()

export const SingleEvController = (props) => {

    const [singleEv, setSingleEv] = useState({
    });

    return (
        <SingleEvContext.Provider value={[singleEv, setSingleEv]}>
            {props.children}
        </SingleEvContext.Provider>
    )
}