$(document).ready(
function(){$("#databaseBackup").click(function(e){e.preventDefault();var data_ajax_url=$(this).attr("data-ajax-url");var ajax_loading_div=$("#ajax-loading-backups");var next=1;if(next===1){ajax_loading_div.css('display','block');$.ajax({type:'post',url:data_ajax_url,dataType:'json',data:'submitted=yes',success:function(data){setTimeout(function(){ajax_loading_div.css('display','none');ajax_message=data.message;if(ajax_message==''||typeof ajax_message==='undefined'){ajax_message='Request has been completed';}noty({text:ajax_message,layout:'bottomRight',type:'information',timeout:2500});setTimeout(function(){location.reload();},3500);},5000);},error:function(data){setTimeout(function(){ajax_loading_div.css('display','none');ajax_message=data.message;if(ajax_message==''||typeof ajax_message==='undefined'){ajax_message='Error!- This request could not be completed';}noty({text:''+ajax_message,layout:'bottomRight',type:'warning',timeout:3500});},5000);}});}});});