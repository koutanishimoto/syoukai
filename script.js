// 時計表示
function showClock() {
    var now = new Date();
    var clockElement = document.getElementById("clock");
    clockElement.textContent = now.toLocaleTimeString();
  }
  
  // 背景色切り替え
  function toggleBackground() {
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.classList.toggle("dark-mode");
  }
  
  // カウンター
  var count = 0;
  function incrementCounter() {
    count++;
    document.getElementById("counter").textContent = count;
  }
  
  // カウンターリセット
  function resetCounter() {
    count = 0;
    document.getElementById("counter").textContent = count;
  }
  
  // アラート表示
  function showAlert() {
    var inputElement = document.getElementById("inputNumber");
    var num = parseInt(inputElement.value);
  
    for (var i = 0; i < num; i++) {
      alert("メッセージ" + (i + 1));
    }
  }
  