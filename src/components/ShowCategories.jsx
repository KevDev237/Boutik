import { useList } from "@refinedev/core";

import { Card, Col, Row, Typography, Space, Input } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;

function ShowCategories() {
    const { data, isLoading } = useList({ resource: "CATEGORIES" });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    let categoriesList = data?.data;

    return <div style={{ margin: 10, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Categories</Title>
        <Search
            placeholder="quel Categorie cherchez-vous?"
            allowClear
            enterButton="Search"
            size="large"
        // onSearch={onSearch}
        />
        <Row>
            {categoriesList.map((category) => (
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