/*! Last update: Tue Sep 06 2016 23:23:47 GMT+0800 (CST) */
webpackJsonp([14],{390:function(t,e,d){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=d(3),r=o(n),l=d(254),c=d(338),a=o(c),p=d(335),u={basic:'const tooltip = (\n    <Popover title="Popover">\n       This is a <i>popover</i> .\n    </Popover>\n);\nvar instance = (\n    <ButtonToolbar>\n        <Whisper placement="top" speaker={tooltip} >\n            <Button shape=\'default\' >Top</Button>\n        </Whisper>\n        <Whisper placement="bottom" speaker={tooltip}>\n            <Button shape=\'default\' >Bottom</Button>\n        </Whisper>\n        <Whisper placement="left" speaker={tooltip}>\n            <Button shape=\'default\' >Left</Button>\n        </Whisper>\n        <Whisper placement="right" speaker={tooltip}>\n            <Button shape=\'default\' >Right</Button>\n        </Whisper>\n\n        <Whisper placement="right" speaker={tooltip}>\n            <Button shape=\'link\' >Link</Button>\n        </Whisper>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n',trigger:'const tooltip = (\n    <Popover title="Popover">\n       This is a <i>popover</i> .\n    </Popover>\n);\nvar instance = (\n    <ButtonToolbar>\n        <Whisper placement="top" trigger="click" speaker={tooltip}>\n            <Button shape=\'default\' >Click</Button>\n        </Whisper>\n        <Whisper placement="top" trigger="focus" speaker={tooltip}>\n            <Button shape=\'default\' >Focus</Button>\n        </Whisper>\n        <Whisper placement="top" trigger="hover" speaker={tooltip}>\n            <Button shape=\'default\' >Hover</Button>\n        </Whisper>\n\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n'};e["default"]=r["default"].createClass({displayName:"popovers",render:function(){return r["default"].createElement(l.Col,{md:9,sm:12},r["default"].createElement("h1",{className:"page-header"},"Popovers",r["default"].createElement("span",{className:"page-header-en"},r["default"].createElement("code",null,"Whisper"),"、",r["default"].createElement("code",null,"Popover"))),r["default"].createElement("h3",null,"默认样式"),r["default"].createElement(a["default"],{code:u.basic}),r["default"].createElement("h3",null,"触发方式"),r["default"].createElement("p",null,"有三种方式可以触发提示 ",r["default"].createElement("code",null,"Popover")," 的信息:",r["default"].createElement("code",null,"click"),"、",r["default"].createElement("code",null,"focus"),"、",r["default"].createElement("code",null,"hover")),r["default"].createElement(a["default"],{code:u.trigger}),r["default"].createElement("h3",null,"组件属性"),r["default"].createElement(p.Markdown,null,d(391)))}})},391:function(t,e){t.exports="<h4 id=popover>Popover</h4> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>placement</td> <td>one of: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></td> <td><code>right</code></td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td><code>popover</code></td> <td></td> </tr> <tr> <td>title</td> <td>node</td> <td></td> <td>Title text</td> </tr> </tbody> </table> <h4 id=whisper>Whisper</h4> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>placement</td> <td>one of: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></td> <td><code>right</code></td> <td></td> </tr> <tr> <td>trigger</td> <td>one of: <code>click</code>, <code>hover</code>, <code>focus</code> or array one of: <code>click</code>, <code>hover</code>, <code>focus</code></td> <td>[<code>hover</code>, <code>focus</code>]</td> <td></td> </tr> <tr> <td>delay</td> <td>number</td> <td></td> <td></td> </tr> <tr> <td>delayShow</td> <td>number</td> <td></td> <td></td> </tr> <tr> <td>delayHide</td> <td>number</td> <td></td> <td></td> </tr> <tr> <td>speaker <code>isRequired</code></td> <td>node <code>Tooltip</code>, <code>Popover</code></td> <td></td> <td></td> </tr> <tr> <td>onBlur</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onClick</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onFocus</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onMouseLeave</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table>"}});