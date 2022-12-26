import { Button, Table, Modal, Input, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

function TableComponent({ data, deleteProducts, updateMethod }) {
  const { confirm } = Modal;

  const [isVisible, setVisible] = useState(false);
  const [updated, setUpdated] = useState({});

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this order?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteProducts(id);
      },
      onCancel() {},
    });
  };

  const onUpdateOrder = (id) => {
    let elementFind = data.find((e) => e.id == id);
    setVisible(true);
    setUpdated({ ...elementFind });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Customer Id",
      dataIndex: "customerId",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      sorter: (a, b) => {
        if (a.orderDate > b.orderDate) {
          return -1;
        }
        if (a.orderDate < b.orderDate) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Ship Via",
      dataIndex: "shipVia",
      sorter: (a, b) => {
        return a.shipVia - b.shipVia;
      },
    },
    {
      dataIndex: "id",
      render: (id) => (
        <Button
          danger
          onClick={() => {
            showDeleteConfirm(id);
          }}
        >
          Delete
        </Button>
      ),
    },
    {
      dataIndex: "id",
      render: (id) => (
        <Button type="primary" onClick={() => onUpdateOrder(id)}>
          Update
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey={(record) => record.id}
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 8 }}
      />
      <Modal
        title="Update data"
        open={isVisible}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          setVisible(false);
          updateMethod(updated.id, updated);
        }}
        okText="Update"
      >
        <Form>
          <FormItem
            label="Customer Id"
            rules={[
              { required: true, message: "Please input new Customer Id!" },
            ]}
          >
            <Input
              value={updated?.customerId}
              required
              onChange={(e) => {
                setUpdated((prev) => {
                  return { ...prev, customerId: e.target.value };
                });
              }}
            />
          </FormItem>
          <FormItem label="New Date">
            <Input
              type="date"
              onChange={(e) => {
                setUpdated((prev) => {
                  return { ...prev, orderDate: e.target.value };
                });
              }}
            />
          </FormItem>
          <FormItem
            label="Ship Via"
            rules={[{ required: true, message: "Please input new Ship Via!" }]}
          >
            <Input
              value={updated?.shipVia}
              type="number"
              min={0}
              onChange={(e) => {
                setUpdated((prev) => {
                  return { ...prev, shipVia: e.target.value };
                });
              }}
            />
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}

export default TableComponent;
