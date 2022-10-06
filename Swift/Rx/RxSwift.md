# RxSwift 

## Rx
> **RX**는 Reactive X의 준말로 observable 한 스트림을 가지고 비동기 프로그래밍을 구현하기 위한 API를 제공한다.    

## 동기 (Synchronous)
- 동기란 통신에서의 요청과 그에 대한 결과가 동시에 일어난다는 의미이다. 요청을 하면 시간이 얼마가 걸리든 요청한 자리에서 결과가 주어져야 한다.
- request와 response가 한 자리에서 동시에 일어난다.
- A 노드와 B 노드 사이의 작업 처리 단위를 동시에 맞춘다.
- 설계가 매우 간단하고 직관적이다.
- 결과가 주어질 때 까지 아무것도 못하고 대기해야 하기때문에 리소스를 낭비한다.

## 비동기 (Asynchronous)
- 비동기는 동기의 반댓말로 요청과 결과가 동시에 일어나지 않는다는 것을 의미한다. 요청의 결과값이 언제오던지 상관하지 않는다.
- 요청한 그 자리에서 결과가 주어지지 않는다.
- 노드 사이의 작업처리 단위를 동시에 맞추지 않아도 된다.
- 동기보다 설계가 복잡하다.
- 결과가 주어지는데  시간이 걸리더라도 앙여시간을 다른 작업에 투자하여 리소스를 효율적으로 사용할 수 있다.

## RxSwift는 이래서 쓴다!
- 높은 가독성 -> Rx 사용시 선언형 프로그래밍이 가능하기 때문에 / 유지보수성 
- 비동기 처리 일원화 
- 입출력만 체크하면 되기 때문에 UnitTest에 매우 용이

## Observable?
> Observable : 주목할 만한, 관찰할 수 있는
- 이벤트를 시간 흐름에 따라 전달하는 전달자
- 비동기로 동작하는 일련의 항목들을 나타내는 시퀀스
### Observable은 세 가지의 타입의 이벤트를 배출하고 Observer 가 Observable을 구독하여  이 이벤트를  받을 수 있다.
- **next**: next는 이름 그대로 다음 데이터를 가져온다. 가져온 데이터를 옵저버가 받는다.(Emission)
- **completed**: completed는 시퀀스를 성공적으로 마친다. 더 이상 이벤트를 배출하지 않는다.(Notification)
- **error**: error는 오류가 발생하여 마친 경우이다. 이 또한 더 이상 이벤트를 배출하지 않는다.(Notification)

작동방식은  Observer가 Observable을 구독하고, Observable이 이벤트를 배출하면 Observer가 이에 반응하는 방식이다.

## 여기서의 Squence 
> Sequence: 순서, 연속적인 사건들 

Rx에서 시퀀스는 여러 의미를 가지고 있지다.    
시퀀스는 Observable이 될 수 있는 데이터 타입이다.  
시퀀스는 한번에 하나씩 단계적으로 밞아 수행해갈 수 있는 값들의 리스트이다.

## Dispose??
Observer은 기본적으로 completed 또는 error 이벤트가 발생할 때 까지 구독을 유지한다.  
Disposable 객체의 dispose() 메소드를 사용하면 completed/error 이벤트가 발생 이전에도 구독을 취소할 수 있다.  
Disposebag 을 사용하면 여러개의 Disposable 객체를 한 곳에 저장하여 단번에 모두 Dispose 할 수 있다.

## 연산자
- ***just***: 하나의 인자만 수용할 수 있다.
- ***of***: Observable 객체 생성시에는 가변 파라미터를 전달할 수 있기 때문에 여러개의 값을 동시에 전달할 수 있다. 방출할 요소를 원하는 수 만큼 전달할 수 있다.
- ***from***: 배열 또는 시퀀스를 전달받고 배열에 포함된 요소들을 하나씩 순차적으로 방출한다. 
- ***filter***: 클로저를 파라미터로 받는다. filter내에서 True 값을 반환하는 요소가 연산자가 리턴하는 옵저버블에 포합된다.
- ***combineLatest***: source Observable을 결합하여 result Observable을 방출한다.
- ***map***: map을 통해 전달받은 요소에 대하여 특정 연산 작업을 한 후 이로 변환하여 계속하여 진행한다.

## Scheduler
observeOn, subscribeOn 메소드를 통해서 스케줄러 설정을 할 수 있다.  
observeOn은 지정한 위치 이후의 스트림에서 해당 스케줄러가 적용된다. 하지만 subscribeOn은 subscribe 될 때 부터 해당 스트림에 적용하겠다는 의미이다.

## Subject
Subject는 Observer이면서 Observable이다.
방출하는 데이터를 subcribe 할 수도 있고 자체적으로 데이터를 생성할 수 도 있다.
- ***PublishSubject***: 기본값을 갖지 않으며 subscribe 당시 데이터가 없으면 아무것도 방출하지 않다가 데이터가 생기면 그때 방출한다.
- ***BehaviorSubject***: 기본값을 가지며 subscribe 당시 데이터가 없을 경우, 기본값을 방출 한다.
- ***ReplaySubject***: 하나의 subscriber가 있을 경우에는 PublishSubject와 동일하다. 그러나 추가적인 Subscriber가 생길 경우 기존의 데이터를 순차적으로 모두 보내준다.