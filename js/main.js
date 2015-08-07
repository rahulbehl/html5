
$(document).ready(function () {
    $('.loader').hide();

//    $(".sec-8 select.input").chosen({disable_search_threshold: 10});
    // Init Controller
    var scrollMagicController = new ScrollMagic.Controller();
    // build scene
    // Create Animation for 0.5s
    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-1',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".navbar-default", 0, {backgroundColor: ' #ffffff'})

            .addTo(scrollMagicController)
            ; 
    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part2down .icon-1", 0.5, {marginLeft: 0, marginRight: 0, rotation: 360, ease: Back.easeOut})

            .addTo(scrollMagicController)
            ;
    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part2down .icon-2", 0.5, {marginLeft: 0, marginRight: 0, rotation: 360, ease: Back.easeOut, delay: 0.5})

            .addTo(scrollMagicController)
            ;
    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-1 .content-1", 0.5, {opacity: 1})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-1 .content-2", 0.5, {opacity: 1, delay: 0.5})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 0 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part1down .img-1 img", 0.5, {marginTop: 0})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 0 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part1down .img-2", 0.5, {scale: 1, delay: 0.5})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 0 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part1down .img-3", 0.5, {scale: 1, delay: 1})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.part1down',
        offset: 250 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".part2down h3", 0.5, {opacity: 1, ease: Back.easeOut})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: -200 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .lipsum-circle", 0.5, {marginTop: '10px', ease: Back.easeOut})

            .addTo(scrollMagicController);



    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-4',
        offset: -200 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-4 .lipsum-circle", 0.5, {marginTop: '10px', ease: Back.easeOut})

            .addTo(scrollMagicController);


    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-6',
        offset: -200 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-6 .lipsum-circle", 0.5, {marginTop: '10px', ease: Back.easeOut})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-8',
        offset: -200 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-8  .lipsum-circle", 0.5, {marginTop: '10px', ease: Back.easeOut})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-8 ',
        offset: -200 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-8  .lipsum-circle-rotate", 0.5, {rotation: 360, scale: 1, ease: Back.easeOut})

            .addTo(scrollMagicController);



    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .loren1", 0.5, {left: "23%", opacity: 1, ease: Back.easeOut, delay: 1.3})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .loren2", 0.5, {left: "70%", opacity: 1, ease: Back.easeOut, delay: 1.5})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .array1", 0.5, {opacity: 1, top: '57%', left: '33%', delay: 1.0})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .array2", 0.5, {opacity: 1, top: '64%', left: '53%', delay: 0.5})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .array3", 0.5, {opacity: 1, top: '75%', left: '47%'})

            .addTo(scrollMagicController);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-2',
        offset: 50 /* offset the trigger 150px below #scene's top */
    })
            .setTween(".sec-2 .globe-lights", 0.5, {marginTop: '-8%', ease: Back.easeOut, delay: 2.0})

            .addTo(scrollMagicController);



});
            