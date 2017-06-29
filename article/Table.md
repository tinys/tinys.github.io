---
category: components
chinese:  表格
type: Views
english: Table
---


## description

列表组件

## 功能如下

- 普通列表: 普通的头、列表
- 头部筛选
- 头部排序
- 支持长表格左右固定排列


## API
| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
|columns     | 表格列的配置描述，具体项见下表                                 | Array      |-      |
|dataSource        | 数据   |Array |[]
|loading | 是否正在加载 | Boolean | false
|pagination | 是否显示分页 |Boolean | false|
| pageNum | 当前页 | Number | - |
| pages | 总页数 | Number | - |
| onChange | 记录改变回调 | Function | - |
| sideWidth | 边宽 | Number | 2 |
## columns

| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
|key         | 对应数据项的键                                              | Array      |-      |
|render      | 渲染值,默认为key对应的value。如果存在,则调用返回值   | Function |-|
|title  | 列名称 | string/Function |''|

