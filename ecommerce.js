// selecting the elements.
const badge_count = document.querySelector('.count.badge');
const add_to_cart_button = document.querySelector('.svg-cart-button');
const minus_button = document.querySelector('.minus-sign');
const plus_button = document.querySelector('.plus-sign');
const result_count = document.querySelector('.count-result');
const button_cart = document.querySelector('.btn.btn-primary');
const modal_body = document.querySelector('.modal-body');
const main_image = document.querySelector('.products-scollable img');
const rate_final = document.querySelector('.final-rate');
const badge_hidden = document.querySelector('.visually-hidden');
const thumbnail_images = document.querySelectorAll('.thumbnail-images img');
const carousel_select = document.querySelector('#control_scroll');
const carousel_select1 = document.querySelector('#control_scroll1');
const cart_img = document.querySelector('.cart-click');
const main_carousel_item = document.querySelectorAll('#control_scroll .carousel-item');
const main_carousel_item1 = document.querySelectorAll('#control_scroll1 .carousel-item');
const modal_click = document.querySelector('#exampleModal1');
const new_modal_thumbnail = document.querySelectorAll('.checkset img');
const prev_icon = document.querySelector('#control_scroll1 .prev-icon');
const next_icon = document.querySelector('#control_scroll1 .next-icon');
const prev_svg = document.querySelectorAll('.prev-icon > svg');
const next_svg = document.querySelectorAll('.next-icon > svg');

// logic for modal-pop-up-click-desirable-image.

function mainModelExecution() { // working on two events 'slid.bs.carousel' and 'click'.

    main_carousel_item.forEach((image) => {

        main_carousel_item1.forEach((img) => {

            if (image.classList.contains('active')) {

                if (image.firstElementChild.src === img.firstElementChild.src) {

                    img.classList.add('active');
                }

                else {
                    img.classList.remove('active');

                };
            };
        });

    });

}


carousel_select.addEventListener('slid.bs.carousel', (evt) => { // arrow function.
    mainModelExecution();
});

carousel_select.addEventListener('click', (evt) => { // arrow function. // addtional listener if we scroll through the modal and exit.
    mainModelExecution();
});



// cart image color added
add_to_cart_button.lastElementChild.attributes.fill.value = `#fff`; // change the color of the cart button.

// apply default class to the first image.
thumbnail_images[0].classList.add('thumbnail-act');


// added data-attribute via JS and addtional options object using bootstrap.
var carousel = new bootstrap.Carousel(carousel_select, {
    pause: true, // option and value to be passed to stop ride.
});


var carousel_1 = new bootstrap.Carousel(carousel_select1, {
    pause: true, // option and value to be passed to stop ride.
});


// logic for the button to increase count.
plus_button.addEventListener('click', (evt) => {

    let calc = result_count.innerHTML;
    result_count.innerHTML = parseInt(calc) + 1;

});


// logic for the button to decrease count.
minus_button.addEventListener('click', (evt) => {

    let calc = result_count.innerHTML;
    if (parseInt(result_count.innerHTML) < 1) result_count.innerHTML = 0;
    else result_count.innerHTML = parseInt(calc) - 1;

});


// logic for the cart to display items.

button_cart.addEventListener('click', (evt) => { // arrow function.

    const tell_num = result_count.innerHTML;

    if (parseInt(tell_num) > 0) {

        const items = rate_final.innerHTML;
        const new_img = document.createElement('img');
        const button_new = document.createElement('button');
        new_img.src = `./images/icon-delete.svg`;
        new_img.setAttribute('alt', 'delete'); // new image attribute alt is set to value delete.
        modal_body.innerHTML = ``;
        modal_body.append(main_image.cloneNode()); // it has cloned the image.
        modal_body.append(`Fall Limited Edition Sneakers $125.00 x ${tell_num}  $${parseInt(items.slice(1, 4)) * tell_num}.00`);
        modal_body.append(new_img);
        modal_body.classList.add('grid-modal-body');
        button_new.innerHTML = `Checkout`;
        button_new.classList.add('button-modal', 'btn-primary-1');
        modal_body.append(button_new);
        badge_hidden.classList.remove('visually-hidden');
        badge_hidden.innerHTML = tell_num;


        new_img.addEventListener('click', (evt) => {

            modal_body.innerHTML = `Your cart is empty.`;
            modal_body.classList.remove('grid-modal-body');
            badge_hidden.classList.add('visually-hidden');

        });
    }

    else if (parseInt(tell_num) === 0) { // converting string datatype to number

        modal_body.innerHTML = `Your cart is empty.`;
        modal_body.classList.remove('grid-modal-body');
        badge_hidden.classList.add('visually-hidden');

    }

});


// avoid modal back-drop and error.

cart_img.addEventListener('click', (evt) => { // arrow function

    const genr_div = document.querySelector('.modal-backdrop');

    // null is an object aprt from being a pimitive type in JS.
    if (genr_div === null) return; // it returns nothing when this variable is null and stops execution of the function.


    else genr_div.setAttribute('class', 'modal-backdrop-1');

});



// added pop-up-attributes to main display image.

window.onload = check_screenWidth; // this is a method that would run this function automatically onload.


function run_main() {

    if (window.innerWidth <= 768) {

        main_carousel_item.forEach((image) => {

            image.removeAttribute('data-bs-toggle', 'modal');
            image.removeAttribute('data-bs-target', '#exampleModal1');

        });
    }

    else {

        main_carousel_item.forEach((image) => {

            image.setAttribute('data-bs-toggle', 'modal');
            image.setAttribute('data-bs-target', '#exampleModal1');

        });
    }
};


function check_screenWidth() {

    window.addEventListener('resize', (evt) => {
        run_main();
    })

    run_main();
};



function check_thumbnail(evt, item_1, item_2, item_3) { // this is the parameters that it accepts.

    evt.target.classList.add('thumbnail-act');

    thumbnail_images[item_1].classList.remove('thumbnail-act');
    thumbnail_images[item_2].classList.remove('thumbnail-act');
    thumbnail_images[item_3].classList.remove('thumbnail-act');

};


thumbnail_images.forEach((image) => {

    image.addEventListener('click', (evt) => {

        const main = evt.target.src;

        if (main === thumbnail_images[0].src) {
            check_thumbnail(evt, 1, 2, 3); // execute the function here with the arguments.
        }

        else if (main === thumbnail_images[1].src) {
            check_thumbnail(evt, 2, 3, 0);
        }

        else if (main === thumbnail_images[2].src) {
            check_thumbnail(evt, 1, 3, 0);
        }

        else if (main === thumbnail_images[3].src) {
            check_thumbnail(evt, 1, 2, 0);
        }
    })
});



function modal_pop_up(modal, add, first, second, third, class1) {

    modal[add].classList.add(class1);
    modal[first].classList.remove(class1);
    modal[second].classList.remove(class1);
    modal[third].classList.remove(class1);

}


function chainIn(image) {

    image.addEventListener('click', (evt) => {

        if (evt.target.src === new_modal_thumbnail[0].firstElementChild.src) {
            modal_pop_up(new_modal_thumbnail, 0, 1, 2, 3, 'thumbnail-act');
        }

        else if (evt.target.src === new_modal_thumbnail[1].firstElementChild.src) {
            modal_pop_up(new_modal_thumbnail, 1, 0, 2, 3, 'thumbnail-act');
        }

        else if (evt.target.src === new_modal_thumbnail[2].firstElementChild.src) {
            modal_pop_up(new_modal_thumbnail, 2, 1, 0, 3, 'thumbnail-act');
        }

        else if (evt.target.src === new_modal_thumbnail[3].firstElementChild.src) {
            modal_pop_up(new_modal_thumbnail, 3, 1, 2, 0, 'thumbnail-act');
        }

    });

};


function image_pass_on() {

    thumbnail_images.forEach((image) => {
        chainIn(image);
    });

}

image_pass_on();



function check_thumbnail_1(evt, item_1, item_2, item_3) { // this is the parameters that it accepts.

    evt.target.classList.add('thumbnail-act');

    new_modal_thumbnail[item_1].classList.remove('thumbnail-act');
    new_modal_thumbnail[item_2].classList.remove('thumbnail-act');
    new_modal_thumbnail[item_3].classList.remove('thumbnail-act');

};


new_modal_thumbnail.forEach((image) => {

    image.addEventListener('click', (evt) => {

        if (evt.target.src === new_modal_thumbnail[0].src) {
            check_thumbnail_1(evt, 1, 2, 3);
        }

        else if (evt.target.src === new_modal_thumbnail[1].src) {
            check_thumbnail_1(evt, 0, 2, 3);
        }

        else if (evt.target.src === new_modal_thumbnail[2].src) {
            check_thumbnail_1(evt, 1, 0, 3);
        }

        else if (evt.target.src === new_modal_thumbnail[3].src) {
            check_thumbnail_1(evt, 1, 2, 0);
        }

    });

});


function icon_handler(thumbnail, number, rem_1, rem_2, rem_3, classlist) {

    thumbnail[number].classList.add(classlist);
    thumbnail[rem_1].classList.remove(classlist);
    thumbnail[rem_2].classList.remove(classlist);
    thumbnail[rem_3].classList.remove(classlist);
}


function conditionalsIcon(...arr) { // rest params used to collect data in the form of array.

    const [a, b, c, d] = arr;

    const carousel = main_carousel_item1;
    const modalimg = new_modal_thumbnail;

    if (carousel[a].classList.contains('active')) {
        icon_handler(modalimg, 0, 2, 3, 1, 'thumbnail-act');
    }

    else if (carousel[b].classList.contains('active')) {
        icon_handler(modalimg, 1, 0, 2, 3, 'thumbnail-act');
    }

    else if (carousel[c].classList.contains('active')) {
        icon_handler(modalimg, 2, 1, 0, 3, 'thumbnail-act');
    }

    else if (carousel[d].classList.contains('active')) {
        icon_handler(modalimg, 3, 1, 2, 0, 'thumbnail-act');
    }

}


function icon_listners(icon1, icon2, function1, function2) {
    icon1.addEventListener('click', function1);
    icon2.addEventListener('click', function2);
}

icon_listners(prev_icon, next_icon, prev_func, next_func);

function prev_func() {
    conditionalsIcon(1, 2, 3, 0);
}

function next_func() {
    conditionalsIcon(3, 0, 1, 2);
}



