import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Layout, Space, Button, Typography } from "antd";
import Routes from "./routes/Routes";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const LayoutScreen = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        backgroundColor: "#000",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider style={siderStyle}>
            {
                Routes.map((item,ind)=>(<div className="d-flex text-light p-0 m-0 w-100  h-25 justify-content-center align-items-center  " key={ind}>
                    <Link  className=" text-dark p-0 m-2 text-center w-50 bg-warning fw-bolder" to={item.path}>{item.name}</Link>
                </div>))
               }
        </Sider>
        <Layout>
          <Header style={headerStyle}> </Header>
          <Content style={contentStyle}>
              <Outlet />
          </Content>
          <Footer style={footerStyle}></Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

const rowStyled = {
  color: "white",
};
const colStyled = {
  border: "1px solid purple",
};
const AddButton = styled(Button)`
  color: green;
  width: 400px;
`;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "10vh",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#000",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "70vh",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#FFF",
};
const siderStyle = {
  // textAlign: "center",
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#000",
  
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "10vh",
  backgroundColor: "#000",
};

export default LayoutScreen;
