# 年份面板

- order: 7

直接显示年份面板。

---

````jsx
let Calendar = require('uxcore-calendar');
let YearCalendar = Calendar.YearCalendar;


class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2016-01-02'
        }
    }
    onSelect(value) {
        console.log(value);
        this.setState({
            value: value
        });
    }
    render() {
        return <YearCalendar value={this.state.value} onSelect={this.onSelect.bind(this)} />
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-year'));
````
