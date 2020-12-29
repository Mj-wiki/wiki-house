import React, { Component } from 'react';
import { Upload, Button, message, Input } from 'antd';
import 'antd/dist/antd.css';
import { uploadFile } from '@/api/Project.jsx';
export default class componentName extends Component {
  state = {
    fileList: [],
    uploading: false,
  };
  render() {
    const { uploading, fileList } = this.state;
    const props = {
      beforeUpload: file => {
        console.log(file);
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
    return (
      <div>
        <Upload {...props}>
          <Button>Select File</Button>
        </Upload>
        <div>
          <Button
            type="primary"
            onClick={this.handleUpload}
            // disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>
        </div>
      </div>
    );
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('file', fileList[0]);
    uploadFile(formData).then(res => {
      if (res.result == 'success') {
        message.success('upload successfully.');
      } else {
        message.error('upload failed.');
        return;
      }
      console.log(res);
    });
  };
}
