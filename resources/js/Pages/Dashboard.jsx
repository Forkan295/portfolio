import React from 'react';
import DashboardContent from '@/Components/backend/dashboard/DashboardContent';
import Main from "@/Layouts/Main";

export default function Dashboard(props) {
    return (
        <Main title="Users Page">
            <DashboardContent/>
        </Main>
    );
}
