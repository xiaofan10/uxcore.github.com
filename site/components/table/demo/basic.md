# 基本表格

- order: 0

---

````jsx

let Table = require('uxcore-table');

class Demo extends React.Component {

      render () {
        const me = this;
        // 通过 rowSelection 对象表明需要行选择
        const rowSelection = {
          onSelect: function(record, selected, selectedRows) {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: function(selected, selectedRows) {
            console.log(selected, selectedRows);
          }
        };

        const columns = [
            { dataKey: 'country', title:'国家', width: 200, ordered: true},
            { dataKey: 'city',title:'城市', width: 150, ordered: true },
            { dataKey: 'firstName',title: 'FristName' },  
            { dataKey: 'lastName' ,title: 'LastName'},
            { dataKey: 'email',title: 'Email', width: 200,ordered: true },
            { dataKey: 'action1', title: '操作1', width:100, type: 'action', actions: {
                '编辑': function(rowData, actions) {
                    console.log(actions.addEmptyRow);
                    me.refs.grid.toggleSubComp(rowData);
                },
                '删除': function(rowData) {
                    me.refs.grid.delRow(rowData);
                }
              }
            },
            { dataKey: 'action', title:'链接', width:100,render: function(rowData){
               return <div><a href="#">111</a></div>
              }
            }
        ];

        const fetchUrl = '/components/table/demo/data.json';
        
        const renderProps={
            height: 400,
            actionColumn: {
               'edit': function() {},
               'del': function() {}
            },
            className: 'kuma-uxtable-split-line',
            fetchParams: {},
            showColumnPicker:false,
            fetchUrl: fetchUrl,
            jsxcolumns:columns,
        };
        return (<Table {...renderProps}  ref="grid"/>);
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-basic'))
````