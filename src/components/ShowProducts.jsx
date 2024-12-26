import MyTable from "./MyTable";
import PRODUCTS from '../providers/simulation/PRODUCTS.json'
import { Input, Typography } from "antd";

const { Title } = Typography
const { Search } = Input;

function ShowProducts() {
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
            dataIndex: 'category_id',
            key: 4,
            sorter: true
        },
        {
            title: 'Supplier',
            dataIndex: 'supplier_id',
            key: 5,
            sorter: true
        },
    ];

    return <div style={{ margin: 15, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Produits</Title>
        <Search
            placeholder="quel Produit cherchez-vous?"
            allowClear
            enterButton="Search"
            size="large"
        // onSearch={onSearch}
        />
        <MyTable ColumnProduct={columns} ListProduct={PRODUCTS} />
    </div>
}

export default ShowProducts;