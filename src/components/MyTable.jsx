import React from 'react';
import { Table } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }

      .row-out-of-stock {
        color: red; /* Texte rouge */
      }
    `,
  };
});

const MyTable = ({ColumnProduct, ListProduct}) => {
  const { styles } = useStyle();

  const getRowClassName = (record) => {
    return record.isStocked ? '' : 'row-out-of-stock';
  };

  return (
    <Table
      className={styles.customTable}
      pagination={false}
      columns={ColumnProduct}
      dataSource={ListProduct}
      scroll={{
        x: 'max-content',
      }}
      rowClassName={getRowClassName}
    />
  );
};
export default MyTable;