var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程 第一周","text":"2024 Spring 協同產品設計實習課程教導, 如何建立倉儲和利用 import 至 Replit進行改版、設定網誌與Odoo PLM 在機械設計流程中的應用. 建立個人課程倉儲 登入到自己的github, 連結到 https://github.com/mdecycu/cmsimde_site (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 如何將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. import 完如何進行改版 import 完會有 Webview 跑出來這就是自己的動態網站 (由這可增加或修改內容) , 點進去後打 admin 就可增加 (也就是改版) 你所要的內容, 當你打完你要的內容後右上角有個 Convert 點一下轉為靜態 (這要點, 不然你從動態推到靜態會沒有東西) , 到 Replit 的 Git 中輸入新增的內容後 Push , 等待一下就可以在靜態看到剛剛增加的內容. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. Odoo PLM 功能 畢竟這個程式這學期才用, 當然帳號是以學號加上 nfu.edu.tw 去建立的, 期中和期末個做一樣模擬出來, 要新增一個產品網頁 (已建立) , 依模擬產品去分配給組員做 (會收到 emlig 的訊息) 回傳至 odoo PLM 裡 以上為第一周內容 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};