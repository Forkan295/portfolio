import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import SideNav from '@/Components/backend/SideNav';
import {Head} from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <div className="d-flex flex-column flex-root">
            <div className="page d-flex flex-row flex-column-fluid">
               <SideNav></SideNav>
            </div>
        </div>
    );
}
