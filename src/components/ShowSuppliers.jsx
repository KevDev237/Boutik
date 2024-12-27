import { Card, Col, Row, Typography, Space, Input } from 'antd';
import MyTable from "./MyTable";
import SUPPLIERS from '../providers/simulation/SUPPLIERS.json'

const { Title, Text } = Typography;
const { Search } = Input;

function ShowSuppliers() {
    return (
        <div style={{ margin: 10, padding: 5, paddingBottom: 30 }}>
            <Title>Liste des Fournisseurs</Title>
            <Search
                placeholder="quel Fournisseur cherchez-vous?"
                allowClear
                enterButton="Search"
                size="large"
            // onSearch={onSearch}
            />
            <Row>
                {SUPPLIERS.map((supplier) => (
                    <Col md={12} lg={10} xl={6}>
                        <Card
                            bordered={false}
                            style={{ maxWidth: 500, margin: 25 }}
                        >
                            <Title level={4}>{supplier.name}</Title>
                            <Space
                                direction='vertical'
                                size={8}
                                style={{ paddingLeft: 20 }}>
                                <Text type="secondary"> <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Adresse :</span> {supplier.address}</Text>
                                <Text type="secondary"><span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Contact :</span> {supplier.contact}</Text>
                            </Space>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}


export default ShowSuppliers;