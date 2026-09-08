<?php
// Short-lived browser QA session. CLI only; never installed as a public endpoint.
if (PHP_SAPI !== 'cli') { exit(1); }
require '/var/www/html/conteudo/wp-load.php';
$file = '/tmp/lqf-browser-qa-session.json';
if (file_exists($file)) {
    $old = json_decode(file_get_contents($file),true);
    WP_Session_Tokens::get_instance($old['user'])->destroy($old['token']);
    if (!empty($old['post'])) { wp_delete_post($old['post'],true); }
    unlink($file);
}
if (($argv[1] ?? '') === 'cleanup') { exit; }
$users = get_users(array('role'=>'administrator','number'=>1));
$user = $users[0]->ID;
$expires = time()+900;
$token = WP_Session_Tokens::get_instance($user)->create($expires);
$term = get_term_by('slug','seo','category');
$id = wp_insert_post(array('post_type'=>'post','post_status'=>'private','post_title'=>'Desenvolvimento de cosméticos: teste privado','post_content'=>'<!-- wp:paragraph --><p>Este conteúdo privado verifica a posição do artigo no modelo SEO.</p><!-- /wp:paragraph --><!-- wp:heading --><h2 class="wp-block-heading">Etapas e qualidade</h2><!-- /wp:heading --><!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>Formulação</li><!-- /wp:list-item --><!-- wp:list-item --><li>Produção</li><!-- /wp:list-item --></ul><!-- /wp:list -->','post_category'=>array($term->term_id)));
file_put_contents($file,wp_json_encode(array('user'=>$user,'token'=>$token,'post'=>$id)));
chmod($file,0600);
echo wp_json_encode(array('cookies'=>array(array('name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie($user,$expires,'logged_in',$token)),array('name'=>SECURE_AUTH_COOKIE,'value'=>wp_generate_auth_cookie($user,$expires,'secure_auth',$token))),'post'=>$id));
