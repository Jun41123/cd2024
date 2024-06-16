var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 \xa0 https://jun41123.github.io/cd2024/ \n 網誌:\xa0\xa0 https://jun41123.github.io/cd2024/blog \n 簡報:\xa0\xa0 https://jun41123.github.io/cd2024/reveal \n 倉儲:\xa0 Jun41123/cd2024: 協同產品設計實習的個人課程網頁 (github.com) \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': '*由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. \n *利用 init_replit 指令安裝所需 Python 模組 \n *啟動動態 指令 1.chmod u+x init_replit \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa02. ./init_replit \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa03. Python3 main.py \n *靜態 指令 Python3 -m http.server \n *Push 指令 1.git status\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2.git add .\xa0 \xa0 \xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 3. git commit -m " add+你要推的內容 "\xa0 \xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 4. git push \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': '如何 update', 'text': '先前我們有把每個人的倉儲利用子模組導入組別倉儲, 即使你自己的倉儲有更新內容, 也不會顯示目前更新次數, 如何讓子模組同步就利用 update 更新到最新版本. \n \n *\xa0 git submodule update --init \n *\xa0cd 學號 \n *\xa0 git pull origin main \n *\xa0cd .. \n *\xa0 git status \n *\xa0git add . \n *\xa0 git commit -m "update 學號 子模組" \n *\xa0git push \n', 'tags': '', 'url': '如何 update.html'}, {'title': '作業區', 'text': '', 'tags': '', 'url': '作業區.html'}, {'title': 'W12相關任務', 'text': '', 'tags': '', 'url': 'W12相關任務.html'}, {'title': '任務1 NX零件四圓柱', 'text': '零件繪畫過程 \xa0( 抓取程式 ) \n 零件完成圖 \n 直徑表示 \n 長度表示 \n 最終組合圖 \n \n', 'tags': '', 'url': '任務1 NX零件四圓柱.html'}, {'title': 'W10 協同問題', 'text': '', 'tags': '', 'url': 'W10 協同問題.html'}, {'title': '任務一', 'text': '根據老師所給的 2a.txt 裡的[\'學號\', \'Github 帳號\', \'組別\'], 以下是利用 Python 寫的初步資料數列.\xa0 \n \n from browser import window, ajax\n  \ndef fetch_csv_data():\n  # CSV 檔案網址\n  url = "https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt"\n  \n  def on_complete(req):\n    if req.status == 200 or req.status == 0:\n      # 讀取 CSV 檔案內容\n      content = req.text\n  \n      # 依照換行符號拆分資料\n      lines = content.split(\'\\n\')\n  \n      # 建立空列表儲存資料\n      data = []\n  \n      # 遍歷每一行資料\n      for line in lines:\n        # 忽略空白行\n        if line.strip() == "":\n          continue\n  \n        # 依照逗號拆分資料\n        items = line.split(\',\')\n  \n        # 將拆分後的資料加入列表\n        data.append(items)\n  \n      # 印出結果\n      print(data)\n    else:\n      print("Error:", req.text)\n  \n  # 發送 AJAX 請求\n  req = ajax.ajax()\n  req.bind(\'complete\', on_complete)\n  req.open(\'GET\', url, True)\n  req.set_header(\'content-type\', \'application/x-www-form-urlencoded\')\n  req.send()\n  \n# 呼叫函式讀取 CSV 資料\nfetch_csv_data() \n \n \n 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. \n 並列出-學員倉儲連結/學員網站連結/2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 \n 下列程式碼是加上了生成 HTML 元素的程式碼，以及學員倉庫連結和網站連結的模板： \n from browser import window, ajax, document, html\n  \ndef fetch_csv_data():\n  # CSV 檔案網址\n  url = "https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt"\n  \n  def on_complete(req):\n    if req.status == 200 or req.status == 0:\n      # 讀取 CSV 檔案內容\n      content = req.text\n  \n      # 依照換行符號拆分資料\n      lines = content.split(\'\\n\')\n  \n      # 建立空列表儲存資料\n      data = []\n  \n      # 遍歷每一行資料\n      for line in lines:\n        # 忽略空白行\n        if line.strip() == "":\n          continue\n  \n        # 依照逗號拆分資料\n        items = line.split(\',\')\n  \n        # 將拆分後的資料加入列表\n        data.append(items)\n  \n      # 印出結果\n      print(data)\n      \n      # 生成 HTML 元素\n      generate_html(data)\n    else:\n      print("Error:", req.text)\n  \n  # 發送 AJAX 請求\n  req = ajax.ajax()\n  req.bind(\'complete\', on_complete)\n  req.open(\'GET\', url, True)\n  req.set_header(\'content-type\', \'application/x-www-form-urlencoded\')\n  req.send()\n  \n# 生成 HTML 元素\ndef generate_html(data):\n  brython_div = document["brython_div1"]\n  course_title = "cd2024"\n  for student_id, github_username, group in data:\n    # 如果GitHub用戶名為空，將其設置為"000"\n    github_username = github_username if github_username else "000"\n    # 創建網址和倉庫的鏈接\n    site_url = f"https://{github_username}.github.io/{course_title}"\n    repo_url = f"https://github.com/{github_username}/{course_title}"\n    group_repo_url = f"https://github.com/mdecd2024/2a-midag{group}"\n    # 生成HTML元素並插入到div中\n    brython_div <= html.A(student_id, href=site_url) + " | " + \\\n                   html.A("GitHub Repo", href=repo_url) + " | " + \\\n                   html.A("Group Repo", href=group_repo_url) + html.BR()\n  \n# 呼叫函式讀取 CSV 資料\nfetch_csv_data()\n \n \n 這段程式碼會從 CSV 檔案中讀取學員的基本資料（學號、GitHub 帳號、組別），然後使用  for  迴圈生成 HTML 元素，並將這些元素插入到網頁中。你可以根據需要修改  generate_html  函式中的 HTML 元素結構，以符合你的需求。', 'tags': '', 'url': '任務一.html'}, {'title': '任務三', 'text': '剛平球衡台組立圖 \n', 'tags': '', 'url': '任務三.html'}, {'title': '任務二', 'text': '文章一\xa0 :\xa0 Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) \n 摘要內容 :\xa0 通過實施自動控制理論穩定動態系統時的局限性,\xa0 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. \n \n 文章二 :\xa0A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) \n 摘要內容 :\xa0 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體 。 \n \n 文章三 :\xa0 Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) \n 摘要內容 :\xa0 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 \n \n 文章四： Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） \n 摘要內容： 開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統 。 \n \n 文章五:\xa0Ball on the plate balancing control system (板上球平衡控制系統) \n 摘要內容 :\xa0平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 \n \n 文章六 :\xa02D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) \n 摘要內容 :\xa0使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': '任務二.html'}, {'title': '期中影片', 'text': '', 'tags': '', 'url': '期中影片.html'}, {'title': '期中翻譯文章', 'text': '\n 期中翻譯文章  從封面到羅馬文字VIII \xa0 ( 利用 LaTeX\xa0 篇及翻譯文章 pdf 檔 )( 程式碼 ) \n', 'tags': '', 'url': '期中翻譯文章.html'}, {'title': '影片字幕', 'text': '1. 說明甲班第一組組長如何建立 midagi Team 13:24 \n \n \n 說明甲班第一組組長如何建立 midagi Team \n \n 心得摘要: 利用 github Classroom 建立組別倉儲 ,如何利用 Codespaces 改版自己的倉儲 . \n *\xa0\xa0 用 Codespaces 開啟動態 \n \xa01.\xa0 chmod u+x init_replit \n \xa02.\xa0 ./init_replit \n \xa03. python3 main.py \n *\xa0 \xa0 用 Codespaces 開啟靜態 \n \xa01. python3 -m http.server \n *\xa0 \xa0如何改版 \n 1. git status \n 2. git add . \n 3. git commit -m "新增的的內容" \n 4. git push \n \n 2.如何利用近端可攜系統維護分組網站\xa014:18 \n \n \n 如何利用近端可攜系統維護分組網站 \n \n 心得摘要: \n 利用代理主機的方式 , \xa0 先用 Puttygen \xa0 建立一把 \xa0 key \xa0 然後把 \xa0 key \xa0 存 ( .ppk ) 裡來 , \xa0 利用 Putty 把 key 導進去 , \xa0 進去 \xa0 regedit \xa0 裡的 \xa0 HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions\\github.com\xa0 匯出成 \xa0 reg 檔 , \xa0 如何用近端改版 \n \n Cd tmp \n Git clone – recurse-submodule \xa0 git@github.com:mdecd2024/2a-midag1.git \n Cd 2a-midag1 \n Cms( 會有一個獨立編輯的 9443 在 \xa0 https) \n \n 如果要推 \n \n Git add . \n Git commit -m “自己要推的東西” \n Git push \n \n 讓這台短腦有權限推 \n \n Ipconfig( ipv4 網址-因為每個人都有自己的 ipv4 ) \n 跑到 tmp -組別-下的py \n 抓出來(把自己的 ipv4 環境導入) \n 在 \xa0 Cms \xa0 一次 , \xa0 每個人都可以更新 \n \n', 'tags': '', 'url': '影片字幕.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};