import MyTable from "./MyTable";
import CATEGORIES from '../providers/simulation/CATEGORIES.json'
import { Card, Col, Row, Typography, Space } from "antd";

const { Title, Text } = Typography

function ShowCategories() {
    return <div style={{ margin: 10, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Categories</Title>

        <Row>
            {CATEGORIES.map((category) => (
                <Col md={12} lg={10} xl={6}>
                    <Card
                        bordered={false}
                        style={{ maxWidth: 500, margin: 25 }}
                    >
                        <Title level={4}>{category.name}</Title>
                        <Space
                            direction='vertical'
                            size={8}
                            style={{ paddingLeft: 10 }}>
                            <Text type="secondary"> <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Description :</span> {category.address}</Text>
                            <Text type="secondary" style={{ paddingLeft: 10 }}> {category.description}</Text>
                        </Space>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
}

export default ShowCategories;