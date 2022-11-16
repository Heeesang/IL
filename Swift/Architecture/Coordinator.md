# Cöördinator
코디네이터 패턴은 VC 간의 흐름을 제어하기 위한 패턴이다.  
앱의 흐름을 담당한는 별도의 객체를 만들어 사용하기 때문에 VC와는 독립적이며 재사용과 유지보수에 용의하다.

> 화면 전환에 필요한 인스턴스 생성(VC, VM ..)  
생성한 인스턴스의 종속성 주입(DI)  
생선된 VC의 화면 전환  

<img src = "https://velog.velcdn.com/images%2Fellyheetov%2Fpost%2F6ec003e2-ef4b-4a4f-a326-199d96484867%2FScreen%20Shot%202021-06-15%20at%205.35.05%20PM.png"/>

|project|[GwakDiary](https://github.com/Heeesang/GwakDiary)|
|---|---|