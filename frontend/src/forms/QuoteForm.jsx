import React from "react";
import { Form, Input } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function QuoteForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      > 
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      > 
        <Input />
      </Form.Item>
      <Form.Item
        name="Phone"
        label="phone"
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
        name="Email"
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
        label="Quantity"
        name="quantity"
        rules={[
          {
            required: true,
            message: "Please input your quantity!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Request"
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
