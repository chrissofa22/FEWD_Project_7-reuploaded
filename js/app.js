var {cookie,tTime,tNum,tColor,tBorder,tChart,dDay,dNum,dColor,daChart,mUse,mNum,deChart,mUser,user,message,mOrder
} = varCombine();
cookieFunc();
cookie.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    cookie.style.transform = "scale(1, 0)";
    cookie.style.visibility = 'hidden';
    cookie.style.height = '0';
    cookie.style.padding = '0';
  }
});
var {
  nIcon,
  nContainer,
  dot,
  notificationPhrases
} = vFunc();
nIcon.addEventListener('click', () => {
  if (nContainer.innerHTML == "" && dot == 'green') {
    const div = document.createElement('DIV');
    div.classList.add('notification-div');
    nContainer.appendChild(div);
    for (i = 0; i < notificationPhrases.length; i += 1) {
      const divPhrase = document.createElement('DIV');
      divPhrase.classList.add('phrase-div');
      const p = document.createElement('P');
      p.innerHTML = notificationPhrases[i];
      div.appendChild(divPhrase);
      divPhrase.appendChild(p);
    }
  } else if (nContainer.innerHTML != "") {
    nContainer.firstChild.remove();
  }
});
let trafficData = {
  labels: tTime,
  datasets: [{
    data: tNum,
    backgroundColor: tColor,
    borderColor: tBorder,
    lineTension: 0,
    borderWidth: 2,
    pointBackgroundColor: "#fff",
    pointRadius: 5,
    pointBorderWidth: 2
  }]
};
let trafficOptions = {
  aspectRatio: 0.8,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  }
};
let trafficChart = new Chart(tChart, {
  type: 'line',
  data: trafficData,
  options: trafficOptions,
  radius: 10
});
const trafficList = document.querySelector('.traffic-nav');
trafficList.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    e.target.classList.add('traffic-active');
    const li = document.querySelectorAll('.traffic-nav-link');
    for (let i = 0; i < li.length; i++) {
      if (li[i] === e.target) {
        continue
      };
      li[i].classList.remove('traffic-active');
    }
  }
});
const dailyData = {
  labels: dDay,
  datasets: [{
    label: '',
    data: dNum,
    backgroundColor: dColor,
    borderWidth: 3
  }]
};
const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
}
let dailyChart = new Chart(daChart, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});
const deviceData = {
  labels: mUse,
  datasets: [{
    label: '# of Users',
    data: mNum,
    borderWidth: 2,
    backgroundColor: ['#80b0bd', '#90c694', '#7378ba']
  }]
};
const deviceOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 13,
      padding: 10
    }
  }
}
let deviceChart = new Chart(deChart, {
  type: 'doughnut',
  data: deviceData,
  options: deviceOptions
});

function vFunc() {
  const nIcon = document.querySelector('.bell-solo');
  const nContainer = document.getElementById('notifications');
  let dot = 'green';
  const notificationPhrases = ['Victoria Chambers sent you a video', 'Dale Byrd invited you to like his page'];
  return {
    nIcon,
    nContainer,
    dot,
    notificationPhrases
  };
}

function cookieFunc() {
  cookie.innerHTML = `
<div class="alert-banner">
<p><strong>Alert  </strong></p>
<p class="middle-text">This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. Review our <a href="https://sallysbakingaddiction.com/category/desserts/cookies/" target="_blank"><u>cookies information</u></a> for more details.</p>
<p class="alert-banner-close">X</p>
</div>
`;
}

function varCombine() {
  const cookie = document.getElementById("alert");
  const tChart = document.getElementById("traffic-chart");
  const daChart = document.getElementById("daily-chart");
  const deChart = document.getElementById("mobile-chart");
  let tNum = [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000];
  let tTime = ['0', '7', '14', '21', '28', '35', '42', '49', '56', '63', '70'];
  let tColor = 'rgba(116, 119, 191, 0.15)';
  let tBorder = 'rgba(116, 119, 191, 0.3)';
  let dNum = [75, 115, 175, 125, 225, 200, 100];
  let dDay = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  let dColor = '#7477bf';
  let mNum = [96, 152, 409];
  let mUse = ['Phones', 'Tablets', 'Desktop'];
  const user = document.getElementById("userField");
  const message = document.getElementById("messageField");
  const mUser = document.querySelector(".widget-container");
  const mOrder = ['Tracy Gill', 'Victoria Chambers', 'Mindy Reynolds', 'Philip Wheeler', 'Dale Byrd', 'Cora Clayton', 'Dawn Wood', 'Rodolfo Aguilar', 'Dan Oliver'];
  return {cookie,tTime,tNum,tColor,tBorder,tChart,dDay,dNum,dColor,daChart,mUse,mNum,deChart,mUser,user,message,mOrder
  };
}

function updateCharts() {
  dailyChart.data = {
    labels: dDay,
    datasets: [{
      label: '',
      data: dNum,
      backgroundColor: dColor,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0
    }]
  }
  trafficChart.data = {
    labels: tTime,
    datasets: [{
      label: '',
      data: tNum,
      backgroundColor: tColor,
      borderColor: tBorder,
      borderWidth: 2,
      lineTension: 0,
      pointBackgroundColor: "#fff",
      pointRadius: 5,
      pointBorderWidth: 2
    }]
  }
  trafficChart.update();
  deviceChart.update();
}
const hourlyLi = document.querySelectorAll(".traffic-nav-link")[0];
hourlyLi.addEventListener("click", () => {
  tNum = [0, 1143, 2121, 324, 657, 789, 1111, 2087, 1221, 1876, 1340];
  updateCharts();
});
const dailyLi = document.querySelectorAll(".traffic-nav-link")[1];
dailyLi.addEventListener("click", () => {
  tNum = [0, 278, 446, 1765, 1209, 1342, 2189, 290, 1465, 1243, 1874];
  updateCharts();
});
const weeklyLi = document.querySelectorAll(".traffic-nav-link")[2];
weeklyLi.addEventListener("click", () => {
  tNum = [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000];
  updateCharts();
});
const monthlyLi = document.querySelectorAll(".traffic-nav-link")[3];
monthlyLi.addEventListener("click", () => {
  tNum = [0, 2432, 128, 186, 2133, 1313, 1380, 1855, 576, 1421, 872];
  updateCharts();
});
mUser.addEventListener('submit', (e) => {
  e.preventDefault();
  if (user.value === "" && message.value === "") {
    alert("Enter both a user and a message before sending.");
  } else if (user.value === "") {
    alert("Enter both a user and a message before sending.");
  } else if (message.value === "") {
    alert("Enter both a user and a message before sending.");
  } else {
    alert(`${user.value} received your message.`);
  }
});
const toggleButtonEmail = document.querySelector('.toggle-button-email');
const toggleButtonProfile = document.querySelector('.toggle-button-profile');
const saveButton = document.getElementById('save-button');
const cancelButton = document.getElementById('cancel-button');
toggleButtonEmail.addEventListener('click', () => {
  toggleButtonEmail.classList.toggle('off');
  if (document.getElementById('email-toggle').innerHTML == "ON") {
    document.getElementById('email-toggle').innerHTML = "OFF";
    saveButton.addEventListener('click', () => {
      localStorage.setItem('emailStorage', 'off');
    });
  } else if (document.getElementById('email-toggle').innerHTML == "OFF") {
    document.getElementById('email-toggle').innerHTML = "ON";
    saveButton.addEventListener('click', () => {
      localStorage.setItem('emailStorage', 'on');
    });
  }
});
toggleButtonProfile.addEventListener('click', () => {
  toggleButtonProfile.classList.toggle('off');
  if (document.getElementById('profile-toggle').innerHTML == "ON") {
    document.getElementById('profile-toggle').innerHTML = "OFF";
    saveButton.addEventListener('click', () => {
      localStorage.setItem('profileStorage', 'off');
    });
  } else if (document.getElementById('profile-toggle').innerHTML == "OFF") {
    document.getElementById('profile-toggle').innerHTML = "ON";
    saveButton.addEventListener('click', () => {
      localStorage.setItem('profileStorage', 'on');
    });
  }
});
saveButton.addEventListener('click', () => {
  let timezoneValue = document.getElementById('timezone').value;
  localStorage.setItem('timezoneStorage', timezoneValue);
});
document.getElementById('timezone').value = localStorage.getItem('timezoneStorage');
if (localStorage.getItem('emailStorage') == 'on') {
  document.getElementById('email-toggle').innerHTML = "ON";
  toggleButtonEmail.classList.toggle('off');
}
if (localStorage.getItem('profileStorage') == 'on') {
  document.getElementById('profile-toggle').innerHTML = "ON";
  toggleButtonProfile.classList.toggle('off');
}
cancelButton.addEventListener('click', () => {
  localStorage.removeItem('emailStorage');
  localStorage.removeItem('profileStorage');
  document.getElementById('email-toggle').innerHTML = "OFF";
  document.getElementById('profile-toggle').innerHTML = "OFF";
  toggleButtonEmail.classList.remove('off');
  toggleButtonProfile.classList.remove('off');
  document.getElementById('timezone').value = 'select a timezone';
  localStorage.setItem('timezoneStorage', 'select a timezone');
});
const input = document.getElementById("userField");
new Autofill(input, {
  list: mOrder
});