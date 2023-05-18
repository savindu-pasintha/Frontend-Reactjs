import React from 'react'
import './TodoCard.css'
import { DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { Layout, Space, Col, Row,Button ,Typography  } from "antd";
const { Title } = Typography;

const TodoCard = ({data,handleClick}) => {
  return (
    <div className='row border boder-1 p-0 mb-2 mx-2 mt-2' >
     <div className='d-flex'>
        <Title level={4} className="text-capitalize">{data?.name}</Title>
     </div>
     <div className='d-flex'>
       <Title level={5} className="text-capitalize">{data?.description}</Title>
     </div>
     <div className='d-flex'>
       <Title level={5}>{data?.createdAt.toString()}</Title>
     </div>
     <div className='d-flex justify-content-around m-2'>
       <EditOutlined style={{color:"green",fontSize:30}} onClick={(e)=>handleClick("edit",data)}/>
       <DeleteOutlined style={{color:"red",fontSize:30}} onClick={(e)=>handleClick("delete",data)}/>
     </div>
    </div>
  )
}


export default TodoCard