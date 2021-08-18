# If, switch
>참과 거짓을 판단
## If
```java
int a == 1;

if(a == 1){
    System.out.println("1");
}else if(a == 2){
     System.out.println("2");
}else{
    System.out.println("false");
}
```
1. if 값이 true 일떄 "1" 출력 
2. if 값이 false 이고 else if 값이 true 일때 "2" 출력
3. 두 조건 다 false 일때 false 출력
>else if 는 이전 조건문이 false 일때만 수행

## 메소드
* contains
> List 자료 형에 해당 아이템이 있는지  조사
## Switch
```java
switch(입력변수) {
    case 입력값1: ...
         break;
    case 입력값2: ...
         break;
    ......
    .......

    default: ...
         break;
}
```
> 입력 변수와 일치하는 case 입력값이 있다면 하위 코드 실행
## break, continue
* break
> break를 만나면 제어문을 종료 시킴
* continue
> continue 증감식 또는 조건식으로 다시 되돌아감