# 클로저(Closures)란 무엇일까...............
클로저는 코드블럭으로 다른 언어의 람다와 비슷합니다.
클로저는 어떤  상수나 변수의 참조를 캡쳐해 저장할 수 있습니다.

## 클로저 문법
```swift
{(parameters) -> return type in
...
}
```
ex)
```swift
reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})
```
## 문맥에서 타입 추론
***sorted(by:)*** 의 메소드에서 이미 ***(String, String) -> Bool*** 타입의 인자가 들어와야 하는지 알기 때문에 클로저에서 타입들이 생략 될 수 있습니다.

## 단일 표현 클로저에서의 암시적 반환 
단일 표현 클로저에서는 반환 키워드를 생략할 수 있슨니다.
```swift
reversedNames = names.sorted(by: { s1, s2 in
    s1 > s2
})
```

## 인자 이름 축약
인라인 클로저에 자동으로 축약 인자 이름을 제공합니다.
인자 값을 순서대로 $0, $1, $2 등으로 사용할 수 있습니다.
```swift
reversedNames = names.sorted(by: { $0 > %1
})
```
$0과 $1 두 인자를 받아서, $0이 $1 보다 큰지를 비교하여 반환합니다.