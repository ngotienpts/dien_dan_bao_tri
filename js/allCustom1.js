(function ($) {
    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
});
function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function convertJsonDate(param) {
    try {
        let _timeString = param.substr(6, 13);
        let currentTime = new Date(parseInt(_timeString));
        let month = currentTime.getMonth() + 1;
        let day = currentTime.getDate();
        let year = currentTime.getFullYear();
        let hour = currentTime.getHours();
        let minute = currentTime.getMinutes();
        let date = day + "/" + month + "/" + year + " " + hour + ":" + minute;
        return (date);
    } catch {
        return "";
    }
}
function friendlyTitle(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gui, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gui, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/gui, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gui, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gui, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/gui, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/gui, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/gui, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/gui, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/gui, "Y");
    str = str.replace(/Đ/gui, "D");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // huyền, sắc, hỏi, ngã, nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)
    str = str.replace(/\(|\)/gui, "");
    str = str.replace(/\./gui, "-");
    str = str.replace(/ /gui, "-");
    str = str.replace(/--/gui, "-");
    return str.replace("--", "-").toLowerCase();
};
function replaceTitle(str1) {
    str1 = str1.replace("(", "\\(");
    str1 = str1.replace(")", "\\)");
    str1 = str1.replace(".", "\\.");
    return str1;
};
function openPopup(url) {
    let width = 575, height = 400,
        left = (document.documentElement.clientWidth / 2 - width / 2),
        top = (document.documentElement.clientHeight - height) / 2,
        opts = 'status=1,resizable=yes' +
            ',width=' + width + ',height=' + height +
            ',top=' + top + ',left=' + left;
    win = window.open(url, '', opts);
    win.focus();
    return win;
}
function copyToClipboard(element) {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).attr("data-href")).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Link đã được copy");
    return false;
}
function getDates() {
    let d = new Date();
    let strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return strDate;
}
function numberWithCommas(convertx) {
    return convertx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function formatTime(time) {
    try {
        let min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        return min + ":" + (sec < 10 ? "0" + sec : sec);
    } catch {
        return '';
    }

}
function decodeHtmlEntity(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
};
function isPlaying(audelem) { return !audelem.paused; }
function closePopUp() {
    $('.popUp').removeClass('active');
}
function timeSince(date) {
    try {
        let _date = new Date(date)
        let seconds = Math.floor((new Date() - _date) / 1000);
        let interval = seconds / 31536000;

        if (interval > 1) return `${Math.floor(interval)} năm trước`;
        interval = seconds / 2592000;
        if (interval > 1) return `${Math.floor(interval)} tháng trước`;
        interval = seconds / 86400;
        if (interval > 1) return (interval < 2 ? "hôm qua" : `${Math.floor(interval)} ngày trước`);
        interval = seconds / 3600;
        if (interval > 1) return `${Math.floor(interval)} giờ trước`;
        interval = seconds / 60;
        if (interval > 1) return `${Math.floor(interval)} phút trước`;
        return `${Math.floor(interval)} giây trước`;
    }
    catch {
        return "";
    }

}

function replaceContent(regex, content) {
    try {
        let temp = content;
        let _regex = new RegExp(regex, "gm");
        temp = temp.replace(_regex, "<h2>$1</h2>");
        return temp;

    } catch {
        return content;
    }
}

function getWeatherCity() {

    if ($(".onecms__weathercity").length == 0) return false;

    const isMobile = window.innerWidth < 992;

    const weekDays = function (days) {
        try {
            const currentTime = new Date(days);
            let day = currentTime.getDay();
            let dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
            if (isMobile)
                dayNames = ["CN", "T.Hai", "T.Ba", "T.Tư", "T.Năm", "T.Sáu", "T.Bảy"];
            const utc = new Date().toJSON().slice(0, 10);
            if (days.indexOf(utc) > -1) {
                if (isMobile)
                    return "H.nay";
                return "Hôm nay";
            }
            return dayNames[day];
        }
        catch {
            return;
        }

    };

    // config default
    let weatherConfigByHour = {
        isShowDisplay_Y: false,
        isShowDisplay_X: false,
        isShowLabel: true,
        isShowWeatherIcon: true,
        topLapbel: 55,
        topIcon: 50,
        iconWidthHeight: 40,
        leftLabel: 20,
        leftIcon: 35
    }

    let weatherConfigByDay = {
        isShowDisplay_Y: false,
        isShowDisplay_X: false,
        isShowLabel: true,
        isShowWeatherIcon: true,
        topLapbel: 50,
        topIcon: 50,
        iconWidthHeight: 40,
        leftLabel: 10,
        leftIcon: 38,
    }

    if (isMobile) {
        weatherConfigByHour = {
            isShowDisplay_Y: false,
            isShowDisplay_X: false,
            isShowLabel: true,
            isShowWeatherIcon: true,
            topLapbel: 40,
            topIcon: 35,
            iconWidthHeight: 30,
            leftLabel: 18,
            leftIcon: 33,
        };

        weatherConfigByDay = {
            isShowDisplay_Y: false,
            isShowDisplay_X: false,
            isShowLabel: true,
            isShowWeatherIcon: true,
            topLapbel: 40,
            topIcon: 40,
            iconWidthHeight: 30,
            leftLabel: 18,
            leftIcon: 30
        };
    }

    let renderChartWeather = function () {

        const dataCity = $(".onecms__weathercity").attr("data-city");

        if (dataCity === undefined)
            return false;

        const url = `https://onecms.vn/api/getweather/${dataCity}`;

        $.ajax({
            url: url,
            type: "GET",
            success: function (_data) {
                try {
                    if (_data == null) return false;
                    _data = JSON.stringify(_data)
                    _data = JSON.parse(_data);
                    _data = JSON.parse(_data);
                    if (_data.length === 0) return false;

                    // meta
                    $("h1.c-cat-list__current").html(`Thời tiết ${_data.CityName}`);
                    $("title").html(`Thời tiết ${_data.CityName}`);
                    $(".onecms__weathercity").prepend(`<div class='box-info-weather flexbox' id='overview' style='min-height: 240px;'>
                                                                        <div class='box-info-weather__left'>
                                                                            <span class='weather-day-current'>Hiện tại</span>
                                                                            <div class='weather-day'>
                                                                                <img class='ic ic-weather' src='${_data.Currtent.ConditionIcon}' alt='weather logo'>
                                                                                <div class='big-temp'>${_data.Currtent.TempC}°</div>
                                                                                <div class='name'>${_data.Currtent.ConditionText}</div>
                                                                            </div>
                                                                            <div class='color-gray-2'>
                                                                                <p>Cao: ${_data.ForecastDays[0].MaxTempC}°  Thấp: ${_data.ForecastDays[0].MinTempC}°</p>
                                                                                <p>Xác suất mưa: ${_data.Currtent.WillItRain}%</p>
                                                                                <p>Gió: ${_data.Currtent.WindKph} Km/h</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class='box-info-weather__right text-right color-gray-2'>
                                                                            <div class='weather-tooltip mb40'>
                                                                                <span class='weather-tooltip-group'>
                                                                                    <span>Cảm giác như ${_data.Currtent.FeelsLikeC}°</span>
                                                                                    <svg class='ic ic-help'>
                                                                                        <use xlink:href='#icon-help'></use>
                                                                                    </svg>
                                                                                </span>
                                                                                <div class='box-info-hover'>
                                                                                    <div class='title'>
                                                                                        <span class='header_tooltip'>
                                                                                            <svg class='ic ic-help'>
                                                                                                <use xlink:href='#icon-temperature'></use>
                                                                                            </svg><span>Nhiệt độ cảm nhận</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class='scroll-height'>
                                                                                        <p>Nhiệt độ cảm nhận (heat index) là nhiệt độ cơ thể con người cảm thấy trong thực tế, được tính dựa trên dữ liệu nhiệt độ kết hợp với độ ẩm.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <p>Độ ẩm: ${_data.Currtent.Humidity}%</p>
                                                                            <p>Tầm nhìn: ${_data.Currtent.VisKm} Km</p>
                                                                            <div>
                                                                                <span>UV:</span>
                                                                                <div class='weather-tooltip'>
                                                                                    <span class='weather-tooltip-group'>
                                                                                        <span>${_data.Currtent.Uv} / 11</span>
                                                                                        <svg class='ic ic-help'>
                                                                                            <use xlink:href='#icon-help'></use>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <div class='box-info-hover'>
                                                                                        <div class='title'>
                                                                                            <span class='header_tooltip'>
                                                                                                <svg class='ic ic-help'>
                                                                                                    <use xlink:href='#icon-uv'></use>
                                                                                                </svg><span>Chỉ số UV</span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class='scroll-height'>
                                                                                            <ul class='chi-so'>
                                                                                                <li class='item quality-1'>
                                                                                                    <div class='lbl flex'>
                                                                                                        <div>1 → 2</div>
                                                                                                        <div>Thấp</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class='item quality-2'>
                                                                                                    <div class='lbl flex'>
                                                                                                        <div>3 → 5</div>
                                                                                                        <div>Trung bình</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class='item quality-3'>
                                                                                                    <div class='lbl flex'>
                                                                                                        <div>6 → 7</div>
                                                                                                        <div>Cao</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class='item quality-4'>
                                                                                                    <div class='lbl flex'>
                                                                                                        <div>8 → 10</div>
                                                                                                        <div>Rất cao</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class='item quality-5'>
                                                                                                    <div class='lbl flex'>
                                                                                                        <div>11+</div>
                                                                                                        <div>Cực điểm</div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            </ul>
                                                                                            <p>
                                                                                                Theo Cơ quan Bảo vệ Môi trường Mỹ (EPA), chỉ số UV dao động 0-2 được xem là thấp, chỉ số 8-10 có thời gian tiếp xúc gây bỏng là 25 phút. Chỉ số UV từ 11 trở lên được xem là cực kỳ cao, rất nguy hiểm, nguy cơ làm tổn thương da, mắt bị bỏng nếu tiếp xúc
                                                                                                ánh nắng mặt trời trong khoảng 15 phút mà không được bảo vệ.
                                                                                            </p>
                                                                                            <p>Tiếp xúc quá mức với ánh sáng mặt trời trong thời gian ngắn sẽ gây bỏng nắng, tổn thương mắt như đục thủy tinh thể, da bị bỏng, khô, sạm, tạo nếp nhăn, lão hóa nhanh. Tiếp xúc tia UV lâu dài, tích lũy có thể gây ung thư da.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>`)

                    // weather today
                    const dataToday = _data.ForecastDays[0].WeatherHours.filter(function (currentValue, index) {
                        if (index % 3 === 0 || index == 23) {
                            let time = currentValue.Time.slice(-5);
                            if (time.startsWith("0"))
                                time = time.slice(-4);
                            currentValue.x = time;
                            return currentValue;
                        }
                    });
                    const listIconByHour = dataToday.map(x => x.ConditionIcon);
                    const listTempByHour = dataToday.map(x => x.TempC);

                    // plugin
                    const showIconWeatherByHour = {
                        id: 'showIconWeatherByHour',
                        beforeDraw(chart, args, options) {
                            if (weatherConfigByHour.isShowWeatherIcon) {
                                const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
                                ctx.save();
                                for (let i = 0; i <= listTempByHour.length - 1; i++) {
                                    const icon = new Image();
                                    icon.src = listIconByHour[i];
                                    ctx.drawImage(icon, x.getPixelForValue(i) - weatherConfigByHour.leftIcon / 2, y.getPixelForValue(listTempByHour[i]) - weatherConfigByHour.topIcon, weatherConfigByHour.iconWidthHeight, weatherConfigByHour.iconWidthHeight);
                                }
                            }

                        }
                    }
                    const topLabelsByHour = {
                        id: 'topLabelsByHour',
                        afterDatasetDraw(chart, args, options) {
                            if (weatherConfigByHour.isShowLabel) {
                                const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
                                for (let i = 0; i <= listTempByHour.length - 1; i++) {
                                    let temp = `${listTempByHour[i]}°C`;
                                    if (isMobile)
                                        temp = `${listTempByHour[i]}°`;
                                    ctx.fillText(temp, x.getPixelForValue(i) - weatherConfigByHour.leftLabel / 2, y.getPixelForValue(listTempByHour[i]) - weatherConfigByHour.topLapbel);
                                }
                            }

                        }
                    }

                    // config chart
                    const dataWeatherByHour = {
                        datasets: [{
                            label: 'Nhiệt độ (°C)',
                            backgroundColor: 'rgb(255,244,228)',
                            borderColor: '#ff0000',
                            data: dataToday,
                            fill: true,
                            tension: 0.4,
                            stack: 'combined',
                            type: 'line',
                            parsing: {
                                xAxisKey: 'x',
                                yAxisKey: 'TempC'
                            }
                        }]
                    };
                    const configWeatherByHour = {
                        type: 'line',
                        data: dataWeatherByHour,
                        plugins: [showIconWeatherByHour, topLabelsByHour],
                        options: {
                            interaction: {
                                intersect: false,
                                mode: 'index',
                            },
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: isMobile ? false : true,
                                    text: 'Thời tiết 24h hôm nay',
                                    position: 'bottom'
                                },
                                legend: {
                                    position: 'bottom',
                                },
                                tooltip: {
                                    enabled: true,
                                    callbacks: {
                                        footer: function (context) {

                                            const weatherByHour = context[0].dataset.data.filter(item => item.x == context[0].label);
                                            if (weatherByHour.length === 0)
                                                return false;

                                            const newData = [];
                                            newData.push(`${weatherByHour[0].ConditionText}`);
                                            newData.push(`Cảm giác như ${weatherByHour[0].FeelsLikeC}°C`);
                                            newData.push(`Tầm nhìn xa: ${weatherByHour[0].VisKm}Km`);
                                            newData.push(`Xác suất mưa: ${weatherByHour[0].WillItRain}%`);
                                            newData.push(`Gió: ${weatherByHour[0].WindKph}Km/h`);
                                            newData.push(`Độ ẩm: ${weatherByHour[0].Humidity}%`);
                                            newData.push(`Uv: ${weatherByHour[0].Uv}/11`);
                                            return newData;
                                        },
                                    }

                                }
                            },
                            scales: {
                                y: {
                                    min: 0,
                                    max: 50,
                                    grid: {
                                        //display: false,
                                    },
                                    display: weatherConfigByHour.isShowDisplay_Y,

                                },
                                x: {
                                    grid: {
                                        display: weatherConfigByHour.isShowDisplay_X,
                                    },
                                    //display: false,
                                }

                            }
                        },
                    };
                    const chartWeatherByHour = new Chart(
                        document.getElementById('Chart_WeatherToday'),
                        configWeatherByHour,
                    );

                    // weather by day

                    const data7days = _data.ForecastDays.map(item => {
                        item.x = weekDays(item.Date);
                        if (isMobile)
                            item.x = weekDays(item.Date);
                        return item;
                    });
                    const listIconByDay = data7days.map(x => x.ConditionIcon);
                    const listTempByDay = data7days.map(x => x.MaxTempC);

                    // plugin
                    const showIconWeatherByDay = {
                        id: 'showIconWeatherByDay',
                        beforeDraw(chart, args, options) {
                            if (weatherConfigByDay.isShowWeatherIcon) {
                                const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
                                ctx.save();
                                for (let i = 0; i <= listTempByDay.length - 1; i++) {
                                    const icon = new Image();
                                    icon.src = listIconByDay[i];
                                    ctx.drawImage(icon, x.getPixelForValue(i) - weatherConfigByDay.leftIcon / 2, y.getPixelForValue(listTempByDay[i]) - weatherConfigByDay.topIcon, weatherConfigByDay.iconWidthHeight, weatherConfigByDay.iconWidthHeight);
                                }
                            }

                        }
                    }
                    const topLabelsByDay = {
                        id: 'topLabelsByDay',
                        afterDatasetDraw(chart, args, options) {
                            if (weatherConfigByDay.isShowLabel) {
                                const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
                                for (let i = 0; i <= listTempByHour.length - 1; i++) {
                                    let temp = `${listTempByDay[i]}°C`;
                                    if (isMobile)
                                        temp = `${listTempByDay[i]}°`;
                                    ctx.fillText(temp, x.getPixelForValue(i) - weatherConfigByDay.leftLabel / 2, y.getPixelForValue(listTempByDay[i]) - weatherConfigByDay.topLapbel);
                                }
                            }

                        }
                    }

                    // config chart
                    const dataWeatherByDay = {
                        //labels: labelsWeatherByDay,
                        datasets: [{
                            label: 'Nhiệt độ cao nhất (°C)',
                            backgroundColor: '#ff0000',
                            borderColor: '#ff0000',
                            data: data7days,
                            fill: false,
                            tension: 0.4,
                            stack: 'combined',
                            type: 'line',
                            parsing: {
                                xAxisKey: 'x',
                                yAxisKey: 'MaxTempC'
                            }
                        },
                        {
                            label: 'Nhiệt độ thấp nhất (°C)',
                            backgroundColor: 'rgb(142,123,255)',
                            borderColor: 'rgb(142,123,255)',
                            data: data7days,
                            fill: false,
                            type: 'line',
                            parsing: {
                                xAxisKey: 'x',
                                yAxisKey: 'MinTempC'
                            }
                        }]
                    };
                    const configWeatherByDay = {
                        type: 'line',
                        data: dataWeatherByDay,
                        plugins: [showIconWeatherByDay, topLabelsByDay],
                        options: {
                            interaction: {
                                intersect: false,
                                mode: 'index',
                            },
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Thời tiết 7 ngày tới',
                                    position: 'bottom'
                                },
                                legend: {
                                    position: 'bottom',
                                },
                                tooltip: {
                                    enabled: true,
                                    callbacks: {
                                        footer: function (context) {
                                            const weatherByDay = context[0].dataset.data.filter(item => item.x == context[0].label);
                                            if (weatherByDay.length === 0)
                                                return false;
                                            const newData = [];
                                            newData.push(`${weatherByDay[0].ConditionText}`);
                                            newData.push(`Nhiệt độ trung bình: ${weatherByDay[0].AvgTempC}°C`);
                                            newData.push(`Xác suất mưa: ${weatherByDay[0].DailyWillItRain}%`);
                                            newData.push(`Độ ẩm: ${weatherByDay[0].AvgHumidity}%`);
                                            newData.push(`Uv: ${weatherByDay[0].Uv}/11`);
                                            return newData;
                                        },
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    min: 0,
                                    max: 50,
                                    grid: {
                                        //display: false,
                                    },
                                    display: weatherConfigByHour.isShowDisplay_Y,
                                    //ticks: {
                                    //    font: {
                                    //        size: 20
                                    //    }
                                    //}

                                },
                                x: {
                                    grid: {
                                        display: weatherConfigByHour.isShowDisplay_Y,
                                    },
                                }

                            }
                        },
                    };
                    const chartWeatherByDay = new Chart(
                        document.getElementById('Chart_WeatherByDay'),
                        configWeatherByDay
                    );
                }
                catch (err) {
                    console.log(err.message)
                }

            },
            error: function (errorMessage) {
                console.log("error" + errorMessage);
            }
        });
    };

    renderChartWeather();

}

function getWeather() {

    let _dataAllWeather = {};
    let loadDataWeather = function () {
        if ($(".onecms__weather").length == 0) return false;
        $.ajax({
            url: "https://onecms.vn/api/GetWeather",
            type: "get",
            success: function (_data) {
                try {
                    if (_data == null)
                        return false;
                    _data = JSON.stringify(_data)
                    _data = JSON.parse(_data);
                    _data = JSON.parse(_data);
                    if (_data.length === 0)
                        return false;
                    $(".onecms__weather").append(`<div id="widget-weather">
                                                <ul class="current-city"></ul>
                                                <div class="filter">
                                                    <input placeholder="Nhập tìm tỉnh thành …">
                                                    <div class="city-list">
                                                        <div class="choosed-city"></div>
                                                        <div class="others-city">
                                                            <p>Tỉnh thành khác</p>
                                                            <ul></ul>
                                                            <div class="no-result hide" style="display:none"><i class="ti-info-alt"></i> Không tìm thấy kết quả</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`);

                    if ($(".onecms__weather__thisplace").length > 0) {
                        $(".onecms__weather__thisplace").append(`<div class="weather" id="weather-box">
                                    <div class="weather__today">
                                        <select class="form-control" id="weather-location">
                                            
                                        </select>
                                    </div>
                                    <ul class="weather__listing" id="listing"> 
                                    </ul>
                                </div>`);
                    }
                    _dataAllWeather = _data;
                    let _current_city, data_weather_current;
                    if (localStorage.getItem('_city')) {
                        _current_city = window.localStorage.getItem("_city");
                    };

                    if (_current_city !== undefined)
                        data_weather_current = _dataAllWeather.find(x => x.CityId == _current_city || x.CityId.replace("-", "") == _current_city);

                    if (data_weather_current === undefined) {
                        if (localStorage.getItem('_city')) {
                            localStorage.removeItem('_city');
                        }
                        const defaultCity = "ha-noi";
                        data_weather_current = _dataAllWeather.find(x => x.CityId == defaultCity || x.CityId.replace("-", "") == defaultCity);
                    }
                    
                    // weather top
                    if (data_weather_current !== undefined) {
                        $(".current-city").append(`<li><strong>${data_weather_current.CityName}</strong><span><em>${data_weather_current.Currtent.TempC}°C</em> / ${data_weather_current.Forecast.MinTempC} - ${data_weather_current.Forecast.MaxTempC}°C</span><img src="${data_weather_current.Currtent.ConditionIcon}" alt=""><i class="ti-arrow-circle-down"></i></li>`);
                        $(".choosed-city").append(`<p>Đang hiển thị</p><ul><li>${data_weather_current.CityName}<span>${data_weather_current.Currtent.TempC}°C<img src="${data_weather_current.Currtent.ConditionIcon}" alt=""></span></li></ul>`);
                    };

                    // use custom weather this place
                    if ($(".onecms__weather__thisplace").length > 0) {
                        // weather bottom
                        let htmlWeatherCurrent = `<div class="weather__city"><div class="weather__status" id="today-ic"><img src="${data_weather_current.Currtent.ConditionIcon}"></div>
                                        <div class="weather__info">
                                            <div class="weather__temp" id="today-temp">${data_weather_current.Currtent.TempC}°C</div>
                                            <div class="weather__range" id="today-range">${data_weather_current.Forecast.MinTempC}°C - ${data_weather_current.Forecast.MaxTempC}°C</div>
                                        </div>
                                        <div class="weather__desc" id="today-status">${data_weather_current.Currtent.ConditionText}</div></div>`;
                        $(".onecms__weather__thisplace select").after(htmlWeatherCurrent);
                        $(window).ready(function () {
                            $(".onecms__weather__thisplace select").val(data_weather_current.CityId).change();
                        });
                    }
					
					// use weather by site
					if ($(".onecms__weather__district").length > 0) {

						const htmlWeather = `<strong>${data_weather_current.CityName}</strong>
											 <span><em>${data_weather_current.Currtent.TempC}°C</em> / ${data_weather_current.Forecast.MinTempC}-${data_weather_current.Forecast.MaxTempC}°C</span>
											 <img src="${data_weather_current.Currtent.ConditionIcon}" alt="${data_weather_current.Currtent.CityName}">`;
						$(".onecms__weather__district").append(htmlWeather);
						
					}

                    // sort
                    _dataAllWeather.sort(function (a, b) {
                        try {
                            const nameA = a.CityId.toUpperCase();
                            const nameB = b.CityId.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                        }
                        catch {
                            return 0;
                        }

                        return 0;
                    });
                    $.each(_dataAllWeather, function (idx, data_w) {
                        let city1 = friendlyTitle(data_w.CityId).toLowerCase();
                        city1 = city1.replace(new RegExp("-", "imug"), " ");
                        $(".others-city ul").append(`<li city="${data_w.CityId.toLowerCase()}" city1="${city1}">${data_w.CityName}<span>${data_w.Currtent.TempC}°C<img src="${data_w.Currtent.ConditionIcon}" alt=""></span></li>`);
                        if ($(".onecms__weather__thisplace").length > 0) {
                            $("#weather-location").append(`<option value="${data_w.CityId}">${data_w.CityName}</option>`);
                        }
                    });
                }
                catch (err) {
                    console.log(err.message)
                }

            },
            error: function (errorMessage) {
                console.log("error" + errorMessage);
            }
        });
    };
    function SeachWeather(input) {
        if (input === undefined) return false;
        input = input.trim();
        $('.others-city ul li').each(function () {
            if ((input == '' || $(this).attr("city").indexOf(input) != -1 || $(this).attr("city1").indexOf(input) != -1) || $(this).text().toLowerCase().indexOf(input) != -1) {
                $(this).css('display', 'flex');
            } else {
                $(this).css('display', 'none');
            }

            if ($('.others-city ul li[style="display: flex;"]').length === 0) {
                $(".no-result").css('display', 'block');
            }
            else {
                $(".no-result").css('display', 'none');
            }
        });
    }
    $(window).ready(function () {
        $(".onecms__weather").on("keyup", ".filter input", function () {
            SeachWeather($(this).val().toLowerCase());
        });
        $(".onecms__weather").on("click", ".current-city", function (e) {
            $("#widget-weather").addClass('expanded');
            e.stopPropagation();
        });
        $(document).click(function (e) {
            if (!$(e.target).is('.onecms__weather .filter, .onecms__weather .filter *')) {
                $("#widget-weather").removeClass('expanded');
            }
        });
        $(".onecms__weather").on("click", ".others-city ul li", function () {
            const _city = $(this).attr("city");
            if (_city === undefined) return false;
            //_city = _city.replace(new RegExp(" ", "imug"), "");
            let data_weather_current = _dataAllWeather.find(x => x.CityId === _city);
            if (data_weather_current === undefined) return false;
            $(".current-city").html(`<li><strong>${data_weather_current.CityName}</strong><span><em>${data_weather_current.Currtent.TempC}°C</em> / ${data_weather_current.Forecast.MinTempC} - ${data_weather_current.Forecast.MaxTempC}°C</span><img src="${data_weather_current.Currtent.ConditionIcon}" alt=""><i class="ti-arrow-circle-down"></i></li>`);
            $(".choosed-city").html(`<p>Đang hiển thị</p><ul><li>${data_weather_current.CityName}<span>${data_weather_current.Currtent.TempC}°C<img src="${data_weather_current.Currtent.ConditionIcon}" alt=""></span></li></ul>`);
            $("#widget-weather").removeClass('expanded');
            window.localStorage.setItem("_city", _city);
            return false;
        });
        $(".onecms__weather__thisplace").on("change", "select", function (e) {
            let _city = $('.onecms__weather__thisplace select').find(":selected").val();
            if (_city === undefined)
                return false;
            _city = _city.replace(new RegExp(" ", "imug"), "");
            let data_weather_current = _dataAllWeather.find(x => x.CityId == _city || x.CityId.replace("-", "") == _city);

            if (data_weather_current === undefined) {
                $(".weather__city").html('');
                $(".weather__listing").html('<li class="weather__day"><time class="weather__date">Không có thông tin thời tiết</time></div></li>');
                return false;
            }

            $(".weather__status > img").attr('src', data_weather_current.Currtent.ConditionIcon);
            $(".weather__temp").html(`${data_weather_current.Currtent.TempC}°C`)
            $(".weather__range").html(`${data_weather_current.Forecast.MinTempC}°C - ${data_weather_current.Forecast.MaxTempC}°C `)
            $(".weather__desc").html(`${data_weather_current.Currtent.ConditionText}`)
            window.localStorage.setItem("_city", _city);

            return false;
        });
    });

    loadDataWeather();

}

function addTagInArticleContent() {
    if ($(".entry").length === 0)
        return false;
    let content = $(".entry").html();
    //content = replaceContent("<h1.*?>(.*?)<\/h1>", content);
    let arrTags = [];
    $(".onecms__tags a").each(function () {
        let tag = $(this).text().trim().replace("#", "");
        if (tag === undefined) return;
        arrTags.push(tag);
    });
    if (arrTags.length === 0)
        return false;

    try {
        for (i = 0; i < arrTags.length; i++) {
            let regexExpression = "(?!(?:[^<]+>|[^>]+<\\/a>))\\b(" + replaceTitle(arrTags[i].trim()) + ")(?:\s)?\\b";
            let regex = new RegExp(regexExpression, "imu");
            content = content.replace(regex, `<a href='/${friendlyTitle(unescape(arrTags[i]))}-ptag.html' title = '${arrTags[i]}'>${$1}</a>`);
        }
        $(".entry").html(content);
    }
    catch (e) {
        $(".entry").html(content);
        console.log(e.message);
    }
}
function shareSomeContent(title, text, url) {
    if (!navigator.share) {
        return;
    }

    navigator.share({ title, text, url }).then(() => {
    }).catch(error => {
        console.error('Error sharing the content', error);
    });
};
function refreshTimeAgo(element) {
    element.each(function () {
        let dataTime = $(this).attr("datetime");
        if (dataTime) {
            $(this).html(timeAgo(dataTime));
        }
        return;
    });
}
function timeAgo(time) {

    switch (typeof time) {
        case 'number':
            break;
        case 'string':
            time = +new Date(time);
            break;
        case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    let time_formats = [
        [60, 's', 1], // 60
        [120, '1\' trước', '1 phút tới'], // 60*2
        [3600, '\'', 60], // 60*60, 60
        [7200, '1h trước', '1h tới'], // 60*60*2
        [86400, 'h', 3600], // 60*60*24, 60*60
        [172800, 'Hôm qua', 'Ngày mai'], // 60*60*24*2
        [604800, ' ngày', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Tuần trước', 'Tuần tới'], // 60*60*24*7*4*2
        [2419200, ' tuần', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Tháng trước', 'Tháng tới'], // 60*60*24*7*4*2
        [29030400, ' tháng', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Năm trước', 'Năm tới'], // 60*60*24*7*4*12*2
        [2903040000, ' năm', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        //[5806080000, 'Thế kỷ trước', 'Thế kỷ tới'], // 60*60*24*7*4*12*100*2
        //[58060800000, 'thế kỷ', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    let seconds = (+new Date() - time) / 1000,
        token = 'trước',
        list_choice = 1;

    if (seconds == 0) {
        return 'vừa xong'
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'tới';
        list_choice = 2;
    }
    let i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + '' + format[1] + ' ' + token;
        }
    return time;
}
