// 오늘 날짜를 표시하는 함수
function displayCurrentDate() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // 날짜 포맷 옵션
    dateElement.innerText = `오늘 날짜: ${today.toLocaleDateString("ko-KR", options)}`;
}

// 페이지 로드 시 오늘 날짜 표시
window.onload = displayCurrentDate;

document.getElementById("fortune-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("fortune-result");

    // 운세 메시지 리스트
    const fortunes = [
        "행운이 가득할 하루입니다! 기분 좋은 만남을 기대해보세요.",
        "오늘은 새로운 기회를 만날 수 있어요. 적극적으로 도전해 보세요!",
        "평온한 하루가 될 거예요. 마음의 여유를 가지세요.",
        "주변 사람들에게서 큰 도움을 받을 수 있는 날입니다.",
        "오늘은 생각지도 못한 좋은 소식을 들을 수 있어요.",
        "자신감을 가지고 행동하면 좋은 결과가 따를 거예요!",
        "재물운이 좋은 하루입니다. 작은 투자에 신경 써보세요!",
        "건강을 돌보세요. 짧은 산책이나 스트레칭이 좋습니다.",
        "감정 표현에 솔직해지는 게 좋을 하루예요. 주변 사람들과 대화해보세요.",
        "오늘의 열정은 미래에 큰 도움이 될 거예요. 계획을 세워보세요!",
        "주변 환경이 변할 수도 있어요. 적응력이 중요한 하루입니다.",
        "행운당첨!!! 선물을 받을수있어요! 김강래 선생님께 말씀해 주세요~!"
    ];

    // 생년월일과 오늘 날짜를 기반으로 한 랜덤 인덱스 생성
    const date = new Date(birthdate);
    const today = new Date();
    const randomIndex = (date.getDate() + today.getDate() + today.getMonth()) % fortunes.length;

    // 운세와 추가 메시지를 요일에 맞춰 다르게 설정
    const fortune = fortunes[randomIndex];
    let additionalMessage = "";

    if (today.getDay() === 0 || today.getDay() === 6) { // 주말이면
        additionalMessage = " 주말을 잘 즐기고 쉬는 게 중요해요!";
    } else if (today.getDay() === 1) { // 월요일이면
        additionalMessage = " 새로운 시작을 준비하세요. 목표를 세워보세요!";
    } else if (today.getDay() === 5) { // 금요일이면
        additionalMessage = " 한 주를 잘 마무리할 준비를 하세요. 휴식을 취할 시간입니다!";
    } else {
        additionalMessage = " 오늘 하루도 파이팅하세요!";
    }

    // 이름과 운세 메시지 출력
    resultElement.innerText = `${name}님의 운세: ${fortune} ${additionalMessage}`;

    // 모달 창 열기
    openModal();
});

// 모달 창 열기 함수
function openModal() {
    document.getElementById("fortune-modal").style.display = "flex";
}

// 모달 창 닫기 함수
function closeModal() {
    document.getElementById("fortune-modal").style.display = "none";
}
// 오늘 날짜를 표시하는 함수
function displayCurrentDate() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // 날짜 포맷 옵션
    dateElement.innerText = `오늘 날짜: ${today.toLocaleDateString("ko-KR", options)}`;
}

// 페이지 로드 시 오늘 날짜 표시
window.onload = displayCurrentDate;

document.getElementById("fortune-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("fortune-result");

    // 운세 메시지 리스트
    const fortunes = [
        "행운이 가득할 하루입니다! 기분 좋은 만남을 기대해보세요.",
        "오늘은 새로운 기회를 만날 수 있어요. 적극적으로 도전해 보세요!",
        "평온한 하루가 될 거예요. 마음의 여유를 가지세요.",
        "주변 사람들에게서 큰 도움을 받을 수 있는 날입니다.",
        "오늘은 생각지도 못한 좋은 소식을 들을 수 있어요.",
        "자신감을 가지고 행동하면 좋은 결과가 따를 거예요!",
        "재물운이 좋은 하루입니다. 작은 투자에 신경 써보세요!",
        "건강을 돌보세요. 짧은 산책이나 스트레칭이 좋습니다.",
        "감정 표현에 솔직해지는 게 좋을 하루예요. 주변 사람들과 대화해보세요.",
        "오늘의 열정은 미래에 큰 도움이 될 거예요. 계획을 세워보세요!",
        "주변 환경이 변할 수도 있어요. 적응력이 중요한 하루입니다.",
        "행운당첨!!! 선물을 받을수있어요! 김강래 선생님께 말씀해 주세요~!"
    ];

    // 생년월일과 오늘 날짜를 기반으로 한 랜덤 인덱스 생성
    const date = new Date(birthdate);
    const today = new Date();
    const randomIndex = (date.getDate() + today.getDate() + today.getMonth()) % fortunes.length;

    // 운세와 추가 메시지를 요일에 맞춰 다르게 설정
    const fortune = fortunes[randomIndex];
    let additionalMessage = "";

    if (today.getDay() === 0 || today.getDay() === 6) { // 주말이면
        additionalMessage = " 주말을 잘 즐기고 쉬는 게 중요해요!";
    } else if (today.getDay() === 1) { // 월요일이면
        additionalMessage = " 새로운 시작을 준비하세요. 목표를 세워보세요!";
    } else if (today.getDay() === 5) { // 금요일이면
        additionalMessage = " 한 주를 잘 마무리할 준비를 하세요. 휴식을 취할 시간입니다!";
    } else {
        additionalMessage = " 오늘 하루도 파이팅하세요!";
    }

    // 이름과 운세 메시지 출력
    resultElement.innerText = `${name}님의 운세: ${fortune} ${additionalMessage}`;

    // 모달 창 열기
    openModal();
});

// 모달 창 열기 함수
function openModal() {
    document.getElementById("fortune-modal").style.display = "flex";
}

// 모달 창 닫기 함수
function closeModal() {
    document.getElementById("fortune-modal").style.display = "none";
}
