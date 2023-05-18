import React, { useState } from "react";
import styled, { css } from 'styled-components'
import TodoCard from "../../component/TodoCard/TodoCard";
import './Todo.css'
import { Layout, Space, Col, Row,Button ,Typography  } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const Todo = () => {
    const [todoList,setTodoList] = useState([
        {
          id: 1,
          name: "Task 1",
          description: "This is a Description.",
          image: "b64",
          createdAt: "2023/05/18 17:05PM",
          status:1
        },{
            id: 2,
            name: "Task 2",
            description: "This is a Description.",
            image: "b64",
            createdAt: "2023/05/18 17:05PM",
            status:1
          },
          {
            id: 3,
            name: "Task 3",
            description: "This is a Description.",
            image: "b64",
            createdAt: "2023/05/18 17:05PM",
            status:2
          }, {
            id: 4,
            name: "Task 4",
            description: "This is a Description.",
            image: "b64",
            createdAt: "2023/05/18 17:05PM",
            status:0
          },{
              id: 5,
              name: "Task 5",
              description: "This is a Description.",
              image: "b64",
              createdAt: "2023/05/18 17:05PM",
              status:1
            },
            {
              id: 6,
              name: "Task 6",
              description: "This is a Description.",
              image: "b64",
              createdAt: "2023/05/18 17:05PM",
              status:1
            },
      ])

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
        <Sider style={siderStyle}></Sider>
        <Layout>
          <Header style={headerStyle}></Header>
          <Content style={contentStyle } >
            <>
              <Row>
                <Col span={24}>
                    <AddButton>+ Add Todos</AddButton>
                </Col>
              </Row>
              <Row style={rowStyled}>
                <Col span={8} style={colStyled}>
                  <Title level={4}>Todo</Title>
                </Col>
                <Col span={8} style={colStyled}>
                  <Title level={4}>In Progress</Title>
                </Col>
                <Col span={8} style={colStyled}>
                  <Title level={4}>Done</Title>
                </Col>
              </Row>

              <div class="scroll-area p-0 m-0">
                <Row style={rowStyled}  >
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 0 && ( <TodoCard data={item}/>))}
                    </Col>
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 1 && ( <TodoCard data={item}/>))}
                    </Col>
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 2 && ( <TodoCard data={item}/>))}
                    </Col>
                </Row>
              </div>
            </>
          </Content>
          <Footer style={footerStyle}></Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default Todo;

const rowStyled = {
   
    color:'white'
}
const colStyled = {
    border:'1px solid purple',
}
const AddButton= styled(Button)`
color: green;
width: 400px;
`
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
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#000",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: parent,
  height: "10vh",
  backgroundColor: "#000",
};
