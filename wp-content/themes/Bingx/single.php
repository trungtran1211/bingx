<?php /* Template Name: Single */ ?>

<?php
/**
 * The main template file
 */
get_header(); ?>
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/market-news-single.bf813045.css">
 
<?php if (have_posts()) : 
    while (have_posts()) : the_post(); ?>
<section class="market-news-single" id="marketNewsSingle">
    <div class="container">
        <div class="row">
            <div class="col-xl-8">
                <h1>
                <?php the_title(); ?>
                </h1>
                <div class="market-news-single-date">
                    <strong><?php echo get_the_date(); ?></strong>
                </div>
                <div class="market-news-single-content js-market-news-single-content">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>
</section>
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>