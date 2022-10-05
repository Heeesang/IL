# lazy 변수 

"A lazy stored property is a property whose initial value is not calculated until the first time it is used"


처음 사용되기 전까지는 연산이 되지 않는 변수

## lazy를 사용 할 때

> lazy는 var 와 함께 쓰인다.    

기본적으로 lazy로 선언된 변수는 최에는 값이 존재하지 않고 이후에 값이 생기는 것이기 때문에 let으로는 선언 될 수 없다.
> struct, class

struct와 class에서 만 사용 가능 하다.

>lazy와 Computed Property

Computed Property에는 lazy 키워드를 사용할 수 없다. 

> closure

lazy에 어떤 특별한 연산을 통해 값을 넣어줄 때 closure를 사용한다.