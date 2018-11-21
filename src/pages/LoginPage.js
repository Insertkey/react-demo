import React, {Component} from 'react';
import LoginForm from '../component/LoginForm';
import { Row, Col } from 'antd';
import bgImage from "../assets/login_page_bg.png";

class LoginPage extends Component {
    componentWillMount(){
        let loginInfo=JSON.parse(sessionStorage.getItem('loginFlag'));
        if(loginInfo){
            console.log('已经登录了');
        }else {
            console.log('没有登录');
        }
    }

    render() {
        return (
            <div style={{backgroundImage:`url(${bgImage})`,height:'1350px',width:'100%',overflow:'hidden',boxSizing: 'border-box',backgroundColor:'#B8E5F8'}}>
                <Row type="flex" align="middle">
                    <Col span={10}>&nbsp;</Col>
                    <Col span={6} col-offset={9} style={{textAlign:'center'}}>
                        <LoginForm/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginPage