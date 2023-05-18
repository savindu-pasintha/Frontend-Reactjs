import React from 'react'
import './TodoCard.css'
import styled, { css } from 'styled-components'
import { Layout, Space, Col, Row,Button ,Typography  } from "antd";
const { Title } = Typography;

const TodoCard = ({data}) => {
  return (
    <div className='row border boder-1 p-0 mb-2 mx-2 mt-2'>
     <Title level={4}>{data?.name}</Title>
     <Title level={5}>{data?.description}</Title>
     <Title level={5}>Created : {data?.createdAt}</Title>
    </div>
  )
}


export default TodoCard