# Context API란 무엇일까...
전역적인 데이터를 공유할 수 있도록 고안된 방법이다.  
주로 로그인 데이터, 웹 내 사용자가 쓰는 설정파일, 테마, 언어 등등 다양하게 컴포넌트간 공유되어야할 데이터로 사용된다.
## 생성
Context를 생성할 때는 React.createContext() 라는 함수를 사용한다.
```JS
const User = React.createContext(null);
```
>createContext의 파라미터에는 Context의 기본값을 설정해준다. 

Context안에 들어있는 Provider 라는 컴포넌트를 통하여 Context의 값을 정할 수 있다.
```JS
<User.Provider value={dispatch}>...</User.Provider>
```

## export
```JS
export const User = React.createContext(null);
```
## import
```JS
import { User } from './App';
```
