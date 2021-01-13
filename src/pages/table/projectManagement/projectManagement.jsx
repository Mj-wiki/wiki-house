import React, { Component } from 'react';
import '../../../assets/css/index.css';
import Style from './projectManagement.less';
import SearchFrom from '../../../components/SearchFrom/SearchFrom';
import AddPorject from '../../../components/Addproject/Addproject';
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
import { SwitcherTwoTone, DeleteTwoTone } from '@ant-design/icons';
import {
  CreateProject,
  GetProjectList,
  deleteProject,
  uploadFile,
  Getfield,
  PrijectUpdate,
  copyProjectId,
} from '@/api/Project.jsx';
// import UpFile from './index'
import { transformationTime } from '@/utils/dateUtil.js';
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
  };
  formRef = React.createRef();
  //  form = Form.useForm();
  //  Form.useForm();
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
        />
        <div className={Style.projectBox}>
          <div className={Style.projectheader}>
            {locationshow == true ? <p>查询到{locationCount}条结果</p> : null}
            <p></p>
            <Button
              type="primary"
              onClick={() => this.Blundeventshowproject()}
              className={Style.addbtn}
            >
              + 创建项目
            </Button>
          </div>
        </div>
        {ProjectData.length ? (
          <div className={Style.List}>
            {ProjectData.map((item, index) => {
              return (
                <div className={Style.List_slide} key={index}>
                  <div className={Style.list_header}>
                    <div></div>
                    <div>
                      <SwitcherTwoTone
                        onClick={() => this.BlundeventCopyProject(item)}
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
                    三元数组：
                    <span className={Style.marginLeft}>
                      {item.project_triples}
                    </span>
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
                      {transformationTime(item.create_time)}
                    </div>
                    <Button
                      type="primary"
                      className={Style.antdbutton}
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
          title={'创建项目'}
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
                    message: '项目组织不能为空！',
                  },
                ]}
              >
                <Input maxLength="50" />
              </Form.Item>
              <Form.Item name="project_introduction" label="项目简介">
                <Input.TextArea maxLength="50" />
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
    });
    const form = this.formRef.current;
    // console.log(form)
    form.setFieldsValue({
      project_name,
      project_fieldcode,
      project_code,
      project_id,
      project_introduction,
    });
  };
  SearchFromValue = (select, ipt) => {
    this.setState({
      locationshow: true,
    });
    this.initProjectlist(select, ipt);
  };
  Blundeventshowproject = item => {
    this.setState({
      isModalVisible: true,
      fileloadShow: true,
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
          project_photo:
            'https://dev.lrhealth.com/api/base/util/DownloadFile/0800bfc6-e9f3-40ee-9d52-6c4ab10333d1.jpg',
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
          project_photo:
            'https://dev.lrhealth.com/api/base/util/DownloadFile/0800bfc6-e9f3-40ee-9d52-6c4ab10333d1.jpg',
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
          project_photo:
            'https://dev.lrhealth.com/api/base/util/DownloadFile/0800bfc6-e9f3-40ee-9d52-6c4ab10333d1.jpg',
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
      this.initProjectlist();
      if (res.result == 'success') {
        message.success('upload successfully.');
      } else {
        message.error('upload failed.');
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
    let username = localStorage.getItem('username');
    this.setState({
      username: username,
    });
  }
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
          locationCount: res.total,
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
