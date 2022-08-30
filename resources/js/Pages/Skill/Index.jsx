import React, {useState} from 'react';
import Main from "@/Layouts/Main";
import DataTable from 'react-data-table-component';

function Index(props) {

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
            sortable: true,
            cell:(data) => < img src={data.image} alt = "" className="img-fluid w-10" />
        },
        {
            name : 'Experience',
            selector: row => row.experience,
            sortable: true,
        }
    ];

    const data = props.data.skills;
    return (<Main title="Users Page">
            <div className="row gy-5 g-xl-8">
                <div className="col-12">
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </div>
            </div>
        </Main>
    );
}

export default Index;
