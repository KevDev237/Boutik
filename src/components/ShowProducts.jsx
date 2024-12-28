import { useList } from "@refinedev/core";

import MyTable from "./MyTable";
import { Typography, Input } from "antd";


const { Title } = Typography;
const { Search } = Input;

function ShowProducts() {

    const { data, isLoading } = useList({ resource: "PRODUCTS" });
    
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

    let dataSource = data?.data;
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div style={{ margin: 15, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Produits</Title>
        <Search
            placeholder="quel Produit cherchez-vous?"
            allowClear
            enterButton="Search"
            size="large"
            style={{ marginBottom: 25 }}
        // onSearch={onSearch}
        />
        <MyTable ColumnProduct={columns} ListProduct={dataSource} />
    </div>
}

export default ShowProducts;