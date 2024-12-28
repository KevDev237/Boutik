import { useList } from "@refinedev/core";
import { useState } from "react";

import { Card, Col, Row, Typography, Space, Input } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;

function ShowCategories() {
    const [searchCategories, setSearchCategories] = useState('');
    const { data, isLoading } = useList({ resource: "CATEGORIES", filters: searchCategories });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const categoriesList = data?.data;

    return <div style={{ margin: 10, padding: 5, paddingBottom: 30 }}>
        <Title>Liste des Categories</Title>
        <Search
            placeholder="quel Categorie cherchez-vous?"
            allowClear
            // enterButton="Search"
            size="large"
            value={searchCategories}
            onChange={(e) => setSearchCategories(e.target.value)}
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