const touchpad = document.getElementById('touchpad');
const output = document.getElementById('output');

// 터치 시작 이벤트
touchpad.addEventListener('touchstart', (e) => {
    output.textContent = '터치 시작됨!';
    e.preventDefault();
}, false);

// 터치 이동 이벤트
touchpad.addEventListener('touchmove', (e) => {
    output.textContent = `터치 이동 중: x=${e.touches[0].clientX}, y=${e.touches[0].clientY}`;
    e.preventDefault();
}, false);

// 터치 종료 이벤트
touchpad.addEventListener('touchend', () => {
    output.textContent = '터치가 종료되었습니다.';
}, false);

// 드래그(마우스 이벤트) 처리
touchpad.addEventListener('mousedown', (e) => {
    output.textContent = '마우스 클릭 시작됨!';
});

touchpad.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) {
        output.textContent = `마우스 드래그 중: x=${e.clientX}, y=${e.clientY}`;
    }
});

touchpad.addEventListener('mouseup', () => {
    output.textContent = '마우스 클릭이 종료되었습니다.';
});
