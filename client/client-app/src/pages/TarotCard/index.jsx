import React, {useState} from 'react';
import '../../assets/css/common.css';
import '../../assets/css/style.css';
import '../../assets/css/flatsome7be7.css';

const TarotCard = () => {
    const cards = [
        {name: "The Fool", zIndex: 0, marginLeft: "0px"},
        {name: "The Magician", zIndex: 1, marginLeft: "0.2px"},
        {name: "The High Priestess", zIndex: 2, marginLeft: "0.4px"},
        {name: "The Empress", zIndex: 3, marginLeft: "0.6px"},
        {name: "The Emperor", zIndex: 4, marginLeft: "0.8px"},
        {name: "The Hierophant", zIndex: 5, marginLeft: "1px"},
        {name: "The Lovers", zIndex: 6, marginLeft: "1.2px"},
        {name: "The Chariot", zIndex: 7, marginLeft: "1.4px"},
        {name: "Strength", zIndex: 8, marginLeft: "1.6px"},
        {name: "The Hermit", zIndex: 9, marginLeft: "1.8px"},
        {name: "Wheel Of Fortune", zIndex: 10, marginLeft: "2px"},
        {name: "Justice", zIndex: 11, marginLeft: "2.2px"},
        {name: "The Hanged Man", zIndex: 12, marginLeft: "2.4px"},
        {name: "Death", zIndex: 13, marginLeft: "2.6px"},
        {name: "Temperance", zIndex: 14, marginLeft: "2.8px"},
        {name: "The Devil", zIndex: 15, marginLeft: "3px"},
        {name: "The Tower", zIndex: 16, marginLeft: "3.2px"},
        {name: "The Star", zIndex: 17, marginLeft: "3.4px"},
        {name: "The Moon", zIndex: 18, marginLeft: "3.6px"},
        {name: "The Sun", zIndex: 19, marginLeft: "3.8px"},
        {name: "Judgement", zIndex: 20, marginLeft: "4px"},
        {name: "The World", zIndex: 21, marginLeft: "4.2px"},
        {name: "Ace Of Wands", zIndex: 22, marginLeft: "4.4px"},
        {name: "Two Of Wands", zIndex: 23, marginLeft: "4.6px"},
        {name: "Three Of Wands", zIndex: 24, marginLeft: "4.8px"},
        {name: "Four Of Wands", zIndex: 25, marginLeft: "5px"},
        {name: "Five Of Wands", zIndex: 26, marginLeft: "5.2px"},
        {name: "Six Of Wands", zIndex: 27, marginLeft: "5.4px"},
        {name: "Seven Of Wands", zIndex: 28, marginLeft: "5.6px"},
        {name: "Eight Of Wands", zIndex: 29, marginLeft: "5.8px"},
        {name: "Nine Of Wands", zIndex: 30, marginLeft: "6px"},
        {name: "Ten Of Wands", zIndex: 31, marginLeft: "6.2px"},
        {name: "Page Of Wands", zIndex: 32, marginLeft: "6.4px"},
        {name: "Knight Of Wands", zIndex: 33, marginLeft: "6.6px"},
        {name: "Queen Of Wands", zIndex: 34, marginLeft: "6.8px"},
        {name: "King Of Wands", zIndex: 35, marginLeft: "7px"},
        {name: "Ace Of Cups", zIndex: 36, marginLeft: "7.2px"},
        {name: "Two Of Cups", zIndex: 37, marginLeft: "7.4px"},
        {name: "Three Of Cups", zIndex: 38, marginLeft: "7.6px"},
        {name: "Four Of Cups", zIndex: 39, marginLeft: "7.8px"},
        {name: "Five Of Cups", zIndex: 40, marginLeft: "8px"},
        {name: "Six Of Cups", zIndex: 41, marginLeft: "8.2px"},
        {name: "Seven Of Cups", zIndex: 42, marginLeft: "8.4px"},
        {name: "Eight Of Cups", zIndex: 43, marginLeft: "8.6px"},
        {name: "Nine Of Cups", zIndex: 44, marginLeft: "8.8px"},
        {name: "Ten Of Cups", zIndex: 45, marginLeft: "9px"},
        {name: "Page Of Cups", zIndex: 46, marginLeft: "9.2px"},
        {name: "Knight Of Cups", zIndex: 47, marginLeft: "9.4px"},
        {name: "Queen Of Cups", zIndex: 48, marginLeft: "9.6px"},
        {name: "King Of Cups", zIndex: 49, marginLeft: "9.8px"},
        {name: "Ace Of Swords", zIndex: 50, marginLeft: "10px"},
        {name: "Two Of Swords", zIndex: 51, marginLeft: "10.2px"},
        {name: "Three Of Swords", zIndex: 52, marginLeft: "10.4px"},
        {name: "Four Of Swords", zIndex: 53, marginLeft: "10.6px"},
        {name: "Five Of Swords", zIndex: 54, marginLeft: "10.8px"},
        {name: "Six Of Swords", zIndex: 55, marginLeft: "11px"},
        {name: "Seven Of Swords", zIndex: 56, marginLeft: "11.2px"},
        {name: "Eight Of Swords", zIndex: 57, marginLeft: "11.4px"},
        {name: "Nine Of Swords", zIndex: 58, marginLeft: "11.6px"},
        {name: "Ten Of Swords", zIndex: 59, marginLeft: "11.8px"},
        {name: "Page Of Swords", zIndex: 60, marginLeft: "12px"},
        {name: "Knight Of Swords", zIndex: 61, marginLeft: "12.2px"},
        {name: "Queen Of Swords", zIndex: 62, marginLeft: "12.4px"},
        {name: "King Of Swords", zIndex: 63, marginLeft: "12.6px"},
        {name: "Ace Of Pentacles", zIndex: 64, marginLeft: "12.8px"},
        {name: "Two Of Pentacles", zIndex: 65, marginLeft: "13px"},
        {name: "Three Of Pentacles", zIndex: 66, marginLeft: "13.2px"},
        {name: "Four Of Pentacles", zIndex: 67, marginLeft: "13.4px"},
        {name: "Five Of Pentacles", zIndex: 68, marginLeft: "13.6px"},
        {name: "Six Of Pentacles", zIndex: 69, marginLeft: "13.8px"},
        {name: "Seven Of Pentacles", zIndex: 70, marginLeft: "14px"},
        {name: "Eight Of Pentacles", zIndex: 71, marginLeft: "14.2px"},
        {name: "Nine Of Pentacles", zIndex: 72, marginLeft: "14.4px"},
        {name: "Ten Of Pentacles", zIndex: 73, marginLeft: "14.6px"},
        {name: "Page Of Pentacles", zIndex: 74, marginLeft: "14.8px"},
        {name: "Knight Of Pentacles", zIndex: 75, marginLeft: "15px"},
        {name: "Queen Of Pentacles", zIndex: 76, marginLeft: "15.2px"},
        {name: "King Of Pentacles", zIndex: 77, marginLeft: "15.4px"}
    ];

    const shuffleAndSeparate = (event) => {

    };const reset_cards = (event) => {

    };const separate_instantly = (event) => {

    };const separate_one_by_one = (event) => {

    };const open_all_cards = (event) => {

    };const close_all_cards = (event) => {

    };const shuffle_cards = (event) => {

    };const updateCauHoi = (event) => {

    };

    return (
        <div
            className="page-template page-template-page-transparent-header-light page-template-page-transparent-header-light-php page page-id-556 lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border">


            <div id="wrapper">


                <main id="main" className="dark dark-page-wrapper">


                    <div id="content" role="main">


                        <div className="containers-ph">
                            <div className="header-lights">
                                <div className="lights-a"><img decoding="async" className="ls-is-cached"
                                                               src="../../assets/tarot-card/lights-1.png"
                                                               alt={""}></img></div>
                                <div className="lights-b"><img decoding="async" className="lazyloaded"
                                                               src="../../assets/tarot-card/lights-2.png"
                                                               alt={""}></img></div>
                            </div>

                            <div id="gap-768923766" className="gap-element clearfix"
                                 style={{display: "block", height: "auto"}}>
                            </div>

                        </div>
                        <div className="texturing">
                            <div className="blur" style={{opacity: 1}}></div>
                            <div id="anchor-blur" className="anchor-blur" style={{display: "none", top: '1894.5px'}}></div>
                        </div>
                        <section className="section secc-1" id="section_583894725">
                            <div className="bg section-bg fill bg-fill  bg-loaded">


                            </div>


                            <div className="section-content relative">

                                <div id="gap-1959862002" className="gap-element clearfix"
                                     style={{display: "block", height: "auto"}}>
                                </div>

                                <div className="row" id="row-672357854">

                                    <div id="col-1889739466" className="col small-12 large-12">
                                        <div className="col-inner">


                                            <div className="container-headerTaot">
                                                <p className="almendra-top">Nhận được câu trả lời bạn cần với</p>
                                                <p className="almendr-main">3 lá</p>
                                                <p className="almendra-bottom">bài Tarot</p>
                                            </div>
                                            <div className="danh-muc-tarot" id="id-danh-muc-tarot">
                                                <div className="bo-tarot bo-tarot-hoa chude" id="boitarot-1">
                                                    <div className="select_tarot">
                                                        <select name="chu_de" id="chu_de" onChange={updateCauHoi()}>
                                                            <option value="">Chọn chủ đề</option>
                                                            <option value='Tình cảm của người yêu cũ'>Tình cảm của
                                                                người yêu
                                                                cũ
                                                            </option>
                                                            <option value='Người yêu cũ'>Người yêu cũ</option>
                                                            <option value='Mối quan hệ hiện tại'>Mối quan hệ hiện tại
                                                            </option>
                                                            <option value='Mối quan hệ mập mờ'>Mối quan hệ mập
                                                                mờ
                                                            </option>
                                                            <option value='Crush'>Crush</option>
                                                            <option value='Mối quan hệ cũ'>Mối quan hệ cũ</option>
                                                            <option value='Quay lại với mối quan hệ cũ'>Quay lại với mối
                                                                quan hệ
                                                                cũ
                                                            </option>
                                                            <option value='Người yêu tương lai'>Người yêu tương lai
                                                            </option>
                                                            <option value='Giải quyết xung đột'>Giải quyết xung đột
                                                            </option>
                                                            <option value='Tài chính'>Tài chính</option>
                                                            <option value='Học tập'>Học tập</option>
                                                            <option value='Công việc'>Công việc</option>
                                                            <option value='Môi trường làm việc mới'>Môi trường làm việc
                                                                mới
                                                            </option>
                                                            <option value='Định hướng công việc'>Định hướng công việc
                                                            </option>
                                                            <option value='Sức khỏe'>Sức khỏe</option>
                                                            <option value='Gia đình'>Gia đình</option>
                                                            <option value='Du học'>Du học</option>
                                                            <option value='Định hướng bản thân'>Định hướng bản thân
                                                            </option>
                                                            <option value='Người ấy'>Người ấy</option>
                                                            <option value='Chính xác không'>Chính xác không</option>
                                                            <option value='Về bạn'>Về bạn</option>
                                                            <option value='Người yêu cũ'>Người yêu cũ</option>
                                                            <option value='Người yêu hiện tại'>Người yêu hiện tại
                                                            </option>
                                                            <option value='Độc thân'>Độc thân</option>
                                                            <option value='Chia tay'>Chia tay</option>
                                                            <option value='Hôn nhân'>Hôn nhân</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="bo-tarot bo-tarot-hoa cauhoi" id="boitarot-2">
                                                    <div className="select_tarot">
                                                        {/*<select name="cau_hoi" id="cau_hoi">*/}
                                                        {/*    <option value="">Chọn câu hỏi</option>*/}
                                                        {/*</select> */}
                                                        <input list="cau_hoi_list" name="cau_hoi" id="cau_hoi"
                                                               placeholder="Nhập câu hỏi" autoComplete="off"/>
                                                    </div>

                                                </div>
                                                <div className="bo-tarot bo-tarot-hoa xaobai" id="boitarot-3">
                                                    <div className="select_tarot select_tarot_nut">
                                                        <button type="button" className="button-87" id="btn-xaobaii"
                                                                onClick={shuffleAndSeparate()} disabled>Xào bài
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tutotial">
                                                <div className="div_tutorial">
                                                    <div id="numbderHuongdan"><span id="num_tarot">1</span>/6</div>
                                                    <div id="text-huong-dan" className="huong_dan_dess"></div>
                                                </div>
                                            </div>

                                            <div className="btn-redirect">
                                                <button type="button" className="button-87" onClick={reset_cards()}>Xếp
                                                    bài
                                                </button>
                                                <button type="button" className="button-87"
                                                        onClick={separate_instantly()}>Tách bài
                                                </button>
                                                <button type="button" className="button-87"
                                                        onClick={separate_one_by_one()}>Chia bài
                                                </button>
                                                <button type="button" className="button-87"
                                                        onClick={open_all_cards()}>Mở bài
                                                </button>
                                                <button type="button" className="button-87"
                                                        onClick={close_all_cards()}>Đóng bài
                                                </button>
                                                <button type="button" className="button-87"
                                                        onClick={shuffle_cards()}>Xào bài
                                                </button>
                                            </div>
                                            {/*cards container*/}
                                            <div id="pack_cont">
                                                {cards.map((card, index) => (
                                                    <div
                                                        key={index}
                                                        className="card"
                                                        name={card.name}
                                                        style={{
                                                            zIndex: card.zIndex,
                                                            marginLeft: card.marginLeft,
                                                            marginTop: '0px'
                                                        }}
                                                    >
                                                        <span className={`la_bai la_bai_${card.zIndex + 1}`}></span>
                                                    </div>
                                                ))}
                                                <div className="danh-muc-tarot bo-tarot-hoa-submit"
                                                     style={{opacity: 0}}>
                                                    <div className="bo-tarot bo-tarot-hoa ">
                                                        <div className="select_tarot">
                                                            <button type="button"
                                                                    className="button-87 btn-xemynghia">Tiết
                                                                lộ ý
                                                                nghĩa
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TarotCard;