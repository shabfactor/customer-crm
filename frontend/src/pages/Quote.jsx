import React from "react";
import CrudModule from "@/modules/CrudModule";
import QuoteForm from "@/forms/QuoteForm";

function Quote() {
  const entity = "quote";
  const searchConfig = {
    displayLabels: ["firstName"],
    searchFields: "firstName",
    outputValue: "_id",
  };

  const panelTitle = "Quote Panel";
  const dataTableTitle = "Quote Lists";
  const entityDisplayLabels = ["name"];

  const readColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Request",
      dataIndex: "request",
    },
  ];
  const dataTableColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: {
        compare: (a, b) => a.client.length - b.client.length,
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: {
        compare: (a, b) => a.client.length - b.client.length,
      },
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: {
        compare: (a, b) => a.math - b.math,
      },
    },
  ];

  const ADD_NEW_ENTITY = "Add new quote";
  const DATATABLE_TITLE = "quotes List";
  const ENTITY_NAME = "quote";
  const CREATE_ENTITY = "Create quote";
  const UPDATE_ENTITY = "Update quote";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<QuoteForm />}
      updateForm={<QuoteForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Quote;
