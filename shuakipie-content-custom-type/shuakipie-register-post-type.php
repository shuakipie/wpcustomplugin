<?php
    /*
    Plugin Name: Shuakipie Register Post Type
    
    Plugin URI: https://cryptoshuakipie.com
    Description: Plugin to accompany shuakipie
    Version: 2.2
    Author: Shuakipie
    License: GPLv2

    */
 

function shuakipie_register_post_type(){

         $labels = array(
            'name'               => __('Services', 'shuakipie'),
            'singular_name'      => __('Service', 'shuakipie'),
            'menu_name'          => __('Services', 'shuakipie'),
            'name_admin__bar'    => __('Services', 'shuakipie'),
            'add_new'            => __('Add New Service', 'shuakipie'),
            'add_new_item'       => __('Add New Service', 'shuakipie'),
            'new_item'           => __('New Service', 'shuakipie'),
            'edit_item'          => __('Edit Service', 'shuakipie'),
            'view_item'          => __('View Service', 'shuakipie'),
            'all_items'          => __('All Services', 'shuakipie'),
            'search_items'       => __('No Cities Found', 'shuakipie'),
            'not_found_in_trash' => __('No Cities Found', 'shuakipie'),
  

         );
         
         $args = array(
            'labels'            => $labels,
            'has_archive'       => true,
            'public'            => true,
            'hierarchical'      => true,
            'supports'          => array('title', 'editor',  'custom fields', 'thumbnail', 'page-attributes'),
            'capability_type'   => 'post',
            'rewrite'           => 'Service',
            'show_in_rest'      => true

         );

         register_post_type('shuakipie_service', $args);

         $labels = array(
            'name'               => __('Equipments', 'shuakipie'),
            'singular_name'      => __('Equipment', 'shuakipie'),
            'menu_name'          => __('Equipments', 'shuakipie'),
            'name_admin__bar'    => __('Equipments', 'shuakipie'),
            'add_new'            => __('Add New Equipment', 'shuakipie'),
            'add_new_item'       => __('Add New Equipment', 'shuakipie'),
            'new_item'           => __('New Equipment', 'shuakipie'),
            'edit_item'          => __('Edit Equipment', 'shuakipie'),
            'view_item'          => __('View Equipment', 'shuakipie'),
            'all_items'          => __('All Equipments', 'shuakipie'),
            'search_items'       => __('No Equipments Found', 'shuakipie'),
            'not_found_in_trash' => __('No Equipments Found', 'shuakipie'),
  

         );
         
         $args = array(
            'labels'            => $labels,
            'has_archive'       => true,
            'public'            => true,
            'hierarchical'      => true,
            'supports'          => array('title', 'editor',  'custom fields', 'thumbnail', 'page-attributes'),
            'capability_type'   => 'post',
            'rewrite'           => 'Equipment',
            'show_in_rest'      => true

         );

         register_post_type('shuakipie_equipment', $args);


         

}

add_action('init' , 'shuakipie_register_post_type');




function shuakipie_register_taxonomy(){

    $labels = array(
       'name'               => __('Categories', 'shuakipie'),
       'singular_name'      => __('Category', 'shuakipie'),
       'menu_name'          => __('Categories', 'shuakipie'),
       'add_new_item'       => __('Add New Category', 'shuakipie'),
       'all_items'          => __('New Category', 'shuakipie'),
       'edit_item'          => __('Edit Category', 'shuakipie'),
       'update_item'        => __('View Category', 'shuakipie'),
       'search_items'       => __('Search Cities Found', 'shuakipie'),
       'not_found'          => __('No Categories Found', 'shuakipie'),
       'not_found_in_trash' => __('No Categories Found on trash', 'shuakipie'),


    );
    
    $args = array(
       'labels'            => $labels,
       'hierarchical'      => true,
       'sort'              => true,
       'args'              => array('orderby' => 'term_order'),
       'rewrite'           => array('slug' => 'category'),
       'show_admin_column' => true,
       'show_in_rest'      => true

    );

    register_taxonomy('shuakipie_category', 'shuakipie_equipment', $args);

  


    

}

add_action('init' , 'shuakipie_register_taxonomy');


function shuakipie_equipment_terms(){

$term = term_exists('New Equipment', 'shuakipie_category');
 if (0  == $term && null == $term){

        wp_insert_term(

            'New Equipment',
            'shuakipie_category',
            array(
             'description'  => 'This is New Equipment',
             'slug'         => 'new-equipment' 

            )

            );

 }

 $term = term_exists('Used Equipment', 'shuakipie_category');
 if (0  == $term && null == $term){

        wp_insert_term(

            'Used Equipment',
            'shuakipie_category',
            array(
             'description'  => 'This is Used Equipment',
             'slug'         => 'used-equipment' 

            )

            );

 }
 


}
 
add_action('init', 'shuakipie_equipment_terms');
