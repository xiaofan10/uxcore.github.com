# 基本

- order: 0

---

````jsx
let Grid = require('uxcore-grid');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           data:this.props.data
        }
    }

    onModifyRow(value,dataKey,record) {
        //doValidate
        //debugger;
        //return false;
        return true;
    }

      render () {
        console.log("demo render");
        let me=this;
        // 通过 rowSelection 对象表明需要行选择
        let rowSelection = {
          onSelect: function(record, selected, selectedRows) {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: function(selected, selectedRows) {
            console.log(selected, selectedRows);
          }
        };

        let doAction= function(rowData,e) {
            let el=$(e.target);
            if(el.hasClass('action')) {
               if( el.data('type') =='edit') {
                  console.info(rowData,el.data('type'));
               }else if(el.data('type') =='del') {
                 console.info(rowData,el.data('type'));
               }
            }
        }
        // title, width, type, hidden,dataKey
        let columns = [
            { dataKey: 'id', title: 'ID', width: 50,hidden:true},
            { dataKey: 'country', title:'国家', width: 200,ordered:true},
            { dataKey: 'city',title:'城市', width: 150,ordered:true },
            { dataKey: 'firstName',title:"FristName" },  
            { dataKey: 'lastName' ,title:"LastName"},
            { dataKey: 'email',title:"Email",width: 200,ordered:true },
            { dataKey: 'action1', title:'操作1', width:100, type:"action",items:[
              {title:'编辑', type:"inlineEdit", cb: function(rowData){console.info(rowData)}},
              {title:'删除', type:"del", cb: function(rowData){console.info(rowData)}}
            ]},
            { dataKey: 'action', title:'链接', width:100,render: function(rowData){
               return <div><a href="#">{rowData.email}</a></div>
              }
            }
        ]

        let fetchUrl = '../../static/data.json';
        let renderSubProps={
            showHeader:false,
            showPager:false,
            //showMask:false,
            jsxcolumns:columns,
            fetchUrl: fetchUrl,
            queryKeys:["dataKey","firstName"],
            onModifyRow: this.onModifyRow
        };

        let renderProps={
            height: 400,
            actionBar: {
               'new': function(){ alert('new'); },
               'import': function(){ alert('import'); },
               'export': function(){ alert('export'); },
               'search': true,
               'subComp':'' //TODO
            },
            actionColumn: {
               'edit': function() {},
               'del': function() {}
            },
            fetchParams:'',
            fetchUrl: fetchUrl,
            jsxcolumns:columns,
            subComp:(<Grid {...renderSubProps}  ref="subGrid"/>),
            //onModifyRow: this.onModifyRow,
            rowSelection: rowSelection
        };
        return (<Grid {...renderProps}  ref="grid"/>);
      }
};

React.render(<Demo />, document.getElementById('components-grid-demo-basic'))
````