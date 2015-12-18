## MyRestaurant App

### Server (WebApp)
	- Laravel Framework
	- Dingo/Api
	- JWT Auth

### Mobile
	- Ionic
	- Angular
	- Satellizer

#### Important when testing on localhost with different ports
* Run Google chrome without security (win + R - Execute) - ``` chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security ```
* $HTTP_RAW_POST_DATA is Deprecated ERROR - SET ``` always_populate_raw_post_data = -1 ``` ON php.ini
