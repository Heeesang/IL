# MVC란 🤔
MVC 패턴은 애ㄹㅔ서 기본적으로 지원하는 디자인 패턴으로, <mark>Model + View + Controller</mark> 구조의 아키텍처 패턴을 말한다.
<img  src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqU4Qr%2FbtqCRyNPNrF%2FN5pTultgaN2g5wb9n34jKK%2Fimg.png"/>

- M(Model) : 앱의 데이터와 비즈니스 로직을 갖고 있다.
- V(View) : 사용자에게 데이터를 보여죽나 UI를 담당한다.
- C(Controller) : Model 과 View를 연결해주는 역할로 View로부터 사용자의 action을 받아 Model에게 어떤 작업을 해야 하는지 알려주거나, Model의 데이터 변화를 View에게 전달하여 View를 어떻게 업데이트할지 알려준다.

## 🤤 장점
- 다른 패턴에 비해 코드량이 적다.
- 애플에서 기본적으로 지원하고 있는 패턴이기 때문에 쉽게 접근할 수 있다.
- 개발 속도가 빠르기 때문에 아키텍처가 중요하지 않을 때 사용하거나 규모가 작은 프로젝트에서 사용 가능 하다.

## 😵‍💫 단점
- View와 Controller가 너무 밀접하게 연결되어 있기 때문에 View와 Controller를 분리하기 어렵다. -> 재사용성 👎, 유닛 테스트 진행 😮‍💨
- 대부분의 코드가 Controller에 밀집 될 수 있다.
- 복잡해진 코드는 프로젝트 규모가 커질수록 유지보수하기 힘들다. 😵‍💫

