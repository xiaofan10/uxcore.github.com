Dropdown
========

- order: 8
- category: Components
- chinese: 下拉菜单
- subtype: Presentation

---

向下弹出的列表。

何时使用
--------

当页面元素过多时，用此组件可以收纳元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

API
---

| 参数           | 说明         | 类型          | 默认值      |
|----------------|--------------|---------------|-------------|
| trigger        | 触发下来行为 | array         | `['hover']` |
| overlay        | 菜单节点     | react element | 无          |
| onVisibleChange|当 visible 改变时触发|Function| noop        |
| visible        |是否可见      | boolean       | false       |
