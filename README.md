d# react-shop

faskstore API를 이용한 반응형 쇼핑몰 제작

## 주요 기능

- 다크 모드 & 라이트 모드 변환
- 장바구니 담기 및 수량 변경
- 상품 검색

## 기술 스택

- React
- TypeScript
- Recoil
- Context
- Axios
- Vercel

## 스크린샷

### 메인 페이지

<div style="display:flex; gap: 20px">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/803b4cec-b7d7-417f-bfc8-fc6547050ef2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T012719Z&X-Amz-Expires=86400&X-Amz-Signature=884568aca85dd66a846c15eca53f36f078734623e5980d8922f4c7c8497c4598&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>

  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e3b79cc-3163-44d0-b291-d550896d422e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T012750Z&X-Amz-Expires=86400&X-Amz-Signature=c494de58f13e6f34026ccea992adb142ce25adde4381b7e164e4a667ed2b240d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>
</div>

### 카테고리 별 페이지

<div style="display:flex; gap: 20px">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/168d92c0-0bcf-45e3-ae23-baf37407245b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T012909Z&X-Amz-Expires=86400&X-Amz-Signature=ad4ad619b9e9ac7fdc17c48cd283c042e4a1d32dda73e09be421a5cf5484fd18&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>

  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26717f6f-c28e-421d-89a3-9ef59b39ae2c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T012926Z&X-Amz-Expires=86400&X-Amz-Signature=3a5c0e0658dc049e0d7353446ad40a259e5bf6feacef27bfbbb2fc51c8a8cea2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>
</div>

### 상품 상세 정보 페이지

<div style="display: flex; gap:20px">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db1b58a2-e00c-43cb-848f-c0f34781fcf7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T012951Z&X-Amz-Expires=86400&X-Amz-Signature=8e15f83d16306ee548f56c9c5c4247c49ad90783bceb857b45e45719a5b512c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="200px"/>

  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53c76486-a574-4598-a98e-cd06cf53ba8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T013006Z&X-Amz-Expires=86400&X-Amz-Signature=3c96264876fbc57b728f7404fa1be993288688b7cca61a5509f7c8f07873cdf1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>
</div>

### 장바구니 페이지

<div style="display: flex; gap:20px">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fba5f69-d643-4398-a034-5dac7f8a201f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T013121Z&X-Amz-Expires=86400&X-Amz-Signature=0eaffbd6a4ce6bfa24e4b3b0cd4e5d10569ac9d96c3074e85963b46e779d540d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="200px"/>

  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abf024a0-afcc-421d-bbc6-0dd52e0ff663/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T013139Z&X-Amz-Expires=86400&X-Amz-Signature=89c3a4cc91510e81fd33980a267e4c4fe178a859ae3537f2fd48b924a0503e49&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" alt=""  height="400px"/>
</div>
