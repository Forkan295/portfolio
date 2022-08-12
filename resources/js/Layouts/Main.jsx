import React from 'react';
import SideNav from "@/Components/backend/SideNav";

const Main = ({title, children}) => {
    React.useEffect(() => {
        document.title = title ?? "No title";
    });
    return (
        <div>
            <SideNav/>
            <div className="wrapper d-flex flex-column flex-row-fluid">
                <div className="content d-flex flex-column flex-column-fluid">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Main;
