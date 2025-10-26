const holidays = ["正月", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

const num = (holidays.length);

// console.log(num);

for (let i = 0; i < num; i++) {
    console.log(holidays[i]);
}

let days = 0;
while (days !== num) {
    console.log(holidays[days]);
    days += 1;
}