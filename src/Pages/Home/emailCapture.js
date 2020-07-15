import React, { Component } from "react";
import renderHTML from 'react-render-html';


function emailHTMLContent() {
    
    var htmlString = `
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js"></script>
    <script src="https://cdn.jotfor.ms/static/prototype.forms.js" type="text/javascript"></script>
    <script src="https://cdn.jotfor.ms/static/jotform.forms.js?3.3.19074" type="text/javascript"></script>
    <script type="text/javascript">
        JotForm.init(function(){
        setTimeout(function() {
            $('input_3').hint('Email');
        }, 20);
        JotForm.newDefaultTheme = false;
        JotForm.newPaymentUIForNewCreatedForms = true;
        JotForm.newPaymentUI = true;
        JotForm.alterTexts(undefined);
        JotForm.clearFieldOnHide="disable";
        JotForm.submitError="jumpToFirstError";
        /*INIT-END*/
        });

    JotForm.prepareCalculationsOnTheFly([null,null,{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"input3","qid":"3","subLabel":"","text":"","type":"control_email"}]);
    setTimeout(function() {
    JotForm.paymentExtrasOnTheFly([null,null,{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"input3","qid":"3","subLabel":"","text":"","type":"control_email"}]);}, 20); 
    </script>
    <link href="https://cdn.jotfor.ms/static/formCss.css?3.3.19074" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/nova.css?3.3.19074" />
    <link type="text/css" media="print" rel="stylesheet" href="https://cdn.jotfor.ms/css/printForm.css?3.3.19074" />
    <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/566a91c2977cdfcd478b4567.css?"/>
    <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.19074" />
    <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.19074" />
    <style type="text/css">
        .form-label-left{
            width:150px;
        }
        .form-line{
            padding-top:12px;
            padding-bottom:12px;
        }
        .form-label-right{
            width:150px;
        }
        .form-all{
            width:690px;
            color:#555 !important;
            font-family:"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif;
            font-size:14px;
        }
    </style>

    <style type="text/css" id="form-designer-style">
        /* Injected CSS Code */
    .form-label.form-label-auto { display: block; float: none; text-align: left; width: inherit; } /*PREFERENCES STYLE*/
        .form-all {
        font-family: Lucida Grande, sans-serif;
        }
        .form-all .qq-upload-button,
        .form-all .form-submit-button,
        .form-all .form-submit-reset,
        .form-all .form-submit-print {
        font-family: Lucida Grande, sans-serif;
        }
        .form-all .form-pagebreak-back-container,
        .form-all .form-pagebreak-next-container {
        font-family: Lucida Grande, sans-serif;
        }
        .form-header-group {
        font-family: Lucida Grande, sans-serif;
        }
        .form-label {
        font-family: Lucida Grande, sans-serif;
        }
    
        .form-label.form-label-auto {
        
        display: block;
        float: none;
        text-align: left;
        width: 100%;
    
        }
    
        .form-line {
        margin-top: 12px;
        margin-bottom: 12px;
        }
    
        .form-all {
        max-width: 690px;
        width: 100%;
        }
    
        .form-label.form-label-left,
        .form-label.form-label-right,
        .form-label.form-label-left.form-label-auto,
        .form-label.form-label-right.form-label-auto {
        width: 150px;
        }
    
        .form-all {
        font-size: 14px
        }
        .form-all .qq-upload-button,
        .form-all .qq-upload-button,
        .form-all .form-submit-button,
        .form-all .form-submit-reset,
        .form-all .form-submit-print {
        font-size: 14px
        }
        .form-all .form-pagebreak-back-container,
        .form-all .form-pagebreak-next-container {
        font-size: 14px
        }
    
        .supernova .form-all, .form-all {
        background-color: #ffd14c;
        border: 1px solid transparent;
        }
    
        .form-all {
        color: #555;
        }
        .form-header-group .form-header {
        color: #555;
        }
        .form-header-group .form-subHeader {
        color: #555;
        }
        .form-label-top,
        .form-label-left,
        .form-label-right,
        .form-html,
        .form-checkbox-item label,
        .form-radio-item label {
        color: #555;
        }
        .form-sub-label {
        color: #6f6f6f;
        }
    
        .supernova {
        background-color: #ffd14c;
        }
        .supernova body {
        background: transparent;
        }
    
        .form-textbox,
        .form-textarea,
        .form-radio-other-input,
        .form-checkbox-other-input,
        .form-captcha input,
        .form-spinner input {
        background-color: #fff;
        }
    
        .supernova {
        background-image: none;
        }
        #stage {
        background-image: none;
        }
    
        .form-all {
        background-image: none;
        }
    
    .ie-8 .form-all:before { display: none; }
    .ie-8 {
        margin-top: auto;
        margin-top: initial;
    }
    
    
    </style>

    <form class="jotform-form" action="https://submit.jotformeu.com/submit/201894975727068/" method="post" name="form_201894975727068" id="201894975727068" accept-charset="utf-8" autocomplete="on">
    <input type="hidden" name="formID" value="201894975727068" />
    <input type="hidden" id="JWTContainer" value="" />
    <input type="hidden" id="cardinalOrderNumber" value="" />
    <div role="main" class="form-all">
        <ul class="form-section page-section">
        <li class="form-line jf-required" data-type="control_email" id="id_3">
            <label class="form-label form-label-top form-label-auto" id="label_3" for="input_3">
            <span class="form-required">
            </span>
            </label>
            <div id="cid_3" class="form-input-wide jf-required">
            <input type="text" id="input_3" name="q3_input3" class="form-textbox validate[required, Email]" size="30"  placeholder="Email" data-component="email" aria-labelledby="label_3"  />
            <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
            Submit
            </button>
            </div>
            <div id="cid_2" class="form-input-wide">
            <div style="margin-left:156px" data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
               
            </div>
            </div>
        </li>
        </ul>
    </div>
    <script>
    `
    
    return (htmlString)
}

export default class EmailCapture extends Component {
 
  render() {
    return (
        <div>
              {renderHTML(emailHTMLContent())}
        </div>
    );
  }
}
