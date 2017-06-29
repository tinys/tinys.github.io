---
category: components
chinese:  浮层
type: Views
english: Modal
---


## description

基础浮层,实现浮层显示关闭,遮罩的管理,zindex管理。默认显示位置是左右居中,距离上为100px ,距下24px

## 功能如下


## API
| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
|mask       | 是否有遮罩   |boolean |true|
|visable    | 是否显示     |boolean | false |
|maskClosable | 点击遮罩是否关闭 |boolean | false|
|onMaskClick | 点击遮罩调用方法   | function | - |
|wrapClassName| 最外层容器类名 | string | - |
|width | 浮层宽度 | int/string | 520px|