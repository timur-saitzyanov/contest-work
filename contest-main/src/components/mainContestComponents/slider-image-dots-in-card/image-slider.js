import $ from 'jquery';
$(function() {

    $(document).on('click', '[data-images-controls] li', function() {
        let button = $(this);
        let buttons = button.closest('.card-new').find('[data-images-controls] li');
        let index = button.attr('data-images-control-index');
        let parent = button.closest('.card-new');

        buttons.removeClass('active');
        button.addClass('active');

        parent.find('[data-image-slider]').hide();
        parent.find(`[data-image-slider=${index}]`).show();
    });

    $(document).on('mousemove', '[data-images-slider]', function(e) {
        move(e,this);
    });
    $(document).on('touchmove', '[data-images-slider]', function(e) {
        move(e,this);
    });

    $(document).on('mouseleave', '[data-images-slider]', function(e) {
        endmove(e,this);
    });
    $(document).on('touchend', '[data-images-slider]', function(e) {
        endmove(e,this);
    });

    function move(e,_this) {
        let slider = $(_this);
        let buttons = slider.closest('.card-new').find('[data-images-controls] li');
        if (buttons.length) {
            let x = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : e.originalEvent.clientX;
            let length = buttons.length;
            let width = slider.width();
            let pieceForPicture = width / length;
            let left = slider.offset().left;
            for (let i = 0; i < length; i++) {
                if (x > left + pieceForPicture * i && x < left + pieceForPicture * (i + 1)) {
                    slider.find('[data-image-slider]').hide();
                    slider.find(`[data-image-slider=${i}]`).show();
                    buttons.removeClass('active');
                    buttons.eq(i).addClass('active');
                }
            }
        }
    }

    function endmove(e,_this) {
        let sliders = $(_this);
        let buttons = sliders.closest('.card-new').find('[data-images-controls] li');
        sliders.find('[data-image-slider]').hide();
        sliders.find(`[data-image-slider=${0}]`).show();
        buttons.removeClass('active');
        buttons.eq(0).addClass('active');
    }

    //$('[data-images-slider]');
    //$('[data-images-controls]');
});
