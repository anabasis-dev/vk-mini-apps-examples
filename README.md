# mini-app-shop-boilerplate
Мини-апп онлайн магазин

## Запуск

1. Склонируйте репозиторий
   ```bash
   git clone https://github.com/pasha-nikitin-2003/mini-app-shop-boilerplate.git
   ```
2. В окне командной строки перейдите в папку примера, установите зависимости и запустите веб-сервер.
   ```bash
   cd {путь-к-папке-примера}
   npm i
   npm start
   ```
3. Создайте мини-приложение через [портал для разработчиков](https://dev.vk.com/) или через вкладку "Управление" в приложении ВКонтакте
4. В настройках приложения включите режим разработки и пропишите адрес вашего веб сервера по умолчанию(http://localhost:3000)

## Тестирование на различных устройствах
1. Установите VK Tunnel на свою машину. Для этого выполните следующие инструкции в командной строке:
   ```bash
   npm install @vkontakte/vk-tunnel -g
   ```
2. Откройте другое окно командной строки. В нём перейдите в папку проекта-примера и запустите VK Tunnel:
   ```bash
   cd {путь-к-папке-примера}
   npm run tunnel
   ```
3. VK Tunnel создаст соединение (туннель) к веб-серверу, который вы запустили локально, и в окне командной строки отобразит URL для доступа к этому веб-серверу. Скопируйте этот URL.
4. Откройте настройки мини-приложения и перейдите в раздел Тестирование.
5. Создайте в этом разделе новую группу. Включите в неё нужных вам пользователей. В поле URL укажите скопированный URL. Подробнее про тестирование можно прочитать [здесь](https://dev.vk.com/mini-apps/management/testing).
6. Когда пользователи группы будут запускать приложение, ВКонтакте будет переадресовывать вызовы на локальный веб-сервер. Пользователи будут видеть версию мини-приложения, которая находится на вашей машине. Конечно, чтобы этот подход работал, локальный веб-сервер должен быть запущен.
Подробнее о работе с утилитой — можно посмотреть [здесь](https://dev.vk.com/libraries/tunnel).

## Результат

Можно посмотреть здесь: [мини-апп](https://vk.com/app51654068#/)

## Документация и ресурсы
* Более подробно про мини-приложение можно прочитать [здесь](https://dev.vk.com/mini-apps/examples/shop)
* [VK Mini Apps](https://vk.com/vkappsdev) — сообщество разработчиков мини-приложений ВКонтакте.
