Установить node.js
    npm install -g @vue/cli #установить vue-cli
    vue create vue-3   #создаёт проект vue-3
        + Babbel
        - TypeScript
        + Progressive Web App (PWA) Support
        + Router
        + Vuex
        - CSS Pre-processors
        + Linter / Formatter
        - Unit Testing
        - E2E Testing
        ----------------------------------------------------------------
        + Vue 3.x
        ----------------------------------------------------------------
        Use history mode for router? (Requires proper server setup for index fallback in production) y
        ----------------------------------------------------------------
        + ESLint with error prevention only
        ----------------------------------------------------------------
        + Lint on save
        ----------------------------------------------------------------
        + In package.json
        ----------------------------------------------------------------
        Save this as a preset for future projects? n
    npm install vue-axios

Команды GIT
    git init    #шаг 1 инициализация в текущей папке
    git config --list   #отображает конфигурационные параметры git
        git config --global init.defaultBranch main #добавляет в конфиг глобальную инициализацию с ветки main
        git config --global user.mail "tulupov.andrey@gmail.com" #добавляет в конфиг глобальную почту
        git config --global user.name "tulupov-com" #добавляет в конфиг глобального пользователя
    git branch -m main  #инициализирует ветку main
    git add *   #шаг 2 добавляет все файлы
    git commit -m "Добавлены файлы" #шаг 3 коммит
        git commit -m -a "Добавлены файлы" #шаг 3 коммит с добавлением всех файлов (как при git add *)
    git remote #выводит информацию о внешних репозиториях
    git remote add origin https://github.com/tulupov-com/lessons.git    #шаг 4 добавляет внешний репозиторий origin
    git push -u origin main #шаг 5 пушим - передаём изменения на remote репозиторий origin из main
    git pull #пулим - передаём изменения с сервера на локальный, не забыть перед этим опустошить папку
        git pull origin main #пулим с явным указанием репозиториев
            git reset --hard #выполнить перед pull если ошибка "error: Your local changes to the following files would be overwritten by merge: readme.md Please commit your changes or stash them before you merge. Aborting"

API свободного поисковика https://habr.com/ru/post/545196/

python -m venv .venv #создаёт папку .venv для виртуального окружения
VSCode внизу есть справа есть interpreter - выбрать 3.8.8 ('.venv': venv) (recomended)
	*если не получается добавить новый терминал в VSCode PowerShell, старый убрать: виртуальное окружение должно включиться
		в случае ошибки Невозможно загрузить файл .venv\Scripts\Activate.ps1, так как выполнение сценариев отключено в этой системе. Для получения дополнительных сведений см. about_Execution_Policies по адресу https:/go.microsoft.com/fwlink/?LinkID=135170 идти в Панель управления - Обновление и безопасность - Для разработчиков - Powershell - Изменить политику выполнения, чтобы локальные сценарии PowerShell могли работать без подписи. Требовать подписи для удаленных скриптов - поставить галочку и нажать Применить