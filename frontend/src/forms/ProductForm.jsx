import React from "react";
import { Form, Input,Select,option } from "antd";

export default function ProductForm({ isUpdateForm = false }) {
  const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}
  return (
    <>
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
        </Form.Item>
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        direction="vertical"
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: "Please select a status",
          },
        ]}
        >
        <Select
        showSearch
        placeholder="Select a status"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
         }
       >
    <Option value="Available">Available</Option>
    <Option value="Out of stock">Out of stock</Option>
    <Option value="Limited">Limited</Option>
       </Select>
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
