<?php
if (PHP_SAPI !== 'cli') { exit(1); }
require '/var/www/html/conteudo/wp-load.php';
echo wp_json_encode(array('stylesheet'=>get_option('stylesheet'),'template'=>get_option('template'),'show_on_front'=>get_option('show_on_front'),'page_on_front'=>get_option('page_on_front'),'active_plugins'=>get_option('active_plugins')),JSON_PRETTY_PRINT);
