<?php
/**
 * Plugin Name: LQF — Modelos por categoria
 * Description: Associa modelos nativos de blocos a categorias de posts.
 * Version: 1.0.0
 * Requires at least: 6.6
 * Requires PHP: 8.0
 */
defined('ABSPATH') || exit;

function lqf_category_template_choices() {
    $choices = array();
    foreach (get_block_templates(array('post_type' => 'post')) as $template) {
        if (!empty($template->is_custom)) {
            $choices[$template->id] = $template->title;
        }
    }
    asort($choices);
    return $choices;
}

function lqf_category_template_field($term = null) {
    $selected = $term instanceof WP_Term ? get_term_meta($term->term_id, '_lqf_post_template', true) : '';
    wp_nonce_field('lqf_category_template', '_lqf_template_nonce');
    echo '<select name="lqf_post_template" id="lqf-post-template"><option value="">Padrão do tema</option>';
    foreach (lqf_category_template_choices() as $id => $title) {
        echo '<option value="' . esc_attr($id) . '" ' . selected($selected, $id, false) . '>' . esc_html($title) . '</option>';
    }
    echo '</select><p class="description">Crie modelos para posts em Aparência → Editor → Modelos. Esta seleção altera os posts, não a listagem da categoria. Modelo explícito do post tem prioridade; entre categorias, vence a de menor ID.</p>';
}
add_action('category_add_form_fields', function () {
    echo '<div class="form-field"><label for="lqf-post-template">Modelo dos posts</label>';
    lqf_category_template_field();
    echo '</div>';
});
add_action('category_edit_form_fields', function ($term) {
    echo '<tr class="form-field"><th><label for="lqf-post-template">Modelo dos posts</label></th><td>';
    lqf_category_template_field($term);
    echo '</td></tr>';
});
function lqf_save_category_template($term_id) {
    $taxonomy = get_taxonomy('category');
    if (!current_user_can($taxonomy->cap->manage_terms) || !isset($_POST['_lqf_template_nonce'], $_POST['lqf_post_template']) || !is_string($_POST['_lqf_template_nonce']) || !is_string($_POST['lqf_post_template']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['_lqf_template_nonce'])), 'lqf_category_template')) {
        return;
    }
    $id = sanitize_text_field(wp_unslash($_POST['lqf_post_template']));
    if ($id === '') {
        update_term_meta($term_id, '_lqf_post_template', '');
    } elseif (array_key_exists($id, lqf_category_template_choices())) {
        update_term_meta($term_id, '_lqf_post_template', $id);
    }
}
add_action('created_category', 'lqf_save_category_template');
add_action('edited_category', 'lqf_save_category_template');

function lqf_category_single_hierarchy($templates) {
    if (!is_singular('post')) {
        return $templates;
    }
    $explicit = get_page_template_slug(get_queried_object_id());
    if ($explicit && $explicit !== 'default') {
        return $templates;
    }
    $categories = wp_get_post_categories(get_queried_object_id());
    sort($categories, SORT_NUMERIC);
    $choices = lqf_category_template_choices();
    foreach ($categories as $category) {
        $id = get_term_meta($category, '_lqf_post_template', true);
        if (!$id || !isset($choices[$id])) {
            continue;
        }
        $template = get_block_template($id, 'wp_template');
        if ($template && $template->theme === get_stylesheet()) {
            // Use core resolution: DB-edited templates and their assets remain native.
            array_unshift($templates, $template->slug . '.php');
            break;
        }
    }
    return $templates;
}
add_filter('single_template_hierarchy', 'lqf_category_single_hierarchy');
