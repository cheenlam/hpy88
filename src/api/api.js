import { requestService } from "@/api/request";
import { filterApiData } from "@/utils/method"
import { setToken } from "@/utils/cookies"

// 取得上方選單內容
export function getTopMenu() {
    return requestService({
        url: "/json/topMenu.json",
        method: "get"
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 系統公告
export function apiGetAnnouncementData() {
    return requestService({
        url: "http://api.cckgame.com/api/announcement",
        method: "post"
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 賽事公告
export function apiGetActivityData() {
    return requestService({
        url: "http://api.cckgame.com/api/activity",
        method: "post"
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 取得遊戲大廳清單
export function getHallList() {
    return requestService({
        url: "/json/gamesHall.json",
        method: "get"
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

































































// 登入
export function login(account, password) {
    const data = JSON.stringify({
        account: account,
        password: password,
    });
    return requestService({
        url: "http://api.cckgame.com/api/login",
        method: "post",
        data,
    }).then((response) => {
        if (response.data.code === 200) {        
            setToken(response.data.data.token)
            return response.data.data; 
        } else {
            return response.data.message
        }
    });
}

// 更新token
// export function refreshToken() {

//   return requestService({
//     url: '',
//     method: 'post',
//   }).then((response) => {
//     if (response.data.result === 'success') {
//       setToken(response.data.data)
//     }
//     return response;
//   });
// }

// 取得會員資料
export function apiGetUserMsg(token) {
    const data = JSON.stringify({token});
    return requestService({
        url: "http://api.cckgame.com/api/profile",
        method: "post",data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}



// 信箱
export function apiGetMessageListData(token) {
    const data = JSON.stringify({
        token,
        per_page: 999999999,
    });
    return requestService({
        url: "http://api.cckgame.com/api/sitemessagelist",
        method: "post",
        data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 更新郵件已讀狀態
export function apiChgMainStatus(token,id){
    const data = {
        token: token,
        msg_id: id
    };
    return requestService({
        url: "http://api.cckgame.com/api/sitemessagestatus",
        method: "post",
        data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 刪除郵件
export function apiDelMain(token,id){
    const data = {
        token: token,
        msg_id: id
    };
    return requestService({
        url: "http://api.cckgame.com/api/sitemessagedelete",
        method: "post",
        data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// Menu資料[體育]
export function apiGetMenu() {
    return requestService({
        url: "/json/panels.json",
        method: "GET",
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 滚球盘
export function apiGetLiveData() {
    return requestService({
        url: "http://api.cckgame.com/api/sportinfo1?kind_id=2000&bet_kind=4",
        method: "POST",
    }).then((response) => {
        if (response.status === 200) {
            return filterApiData(response.data.data.list,true);
            // return JSON.parse(sessionStorage.getItem('ranLive'))
            // sessionStorage.setItem("ranLive", []);
            // return []
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 早盘
export function apiGetNoticeData() {
    return requestService({
        url: `http://api.cckgame.com/api/sportinfo1?kind_id=2000&bet_kind=1`,
        method: "POST",
    }).then((response) => {
        if (response.status === 200) {
            return filterApiData(response.data.data.list,false);
            // return JSON.parse(sessionStorage.getItem('ranLive'))
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 跑馬燈
// export function apiGetMarquee() {
//     return requestService({
//         url: "/json/marquee.json",
//         method: "GET",
//     }).then((response) => {
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             console.log(response.data);
//             return;
//         }
//     });
// }

// 取下注詳細資料
export function apiGetUserBeats(token) {
    const data = {
        token,
        page: 1,
        gid: 2006,
        per_page: 999999999,
        bet_time: 0,
    }
    return requestService({
        url: "http://api.cckgame.com/api/betlist",
        method: "post",
        data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 取消注單
export function apiDelBetItem(token,bid) {
    const data = {
        token,
        bid:bid
    }
    return requestService({
        url: "http://api.cckgame.com/api/deletebet",
        method: "post",
        data
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 取錢包資訊
export function apiGetStatements() {
    return requestService({
        url: "/json/statementsData.json",
        method: "GET",
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}

// 提交下注
export function apiSumitBet(token,amount,bet_kind,betList) {
    let data = {
        gid: 2006,
        parlays_discount: 1,
        bet_kind: bet_kind,
        token: token,
        amount: amount,
        betList: betList
    }

    return requestService({
        url: "http://api.cckgame.com/api/sportbet",
        method: "post",data
    }).then((response) => {
        if (response.status == 200) {
            return response.data;
        } else {
            console.log(response.data);
            return;
        }
    });
}







// ====================================================================
// 亂數滚球盘
export function ranLiveData() {
    // 聯盟參考
    let leagueRefer = ['俄罗斯杯', '悉尼超级杯'];
    // 取得聯盟隨機值(僅1or2 或 1+2)
    let ranLeague = parseInt(Math.random() * 3);
    let leagueArr = [];
    switch (ranLeague) {
        case 0:
            leagueArr.push(leagueSp(leagueRefer[0], 1100));
            break;
        case 2:
            leagueArr.push(leagueSp(leagueRefer[1], 1200));
            break;
        default:
            leagueArr.push(leagueSp(leagueRefer[0], 1100));
            leagueArr.push(leagueSp(leagueRefer[1], 1200));
            break;
    }
    // 產生連續gameID參考
    let gameidRefer = [];
    for (let i = 0; i < 10; i++) { gameidRefer.push(Number(`220${i}`)) };
    // 產生由小至大時間參考
    let timeRefer = [];
    for (let i = 0; i < 10;) {
        let val = `${parseInt(Math.random()*20).toString().padStart(2,'0')}:${(parseInt(Math.random()*2)*30).toString().padStart(2,'0')}`;
        let find = timeRefer.indexOf(val);
        if (find == -1) {
            timeRefer.push(val);
            i++;
        }
    }
    timeRefer.sort()
        // 隊名參考
    let teamName = ['卡達', '英格蘭', '厄瓜多', '伊朗', '塞內加爾', '美國', '荷蘭', '威爾斯', '阿根廷', '丹麥', '沙烏地阿拉伯', '突尼西亞', '墨西哥', '波蘭', '法國', '澳洲', '摩洛哥', '德國', '日本', '克羅埃西亞', '西班牙', '比利時', '加拿大', '哥斯大黎加', '瑞士', '烏拉圭', '南韓', '巴西', '葡萄牙', '迦納', '塞爾維亞'];
    let teamRefer = [];
    // 隨機取最多16隊不重複隊名
    for (let i = 0; i < 16;) {
        let val = teamName[parseInt(Math.random() * teamName.length)];
        let find = teamRefer.indexOf(val);
        if (find == -1) { teamRefer.push(val);
            i++; }
    }
    // 聯盟樣板
    function leagueSp(setName, id) {
        return { league: { name: setName, leagueID: id }, eventList: [] }
    }
    // 賽事樣板
    function gameSp(id, time, timestamp, homeTeam, visitingTeam) {
        let status = `${parseInt(Math.random()*4)}-${parseInt(Math.random()*4)}`;
        let today = new Date();
        let getDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        // 模板
        let template = {
                gameID: id,
                gameStatus01: status,
                gameStatus02: time,
                timestamp: timestamp,
                playtime: getDate,
                competition: [
                    { title: homeTeam, odds: {} },
                    { title: visitingTeam, odds: {} },
                    { title: "和局", odds: {} }
                ]
            }
            // 產生主隊數據
        for (let i = 1; i <= 10; i++) {
            let idx = String(i).padStart(2, '0')
            if (i < 6) {
                template.competition[0].odds[`data_${idx}`] = i % 2 == 0 ? ranLetBall() : ranOddsData();
            } else {
                template.competition[0].odds[`data_${idx}`] = i % 2 == 0 ? ranOddsData() : ranLetBall();
            }
        }
        // 產生客隊數據
        for (let i = 1; i <= 10; i++) {
            let idx = String(i).padStart(2, '0')
            if (i < 6) {
                template.competition[1].odds[`data_${idx}`] = i % 2 == 0 ? "" : ranOddsData();
            } else {
                template.competition[1].odds[`data_${idx}`] = i % 2 == 0 ? ranOddsData() : "";
            }
        }
        // 產生客隊數據
        for (let i = 1; i <= 10; i++) {
            let idx = String(i).padStart(2, '0')
            template.competition[2].odds[`data_${idx}`] = i == 1 || i == 6 ? ranOddsData() : "";
        }
        // 產生關閉賽事情況
        let lockNum = parseInt(Math.random() * 10)
        if (lockNum < 2) {
            // 關閉全场
            for (let i = 0; i < 3; i++) {
                for (let k = 1; k <= 5; k++) {
                    let idx = String(k).padStart(2, '0')
                    template.competition[i].odds[`data_${idx}`] = "";
                }
            }
        } else if (lockNum > 8) {
            // 關閉上半场
            for (let i = 0; i < 3; i++) {
                for (let k = 6; k <= 10; k++) {
                    let idx = String(k).padStart(2, '0')
                    template.competition[i].odds[`data_${idx}`] = "";
                }
            }
        }
        return template;
    }
    // 組合賽事
    let count = 0;
    leagueArr.forEach(function(item) {
        // 每聯盟eventList放進多少賽事數 (2 or 4)
        let ranGamesNum = parseInt(Math.random() * 2 + 1) * 2;
        for (let i = 0; i < ranGamesNum; i++) {
            // 取得gameID
            let id = gameidRefer[count];
            // 取得比賽時間
            let time = timeRefer[count];
            // 取得時間搓記
            let today = new Date();
            let yy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            let timeArr = timeRefer[count].split(':');
            let timestamp = (new Date(yy, mm, dd, timeArr[0], timeArr[1])) / 1000;
            // 取得主隊名稱
            let homeTeam = teamRefer[count];
            // 取得客隊名稱
            let visitingTeam = teamRefer[count + 1];
            // 產生賽事資料
            let getGame = gameSp(id, time, timestamp, homeTeam, visitingTeam);
            item.eventList.push(getGame);
            count++;
        }
    })
    return leagueArr
}
// 修改滚球盘數據
export function setRanLive() {
    let data = sessionStorage.getItem('ranLive') == null ? [] : JSON.parse(sessionStorage.getItem("ranLive"));
    data.forEach(function(item) {
        item.eventList.forEach(function(event) {
            // 設定全场+半場 (1X2)
            setGenerally("data_01");
            setGenerally("data_06");
            function setGenerally(key) {
                let generally = []
                generally[0] = setData(event.competition[0].odds[key]);
                generally[1] = setData(event.competition[1].odds[key]);
                generally[2] = setData(event.competition[2].odds[key]);

                if (generally[0] != '' && generally[1] != '' && generally[2] != '') {
                    // 皆不為空
                    event.competition[0].odds[key] = generally[0];
                    event.competition[1].odds[key] = generally[1];
                    event.competition[2].odds[key] = generally[2];
                } else {
                    event.competition[0].odds[key] = '';
                    event.competition[1].odds[key] = '';
                    event.competition[2].odds[key] = '';
                }
            }
            // 設定全场+半場 (让分盘、大小盘)
            setLetBall("data_02","data_03");
            setLetBall("data_04","data_05");
            setLetBall("data_07","data_08");
            setLetBall("data_09","data_10");
            function setLetBall(key01,key02) {
                let letBall = [];
                letBall[0] = setData(event.competition[0].odds[key02]);
                letBall[1] = setData(event.competition[1].odds[key02]);
                if (letBall[0] == '' || letBall[1] == '') {
                    // 主客隊新值其中之一為空
                    event.competition[0].odds[key01] = "";
                    event.competition[0].odds[key02] = "";
                    event.competition[1].odds[key02] = "";
                } else {
                    if (event.competition[0].odds[key02] == '' && event.competition[1].odds[key02] == '') {
                        // 如果之前資料為空值 ==> 重新產生新讓球數,並賦予新賠率
                        event.competition[0].odds[key01] = ranLetBall();
                        event.competition[0].odds[key02] = letBall[0];
                        event.competition[1].odds[key02] = letBall[1];
                    } else {
                        event.competition[0].odds[key02] = letBall[0];
                        event.competition[1].odds[key02] = letBall[1];
                    }
                }
            }
        })
    })

    // 設定新賠率 (可能為原始值、亂數值、空值)
    function setData(data) {
        let ran = parseInt(Math.random() * 11);
        let newData;
        if (ran == 5) { newData = ''; } else if (ran < 5) { newData = data; } else if (ran > 5) { newData = ranOddsData(); }
        return newData
    }


    sessionStorage.setItem('ranLive', JSON.stringify(data));
}
// 產生隨機讓球數
function ranLetBall() { return (parseInt(Math.random() * 10) * 0.5 - 2).toFixed(2) };
// 產生隨機賠率
function ranOddsData() { return (Math.random() * 5 + 1).toFixed(2) };
// ====================================================================