import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import TodoCard from "../../component/TodoCard/TodoCard";
import "./Todo.css";
import { Layout, Space, Col, Row, Button, Typography } from "antd";
import AddModal from "../../component/Modal/AddModal";
import {
  setTodosAction,
  deleteTodosAction,
} from "../../../StatesManagement/reducers/TodosReducerslice";
import { useDispatch, useSelector } from "react-redux";
import { FilterOutlined} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const Todo = () => {
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todo).todos;
  const [id, setId] = useState(0);
  const [status, setStatus] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInput = (type, e) => {
    if (type === "name") {
      setName(e.target.value);
    }

    if (type === "description") {
      setDescription(e.target.value);
    }

    if (type === "status") {
      setStatus(e);
    }

    if (type === "file") {
      const files = e.target.files;
      var imgs = [];
      imgs = images;
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
          setImages(imgs);
        }
      }
    }
    setCreatedAt(new Date().toLocaleString().toString());
    setId(getTodos?.length);
  };

  const handleChange = (type) => {
    if (type == "ok") {
     if(id && name && description && status) return
      dispatch(
        setTodosAction({
          id: id,
          name: name,
          description: description,
          createdAt: createdAt,
          images: images,
          status: status,
        })
      );
      setIsModalOpen(false);
    }
    if (type == "cancel") {
      setIsModalOpen(false);
    }
  };

  const handleClick = (type, data) => {
    if (type === "delete") {
      dispatch(deleteTodosAction(data.id));
    }
    if (type === "edit") {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <AddButton onClick={() => setIsModalOpen(true)} className="text-capitalize bg-warning text-dark ">+ Todo</AddButton>
          <AddModal
            handleChange={(type) => handleChange(type)}
            isModalOpen={isModalOpen}
            handleInput={handleInput}
          />
        </Col>
        <div className="d-flex w-100 m-2"> <FilterOutlined style={{color:"red",fontSize:30}}  label="" onClick={(e)=>{consolr.log("")}}/> </div>
      </Row>
      <Row style={rowStyled}>
        <Col span={8} style={colStyled}>
          <Title level={4} className="fw-bolder  bg-warning text-dark">Todo</Title>
        </Col>
        <Col span={8} style={colStyled}>
          <Title level={4} className="fw-bolder  bg-primary text-dark">In Progress</Title>
        </Col>
        <Col span={8} style={colStyled}>
          <Title level={4} className="fw-bolder  bg-success text-dark">Done</Title>
        </Col>
      </Row>

      <div className="scroll-area p-0 m-0">
        <Row style={rowStyled}>
          <Col span={8} style={colStyled}>
            {getTodos.map(
              (item, ind) =>
                item.status === 0 && (
                  <TodoCard
                    data={item}
                    key={ind}
                    handleClick={(type, data) => handleClick(type, data)}
                  />
                )
            )}
          </Col>
          <Col span={8} style={colStyled}>
            {getTodos.map(
              (item, ind) =>
                item.status === 1 && (
                  <TodoCard
                    data={item}
                    key={ind}
                    handleClick={(type, data) => handleClick(type, data)}
                  />
                )
            )}
          </Col>
          <Col span={8} style={colStyled}>
            {getTodos.map(
              (item, ind) =>
                item.status === 2 && (
                  <TodoCard
                    data={item}
                    key={ind}
                    handleClick={(type, data) => handleClick(type, data)}
                  />
                )
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

const rowStyled = {
  color: "white",
};
const colStyled = {
//   border: "1px solid purple",
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
