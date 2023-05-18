import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components'
import TodoCard from "../../component/TodoCard/TodoCard";
import './Todo.css'
import { Layout, Space, Col, Row,Button ,Typography  } from "antd";
import AddModal from "../../component/Modal/AddModal";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const Todo = () => {
    const [dataObj,setDataObj] = useState({id:null,name:'',description:'',createdAt:null,status:0,images:[]})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoList,setTodoList] = useState([
        {
          id: 1,
          name: "Task 1",
          description: "This is a Description.",
          images: [],
          createdAt: "2023/05/18 17:05PM",
          status:1
        },{
            id: 2,
            name: "Task 2",
            description: "This is a Description.",
            images: [],
            createdAt: "2023/05/18 17:05PM",
            status:1
          },
          {
            id: 3,
            name: "Task 3",
            description: "This is a Description.",
            images: [],
            createdAt: "2023/05/18 17:05PM",
            status:2
          }, {
            id: 4,
            name: "Task 4",
            description: "This is a Description.",
            images: [],
            createdAt: "2023/05/18 17:05PM",
            status:0
          },{
              id: 5,
              name: "Task 5",
              description: "This is a Description.",
              images: [],
              createdAt: "2023/05/18 17:05PM",
              status:1
            },
            {
              id: 6,
              name: "Task 6",
              description: "This is a Description.",
              images: [],
              createdAt: "2023/05/18 17:05PM",
              status:1
            },
      ])

const handleInput = (type,e)=>{
 if(type === "name"){
    console.log(e.target.value)
    setDataObj({...dataObj, name: e.target.value})
 }

 if(type === "description"){
    console.log(e.target.value)
    setDataObj({...dataObj, descriptions: e.target.value})
 }

 if(type == "status"){
    console.log(e)
    setDataObj({...dataObj,status:e})
 }

 if (type === "file") {
   const files = e.target.files;
   var imgs = [];
   imgs = dataObj.images;
   if (files && files.length > 0) {
     Array.from(files).forEach((file) => {
       const reader = new FileReader();
       reader.onload = function (event) {
         const base64String = event.target.result;
         imgs.push(base64String);
       };
       reader.readAsDataURL(file);
     });
     if (imgs.length > 0) {
       setDataObj({ ...dataObj, images: imgs });
     }
   }
 }
 const date = new Date()
 setDataObj({...dataObj, id: todoList.length, createdAt: date.toLocaleString()})
}

const hangleChange = (type)=>{
    if(type == "ok"){
        setTodoList([...todoList,dataObj])
        console.log(todoList.length,dataObj)
        setIsModalOpen(false)
    }
    if(type == "cancel"){
         setIsModalOpen(false)
    }
}


useEffect(()=>{},[isModalOpen])
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
                    <AddButton onClick={()=>setIsModalOpen(true)}>+ Todos</AddButton>
                    <AddModal handleChange={(type)=>hangleChange(type)} isModalOpen={isModalOpen} handleInput={handleInput}/>
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

              <div className="scroll-area p-0 m-0">
                <Row style={rowStyled}  >
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 0 && ( <TodoCard data={item} key={ind}/>))}
                    </Col>
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 1 && ( <TodoCard data={item}  key={ind}/>))}
                    </Col>
                    <Col span={8} style={colStyled}>
                        {todoList.map((item,ind) => item.status == 2 && ( <TodoCard data={item}  key={ind}/>))}
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
  height: "10vh",
  backgroundColor: "#000",
};


export default Todo;