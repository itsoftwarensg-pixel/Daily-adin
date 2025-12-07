import React from "react";

// Props
interface Props {
    children: Readonly<React.ReactNode>;
}

const Container = ({ children }: Props) => {
    return (
        <div className="container px-4 mx-auto">
            {children}
        </div>
    );
};

export default Container;
