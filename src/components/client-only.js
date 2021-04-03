import React from "react";
import {useEffect, useState} from "react";

const ClientOnly = ({children,...props}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...props}>{children}</div>;
}

export default ClientOnly;