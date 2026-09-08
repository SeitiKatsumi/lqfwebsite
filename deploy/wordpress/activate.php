<?php
// Run only via CLI after the database and wp-content backup.
if (PHP_SAPI !== 'cli') { exit(1); }
require '/var/www/html/conteudo/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';
$theme = wp_get_theme('lqf');
if ($theme->errors() || !$theme->exists()) { throw new RuntimeException('LQF theme missing or invalid'); }
$result = activate_plugin('lqf-category-templates/lqf-category-templates.php');
if (is_wp_error($result)) { throw new RuntimeException($result->get_error_message()); }
switch_theme('lqf');
$home = get_page_by_path('inicio-lqf', OBJECT, 'page');
$home_id = $home ? $home->ID : wp_insert_post(array('post_type'=>'page','post_status'=>'publish','post_title'=>'Processo LQF','post_name'=>'inicio-lqf'), true);
if (is_wp_error($home_id)) { throw new RuntimeException($home_id->get_error_message()); }
update_option('show_on_front', 'page');
update_option('page_on_front', $home_id);
$term = get_term_by('slug', 'seo', 'category');
if (!$term) {
    $created = wp_insert_term('SEO', 'category', array('slug'=>'seo'));
    if (is_wp_error($created)) { throw new RuntimeException($created->get_error_message()); }
    $term = get_term($created['term_id'], 'category');
}
// First installation only: future administrator choices survive deployments.
if (!metadata_exists('term', $term->term_id, '_lqf_post_template')) {
    update_term_meta($term->term_id, '_lqf_post_template', 'lqf//processo-seo');
}
if (!metadata_exists('post', $home_id, '_onedash_seo_head')) {
    update_post_meta($home_id, '_onedash_seo_head', array('title'=>'Processo LQF | Da ideia ao produto pronto para o mercado','description'=>'Conheça o processo de desenvolvimento, formulação, testes, regularização e fabricação terceirizada da LQF Farmacêutica.','canonical'=>home_url('/')));
}
echo wp_json_encode(array('theme'=>get_stylesheet(),'home'=>$home_id,'seo_category'=>$term->term_id,'template'=>get_term_meta($term->term_id,'_lqf_post_template',true),'plugins'=>get_option('active_plugins')), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
