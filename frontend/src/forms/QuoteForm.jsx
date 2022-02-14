import React from "react";
import { Dropdown, Menu, Form, Input, Select } from "antd";
import { DatePicker } from "@/components/CustomAntd";
import {request} from "../request";
import useFetch from "@/hooks/useFetch";

export default function QuoteForm({ isUpdateForm = false }) {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const asyncList = () => {
    return request.list("product");            //change this to fix code
  };
  const { result, isSuccess } = useFetch(asyncList);
  
  const returnItems = () => {
    if (isSuccess && result) return result;
    return [];
  };
  const data = returnItems();
  let items = [];
      for(var key in data){
        if (data.hasOwnProperty(key)){
          items.push(data[key].productName)
        }
      }
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
        label="last Name"
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
        direction="vertical"
        label="Product"
        name="product"
        rules={[
          {
            required: true,
            message: "Please select product",
          },
        ]}
        >
        <Select placeholder="selact a product" style={{ width: 220 }} onChange={handleChange} allowClear>
          {items.map(item => (
            <Option key={item} value={item} label={item}>
              <div>
                {item}
              </div>
            </Option>
          ))}
       </Select>
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
