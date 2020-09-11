$('#whatsapp').mask('+00 00 00000-0000');
$('#telefone').mask('00 00000-0000');

$("#signatures").validate();

jQuery.extend(jQuery.validator.messages, {
    required: "Esse campo é obrigatório.",
    remote: "Por favor, corrija este campo.",
    email: "Por favor, forneça um endereço eletrônico válido.",
    url: "Por favor, forneça uma URL válida.",
    date: "Por favor, forneça uma data válida.",
    dateISO: "Por favor, forneça uma data válida (ISO).",
    number: "Por favor, forneça um número válido.",
    digits: "Por favor, forneça somente dígitos.",
    creditcard: "Por favor, forneça um cartão de crédito válido.",
    equalTo: "Por favor, forneça o mesmo valor novamente.",
    accept: "Por favor, forneça um valor com uma extensão válida.",
    maxlength: jQuery.validator.format("Por favor, forneça não mais que {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, forneça ao menos {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, forneça um valor entre {0} e {1} caracteres de comprimento."),
    range: jQuery.validator.format("Por favor, forneça um valor entre {0} e {1}."),
    max: jQuery.validator.format("Por favor, forneça um valor menor ou igual a {0}."),
    min: jQuery.validator.format("Por favor, forneça um valor maior ou igual a {0}.")
});

$('input[type=radio][name=time]').change(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".form-content").offset().top
    }, 1000);

    switch ($(this).val()) {
    case 'sales':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        break;
    case 'marketing':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        $('.form-content .form-group.whatsapp').hide().addClass('hidden');
        $('.form-content .form-group.telefone').hide().addClass('hidden');
        break;
    case 'financeiro':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        $('.form-content .form-group.whatsapp').hide().addClass('hidden');
        break;
    case 'rh':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.whatsapp').hide().addClass('hidden');
        break;
    case 'customer-success':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        $('.form-content .form-group.telefone').hide().addClass('hidden');
        break;
    case 'suporte':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        $('.form-content .form-group.whatsapp').hide().addClass('hidden');
        $('.form-content .form-group.telefone').hide().addClass('hidden');
        break;
    case 'tech':
        $('.form-content .form-group').show().removeClass('hidden');
        $('.form-content .form-group.linkedin').hide().addClass('hidden');
        $('.form-content .form-group.whatsapp').hide().addClass('hidden');
        $('.form-content .form-group.telefone').hide().addClass('hidden');
        break;
    }
});

$('.back-form-content').click(function(e){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".form-content").offset().top
    }, 1000);
})

$('.go-photo-help').click(function(e){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".photo-help").offset().top
    }, 1000);
})

$("#signatures").submit(function(e){
    e.preventDefault();
    
    if($("#signatures").valid()){
        var time = $("input[type=radio][name=time]:checked").val();

        $('table.signature').not('table.' + time + '-signature').remove();

        $('.form-content .form-group').not('.hidden').each(function(){
            var input = $(this).find('input');
            var id = input.attr('id');
            
            if(id == 'foto'){
                $('table.signature').find('.' + id).attr('src', input.val());
            } else if (id == 'linkedin'){
                $('table.signature').find('.' + id).attr('href', input.val());
            } else {
                $('table.signature').find('.' + id).text(input.val());
            }
        });

        $('table.signature').show();
        $('.page-content').remove();

        /* var signature = $('table.signature').clone();
        $('html').append(signature);
        $('head').remove();
        $('body').remove(); */
    }   
});