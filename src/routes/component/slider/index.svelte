<style>
    .flex-center{display:flex;align-items:center}#init{border:1px solid blue;width:60px;text-align:center;color:#00f;height:33px;line-height:33px;margin-left:15px;cursor:pointer;-webkit-user-select:none;user-select:none}#dragContainer{position:relative;display:inline-block;background:#f1f1f1;width:300px;height:35px;border:1px solid #dadada;touch-action:none}#dragBg{position:absolute;background-color:#f60;width:0px;height:100%;z-index:2;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;overflow:hidden}#dragText{position:absolute;width:100%;height:100%;line-height:33px;user-select:none;-webkit-user-select:none;display:flex;align-items:center;justify-content:center;font-size:15px;z-index:2;background:#b3b3b3 linear-gradient(to left,transparent,#fff,transparent) no-repeat 0 0;background-size:20% 100%;background-position:-30% -30%;background-clip:text;-webkit-background-clip:text;color:transparent;overflow:hidden;white-space:nowrap;padding-left:15px}.dragText{animation:shine 4s infinite}@keyframes shine{0%{background-position:-30% -30%}to{background-position:140% 140%}}#dragHandler{position:absolute;width:40px;height:100%;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:99}.dragHandlerBg{background:#fff no-repeat center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgBxZJRDkNAEIbtKs+O0CNwBDeo4MEptCfACeoGHiWC7Q0coT2CI7SvHui/Eolu2E36YpJZw/fPTGasph1ujLEYnvzL6TiOBJ62bduVZXkWBSpO+NE0zRWPO7wfhsGNoqhfi2Sc8sP3/ZxS6vDYNM1nXdeXdQEZp0vged4LIhfhmxDCxLn3ONE2DB1yiGKEObrfZJyKsCgKS9f1icfTNBEV/xHwLRuGwVDdxmuG7qmKnxZYVZWNygyhhcpeEASPdfIen0fglwWwmz9g22KyjFP84wQXJUdVvmUH2+7XySrOR/hAkIVhmGrbpuIH2xdY1aV2saQCsgAAAABJRU5ErkJggg==);z-index:5;border-right:1px solid #dadada}.dragHandlerOkBg{background:#f60 no-repeat center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7dntbcIwEIDhG6EjdISO0BG6QRmhG8AmZRNG6AgegRGuNgEVIdHad7Zx6veRIvgTUO6VnC8RAAAAAAAAAAAAAAAAAACAa6r6GrdD3I66SN83gv7i4Ld631bQzx8xLl4F7WXGOC1fgrYKYiRHQTuFMU4EbVhiKEtWG8YYyUZQlyPGTlAXMQZCjIEQYyDEGIgjxl5QFzEGQoyBEGMgxBgIMQYSh/quNntZGx38HfNsMba/HNDD3zHPFmOTcWAPizJVjESXpSlH9yjTxUi0zKd04ojxJWumPyfxYaJ4YsTtSdZM85esLlGmjpHocrlrUT3K9DEu4sHs1KZaFGLccEQ5eAcS939Tm/8Z48IRxTyYuN+Lll9YuP5zVXpGIUamHlGIUahlFGIYOaM83/lNYng4ooTbKI4YQe8EnlKNKMSoLA7lQ22CLvcZxKhN896d1BKIkaFTlECMAo2jBGIYNIoSiOGg9pM1MVpR++UsMVpxRgnEaMAYJRCjocIoxOghMwoxekrDPg+dGKM4R9lfhUmf6SElj9ABAAAAAAAAAAAAAAAAAFizb/GUcOCNOeU/AAAAAElFTkSuQmCC);background-size:20px;width:20px;height:20px;border-radius:80%;z-index:5}.common-info{-webkit-box-sizing:border-box;color:#000000a6;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";position:fixed;top:-30px;left:50%;z-index:1010;pointer-events:none;transform:translate(-50%);max-width:450px;text-align:center;background-color:#fff;border:1px solid #eaeaea;padding:6px 8px;box-sizing:border-box;box-shadow:0 0 5px #01010114;animation:slideDown 1s forwards;display:flex;align-items:center}.error-wrap{width:16px;height:16px;background:#fff no-repeat center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgBpVMxTgMxENzdOIkQBMEPTEeBxD2BvCB5AA0lDeEHCaKjIjSUUPAA8oLwhCso6PAPgrgCkeS87FrhcpdD6Agj2bJ9ntlZ3y7CChJ7cFQj7DBgF4BtOGSMATme+tnFrntx+fv4vZhYu9Ok7T4Dn8MvEML1p6+JUPyWCSi5gVtjQIygCsTRlKmtIqR7jVyZHMJy1KS0H5YTu28bVH+FNeA9t0nI/dUP5uQY6r3Twl5HyQhB18ijRbh8ywz1s4UAQxCb3dyWBQA7RqZS7vO7B8BWK3Oh5NmwLCCwBP+EkeFUKX+o9jPbixT4PQnOCmCOjQceEWCvcJ4kML28gvl9jsA/hEeMUUuXCMewBsjX9qjlnp/ExRD+CPl7ww0Xu/CIc28GoWEqAiX3TeWoC520prW2qzgJkdm0Md9MeXzYyKaYDuTqIS77wwlxxB4eNeX8/S/g+opSa/0TCgAAAABJRU5ErkJggg==);display:flex;align-items:center;justify-content:center}.common-info>.error-wrap{margin-right:8px}@keyframes slideDown{0%{top:-30px;opacity:0}to{top:139px;opacity:1}}@keyframes brushEffect{0%{opacity:1;left:20%}50%{text-shadow:0 0 10px rgba(255,255,255,.2);opacity:.5;left:50%}to{text-shadow:0 0 10px rgba(255,255,255,.8);opacity:1;left:80%}}
</style>

<div class="flex-center">
    <div id="dragContainer">
        <!-- 颜色区域 -->
        <div id="dragBg"></div>
        <!-- 滑动容器文本 -->
        <div id="dragText"></div>
        <!-- 拖动元素 -->
        <div id="dragHandler" class="dragHandlerBg">
            <div></div>
        </div>
    </div>
</div>

<script lang="ts">
    import CryptoJS from 'crypto-js'
    import * as events from "node:events";

    interface objType {
        width: number,
        height: number,
        bgColor: string,
        roundColor: string,
        lang: string,
    }

    function SlideVerify(obj:objType = {} as objType, callBack = () => null) {

        SlideVerify.prototype.verifyCallBack = callBack
        SlideVerify.prototype.initDrag = initDrag

        let width = obj.width;
        let height = obj.height;
        let bgColor = obj.bgColor;
        let roundColor = obj.roundColor
        let lang = obj.lang

        // 获取dom元素

        let dragContainer = document.getElementById("dragContainer");
        let dragBg = document.getElementById("dragBg");
        let dragText = document.getElementById("dragText");
        let dragHandler = document.getElementById("dragHandler");
        let round =  dragHandler?.querySelector("div");
        let maxHandlerOffset = 260;
        let isDragging = false
        let verifying:any = null;
        let passTimer = null;
        let verifyPortTimer:any = null;
        let animationChange:any = null;
        // 要的参数
        let pointArr:string[] = []
        let startTime:any = null;
        let endTime:any = null;
        let slideWidth = 0;
        let duration = 0

        let dragTextContent = "请按住滑块，拖动到最右边";
        let dragTextContent1 = '正在验证中'
        let dragTextContent2 = '验证通过'
        let dragTextContent3 = '验证不通过！'
        let dragTextContent4 = '数据加密失败，请联系客服！'
        let dragTextContent5 = '检测您可能为机器！，请重新刷新页面！或联系我们的客服人员！'

        // 判断是否已经执行过函数
        let CarryOut = false


        const configEdit = () => {
            if (width && dragContainer) dragContainer.style.width = width + 'px';
            if (height && dragContainer) dragContainer.style.height = height + 'px';
            if (bgColor &&dragBg) dragBg.style.backgroundColor = bgColor;
            if (roundColor && round) round.style.backgroundColor = roundColor;
            if (lang === 'USD') {
                dragTextContent = 'Slide to the right';
                dragTextContent1 = 'Under verification'
                dragTextContent2 = 'Pass the verification'
                dragTextContent3 = 'Verification fails!'
                dragTextContent4 = 'Data encryption failed, please contact customer service!'
                dragTextContent5 = 'Detect what you may be for the machine! , please refresh the page! Or contact our customer service staff!'
            } else if (lang === 'HKD') {
                dragTextContent = '請按住滑塊，拖動到最右邊'
                dragTextContent1 = '正在驗證中'
                dragTextContent2 = '驗證通過'
                dragTextContent3 = '驗證不通過！'
                dragTextContent4 = '數據加密失敗，請聯繫客服！'
                dragTextContent5 = '檢測您可能為機器！，請重新刷新頁面！或聯繫我們的客服人員！'
            } else if (lang === 'RMB') {
                dragTextContent = '请按住滑块，拖动到最右边'
                dragTextContent1 = '正在验证中'
                dragTextContent2 = '验证通过'
                dragTextContent3 = '验证不通过！'
                dragTextContent4 = '数据加密失败，请联系客服！'
                dragTextContent5 = '检测您可能为机器！，请重新刷新页面！或联系我们的客服人员！'
            } else if (lang === 'VI') {
                dragTextContent = 'Vui lòng kéo sang bên phải'
                dragTextContent1 = 'đang xác nhận'
                dragTextContent2 = 'xác nhận thông qua'
                dragTextContent3 = 'xác nhận không được thông qua! '
                dragTextContent4 = 'mã hóa dữ liệu thất bại, xin vui lòng liên hệ với dịch vụ khách hàng! '
                dragTextContent5 = 'phát hiện bạn có thể là máy! Làm lại trang! Hoặc liên lạc với nhân viên dịch vụ khách hàng của chúng tôi! '
            } else if (lang === 'ES') {
                dragTextContent = 'Por favor, arrastre a la derecha'
                dragTextContent1 = 'en proceso de validación'
                dragTextContent2 = 'verificación aprobada'
                dragTextContent3 = '¡La verificación no pasó! '
                dragTextContent4 = 'el cifrado de datos falló, póngase en contacto con el servicio al cliente! '
                dragTextContent5 = 'detecta lo que puede ser para la máquina! , por favor actualice la página de nuevo! O póngase en contacto con nuestro personal de servicio al cliente! '
            }
        }

        interface mapType {
            [key: string]:string
        }
        let map:mapType = {}

        const generateMap = () => {
            interface MapType {
                [key: string]: string;
            }
            const map1: MapType = {};
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            const length = alphabet.length;

            for (let i = 0; i < length; i++) {
                const currentChar = alphabet[i];
                const nextChar = alphabet[(i + 1) % length]; // 循环回到 'a'
                if (map1.hasOwnProperty(currentChar))  map1[currentChar] = nextChar;

            }
            map = map1;
        }

        configEdit()
        generateMap()

        const handler = (str: string) => {
            let result = ''
            str.split('').forEach(char => {
                if (map[char]) {
                    result += map[char]
                } else {
                    result += char;
                }
            });
            return result;
        }

        function initDrag() {
            // 计算滑块的最大偏移量
            if (width)  maxHandlerOffset = width - 40;


            // 移除之前的事件监听器，防止重复绑定
            // mousedown
            if (window.innerWidth <= 900) {
                dragHandler?.removeEventListener('touchstart', onDragHandlerMouseDown);
            } else {
                dragHandler?.removeEventListener(`${handler('lntrdcnvm')}`, onDragHandlerMouseDown);
            }

            document.removeEventListener(`${handler('lntrdcnvm')}`, onDragHandlerMouseMove);
            document.removeEventListener(`${handler('lntrdto')}`, onDragHandlerMouseUp);
            document.removeEventListener(`${handler('lntrdkdzud')}`, onDragHandlerMouseUp);
            clearTimeout(verifyPortTimer)
            clearInterval(animationChange)
            clearInterval(verifying);

            animationChange = setInterval(() => {
                if (dragText?.className) {
                    if (dragText) dragText.className = ''
                } else {
                    if (dragText) dragText.className = 'dragText'
                }
            }, 1800)

            window.addEventListener('resize',() => {
                if (window.innerWidth <= 900) {
                    dragHandler?.removeEventListener('touchstart', onDragHandlerMouseDown);
                    dragHandler?.addEventListener("touchstart", onDragHandlerMouseDown);
                } else {
                    dragHandler?.removeEventListener('mousedown', onDragHandlerMouseDown)
                    dragHandler?.addEventListener("mousedown", onDragHandlerMouseDown);
                }
            })
            if (dragText) dragText.textContent = dragTextContent;

            requestAnimationFrame(() => {
                if (window.innerWidth <= 900) {
                    dragHandler?.addEventListener("touchstart", onDragHandlerMouseDown);
                } else {
                    dragHandler?.addEventListener("mousedown", onDragHandlerMouseDown);
                }
                CarryOut = false;
                if (dragText) dragText.style.color = "";
                if (dragBg) dragBg.style.left = 0 + 'px';
                if (dragBg) dragBg.style.width = 0 + 'px';
                if (dragBg) dragBg.textContent = '';
                if (round) round.className = "";
                if (dragHandler) dragHandler.className = "dragHandlerBg";
                if (dragHandler) dragHandler.style.left = 0 + 'px';
                if (dragHandler && dragHandler.style.cursor === 'pointer') {
                    dragHandler.style.cursor = "grab";
                }
            });
        }

        const onDragHandlerMouseDown = (event: Event) => {
            let body = document.querySelector('body')
            if (body) body.style.userSelect = 'none';
            const now = new Date();
            startTime = now.getTime(); // 获取当前时间的 Unix 时间戳（毫秒）
            isDragging = true;
            pointArr = []
            if (window.innerWidth <= 900) {
                dragContainer?.addEventListener("touchmove", onDragHandlerMouseMove, { passive: false });
            } else {
                // 鼠标移动监听
                document.addEventListener("mousemove", onDragHandlerMouseMove);
            }
            // 鼠标松开监听
            if (window.innerWidth <= 900) {
                document.addEventListener("touchend", onDragHandlerMouseUp);
            } else {
                document.addEventListener("mouseup", onDragHandlerMouseUp);
                document.addEventListener("mouseleave", onDragHandlerMouseUp);
            }
            if (dragHandler) dragHandler.style.cursor = "grabbing";
        }
        // 获取触摸事件或鼠标事件的坐标
        // 获取触摸事件或鼠标事件的坐标
        function getTouchCoordinates(event:any) {
            if (event.type === 'touchstart' || event.type === 'touchmove') {
                // 对于 touchstart 和 touchmove 事件，使用 event.touches
                if (event.touches && event.touches.length > 0) {
                    return {
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY
                    };
                }
            } else if (event.type === 'touchend' || event.type === 'touchcancel') {
                // 对于 touchend 和 touchcancel 事件，使用 event.changedTouches
                if (event.changedTouches && event.changedTouches.length > 0) {
                    return {
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY
                    };
                }
            } else {
                // 对于鼠标事件，直接使用 event.clientX 和 event.clientY
                return {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
            }

            // 如果无法获取坐标，返回默认值
            return {
                clientX: 0,
                clientY: 0
            };
        }

        const onDragHandlerMouseMove = (event: any) => {
            if (!isDragging)  return;
            event.preventDefault();

            let left, top;
            if (window.innerWidth >= 900) {
                let dragX = dragContainer?.getBoundingClientRect();
                if (dragHandler && dragHandler.clientWidth !== undefined &&
                    (dragX && dragX.left !== undefined || dragHandler.clientWidth === 0 || dragX && dragX.left === 0)) {
                    left = event.clientX - dragHandler.clientWidth / 2 - (dragX ? dragX.left : 0);
                }
                top = event.offsetY
            } else {
                let dragX = dragContainer?.getBoundingClientRect();
                let coords = getTouchCoordinates(event);
                if (dragX && dragHandler) {
                    const clientWidth = dragHandler.clientWidth ?? 0;
                    const clientHeight = dragHandler.clientHeight ?? 0;
                    const leftOffset = dragX.left ?? 0;
                    const topOffset = dragX.top ?? 0;

                    if (clientWidth !== undefined || clientWidth === 0) {
                        left = coords.clientX - clientWidth / 2 - leftOffset;
                        top = coords.clientY - clientHeight / 2 - topOffset;
                    }
                }
            }
            if (left !== null && left !== undefined) pointArr.push(`${Math.floor(Math.abs(left))},${Math.floor(Math.abs(top))}`)

            if (left && left < 0) {
                left = 0;
            } else if (left && left >= maxHandlerOffset) {
                left = maxHandlerOffset;
                if(dragText) dragText.textContent = ''
                verifySuccessful()
            }

            // 设置滑块位置和绿色背景宽度
            if (dragHandler) dragHandler.style.left = left + "px";
            if (dragBg) dragBg.style.width = left + "px";
        }

        const onDragHandlerMouseUp = (event :any) => {
            // dragText.textContent = ''
            let body = document.querySelector('body')
            if (body) body.style.userSelect = 'auto';
            if (dragHandler) dragHandler.style.cursor = "grab";
            let left;
            if (window.innerWidth <= 900) {
                let dragX = dragContainer?.getBoundingClientRect();
                let coords = getTouchCoordinates(event);
                if (dragHandler?.clientWidth !== undefined && dragX?.left !== undefined) {
                    const clientWidth = dragHandler.clientWidth ?? 0;
                    const leftOffset = dragX.left ?? 0;

                    if (clientWidth !== 0 || leftOffset === 0) {
                        left = coords.clientX - clientWidth / 2 - leftOffset;
                    }
                }
            } else {
                let dragX = dragContainer?.getBoundingClientRect();
                if (dragHandler && dragX) {
                    left = event.clientX - dragHandler.clientWidth / 2 - dragX.left;
                }
            }
            if (left && left >= maxHandlerOffset && !CarryOut) {
                verifySuccessful();
            }

            // 移除鼠标移动监听
            document.removeEventListener("mousemove", onDragHandlerMouseMove);
            // 移除鼠标松开监听
            document.removeEventListener("mouseup", onDragHandlerMouseUp);
            document.removeEventListener("mouseleave", onDragHandlerMouseUp);
            dragHandler?.removeEventListener('touchstart', onDragHandlerMouseDown);

            if (isDragging) {
                Regression()
            }

        }

        function Regression () {
            const timer = setInterval(() => {
                let left = Number(dragHandler?.style.left.replace("px", ""));
                if (left <= 0) {
                    if (dragHandler) dragHandler.style.left = 0 + 'px';
                    if (dragBg) dragBg.style.width = 0 + 'px';
                    clearInterval(timer)
                    initDrag()
                    return;
                }
                if (dragHandler) dragHandler.style.left = (left - 4) + 'px'
                if (dragBg) dragBg.style.width = (left - 4) + 'px'
            })
        }

        function judgmentFn(key: string) {
            let pass = false
            switch (key) {
                case 'controlled':
                    // 获取 User-Agent 字符串
                    const userAgent = navigator.userAgent.toLowerCase();

                    // 检测无头模式
                    const isHeadless = /headless/.test(userAgent);
                    if (isHeadless) pass = true;
                    break;
            }
            return pass;
        }

        function verifySuccessful() {
            const now = new Date();
            endTime = now.getTime(); // 获取当前时间的 Unix 时间戳（毫秒）
            slideWidth = Number(dragHandler?.style.left.replace("px", ""));
            duration = endTime - startTime

            isDragging = false;

            let pointText:any = []
            // 验证成功

            // 定义验证过程中的回调函数
            const verificationCallback = () => {
                if (pointText.length >= 3) {
                    pointText = [];
                } else {
                    pointText.push('.');
                }
                if (dragBg) dragBg.textContent = `${dragTextContent1}${pointText?.join('')}`;
            };

            // 立即执行一次回调函数
            verificationCallback();
            // 设置 setInterval 每隔 500 毫秒执行一次回调函数
            verifying = setInterval(verificationCallback, 500);

            if (dragBg) dragBg.style.color = "white";

            // dragText.textContent = "验证通过";
            // dragText.style.color = "white";
            // dragHandler.className = "dragHandlerOkBg";
            // 移除鼠标按下监听
            dragHandler?.removeEventListener(`${handler('lntrdcnvm')}`, onDragHandlerMouseDown);
            // 可以在这里添加额外的成功处理逻辑
            // alert('操作成功');

            verifyPortTimer = setTimeout(() => {
                verifyPort()
            })
        }


        function verifyPort() {
            CarryOut = true
            const isMachine = judgmentFn('controlled')

            if (isMachine) {
                Message(dragTextContent5, 'error')
                SlideVerify.prototype.verifyResult = Object.freeze({isPass: false})
                initDrag()
            } else {
                clearInterval(animationChange)
                SlideVerify.prototype.verifyResult = Object.freeze({isPass: true})

                const Params = handlerParams()

                if (dragHandler) dragHandler.style.cursor = "auto";
                // SlideVerify.prototype.verifyCallBack(data.Data.verifyCode)
                clearInterval(verifying);
                if (dragBg) dragBg.textContent = dragTextContent2;
                if (round) round.className = "dragHandlerOkBg";
            }
        }


        function handlerParams() {
            const m = pointArr.map(item => {
                const arr = item.split(',');
                const x = Number(arr[0]);
                const y = Number(arr[1]);


                // 将 x 和 y 转换为十六进制，并处理负号
                const xHex = '0x' + Math.abs(x).toString(16).padStart(4, '0');
                const yHex =  Math.abs(y).toString(16).padStart(4, '0');

                // 返回拼接后的十六进制字符串
                return `${xHex}${yHex}`;
            });
            let width = Math.floor(Number(dragHandler?.clientWidth) / 2)
            let height = Math.floor( Number(dragHandler?.clientHeight) / 2 )

            const xWidth =   '0x' + Math.abs(width).toString(16).padStart(4, '0');
            const xHeight =   Math.abs(height).toString(16).padStart(4, '0');

            const c = `${xWidth}${xHeight}`

            const now = new Date();
            let nowDate = now.getTime()

            const st = startTime
            const et = endTime
            const d = slideWidth
            const t = Math.floor(nowDate / 1000)
            const date = new Date(nowDate)
            const t2 = date.toISOString()

            let obj = {
                m,
                st,
                et,
                d,
                c,
                t,
                t2
            }

            return JSON.stringify(obj)
        }


        let infoTimer = null;
        let sole = false;

        let Message = (info: string, type = '',) => {
            if (!sole) {
                sole = true
                // 创建一个新的 div 元素
                const newDiv = document.createElement('div');

                // 设置类名
                newDiv.className = 'common-info';
                newDiv.style.top = 129 + 'px'
                // 设置 div 内容


                if (type === 'error') {
                    // 将 <img> 元素追加到 <div> 中
                    // 创建一个新的 <img> 元素
                    const img = document.createElement('div');
                    img.className = 'error-wrap'
                    newDiv.appendChild(img);
                }

                // 创建一个文本节点并追加到 <div> 中
                const textNode = document.createTextNode(info);
                newDiv.appendChild(textNode);

                // 将新创建的 div 添加到 body 中
                document.body.appendChild(newDiv);

                // 确保动画在添加元素后立即开始
                newDiv.style.animation = 'slideDown 1s forwards';

                // 设置定时器，在 2500 毫秒后移除元素
                infoTimer = setTimeout(() => {
                    newDiv.remove();
                    sole = false
                }, 2500);
            }

        }
    }
</script>