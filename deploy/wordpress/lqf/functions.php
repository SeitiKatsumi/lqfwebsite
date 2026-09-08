<?php
defined('ABSPATH') || exit;
add_action('after_setup_theme', function () {
    add_theme_support('editor-styles');
    add_editor_style('style.css');
});
add_filter('render_block_core/image', function ($html, $block) {
    if (str_contains($block['attrs']['className'] ?? '', 'lqf-hero-image')) {
        $tags = new WP_HTML_Tag_Processor($html);
        if ($tags->next_tag('img')) {
            $tags->set_attribute('fetchpriority', 'high');
            $tags->set_attribute('loading', 'eager');
            $tags->set_attribute('decoding', 'async');
            $html = $tags->get_updated_html();
        }
    }
    return $html;
}, 10, 2);
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('lqf', get_stylesheet_uri(), array(), filemtime(get_theme_file_path('style.css')));
    wp_enqueue_script('lqf-navigation', get_theme_file_uri('navigation.js'), array(), filemtime(get_theme_file_path('navigation.js')), true);
});
