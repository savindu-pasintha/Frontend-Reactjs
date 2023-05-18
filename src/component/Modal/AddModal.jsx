import React, { useState } from 'react';
import {  Input, Modal, Select, Space  } from 'antd';

const AddModal = ({handleChange,isModalOpen,handleInput}) => {

  return (
      <Modal title="Add Todo" open={isModalOpen} onOk={()=>handleChange("ok")} onCancel={()=> handleChange("cancel")}>
        <div className='mt-4'>
            <Input placeholder="Task Name" type="text" onChange={(e)=>handleInput("name",e)} />
        </div>
        <div className='mt-4'>
            <Input placeholder="Task Description" type="text" onChange={(e)=>handleInput("description",e)}/>
        </div>
        <div className='mt-4'>
            <Input placeholder="Task Description" type="file" accept='image/*' onChange={(e)=>handleInput("file",e)}/>
        </div>
        <div className='mt-4'>
            <Select
        defaultValue="Status"
        style={{ width: 120 }}
        onChange={(e)=>handleInput("status",e)}
        options={[
            { value: 0, label: 'Todo' },
            { value: 1, label: 'In Progress' },
            { value: 2, label: 'Done' },
        ]}
        />
        </div>

      </Modal>
  );
};

export default AddModal;