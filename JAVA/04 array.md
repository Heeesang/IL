# 배열

연관된 데이터를 모아서 관리하기 위해서 사용하는 데이터 타입

- ## 생성

```java
//데이터 타입[]  변수 이름 = {데이터};
//1.
String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};

//2.
String[] weeks = new String[7];
weeks[0] = "월";
weeks[1] = "화";
weeks[2] = "수";
weeks[3] = "목";
weeks[4] = "금";
weeks[5] = "토";
weeks[6] = "일";
```

- ## length
  배열을 처음 생성할 때 지정한 배열의 크기

```java
String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};

System.out.println(weeks.length);

for(int i = 0; i < weeks.length; i++){
    System.out.println(weeks[i]);
}
```
