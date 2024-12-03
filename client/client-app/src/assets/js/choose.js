document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần điều khiển
    var selectChuDe = document.getElementById("chu_de");
    var selectCauHoi = document.getElementById("cau_hoi");
    var textHuongDan = document.getElementById('text-huong-dan');
    var num_tarot = document.getElementById('num_tarot');

    textHuongDan.textContent = "Hãy chọn chủ đề Tarot";
    var buttonXaoBai = document.getElementById(
    'btn-xaobaii'); // Thay 'your-button-id' bằng ID của button cụ thể
    num_tarot.textContent = "1";

    // Xử lý khi người dùng chọn chủ đề Tarot
    selectChuDe.onchange = function () {
        updateCauHoi();
        if (selectChuDe.value === "") {
            textHuongDan.textContent = "Hãy chọn chủ đề Tarot";
            num_tarot.textContent = "1";

            buttonXaoBai.setAttribute('disabled', 'disabled');
        } else {
            // Khi đã chọn chủ đề, kiểm tra câu hỏi
            if (selectCauHoi.value === "") {
                textHuongDan.textContent =
                    "Hãy chọn câu hỏi theo chủ đề Tarot";
                num_tarot.textContent = "2";

                buttonXaoBai.setAttribute('disabled', 'disabled');

            } else {
                textHuongDan.textContent = "Hãy xào bài";
                num_tarot.textContent = "3";

                buttonXaoBai.removeAttribute('disabled');
            }
        }
    };

    // Xử lý khi người dùng chọn câu hỏi Tarot
    selectCauHoi.onchange = function () {
        if (selectChuDe.value === "") {
            textHuongDan.textContent = "Hãy chọn chủ đề Tarot";
            num_tarot.textContent = "1";

            buttonXaoBai.setAttribute('disabled', 'disabled');
        } else {
            // Khi đã chọn chủ đề, kiểm tra câu hỏi
            if (selectCauHoi.value === "") {
                textHuongDan.textContent =
                    "Hãy chọn câu hỏi theo chủ đề Tarot";
                num_tarot.textContent = "2";

                buttonXaoBai.setAttribute('disabled', 'disabled');
            } else {
                textHuongDan.textContent = "Hãy xào bài";
                num_tarot.textContent = "3";

                // Lấy đối tượng button
                // Loại bỏ thuộc tính disabled
                buttonXaoBai.removeAttribute('disabled');
            }
        }
    };

    buttonXaoBai.addEventListener("click", function () {
        buttonXaoBai.setAttribute('disabled', 'disabled');
        var boitarot_1 = document.getElementById("boitarot-1");
        boitarot_1.style.display = "none";

        var boitarot_2 = document.getElementById("boitarot-2");
        boitarot_2.style.display = "none";


        var boitarot_3 = document.getElementById("boitarot-3");
        boitarot_3.style.display = "none";


        var selectElementChude = document.getElementById(
            "chu_de");
        var selectedValueChude = selectElementChude.value;
        console.log("Chủ đề đã chọn: " + selectedValueChude);

        var selectElementcau_hoi = document.getElementById(
            "cau_hoi");
        var selectedValuecau_hoi = selectElementcau_hoi.value;
        console.log("Câu hỏi đã chọn: " + selectedValuecau_hoi);

        var concatenatedHTML = "";
        concatenatedHTML +=
            `<p id="cauhoi_text" class ="cauhoi_text"> ${selectedValuecau_hoi}</p>`;
        concatenatedHTML +=
            `<p id="chude_text" class="chude_text">${selectedValueChude}</p>`;
        concatenatedHTML +=
            `<div class="img_text"><img decoding="async" src="/tarot-card/title-deco.svg"></div>`;
        document.getElementById("id-danh-muc-tarot").innerHTML =
            concatenatedHTML;
        document.getElementById("id-danh-muc-tarot").classList
            .add("pack_toShow");


        textHuongDan.textContent = "Đang xào bài...";
        num_tarot.textContent = "4";


        if (window.innerWidth >= 768) {
            setTimeout(() => {
                textHuongDan.textContent =
                    "Hãy chọn 3 lá bài";
                num_tarot.textContent = "5";

            }, 11000);
        } else {
            setTimeout(() => {
                textHuongDan.textContent =
                    "Hãy chọn 3 lá bài";
                num_tarot.textContent = "5";

            }, 8000);
        }
    });

    var labaiconlai = 3;
    var l_labai = 0;
    $("." + class_cards).click(function () {
        l_labai++;
        var tong_labaiconlai = labaiconlai - l_labai;
        if (tong_labaiconlai <= 0) {
            setTimeout(() => {
                $("#pack_cont").addClass(
                    "pack_contopened");

                textHuongDan.textContent =
                    "Xem ý nghĩa các lá bài đã chọn";
                num_tarot.textContent = "6";

                // Lấy tất cả các thẻ card trong pack_cont
                const cards = document.querySelectorAll(
                    '#pack_cont .card');

                // Lặp qua từng thẻ card và kiểm tra xem có class open/opened hay không
                cards.forEach(card => {
                    if (!card.classList
                        .contains('open') && !
                        card.classList.contains(
                            'opened')) {
                        card.classList.add(
                            'hidden'
                            ); // Thêm class hidden để áp dụng hiệu ứng mờ dần và ẩn thẻ
                        setTimeout(() => {
                            card.style
                                .display =
                                'none'; // Sau khi mờ dần xong, ẩn thẻ đi
                        },
                        300); // Thời gian 300ms tương đương với transition time
                    } else if (card.classList
                        .contains('opened')) {


                        const role_text = card
                            .getAttribute(
                                "role");

                        var nameValue = card
                            .getAttribute(
                                'name'); // Lấy giá trị của thuộc tính name
                        if (role_text == "1") {
                            nameValue =
                                nameValue +
                                ' <span class="motabai">(LÁ BÀI NGƯỢC)</span>';
                        }
                        var p = document
                            .createElement(
                            'p'); // Tạo phần tử p mới
                        p.innerHTML =
                        nameValue; // Đặt nội dung của thẻ p là giá trị của thuộc tính name (có thể chứa HTML)
                        card.appendChild(
                        p); // Thêm thẻ p vào bên trong thẻ div

                        // Thiết lập margin-left dựa trên class của card
                        const computedStyle =
                            window
                            .getComputedStyle(
                                card);
                        let currentMarginLeft =
                            parseFloat(
                                computedStyle
                                .marginLeft);

                        if (window.innerWidth >=
                            768) {
                            card.style.width =
                                '134px'; // Thiết lập width
                            card.style.height =
                                '235px'; // Thiết lập height
                            if (card.classList
                                .contains('one')
                                ) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft -
                                        70) +
                                    'px';
                            } else if (card
                                .classList
                                .contains('two')
                                ) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft -
                                        15) +
                                    'px';
                            } else if (card
                                .classList
                                .contains(
                                    'three')) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft +
                                        40) +
                                    'px';
                            }
                        } else {
                            card.style.width =
                                '106px'; // Thiết lập width
                            card.style.height =
                                '178px'; // Thiết lập height
                            if (card.classList
                                .contains('one')
                                ) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft -
                                        75) +
                                    'px';
                            } else if (card
                                .classList
                                .contains('two')
                                ) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft -
                                        20) +
                                    'px';
                            } else if (card
                                .classList
                                .contains(
                                    'three')) {
                                card.style
                                    .marginLeft =
                                    (currentMarginLeft +
                                        30) +
                                    'px';
                            }
                        }

                        // $("."+class_cards).addClass("no-pointer-events"); // ko cho tác động vào bài

                        var submitDiv = $(
                            ".bo-tarot-hoa-submit"
                            );
                        setTimeout(() => {
                            submitDiv
                                .css({
                                    "display": "flex",
                                    "opacity": 0,
                                    "transition": "opacity 2s"
                                });
                            submitDiv
                                .css(
                                    "opacity",
                                    1
                                    ); // Thay đổi opacity để hiển thị phần tử rõ dần
                        }, 1000);
                    }
                });

            }, 1000);

        } else {
            textHuongDan.textContent = "Hãy chọn " +
                tong_labaiconlai + " lá bài còn lại";
        }
    });
});

function updateCauHoi() {

    var chude_js = document.getElementById('chu_de');
    var cauhoi_js = document.getElementById('cau_hoi');

    // Xóa tất cả các tùy chọn hiện có trong cau_hoi
    cauhoi_js.innerHTML = "<option value=''>Chọn câu hỏi</option>";

    // Lấy giá trị chủ đề đã chọn
    var selectedChude = chude_js.value;

    // Thêm tùy chọn cho câu hỏi dựa trên chủ đề được chọn
    if (selectedChude === 'Tình cảm của người yêu cũ') {
        var newOption = document.createElement('option');
        newOption.value =
            'Tình cảm quá khứ của người yêu cũ dành cho tôi?';
        newOption.text =
            'Tình cảm quá khứ của người yêu cũ dành cho tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tình cảm hiện tại của người yêu cũ dành cho tôi?';
        newOption.text =
            'Tình cảm hiện tại của người yêu cũ dành cho tôi?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Người yêu cũ') {
        var newOption = document.createElement('option');
        newOption.value = 'Suy nghĩ của người yêu cũ về việc quay lại?';
        newOption.text = 'Suy nghĩ của người yêu cũ về việc quay lại?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Kết quả tốt nhất cho mối quan hệ giữa tôi và người yêu cũ tôi?';
        newOption.text =
            'Kết quả tốt nhất cho mối quan hệ giữa tôi và người yêu cũ tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên cho mối quan hệ của tôi và người yêu cũ trong thời gian tới?';
        newOption.text =
            'Lời khuyên cho mối quan hệ của tôi và người yêu cũ trong thời gian tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Có nên đi chơi với người yêu cũ không?';
        newOption.text = 'Có nên đi chơi với người yêu cũ không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Mối quan hệ hiện tại') {
        var newOption = document.createElement('option');
        newOption.value =
            'Tình cảm của người yêu tôi dành cho tôi như thế nào?';
        newOption.text =
            'Tình cảm của người yêu tôi dành cho tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Kỳ vọng của người yêu tôi dành cho mối quan hệ của chúng tôi như thế nào?';
        newOption.text =
            'Kỳ vọng của người yêu tôi dành cho mối quan hệ của chúng tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Suy nghĩ của người yêu tôi trong mối quan hệ của chúng tôi là gì?';
        newOption.text =
            'Suy nghĩ của người yêu tôi trong mối quan hệ của chúng tôi là gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Trở ngại trong mối quan hệ giữa tôi và người yêu tôi là gì?';
        newOption.text =
            'Trở ngại trong mối quan hệ giữa tôi và người yêu tôi là gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên cho mối quan hệ của tôi và người yêu tôi trong thời gian tới?';
        newOption.text =
            'Lời khuyên cho mối quan hệ của tôi và người yêu tôi trong thời gian tới?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Mối quan hệ mập mờ') {
        var newOption = document.createElement('option');
        newOption.value =
            'Tình cảm của người có mối quan hệ mập mờ với tôi như thế nào?';
        newOption.text =
            'Tình cảm của người có mối quan hệ mập mờ với tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Kỳ vọng của người có mối quan hệ mập mờ với tôi như thế nào?';
        newOption.text =
            'Kỳ vọng của người có mối quan hệ mập mờ với tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Suy nghĩ của người có mối quan hệ mập mờ với tôi như thế nào?';
        newOption.text =
            'Suy nghĩ của người có mối quan hệ mập mờ với tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Kết quả tốt nhấ́t cho mối quan hệ giữa tôi và người có mối quan hệ mập mờ với tôi là gì?';
        newOption.text =
            'Kết quả tốt nhấ́t cho mối quan hệ giữa tôi và người có mối quan hệ mập mờ với tôi là gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên cho mối quan hệ giữa tôi và người có mối quan hệ mập mờ với tôi là gì?';
        newOption.text =
            'Lời khuyên cho mối quan hệ giữa tôi và người có mối quan hệ mập mờ với tôi là gì?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Crush') {
        var newOption = document.createElement('option');
        newOption.value = 'Crush của tôi là người như thế nào?';
        newOption.text = 'Crush của tôi là người như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Người tôi đang thích có đang chú ý đến tôi không?';
        newOption.text =
            'Người tôi đang thích có đang chú ý đến tôi không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tương lai giữa tôi và crush của tôi sẽ như thế nào?';
        newOption.text =
            'Tương lai giữa tôi và crush của tôi sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Crush của tôi có đang để ý đến 1 người khác không?';
        newOption.text =
            'Crush của tôi có đang để ý đến 1 người khác không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên để phát triển mối quan hệ giữa tôi và crush?';
        newOption.text =
            'Lời khuyên để phát triển mối quan hệ giữa tôi và crush?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói bài tarot ai đang yêu thầm bạn?';
        newOption.text = 'Bói bài tarot ai đang yêu thầm bạn?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem tarot có bao nhiêu người thích bạn?';
        newOption.text = 'Xem tarot có bao nhiêu người thích bạn?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Mối quan hệ cũ') {
        var newOption = document.createElement('option');
        newOption.value =
            'Người trong mối quan hệ cũ đang cảm thấy như thế nào ở thời điểm hiện tại?';
        newOption.text =
            'Người trong mối quan hệ cũ đang cảm thấy như thế nào ở thời điểm hiện tại?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Người trong mối quan hệ cũ suy nghĩ gì về tôi?';
        newOption.text = 'Người trong mối quan hệ cũ suy nghĩ gì về tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Người trong mối quan hệ cũ suy nghĩ gì về mối quan hệ của chúng tôi?';
        newOption.text =
            'Người trong mối quan hệ cũ suy nghĩ gì về mối quan hệ của chúng tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Bản chất của mối quan hệ cũ trong quá khứ là như thế nào?';
        newOption.text =
            'Bản chất của mối quan hệ cũ trong quá khứ là như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên dành cho mối quan hệ giữa tôi và người có mối quan hệ cũ với tôi là gì?';
        newOption.text =
            'Lời khuyên dành cho mối quan hệ giữa tôi và người có mối quan hệ cũ với tôi là gì?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Quay lại với mối quan hệ cũ') {
        var newOption = document.createElement('option');
        newOption.value = 'Tình cảm của mối quan hệ cũ dành cho tôi?';
        newOption.text = 'Tình cảm của mối quan hệ cũ dành cho tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Mối quan hệ cũ có mong muốn gắn kết lại mối quan hệ giữa chúng tôi không?';
        newOption.text =
            'Mối quan hệ cũ có mong muốn gắn kết lại mối quan hệ giữa chúng tôi không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Có khả năng quay lại của mối quan hệ giữa tôi và người có mối quan hệ cũ với tôi không?';
        newOption.text =
            'Có khả năng quay lại của mối quan hệ giữa tôi và người có mối quan hệ cũ với tôi không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Sau khi quay lại, tôi và người có mối quan hệ cũ này sẽ như thế nào?';
        newOption.text =
            'Sau khi quay lại, tôi và người có mối quan hệ cũ này sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Người yêu tương lai') {
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có thể gặp người mình thích trong khoảng thời gian nào?';
        newOption.text =
            'Tôi có thể gặp người mình thích trong khoảng thời gian nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Người yêu tương lai của tôi có ngoại hình như thế nào như thế nào?';
        newOption.text =
            'Người yêu tương lai của tôi có ngoại hình như thế nào như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Người yêu tương lai của tôi sẽ đối xử với tôi như thế nào?';
        newOption.text =
            'Người yêu tương lai của tôi sẽ đối xử với tôi như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Mối quan hệ của tôi và người yêu tương lai sẽ đem đến cho tôi bài học gì?';
        newOption.text =
            'Mối quan hệ của tôi và người yêu tương lai sẽ đem đến cho tôi bài học gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tổng quan mối quan hệ của tôi và người yêu tương lai sẽ như thế nào?';
        newOption.text =
            'Tổng quan mối quan hệ của tôi và người yêu tương lai sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói tarot chồng tương lai làm nghề gì?';
        newOption.text = 'Xem bói tarot chồng tương lai làm nghề gì?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Giải quyết xung đột') {
        var newOption = document.createElement('option');
        newOption.value =
        'Tôi có thể chủ động giải quyết xung đột trước không?';
        newOption.text = 'Tôi có thể chủ động giải quyết xung đột trước không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Điều gì giúp tôi hiểu rằng tôi không thể thay đổi được người xung đột với tôi?';
        newOption.text =
            'Điều gì giúp tôi hiểu rằng tôi không thể thay đổi được người xung đột với tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi sẽ thấy gì khi ở góc nhìn của người xung đột với tôi?';
        newOption.text =
            'Tôi sẽ thấy gì khi ở góc nhìn của người xung đột với tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
        'Tôi có nên tha thứ cho người xung đột với tôi không?';
        newOption.text = 'Tôi có nên tha thứ cho người xung đột với tôi không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi và người xung đột với tôi có thể chấp nhận những bất đồng không?';
        newOption.text =
            'Tôi và người xung đột với tôi có thể chấp nhận những bất đồng không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Kết quả của cuộc xung đột gần đây của tôi và lời khuyên dành cho tôi?';
        newOption.text =
            'Kết quả của cuộc xung đột gần đây của tôi và lời khuyên dành cho tôi?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Tài chính') {
        var newOption = document.createElement('option');
        newOption.value =
            'Cơ hội tài chính của tôi trong khoảng thời gian tới?';
        newOption.text =
            'Cơ hội tài chính của tôi trong khoảng thời gian tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên cho tôi trong quản lý tài chính khoản thời gian sắp tới?';
        newOption.text =
            'Lời khuyên cho tôi trong quản lý tài chính khoản thời gian sắp tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tình hình tài chính của tôi trong 3 tháng tới?';
        newOption.text = 'Tình hình tài chính của tôi trong 3 tháng tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Mục tiêu tài chính mà tôi đề ra có đạt kết quả như mong muốn?';
        newOption.text =
            'Mục tiêu tài chính mà tôi đề ra có đạt kết quả như mong muốn?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tôi có người giúp đỡ về tài chính hay không?';
        newOption.text = 'Tôi có người giúp đỡ về tài chính hay không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
        'Điều gì đang là trở ngại tài chính lớn nhất của tôi?';
        newOption.text = 'Điều gì đang là trở ngại tài chính lớn nhất của tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tôi nên làm gì để có thể chi tiêu một cách hợp lí?';
        newOption.text = 'Tôi nên làm gì để có thể chi tiêu một cách hợp lí?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Học tập') {
        var newOption = document.createElement('option');
        newOption.value = 'Ưu điểm và khuyết điểm của tôi trong học tập?';
        newOption.text = 'Ưu điểm và khuyết điểm của tôi trong học tập?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi cần khắc phục và phát triển bản thân như thế nào để học tập tốt hơn?';
        newOption.text =
            'Tôi cần khắc phục và phát triển bản thân như thế nào để học tập tốt hơn?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Cần lưu ý gì về việc học tập trong khoảng thời gian sắp tới?';
        newOption.text =
            'Cần lưu ý gì về việc học tập trong khoảng thời gian sắp tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
        'Tổng quan việc học tập của tôi ở thời điểm hiện tại?';
        newOption.text = 'Tổng quan việc học tập của tôi ở thời điểm hiện tại?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tổng quan việc học tập trong 3 tháng tới?';
        newOption.text = 'Tổng quan việc học tập trong 3 tháng tới?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi sẽ có kết quả cao trong kì thi/ bài thi sắp tới không?';
        newOption.text =
            'Tôi sẽ có kết quả cao trong kì thi/ bài thi sắp tới không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có đạt được nguyện vọng học tập như tôi mong muốn không?';
        newOption.text =
            'Tôi có đạt được nguyện vọng học tập như tôi mong muốn không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Công việc') {
        var newOption = document.createElement('option');
        newOption.value =
            'Trong thời gian 3 tháng tới, tôi có kiếm được công việc nào không, lời khuyên khi đi xin việc?';
        newOption.text =
            'Trong thời gian 3 tháng tới, tôi có kiếm được công việc nào không, lời khuyên khi đi xin việc?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Công việc tôi đang xin có những khó khăn gì?';
        newOption.text = 'Công việc tôi đang xin có những khó khăn gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Điểm mạnh của tôi trong lần xin việc này?';
        newOption.text = 'Điểm mạnh của tôi trong lần xin việc này?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Điểm yếu của tôi trong lần xin việc này?';
        newOption.text = 'Điểm yếu của tôi trong lần xin việc này?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Môi trường làm việc mới sẽ như thế nào?';
        newOption.text = 'Môi trường làm việc mới sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Lời khuyên cho tôi về công việc mới sắp tới?';
        newOption.text = 'Lời khuyên cho tôi về công việc mới sắp tới?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Môi trường làm việc mới') {
        var newOption = document.createElement('option');
        newOption.value =
            'Đồng nghiệp của tôi ở môi trường làm việc mới như thế nào?';
        newOption.text =
            'Đồng nghiệp của tôi ở môi trường làm việc mới như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Ở trong môi trường làm việc mới sẽ đem lại cho tôi những điều gì?';
        newOption.text =
            'Ở trong môi trường làm việc mới sẽ đem lại cho tôi những điều gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Khó khăn khi ở trong môi trường làm việc mới của tôi là gì?';
        newOption.text =
            'Khó khăn khi ở trong môi trường làm việc mới của tôi là gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có làm việc lâu dài tại môi trường làm việc mới không?';
        newOption.text =
            'Tôi có làm việc lâu dài tại môi trường làm việc mới không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Định hướng công việc') {
        var newOption = document.createElement('option');
        newOption.value =
            'Thực trạng tình hình công việc ở hiện tại có tốt không?';
        newOption.text =
            'Thực trạng tình hình công việc ở hiện tại có tốt không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Công việc trong tương lai của tôi 3 tháng tới sẽ như thế nào?';
        newOption.text =
            'Công việc trong tương lai của tôi 3 tháng tới sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lưu ý để phát triển công việc của tôi trong tương lai là gì?';
        newOption.text =
            'Lưu ý để phát triển công việc của tôi trong tương lai là gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Lời khuyên để phát triển công việc của tôi trong tương lai?';
        newOption.text =
            'Lời khuyên để phát triển công việc của tôi trong tương lai?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có nên chuyển chỗ làm không, lời khuyên dành cho tôi về việc này?';
        newOption.text =
            'Tôi có nên chuyển chỗ làm không, lời khuyên dành cho tôi về việc này?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Sức khỏe') {
        var newOption = document.createElement('option');
        newOption.value =
            'Tình hình sức khỏe của tôi trong thời gian tới như thế nào?';
        newOption.text =
            'Tình hình sức khỏe của tôi trong thời gian tới như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Điều gì đang là cản trở đối với sức khoẻ của tôi?';
        newOption.text = 'Điều gì đang là cản trở đối với sức khoẻ của tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi nên thực hiện những thay đổi gì đối với lối sống hiện tại của mình?';
        newOption.text =
            'Tôi nên thực hiện những thay đổi gì đối với lối sống hiện tại của mình?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi đang bỏ qua những vấn đề hiện tại nào liên quan đến sức khỏe của mình?';
        newOption.text =
            'Tôi đang bỏ qua những vấn đề hiện tại nào liên quan đến sức khỏe của mình?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
        'Tôi có đang bảo vệ sức khoẻ của mình sai cách không?';
        newOption.text = 'Tôi có đang bảo vệ sức khoẻ của mình sai cách không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tôi nên làm gì để tăng năng lượng của mình?';
        newOption.text = 'Tôi nên làm gì để tăng năng lượng của mình?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Gia đình') {
        var newOption = document.createElement('option');
        newOption.value =
        'Thời gian tới gia đình tôi có gặp khó khăn gì không?';
        newOption.text = 'Thời gian tới gia đình tôi có gặp khó khăn gì không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tài chính của gia đình tôi có vấn đề gì không?';
        newOption.text = 'Tài chính của gia đình tôi có vấn đề gì không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Các mối quan hệ trong gia đình tôi thời gian sắp tới như thế nào?';
        newOption.text =
            'Các mối quan hệ trong gia đình tôi thời gian sắp tới như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Sức khỏe của các thành viên trong gia đình tôi sắp tới như thế nào?';
        newOption.text =
            'Sức khỏe của các thành viên trong gia đình tôi sắp tới như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi nên làm gì để cải thiện mối quan hệ của tôi với gia đình tôi?';
        newOption.text =
            'Tôi nên làm gì để cải thiện mối quan hệ của tôi với gia đình tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Lời khuyên dành cho gia đình của tôi?';
        newOption.text = 'Lời khuyên dành cho gia đình của tôi?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Du học') {
        var newOption = document.createElement('option');
        newOption.value = 'Tôi có phù hợp với đi du học không?';
        newOption.text = 'Tôi có phù hợp với đi du học không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Cuộc sống khi đi du học của tôi sẽ như thế nào?';
        newOption.text = 'Cuộc sống khi đi du học của tôi sẽ như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi cần lưu ý những gì trong quá trình khi đi du học?';
        newOption.text =
        'Tôi cần lưu ý những gì trong quá trình khi đi du học?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
        'Tôi có gặp khó khăn gì trong quá trình du học không?';
        newOption.text = 'Tôi có gặp khó khăn gì trong quá trình du học không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Lời khuyên dành cho tôi khi đi du học?';
        newOption.text = 'Lời khuyên dành cho tôi khi đi du học?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Định hướng bản thân') {
        var newOption = document.createElement('option');
        newOption.value =
            'Mô tả về bản thân tôi trong thời điểm hiện tại như thế nào?';
        newOption.text =
            'Mô tả về bản thân tôi trong thời điểm hiện tại như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Hình ảnh của tôi trong mắt bạn bè xung quanh như thế nào?';
        newOption.text =
            'Hình ảnh của tôi trong mắt bạn bè xung quanh như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tôi cần lưu ý gì để phát triển bản thân?';
        newOption.text = 'Tôi cần lưu ý gì để phát triển bản thân?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Xu hướng của tôi trong mối quan hệ tình cảm như thế nào?';
        newOption.text =
            'Xu hướng của tôi trong mối quan hệ tình cảm như thế nào?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Người ấy') {
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot người ấy có sợ mất bạn không?';
        newOption.text = 'Bói tarot người ấy có sợ mất bạn không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot người ấy có quay lại không?';
        newOption.text = 'Bói tarot người ấy có quay lại không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot người ấy có nhớ bạn không?';
        newOption.text = 'Bói tarot người ấy có nhớ bạn không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói Tarot người ấy có ghen bạn không?';
        newOption.text = 'Bói Tarot người ấy có ghen bạn không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói bài tarot bạn và người ấy có happy ending?';
        newOption.text = 'Bói bài tarot bạn và người ấy có happy ending?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói bài tarot người ấy có bí mật gì?';
        newOption.text = 'Bói bài tarot người ấy có bí mật gì?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Chính xác không') {
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot có chính xác không?';
        newOption.text = 'Xem bói bài tarot có chính xác không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Kết quả tarot có thay đổi được không?';
        newOption.text = 'Kết quả tarot có thay đổi được không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói bài tarot online có chính xác không?';
        newOption.text = 'Bói bài tarot online có chính xác không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tarot đúng trong bao lâu?';
        newOption.text = 'Tarot đúng trong bao lâu?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot có nguy hiểm không?';
        newOption.text = 'Bói tarot có nguy hiểm không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot có đúng không?';
        newOption.text = 'Xem bói bài tarot có đúng không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Về bạn') {
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói tarot bao giờ lấy chồng?';
        newOption.text = 'Xem bói tarot bao giờ lấy chồng?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot mọi người nghĩ gì về bạn?';
        newOption.text = 'Bói tarot mọi người nghĩ gì về bạn?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot bạn có đào hoa không?';
        newOption.text = 'Xem bói bài tarot bạn có đào hoa không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot người bạn ghét là ai?';
        newOption.text = 'Xem bói bài tarot người bạn ghét là ai?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot bạn kiểu người thế nào?';
        newOption.text = 'Xem bói bài tarot bạn kiểu người thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Bói bài tarot có may mắn trong tình yêu ko?';
        newOption.text = 'Bói bài tarot có may mắn trong tình yêu ko?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Bói bài tarot xem ngã rẽ cuộc đời của bạn như thế nào?';
        newOption.text =
            'Bói bài tarot xem ngã rẽ cuộc đời của bạn như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot bao giờ có người yêu?';
        newOption.text = 'Xem bói bài tarot bao giờ có người yêu?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Người yêu cũ') {
        var newOption = document.createElement('option');
        newOption.value = 'Bói tarot người cũ còn yêu bạn không?';
        newOption.text = 'Bói tarot người cũ còn yêu bạn không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có nên liên lạc thường xuyên với người yêu cũ không?';
        newOption.text =
            'Tôi có nên liên lạc thường xuyên với người yêu cũ không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Người yêu hiện tại') {
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot chàng yêu bạn như thế nào?';
        newOption.text = 'Xem bói bài tarot chàng yêu bạn như thế nào?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Có điều gì trong quá khứ của chúng tôi cần giải quyết để phát triển mối quan hệ tích cực?';
        newOption.text =
            'Có điều gì trong quá khứ của chúng tôi cần giải quyết để phát triển mối quan hệ tích cực?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Xem bói bài tarot người yêu có chung thủy không?';
        newOption.text = 'Xem bói bài tarot người yêu có chung thủy không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Người yêu hiện tại có phù hợp và đáng tin cậy để xây dựng một tương lai lâu dài không?';
        newOption.text =
            'Người yêu hiện tại có phù hợp và đáng tin cậy để xây dựng một tương lai lâu dài không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Làm thế nào để tăng cường gắn kết và sự hiểu biết với người yêu hiện tại?';
        newOption.text =
            'Làm thế nào để tăng cường gắn kết và sự hiểu biết với người yêu hiện tại?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Có những khó khăn hoặc vấn đề tiềm ẩn nào trong mối quan hệ của chúng tôi?';
        newOption.text =
            'Có những khó khăn hoặc vấn đề tiềm ẩn nào trong mối quan hệ của chúng tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có thể tin tưởng và cảm nhận sự trung thành từ người yêu hiện tại không?';
        newOption.text =
            'Tôi có thể tin tưởng và cảm nhận sự trung thành từ người yêu hiện tại không?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Độc thân') {
        var newOption = document.createElement('option');
        newOption.value = 'Tương lai con đường tình yêu của tôi sẽ ra sao?';
        newOption.text = 'Tương lai con đường tình yêu của tôi sẽ ra sao?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi cần phải làm gì để thu hút mối quan hệ tình yêu tích cực?';
        newOption.text =
            'Tôi cần phải làm gì để thu hút mối quan hệ tình yêu tích cực?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Những người tiềm năng trong tương lai sẽ có những đặc điểm gì?';
        newOption.text =
            'Những người tiềm năng trong tương lai sẽ có những đặc điểm gì?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi nên tập trung vào những gì trong cuộc sống để tạo dựng một mối quan hệ hạnh phúc?';
        newOption.text =
            'Tôi nên tập trung vào những gì trong cuộc sống để tạo dựng một mối quan hệ hạnh phúc?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Có những khó khăn hay trở ngại gì đang cản trở tôi trong việc tìm kiếm tình yêu?';
        newOption.text =
            'Có những khó khăn hay trở ngại gì đang cản trở tôi trong việc tìm kiếm tình yêu?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi cần làm gì để chuẩn bị bản thân tốt nhất cho mối quan hệ tình yêu trong tương lai?';
        newOption.text =
            'Tôi cần làm gì để chuẩn bị bản thân tốt nhất cho mối quan hệ tình yêu trong tương lai?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Chia tay') {
        var newOption = document.createElement('option');
        newOption.value = 'Tại sao tôi không thể buông tay người yêu cũ?';
        newOption.text = 'Tại sao tôi không thể buông tay người yêu cũ?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Làm thế nào tôi có thể tiếp tục sau cuộc ly hôn?';
        newOption.text = 'Làm thế nào tôi có thể tiếp tục sau cuộc ly hôn?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi phải làm sao để có thể đối phó với sự mất mát khi rời xa người yêu?';
        newOption.text =
            'Tôi phải làm sao để có thể đối phó với sự mất mát khi rời xa người yêu?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi nên học điều gì từ cuộc chia tay gần đây của mình?';
        newOption.text =
            'Tôi nên học điều gì từ cuộc chia tay gần đây của mình?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có nên quay lại với người yêu cũ/chồng cũ/vợ cũ không?';
        newOption.text =
            'Tôi có nên quay lại với người yêu cũ/chồng cũ/vợ cũ không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Điều gì đang ảnh hưởng đến quá trình làm lành của tôi sau khi chia tay?';
        newOption.text =
            'Điều gì đang ảnh hưởng đến quá trình làm lành của tôi sau khi chia tay?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Những trở ngại nào đến quá trình làm lành của tôi sau khi chia tay?';
        newOption.text =
            'Những trở ngại nào đến quá trình làm lành của tôi sau khi chia tay?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi cần hiểu gì về bản thân để có thể tiến về phía trước?';
        newOption.text =
            'Tôi cần hiểu gì về bản thân để có thể tiến về phía trước?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Điều gì đang ngăn tôi khỏi việc tiến lên và làm mới cuộc sống sau khi chia tay?';
        newOption.text =
            'Điều gì đang ngăn tôi khỏi việc tiến lên và làm mới cuộc sống sau khi chia tay?';
        cauhoi_js.appendChild(newOption);
    }
    if (selectedChude === 'Hôn nhân') {
        var newOption = document.createElement('option');
        newOption.value = 'Tại sao cuộc hôn nhân của tôi lại khổ đau như vậy?';
        newOption.text = 'Tại sao cuộc hôn nhân của tôi lại khổ đau như vậy?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Điều gì ảnh hưởng đến mối quan hệ của chúng tôi?';
        newOption.text = 'Điều gì ảnh hưởng đến mối quan hệ của chúng tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Làm cách nào để tôi có thể vượt qua những thói quen tiêu cực của nửa kia?';
        newOption.text =
            'Làm cách nào để tôi có thể vượt qua những thói quen tiêu cực của nửa kia?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Tôi có thể làm gì để có thể cứu vãn cuộc hôn nhân của mình?';
        newOption.text =
            'Tôi có thể làm gì để có thể cứu vãn cuộc hôn nhân của mình?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Có điều gì mờ ám trong mối quan hệ hiện tại mà tôi không nhìn thấy không?';
        newOption.text =
            'Có điều gì mờ ám trong mối quan hệ hiện tại mà tôi không nhìn thấy không?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Nửa kia của tôi mong muốn điều gì ở tôi?';
        newOption.text = 'Nửa kia của tôi mong muốn điều gì ở tôi?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value = 'Tại sao mối quan hệ của tôi lại trở nên chênh vênh?';
        newOption.text = 'Tại sao mối quan hệ của tôi lại trở nên chênh vênh?';
        cauhoi_js.appendChild(newOption);
        var newOption = document.createElement('option');
        newOption.value =
            'Nửa kia của tôi cần tôi hỗ trợ nhiều hơn trong những lĩnh vực nào?';
        newOption.text =
            'Nửa kia của tôi cần tôi hỗ trợ nhiều hơn trong những lĩnh vực nào?';
        cauhoi_js.appendChild(newOption);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to the calculate BMI button
    const tarotButton = document.querySelector('.btn-xemynghia');
    tarotButton.addEventListener('click', xemynghiaTarot);

    function xemynghiaTarot() {
        const chudeInput = document.getElementById("chude_text")
            .innerText;
        const cauhoiInput = document.getElementById("cauhoi_text")
            .innerText;

        console.log(chudeInput, cauhoiInput);

        // Lấy thông tin các card và ghép thành chuỗi
        const card_db_1 = getCardInfo("one");
        const card_db_2 = getCardInfo("two");
        const card_db_3 = getCardInfo("three");

        // Hiển thị thông tin
        setCookie("chude", chudeInput, 1);
        setCookie("cauhoi", cauhoiInput, 1);
        setCookie("labai_1", card_db_1, 1);

        var labai = card_db_1 + "," + card_db_2 + "," + card_db_3;
        console.log("Card DB 1:", chudeInput);
        console.log("Card DB 2:", cauhoiInput);
        console.log("Card DB 3:", labai);

        // Gọi AJAX để lưu dữ liệu
        $.ajax({
            type: "POST",
            url: ajax_object
            .ajax_url, // ajax_object.ajax_url phải được thêm trong trang từ PHP
            data: {
                action: "increment_saveData_3labai", // Đúng action đã đăng ký trong PHP
                nonce: ajax_object
                .nonce, // nonce được sinh ra từ PHP để bảo mật
                chude: chudeInput,
                cauhoi: cauhoiInput,
                labai: labai,
            },
            success: function (response) {
                if (response.success) {
                    // alert("Kết quả đã được gửi về email của bạn!");
                    console.log(response);
                    setCookie("code", response.data.code,
                    1); // Lưu mã code vào cookie
                    // load lại trang
                    window.location.href =
                        '../ket-qua-boi-tarot/index.html'; // Load ra trang kết quả
                } else {
                    alert("Vui lòng thử lại.");
                }
            },
            error: function () {
                alert("Vui lòng thử lại.");
            },
        });
    }


    function getCardInfo(cardClass) {
        const card = document.querySelector(`.card.${cardClass}`);
        if (!card) return null;

        const role = card.getAttribute("role");
        const span = card.querySelector("span");
        if (!span) return null;

        // Lấy tất cả các class của span và lọc ra các class có dạng la_bai_*
        const laBaiClass = span.className.split(" ").filter(cls => cls
            .startsWith("la_bai_") && cls !== "la_bai").join(" ");
        span.className = laBaiClass;

        // Ghép chuỗi theo định dạng 'role_'+role+'_'+laBaiClass
        return `role_${role}_${laBaiClass}`;
    }

    // function setCookie(name, value, days) {
    //     let expires = "";
    //     if (days) {
    //         const date = new Date();
    //         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    //         expires = "; expires=" + date.toUTCString();
    //     }
    //     document.cookie = `${name}=${value || ""}${expires}; path=/`;
    // }
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        const encodedValue = encodeURIComponent(value || "");
        document.cookie = `${name}=${encodedValue}${expires}; path=/`;
    }
});