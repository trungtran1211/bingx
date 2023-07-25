<?php /* Template Name: dsmagiaodich */ ?>

<?php
/**
 * The main template file
 */
get_header(); ?>


<div class="products" id="products" data-type="forex">
        <div class="products-shape products-shape-1"></div>
        <div class="products-shape products-shape-2"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <ul class="list-unstyled products-menu js-products-menu">
                        <li class="forex active">
                            <a style="pointer-events: none;" id="forex_btn_prodPage_showForex_topNavigation">
                                Forex
                            </a>
                        </li>
                    </ul>

                </div>
                <div class="col-lg-9">
                    <div class="main">
                        <div class="row products-header">
                            <div class="col-md-7 col-lg-8">
                                <h1>Forex</h1>
                                <ul class="d-none d-md-flex list-unstyled">
                                    <li>Spreads thấp chỉ từ 0.1 pips</li>
                                    <li>24 giờ, 5 ngày mỗi tuần</li>
                                    <li>48 cặp tiền tệ</li>
                                    <li>Không có mức nạp tiền tối thiểu</li>
                                    <li>Có thể giao dịch bằng Microlot</li>
                                    <li>Nạp & rút tiền nhanh chóng</li>
                                </ul>
                                <p class="d-md-none">Giao dịch Forex dễ dàng hơn khi dùng ứng dụng xStation. Đầu tư <b>
                                        48 cặp tiền tệ </b> trong vài giây chỉ cần nhấn nút.</p>
                                
                            </div>
                            <div class="col-md-5 col-lg-4 d-none d-md-block position-relative">
                                <div class="products-header-background forex"></div>
                            </div>
                        </div>
                        <ul class="d-md-none list-unstyled products-values">
                            <li>0,1 pip<br><small>spread thấp</small></li>
                            <li>48<br><small>cặp tiền tệ</small></li>
                            <li>1:500<br><small>đòn bẩy cao nhất</small></li>
                            <li>32<br><small>ngân hàng nội địa nạp rút</small></li>
                        </ul>


                        <div class="xtbwit loading js-xtbwit" id="xtbWidgetInstrumentsTable"
                            data-xstationurl="wss://api5widget.x-station.eu/widget" data-endpoint="meta1"
                            data-user="10383757" data-accountid="meta1_10383757" data-accesscode="fertTRYEWEwerfrwt56W"
                            data-environment="prod"
                            data-subscribedsymbols='{"1_EURUSD_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_GBPUSD_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_USDJPY_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_USDCHF_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_EURGBP_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_EURJPY_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_AUDUSD_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_NZDUSD_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_USDCAD_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_USDTRY_5":"24 h from Sunday 11:00 pm to Friday 10:00 pm CET","1_USDCLP_5":"12:30 pm - 5:45 pm CET ; 2:30 pm - 7:45 pm CEST"}'
                            data-chartStart="1689650306000" data-chartend="1690255106000" data-chartinterval="14400000">
                            <span class="loader xtbwit-loader"></span>
                            <div class="xtbwit-container">
                                <div class="xtbwit-header">
                                    <div class="xtbwit-header-symbol">Mã giao dịch</div>
                                    <div class="xtbwit-header-bid">Giá Bid</div>
                                    <div class="xtbwit-header-ask">Giá Ask</div>
                                    <div class="xtbwit-header-spread">Spread</div>
                                    <div class="xtbwit-header-change">Thay đổi</div>
                                </div>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/eur-usd"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="EURUSD"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/eur-usd">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="E">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/eurusd.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/eurusd.svg">
                                        </span>
                                        EUR/USD
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of Euro to American Dollar on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of Euro to American Dollar on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value up">
                                            <span id="bid">1.10<strong>77</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">1.10<strong>78</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00012</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.13%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/gbp-usd"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="GBPUSD"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/gbp-usd">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="G">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/gbpusd.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/gbpusd.svg">
                                        </span>
                                        GBP/USD
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of British Pound to American Dollar on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of British Pound to American Dollar on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">1.28<strong>33</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">1.28<strong>35</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00015</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.09%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/usd-jpy"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="USDJPY"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/usd-jpy">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe><iframe
                                            class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="U">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/usdjpy.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/usdjpy.svg">
                                        </span>
                                        USD/JPY
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of American Dollar to Japanese Yen on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of American Dollar to Japanese Yen on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value up">
                                            <span id="bid">141.3<strong>31</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">141.3<strong>45</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.014</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">-0.07%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/usd-chf"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="USDCHF"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/usd-chf">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="U">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/usdchf.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/usdchf.svg">
                                        </span>
                                        USD/CHF
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of American Dollar to Swiss Frank on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of American Dollar to Swiss Frank on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">0.86<strong>88</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">0.86<strong>89</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00018</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">-0.08%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/eur-gbp"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="EURGBP"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/eur-gbp">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="E">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/eurgbp.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/eurgbp.svg">
                                        </span>
                                        EUR/GBP
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of Euro to British Pound on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of Euro to British Pound on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">0.8<strong>63</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">0.86<strong>32</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.0002</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.07%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/eur-jpy"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="EURJPY"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/eur-jpy">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe><iframe
                                            class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="E">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" ls-is-cached lazyloaded"
                                                data-src="https://logos.xtb.com/eurjpy.svg" width="32px" height="32px"
                                                src="https://logos.xtb.com/eurjpy.svg">
                                        </span>
                                        EUR/JPY
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of Euro to Japanese Yen on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of Euro to Japanese Yen on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value up">
                                            <span id="bid">156.5<strong>53</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value up">
                                            <span id="ask">156.5<strong>72</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.019</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.07%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/aud-usd"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="AUDUSD"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/aud-usd">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe><iframe
                                            class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="A">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" ls-is-cached lazyloaded"
                                                data-src="https://logos.xtb.com/audusd.svg" width="32px" height="32px"
                                                src="https://logos.xtb.com/audusd.svg">
                                        </span>
                                        AUD/USD
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of Australian Dollar to American Dollar on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of Australian Dollar to American Dollar on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">0.67<strong>59</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">0.6<strong>76</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00013</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.32%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/nzd-usd"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="NZDUSD"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/nzd-usd">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="N">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" ls-is-cached lazyloaded"
                                                data-src="https://logos.xtb.com/nzdusd.svg" width="32px" height="32px"
                                                src="https://logos.xtb.com/nzdusd.svg">
                                        </span>
                                        NZD/USD
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of New Zealand Dollar to American Dollar on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of New Zealand Dollar to American Dollar on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">0.62<strong>12</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value down">
                                            <span id="ask">0.62<strong>13</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00016</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0.13%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/usd-cad"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="USDCAD"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/usd-cad">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="U">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" ls-is-cached lazyloaded"
                                                data-src="https://logos.xtb.com/usdcad.svg" width="32px" height="32px"
                                                src="https://logos.xtb.com/usdcad.svg">
                                        </span>
                                        USD/CAD
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of American Dollar to Canadian Dollar on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of American Dollar to Canadian Dollar on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">1.31<strong>57</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">1.31<strong>59</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.00018</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">-0.08%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/usd-try"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="USDTRY"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/usd-try">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="U">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" ls-is-cached lazyloaded"
                                                data-src="https://logos.xtb.com/usdtry.svg" width="32px" height="32px"
                                                src="https://logos.xtb.com/usdtry.svg">
                                        </span>
                                        USD/TRY
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of American Dollar to Turkish Lira on the interbank market."
                                            data-bs-original-title="Instrument which price is based on quotations of American Dollar to Turkish Lira on the interbank market."><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value down">
                                            <span id="bid">26.90<strong>49</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">26.98<strong>44</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.07947</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">-0.03%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">24 h from Sunday 11:00 pm to Friday 10:00 pm CET</div>
                                    </div>
                                </a>
                                <a href="/vn/trading-services/range-of-markets/forex-trading/usd-clp"
                                    class="xtbwit-box js-xtbwit-box chart-ready" data-symbol="USDCLP"
                                    data-href="/vn/trading-services/range-of-markets/forex-trading/usd-clp">
                                    <div class="xtbwit-chart"><iframe class="chartjs-hidden-iframe"
                                            style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;"></iframe>
                                        <canvas class="js-chart" height="58" width="161"
                                            style="width: 180px; height: 65px;"></canvas>
                                    </div>
                                    <div class="xtbwit-symbol">
                                        <span class="instrument-img" data-first-letter="U">
                                            <img onerror="this.parentNode.className='instrument-img no-image';"
                                                class=" lazyloaded" data-src="https://logos.xtb.com/usdclp.svg"
                                                width="32px" height="32px" src="https://logos.xtb.com/usdclp.svg">
                                        </span>
                                        USD/CLP
                                        <span class="xtbwit-tooltip" data-bs-toggle="tooltip"
                                            aria-label="Instrument which price is based on quotations of American Dollar to Chilean Peso on the interbank market"
                                            data-bs-original-title="Instrument which price is based on quotations of American Dollar to Chilean Peso on the interbank market"><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"
                                                viewBox="0 0 12 12">
                                                <g transform="translate(-318 -558)" fill="#1c3044" fill-opacity=".3">
                                                    <path
                                                        d="M330 564a6 6 0 1 1-12.01-.01A6 6 0 0 1 330 564zm-11 0a5 5 0 1 0 9.98.02A5 5 0 0 0 319 564zm7-1a1.9 1.9 0 0 1-1.3 1.8l-.2.06v.64h-1v-.64c0-.43.28-.82.69-.95l.2-.07c.36-.12.61-.46.61-.84a1 1 0 0 0-1-1 1 1 0 0 0-1 1h-1c0-1.1.9-2 2-2a2 2 0 0 1 2 2zm-1.5 3v1h-1v-1z">
                                                    </path>
                                                </g>
                                            </svg></span>
                                    </div>
                                    <div class="xtbwit-bid">
                                        <div class="xtbwit-title">Giá Bid</div>
                                        <div class="xtbwit-value">
                                            <span id="bid">827.<strong>53</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-ask">
                                        <div class="xtbwit-title">Giá Ask</div>
                                        <div class="xtbwit-value">
                                            <span id="ask">827.<strong>96</strong></span>
                                            <span class="xtbwit-arrow"><svg width="8px" height="8px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 512.171 512.171">
                                                    <g>
                                                        <path
                                                            d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z">
                                                        </path>
                                                    </g>
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-spread">
                                        <div class="xtbwit-title">Spread</div>
                                        <div class="xtbwit-value">
                                            <span id="spread">0.43</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-change">
                                        <div class="xtbwit-title">Thay đổi</div>
                                        <div class="xtbwit-value">
                                            <span id="change">0%</span>
                                        </div>
                                    </div>
                                    <div class="xtbwit-hours">
                                        <div class="xtbwit-title">Thời gian Giao dịch</div>
                                        <div class="xtbwit-value">12:30 pm - 5:45 pm CET ; 2:30 pm - 7:45 pm CEST</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="modal fade modal-instrument-details" id="miniWidgetModal" tabindex="-1"
                            role="dialog" aria-labelledby="miniWidgetModal" aria-hidden="true" data-accountid="10262576"
                            data-endpointid="meta1" data-accesscode="suPudUb8AvawupU" data-language="vi"
                            data-clickurl="https://trading.xtbvn.com/?branch=vn">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-hidden="true">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/closeModal.e71f3e66.png"
                                                alt="">
                                        </button>
                                        <h4 class="modal-title"></h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-3">
                                                <span class="js-instrument-img instrument-img">
                                                    <img onError="this.parentNode.className='instrument-img no-image';"
                                                        width="32px" height="32px">
                                                </span>
                                                <span
                                                    class="active-instrument-placeholder js-active-instrument-placeholder"
                                                    data-logo="https://logos.xtb.com/__symbol__.svg"></span>
                                            </div>
                                            <div class="col-9 menu-container swiper-container">
                                                <a href="#" class="menu-prev js-menu-prev swiper-button-prev">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="25px"
                                                            height="13px" viewBox="0 0 27 13">
                                                            <g stroke="none" stroke-width="1" fill-rule="evenodd"
                                                                transform="translate(-269, -307)">
                                                                <path
                                                                    d="M289.692943,307.000101 C289.468865,306.995797 289.264179,307.129247 289.173686,307.333727 C289.085348,307.54036 289.130594,307.779279 289.287879,307.938558 L293.687559,312.516763 L269.829748,312.516763 C269.631525,312.51461 269.44623,312.617927 269.347119,312.790121 C269.245853,312.962314 269.245853,313.173252 269.347119,313.345446 C269.44623,313.517639 269.631525,313.620956 269.829748,313.618803 L293.687559,313.618803 L289.287879,318.197008 C289.076729,318.416555 289.085348,318.765248 289.305116,318.976185 C289.524885,319.187123 289.873928,319.180666 290.085079,318.958966 L295.74735,313.067783 L290.085079,307.1766 C289.983813,307.066826 289.84161,307.004406 289.692943,307.000101 Z" />
                                                            </g>
                                                        </svg></span>
                                                </a>
                                                <a href="#" class="menu-next js-menu-next swiper-button-next">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="25px"
                                                            height="13px" viewBox="0 0 27 13">
                                                            <g stroke="none" stroke-width="1" fill-rule="evenodd"
                                                                transform="translate(-269, -307)">
                                                                <path
                                                                    d="M289.692943,307.000101 C289.468865,306.995797 289.264179,307.129247 289.173686,307.333727 C289.085348,307.54036 289.130594,307.779279 289.287879,307.938558 L293.687559,312.516763 L269.829748,312.516763 C269.631525,312.51461 269.44623,312.617927 269.347119,312.790121 C269.245853,312.962314 269.245853,313.173252 269.347119,313.345446 C269.44623,313.517639 269.631525,313.620956 269.829748,313.618803 L293.687559,313.618803 L289.287879,318.197008 C289.076729,318.416555 289.085348,318.765248 289.305116,318.976185 C289.524885,319.187123 289.873928,319.180666 290.085079,318.958966 L295.74735,313.067783 L290.085079,307.1766 C289.983813,307.066826 289.84161,307.004406 289.692943,307.000101 Z" />
                                                            </g>
                                                        </svg></span>
                                                </a>
                                                <div class="menu-wrapper swiper-wrapper">
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="EURUSD" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/eur-usd">EUR/USD</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="GBPUSD" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/gbp-usd">GBP/USD</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="USDJPY" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/usd-jpy">USD/JPY</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="USDCHF" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/usd-chf">USD/CHF</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="EURGBP" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/eur-gbp">EUR/GBP</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="EURJPY" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/eur-jpy">EUR/JPY</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="AUDUSD" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/aud-usd">AUD/USD</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="NZDUSD" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/nzd-usd">NZD/USD</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="USDCAD" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/usd-cad">USD/CAD</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="USDTRY" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/usd-try">USD/TRY</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-slide js-slide swiper-slide">
                                                        <div class="js-widget-modal-instrument-switcher">
                                                            <a data-symbol="USDCLP" href="#"
                                                                data-href="/vn/trading-services/range-of-markets/forex-trading/usd-clp">USD/CLP</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="chart">
                                                    <div id="js-widget-modal-instrument-details-chart"></div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="EURUSD">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">EURUSD</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="GBPUSD">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">GBPUSD</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="USDJPY">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">USDJPY</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="USDCHF">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">USDCHF</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="EURGBP">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">EURGBP</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="EURJPY">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">EURJPY</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="AUDUSD">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">AUDUSD</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="NZDUSD">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">NZDUSD</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="USDCAD">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">USDCAD</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="USDTRY">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">USDTRY</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="js-widget-data-update">
                                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                            data-symbol="USDCLP">
                                                            <div class="buy-sell-container">
                                                                <div class="buy-sell-box">
                                                                    <div class="buy-sell-data">
                                                                        <div class="symbol">USDCLP</div>
                                                                        <div class="ask">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-bid">
                                                                                    <p class="title"> Sell </p>
                                                                                    <span id="bid">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="copy">or</div>
                                                                        <div class="bid">
                                                                            <a href="#" data-bs-toggle="modal"
                                                                                data-bs-target="#detailsModal"
                                                                                data-bs-dismiss="modal">
                                                                                <div class="box-ask">
                                                                                    <p class="title"> Buy </p>
                                                                                    <span id="ask">-</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="change">
                                                                <span id="change"></span>
                                                                <span class="arrow">
                                                                    <svg width="8px" height="8px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        viewBox="0 0 512.171 512.171">
                                                                        <g>
                                                                            <path
                                                                                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z" />
                                                                        </g>
                                                                    </svg> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="disclaimer">
                                                        &nbsp;
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="info">
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="EURUSD">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of Euro to American Dollar on the interbank
                                                            market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/eur-usd">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">EUR 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="GBPUSD">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of British Pound to American Dollar on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/gbp-usd">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">GBP 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="USDJPY">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of American Dollar to Japanese Yen on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/usd-jpy">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">USD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="USDCHF">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of American Dollar to Swiss Frank on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/usd-chf">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">USD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="EURGBP">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of Euro to British Pound on the interbank market.
                                                        </p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/eur-gbp">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">EUR 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="EURJPY">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of Euro to Japanese Yen on the interbank market.
                                                        </p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/eur-jpy">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">EUR 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="AUDUSD">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of Australian Dollar to American Dollar on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/aud-usd">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">AUD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="NZDUSD">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of New Zealand Dollar to American Dollar on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/nzd-usd">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">NZD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="USDCAD">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of American Dollar to Canadian Dollar on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/usd-cad">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">USD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="USDTRY">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of American Dollar to Turkish Lira on the
                                                            interbank market.</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/usd-try">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">USD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:40 (2.5%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">24 h from Sunday 11:00 pm to Friday
                                                                        10:00 pm CET</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                                        data-symbol="USDCLP">
                                                        <p class="description">Instrument which price is based on
                                                            quotations of American Dollar to Chilean Peso on the
                                                            interbank market</p>
                                                        <a class="js-href"
                                                            href="/vn/trading-services/range-of-markets/forex-trading/usd-clp">
                                                            CHI TIẾT
                                                        </a>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">spread thấp nhất</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">Swap Long/Short</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">spread mục tiêu</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p class="type">giá trị của một lot</p>
                                                                    <p class="value">USD 100 000</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">đòn bẩy</p>
                                                                    <p class="value">1:500 (0.2%)</p>
                                                                </td>
                                                                <td>
                                                                    <p class="type">phí giao dịch</p>
                                                                    <p class="value">-</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p class="type">Giờ Giao Dịch</p>
                                                                    <p class="value">12:30 pm - 5:45 pm CET ; 2:30 pm -
                                                                        7:45 pm CEST</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="EURUSD">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="GBPUSD">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="USDJPY">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="USDCHF">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="EURGBP">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="EURJPY">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="AUDUSD">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="NZDUSD">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="USDCAD">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="USDTRY">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                        <div class="widget-modal-instrument-details js-widget-modal-instrument-details d-none"
                                            data-symbol="USDCLP">
                                            <a class="btn btn-green btn-to-right btn-big js-widget-btn"
                                                href="/vn/trading-services/account-information/market-specification#forex">
                                                XEM DANH SÁCH ĐẦY ĐỦ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade modal-try-demo" id="detailsModal" tabindex="-1" role="dialog"
                            aria-labelledby="detailsModal">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header d-block">
                                        Tạo tài khoản
                                        <button type="button" class="btn-close modal-close" data-bs-dismiss="modal"
                                            aria-label="Tắt"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Bạn đã có tài khoản XTB? <a href="https://trading.xtbvn.com/?branch=vn"
                                                class="js-close-buySell" target="_blank" rel="noreferrer">Đăng nhập vào
                                                tài khoản</a></p>
                                        <p>Đăng ký tài khoản mới thật nhanh chóng và dễ dàng. Chỉ cần chọn giữa tài
                                            khoản thật và tài khoản demo là bạn đã sẵn sàng đầu tư chỉ trong vài phút.
                                        </p>
                                        <a href="/vn/live-account" class="btn btn-green btn-real">Tạo tài khoản</a>
                                        <a href="/vn/demo-account" class="btn btn-border-green btn-demo">Khám phá nền
                                            tảng</a>
                                        <div>
                                            <button data-bs-target="#miniWidgetModal" data-bs-toggle="modal"
                                                data-bs-dismiss="modal"
                                                class="btn-close btn btn-green btn-back js-back-to-details">QUAY
                                                LẠI</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="d-md-none products-benefits">
                            <div class="products-benefits-single">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="27" viewBox="0 0 36 27">
                                    <path fill="#18181e" d="M13.307 23.907a.79.79 0 0 0-.688.383.768.768 0 0 0 0 .776.79.79 0 0 0 .688.383h9.395a.79.79
    0 0 0 .688-.383.768.768 0 0 0 0-.776.79.79 0 0 0-.688-.383zM18 16.97c.247 0
    .455.111.595.28.031.081.077.154.135.22a.767.767 0 0 1-.73 1.042.767.767 0 0
    1-.783-.771c0-.434.343-.771.783-.771zm9.04-5.257a.783.783 0 0 0-.424.114l-7.125 4.15A2.328 2.328 0 0 0 18
    15.427c-1.287 0-2.347 1.045-2.347 2.313 0 1.267 1.06 2.312 2.347 2.312 1.286 0 2.346-1.045 2.346-2.312
    0-.15-.018-.301-.046-.446l7.11-4.143a.767.767 0 0 0 .37-.858.78.78 0 0 0-.74-.581zM17.987 0a.78.78 0 0 0-.143.018
    18.104 18.104 0 0 0-8.998 2.463.929.929 0 0 0-.183.105 17.952 17.952 0 0 0-6.429 6.625.756.756 0 0 0-.098.174 17.405
    17.405 0 0 0-2.12 8.2.729.729 0 0 0 0 .303c.024 3.258.85 6.119 2.453 8.741a.788.788 0 0 0 .908.334.772.772 0 0 0
    .544-.791l.036.472 2.937-1.677A.756.756 0 0 0 7.3 24.3a.768.768 0 0 0-.397-.678.796.796 0 0 0-.795.012L3.5
    25.123c-1.112-2.029-1.784-4.157-1.9-6.611h3.104a.79.79 0 0 0 .687-.383.768.768 0 0 0 0-.777.79.79 0 0
    0-.687-.382H1.599a15.92 15.92 0 0 1 1.613-6.248c.44.235 1.143.608 2.722 1.454.248.139.55.136.795-.009a.767.767 0 0
    0-.05-1.349C5.1 9.975 4.4 9.602 3.958 9.368a16.356 16.356 0 0 1 4.929-5.095l1.61 2.64a.787.787 0 0 0
    1.362-.018.769.769 0 0 0-.02-.777l-1.611-2.64a16.554 16.554 0 0 1 6.99-1.9v3.059a.773.773 0 0 0 .388.677.8.8 0 0 0
    .789 0 .773.773 0 0 0 .388-.677v-3.06c2.267.106 4.412.66 6.346 1.579L23.646 5.85a.765.765 0 0 0 .009.783.784.784 0 0
    0 .697.37.786.786 0 0 0 .672-.418l1.479-2.692a16.363 16.363 0 0 1 5.163 4.866l-2.68 1.587a.771.771 0 0
    0-.387.674c.006.28.158.533.406.669a.8.8 0 0 0 .788-.021l2.68-1.587A15.953 15.953 0 0 1 34.4 16.97h-3.105a.79.79 0 0
    0-.687.382.768.768 0 0 0 0 .777.79.79 0 0 0 .687.383h3.105c-.117 2.454-.789 4.582-1.898 6.612l-2.612-1.49a.796.796 0
    0 0-.794-.013.768.768 0 0 0-.398.678c0 .28.156.536.407.668l2.936 1.677.036-.472a.772.772 0 0 0 .544.791.788.788 0 0
    0 .908-.334c1.604-2.62 2.429-5.48 2.456-8.732a.864.864 0 0 0 0-.307 17.46 17.46 0 0 0-2.511-8.88.685.685 0 0
    0-.089-.159h-.003c0-.003-.003-.003-.006-.006a17.974 17.974 0 0 0-6.706-6.329.789.789 0 0 0-.217-.114A18.08 18.08 0 0
    0 18.149.018.72.72 0 0 0 17.987 0z" />
                                </svg>
                                <h2>Tốc độ và kiểm soát</h2>
                                <p>xStation là một nền tảng giúp bạn quản lý lệnh đầu tư Forex ngay trong lòng bàn tay.
                                    Mở tài khoản chỉ trong vài phút.</p>
                            </div>
                            <div class="products-benefits-single">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26">
                                    <path fill="#18181e" d="M32 21.517v1.345H8v-1.345zm-30.667.678c0 1.124.888 2.022 2 2.022 1.113 0 2-.897
    2-2.022a2.001 2.001 0 0 0-2-2.023c-1.112 0-2 .898-2 2.023zm5.334-.005c0 1.849-1.5 3.362-3.334 3.362C1.5 25.552 0
    24.039 0 22.19c0-1.85 1.5-3.362 3.333-3.362 1.833 0 3.334 1.513 3.334 3.362zM32 12.103v1.355H8v-1.355zm-30.667.673c0
    1.122.888 2.017 2 2.017 1.113 0 2-.895 2-2.017a1.999 1.999 0 0 0-2-2.017c-1.112 0-2 .895-2 2.017zm5.334.005c0
    1.851-1.5 3.367-3.334 3.367C1.5 16.148 0 14.632 0 12.78c0-1.852 1.5-3.367 3.333-3.367 1.833 0 3.334 1.515 3.334
    3.367zM32 2.69v1.344H8V2.69zM4 3.362a.67.67 0 0 1-.667.672.67.67 0 0 1-.666-.672.67.67 0 0 1 .666-.672.67.67 0 0 1
    .667.672zm-2.667.005c0 1.125.888 2.022 2 2.022 1.113 0 2-.897 2-2.022a2.001 2.001 0 0 0-2-2.022c-1.112 0-2 .897-2
    2.022zm5.334-.005c0 1.849-1.5 3.362-3.334 3.362C1.5 6.724 0 5.211 0 3.362 0 1.513 1.5 0 3.333 0c1.833 0 3.334 1.513
    3.334 3.362z" />
                                </svg>
                                <h2>Nhiều lựa chọn</h2>
                                <p>Giao dịch ngay với 48 cặp tiền tệ trực tiếp như EURUSD, GBPUSD, AUDUSD và còn nhiều
                                    nữa. Hoàn toàn đơn giản và nhanh chóng.</p>
                            </div>
                            <div class="products-benefits-single">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 32 36">
                                    <path fill="#18181e" d="M21.59 10.57l-.385.61-5.91 9.124-3.909-3.501-.522-.474-.978 1.061.546.497 4.5
    4.065.636.565.477-.723 6.387-9.847.386-.61zM16 1.445c1.196 0 2.582.8 4.864 1.965 2.167 1.106 5.216 2.463 9.636
    3.5C30.233 26.5 16.912 33.85 15.977 34.34c-.451-.217-3.6-1.78-7.068-5.847C5.253 24.207 1.634 17.312 1.5
    6.909c4.42-1.036 7.469-2.393 9.636-3.5C13.418 2.245 14.804 1.446 16 1.446zM16 0c-1.784 0-3.29.98-5.523 2.123C8.244
    3.266 5.247 4.647.568 5.669L0 5.804v.565C0 17.44 3.906 24.84 7.818 29.428c3.912 4.587 7.887 6.414 7.887
    6.414l.318.158.318-.158S32 27.802 32 6.369v-.565l-.568-.135c-4.68-1.022-7.676-2.403-9.91-3.546C19.29.98 17.785 0 16
    0z" />
                                </svg>
                                <h2>An toàn</h2>
                                <p>Nạp rút an toàn, chuyển khoản bằng Ngân Lượng, Mastercard, Visa, Netteller, Skrills
                                </p>
                            </div>
                            <div class="products-benefits-single">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33">
                                    <path fill="#18181e" d="M16.56 30.192h3.6c.405 0 .72.309.72.707a.705.705 0 0 1-.72.707h-3.6a.705.705 0 0
    1-.72-.707c0-.398.315-.708.72-.708zM32.4 14.196c.447.187.872.54 1.238 1.075.556.815.922 2.008.922 3.335 0
    1.328-.366 2.52-.923 3.335-.365.535-.79.89-1.237 1.076zm-28.8
    0v8.82c-.447-.186-.872-.54-1.237-1.075-.557-.814-.923-2.007-.923-3.335 0-1.327.366-2.52.923-3.335.365-.535.79-.888
    1.237-1.075zm26.64-1.558c.405 0 .72.307.72.702v10.523a.702.702 0 0 1-.72.701.702.702 0 0
    1-.72-.701V13.34c0-.395.315-.702.72-.702zm-24.48 0c.405 0 .72.307.72.702v10.523a.702.702 0 0 1-.72.701.702.702 0 0
    1-.72-.701V13.34c0-.395.315-.702.72-.702zM18 0C11.298 0 5.771 4.978 5.107 11.344a2.156 2.156 0 0 0-1.395
    1.36c-1.026.2-1.918.886-2.542 1.8C.425 15.591 0 17.026 0 18.605c0 1.58.425 3.015 1.17 4.103.624.914 1.516 1.6 2.542
    1.8a2.163 2.163 0 0 0 2.048 1.47c1.184 0 2.16-.952 2.16-2.107V13.34c0-.872-.565-1.612-1.35-1.93C7.2 5.782 12.06
    1.404 18 1.404c5.94 0 10.8 4.378 11.43 10.006-.785.318-1.35 1.058-1.35 1.93v10.532c0 .897.6 1.651 1.417 1.953-.098
    1.341-.565 2.35-1.305 3.072-.835.815-2.055 1.294-3.712 1.294h-2.295a2.165 2.165 0 0 0-2.025-1.404h-3.6c-1.184
    0-2.16.952-2.16 2.107 0 1.154.976 2.106 2.16 2.106h3.6c.93 0 1.724-.592 2.025-1.404h2.295c1.943 0 3.603-.573
    4.748-1.69 1.029-1.004 1.603-2.408 1.71-4.059a2.148 2.148 0 0 0 1.35-1.338c1.026-.2 1.918-.886 2.542-1.8.745-1.088
    1.17-2.523 1.17-4.103 0-1.58-.425-3.014-1.17-4.103-.624-.913-1.516-1.599-2.542-1.799a2.156 2.156 0 0
    0-1.395-1.36C30.229 4.978 24.703 0 18 0z" />
                                </svg>
                                <h2>Hỗ trợ</h2>
                                <p>Chúng tôi tin tưởng xây dựng mối quan hệ lâu dài với khách hàng. Đó là lý do vì sao
                                    các khách hàng của XTB luôn có người hỗ trợ với vai trò cung cấp dịch vụ tốt nhất.
                                </p>
                            </div>
                            <!-- <div class="d-md-none js-btns">
                                                                    <a href="/vn/live-account"
                                       class="btn btn-big btn-green desktop">
                                        Tạo tài khoản
                                    </a>
                                                                <a href="https://m-xstation.xtb.com/?link=https://xstation5.xtb.com&apn=com.xtb.xmobile2&isi=949905889&ibi=com.xtb.xStation"
                                   class="btn btn-big btn-green os-ios os-apple os-android os-windows">
                                    Tạo tài khoản
                                </a>
                                <button class="products-go-back js-scroll-to-top">hoặc <strong> QUAY LẠI </ strong> <br> xem tiếp các mục khác</button>
                            </div> -->
                        </div>
                        <div class="products-platforms">
                            <h2>Giao dịch trên 2 nền tảng hàng đầu</h2>
                            <div class="tab-content">
                                <img data-sizes="auto"
                                    data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/pages/products/phone.9d0eca48.png"
                                    data-srcset="//xas.scdn5.secure.raxcdn.com/build/twigImages/pages/products/phone@2x.ed9074eb.png 2x"
                                    alt="" class="lazyload">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Nền tảng xStation 5 nổi tiếng: Dù bạn là nhà đầu tư ở cấp độ nào, thiết kế
                                            của nền tảng xStation cũng có thể làm hài lòng người dùng. Với sự minh bạch
                                            tuyệt đối, bình luận thị trường , các thông số trực tuyến và hệ thống đồ thị
                                            trực quan, đó là lý do vì sao xStation được đánh giá là 'Nền Tảng Giao Dịch
                                            Tốt Nhất 2016' do Online Personal Wealth Awards bình chọn.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="products-switch-to-xtb">
                            <h2>Tại sao chọn XTB?</h2>
                            <p>Tại XTB, mục tiêu của chúng tôi là nâng cấp trải nghiệm giao dịch của khách hàng bằng
                                sáng tạo công nghệ đỉnh cao. Là nhà môi giới quốc tế chuẩn 5 sao, sự hài lòng của quý
                                khách hàng là điều chúng tôi luôn nỗ lực hướng tới.</p>
                            <div class="zoom-boxes">
                                <div class="d-block d-lg-none">
                                    <div id="accordion">
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse1" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/instruments.3f233676.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">2200+ sản phẩm</h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse1" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">Thị trường tài chính quốc tế đa
                                                    dạng bao gồm Forex, Chỉ số, Hàng hóa, ETFs và nhiều sản phẩm khác.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse2" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/safe&amp;security.e0da7853.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">An toàn và Bảo mật</h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse2" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">XTB là một trong những nhà môi giới
                                                    Forex & CFD được niêm yết trên sàn chứng khoán lớn nhất thế giới.
                                                    XTB được kiểm soát bởi các cơ quan quản lý tài chính lớn nhất thế
                                                    giới bao gồm FCA.</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse3" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/education.1e0b6997.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">Đào tạo toàn diện</h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse3" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">Chúng tôi cung cấp các video giúp
                                                    trader nâng cao kiến thức giao dịch. XTB Trading Academy cung cấp
                                                    các khóa học giao dịch từ cơ bản đến nâng cao.</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse4" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/platform.574b038e.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">Nền tảng tiên tiến</h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse4" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">Chúng tôi không ngừng cải tiến nền
                                                    tảng giao dịch của mình để đáp ứng xu thế thị trường. Có hàng trăm
                                                    nghìn giao dịch được thực hiện trên xStation mỗi ngày.</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse5" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/support.2f0f596e.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">657,000 khách hàng</h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse5" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">Với hơn 16 năm kinh nghiệm trên thị
                                                    trường tài chính, XTB được tin cậy bởi hơn 389.000 khách hàng trên
                                                    thế giới</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <a role="button" data-bs-toggle="collapse" data-parent="#accordion"
                                                href="#collapse6" aria-expanded="false"
                                                class="zoom-boxes-accordion-header">
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/customers.47414ad9.svg"
                                                    alt="" class="lazyload zoom-boxes-accordion-icon">
                                                <h3 class="zoom-boxes-accordion-title">Hỗ trợ nhanh chóng và hiệu quả
                                                </h3>
                                                <img data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/more-less_green_small.6abfc4a0.svg"
                                                    alt="" class="lazyload float-end zoom-boxes-accordion-expand">
                                            </a>
                                            <div id="collapse6" class="collapse" data-parent="#accordion">
                                                <p class="zoom-boxes-accordion-text">Đội ngũ nhân viên hỗ trợ Tiếng Việt
                                                    luôn sẵn sàng phục vụ bạn - 24/24, thứ 2 - thứ 6 qua điện thoại,
                                                    email hoặc chat trực tiếp trên website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none d-lg-block">
                                    <div class="row">
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/instruments.3f233676.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">2200+ sản phẩm</h3>
                                            <p class="zoom-boxes-box-text">Thị trường tài chính quốc tế đa dạng bao gồm
                                                Forex, Chỉ số, Hàng hóa, ETFs và nhiều sản phẩm khác.</p>
                                        </div>
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/safe&amp;security.e0da7853.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">An toàn và Bảo mật</h3>
                                            <p class="zoom-boxes-box-text">XTB là một trong những nhà môi giới Forex &
                                                CFD được niêm yết trên sàn chứng khoán lớn nhất thế giới. XTB được kiểm
                                                soát bởi các cơ quan quản lý tài chính lớn nhất thế giới bao gồm FCA.
                                            </p>
                                        </div>
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/education.1e0b6997.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">Đào tạo toàn diện</h3>
                                            <p class="zoom-boxes-box-text">Chúng tôi cung cấp các video giúp trader nâng
                                                cao kiến thức giao dịch. XTB Trading Academy cung cấp các khóa học giao
                                                dịch từ cơ bản đến nâng cao.</p>
                                        </div>
                                    </div>
                                    <div class="zoom-boxes-divider"></div>
                                    <div class="row">
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/platform.574b038e.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">Nền tảng tiên tiến</h3>
                                            <p class="zoom-boxes-box-text">Chúng tôi không ngừng cải tiến nền tảng giao
                                                dịch của mình để đáp ứng xu thế thị trường. Có hàng trăm nghìn giao dịch
                                                được thực hiện trên xStation mỗi ngày.</p>
                                        </div>
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/support.2f0f596e.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">657,000 khách hàng</h3>
                                            <p class="zoom-boxes-box-text">Với hơn 16 năm kinh nghiệm trên thị trường
                                                tài chính, XTB được tin cậy bởi hơn 389.000 khách hàng trên thế giới</p>
                                        </div>
                                        <div class="col-4 zoom-boxes-box">
                                            <img class="lazyload"
                                                data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/svg-icons/zoom-boxes/customers.47414ad9.svg"
                                                alt="">
                                            <h3 class="zoom-boxes-box-title">Hỗ trợ nhanh chóng và hiệu quả</h3>
                                            <p class="zoom-boxes-box-text">Đội ngũ nhân viên hỗ trợ Tiếng Việt luôn sẵn
                                                sàng phục vụ bạn - 24/24, thứ 2 - thứ 6 qua điện thoại, email hoặc chat
                                                trực tiếp trên website.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="iblock-open-account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                    <div class="iblock-open-account-text">
                        <h2>Đăng ký miễn phí</h2>
                        <p>Chỉ mất vài phút để bắt đầu giao dịch. Đơn giản và hoàn toàn miễn phí!</p>
                        <div class="js-btns">
                            <a href="/vn/demo-account" id="forex_btn_prodPage_createDemo_openAccount"
                                class="btn btn-green btn-big desktop">
                                Khám phá nền tảng
                            </a>
                            <a href="https://m-xstation.xtb.com/?link=https://xstation5.xtb.com&apn=com.xtb.xmobile2&isi=949905889&ibi=com.xtb.xStation"
                                data-utm-medium="footer" data-link-id="website_footer"
                                id="forex_btn_prodPage_download_itunes_openAccount"
                                class="btn btn-green btn-big os-ios os-apple js-dynamic-link">
                                TẢI APP
                            </a>
                            <a href="https://m-xstation.xtb.com/?link=https://xstation5.xtb.com&apn=com.xtb.xmobile2&isi=949905889&ibi=com.xtb.xStation"
                                data-utm-medium="footer" data-link-id="website_footer"
                                id="forex_btn_prodPage_download_googleplay_openAccount"
                                class="btn btn-green btn-big os-android os-windows js-dynamic-link">
                                TẢI APP
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 iblock-open-account-img">
                    <img data-sizes="auto"
                        data-src="//xas.scdn5.secure.raxcdn.com/build/twigImages/blocksNew/openAccount/kv@1x.1d87ebec.png"
                        data-srcset="//xas.scdn5.secure.raxcdn.com/build/twigImages/blocksNew/openAccount/kv@2x.a6db8ebb.png 2x"
                        alt="" class="lazyload">
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>