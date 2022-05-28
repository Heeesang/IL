# Moya가 모야...? 🧐

Moya는 스위프트 네트워크 추상화 라이브러리 입니다.
네트워크 계층을 구조화하는 접근방식을 제공하면서 실제로 Alamofire를 사용 합니다. 
일반적으로 열거형을 사용하여 캡슐화에 초점을 맞춘 라이브러리 입니다.

<img width = "500" src = "https://github.com/Moya/Moya/raw/master/web/diagram.png">

네트워크 층이 완전하게 추상화를 하지 못한 부분을 Moya 라이브러리가 정리해줍니다.

## Moya 설치
CocoaPods
> pod 'Moya'

## 구성요소

*Provider*  
> 모든 네트워크 서비스와 상호작용할 때 만들고 사용할 주요한 객체

*Target*
> 전체 API 서비스를 설명 합니다. TargetType 프로토콜을 체택하는 것으로 target을 정의 합니다.

*Endpoint*  
> moya는 네트워크 요청을 이행하는 요구된 정보의 기본조각을 설명하는 반 내부 끝점 객체를 사용합니다.

[Moya_practice](https://github.com/Heeesang/NEws_aPi)

<https://wodyios.tistory.com/23>