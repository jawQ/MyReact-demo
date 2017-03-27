/**
 * Created by 强哥 on 2017/3/24.
 */
// 1. 将模板转为HTML语言, 并插入指定的DOM节点
ReactDOM.render( <
    div >
    <
    h1 > I am changing! < / h1 > < /
    div > , document.getElementById("example")
);
//2.在里面做逻辑运算: ReactDOM.render(
<
h1 > 我想做减法:
    1 - 2 = { 1 - 2 } < / h1 >, document.getElementById("example")
);
//3.1.自定义组件:
var HelloCom = React.createClass({
            render: function() {
                    return <
                        button > 你好, 我是button! < /button> } }); / / 3.2.将模板转为HTML语言, 并插入指定的DOM节点:
                        ReactDOM.render( <
                            HelloCom > < /HelloCom>, document.getElementById("example") ); / /
                            4.1.复合组件: / /
                            组件1:
                            var ComponentTitle = React.createClass({
                                render: function() {
                                    return <
                                        h1 > 我是h1! < / h1 >
                                }
                            }); //组件2: var ComponentLink=React.createClass({ render: function () { return <a href="http://www.baidu.com">click me to baidu!</a> } }); //4.2.转为HTML,并插入DOM节点: ReactDOM.render(
                            <
                            div >
                            <
                            ComponentLink > < / ComponentLink > <
                            ComponentTitle > < / ComponentTitle > < /
                            div > , document.getElementById("example"));
                    / /
                    5.1.props-- - 父子组件间的通信: props属性传递数据或方法: / /
                    单向数据流动: 父-- - > 子
                    var ButtonConponen = React.createClass({
                        render: function() {
                            return <button > I am button!My name is { this.props.buttonMing } < /
                            button >
                        }
                    });
                    var WindowsComponen = React.createClass({
                        render: function() {
                            return <
                                div >
                                <
                                ButtonConponen
                            buttonMing = "heiren" > < / ButtonConponen > <
                            ButtonConponen > < / ButtonConponen > < /
                            div >
                        }
                    });
                    ReactDOM.render( <
                        WindowsComponen / > , document.getElementById("example")
                    );
                    console.log("`1");