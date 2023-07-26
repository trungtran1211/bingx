<?php /* Template Name: Daotao */ ?>

<?php
/**
 * The main template file
 */
get_header(); ?>

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/knowledge-base.c5173015.css">
<div class="knowledge-base" id="knowledgeBase">
  <div class="container">
    <div class="knowledge-base-header d-flex align-items-center justify-content-between">
      <h1>Kiến thức nền tảng</h1>
    </div>
  </div>
  <div class="knowledge-base-articles">
    <div class="container">
      <div class="knowledge-base-articles-wrapper js-articles">
          <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => '5',
                'tax_query' => [
                    [
                        'taxonomy' => 'category',
                        'terms' => 2,
                    ] 
                ],
            );
            $post_query = new WP_Query($args);

            if($post_query->have_posts() ) {
                while($post_query->have_posts() ) {
                        $post_query->the_post();
                ?> 
                  <a href="<?php the_permalink() ?>" class="knowledge-base-article-box">
                    <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                    <div class="knowledge-base-article-box-img" style="
                        background-image: url('<?php echo $image[0]; ?>');
                      "></div>
                    <div class="knowledge-base-article-box-wrapper">
                      <div class="knowledge-base-article-box-text">
                        <h2><?php the_title(); ?></h2>
                        <p style="">
                          <?php the_content(); ?>
                        </p>
                      </div>
                      <p class="knowledge-base-articles-read-more">Tìm hiểu thêm</p>
                    </div>
                  </a>
                  <?php
                  }
              }
          ?>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>