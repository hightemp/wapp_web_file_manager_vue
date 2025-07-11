# wapp_web_file_manager_vue

![](https://asdertasd.site/counter/wapp_web_file_manager_vue)

Менеджер файлов для webdav, github.

Демо: https://hightemp.github.io/wapp_web_file_manager_vue/

## Перед сборкой

```
mv env.example.js env.js
```

Прописать в apache 

```
Alias /webdav /var/www/webdav

<Directory /var/www/webdav>
    DAV On

    AllowOverride None
    Options Indexes FollowSymLinks
    Require all granted

    Header always set Access-Control-Allow-Origin "*"
    Header always set Access-Control-Allow-Headers "origin, content-type, cache-control, accept, authorization, if-match, destination, overwrite, depth"
    Header always set Access-Control-Expose-Headers "ETag"
    Header always set Access-Control-Allow-Methods "GET, HEAD, POST, PUT, OPTIONS, MOVE, DELETE, COPY, LOCK, UNLOCK, PROPFIND, MKCOL"
    Header always set Access-Control-Allow-Credentials "true"
</Directory>
```

```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt
```

```
<VirtualHost *:443>
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/apache-selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
</VirtualHost>
```

![](images/2023-02-06_07-31.png)
<img width="300px" src="images/2023-02-06_02-48.png">
<img width="300px" src="images/2023-02-06_02-56.png">
<img width="300px" src="images/2023-02-06_02-57.png">
