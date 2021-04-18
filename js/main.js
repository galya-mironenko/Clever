window.addEventListener('DOMContentLoaded', function() {

    //Header
    const selectSingle = document.querySelector('.__select');
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    const inputs =  document.querySelectorAll('[data-limit="only-one-in-a-group"]');

    window.onscroll = function() {
        const header = document.getElementById('header');
            if (window.pageYOffset > 1) {
                header.classList.add('header__scroll');
            } else {
                header.classList.remove('header__scroll');
            }
    };

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
            selectSingle.style.cssText = "overflow: visible;";
        }
    });

    //Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    };

    //Table
    inputs.forEach(function(el){
        el.addEventListener('change',function(){			
        document.querySelector('#modelPrice').innerHTML = Array.from(inputs).filter(e=>e.checked).map(e=>parseFloat(e.value)).reduce((c,v)=> c+v, 0);
        });
    });

    $('input:checkbox').on('click', function() {
        var $box = $(this);
        if ($box.is(':checked')) {
        var group = "input:checkbox[name='" + $box.attr('name') + "']";
        $(group).prop('checked', false);
        $box.prop('checked', true);
        } else {
        $box.prop('checked', false);
        }
    });

});



