!function(){
    var view = document.querySelector("#mySlides")
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.initSwiper();
            //this.initSwiper.call(this),这里的this要看init调用时，看第30行
        },
        Swiper: null,
        SwiperOptions: {
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        initSwiper: function(){
            //这里的this是啥要看initSwiper在哪里被调用的，找到第7行
            this.Swiper = new Swiper(this.view.querySelector('.swiper-container'), this.SwiperOptions)
        }

    }
    controller.init(view)//controller.init(controller, view),this就好比变量一样，一层一层传下去
}.call()