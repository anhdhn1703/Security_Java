document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy tất cả các phần tử card bên trong pack_cont
    var cards = document.querySelectorAll('#pack_cont .card');
    var totalCards = cards.length;
    var onlyMobileCount = 44;

    // Tạo danh sách ngẫu nhiên gồm 22 chỉ mục (index) của các card sẽ được gán class 'only_mobile'
    let indexesToAssignOnlyMobile = new Set();
    while (indexesToAssignOnlyMobile.size < onlyMobileCount) {
        indexesToAssignOnlyMobile.add(Math.floor(Math.random() *
            totalCards));
    }

    // Lặp qua tất cả các phần tử card và gán class tương ứng
    cards.forEach((card, index) => {
        if (indexesToAssignOnlyMobile.has(index)) {
            card.classList.add('only_mobile');
            // $("." + class_cards).addClass("no-pointer-events");
            card.classList.add('no-pointer-events');
        } else {
            card.classList.add('hide_mobile');
            card.classList.add('no-pointer-events');
        }
    });
});

if (window.innerWidth >= 768) {
    // Nếu độ rộng >= 768px thì coi là PC
    var class_cards = "card";
} else {
    // Nếu độ rộng < 768px thì coi là mobile


    var class_cards = "only_mobile";
}

var card_container_width = $("#pack_cont").width();

console.log('width: ', card_container_width);


var total_cards = $("." + class_cards).length; //any number of cards will work
var count_labai = 0;

if (window.innerWidth >= 768) {
    // Nếu độ rộng >= 768px thì coi là PC
    var card_spacing = 8.5;
} else {
    // Nếu độ rộng < 768px thì coi là mobile
    var card_spacing = 3.6;

}


//shuffle plugin
(function ($) {
    $.fn.shuffle = function () {
        var allElems = this.get(),
            getRandom = function (max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function () {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function (i) {
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
    };
})(jQuery);
//shuffle plugin

//bring cards to initail stacked position
function reset_cards() {
    console.log('Vào reset');
    //hide all cards faces
    $("." + class_cards).removeClass("open");
    //stack all cards
    stack_cards(0.2);
    //close all cards
    close_all_cards();
    //remove any rotation
    animate_card(0);
}

//stacks all card with a relative margin, to give a 3d effect
function stack_cards(margin) {
    console.log('Vào stack');
    var left = 0;
    var step = margin;
    var i = 0;
    $("." + class_cards).each(function () {
        $(this).css({
            "z-index": i
        });
        $(this).css({
            "margin-left": left + "px"
        });
        $(this).css({
            "margin-top": 0 + "px"
        });
        left = left + step;
        i++;
    });
}

//rotate all cards to a specific degree
//rotates all card from 0 to deg range
function animate_card(deg) {
    var start = 0;
    var end = deg;
    var step = deg / total_cards;
    var angle = 0;
    $("." + class_cards).each(function () {
        $(this).css({
            transform: "rotate(" + angle + "deg)",
            "-webkit-transform": "rotate(" + angle + "deg)",
            "-moz-transform": "rotate(" + angle + "deg)",
            "-ms-transform": "rotate(" + angle + "deg)",
        });
        angle += step;
    });
}

//seprates all cards instantly, row wise
function separate_instantly() {
    var left = 0;
    var top = 0;
    var card_width = $("." + class_cards).width();
    var card_height = $("." + class_cards).height();
    var left_step = card_width + card_spacing;

    var max_cards_in_row = Math.floor((card_container_width + card_spacing) /
        left_step);
    // console.log('max_cards_in_row: ', max_cards_in_row);

    var left = (card_container_width - left_step * max_cards_in_row) / 2;

    $("." + class_cards).each(function () {
        $(this).css({
            "margin-top": top + "px",
            "margin-left": left + "px",
        });
        left = left + left_step;
        if (left + card_width + card_spacing > card_container_width) {
            left = (card_container_width - left_step *
                max_cards_in_row) / 2;
            top += card_height + card_spacing;
        }
    });
}


//show all card
function open_all_cards() {
    $("." + class_cards).addClass("open");
    setTimeout(function () {
        $("." + class_cards).addClass("opened");
    }, 300);
}

//hide all card faces
function close_all_cards() {
    $("." + class_cards).removeClass("open");
    setTimeout(function () {
        $("." + class_cards).removeClass("opened");
    }, 300);
}

var madness_interval;
//do random things
function random_things() {
    separate_one_by_one();
    setTimeout(function () {
        separate_instantly();
        setTimeout(function () {
            open_all_cards();
            animate_card(Math.random() * 4000);
            setTimeout(function () {
                close_all_cards();
            }, Math.random() * 2400);
        }, Math.random() * 300);
    }, Math.random() * 3000);
}

function shuffle(o) {
    //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--
            i], o[i] = o[j], o[j] = x);
    return o;
}

//slowly separate all cards in a line
function separate_one_by_one() {
    return new Promise((resolve) => {
        var left = 0;
        var card_width = $("." + class_cards).width();
        var card_height = $("." + class_cards).height();
        //initial top margin for card placement
        //initial left margin for card placement


        if (window.innerWidth >= 768) {
            // Nếu độ rộng >= 768px thì coi là PC
            var left_step = card_width / 7.5 + card_spacing;
            var top = card_height + 100;
        } else {
            // Nếu độ rộng < 768px thì coi là mobile
            var left_step = card_width / 5.5 + card_spacing;
            var top = card_height + 70;
        }

        var index = 0;

        //time lag between each card placement
        var sec_step = 100;
        var time = 0;

        //loop through all cards
        $("." + class_cards).each(function () {
            var card = $(this);
            card.css({
                "z-index": index,
            });
            setTimeout(function () {
                card.css({
                    "margin-top": top + "px",
                    "margin-left": left + "px",
                });

                left = left + left_step;
                //if card cannot fit in current row then place it card in next row
                if (left + card_width + card_spacing >
                    card_container_width) {
                    left = 0;
                    top += card_height + card_spacing;
                }
            }, time);
            //add time lag for next card placement
            time += sec_step;
            index++;
        });
        setTimeout(() => {
            // console.log("Shuffle cards function completed.");
            resolve();
        }, 3200);
    });
}

function shuffle_cards() {
    return new Promise((resolve) => {
        //shuffle all cards in DOM
        count_labai = 0;
        $("." + class_cards).shuffle();
        //Them random role = 1 hoac 0 vao;
        var List_elementCard = document.getElementsByClassName('card');
        // console.log(List_elementCard);

        for (var k = 0; k < List_elementCard.length; k++) {
            // Random 
            let randomNumber = Math.floor(Math.random() * 2);
            List_elementCard[k].setAttribute("role", randomNumber);
            // Thêm class nếu role là 1
            if (randomNumber === 1) {
                List_elementCard[k].classList.add('rotateX');
            } else {
                List_elementCard[k].classList.remove('rotateX');
            }
        }
        //create shuffle effect(just to show it to user)
        var i = 0;
        var time = 0;
        var shuffle_time = 10;
        var counter = 0;

        $($("." + class_cards).get().reverse()).each(function () {
            var card = $(this);
            setTimeout(function () {
                card.animate({
                    "margin-left": "180px"
                }, 1);
                card.animate({
                    "z-index": i
                });
                setTimeout(function () {
                    //card.animate({ 'z-index' : i });
                    card.animate({
                        "margin-left": "0px"
                    }, 20);
                }, 200);
                i++;
            }, time);

            time += 200;
            counter++;
            //limit shuffle to specific no of times.
            if (counter > shuffle_time) return false;
        });

        setTimeout(() => {
            // console.log("Shuffle cards function completed.");
            resolve();
        }, 3200);
        reset_cards();
    });
}

// function shuffleAndSeparate() {
//     shuffle_cards().then(separate_one_by_one);
// }
function shuffleAndSeparate() {
    // Add the no-pointer-events class to disable interactions
    var div_huonngdan = $("#pack_cont_huongdan");
    div_huonngdan.css("display", "none");


    // $("." + class_cards).addClass("no-pointer-events");

    shuffle_cards().then(() => {
        reset_cards();
        separate_one_by_one();
        // Remove the no-pointer-events class after separation is complete
        setTimeout(() => {
            $("." + class_cards).removeClass(
                "no-pointer-events");
        }, 1000 + 100 * $("." + class_cards).length);
    });
}
// var card_container_width = 330;
// var card_spacing = 5;
// var count_max = 5;

$(document).ready(function () {
    stack_cards(0.2);
    //shufle_cards();
    var count_max = 3;
    var card_width = $("." + class_cards).width();
    var card_height = $("." + class_cards).height();
    var left = (card_container_width - (card_width + card_spacing) *
        count_max) / 2;
    var top = 50;
    // console.log('left', left);
    // console.log('card_container_width', card_container_width);
    // console.log('card_width', card_width);
    // console.log('card_spacing', card_spacing);
    //card click event
    var class_card = '';
    $("." + class_cards).click(function () {
        if (count_labai < count_max) {
            count_labai++;

            // Tính toán left ban đầu khi count_labai = 1
            if (count_labai === 1) {
                left = (card_container_width - (card_width +
                    card_spacing) * count_max) / 2;
            }

            // Thêm class tương ứng dựa trên count_labai
            if (count_labai === 1) {
                $(this).addClass("one");
            } else if (count_labai === 2) {
                $(this).addClass("two");
            } else if (count_labai === 3) {
                $(this).addClass("three");
            }
            $(this).addClass('no-pointer-events');


            // Lưu lại đối tượng card
            var card = $(this);

            // Thiết lập margin-top và margin-left mới cho card
            setTimeout(function () {
                card.css({
                    "margin-top": top,
                    "margin-left": left,
                });
            }, 100);

            // Thêm và loại bỏ class để thực hiện hiệu ứng toggle
            setTimeout(function () {
                card.toggleClass("open");
            }, 100);
            setTimeout(function () {
                card.toggleClass("opened");
            }, 500);
            // console.log('left-1', left);
            // Cập nhật giá trị left cho lần click tiếp theo
            if (count_labai == 1) {
                left = left;
            } else {
                left = left + card_width + card_spacing;
            }
            // console.log('left-2', left);

        }
    });

    //the game
});