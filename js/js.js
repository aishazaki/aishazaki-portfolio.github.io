$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparrent");
    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }
});
$(document).ready(function () {
    $("a.scroll").on('click', function (event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () {

        });
    });

    //إضافة دوائر النسبة المئوية
    function checkVisible(element) {

        var vpH = $(window).height(), // إرتفاع شاشة المستخدم
            st = $(window).scrollTop(), // المكان الذي يتواجد به المستخدم بالشاشة حاليًا
            y = $(element).offset().top, // موضع العنصر بالشاشة
            elementHeight = $(element).height(); // إرتفاع العنصر

        return ((y < (vpH + st)) && (y > (st - elementHeight)));
    }
    var isLoaded = false;

    $(window).scroll(function () {

            if (checkVisible($('#statistics'))) {



                $('.circle').circleProgress({
                    startAngle: -Math.PI / 2, // هذه القيمة تحدد الزاوية التي تبدأ عنها المكتبة برسم الدائرة
                    fill: "#0575e6",   // هذه هي قيمة لون النسبة المكتملة
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('span').html(Math.round(stepValue * 100) + '%');
                });// البحث عن span ضمن المحدد circle
                //هنا يتم إظهار النسبة المئوية الخاصة بالدائرة 
                //في داخل العنصر
                //span
                // حيث نستخدم
                //Math.round 
                // للتحويل إلى أقرب عدد صحيح في حال كون العدد نسبي
                // مثلا إذا كان العدد 1.9
                //فسيكون 2 بعد إستخدام  الدالة


                isLoaded = true;

            }
        
    });

    $("#commentForm").validate();
});