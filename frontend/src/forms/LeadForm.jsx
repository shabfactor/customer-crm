import React from "react";
import { Form, Input,Select } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function LeadForm({ isUpdateForm = false }) {

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
        label="Client"
        name="client"
        rules={[
          {
            required: true,
            message: "Please input your client name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Please input date!",
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        label="Budget"
        name="budget"
        rules={[
          {
            required: true,
            message: "Please input your budget!",
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
    <Option value="In Progress">In Progress</Option>
    <Option value="Close Won">Close Won</Option>
    <Option value="Close Lost">Close Lost</Option>
       </Select>
      </Form.Item>
      <Form.Item
        label="request"
        name="request"
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
