document.getElementById("submit").onclick = async () => {
  const name = document.getElementById("name").value;
  const times = document.getElementById("times").value.split(',');

  await fetch("https://your-api.onrender.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, available_times: times }),
  });

  alert("제출되었습니다!");
};

const loadResults = async () => {
  const res = await fetch("https://your-api.onrender.com/results");
  const json = await res.json();
  document.getElementById("result").innerText = json.common_times.join(', ');
};

loadResults();
