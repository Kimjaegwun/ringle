### `typescript`

type 작성을 통해 코드에 목적을 명시하고 타입의 변수나 함수들에서 타입 추론을 통해 에러를 최소화하였습니다.
컴파일 단계에서 버그를 예방할 수 있어 생산성을 향상하였습니다.

### `screen`

scrollview와 flatlist를 활용하여 화면의 스크로를 구현하였습니다. 기본적으로 동일한 컴포넌트들이 반복되거나
데이터 크기가 가변적인 곳에서는 flatlist를 활용하여 화면에 보여지는 부분만을 렌더링 함으로써 퍼포먼스 향상시키고자 하였습니다.
그리고 animated를 사용해 modal을 구현하여 북마크시 toast가 나오도록 구현하였습니다.

### `react-hooks`

useState, useEffect를 활용하여 life cycle에 맞춰 렌더링 될 때마다 특정 작업을 수행할 수 있도록하였습니다.
그리고 useCallback, memo를 활용하여 함수형 컴포넌트 내부에서 발생하는 연산을 최적화하기 위해 노력하였습니다.
마지막으로 useContext를 활용하여 한 페이지안에 컴포넌트로 분리되어 있는 객체상태를 관리하였습니다.

### `react-native-navigation`

react-native 에서는 react와는 다르게 navigation을 이용하여 stack 구조로 screen이 쌓여집니다.
그리고 하단도 마찬가지로 bottom-navigator를 활용하여 구현하였습니다. 하지만 하단은 stack 구조가 아닌 tab으로 구성되어 있습니다.

### `redux-toolkit`

react 에서 가장 많이 사용하는 전역 상태관리 라이브러리를 사용하여 webinar에 대한 data를 관리하였습니다.
그리고 redux 자체는 환경 및 코드의 복잡도가 증가하여 RTK를 활용해 사용성을 높였습니다.

### `react-native-video`

영상 강의를 시청하기 위해 react-native에서 가장 널리 사용되는 video 라이브러리를 이용하여 구현하였습니다.
