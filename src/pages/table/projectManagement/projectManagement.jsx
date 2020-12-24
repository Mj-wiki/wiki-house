import React, { Component } from 'react';
import '../../../assets/css/index.css';
import Style from './projectManagement.less';
import SearchFrom from '../../../components/SearchFrom/SearchFrom';
import AddPorject from '../../../components/Addproject/Addproject';
import { Button, Form, Input, Select, Upload, message } from 'antd';
import { SwitcherTwoTone, DeleteTwoTone } from '@ant-design/icons';
import {
  CreateProject,
  GetProjectList,
  deleteProject,
} from '@/api/Project.jsx';
export default class projectManagement extends Component {
  state = {
    isModalVisible: false,
    isRemoveVisible: false,
    uploadkeys: false,
    ProjectData: [],
    ProjectId: '',
    userName: 'kangjun',
  };
  formRef = React.createRef();
  uploadprops = {
    name: 'file',
    action: 'http://127.0.0.1:8000/api/project/upload/',
    // listType:"picture",
    headers: {
      ContentType: 'multipart/form-data',
    },
    data: {},
    beforeUpload: file => {
      return true;
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  render() {
    const {
      isModalVisible,
      isRemoveVisible,
      uploadkeys,
      ProjectData,
    } = this.state;
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const areas = [
      { label: '全部领域', value: '0' },
      { label: '领域1', value: '1' },
      { label: '领域2', value: '2' },
    ];
    const normFile = e => {
      // console.log(e)
      if (e.fileList.length === 2) {
        e.fileList = e.fileList.slice(-1);
      }
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
    return (
      <div className={Style.projectwrapper}>
        <SearchFrom
          SearchFromValue={(select, ipt) => this.SearchFromValue(select, ipt)}
        />
        <div className={Style.projectBox}>
          <div className={Style.projectheader}>
            <p>查询到10086条结果</p>
            <Button type="primary" onClick={() => this.Blundeventshowproject()}>
              + 创建项目
            </Button>
          </div>
        </div>
        <div className={Style.List}>
          {ProjectData.map((item, index) => {
            return (
              <div className={Style.List_slide} key={index}>
                <div className={Style.list_header}>
                  <div></div>
                  <div>
                    <SwitcherTwoTone
                      onClick={() => this.Blundeventshowproject(item)}
                    />
                    <DeleteTwoTone
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.blundeventremovelist(item)}
                    />
                  </div>
                </div>
                <div className={Style.eachartswrapper}>
                  <img
                    src={item.project_photo}
                    alt=""
                    className={Style.eachartsimage}
                  />
                </div>
                <h1 className={Style.h1}>{item.project_name}</h1>
                <p className={Style.xiangmuname}>
                  所属组织：
                  <span className={Style.marginLeft}>{item.project_code}</span>
                </p>
                <p className={Style.xiangmuname}>
                  领域类型：
                  <span className={Style.marginLeft}>
                    {item.project_fieldname}
                  </span>
                </p>
                <p className={Style.xiangmuname}>
                  概念总数：
                  <span className={Style.marginLeft}>{item.concepts}</span>
                </p>
                <p className={Style.xiangmuname}>
                  三元数组：
                  <span className={Style.marginLeft}>{item.triples}</span>
                </p>
                <p className={Style.xiangmuname}>
                  项目描述：
                  <span className={Style.marginLeft}>
                    {item.project_introduction}
                  </span>
                </p>
                <div className={Style.xiangmubuton}>
                  <div className={Style.Setstatetext}>
                    最新由{item.update_user || item.create_user}修改于
                    {item.create_time}
                  </div>
                  <Button
                    type="primary"
                    className={Style.antdbutton}
                    onClick={() => this.blundeventToDetail()}
                  >
                    查看
                  </Button>
                </div>
              </div>
            );
          })}
          {/* <div className={Style.List_slide}>
            <div className={Style.list_header}>
              <div></div>
              <div>
                <SwitcherTwoTone />
                <DeleteTwoTone style={{ marginLeft: '10px' }} />
              </div>
            </div>
            <div className={Style.eachartswrapper}>
              <img src={eachartsimg} alt="" className={Style.eachartsimage} />
            </div>
            <h1 className={Style.h1}>项目名称</h1>
            <p className={Style.xiangmuname}>
              所属组织：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              领域类型：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              概念总数：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              三元数组：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              项目描述：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <div className={Style.xiangmubuton}>
              <div className={Style.Setstatetext}>
                最新由张三修改于2020/11/23
              </div>
              <Button type="primary" className={Style.antdbutton}>
                查看
              </Button>
            </div>
          </div>
          <div className={Style.List_slide}>
            <div className={Style.list_header}>
              <div></div>
              <div>
                <SwitcherTwoTone />
                <DeleteTwoTone style={{ marginLeft: '10px' }} />
              </div>
            </div>
            <div className={Style.eachartswrapper}>
              <img src={eachartsimg} alt="" className={Style.eachartsimage} />
            </div>
            <h1 className={Style.h1}>项目名称</h1>
            <p className={Style.xiangmuname}>
              所属组织：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              领域类型：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              概念总数：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              三元数组：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              项目描述：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <div className={Style.xiangmubuton}>
              <div className={Style.Setstatetext}>
                最新由张三修改于2020/11/23
              </div>
              <Button type="primary" className={Style.antdbutton}>
                查看
              </Button>
            </div>
            <div className={Style.listDialog}>
              <div className={Style.listTextdalog}>
                <p>
                  上传文件失败，请点击
                  <span
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => this.blundeventReupload()}
                  >
                    此处
                  </span>
                  重新上传
                </p>
                <Button type="primary" className={Style.cancelbtn}>
                  取消
                </Button>
              </div>
            </div>
          </div> */}
          {/* <div className={Style.List_slide}>
            <div className={Style.list_header}>
              <div></div>
              <div>
                <SwitcherTwoTone />
                <DeleteTwoTone style={{ marginLeft: '10px' }} />
              </div>
            </div>
            <div className={Style.eachartswrapper}>
              <img src={eachartsimg} alt="" className={Style.eachartsimage} />
            </div>
            <h1 className={Style.h1}>项目名称</h1>
            <p className={Style.xiangmuname}>
              所属组织：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              领域类型：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              概念总数：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              三元数组：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <p className={Style.xiangmuname}>
              项目描述：<span className={Style.marginLeft}>组织名称</span>
            </p>
            <div className={Style.xiangmubuton}>
              <div className={Style.Setstatetext}>
                最新由张三修改于2020/11/23
              </div>
              <Button type="primary" className={Style.antdbutton}>
                查看
              </Button>
            </div>
          </div> */}
        </div>
        <AddPorject
          isModalVisible={isModalVisible}
          Blundeventcloseproject={() => this.Blundeventcloseproject()}
          Blundeventcancelproject={() => this.Blundeventcancelproject()}
          cancelText={'提交'}
          okText={'返回'}
          title={'创建项目'}
          closable={false}
          centered={true}
          width={620}
        >
          <div>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={this.onFinish}
              ref={this.formRef}
            >
              <Form.Item
                name="project_name"
                label="项目名称"
                rules={[
                  {
                    required: true,
                    message: '项目名称不能为空！',
                  },
                  {
                    validator: this.validateServiceName,
                  },
                ]}
              >
                <Input maxLength="50" />
              </Form.Item>
              <Form.Item
                name="project_fieldcode"
                label="项目领域"
                rules={[
                  {
                    required: true,
                    message: '项目领域不能为空',
                  },
                  {
                    validator: this.validateServiceName,
                  },
                ]}
              >
                <Select options={areas} onChange={this.blundSelect} />
              </Form.Item>
              <Form.Item
                name="project_code"
                label="项目组织"
                rules={[
                  {
                    required: true,
                    message: '项目组织不能为空！',
                  },
                ]}
              >
                <Input maxLength="50" />
              </Form.Item>
              <Form.Item name="project_introduction" label="项目简介">
                <Input.TextArea maxLength="50" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="上传文件"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: '文件不能为空！' }]}
              >
                <Upload {...this.uploadprops}>
                  <Button>选择文件</Button>
                </Upload>
              </Form.Item>
            </Form>
          </div>
        </AddPorject>
        <AddPorject
          isModalVisible={isRemoveVisible}
          Blundeventcloseproject={() => this.blundeventdalogok()}
          Blundeventcancelproject={() => this.blundeventremovedalogclose()}
          cancelText={'确定'}
          okText={'取消'}
          title={'删除项目'}
          closable={false}
          centered={true}
          width={420}
        >
          确定删除此项目吗？
        </AddPorject>
      </div>
    );
  }
  SearchFromValue = (select, ipt) => {
    this.initProjectlist(select, ipt);
  };
  Blundeventshowproject = item => {
    this.setState({
      isModalVisible: true,
    });
    console.log(item);
  };
  Blundeventcloseproject = async () => {
    //创建项目弹框下的提交按钮
    this.setState({
      isModalVisible: false,
      uploadkeys: true,
    });
    const form = this.formRef.current;
    try {
      const values = await form.validateFields([
        'project_name',
        'project_fieldcode',
        'project_code',
        'project_introduction',
      ]);
      const {
        project_name,
        project_fieldcode,
        project_code,
        project_introduction,
      } = values;
      let obj = {
        project_name: '康俊3',
        project_code: 'kangjun',
        project_status: 1,
        project_introduction: 'kangjun',
        project_photo: 'kangjun',
        project_fieldcode: '10089',
        project_fieldname: 'kangjun',
        create_user: 'kangjun',
      };
      CreateProject(obj).then(res => {
        console.log(res.data);
      });
    } catch (err) {
      // console.log(err)
    }
  };
  Blundeventcancelproject = async () => {
    //创建项目弹框下的返回按钮
    const form = this.formRef.current;
    form.resetFields();
    this.setState({
      isModalVisible: false,
    });
  };
  validateServiceName = (rule, val, callback) => {
    //正则校验输入框首尾去空格
    var pattern = new RegExp(/^[\s　]|[ ]$/gi);
    if (pattern.test(val)) {
      return Promise.reject('开头结尾不允许使用空格');
    }
    return Promise.resolve();
  };
  blundeventremovelist = item => {
    const { id } = item;
    this.setState({
      ProjectId: id,
    });
    this.setState({
      isRemoveVisible: true,
    });
  };
  blundeventremovedalogclose = () => {
    this.setState({
      isRemoveVisible: false,
    });
  };
  blundeventdalogok = () => {
    const { ProjectId, userName } = this.state;
    let obj = {
      ProjectId,
      userName,
    };
    console.log(obj);
    deleteProject(obj).then(res => {
      if (res.result == 'success') {
        this.initProjectlist('kangjun', 'kangjun');
        console.log(res.data);
        this.setState({
          isRemoveVisible: false,
        });
      } else {
        return;
      }
    });
    //确定删除 调用接口
  };
  blundeventReupload = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  blundeventToDetail = () => {
    this.props.history.push('/table/projectDetail');
  };
  blundSelect = value => {
    console.log(value);
  };
  componentDidMount() {
    this.initProjectlist('kangjun', 'kangjun');
  }
  initProjectlist = (projectFieldcode, projectName) => {
    let obj = {
      projectFieldcode: projectFieldcode,
      projectName: projectName,
    };
    GetProjectList(obj).then(res => {
      if (res.result == 'success') {
        console.log(res.data);
        this.setState({
          ProjectData: res.data,
        });
        // console.log(res.data)
      } else {
        return;
      }
    });
  };
}

/***
 * 记录：20-21-12-22-07:25
 * 记录人：梁凯
 * 目前正在加班--还有小超人🦸‍♀️--小马哥--JAVA大佬明哥
 */
