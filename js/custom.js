(function () {
    if ($(".onecms__currentTime").length > 0) {
        const currentTime = new Date();
        let day = currentTime.getDay();
        const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        let year = currentTime.getFullYear().toString();
        let month = (currentTime.getMonth() + 1).toString();
        if (month.length < 2) {
            month = "0" + month;
        }
        let date = currentTime.getDate().toString();
        if (date.length < 2) {
            date = "0" + date;
        }
        const isMobileScreen = window.innerWidth < 992;
        //let hour = currentTime.getHours().toLocaleString("vi-VN");
        //if (hour.length < 2) {
        //    hour = "0" + hour;
        //}
        //const min = currentTime.getMinutes().toString();
        //if (min.length < 2) {
        //    min = "0" + min;
        //}
        if (isMobileScreen) {
            $(".onecms__currentTime").html(`<b>${dayNames[day]},</b> ${date}/${month}/${year}`);
            return;
        }
        $(".onecms__currentTime").html(`<p><b>${dayNames[day]},</b> ${date}/${month}/${year}</p>`);
        return;
    }
})();
(function () {
    if ($('.is-timeline').length === 0)
        return false;
    let element = $(".c-time-count span");
    refreshTimeAgo(element);

    //loop run
    const intervalTime = setInterval(function () {
        refreshTimeAgo(element);
    }, 1000 * 10);

    //Out time
    setTimeout(function () {
        clearInterval(intervalTime);
        console.log("clear")
    }, 1000 * 60 * 60);

})();
function scrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function sliderOver4() {
    if ($('.js-slider-over-4').length > 0) {
        $('.js-slider-over-4').owlCarousel({
            responsiveClass: false,
            nav: false,
            dots: false,
            autoplay: false,
            autoHeight: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            navText: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 15,
                    loop: true
                },
                768: {
                    items: 3,
                    margin: 20,
                    loop: false
                },
                992: {
                    items: 4,
                    margin: 20,
                    loop: false
                },
                1200: {
                    items: 4,
                    margin: 24,
                    loop: false
                }
            }
        });
    }
}
function thematicSlider() {
    if ($('.c-thematic-slider').length === 0)
        return false;
    $('.js-thematic-slider').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        responsiveClass: false,
        nav: true,
        dots: true,
        autoplay: false,
        autoHeight: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        navText: false,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true,
    });
    $('.c-thematic-slider .c-thematic-item').matchHeight();
}
function newspaper() {
    if ($('.js-newspaper').length === 0)
        return;
    $('.js-newspaper').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        responsiveClass: false,
        nav: true,
        dots: false,
        autoplay: false,
        autoHeight: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        navText: false,
        lazyLoad: true,
    });
}
function areaSlider() {
    if ($('.js-area-slider').length === 0)
        return;
    $('.js-area-slider').owlCarousel({
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        autoHeight: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        navText: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                loop: true
            },
            768: {
                items: 3,
                margin: 20,
                loop: false
            },
            992: {
                items: 4,
                margin: 20,
                loop: false
            },
            1200: {
                items: 4,
                margin: 30,
                loop: false
            }
        }
    });
}
(function clearAreaSlider() {
    if ($('.js-area-slider').length === 0)
        return;
    const isMobile = window.innerWidth < 992;
    if (!isMobile)
        return false;
    $('.js-area-slider').owlCarousel({
        loop: false,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                loop: false
            },
            768: {
                items: 3,
                margin: 20,
                loop: false
            },
            992: {
                items: 4,
                margin: 20,
                loop: false
            },
            1200: {
                items: 4,
                margin: 30,
                loop: false
            }
        }
    });
})()
function activeMenu(linkToChannel, linkToParentChannel) {
    if (linkToChannel) {
        $(".c-menu a").each(function () { let a = $(this).attr('href'); if (a === undefined || a === '') return; a === linkToChannel && $(this).closest("li").addClass("active"), a === linkToParentChannel && $(this).closest("li").addClass("active") });
        $(".onecms__subchannel a").each(function () { let a = $(this).attr('href'); if (a === undefined) return; a === linkToChannel && $(this).closest(".onecms__subchannel").addClass("active") });
    }
}
// web control
var WebControl = WebControl || {};
WebControl.loadmore_params = () => ({ type: '24h', keyword: '', publisherId: 0, channelId: 0, eventId: 0, view: 'normal' });
WebControl.loadmore_event_params = { type: 'eventbykeyword', keyword: 'newest', publisherId: 0, channelId: 0, eventId: 0 };
WebControl.isLoading = false;
WebControl.initLoadMore = function () {

    let loadMoreCount = 0;

    const loadMore = function () {
        if (WebControl.isLoading)
            return false;
        let _data = WebControl.loadmore_params();
        $('.c-more').hide();
        if (_data.publisherId === undefined)
            return false;
        $('.loading__img').show();
        let url = `/api/getMoreArticle/${_data.type}_${_data.keyword === '' ? 'empty' : decodeHtmlEntity(_data.keyword)}_${_data.publisherId}_${_data.channelId}_${_data.eventId}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                $('.loading__img').hide();
                if (data.length == 0) {
                    WebControl.isLoading = true;
                    return false;
                }
                $.each(data, function (idx, item) {

                    let html = `<li pid="${item.PublisherId}"class="animate__animated animate__fadeInUp">
                                        <div class="b-grid">
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                    <span class="b-grid__time">${item.Time_ddMMyyyyHHmm}</span>
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                            </div>
                                        </div>
                                    </li>`;

                    if (WebControl.loadmore_params().view == 'video') {
                        html = `<li pid="${item.PublisherId}">
                                        <div class="b-grid">
                                            <div class="b-grid__img">
                                                <a href="${item.LinktoMe2}">
                                                    <img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" />
                                                    <span class="b-grid__counttime"><i class="icon12-play-white"></i></span>
                                                </a>
                                            </div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                </div>
                                                <div class="b-grid__row"><span class="b-grid__time">${item.Time_ddMMyyyyHHmm}</span></div>
                                            </div>
                                        </div>
                                    </li>`;
                    }

                    if (WebControl.loadmore_params().view == 'podcast') {
                        html = `<li pid="${item.PublisherId}">
                                        <div class="b-grid">
                                            <div class="b-grid__row is-mobile">
                                                <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.Title}</a></h3>
                                            </div>
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Square}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row is-tablet">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                </div>
                                                <div class="b-grid__row is-flex is-mobile">
                                                    <div class="b-grid__row__left"><a class="b-grid__radio" href="${item.LinktoMe2}"><i class="icon42-radio"></i><b>Nghe</b><span></span></a></div>
                                                    <div class="b-grid__row__right">
                                                        ${item.CommentCount > 0 ?
                                `<a class="b-grid__comment" href="${item.LinktoMe2}"><i class="icon16-comment-gray-o"></i>${item.CommentCount}</a>` : ""
                            }
                                                    </div>
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                                <div class="b-grid__row is-flex is-tablet">
                                                    <div class="b-grid__row__left">
                                                        <span class="b-grid__time">${item.Time_ddMMyyyyHHmm}</span>
                                                        ${item.CommentCount > 0 ?
                                `<span class="b-grid__space">|</span><a class="b-grid__comment" href="${item.LinktoMe2}"><i class="icon16-comment-gray-o"></i>${item.CommentCount}</a>` : ""
                            }
                                                    </div>
                                                    <div class="b-grid__row__right"><a class="b-grid__play" href="${item.LinktoMe2}"><span class="btn-play"><i class="icon12-play"></i></span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`;
                    }

                    if (WebControl.loadmore_params().view == 'newest') {
                        html = `<li pid="${item.PublisherId}">
                                        <div class="c-time-count"><span datetime="${item.Time_yyyyMMddHHmmss}"></span></div>
                                        <div class="b-grid">
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                ${item.BlockedInstantArticleCreate == true ? `<span class="b-grid__ad"><i class="icon16-ad"></i>Tin tài trợ</span>` : ""}
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                            </div>
                                        </div>
                                    </li>`;
                    }

                    $('.onecms__loading:first').append(html);


                });
                $('.c-more').show();
                if (data.length < 1) {
                    $('.c-more').hide();
                }
                if (WebControl.loadmore_params().view == 'newest') {
                    let element = $(".c-time-count span");
                    refreshTimeAgo(element);
                }

            }
        })

    }

    const renderHtml = function (element) {
        
        if ($(element).length === 0 || $(element).hasClass("loaded"))
            return false;
        $(element).addClass('loaded');
        
        const dataAction = $(element).attr("data-action");
        if (dataAction === undefined || dataAction === "")
            return false;
        const url = `/${dataAction}`; 
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                if (data.status == "error") {
                    $(element).removeClass('loaded');
                    return false;
                }

                if ($(element).hasClass("fadeout"))
                    $(element).removeClass('fadeout');

                if (data.listData.length === 0) {
                    $(`[data-action='${dataAction}']`).remove();
                    return false;
                }

                $(`[data-action='${dataAction}']`).append(data.detailHtml);
                $(`[data-action='${dataAction}']`).removeAttr("style");
                if (data.action === "highlight") {

                    const listArticleNewest = data.listArticleNewest;
                    if (listArticleNewest === undefined || listArticleNewest.length === 0)
                        return false;

                    $.each(listArticleNewest, function (index, item) {
                        let html = `<li pid="${item.PublisherId}">
                                        <div class="b-grid">
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                    <span class="b-grid__time">${item.Time_ddMMyyyyHHmm}</span>
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                            </div>
                                        </div>
                                    </li>`;

                        if (WebControl.loadmore_params().view == 'video') {
                            html = `<li pid="${item.PublisherId}">
                                        <div class="b-grid">
                                            <div class="b-grid__img">
                                                <a href="${item.LinktoMe2}">
                                                    <img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" />
                                                    <span class="b-grid__counttime"><i class="icon12-play-white"></i></span>
                                                </a>
                                            </div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                </div>
                                                <div class="b-grid__row"><span class="b-grid__time">${item.Time_ddMMyyyyHHmm}</span></div>
                                            </div>
                                        </div>
                                    </li>`;
                        }
                        if (WebControl.loadmore_params().view == 'newest') {
                            html = `<li pid="${item.PublisherId}">
                                        <div class="c-time-count"><span datetime="${item.Time_yyyyMMddHHmmss}"></span></div>
                                        <div class="b-grid">
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.TitleIcon16}</a></h3>
                                                ${item.BlockedInstantArticleCreate == true ? `<span class="b-grid__ad"><i class="icon16-ad"></i>Tin tài trợ</span>` : ""}
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                            </div>
                                        </div>
                                    </li>`;
                        }
                        
                        $('.onecms__loading').append(html);

                    });

                    if (WebControl.loadmore_params().view == 'newest') {
                        let element = $(".c-time-count span");
                        refreshTimeAgo(element);
                    }
                }
                sliderOver4();
            }
        });

    }

    $('.c-more').click(function () {
        loadMore();
        return false;
    });

    // scroll for loadmore
    $(window).scroll(function () {
        const boxes = document.querySelectorAll('.onecms_load_view');
        if (boxes.length === 0) return false;
        const triggerBottom = window.innerHeight + 500;
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                renderHtml(box);
            }

        });

        //if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        //    if (loadMoreCount === 0) {
        //        loadMore();
        //        loadMoreCount++;
        //    }
        //}
    });
}
WebControl.initEventPage = function () {
    let loadMore = function (element) {
        let _data = WebControl.loadmore_event_params;
        const _loadingImage = element.find('.loading__img');
        const _ul = element.find("ul:first");
        const _loadmore = element.find(".c-more");
        _loadingImage.show();
        _loadmore.hide();
        const url = `/api/getMoreArticle/${_data.type}_${_data.keyword === '' ? 'empty' : decodeHtmlEntity(_data.keyword)}_${_data.publisherId}_${_data.channelId}_${_data.eventId}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                _loadingImage.hide();
                if (data.length == 0) {
                    WebControl.isLoading = true;
                    return false;
                }

                $.each(data, function (idx, item) {
                    const html = `<li class="article__loading" pid="${item.PublisherId}">
                                        <div class="b-grid">
                                            <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                            <div class="b-grid__content">
                                                <div class="b-grid__row">
                                                    <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.Title}</a></h3>
                                                </div>
                                                <div class="b-grid__row b-grid__desc"><a href="${item.LinktoMe2}">${item.Headlines}</a></div>
                                            </div>
                                        </div>
                                    </li>`;
                    _ul.append(html);
                });

                _loadmore.show();

                if (data.length < 0)
                    _loadmore.hide();

            }
        })

    }
    $('.c-more').click(function () {
        let _publisherId = $(this).closest(".c-topic-info-tabs__pane").find('li:last').attr('pid');
        if (_publisherId === undefined) {
            $(this).hide();
            return false;
        }

        WebControl.loadmore_event_params.publisherId = _publisherId;
        const rootElement = $(this).closest(".c-topic-info-tabs__pane");
        loadMore(rootElement);
        return false;
    });

    $(".c-topic-info-tabs__title a").click(function () {

        const _id = $(this).attr("href");
        if (_id === undefined)
            return;
        if (_id == '#info-1') {
            WebControl.loadmore_event_params.keyword = "newest";
            return;
        }
        
        let rootElement = $(_id);
        if (rootElement.length === 0)
            return;
        WebControl.loadmore_event_params.keyword = $(this).text();
        WebControl.loadmore_event_params.publisherId = 0;
        if ($(this).hasClass("onecms__loaded"))
            return;
        loadMore(rootElement);
        $(this).addClass("onecms__loaded");
        return false;
    })

}
WebControl.commentDetailPage = function () {
    let $publisherId = WebControl.publisherId;
    let $parentId = 0;
    let $sort_by = 'like';
    let $row_num = 0;
    let $cmt_name = '';
    let $cmt_email = '';
    let $cmt_content = '';
    let $cmt_parentId = '';
    let $f_share = WebControl.f_share;
    // load comments
    let loadComments = function () {
        let url = `/api/getcomment/${$publisherId}_${$parentId}_${$sort_by}_${$row_num}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {

                if (data.length === 0) {
                    $(".c-more__comment").hide();
                    return false;
                }
                $.each(data, function (idx, cmt) {
                    if ($sort_by == 'like') {
                        $sort_like = cmt.Liked;
                    }
                    else {
                        $sort_date = cmt.CreatedAt;
                    }
                    $('.onecms__comment__list:last').append('<div class="b-grid" row_num="' + cmt.RowNum + '"><div class="b-grid__content" parentid="' + cmt.CommentId + '">'
                        + '<div class="b-grid__row"><span class="b-grid__title">' + cmt.Name + '</span> - <span class="b-grid__time">' + convertJsonDate(cmt.CreatedAt) + '</span></div>'
                        + '<div class="b-grid__row b-grid__desc" id="cmt' + cmt.CommentId + '">'
                        + cmt.Content
                        + '</div>'
                        + '<div class="b-grid__row">'
                        + '<span class="b-grid__anwser tl-reply">Trả lời</span>'
                        + '<span class="b-grid__like like" id="' + cmt.CommentId + '"><i class="icon16-heart"></i>Thích <span class="likeCount">' + cmt.Liked + '</span>'
                        + '<a class="b-grid__share" href="' + $f_share + '#cmt-' + cmt.CommentId + '"><i class="icon24-facebook"></i>Chia sẻ</a>'
                        + '</div>'
                        + '<div class="c-comment-input comment-reply hidden">'
                        + '<div class="form-group">'
                        + '<textarea class="form-control txt-content" name="" placeholder="Vui lòng nhập tiếng việt có dấu"></textarea>'
                        + '<label class="control-label help-block"><em></em></label> <br />'
                        + '<a href="javascript:void(0)" class="btnSend btn-send-comment" parentid="' + cmt.CommentId + '">Gửi bình luận</a>'
                        + '<span> </span>'
                        + '<a class="btn-close-comment" href="javascript:void(0)" parentid="0">Đóng</a>'
                        + '</div>'
                        + '</div>'
                        + '<div class="b-grid__sub subcomment' + cmt.CommentId + '">'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div><!-- b-grid -->');
                    //sub comments
                    let subcomment = `.subcomment${cmt.CommentId}`;
                    $.each(cmt.ChildComment, function (idx2, cmt2) {
                        $(subcomment).append('<div class="b-grid" row_num="' + (idx2 + 1) + '"><div class="b-grid__content" parentid="' + cmt.CommentId + '">'
                            + '<div class="b-grid__row"><span class="b-grid__title">' + cmt2.Name + '</span> - <span class="b-grid__time">' + convertJsonDate(cmt2.CreatedAt) + '</span></div>'
                            + '<div class="b-grid__row b-grid__desc" id="cmt' + cmt2.CommentId + '">'
                            + cmt2.Content
                            + '</div>'
                            + '<div class="b-grid__row">'
                            + '<span class="b-grid__anwser tl-reply">Trả lời</span>'
                            + '<span class="b-grid__like like" id="' + cmt2.CommentId + '"><i class="icon16-heart"></i>Thích <span class="likeCount">' + cmt2.Liked + '</span></span>'
                            + '<a class="b-grid__share" href="' + $f_share + '#cmt-' + cmt2.CommentId + '"><i class="icon24-facebook"></i>Chia sẻ</a>'
                            + '</div>'
                            + '<div class="c-comment-input comment-reply hidden">'
                            + '<div class="form-group">'
                            + '<textarea class="form-control txt-content" name="" placeholder="Vui lòng nhập tiếng việt có dấu"></textarea>'
                            + '<label class="control-label help-block"><em></em></label> <br />'
                            + '<a href="javascript:void(0)" class="btnSend btn-send-comment" parentid="' + cmt.CommentId + '">Gửi bình luận</a>'
                            + '<span> </span>'
                            + '<a class="btn-close-comment" href="javascript:void(0)" parentid="0">Đóng</a>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div><!-- b-grid -->');
                    })
                    if (cmt.ChildComment.length == 3) {
                        $(subcomment).append('<div class="c-comment-more comment-load-more-child"><a href="javascript:;">Xem thêm bình luận</a></div>')
                    }
                });
            },
        });


    }
    // add comment
    let sendComment = function () {
        let name = $.trim($cmt_name);
        let email = $.trim($cmt_email);
        let content = $.trim($cmt_content).replace(/\r\n|\r|\n/g, "<br/>");
        $.ajax({
            url: "/api/addcomment",
            type: "post",
            data: { p: $cmt_parentId, a: $publisherId, n: name, e: email, c: content },
            success: function (data) {
                data = JSON.parse(data);
                if (data.errorCode == 2) {
                    alert('Bạn phải chờ sau 1 phút sau mới được tiếp tục gửi ý kiến !');
                } else {
                    $('.txt-content').val('');
                    $('#txtName').val('');
                    $('#txtEmail').val('');
                    $('.form').removeClass('has-error');
                    $('.comment-item').find('.bc-input').addClass('hidden');
                    $('.popUp.binhLuan').removeClass('active');
                    $('.comment-reply').addClass('hidden');
                    let $target_message = $('.onecms__comments');
                    $('.message').removeClass('hidden');
                    $('html, body').stop().animate({
                        'scrollTop': $target_message.offset().top - 10
                    }, 300, 'swing', function () { });
                }

            },
        });

    }

    // load first top comment
    loadComments();
    $(".comment").click(function () {
        let target_message = $('.onecms__comments');
        if (target_message.length === 0) return false;
        $('html, body').stop().animate({
            'scrollTop': target_message.offset().top - 30
        }, 700, 'swing', function () { });
        $('.txt-content').focus();
        $("textarea").css("border", "1px solid #11e666");
    })
    $('li.comment-sort-by-like').click(function () {
        if ($(this).hasClass('active'))
            return false;
        $('li.comment-sort-by-newest').removeClass('active');
        $(this).addClass('active');

        $sort_by = 'like';
        $row_num = 0;

        //waitingDialog.show();
        $('.onecms__comment__list').html('');
        loadComments();

        return false;
    });
    $('li.comment-sort-by-newest').click(function () {
        if ($(this).hasClass('active'))
            return false;
        $('li.comment-sort-by-like').removeClass('active')
        $(this).addClass('active');

        $sort_by = 'date';
        $row_num = 0;

        $('.onecms__comment__list').html('');
        loadComments();

        return false;
    });
    // like
    $('.c-comments').on('click', '.like', function () {
        let _commentId = $(this).attr('id');
        let aaa = $(this);
        let like_val = aaa.find('.likeCount').text();
        let url = `/api/addlikecomment/${_commentId}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                data = JSON.parse(data);
                if (data.errorCode == 0) {
                    $(this).addClass('active');

                    aaa.find('.likeCount').html((parseInt(like_val) + 1).toString());
                    alert('Like thành công, sau vài phút ý kiến sẽ được cập nhật số lượng like !');
                    aaa.removeClass('like');
                    return false;
                }
                else if (data.errorCode == 2) {
                    alert('Bạn phải chờ sau 1 phút sau mới được tiếp tục like ý kiến !');
                    return false;
                }
            },
        })
    });
    $('.c-comments').on('click', '.tl-reply', function () {
        let _commentId = $(this).closest('.b-grid__content').attr('parentid');
        $parentId = _commentId;
        //show commentbox
        $(this).closest('.b-grid__content').find('.comment-reply:first').removeClass('hidden');
        return false;
    });
    $('.c-comments').on('click', '.btn-close-comment', function () {
        $(this).closest('.comment-reply').addClass('hidden');
        return false;
    });
    // send click
    $('.c-comments').on('click', '.btnSend', function () {
        let $txtContent = $(this).closest('.c-comment-input').find('.txt-content:first');
        $cmt_content = $txtContent.val();
        $cmt_parentId = $(this).attr('parentid');
        $txtContent.closest('.c-comment-input').removeClass('has-error');
        $txtContent.closest('.c-comment-input').find('em').html('');
        if ($cmt_content.length == 0) {
            $txtContent.closest('.c-comment-input').addClass('has-error').find('em').html('Bạn chưa nhập nội dung ý kiến !');
            $('.txt-content').focus();
            return false;
        } else if ($cmt_content.length < 10) {
            $txtContent.closest('.c-comment-input').addClass('has-error').find('em').html('Nội dung ý kiến quá ngắn !');
            return false;
        } else if ($cmt_content.length > 1000) {
            $txtContent.closest('.c-comment-input ').addClass('has-error').find('em').html('Nội dung ý kiến quá dài !');
            return false;
        }
        //show input author
        $('.popUp.binhluancomment').addClass('active');
        return false;
    });
    $('.btnSendComment').on('click', (function () {
        let $txtName = $('#txtName');
        let $txtEmail = $('#txtEmail');

        $cmt_name = $.trim($txtName.val());
        $cmt_email = $.trim($txtEmail.val());
        $('#binhluanmodal').find('.form').removeClass('has-error');
        $('#binhluanmodal').find('em').html('');
        if ($cmt_name.length == 0) {
            $txtName.closest('.box').addClass('has-error').find('em').html('Bạn chưa nhập họ và tên !');
            return false;
        } else if ($cmt_email.length == 0) {
            $txtEmail.closest('.box').addClass('has-error').find('em').html('Bạn chưa nhập địa chỉ email !');
            return false;
        }
        //send comment
        sendComment();
        return false;
    }));
    // load more comment
    $('.c-comments').on('click', '.c-more__comment', function () {
        $parentId = 0;
        $row_num = $('.onecms__comment__list .b-grid:last').attr('row_num');
        loadComments();
        return false;
    });
    // ++++++ load subcomment //
    $('.c-comments').on('click', '.comment-load-more-child', function () {
        let that = this;
        $parentId = $(this).closest(".b-grid__content").attr("parentid");
        $row_num = $(this).parent().find('.b-grid:last').attr('row_num');
        if ($parentId === undefined || $row_num === undefined) return false;
        let url = `/api/getcomment/${$publisherId}_${$parentId}_${$sort_by}_${$row_num}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                if (data.length === 0) $(".comment-load-more-child").hide();
                $.each(data, function (idx2, cmt2) {
                    $(that).before('<div class="b-grid" row_num="' + ($row_num + idx2 + 1) + '"><div class="b-grid__content" parentid="' + $parentId + '">'
                        + '<div class="b-grid__row"><span class="b-grid__title">' + cmt2.Name + '</span> - <span class="b-grid__time">' + convertJsonDate(cmt2.CreatedAt) + '</span></div>'
                        + '<div class="b-grid__row b-grid__desc" id="cmt' + cmt2.CommentId + '">'
                        + cmt2.Content
                        + '</div>'
                        + '<div class="b-grid__row">'
                        + '<span class="b-grid__anwser tl-reply">Trả lời</span>'
                        + '<span class="b-grid__like like" id="' + cmt2.CommentId + '"><i class="icon16-heart"></i>Thích <span class="likeCount">' + cmt2.Liked + '</span></span>'
                        + '<a class="b-grid__share" href="' + $f_share + '#cmt-' + cmt2.CommentId + '"><i class="icon24-facebook"></i>Chia sẻ</a>'
                        + '</div>'
                        + '<div class="c-comment-input comment-reply hidden">'
                        + '<div class="form-group">'
                        + '<textarea class="form-control txt-content" name="" placeholder="Vui lòng nhập tiếng việt có dấu"></textarea>'
                        + '<label class="control-label help-block"><em></em></label> <br />'
                        + '<a href="javascript:void(0)" class="btnSend btn-send-comment" parentid="' + $parentId + '">Gửi bình luận</a>'
                        + '<span> </span>'
                        + '<a class="btn-close-comment" href="javascript:void(0)" parentid="0">Đóng</a>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div><!-- b-grid -->');
                })
            }
        })
        return false;
    });
}
WebControl.answerInContent = function () {
    let $publisherId = WebControl.publisherId;
    let LABEL_CORRECT = ["Bạn là thần đồng", "Bạn rất xuất sắc", "Kiến thức của bạn không tồi", "Bạn có thể làm tốt hơn thế"];
    let t = $("<p>", { id: "quiz_result" }).html("<span class='message'>Hãy trả lời các câu hỏi để biết kết quả của bạn</span>");
    if ($('.quiz-caption').length > 0) {
        $(".leftDetail .description").append(t);
    }

    let a = $(".quiz ul").length;
    $("#quiz_total").html(a);
    let s = 0,
        e = 0;
    let sendTraloicauhoi = function () {
        let name = $.trim($cmt_name);
        let email = $.trim($cmt_email);
        let Traloi = $('.correct.selected').length + "/" + $('.description .quiz').length;
        $.ajax({
            url: "/api/sendAnswer",
            type: "post",
            data: { p: $publisherId, n: name, e: email, t: Traloi },
            success: function (data) {
                data = JSON.parse(data);
                if (data.errorCode == 2) {
                    alert('Bạn phải chờ sau 1 phút sau mới được tiếp tục gửi ý kiến !');
                } else {
                    let $target_message = $('.messagetl');
                    $target_message.removeClass('hidden');
                    $('html, body').stop().animate({
                        'scrollTop': $('.formComment').offset().top
                    }, 300, 'swing', function () { });

                }
                $('.ketquatraloi #txtName').val('');
                $('.ketquatraloi #txtEmail').val('');
                $('.ketquatraloi .form').removeClass('has-error');
                $('.popUp.ketquatraloi').removeClass('active');
                $('#traloiketqua').css({ "display": "none" });
            }
        });

    };
    $(".quiz li strong").each(function (t, a) {
        $(a).parents("  li").addClass("correct");
    })
    $(".quiz li").on("click", function (n) {
        n.preventDefault();

        let i = $(this).parents(".quiz");
        if (!i.hasClass("answered")) {
            if (e++, $(this).hasClass("correct") && s++, e == a) {
                t.append('<span id="correct">' + s + '</span><span id="total">' + a + "</span>");
                let c = 100 * s / a;
                100 == c ? t.find(".message").html(LABEL_CORRECT[0]) : c >= 80 ? t.find(".message").html(LABEL_CORRECT[1]) : c >= 50 ? t.find(".message").html(LABEL_CORRECT[2]) : t.find(".message").html(LABEL_CORRECT[3])
                $('#quiz_result').append('<span id="traloiketqua">Gửi kết quả trả lời</span>');
            }
            i.addClass("answered"), $(this).addClass("selected");
            $("#traloiketqua").on("click", function (n) {
                n.preventDefault();
                $('.popUp.ketquatraloi').addClass('active');
                $(".ketquatraloi").find('.kqtl').html('<span id="correct">' + $('.correct.selected').length + '</span><span id="total">' + $('.description .quiz').length + "</span>");
                return false;
            });
            $(".btnTraloicauhoi").off('click').on("click", function () {
                let $txtName = $('.ketquatraloi #txtName');
                let $txtEmail = $('.ketquatraloi #txtEmail');
                $cmt_name = $.trim($txtName.val());
                $cmt_email = $.trim($txtEmail.val());
                $('#binhluanmodal').find('.form').removeClass('has-error');
                $('#binhluanmodal').find('em').html('');
                if ($cmt_name.length == 0) {
                    $txtName.closest('.box').addClass('has-error').find('em').html('Bạn chưa nhập họ và tên !');
                    return false;
                } else if ($cmt_email.length == 0) {
                    $txtEmail.closest('.box').addClass('has-error').find('em').html('Bạn chưa nhập địa chỉ email !');
                    return false;
                }
                //send comment
                sendTraloicauhoi();
                return false;
            });
        }
    });


};
WebControl.exchangeRate = function () {
    if ($(".exchangeRate").length == 0) return false;
    let loadTygia = function () {
        $.ajax({
            url: "/api/getMoreExchangeRate",
            type: "get",
            success: function (data) {
                if (data === undefined || data.length == 0) return false;
                data.forEach(function (item) {
                    if (item.Type === 1) $(".onecms__currency").append('<tr>\
                                            <td>' + item.CurrencyCode + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Buy) + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Sell) + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Transfer) + '</td>\
                                        </tr>');
                    if (item.Type === 2) $(".onecms__gold").append('<tr>\
                                            <td>' + item.CurrencyCode + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Buy) + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Sell) + '</td>\
                                        </tr>');
                    if (item.Type === 4) $(".onecms__petroleum").append('<tr>\
                                            <td>' + item.CurrencyCode + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Buy) + '</td>\
                                            <td class="text-center">'+ numberWithCommas(item.Sell) + '</td>\
                                        </tr>');

                });
            }
        });
    }
    loadTygia();
}
WebControl.codeIndex = function () {
    if ($(".onecms__codeindex").length == 0) return false;
    let loadCodeIndex = function () {
        $.ajax({
            url: "/api/getMoreCodeIndex",
            type: "get",
            success: function (_data) {
                if (_data.length == 0) return false;
                let _dataJson = JSON.parse(_data);
                if (_dataJson !== undefined) {
                    $.each(_dataJson, function (idx, data) {
                        //let html = `<tr>
                        //                <td>
                        //                    <p>
                        //                        <b>${data.CodeIndex}</b>
                        //                        <span class="text-${(data.Change.indexOf("+") === -1 ? "danger" : "success")}">${data.Index}</span>
                        //                        <i class="icon12-arrow-${(data.PercentChange.indexOf("+") === -1 ? "down-danger" : "up-success")}"></i>
                        //                        <span class="text-${(data.PercentChange.indexOf("+") === -1 ? "danger" : "success")}">${data.Change} (${data.PercentChange})</span>
                        //                        ${data.TransactionValue}
                        //                        <span class="text-orange">Tỷ</span>
                        //                     </p>
                        //                </td>
                        //            </tr>`;
                        let html = `<tr>
                                        <td>
                                            <p>
                                                <b>${data.name}</b>
                                                <span class="text-${(data.change.indexOf("-") >= 0 ? "danger" : "success")}">${data.index}</span>
                                                <i class="icon12-arrow-${(data.percent.indexOf("-") >= 0 ? "down-danger" : "up-success")}"></i>
                                                <span class="text-${(data.percent.indexOf("-") >= 0 ? "danger" : "success")}">${data.change} (${data.percent})</span>
                                             </p>
                                             <p>
                                                ${data.volume}
                                                <span class="text-orange">CP</span>
                                                ${data.value}
                                                <span class="text-orange">Tỷ</span>
                                              </p>
                                        </td>
                                    </tr>`;
                        $('.onecms__codeindex').append(html);
                    });
                }
            },
            error: function (errorMessage) {
                console.log("error" + errorMessage);
            }
        });
    }
    loadCodeIndex();
}
WebControl.audioPlayer = function (options) {

    let settings = $.extend({
        autoPlay: false,
        autoSwitch: false,
        log: false,
    }, options);

    let player = document.querySelector(".onecms__audio");
    if (player === null)
        return false;

    // init
    let btnPlayer = $(".onecms__btn__player");
    let progress = $(".audio-progress");
    let currentTime = $(".c-podcast-player__bar__start");
    let totalTime = $(".c-podcast-player__bar__end");
    let audioBar = $("#audio-progress-bar");
    let audioPoint = $("#draggable-point");
    let rewindAgo = $(".icon20-ago-white");
    let rewindFast = $(".icon20-fast-white");
    let volumeBar = $(".c-volume-bar");
    let mutePlayer = $(".c-podcast-player__control__right .c-podcast-player__btn");
    let minVolume = $(".c-volume-box__left .c-volume-box__btn");
    let maxVolume = $(".c-volume-box__right .c-volume-box__btn");
    let btnRate = $(".c-podcast-player__control__left button");
    let rate = btnRate.find(".is-label");
    let speed = btnRate.find(".is-speed");
    let volumeBarCurrent = volumeBar.find(".c-volume-bar__current");
    let volumeBarProgess = volumeBar.find(".c-volume-bar__progress");

    // event
    player.addEventListener("volumechange", updateVolume);
    player.addEventListener("timeupdate", updateProgress);
    player.addEventListener("canplay", function () {
        let duration = formatTime(player.duration)
        logging(duration);
        totalTime.text(duration);
    });
    player.addEventListener('ended', function () {
        player.currentTime = 0;
        //let nextLink = $(".onecms__loading").find("li:first").find(".b-grid__title a").attr("href");
        //if (nextLink === undefined) return false;
        ////let checked = window.localStorage.getItem("audioautoplay");
        ////let inputCheckbox = $("input[type='checkbox']").is(":checked");
        ////if (inputCheckbox == false && (checked == 'false' || checked == null)) return false;
        //window.location = nextLink;
    }, false);

    // setting
    player.volume = 0.5;
    if (settings.autoPlay) {
        let promiseA = player.play();
        if (promiseA !== undefined) {
            promiseA.then(_ => {
                player.play();
                makePlay();
                logging("playing")

            }).catch(error => {
                logging(error.message)
            });
        };
    }

    // play pause
    btnPlayer.click(_ => togglePlay())

    // change rate
    btnRate.click(function () {
        if (player.paused)
            return false;
        let _rate = rate.attr("data-speed");
        _rate = parseFloat(_rate)
        _rate += 0.5;
        if (_rate > 2)
            _rate = 0.5;
        rate.attr("data-speed", _rate);
        speed.text(` ${_rate}x`)
        player.playbackRate = _rate;
    })

    // progress
    progress.click(function () {
        let x = event.clientX;
        let position = $(this).offset().left;
        let cur = x - position;
        let percentage = (100 / $(this).width() * cur);
        let totalTime = player.duration;
        let currentTime = percentage * totalTime / 100;
        player.currentTime = currentTime;
    });

    // rewind
    rewindAgo.click(function () {
        player.currentTime = player.currentTime - 10;
    });

    rewindFast.click(function () {
        player.currentTime = player.currentTime + 10;
    });

    // volume
    volumeBar.click(function () {
        let x = event.clientX;
        let position = $(this).offset().left;
        let cur = x - position;
        let percentage = (100 / $(this).width() * cur);
        player.volume = percentage / 100;
    });

    // mute
    mutePlayer.click(function () {
        if (player.volume === 0) {
            player.volume = 0.5;
            volumeBar.val(player.volume);
            $(this).removeClass("mute")
        }
        else {
            player.volume = 0;
            volumeBar.val(player.volume);
            $(this).addClass("mute");
        }
    });

    minVolume.click(function () {
        player.volume = 0;
        updateVolume();
    });

    maxVolume.click(function () {
        player.volume = 1;
        updateVolume();
    });

    function updateVolume() {
        volumeBarCurrent.css("left", player.volume * 100 + "%");
        volumeBarProgess.css("width", player.volume * 100 + "%");
    }

    function logging(message) {
        if (settings.log)
            console.log(message);
    }

    function makePlay() {
        if (!player.paused) {
            btnPlayer.find("i").attr('class', 'icon36-pause-white');
        } else {
            btnPlayer.find("i").attr('class', 'icon36-play-white');
        }
    }

    function updateProgress() {
        currentTime.text(formatTime(player.currentTime));
        let percentage = (100 / player.duration * player.currentTime);
        audioBar.css("width", percentage + "%");
        audioPoint.css("left", percentage + "%");
        makePlay();
    }

    function togglePlay() {
        if (player.paused) {
            player.play();
            makePlay();
        } else {
            player.pause();
            makePlay();
        }
    }


};
WebControl.initLoadMorePrint = function () {
    let _print = WebControl.printversion_params();

    function loadDataPrint(apiUrl, type) {
        $.ajax({
            url: apiUrl,
            type: "get",
            success: function (data) {
                if (type == "time") {
                    $('.books').html('');
                    $('.c-more').hide();
                    if (data.length == 0) {
                        $('.books:first').append(`<span>Không tìm thấy kết quả</span>`);
                        return false;
                    }
                }
                if (data.length == 0) {
                    return false;
                }
                $.each(data, function (idx, item) {
                    let html = `<a class="book" href="${item.LinkToMe}" pid="${item.PrintVersionId}">
                                    <img alt = "${item.Title}"  title = "${item.Title}"  src ="${item.ThumbnailPrint}" />
                                    </a>`;
                    $('.books:first').append(html);
                });
                if (type == "time") {
                    $('.c-more').hide();
                }
                else {
                    $('.c-more').show();
                }
            }
        })
    }
    $(window).ready(function () {
        $.datetimepicker.setLocale('vi');
        $('.date-picker').datetimepicker({
            format: 'd-m-Y',
            lang: 'vi',
            time: false,
            timepicker: false,
        })
        $('.date-picker').change(function () {
            const dateA = $('#txtDate').val();
            if (dateA === "") return false;
            const url = `/api/getmoreprintversion/${dateA}`;
            loadDataPrint(url, "time");
        });

        $('.c-more').click(function () {
            $('.c-more').hide();
            if (_print.printversionId === undefined)
                return false;
            const url = `/api/getmoreprintversion/${_print.type}_${_print.printversionId}`;
            loadDataPrint(url);
        })

    });


};
WebControl.initLoadMoreHomePage = function () {

    const loadMoreHomePage = function (element) {
        if ($(element).length === 0 || $(element).hasClass("loaded"))
            return false;
        $(element).addClass('loaded');
        const dataAction = $(element).attr("data-action");
        if (dataAction === undefined || dataAction === "")
            return false;
        const url = `${dataAction}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                if (data.status == "error") {
                    $(element).removeClass('loaded');
                    return false;
                }

                if ($(element).hasClass("fadeout"))
                    $(element).removeClass('fadeout');

                if (data.listData.length === 0) {
                    $(`[data-action='${dataAction}']`).remove();
                    return false;
                }
                
                $(`[data-action='${dataAction}']`).append(data.detailHtml);
                $(`[data-action='${dataAction}']`).removeAttr("style");
                sliderOver4();
                if ($('.scrollbar-macosx').length > 0 && $(window).width() > 991) {
                    $('.scrollbar-macosx').scrollbar();
                }
                thematicSlider();
                newspaper();
                areaSlider();
                if (url.indexOf("survey") > 0) {
                    WebControl.survey();
                }
            }
        })

    };

    let loadMoreEvent = function (element) {
        let _data = WebControl.loadmore_event_params;
        let url = `/api/getMoreArticle/${_data.type}_${_data.keyword === '' ? 'empty' : decodeHtmlEntity(_data.keyword)}_${_data.publisherId}_${_data.channelId}_${_data.eventId}`;
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                if (data.length == 0) {
                    return false;
                }
                const ulElement = element.find("ul");

                element.removeClass("fadeout");
                $.each(data, function (idx, item) {
                    if (idx > 6)
                        return false;
                    let html = `<li>
                                    <div class="b-grid">
                                        <div class="b-grid__img"><a href="${item.LinktoMe2}"><img src="${item.Thumbnail_Small}" alt="${item.Title}" title="${item.Title}" /></a></div>
                                        <div class="b-grid__content">
                                            <div class="b-grid__row">
                                                <h3 class="b-grid__title"><a href="${item.LinktoMe2}">${item.Title}</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>`;
                    ulElement.append(html);
                });

                element.addClass("onecms__loaded");

            }
        })
    };

    $(document).ready(function () {
        $('[data-action = trithucchuyensau]').on('click', '.c-thematic-tabs__title a', function (e) {
            e.preventDefault();
            const id = $(this).attr('href');

            if (id === undefined)
                return;
            
            const parent = $(this).parent();
            const root = $(this).parent().parent().parent().parent();
            const rootElement = $(id);
            //const ul = rootElement.find("ul");
            if (!parent.hasClass('active')) {
                $('.c-thematic-tabs__title ul li.active', root).removeClass('active');
                $('.c-thematic-tabs__pane.active', root).removeClass('active').hide();
                parent.addClass('active');
                $(id).addClass('active').show();
            }

            if ($(this).hasClass("onecms__loaded"))
                return;

            const eventId = $(this).closest("ul").attr("data-id");
            if (eventId === undefined)
                return;
            WebControl.loadmore_event_params.eventId = eventId;
            WebControl.loadmore_event_params.keyword = $(this).text();
            WebControl.loadmore_event_params.publisherId = 0;

            loadMoreEvent(rootElement);

            $('.c-thematic-slider .c-thematic-item').matchHeight();
            
            return;
        });

    });
    
    // scroll for loadmore
    $(window).scroll(function () {
        const boxes = document.querySelectorAll('.onecms_load_view');
        if (boxes.length === 0) return false;
        const triggerTop = window.innerHeight + 600;
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerTop) {
                loadMoreHomePage(box);
            }
            
        });
    });
}
WebControl.survey = function () {

    if ($(".onecms__vote").length === 0)
        return false;

    const _cookieName = "_optionSurveyId";

    const setCookie = function(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const getCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const eraseCookie = function(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    const setStyleVote = function (optionSurveyId) {
        let idVote = "optionsurvey_" + optionSurveyId;
        $("label[for= " + idVote + "]").css("color", "#9F224E");
        $(".onecms__vote input").each(function () {
            let voteId = idVote;
            if ($(this).attr("id") == voteId) {
                $(this).prop('checked', true);
                $(this).parent().css({ "background": "#d2c0c0", "border-radius" : "10px"})
            }
            else {
                $(this).prop("disabled", true);
            }
        });
        $(".c-survey-box__btn").css("display", "none");
    }

    // get id from cookie
    const optionSurveyIdFromCookie = getCookie(_cookieName);
    if (optionSurveyIdFromCookie) {
        setStyleVote(optionSurveyIdFromCookie);
    }

    let voteSurvey = function () {
        let optionSurveyId = $(".onecms__vote input[type='radio']:checked").val();

        if (optionSurveyId == undefined) {
            alert('Bạn chưa chọn thông tin khảo sát!');
            return false;
        }
        let url = "/api/addoptionsurvey-" + optionSurveyId;

        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                data = JSON.parse(data);
                if (data.errorCode == 1) {
                    setStyleVote(optionSurveyId);
                    setCookie("_optionSurveyId", optionSurveyId, 1)
                    alert('Cảm ơn bạn đã gửi bình chọn !');
                }
                else {
                    console.log("error...");
                }
            }

        })
    };

    $(window).ready(function () {
        $(".onecms__vote").on("click", ".c-survey-box__btn",function () {
            voteSurvey();
        });
        
    });
    
}
 
$(document).ready(function () {
    $('.c-search__btn').click(function () {
        let keyword = $(this).parent().find('input').val();
        if (keyword !== undefined && $.trim(keyword) != '') {
            keyword = keyword.replace("&","%26");
            window.location = '/search?q=' + keyword.replace(/\s/gi, "+");
        }
    });
    $('.c-search__inner input').keyup(function (evt) {
        if (evt.keyCode == 13 || evt.which == 13) {
            let searchButton = $(this).parent().find('.c-search__btn');
            if (searchButton === undefined) return false;
            searchButton.trigger('click');
            return false;
        }
    });
    $('.onecms__popup').click(function (e) {
        let _urlPopup = $(this).attr('href');
        if (_urlPopup === undefined || _urlPopup === '') return false;
        openPopup(_urlPopup);
        return false;
    });
    $('.onecms__copy').click(function (e) {
        e.preventDefault();
        copyToClipboard(this);
        return false;
    });
    $(".onecms__goback").click(function (event) {
        event.preventDefault();
        history.back(1);
    });
    $(".js-btn-menu").click(function (e) {
        e.preventDefault();
        $(".js-bool-list").toggleClass("active");
    });
    if (window.localStorage.getItem("_city") === null) {
        const defaultCityId = $(".onecms__weather").attr("data-city");
        if (defaultCityId !== undefined)
            window.localStorage.setItem("_city", defaultCityId);
    };
    if ($(".onecms__weather").length > 0) {
        getWeather();
    }
    
});