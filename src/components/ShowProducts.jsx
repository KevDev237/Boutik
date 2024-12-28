import { useList } from "@refinedev/core";
import { useState } from "react";

import MyTable from "./MyTable";
import { Typography, Input, Checkbox } from "antd";


const { Title } = Typography;
const { Search } = Input;

function ShowProducts() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState('');

    const { data, isLoading } = useList({ resource: "PRODUCTS", filters: search });
    
    const columns = [
        // {
        //   title: 'Id',
        //   dataIndex: 'id',
        //   key: 1,
        //   sorter: true
        // },
        {
            title: 'Nom',
            dataIndex: 'name',
            key: 1,
            fixed: 'left',
            sorter: true
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 2,
        },
        {
            title: 'Prix',
            dataIndex: 'price',
            key: 3,
            sorter: true
        },
        {
            title: 'Categorie',
            dataIndex: 'category_name',
            key: 4,
            sorter: true
        },
        {
            title: 'Supplier',
            dataIndex: 'supplier_name',
            key: 5,
            sorter: true
        },
    ];

    const dataSource = data?.data.filter(product =>{
        if (showStockedOnly && !product.isStocked){
            return false;
        }
        return true;
    }

    );


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div style={{ margin: 15, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Produits</Title>
        <Search
            placeholder="quel Produit cherchez-vous?"
            allowClear
            // enterButton="Search"
            size="large"
            style={{ marginBottom: 10 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        // onSearch={onSearch}
        />
        <Checkbox
            checked={showStockedOnly}
            onChange={(e) => setShowStockedOnly(e.target.checked)}
            style={{ marginBottom: 10, paddingLeft: 25 }}>
            n'afficher que les produits en stock
        </Checkbox>
        <MyTable ColumnProduct={columns} ListProduct={dataSource} />
    </div>
}

export default ShowProducts;