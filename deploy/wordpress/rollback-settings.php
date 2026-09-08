<?php
if (PHP_SAPI !== 'cli') { exit(1); }
require '/var/www/html/conteudo/wp-load.php';
$settings = json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR);
switch_theme($settings['stylesheet']);
foreach (array('show_on_front','page_on_front','active_plugins') as $key) { update_option($key,$settings[$key]); }
echo "Previous theme and reading settings restored.\n";
