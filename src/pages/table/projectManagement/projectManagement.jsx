import React, { Component } from 'react';
import '../../../assets/css/index.css';
import Style from './projectManagement.less';
import SearchFrom from '../../../components/SearchFrom/SearchFrom';
import AddPorject from '../../../components/Addproject/Addproject';
// import fildimg from '../../../assets/xlsx/Template.xlsx'
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
  message,
  Empty,
  Spin,
} from 'antd';
import { SnippetsOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  CreateProject,
  GetProjectList,
  deleteProject,
  uploadFile,
  Getfield,
  PrijectUpdate,
  copyProjectId,
  ProjectOrgList,
} from '@/api/Project.jsx';
// import UpFile from './index'
import { transformationTime } from '@/utils/dateUtil.js';
// import  url from  '../../../../public/xlsx/词表上传模板.xlsx'
const radioStyle = {
  width: '150px',
  height: '30px',
  border: '0px',
  background: '#353d58',
  borderRadius: '28px',
  lineHeight: '20px',
  color: '#fff',
};
export default class projectManagement extends Component {
  state = {
    isModalVisible: false,
    isRemoveVisible: false,
    uploadkeys: 1,
    ProjectData: [],
    ProjectId: '',
    username: '',
    fileList: [],
    fileloadShow: true,
    GetfieldList: [],
    locationCount: '',
    locationshow: false,
    oderProjectId: '',
    listFlage: true,
    title: '',
    orgListOption: [],
  };
  formRef = React.createRef();
  uploadprops = {
    name: 'file',
    headers: {
      // ContentType: 'multipart/form-data',
    },
    data: {
      project_name: '10',
    },
    beforeUpload: file => {
      this.setState(state => ({
        fileList: [...state.fileList, file],
      }));
      return false;
    },
  };
  render() {
    const {
      isModalVisible,
      isRemoveVisible,
      uploadkeys,
      ProjectData,
      fileloadShow,
      GetfieldList,
      locationCount,
      locationshow,
      listFlage,
      title,
      orgListOption,
    } = this.state;
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
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
      // # 1 上传中 2 失败  3 完成  0 删除
      <div className={Style.projectwrapper}>
        <SearchFrom
          SearchFromValue={(select, ipt) => this.SearchFromValue(select, ipt)}
          ref="Searfrom"
        />
        <div className={Style.projectBox}>
          <div className={Style.projectheader}>
            {locationshow == true ? <p>查询到{locationCount}条结果</p> : null}
            <p></p>
            <Button
              //type="primary"
              onClick={() => this.Blundeventshowproject()}
              //className={Style.addbtn}
            >
              + 创建项目
            </Button>
          </div>
        </div>
        {listFlage ? (
          <div className={Style.List}>
            {ProjectData.map((item, index) => {
              return (
                <div className={Style.List_slide} key={index}>
                  <div className={Style.list_header}>
                    <div></div>
                    <div>
                      <SnippetsOutlined
                        onClick={() => this.BlundeventCopyProject(item)}
                        style={{ color: '#ccc' }}
                      />
                      <DeleteOutlined
                        style={{ marginLeft: '10px', color: '#ccc' }}
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
                    <span className={Style.marginLeft}>
                      {item.project_code}
                    </span>
                  </p>
                  <p className={Style.xiangmuname}>
                    领域类型：
                    <span className={Style.marginLeft}>
                      {item.project_fieldname}
                    </span>
                  </p>
                  <p className={Style.xiangmuname}>
                    概念总数：
                    <span className={Style.marginLeft}>
                      {item.project_concepts}
                    </span>
                  </p>
                  <p className={Style.xiangmuname}>
                    三元组数：
                    <span className={Style.marginLeft}>
                      {item.project_triples}
                    </span>
                  </p>
                  <p className={Style.xiangmuname}>
                    <span style={{ width: '130px' }}> 项目描述：</span>
                    <b className={Style.ProjectText}>
                      {item.project_introduction}
                    </b>
                  </p>
                  <div className={Style.xiangmubuton}>
                    <div className={Style.Setstatetext}>
                      最新由{item.update_user || item.create_user}修改于
                      {transformationTime(item.create_time)}
                    </div>
                    <Button
                      type="primary"
                      //className={Style.antdbutton}
                      style={radioStyle}
                      onClick={() => this.blundeventToDetail(item)}
                    >
                      查看
                    </Button>
                  </div>
                  {item.project_status == 1 ? (
                    <div className={Style.listDialog}>
                      <div className={Style.listDialogText}>
                        <Spin />
                        <p>正在上传中</p>
                      </div>
                    </div>
                  ) : null}
                  {item.project_status == 2 ? (
                    <div className={Style.listDialog}>
                      <div className={Style.listTextdalog}>
                        <p>
                          上传文件失败，请点击
                          <span
                            style={{ color: 'blue', cursor: 'pointer' }}
                            onClick={() => this.blundeventReupload(item)}
                          >
                            此处
                          </span>
                          重新上传
                        </p>
                        <Button
                          type="primary"
                          className={Style.cancelbtn}
                          onClick={() => this.blundEventcancelPrijects(item)}
                        >
                          取消
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Style.EmptyNull}>
            <Empty
              description={'暂无数据'}
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          </div>
        )}
        <AddPorject
          isModalVisible={isModalVisible}
          Blundeventcloseproject={() => this.Blundeventcancelproject()}
          Blundeventcancelproject={() => this.Blundeventcloseproject()}
          cancelText={'返回'}
          okText={'提交'}
          title={title}
          closable={false}
          centered={true}
          width={620}
          forceRender={true}
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
                <Select options={GetfieldList} onChange={this.blundSelect} />
              </Form.Item>
              <Form.Item
                name="project_code"
                label="项目组织"
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
                <Select options={orgListOption} onChange={this.blundSelect} />
              </Form.Item>
              {/* <Form.Item
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
              </Form.Item> */}
              <Form.Item name="project_introduction" label="项目简介">
                <Input.TextArea maxLength="100" />
              </Form.Item>
              {fileloadShow ? (
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
              ) : null}
              {fileloadShow ? (
                <Form.Item name="getTemplate" label="下载模版">
                  <a
                    href="http://120.221.160.1:8000/new-ihp/668094d3-772c-471d-aea7-b3dce66162e0.xlsx"
                    download="词表上传模版.xlsx"
                  >
                    词表上传模版.xlsx
                  </a>
                  {/* <div onClick={() => this.blundeventfileurl()}>
                    词表上传模版.xlsx
                  </div> */}
                </Form.Item>
              ) : null}
            </Form>
          </div>
        </AddPorject>
        <AddPorject
          isModalVisible={isRemoveVisible}
          Blundeventcloseproject={() => this.blundeventremovedalogclose()}
          Blundeventcancelproject={() => this.blundeventdalogok()}
          cancelText={'取消'}
          okText={'确定'}
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
  blundeventfileurl = () => {
    // const url = window.URL.createObjectURL(new Blob('http://120.221.160.5:9002/new-ihp/668094d3-772c-471d-aea7-b3dce66162e0.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href =
      'http://120.221.160.1:8000/new-ihp/668094d3-772c-471d-aea7-b3dce66162e0.xlsx';
    link.setAttribute('download', '词表上传模版.xlsx');
    document.body.appendChild(link);
    link.click();
  };
  BlundeventCopyProject = item => {
    const {
      project_name,
      project_fieldcode,
      project_code,
      project_introduction,
      project_id,
    } = item;
    this.setState({
      isModalVisible: true,
      fileloadShow: false,
      uploadkeys: 3,
      oderProjectId: project_id,
      title: '复制项目',
    });
    const form = this.formRef.current;
    form.setFieldsValue({
      project_name,
      project_fieldcode,
      project_code,
      project_id,
      project_introduction,
    });
  };
  SearchFromValue = (select, ipt) => {
    if (select === '全部领域') {
      select = '';
    }
    this.SeachgListData(select, ipt);
  };
  SeachgListData = (projectFieldcode, projectName) => {
    let obj = {
      project_fieldcode: projectFieldcode,
      project_name: projectName,
    };
    GetProjectList(obj).then(res => {
      if (res.result == 'success') {
        this.setState({
          ProjectData: res.data,
          locationCount: res.total,
          listFlage: true,
          locationshow: true,
        });
        if (res.data.length == 0) {
          message.error('未查询到相关项目');
          this.setState({
            listFlage: false,
            locationshow: true,
          });
        }
      } else {
        return;
      }
    });
  };
  Blundeventshowproject = item => {
    this.setState({
      isModalVisible: true,
      fileloadShow: true,
      title: '创建项目',
    });
  };
  Blundeventcloseproject = async () => {
    const { username, uploadkeys, ProjectId } = this.state;
    const form = this.formRef.current;
    try {
      const values = await form.validateFields([
        'project_name',
        'project_fieldcode',
        'project_code',
        'project_introduction',
        'upload',
      ]);
      const {
        project_name,
        project_fieldcode,
        project_code,
        project_introduction,
      } = values;

      if (uploadkeys == 2) {
        let obj = {
          project_name,
          id: ProjectId,
          project_fieldcode,
          project_code,
          project_introduction,
          project_status: 1,
          project_photo: '',
          project_fieldname: project_fieldcode,
          update_user: username,
        };
        PrijectUpdate(obj).then(res => {
          if (res.result == 'success') {
            this.setState({
              isModalVisible: false,
              uploadkeys: 1,
            });
            const form = this.formRef.current;
            form.resetFields();
            this.uplodaderfile(res.data);
          } else {
            message.error(res.message);
            return;
          }
        });
      } else if (uploadkeys == 1) {
        let obj = {
          project_name,
          project_fieldcode,
          project_code,
          project_introduction,
          project_status: 1,
          project_photo: '',
          project_fieldname: project_fieldcode,
          create_user: username,
        };
        CreateProject(obj).then(res => {
          if (res.result == 'success') {
            this.setState({
              isModalVisible: false,
              uploadkeys: 1,
            });
            const form = this.formRef.current;
            form.resetFields();
            this.uplodaderfile(res.data);
          } else {
            message.error(res.message);
            return;
          }
        });
      } else if (uploadkeys == 3) {
        let obj = {
          project_name,
          project_fieldcode,
          project_code,
          project_introduction,
          project_status: 1,
          project_photo: '',
          project_fieldname: project_fieldcode,
          create_user: username,
        };
        CreateProject(obj).then(res => {
          if (res.result == 'success') {
            this.setState({
              isModalVisible: false,
              uploadkeys: 1,
            });
            this.initProjectlist();
            const form = this.formRef.current;
            form.resetFields();
            this.CoypProject(res.data);
          } else {
            message.error(res.message);
            return;
          }
        });
      }
    } catch (err) {
      // console.log(err)
    }
    this.refs.Searfrom.SethandelChange();
  };
  CoypProject = res => {
    const { oderProjectId } = this.state;
    let obj = {
      new_project_id: res,
      old_project_id: oderProjectId,
    };
    copyProjectId(obj).then(res => {
      if (res.result == 'success') {
        this.initProjectlist();
      } else {
        return;
      }
    });
  };
  uplodaderfile = data => {
    const { fileList } = this.state;
    const formData = new FormData();
    this.initProjectlist();
    formData.append('file', fileList[0]);
    formData.append('project_id', data);
    uploadFile(formData).then(res => {
      if (res.result == 'success') {
        this.initProjectlist();
        message.success('文件上传成功！');
      } else {
        this.initProjectlist();
        message.error('文件上传失败！');
        return;
      }
    });
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
    const { ProjectId, username } = this.state;
    let obj = {
      ProjectId,
      username,
    };
    deleteProject(obj).then(res => {
      if (res.result == 'success') {
        this.initProjectlist();
        this.setState({
          isRemoveVisible: false,
        });
      } else {
        return;
      }
    });
    //确定删除 调用接口
  };
  blundeventReupload = item => {
    const { id } = item;
    this.setState({
      isModalVisible: true,
      uploadkeys: 2,
      ProjectId: id,
      title: '创建项目',
    });
    const {
      project_name,
      project_fieldcode,
      project_code,
      project_introduction,
    } = item;
    const form = this.formRef.current;
    form.setFieldsValue({
      project_name,
      project_fieldcode,
      project_code,
      project_introduction,
    });
  };

  blundEventcancelPrijects = item => {
    const { id } = item;
    const { username } = this.state;
    let obj = {
      ProjectId: id,
      username,
    };
    deleteProject(obj).then(res => {
      if (res.result == 'success') {
        this.initProjectlist();
        this.setState({
          isRemoveVisible: false,
        });
      } else {
        return;
      }
    });
    // this.blundeventdalogok();
  };
  blundeventToDetail = item => {
    let id = item.id;
    this.props.history.push({
      pathname: `/table/projectDetail/${id}`,
    });
  };
  blundSelect = value => {
    console.log(value);
  };
  componentDidMount() {
    this.initProjectlist();
    this.initfiled();
    this.initOrgList();
    let username = localStorage.getItem('username');
    this.setState({
      username: username,
    });
  }
  initOrgList = () => {
    ProjectOrgList().then(res => {
      if (res.result == 'success') {
        let data = [];
        res.data.forEach(item => {
          let obj = {
            label: item.org_code,
            value: item.org_name,
          };
          data.push(obj);
        });

        this.setState({
          orgListOption: data,
        });
      } else {
        return;
      }
    });
  };
  initfiled = () => {
    Getfield().then(res => {
      if (res.result == 'success') {
        let data = [];
        res.data.forEach(item => {
          let obj = {
            label: item.field_code,
            value: item.field_name,
          };
          data.push(obj);
        });
        this.setState({
          GetfieldList: data,
        });
      } else {
        return;
      }
    });
  };
  initProjectlist = (projectFieldcode, projectName) => {
    let obj = {
      project_fieldcode: projectFieldcode,
      project_name: projectName,
    };
    GetProjectList(obj).then(res => {
      if (res.result == 'success') {
        this.setState({
          ProjectData: res.data,
          locationshow: false,
          locationCount: res.total,
          listFlage: true,
        });
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
