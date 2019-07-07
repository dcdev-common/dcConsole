// 显示console浮窗 
function showConsole() {
    var console = `
    <div id="console" style="
    position: absolute;
    text-align: center;
    display: none;
    border: solid 1px #cccccc;
    box-shadow: 1px 1px 1px #888888;
    top: 10px;
    right: 10px;
    z-index:999;" onclick='
        if (document.getElementById("console").style.width == "80px"){
            document.getElementById("console").style.width = "100%";document.getElementById("console").style.height = "100%";
            document.getElementById("log").innerHTML = sessionStorage.log;
        }
        else{
            document.getElementById("console").style.width = "80px";document.getElementById("console").style.height = "28px";   
            document.getElementById("log").innerHTML = "";
        }
        '>
        <div style="position: absolute;
            top: 5px;left: 10px;color: green;" onclick='
            document.getElementById("console").style.width = "80px";document.getElementById("console").style.height = "28px";   
            document.getElementById("log").innerHTML = "";
            '>
            console
        </div>
        <label id="log"></label>
    </div>
    `
    $("body").append(console);
    document.getElementById("console").style.display = "block";
    document.getElementById("console").style.width = "80px";
    document.getElementById("console").style.height = "28px";
}

// 输出调试代码函数
function debug(o) {
    var gettype = Object.prototype.toString
        // 是一个对象
    if (gettype.call(o) == "[object Object]") {
        try {
            o = JSON.stringify(o);
            o = o.replace("{", "{<br>&nbsp;&nbsp;&nbsp;&nbsp;");
            o = o.replace("}", "<br>}");
            o = o.replace("\",", "\",<br>&nbsp;&nbsp;&nbsp;&nbsp;");
        } catch (e) {}
    }
    var time = new Date();
    sessionStorage.log = time.toLocaleString() + '<br>' + o + '<hr>' + sessionStorage.log;
}