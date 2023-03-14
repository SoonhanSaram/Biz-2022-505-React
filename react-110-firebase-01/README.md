# React and firebase 연동

- `npm install firebase` 설치

## 환경설정을 이용해 firebase 연동 정보 보안 설정

- 프로젝트 터미널(bash shell)에서 `touch .env`
- `.gitignore` 에 있는지 확인
- 프로젝트를 `git push` 해 `.env` 파일이 없는지 확인
- `.env` 파일에 API 등의 정보를 저장
- 모든 키 값은 `REACT_APP_` 로 시작된다. 키 = 값
- `FirebaseConfig.js`에서 연결하기

```js
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
```
