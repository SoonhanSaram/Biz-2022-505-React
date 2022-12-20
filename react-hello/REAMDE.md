# 처음 시작하는 React project

## React Project를 위한 Dependency

- babel : 오래된 browser에서 새로운 JS코드 (ECMAscript es6+)를 실행 할 수 있도록 변환하는 도구

```
npm install -D @babel/core -D
npm install -D @babel/preset-env
npm install -D @babel.preset-react

npm install -D @babel/core @babel/preset-env @babel/preset-react
```

- webpack : bundller, 많은 html, css, js 등 파일을 압축하여 배포하는 도구

```
npm install -D webpack webpack-cli webpack-dev-server
```

- babel-loader :ES6를 ES5로 바꿔주는 도구, webpack에서 사용
- html-loader : webpack에서 html코드를 인식할 수 있게하는 도구
- html-webpack-plugin : webpack에서 사용하는 보조 도구

```
npm install -D babel-loader html-loader html-webpack-plugin
```

### 설정파일 만들기

```
touch .babelrc
```

- babel 설정파일 작성하기

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

```
npm install react-dom
```

## React Project를 위한 도구 설치

```
npm install -g yarn
npm install -g create-react-app
```
