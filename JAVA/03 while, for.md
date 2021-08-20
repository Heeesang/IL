# While, For

> 말 그대로 반복문, 조건이 참 이면 반복적으로 실행 <br>
> for 과 while 은 서로 대체 가능! <br>
> 중첩 가능!

## while

```java
while(조건){
    반복 실행 영역
}
```

## for

> 특정한 횟수만큼 실행을 하는 경우 <br>
> 반복문에서 자주 사용하는 패턴(증감,조건 등) -> 문법적인 형태

```java
for(초기화; 종료조건; 반복실행){
    반복적으로 실행될 구문
}
```

- 초기화
  > 반복문이 실행될때 1회만
- 반복실행
  > i++ 과 같은 증감이 위치함

## 중첩

```java
	for(int m = 0; m < 5; m++) {
		for(int n = 5; n>m; n--) {
			System.out.print(" ");
		}

		for(int k = 0; k < 2*m +1; k++) {
			System.out.print("*");
		}
		System.out.print("\n");
	}
```

> 요런식으로 중첩도 가능
