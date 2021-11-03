## React-Router-DOM  



### Link

``` markdown
// 路由导航
<Link to="/path">path</Link>
<Link replace to="/path">path</Link>    // 替换历史记录，而不是添加
```

### NavLink

```markdown
// 路由导航，激活时添加类名
<NavLink to="/path">path</NavLink>      // 激活默认添加 "active" 类
<NavLink activeClassNAME=“active” to="/path">path</NavLink>   // 激活添加 activeClassNAME 变量的类
```

### Route

```markdown
// 注册路由，根据浏览器地址匹配组件
<Route path="/path" component={Component} />  // 模糊匹配，"/path/a/b"也可以匹配

<Route exact path="/path" component={Component} /> // 严格匹配，只能匹配 "/path"，不要随便开启，需要再开，可能会影响二级路由
```

### Redirect

```markdown
// 重定向，路由都没有匹配时，重定向到 "/path"
<Switch>
  <Route path="/home" component={Home} />
  <Redirect to="/path" />
</Switch>
```

### Switch

```markdown
// 匹配到路由后不再继续向下匹配
<Switch>
  <Route path="/path" ... />  匹配到 "/path" 路由，不再继续匹配后续路由
  <Route path="/path" ... />
</Switch>
```

### BrowserRouter

```markdown
// BrowserRouter 使用的是 H5 的 history API
// 浏览器地址不带 '#'号，"/path"
// 刷新后保留 state 参数，清除浏览器记录后刷新丢失 state 参数
// 发送请求带上完整 path 路径

<BrowserRouter>
  ...
</BrowserRouter>
```

### HashBouter

```markdown
// HashBouter 使用的是 URL 的 哈希值，兼容性好
// 浏览器地址带 '#'号，"/#/path"
// 刷新后丢失 state 参数
// 发送请求不带 # 后面的 path 路径
// HashRouter 可以用于解决一些路径错误相关的问题

<HashRouter>
  ...
</HashRouter>
```

### withRouter

``` markdown
withRouter是一个函数，可以加工一般组件，让一般组件具备路由组件所持有的API
withRouter的返回值是一个新组件
```

### 二级路由

```markdown
// 一级路由
App.jsx
<Link to="/home">home</Link>

<Switch>
  <Route path="/home" component={Home} />
</Switch>

// 二级路由
Home.jsx
<Link to="/home/mes">mes</Link>

<Switch>
  <Route path="/home/mes" component={Mes} />
</Switch>
```

### 路由传参

1. **params 参数**

```markdown
<Link to="/home/tom/27">home</Link>  //携带参数
<Route path="/home/:name/:age" component={Home} />  // 声明接收

function Home(props) {
  // 接收 this.props.match.params 参数
  const { name, age } = this.props.match.params;  
  console.log(name, age);
  /*  
    tom 27
  */
}
```

2. **search 参数**

获取的 search 参数是 urlencoded 编码字符串，使用 querystring 解析

```markdown
<Link to="/home?name=tom&age=27">home</Link>  //携带参数
<Route path="/home" component={Home} />  // 无需声明接收

import qs from 'querystring';
function Home(props) {
  // 接收 this.props.location.search 参数 
  const { search } = this.props.location;   // ?name=tom&age=27
  const { name, age } = qs.parse(search.slice(1));
  console.log(name, age);
  /*  
    tom 27
  */
}
```

3. **state 参数**

state参数不会出现在地址栏上，刷新也可以保留 state，
删除浏览器记录后刷新 state 会丢失

```markdown
<Link to=to={{path:"/home", state:{name:"tom", age:27}}}>home</Link>  //携带参数
<Route path="/home" component={Home} />  // 无需声明接收

function Home(props) {
  // 接收 this.props.location.satte 参数 
  const { name, age } = this.props.location.state || {};
  console.log(name, age);
  /*  
    tom 27
  */
}
```

### 编程式路由导航

```markdown
this.props.history
      go(n)
      goForward()
      goBack()
      push(path, state)
      replace(path, state)

this.props.history.push("/home/tom/27");
this.props.history.push("/home?name=tom&age=27");
this.props.history.push("/home", {name:"tom",age:27});
...
```
