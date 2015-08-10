# 基本

- order: 0

---

````jsx
var Grid = require('uxcore-grid');
var gen = (function(){

    var cache = {}

    return function(len,pageIndex){

        if (cache[len]){
            // return cache[len]
        }

        var arr = [], started= (pageIndex-1)*len;
        for (var i = 0; i < len; i++){
            var num= started+i+1;
            arr.push({
                //jsxchecked: i % 3 === 0,
                id       : num,
                grade      : Math.round(Math.random() * 10),
                email    : num + '@gmail.com',
                firstName: num + '_firstName',
                lastName : num + '_lastName',
                birthDate: num + '_birthDate',
                country  : num + '_country',
                city  : num + '_city',
            })
        }

        cache[len] = arr

        return arr
    }
})()


// title, width, type, hidden,dataKey
var columns = [
    { dataKey: 'id', title: 'ID', width: 50,hidden:true},
    { dataKey: 'country', title:'国家', width: 200, type:'text'},
    { dataKey: 'city',title:'城市', width: 150 },
    { dataKey: 'firstName',title:"FristName" },  
    { dataKey: 'lastName' ,title:"LastName",type:'text'},
    { dataKey: 'email',title:"Email",width: 200 ,type:"text"}
]

var data= gen(20,1);

// 通过 rowSelection 对象表明需要行选择
var rowSelection = {
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};

var App = React.createClass({

      getInitialState: function(){
        return {
            data:this.props.data
        }
      },
      onPageChange: function(pageIndex) {
          this.setState({
             data: gen(20,pageIndex)
          })
      },
      onModifyRow: function(record) {
        //doValidate
        return true;
      },
      render: function() {
        var renderProps={
            headerHeight:50,
            width:700,
            height:500,
            columnPicker: true,
            onPageChange: this.onPageChange,
            onModifyRow: this.onModifyRow,
            rowSelection: rowSelection,
            jsxdata:this.state.data,
            jsxcolumns:columns
        };
        return (<Grid {...renderProps}  ref="grid"/>);
      }
});

React.render(<App data={data}/>, document.getElementById('components-grid-demo-basic'))
````