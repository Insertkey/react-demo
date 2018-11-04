import React, {Component, Fragment} from 'react';
import './App.css';
import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import 'antd/lib/date-picker/style/css';
class App extends Component {
    render() {
        return (
            <Fragment>
                <h2>hello react</h2>
                <DatePicker/>
            </Fragment>
        );
    }
}

export default App;
