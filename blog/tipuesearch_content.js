var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/Jun41123/cd2024 網站: https://jun41123.github.io/cd2024/ 簡報: https://jun41123.github.io/cd2024/reveal 網誌: https://jun41123.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程 第二週","text":"2024 Spring 協同產品設計實習課程教導, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 子模組 如何利用 Github Codespaces 建立, cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站. 先 git submodule add 自己的倉儲空格學號, git add . , git commit -m \"add 學號 submodule\" , 最後在 git push . 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作. 以上為第二周內容","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程 第二週","text":"2024 Spring 協同產品設計實習課程教導, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 利用 Codespaces 維護倉儲與網站 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push 以上為第二周內容","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程 第一週","text":"2024 Spring 協同產品設計實習課程教導, 如何建立倉儲和利用 import 至 Replit進行改版、設定網誌與Odoo PLM 在機械設計流程中的應用. 建立個人課程倉儲 登入到自己的github, 連結到[https://github.com/mdecycu/cmsimde_site] (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 如何將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. import 完如何進行改版 import 完會有 Webview 跑出來這就是自己的動態網站 (由這可增加或修改內容) , 點進去後打 admin 就可增加 (也就是改版) 你所要的內容, 當你打完你要的內容後右上角有個 Convert 點一下轉為靜態 (這要點, 不然你從動態推到靜態會沒有東西) , 到 Replit 的 Git 中輸入新增的內容後 Push , 等待一下就可以在靜態看到剛剛增加的內容. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. Odoo PLM 功能 畢竟這個程式這學期才用, 當然帳號是以學號加上 nfu.edu.tw 去建立的, 期中和期末個做一樣模擬出來, 要新增一個產品網頁 (已建立) , 依模擬產品去分配給組員做 (會收到 emlig 的訊息) 回傳至 odoo PLM 裡 以上為第一周內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};