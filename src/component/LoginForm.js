import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            axios.get('api/login')
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.error('error: ' + error);
                })
        });
    };

    handelPressEnter = (event) => {
        if (event.target.keyCode === 13) {
            this.handleSubmit(event)
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{backgroundColor:'#ffffff',display:'flex',alignItems:'center',flexFlow:'column nowrap'}}>
                <h1 style={{color:'#0084ff',fontSize:'56px',textAlign:'center',marginBottom:'0px'}}>知乎</h1>
                <h3 style={{fontSize:'22px',color:'#0084ff',marginBottom:'22px'}}>注册知乎，发现更大的世界</h3>
            <Form onSubmit={this.handleSubmit} style={{"maxWidth": "300px"}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名！'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码！'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="密码" onKeyDown={this.handelPressEnter}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox style={{float:'left'}}>记住账号</Checkbox>
                    )}
                    <a style={{float: "right"}} href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                        登 录
                    </Button>
                    <span style={{float:'left'}}>或者 <a href="">现在注册</a></span>
                </FormItem>
            </Form>
            </div>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
