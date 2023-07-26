<?php /* Template Name: daisu */ ?>

<?php
/**
 * The main template file
 */
get_header(); ?>

<link rel="stylesheet" type="text/css" href="https://ir.xtb.com/wp-content/themes/xtb/style.css" />
<main class="container">
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="box">
            <h2>News
            </h2>

            <ul class="informacje">
            <?php
                        $args = array(
                            'post_type' => 'post',
                            'posts_per_page' => '5',
                            
                        );
                        $post_query = new WP_Query($args);

                        if($post_query->have_posts() ) {
                            while($post_query->have_posts() ) {
                                    $post_query->the_post();
                            ?>         
                              <li>
                                <div class="date"><?php echo get_the_date( 'd-m-Y' ); ?></div>
                                <div class="title2"><?php the_title(); ?></div>
                                <div class="read">
                                  <a href="<?php the_permalink() ?>"
                                    class="more">Read more</a>
                                </div>
                              </li>
                              <?php
                            }
                        }
                    ?>      
              
            </ul>
          </div>
        </div>
      </div>
    </div>
</main>

<?php get_footer(); ?>