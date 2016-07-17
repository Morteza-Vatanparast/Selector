function $To$x(el) {
  if (typeof el == "string") return document.evaluate(el, document, null, 0, null);
  if (!el || el.nodeType != 1) return '';
  if (el.id && $("[id=" + el.id + "]").length == 1) {
      return '//*[@id="' + el.id + '"]';
  }
  var sames = [].filter.call(el.parentNode.children, function (x) { return x.tagName == el.tagName });
  return $To$x(el.parentNode) + '/' + (el.tagName.toLowerCase() + (sames.length > 1 ? '['+([].indexOf.call(sames, el)+1)+']' : '').replace('[1]', ''));
}

function $x(xPath, $scope) {
    var selector = $xTo$(xPath);
    return $(selector, $scope);
}

function $xTo$(x) {
    x = replace(x, '//\\*', '');
    x = replace(x, '\\[@id="([^"]*)"\\]', '#$1');
    x = replace(x, '\\[1\\]', ':first');
    x = replace(x, '\\[([0-9]+)\\]', ':eq($1)');
    var z = x.split(':eq(');
    x = z[0];
    if (z.length > 1) {
        for (var i = 1; i < z.length; i++) {
            var end = z[i].indexOf(')');
            var number = parseInt(z[i].substr(0, end)) - 1;
            x = x + ':eq(' + number + z[i].substr(end);
        }
    }
    x = replace(x, '/', ' > ');
    return x;
}

function replace(txt, r, w) {
    var re = new RegExp(r, "g");
    return txt.replace(re, w);
}


var __float = '<div class="ChangeFloatExtensionSelectorMA">' +
                    '<button style="width: 100%;" class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA">&gt;</button>' +
                '</div>';

var __select = '<div class="SelectExtractTypeExtensionSelectorMA">' +
                    '<input type="radio" value="ExtractAllNewsDivExtensionSelectorMA" checked name="ExtractInputExtensionSelectorMA"><span style="margin-right: 10px;">استخراج اخبار </span> <input value="ExtractNewsDivExtensionSelectorMA" style="margin-right: 50px" type="radio" name="ExtractInputExtensionSelectorMA"><span style="margin-right: 10px;">استخراج خبر</span>' +
                '</div>';
var __close = '<div class="CloseExtensionSelectorMA"></div>';

var __form = '<div class="MainDivExtensionSelectorMA RightMainDivExtensionSelectorMA">' +
                '<div class="ExtractAllNewsDivExtensionSelectorMA ExtractDivExtensionSelectorMA">' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>آدرس خبر</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="ADDRESS">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="ADDRESS" data-path="" type="text" >' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="ADDRESS">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestAllNewsSelectorExtensionSelectorMA" data-set-type="ADDRESS">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>لینک</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                            '<input type="checkbox" class="ExtractExtensionSelectorMA" checked="" data-set-type="LINK" value="True">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="LINK">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input disabled="disabled" class="InputExtensionSelectorMA" data-set-type="LINK" type="text">' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button disabled="disabled" class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="LINK">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestAllNewsSelectorExtensionSelectorMA" data-set-type="LINK">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>بند انگشتی</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                            '<input type="checkbox" class="ExtractExtensionSelectorMA" checked="" data-set-type="THUMBNAIL" value="True">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="THUMBNAIL">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input disabled="disabled" class="InputExtensionSelectorMA" data-set-type="THUMBNAIL" type="text">' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button disabled="disabled" class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="THUMBNAIL">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestAllNewsSelectorExtensionSelectorMA" data-set-type="THUMBNAIL">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>تیتر</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="TITLE">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="TITLE" type="text" >' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="TITLE">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestAllNewsSelectorExtensionSelectorMA" data-set-type="TITLE">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>خلاصه</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                            '<input type="checkbox" class="HasExtensionSelectorMA" checked="" data-set-type="SUMMARY" value="True">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="SUMMARY">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="SUMMARY" type="text" >' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="SUMMARY">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestAllNewsSelectorExtensionSelectorMA" data-set-type="SUMMARY">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivInputExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA ButtonCopyJsonAllNewsStylesToClipboard" style="position: absolute;">Copy</button>' +
                            '<input class="InputCopyJsonAllNewsStylesToClipboard" id="InputCopyJsonAllNewsStylesToClipboard" type="text" style="width: 5px; height: 5px">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="ExtractNewsDivExtensionSelectorMA ExtractDivExtensionSelectorMA" style="display: none">' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>روتیتر</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                            '<input type="checkbox" class="HasExtensionSelectorMA" checked="" data-set-type="ROTITLE" value="True">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="ROTITLE">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="ROTITLE" type="text" >' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="ROTITLE">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestNewsSelectorExtensionSelectorMA" data-set-type="ROTITLE">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>عکس</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                            '<input type="checkbox" class="HasExtensionSelectorMA" checked="" data-set-type="IMAGE" value="True">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="IMAGE">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="IMAGE" type="text">' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="IMAGE">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestNewsSelectorExtensionSelectorMA" data-set-type="IMAGE">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>متن</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="BODY">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="BODY" type="text">' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="BODY">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestNewsSelectorExtensionSelectorMA" data-set-type="BODY">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA AddExcludeButtonExtensionSelectorMA" data-set-type="BODY">+</button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="ExcludeDivExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span>تاریخ</span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA DivChangeSelectorExtensionSelectorMA" data-set-type="DATE">' +
                            '<div style="display: inline-block; width: 70px; margin:0; padding: 0; float: right">' +
                                '<span class="ChangeSelectorExtensionSelectorMA NextChangeSelectorExtensionSelectorMA" data-action="NEXT">&#8593;</span>' +
                                '<span class="ChangeSelectorExtensionSelectorMA BackChangeSelectorExtensionSelectorMA" data-action="BACK">&#8595;</span>' +
                            '</div>' +
                            '<div style="display: inline-block; width: 130px; margin:0; padding: 0; text-align: center">' +
                                '<span class="ChangeSelectorExtensionSelectorMA UndoChangeSelectorExtensionSelectorMA" data-action="UNDO">&#8635;</span>' +
                            '</div>' +
                            '<input class="InputExtensionSelectorMA" data-set-type="DATE" type="text" >' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="DATE">set</button>' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA TestSelectorExtensionSelectorMA TestNewsSelectorExtensionSelectorMA" data-set-type="DATE">?</button>' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivSpanExtensionSelectorMA">' +
                            '<span></span>' +
                        '</div>' +
                        '<div class="DivExtractExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivInputExtensionSelectorMA">' +
                            '<div style="width: 100%; display: inline-block">' +
                                '<div class="DivInputExtensionSelectorMA">' +
                                    '<select class="InputExtensionSelectorMA SelectDateFormatExtensionSelectorMA" style="height: 35px">' +
                                        '<option data-type="1" value="تاریخ انتشار: %d %B %Y - %H:%M">تاریخ انتشار: %d %B %Y - %H:%</option>' +
                                        '<option data-type="2" value="%y/%m/%d - %H:%M">%y/%m/%d - %H:%M</option>' +
                                        '<option data-type="3" value="%Y/%m/%d - %H:%M">%Y/%m/%d - %H:%M</option>' +
                                        '<option data-type="4" value="%A %d %B %Y ساعت %H:%M">%A %d %B %Y ساعت %H:%M</option>' +
                                        '<option data-type="5" value="%d %B %Y - %H:%M">%d %B %Y - %H:%M</option>' +
                                        '<option data-type="6" value="%A %d %B %Y - %H:%M">%A %d %B %Y - %H:%M</option>' +
                                        '<option data-type="new_template" value="new_template">افزودن قالب جدید</option>' +
                                    '</select>' +
                                '</div>' +
                            '</div>' +
                            '<div style="width: 100%; display: inline-block; margin-top: 10px">' +
                                '<div class="DivInputExtensionSelectorMA">' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" data-type="1">تاریخ انتشار: 1 فروردین 1394 - 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="2">94/01/01 - 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="3">1394/01/01 - 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="4">شنبه 01 فروردین 1394 ساعت 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="5">01 فروردین 1394 - 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="6">شنبه 01 فروردین 1394 - 22:22</span>' +
                                    '<span class="SpanDateFormatExtensionSelectorMA" style="display: none" data-type="new_template"><input class="InputExtensionSelectorMA InputTypeDateFormatExtensionSelectorMA" type="text" placeholder="قالب جدید"></span>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="DivButtonExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivTestSelectorExtensionSelectorMA">' +
                        '</div>' +
                        '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '</div>' +
                    '</div>' +
                    '<div class="DivRowExtensionSelectorMA">' +
                        '<div class="DivInputExtensionSelectorMA">' +
                            '<button class="ButtonExtensionSelectorMA ButtonInfoExtensionSelectorMA ButtonCopyJsonNewsStylesToClipboard" style="position: absolute;">Copy</button>' +
                            '<input class="InputCopyJsonNewsStylesToClipboard" id="InputCopyJsonNewsStylesToClipboard" type="text" style="width: 5px; height: 5px">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

var __main = '<button class="ButtonExtensionSelectorMA NoExtension ButtonSuccessExtensionSelectorMA ButtonCloseExtensionSelectorMA RightButtonCloseExtensionSelectorMA" data-action="hide">X</button>' +
    '<div class="FixDivExtensionSelectorMA NoExtension RightFixDivExtensionSelectorMA"><div class="SettingDivExtensionSelectorMA">' + __close + __select + __float + '</div>' + __form + '</div>';

$('body').append(__main);

$(document).on('click', '.ChangeFloatExtensionSelectorMA', function(e){
    var elm = $(e.target).closest('.ChangeFloatExtensionSelectorMA');
    if(elm.attr('data-position') == "right"){
        elm.attr('data-position', 'left');
        elm.find('button').html('&gt;');
        $('.CloseExtensionSelectorMA').css('float', 'right');
        $('.ButtonCloseExtensionSelectorMA').removeClass('LeftButtonCloseExtensionSelectorMA').addClass('RightButtonCloseExtensionSelectorMA');
        elm.css('float', 'left');
        $('.FixDivExtensionSelectorMA').removeClass('LeftFixDivExtensionSelectorMA').addClass('RightFixDivExtensionSelectorMA');
    }else{
        elm.attr('data-position', 'right');
        elm.find('button').html('&lt;');
        $('.CloseExtensionSelectorMA').css('float', 'left');
        $('.ButtonCloseExtensionSelectorMA').removeClass('RightButtonCloseExtensionSelectorMA').addClass('LeftButtonCloseExtensionSelectorMA');
        elm.css('float', 'right');
        $('.FixDivExtensionSelectorMA').removeClass('RightFixDivExtensionSelectorMA').addClass('LeftFixDivExtensionSelectorMA');
    }
});

var __permission = false;

var __set_type = null;
$(document).on('mousemove', function(e) {
    if(__permission && !$(e.target).closest(".NoExtension").hasClass("NoExtension")){
        if($(e.target)[0].localName.toLowerCase() == "img"){
            $(e.target).addClass('ImageBorderInspectExtensionSelectorMA');
        }else{
            $(e.target).addClass('BorderInspectExtensionSelectorMA');
        }
    }
});

$(document).on('mouseout', function(e) {
    if(__permission && !$(e.target).closest(".NoExtension").hasClass("NoExtension")) {
        $(e.target).removeClass('BorderInspectExtensionSelectorMA').removeClass('ImageBorderInspectExtensionSelectorMA').removeClass('ExcludeBorderInspectExtensionSelectorMA');
    }
});

$(document).on('click', '.SetButtonExtensionSelectorMA', function(e) {
    var elm = $(e.target).closest('.SetButtonExtensionSelectorMA');
    $('.SetButtonExtensionSelectorMA').removeClass('ButtonDangerExtensionSelectorMA').addClass('ButtonSuccessExtensionSelectorMA');
    elm.removeClass('ButtonSuccessExtensionSelectorMA').addClass('ButtonDangerExtensionSelectorMA');
    if($(e.target).hasClass("ButtonCloseExtensionSelectorMA")) return;
    __permission = true;
    __set_type = elm.attr('data-set-type');
});

$(document).on('click', '.SetButtonExtensionSelectorMA.ButtonDangerExtensionSelectorMA', function(e) {
    var elm = $(e.target).closest('.ButtonDangerExtensionSelectorMA');
    __permission = false;
    __set_type = null;
    elm.removeClass('ButtonDangerExtensionSelectorMA').addClass('ButtonSuccessExtensionSelectorMA');
});

function remove_first_bracket(__x){
    if(__x[0] == '['){
        var __l_p = __x.split('/');
        __l_p[0] = "";
        __x = __l_p.join('/');
    }
    return __x
}

function remove_last_bracket(__x){
    if(__x[__x.length - 1] == ']'){
        var __l_p = __x.split('/');
        var __f_p = __l_p[__l_p.length - 1];
        __f_p = __f_p.split('[')[0];
        __l_p[__l_p.length - 1] = __f_p;
        __x = __l_p.join('/');
    }
    return __x
}

$('*').click(function(e) {
    if(__permission && !$(e.target).closest(".NoExtension").hasClass("NoExtension")){
        e.preventDefault();
        var path = $To$x(this);
        var __address = $("input.InputExtensionSelectorMA[data-set-type=ADDRESS]").val();
        if(__set_type == "LINK" || __set_type == "THUMBNAIL" || __set_type == "TITLE" || __set_type == "SUMMARY")
        {
            var __path = path.split(__address)[1];
            path = __path ? __path : path;
            path = remove_first_bracket(path);
            if(path[0] == '/'){
                path = path.substring(1, path.length);
            }
        }else if(__set_type == "ADDRESS"){
            var _path = remove_last_bracket(path);
            $("input.InputExtensionSelectorMA[data-set-type=ADDRESS]").val(_path).attr('data-path', path);
        }
        $("input.InputExtensionSelectorMA[data-set-type=" + __set_type + "]").val(path).attr('data-path', path);
        __permission = false;
        __set_type = null;
        $('.SetButtonExtensionSelectorMA').removeClass('ButtonDangerExtensionSelectorMA').addClass('ButtonSuccessExtensionSelectorMA');
        $('.BorderInspectExtensionSelectorMA').removeClass('BorderInspectExtensionSelectorMA');
        $('.ImageBorderInspectExtensionSelectorMA').removeClass('ImageBorderInspectExtensionSelectorMA');
        $('.ExcludeBorderInspectExtensionSelectorMA').removeClass('ExcludeBorderInspectExtensionSelectorMA');
    }
});

function copy_to_clipboard(elem) {
    var origSelectionStart, origSelectionEnd;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
    var currentFocus = document.activeElement;
    elem.focus();
    elem.setSelectionRange(0, elem.value.length);

    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    return succeed;
}

$(document).on('click', '.ButtonCopyJsonAllNewsStylesToClipboard', function(e) {
    var extract_link = $('input.ExtractExtensionSelectorMA[data-set-type=LINK]').prop('checked');
    var extract_thumbnail = $('input.ExtractExtensionSelectorMA[data-set-type=THUMBNAIL]').prop('checked');
    var has_summary = $('input.HasExtensionSelectorMA[data-set-type=SUMMARY]').prop('checked');
    var link = "";
    if(!extract_link){
        link = $("input.InputExtensionSelectorMA[data-set-type=LINK]").val();
    }
    var thumbnail = "";
    if(!extract_thumbnail){
        thumbnail = $("input.InputExtensionSelectorMA[data-set-type=THUMBNAIL]").val();
    }
    var summary = "";
    if(has_summary){
        summary = $("input.InputExtensionSelectorMA[data-set-type=SUMMARY]").val();
    }
    var address = $("input.InputExtensionSelectorMA[data-set-type=ADDRESS]").val();
    var title = $("input.InputExtensionSelectorMA[data-set-type=TITLE]").val();
    var __json = {
        __type: "AllNews",
        address: $xTo$(address),
        address_xpath: address,
        link: $xTo$(link),
        link_xpath: link,
        thumbnail: $xTo$(thumbnail),
        thumbnail_xpath: thumbnail,
        title: $xTo$(title),
        title_xpath: title,
        summary: $xTo$(summary),
        summary_xpath: summary,
        extract_link: extract_link,
        extract_thumbnail: extract_thumbnail,
        has_summary: has_summary
    };
    $(".InputCopyJsonAllNewsStylesToClipboard").val(JSON.stringify(__json));
    copy_to_clipboard(document.getElementById('InputCopyJsonAllNewsStylesToClipboard'));
});

$(document).on('click', '.ButtonCopyJsonNewsStylesToClipboard', function(e) {
    var has_ro_title = $('input.HasExtensionSelectorMA[data-set-type=ROTITLE]').prop('checked');
    var has_image = $('input.HasExtensionSelectorMA[data-set-type=IMAGE]').prop('checked');
    var ro_title = "";
    if(has_ro_title){
        ro_title = $("input.InputExtensionSelectorMA[data-set-type=ROTITLE]").val();
    }
    var image = "";
    if(has_image){
        image = $("input.InputExtensionSelectorMA[data-set-type=IMAGE]").val();
    }
    var excludes = [];
    $.each($("input.BodyExcludeInputExtensionSelectorMA"), function(){
        excludes.push($(this).val());
    });
    var body = $("input.InputExtensionSelectorMA[data-set-type=BODY]").val();
    var date = $("input.InputExtensionSelectorMA[data-set-type=DATE]").val();
    var __json = {
        __type: "News",
        ro_title: $xTo$(ro_title),
        ro_title_xpath: ro_title,
        image: $xTo$(image),
        image_xpath: image,
        excludes: excludes,
        has_ro_title: has_ro_title,
        has_image: has_image,
        body: $xTo$(body),
        body_xpath: body,
        date: $xTo$(date),
        date_xpath: date,
        date_type: $('select.SelectDateFormatExtensionSelectorMA option:selected').attr('data-type'),
        date_select: $('select.SelectDateFormatExtensionSelectorMA').val(),
        date_type_input: $('input.InputTypeDateFormatExtensionSelectorMA').val()
    };
    $(".InputCopyJsonNewsStylesToClipboard").val(JSON.stringify(__json));
    copy_to_clipboard(document.getElementById('InputCopyJsonNewsStylesToClipboard'));
});

$(document).on('change', '.ExtractExtensionSelectorMA', function(e) {
    var elm = $(e.target).closest('.ExtractExtensionSelectorMA');
    $("input.InputExtensionSelectorMA[data-set-type=" + elm.attr("data-set-type") + "]").attr("disabled", this.checked);
    $("button.ButtonExtensionSelectorMA[data-set-type=" + elm.attr("data-set-type") + "]").attr("disabled", this.checked);
});

$(document).on('change', '.HasExtensionSelectorMA', function(e) {
    var elm = $(e.target).closest('.HasExtensionSelectorMA');
    $("input.InputExtensionSelectorMA[data-set-type=" + elm.attr("data-set-type") + "]").attr("disabled", !this.checked);
    $("button.ButtonExtensionSelectorMA[data-set-type=" + elm.attr("data-set-type") + "]").attr("disabled", !this.checked);
});

$(document).on('change', 'input[name=ExtractInputExtensionSelectorMA]', function(e) {
    $('.ExtractDivExtensionSelectorMA').hide();
    $('.' + $('input[name=ExtractInputExtensionSelectorMA]:checked').val()).show();
});

var exclude_div = '<div class="DivRowExtensionSelectorMA">' +
                    '<div class="DivSpanExtensionSelectorMA">' +
                    '</div>' +
                    '<div class="DivExtractExtensionSelectorMA">' +
                    '</div>' +
                    '<div class="DivInputExtensionSelectorMA">' +
                        '<input class="InputExtensionSelectorMA BodyExcludeInputExtensionSelectorMA" data-set-type="BODY_EXCLUDE" type="text">' +
                    '</div>' +
                    '<div class="DivButtonExtensionSelectorMA">' +
                        '<button class="ButtonExtensionSelectorMA ButtonSuccessExtensionSelectorMA SetButtonExtensionSelectorMA" data-set-type="BODY_EXCLUDE">set</button>' +
                    '</div>' +
                    '<div class="DivTestSelectorExtensionSelectorMA">' +
                    '</div>' +
                    '<div class="DivAddRemoveExtensionSelectorMA">' +
                        '<button class="ButtonExtensionSelectorMA ButtonDangerExtensionSelectorMA DeleteExcludeButtonExtensionSelectorMA" data-set-type="BODY_EXCLUDE">X</button>' +
                    '</div>' +
                '</div>';

$(document).on('click', '.AddExcludeButtonExtensionSelectorMA', function(e) {
    $('.ExcludeDivExtensionSelectorMA').append(exclude_div.replace(/BODY_EXCLUDE/g, 'BODY_EXCLUDE_' + Math.floor((Math.random() * 1000) + 1)));
});

$(document).on('click', '.DeleteExcludeButtonExtensionSelectorMA', function(e) {
    $(e.target).closest('.DivRowExtensionSelectorMA').remove();
});

$(document).on('change', '.SelectDateFormatExtensionSelectorMA', function(){
    var type = $('select.SelectDateFormatExtensionSelectorMA option:selected').attr('data-type');
    $('.SpanDateFormatExtensionSelectorMA').hide();
    $('span.SpanDateFormatExtensionSelectorMA[data-type=' + type + ']').fadeIn()
});

$(document).on('click', '.ButtonCloseExtensionSelectorMA', function(e) {
    $('.FixDivExtensionSelectorMA').slideToggle();
});

$(document).on('click', '.TestAllNewsSelectorExtensionSelectorMA', function(e) {
    $('.BorderInspectExtensionSelectorMA').removeClass("BorderInspectExtensionSelectorMA");
    $('.ImageBorderInspectExtensionSelectorMA').removeClass("ImageBorderInspectExtensionSelectorMA");
    $('.ExcludeBorderInspectExtensionSelectorMA').removeClass("ExcludeBorderInspectExtensionSelectorMA");
    var elm = $(e.target).closest('.TestAllNewsSelectorExtensionSelectorMA');
    var _type = elm.attr('data-set-type');
    var selector = $('.InputExtensionSelectorMA[data-set-type=' + _type + ']').val();
    selector = $xTo$(selector);
    if(_type == "ADDRESS") {
        $.each($(selector), function () {
            $(this).addClass("BorderInspectExtensionSelectorMA");
        });
    }else{
        var selector_address = $('.InputExtensionSelectorMA[data-set-type=ADDRESS]').val();
        selector_address = $xTo$(selector_address);
        $.each($(selector_address), function () {
            $.each($(this).find(selector), function () {
                if(_type != "THUMBNAIL"){
                    $(this).addClass("BorderInspectExtensionSelectorMA");
                }else{
                    $(this).addClass("ImageBorderInspectExtensionSelectorMA");
                }
            });
        });
    }
});

$(document).on('click', '.TestNewsSelectorExtensionSelectorMA', function(e) {
    $('.BorderInspectExtensionSelectorMA').removeClass("BorderInspectExtensionSelectorMA");
    $('.ImageBorderInspectExtensionSelectorMA').removeClass("ImageBorderInspectExtensionSelectorMA");
    $('.ExcludeBorderInspectExtensionSelectorMA').removeClass("ExcludeBorderInspectExtensionSelectorMA");
    var elm = $(e.target).closest('.TestNewsSelectorExtensionSelectorMA');
    var _type = elm.attr('data-set-type');
    var selector = $('.InputExtensionSelectorMA[data-set-type=' + _type + ']').val();
    selector = $xTo$(selector);
    if(_type != "IMAGE"){
        $.each($(selector), function () {
            $(this).addClass("BorderInspectExtensionSelectorMA");
        });
        if(_type == "BODY"){
            $.each($("input.BodyExcludeInputExtensionSelectorMA"), function(){
                $($xTo$($(this).val())).addClass('ExcludeBorderInspectExtensionSelectorMA');
            });
        }
    }else{
        var __l = $(selector).split(">");
        var __a = "";
        var html = "";
        for(var i = 0; i < __l.length - 1; i++){
            __a = i < __l.length - 2 ? ">" : "";
            html += __l[i] + __a;
        }
        html = $xTo$(html);
        $(html).find('img').addClass('ImageBorderInspectExtensionSelectorMA');
    }
});

$(document).on('click', '.ChangeSelectorExtensionSelectorMA', function(e) {
    var elm = $(e.target).closest('.ChangeSelectorExtensionSelectorMA');
    var action = elm.attr('data-action');
    var type = elm.closest('.DivChangeSelectorExtensionSelectorMA').attr('data-set-type');
    var __input = $('input.InputExtensionSelectorMA[data-set-type=' + type + ']');
    var path_input = __input.val();
    var path = __input.attr('data-path');
    var __l = path_input.split("/");
    var html = "";
    var i = 0;
    var __a = "";
    var __b = "";

    if(action == "UNDO" || path_input == ""){
        html = path
    }else if(action == "BACK"){
        for(i = 0; i < __l.length - 1; i++){
            __a = i < __l.length - 2 ? "/" : "";
            html += __l[i] + __a;
        }
        if(html.indexOf('@') == -1 && type == "ADDRESS"){
            html = path_input;
        }
    }else{
        __a = path.split(path_input)[1];
        if(__a[0] != "["){
            __a = __a.split("/")[1];
            __b = __a ? ("/" + __a) : "";
        }else{
            __b = __a.split("/")[0] + '/' + __a.split("/")[1];
        }
        html = path_input + __b
    }
    if(type == "ADDRESS"){
        html = remove_last_bracket(html);
    }
    __input.val(html);
});