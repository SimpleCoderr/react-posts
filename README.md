### Задание было взято с сайта [https://daruse.ru/zadaniya-po-react-dlya-prokachki](https://daruse.ru/zadaniya-po-react-dlya-prokachki)
#### Задание:
##### Использовать:
* Redux - пакеты redux и react-redux
* HashRouter - для меню и отдельных страниц из пакета react-router-dom
* Bootstrap - для визуализации, пакет react-bootstrap и bootstrap
* axios - для запросов на сервер, пакет axios
##### Описание страниц:
Компонент будет содержать 2 страницы (реализуем через HashRouter):
* Articles - страница с постами 
* Users - страница с пользователями

##### Функционал страницы с постами

Получаем данные отсюда: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) через axios.get() и записываем в стор при загрузки этой страницы

Выводим 3 записи по умолчанию, внизу кнопка "Show more" - при клике на которую из стора получаем ещё 3 записи, итого их 6, кнопку можно кликать до тех пор, пока все записи не будут получены, когда они кончаться, кнопка скрывается.

Вверху есть кнопка, которая переключает отображения по 3 или по 2 карточки на строку "Make big cards" или "Make small cards".

У каждой записи есть три кнопки "View" - при клике открывается модалка с детальной информацией записи, "Change color" - меняет цвет карточки (любые 3 цвета придумайте) - скрин ниже, "Edit" - модалка с возможность изменить запись (об этом ещё ниже читайте)

Также есть кнопка вверху "Add Article" - она открывает модалку с формой, где выводятся поля "title" и "body" и кнопка "Create", при клике на которую в стор добавляется новая запись и она добавляется последний в общий список (Ещё нужно записи дать id).

У каждой записи выводиться кнопка "Edit" при клике на которую открывается такая же модалка, только с заполненными данными данной записи и кнопка "Update", которая меняет в сторе нашу запись.

У каждой записи выводиться кнопка "Delete" при клике на которую запись удаляется из стора.

##### Немного добавил от себя: 
* можно просматривать страницу каждого юзера, которая содержит информацию о нем и его посты;
* есть поиск и сортировка постов;
* есть фейковая авторизация.


