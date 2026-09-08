<?php
// Integration check inside the WordPress container. All fixtures are private and removed.
if (PHP_SAPI !== 'cli') { exit(1); }
require '/var/www/html/conteudo/wp-load.php';
function check($ok, $message) { if (!$ok) { throw new RuntimeException($message); } echo "OK: $message\n"; }
$posts = $terms = array();
$admin = get_users(array('role'=>'administrator','number'=>1));
wp_set_current_user($admin[0]->ID);
function query_post($id) {
    global $wp_query, $post;
    $wp_query = new WP_Query(array('p'=>$id,'post_type'=>'post','post_status'=>'private'));
    $post = get_post($id);
    setup_postdata($post);
}
try {
    check(get_stylesheet() === 'lqf', 'Theme active');
    check(get_option('show_on_front') === 'page' && get_option('page_on_front'), 'Static homepage');
    check(isset(lqf_category_template_choices()['lqf//processo-seo']), 'SEO template offered in category selector');
    check(in_array('onedash-seo-head/onedash-seo-head.php',get_option('active_plugins'),true), 'OneDash preserved');
    $seo = get_term_by('slug','seo','category');
    $posts[] = $id = wp_insert_post(array('post_type'=>'post','post_status'=>'private','post_title'=>'LQF QA title','post_content'=>'<!-- wp:paragraph --><p>LQF QA content</p><!-- /wp:paragraph -->','post_category'=>array($seo->term_id)));
    query_post($id);
    check(lqf_category_single_hierarchy(array('single.php'))[0] === 'processo-seo.php', 'SEO category selects template');
    get_single_template();
    check($GLOBALS['_wp_current_template_id'] === 'lqf//processo-seo', 'Native core resolves selected template');
    $html = get_the_block_template_html();
    $position = strpos($html,'LQF QA title');
    check(strpos($html,'Produção') < $position && $position < strpos($html,'Próximo projeto') && strpos($html,'LQF QA content') > $position, 'Title/content between steps and CTA');
    check(substr_count($html,'<h1') === 1, 'Only one H1');
    check(strpos($html,'<form') === false && strpos($html,'Iris') === false, 'No forms or Iris');
    preg_match_all('/class="wp-block-button__link[^>]*href="([^"]+)"/', $html,$links);
    check(count($links[1]) >= 3 && count(array_unique($links[1])) === 1 && $links[1][0] === 'https://www.lqf.com.br/contato#formulario', 'All conversion buttons target contact form');
    $posts[] = $tid = wp_insert_post(array('post_type'=>'wp_template','post_status'=>'publish','post_name'=>'lqf-qa-alternative','post_title'=>'LQF QA alternative','post_content'=>'<!-- wp:post-title {"level":1} /--><!-- wp:post-content /-->','tax_input'=>array('wp_theme'=>array('lqf'))));
    $term = wp_insert_term('LQF QA category '.time(),'category');
    $terms[] = $cat = $term['term_id'];
    check(isset(lqf_category_template_choices()['lqf//lqf-qa-alternative']), 'New editor model available without code');
    update_term_meta($cat,'_lqf_post_template','lqf//lqf-qa-alternative');
    wp_set_post_categories($id,array($cat));
    query_post($id);
    check(lqf_category_single_hierarchy(array('single.php'))[0] === 'lqf-qa-alternative.php', 'New category mapping');
    wp_set_post_categories($id,array($cat,$seo->term_id));
    query_post($id);
    check(lqf_category_single_hierarchy(array('single.php'))[0] === 'processo-seo.php', 'Lowest category ID wins');
    update_post_meta($id,'_wp_page_template','lqf-qa-alternative');
    check(lqf_category_single_hierarchy(array('lqf-qa-alternative.php','single.php'))[0] === 'lqf-qa-alternative.php', 'Explicit post model wins');
    delete_post_meta($id,'_wp_page_template');
    wp_set_post_categories($id,array($cat));
    update_term_meta($cat,'_lqf_post_template','lqf//missing-model');
    query_post($id);
    check(lqf_category_single_hierarchy(array('single.php')) === array('single.php'), 'Missing model falls back');
    $_POST = array('lqf_post_template'=>'lqf//processo-seo');
    lqf_save_category_template($cat);
    check(get_term_meta($cat,'_lqf_post_template',true) === 'lqf//missing-model', 'Missing nonce cannot change mapping');
    $_POST['_lqf_template_nonce'] = wp_create_nonce('lqf_category_template');
    lqf_save_category_template($cat);
    check(get_term_meta($cat,'_lqf_post_template',true) === 'lqf//processo-seo', 'Valid admin category save');
    $_POST['lqf_post_template'] = '';
    lqf_save_category_template($cat);
    check(metadata_exists('term',$cat,'_lqf_post_template') && get_term_meta($cat,'_lqf_post_template',true) === '', 'Explicit default choice persists across deployments');
    $_POST['lqf_post_template'] = 'lqf//processo-seo';
    lqf_save_category_template($cat);
    wp_set_current_user(0);
    $_POST['lqf_post_template'] = '';
    lqf_save_category_template($cat);
    check(get_term_meta($cat,'_lqf_post_template',true) === 'lqf//processo-seo', 'Unauthenticated write rejected');
    wp_set_current_user($admin[0]->ID);
    $request = new WP_REST_Request('POST','/wp/v2/posts');
    $request->set_body_params(array('title'=>'LQF REST QA','content'=>'REST content','status'=>'private','categories'=>array($seo->term_id)));
    $response = rest_do_request($request);
    check($response->get_status() === 201, 'Native REST post creation');
    $posts[] = $rest_id = $response->get_data()['id'];
    query_post($rest_id);
    check(lqf_category_single_hierarchy(array('single.php'))[0] === 'processo-seo.php', 'REST post uses category model');
    $request = new WP_REST_Request('POST','/onedash-seo/v1/posts/'.$rest_id);
    $request->set_body_params(array('title'=>'QA SEO title','description'=>'QA description','canonical'=>get_permalink($rest_id)));
    $response = rest_do_request($request);
    check($response->get_status() === 200, 'OneDash REST metadata integration');
    check(get_post_meta($rest_id,'_onedash_seo_head',true)['title'] === 'QA SEO title', 'OneDash metadata stored');
} finally {
    foreach (array_reverse($posts) as $id) { wp_delete_post($id,true); }
    foreach ($terms as $id) { wp_delete_term($id,'category'); }
    echo "Private QA fixtures removed.\n";
}
