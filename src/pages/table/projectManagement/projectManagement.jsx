import React, { Component } from 'react';
import '../../../assets/css/index.css';
import Style from './projectManagement.less';
import SearchFrom from '../../../components/SearchFrom/SearchFrom';
import AddPorject from '../../../components/Addproject/Addproject';
import { Button, Form, Input, Select, Upload } from 'antd';
import { SwitcherTwoTone, DeleteTwoTone } from '@ant-design/icons';
import eachartsimg from '../../../assets/img/1608546364268.jpg';
export default class projectManagement extends Component {
  state = {
    isModalVisible: false,
    isRemoveVisible: false,
  };
  formRef = React.createRef();
  render() {
    const { isModalVisible, isRemoveVisible } = this.state;
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const areas = [
      { label: '领域', value: '领域' },
      { label: '领域1', value: '领域1' },
    ];
    const normFile = e => {
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
        <SearchFrom />
        <div className={Style.projectBox}>
          <div className={Style.projectheader}>
            <p>查询到10086条结果</p>
            <Button type="primary" onClick={() => this.Blundeventshowproject()}>
              + 创建项目
            </Button>
          </div>
        </div>
        <div className={Style.List}>
          <div className={Style.List_slide}>
            <div className={Style.list_header}>
              <div></div>
              <div>
                <SwitcherTwoTone onClick={() => this.Blundeventshowproject()} />
                <DeleteTwoTone
                  style={{ marginLeft: '10px' }}
                  onClick={() => this.blundeventremovelist()}
                />
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
                <p>上传文件失败，请点击此处重新上传</p>
                <Button type="primary" className={Style.cancelbtn}>
                  取消
                </Button>
              </div>
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
          </div>
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
                name="name"
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
                name="field"
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
                <Select options={areas} />
              </Form.Item>
              <Form.Item
                name="organization"
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
              <Form.Item name="introduction" label="项目简介">
                <Input.TextArea maxLength="50" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="上传文件"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: '文件不能为空！' }]}
              >
                <Upload name="file" action="/upload.do" listType="picture">
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
  Blundeventshowproject = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  Blundeventcloseproject = async () => {
    //创建项目弹框下的提交按钮
    this.setState({
      isModalVisible: false,
    });
    const form = this.formRef.current;
    try {
      const values = await form.validateFields([
        'name',
        'field',
        'organization',
        'introduction',
        'upload',
      ]);
      console.log(values);
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
  blundeventremovelist = () => {
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
    //确定删除 调用接口
    this.setState({
      isRemoveVisible: false,
    });
  };
}

/***
 * 记录：20-21-12-22-07:25
 * 记录人：梁凯
 * 目前正在加班--还有小超人🦸‍♀️--小马哥--JAVA大佬明哥
 */
