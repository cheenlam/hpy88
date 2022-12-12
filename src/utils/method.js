// 取得今日賽事
export function getTodayData(data) {
    let getList = data;
    let newList = [];
    getList.forEach(function(item) {

        let filterList = [];
        for (let i of item.eventList) {
            let nowDay = new Date();
            let itemDay = new Date(Number(i.timestamp) * 1000);
            let mm = nowDay.getMonth() == itemDay.getMonth();
            let dd = nowDay.getDate() == itemDay.getDate();
            if (mm & dd) {
                filterList.push(i);
            }
        }
        item.eventList = filterList;
        if (item.eventList.length > 0) {
            newList.push(item);
        }
    });

    return newList;
}

// 取得次日賽事
export function getNextData(data, num) {
    let today = new Date().addDays(num);

    let todayM = today.getMonth();
    let todayD = today.getDate();

    let getList = JSON.parse(JSON.stringify(data));
    let newList = [];
    getList.forEach(function(item) {
        let filterList = [];
        for (let i of item.eventList) {
            let itemDay = new Date(Number(i.timestamp) * 1000);
            let itemM = itemDay.getMonth();
            let itemD = itemDay.getDate();
            if (itemM == todayM && itemD == todayD) {
                filterList.push(i);
            }
        }
        item.eventList = filterList;
        if (item.eventList.length > 0) {
            newList.push(item);
        }
    });

    return newList;
}

// 過濾上半场盤
export function filterHalf(data) {
    let newList = [];
    if (data != null) {
        data.forEach(function(item) {
            let newEventList = [];
            for (let i of item.eventList) {
                let array = [];
                for (let k of i.competition) {
                    let judge =
                        (k.odds.data_06 == "") &
                        (k.odds.data_07 == "") &
                        (k.odds.data_08 == "") &
                        (k.odds.data_09 == "") &
                        (k.odds.data_10 == "");
                    array.push(judge);
                }
                if (!array[0] || !array[1] || !array[2]) {
                    newEventList.push(i);
                }
            }
            item.eventList = newEventList;
            if (item.eventList.length > 0) {
                newList.push(item);
            }
        });
    }

    return newList;
}

// 過濾独赢盘
export function filterAlone(data, area) {
    let newList = [];
    data.forEach(function(item) {
        let newEventList = [];
        for (let i of item.eventList) {
            let array = [];
            for (let k of i.competition) {
                let judge =
                    (k.odds.data_01 == "") &
                    (k.odds.data_06 == "")
                array.push(judge);
            }
            if (!array[0] || !array[1] || !array[2]) {
                newEventList.push(i);
            }
        }
        item.eventList = newEventList;
        if (item.eventList.length > 0) {
            newList.push(item);
        }
    });
    return newList;
}

// 過濾聯盟
export function filterLeague(data, arr) {
    let newArr = [];
    for (let item in data) {
        if (arr.indexOf(data[item].league.leagueID) != -1) { newArr.push(data[item]) }
    }
    return newArr;
}

// 取相同陣列值
export function getArrEqual(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}

// 取Data轉格式
export function filterApiData(data,live) {
    let getdata = JSON.parse(JSON.stringify(data));
    let totalData = []
    getdata.forEach(function(item) {
        let firstdata = {
            league: {
                name: item.league_name,
                leagueID: item.id,
                sport_kind_id: item.sport_kind_id,
                status: item.status,
            },
            eventList: []
        };
        item.game_list.forEach(function(list) {
            let teamScore = `${list.home_score} - ${list.away_score}`;
            let gamelist = {
                gameID: list.sport_id,
                gameStatus01: live ? teamScore : list.time_field01,
                gameStatus02: list.time_field02,
                timestamp: list.timestamp,
                playtime: item.playing_time_day,
                competition: [{
                    title: list.home_team,
                    odds: {
                        data_01: list.odds[0]?.odds_1 == undefined ? "" : list.odds[0].odds_1,
                        data_02: list.odds[1]?.odds_2 == undefined ? "" : list.odds[1].odds_2,
                        data_03: list.odds[1]?.odds_1 == undefined ? "" : list.odds[1].odds_1,
                        data_04: list.odds[2]?.odds_2 == undefined ? "" : list.odds[2].odds_2,
                        data_05: list.odds[2]?.odds_1 == undefined ? "" : list.odds[2].odds_1,
                        data_06: list.odds[3]?.odds_1 == undefined ? "" : list.odds[3].odds_1,
                        data_07: list.odds[4]?.odds_2 == undefined ? "" : list.odds[4].odds_2,
                        data_08: list.odds[4]?.odds_1 == undefined ? "" : list.odds[4].odds_1,
                        data_09: list.odds[5]?.odds_2 == undefined ? "" : list.odds[5].odds_2,
                        data_10: list.odds[5]?.odds_1 == undefined ? "" : list.odds[5].odds_1,
                    }
                }, {
                    title: list.away_team,
                    odds: {
                        data_01: list.odds[0]?.odds_3 == undefined ? "" : list.odds[0].odds_3,
                        data_02: "",
                        data_03: list.odds[1]?.odds_3 == undefined ? "" : list.odds[1].odds_3,
                        data_04: "",
                        data_05: list.odds[2]?.odds_3 == undefined ? "" : list.odds[2].odds_3,
                        data_06: list.odds[3]?.odds_3 == undefined ? "" : list.odds[3].odds_3,
                        data_07: "",
                        data_08: list.odds[4]?.odds_3 == undefined ? "" : list.odds[4].odds_3,
                        data_09: "",
                        data_10: list.odds[5]?.odds_3 == undefined ? "" : list.odds[5].odds_3,
                    }
                }, {
                    title: "和局",
                    odds: {
                        data_01: list.odds[0]?.odds_2 == undefined ? "" : list.odds[0].odds_2,
                        data_02: "",
                        data_03: "",
                        data_04: "",
                        data_05: "",
                        data_06: list.odds[3]?.odds_2 == undefined ? "" : list.odds[3].odds_2,
                        data_07: "",
                        data_08: "",
                        data_09: "",
                        data_10: ""
                    }
                }]
            };
            firstdata.eventList.push(gamelist)
        })

        totalData.push(firstdata)
    });
    return totalData;
}

// 全無資料打開鎖頭顯示
export function onLock(val, halfGame) {
    if (val != undefined) {
        let totalNum = 0;
        val.competition.forEach(function(item) {
            let num = 0
            if (halfGame) {
                for (let i = 6; i <= 10; i++) {
                    let idx = String(i).padStart(2, '0');
                    if (item.odds[`data_${idx}`] == '') { num++ }
                }
            } else {
                for (let i = 1; i <= 5; i++) {
                    let idx = String(i).padStart(2, '0');
                    if (item.odds[`data_${idx}`] == '') { num++ }
                }
            }
            if (num == 5) { totalNum++ };
        })
        return totalNum == 3 ? true : false;
    }
}

// 返回一個月前日期
export function reOneMonth () {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    let output = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}-${String(today.getDate()).padStart(2, "0")}`;
    return output;
};

// 返回前一周日期
export function reOneWeek () {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    let output = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}-${String(today.getDate()).padStart(2, "0")}`;
    return output;
};
