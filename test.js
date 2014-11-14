
function zobrazitControllPanel(){
$("#nBOT-cPanel").css('right', function(){ return $(this).offset().right; })
             .animate({"right":"-100px"}, "slow"); 

setTimeout(function(){
  $("#nBOT-ControllPanel").css('right', function(){ return $(this).offset().right; }).animate({"right":"0px"}, "slow"); 
  $("#nBOT-ControllPanel").show(); 

},300);

             
  }
  
function skrytControllPanel() {
  $("#nBOT-ControllPanel").css('right', function(){ return $(this).offset().right; }).animate({"right":"-345px"}, "slow"); 

setTimeout(function(){
$("#nBOT-cPanel").css('right', function(){ return $(this).offset().right; }).animate({"right":"-3px"}, "slow");
$("#nBOT-ControllPanel").hide(); 
},300);


}

function narcisDeleteChat(chatID){
                            $.ajax({
                                url: 'https://plug.dj/_/chat/'+chatID,
                                type: 'DELETE'
                            });

}


  function output_text(txt) {
      txt = Math.round((3 / 4) * txt);
      var txt_ = ((parseInt(txt) < 1000) ? txt + " ms" : "Offline");
      API.sendChat(txt_);
  }

  var idips = new Array();

  function ping(id, ip, i) {
      setTimeout("ping2('" + id + "','" + ip + "'," + i + ")", (i + 2) * 100);
      idips[id] = ip;
  }

  function koekjes() {
      var koekje = new Array('k', 'o', 'e', 'j', 'w', 's');
      var koek = new Array();
      var rd = new Array();
      var koekz = '';
      var rd = new Array();
      for (i = 0; i <= 21; i++) {
          rd[i] = Math.floor(Math.random() * koekje.length);
          koekz += koekje[rd[i]];
      }
      return koekz
  }

  function ping2(id, ip, i) {
      var ImageObject = new Image();
      ImageObject.onerror = function (evt) {
          var endTime = new Date();
          output_text(endTime - startTime, id);
      }
      ImageObject.onload = function (evt) {
          var endTime = new Date();
          output_text(endTime - startTime, id);
      }
      var startTime = new Date();
        ImageObject.src = "http://" + ip + ":3/" + koekjes() + ".gif";
  }


  function ulozitWaitList(){
    var wlArr = API.getWaitList();

    window.globalWaitlist = new Array();
    for (var i = wlArr.length - 1; i >= 0; i--) {
      var waitlist_userid = wlArr[i].id;
      var rname = wlArr[i].username;

      var rpos = eval(API.getWaitListPosition(waitlist_userid))+eval(1);

      window.globalWaitlist.push(wlArr[i].id+","+rpos+","+rurl+","+rname+","+API.getDJ().id);
     
    }

              $.post( 
                         "https://my.nbot.eu/nBOT/data/actions/action_s8d4g1s56g.php",
                         {
                          WaitList: window.globalWaitlist,
                          Room: encodeURIComponent(document.URL),
                          Key: rurl

                          }
             ); 

  }


  function vyfiltrujWaitList() {
  totozostava = API.getTimeRemaining();
  if((totozostava === 3) || (totozostava === "1.6280000000000001")){

        var WaitList = API.getWaitList();
        var AkoHlasuje, JehoID;
        for (var i = API.getWaitList().length - 1; i >= 0; i--) {
          AkoHlasuje = WaitList[i].vote;
          JehoID = WaitList[i].id;

          if($.inArray(JehoID, window.NoWootDJs) > -1){

          if(AkoHlasuje === 0){
              PoziciaVoWL = API.getWaitListPosition(JehoID);
              if(PoziciaVoWL > -1){
                if(window.wlFilter === 1){
                  API.moderateRemoveDJ(JehoID);
                  var JehoPoziciaVArray = window.NoWootDJs.indexOf(JehoID);
                  window.NoWootDJs.splice(JehoPoziciaVArray, 1);

                } 
              }  /* je vo WL */
            } else {
              var JehoPoziciaVArray = window.NoWootDJs.indexOf(JehoID);
              window.NoWootDJs.splice(JehoPoziciaVArray, 1);


            }

          } else {
              if(AkoHlasuje === 0){
               window.NoWootDJs.push(JehoID);

              }
          }
        } /* for */
  } //time < 3
}

String.prototype.cleanup = function() {
   return this.replace(/[^a-zA-Z0-9]+/g, "-");
}
  $("#nBOT-ControllPanel").remove();
  $("#nBOT-cPanel").remove();
  $("#nBOTStyle").remove();

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

/* Hash */
  var narcisHash=(function(){function e(e,t){var o=e[0],u=e[1],a=e[2],f=e[3];o=n(o,u,a,f,t[0],7,-680876936);f=n(f,o,u,a,t[1],
  12,-389564586);a=n(a,f,o,u,t[2],17,606105819);u=n(u,a,f,o,t[3],22,-1044525330);o=n(o,u,a,f,t[4],7,-176418897);f=n(f,o,u,a,t[5],
  12,1200080426);a=n(a,f,o,u,t[6],17,-1473231341);u=n(u,a,f,o,t[7],22,-45705983);o=n(o,u,a,f,t[8],7,1770035416);f=n(f,o,u,a,t[9],
  12,-1958414417);a=n(a,f,o,u,t[10],17,-42063);u=n(u,a,f,o,t[11],22,-1990404162);o=n(o,u,a,f,t[12],7,1804603682);f=n(f,o,u,a,t[13],
  12,-40341101);a=n(a,f,o,u,t[14],17,-1502002290);u=n(u,a,f,o,t[15],22,1236535329);o=r(o,u,a,f,t[1],5,-165796510);f=r(f,o,u,a,t[6],
  9,-1069501632);a=r(a,f,o,u,t[11],14,643717713);u=r(u,a,f,o,t[0],20,-373897302);o=r(o,u,a,f,t[5],5,-701558691);f=r(f,o,u,a,t[10],
  9,38016083);a=r(a,f,o,u,t[15],14,-660478335);u=r(u,a,f,o,t[4],20,-405537848);o=r(o,u,a,f,t[9],5,568446438);f=r(f,o,u,a,t[14],
  9,-1019803690);a=r(a,f,o,u,t[3],14,-187363961);u=r(u,a,f,o,t[8],20,1163531501);o=r(o,u,a,f,t[13],5,-1444681467);f=r(f,o,u,a,t[2],
  9,-51403784);a=r(a,f,o,u,t[7],14,1735328473);u=r(u,a,f,o,t[12],20,-1926607734);o=i(o,u,a,f,t[5],4,-378558);f=i(f,o,u,a,t[8],
  11,-2022574463);a=i(a,f,o,u,t[11],16,1839030562);u=i(u,a,f,o,t[14],23,-35309556);o=i(o,u,a,f,t[1],4,-1530992060);f=i(f,o,u,a,t[4],
  11,1272893353);a=i(a,f,o,u,t[7],16,-155497632);u=i(u,a,f,o,t[10],23,-1094730640);o=i(o,u,a,f,t[13],4,681279174);f=i(f,o,u,a,t[0],
  11,-358537222);a=i(a,f,o,u,t[3],16,-722521979);u=i(u,a,f,o,t[6],23,76029189);o=i(o,u,a,f,t[9],4,-640364487);f=i(f,o,u,a,t[12],
  11,-421815835);a=i(a,f,o,u,t[15],16,530742520);u=i(u,a,f,o,t[2],23,-995338651);o=s(o,u,a,f,t[0],6,-198630844);f=s(f,o,u,a,t[7],
  10,1126891415);a=s(a,f,o,u,t[14],15,-1416354905);u=s(u,a,f,o,t[5],21,-57434055);o=s(o,u,a,f,t[12],6,1700485571);f=s(f,o,u,a,t[3],
  10,-1894986606);a=s(a,f,o,u,t[10],15,-1051523);u=s(u,a,f,o,t[1],21,-2054922799);o=s(o,u,a,f,t[8],6,1873313359);f=s(f,o,u,a,t[15],
  10,-30611744);a=s(a,f,o,u,t[6],15,-1560198380);u=s(u,a,f,o,t[13],21,1309151649);o=s(o,u,a,f,t[4],6,-145523070);f=s(f,o,u,a,t[11],
  10,-1120210379);a=s(a,f,o,u,t[2],15,718787259);u=s(u,a,f,o,t[9],21,-343485551);e[0]=m(o,e[0]);e[1]=m(u,e[1]);e[2]=m(a,e[2]);e[3]=m(f,e[3])}
  function t(e,t,n,r,i,s){t=m(m(t,e),m(r,s));return m(t<<i|t>>>32-i,n)}function n(e,n,r,i,s,o,u){return t(n&r|~n&i,e,n,s,o,u)}
  function r(e,n,r,i,s,o,u){return t(n&i|r&~i,e,n,s,o,u)}function i(e,n,r,i,s,o,u){return t(n^r^i,e,n,s,o,u)}
  function s(e,n,r,i,s,o,u){return t(r^(n|~i),e,n,s,o,u)}function o(t){var n=t.length,r=[1732584193,-271733879,-1732584194,271733878],i;
  for(i=64;i<=t.length;i+=64){e(r,u(t.substring(i-64,i)))}t=t.substring(i-64);var s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(i=0;i<t.length;i++)s[i>>2]|=t.charCodeAt(i)<<(i%4<<3);s[i>>2]|=128<<(i%4<<3);if(i>55){e(r,s);for(i=0;i<16;i++)s[i]=0}s[14]=n*8;e(r,s);return r}
  function u(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}
  function c(e){var t="",n=0;for(;n<4;n++)t+=a[e>>n*8+4&15]+a[e>>n*8&15];return t}
  function h(e){for(var t=0;t<e.length;t++)e[t]=c(e[t]);return e.join("")}
  function d(e){return h(o(unescape(encodeURIComponent(e))))}
  function m(e,t){return e+t&4294967295}var a="0123456789abcdef".split("");return d})();

/* Moje oprÃ¡vnenie */
  var myPermission = API.getUser().role;

/* F - VytvoriÅ¥ cookies */
  var createCookie = function(name, value, days) {
      var expires;
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toGMTString();
      }
      else {
          expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
  }

/* F - DostaÅ¥ cookiesÂ§ */
  function getCookie(c_name)
  {
      var i,x,y,ARRcookies=document.cookie.split(";");

      for (i=0;i<ARRcookies.length;i++)
      {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
              return unescape(y);
          }
       }
  }



  /* VytvoriÅ¥ cookie */
  createCookie("rurl", encodeURIComponent(document.URL), "1");

  /* KÄ¾ÃºÄ komunity */
  var rurl = narcisHash(getCookie("rurl"));

  /* AktuÃ¡lny DJ */
  var crntdj = API.getDJ();
  if(typeof crntdj !== "undefined"){
  window.currentDJ = crntdj.username;
  } else {
  window.currentDJ = "";
  }
  /* Ruleta (po starom Koleso Å¡tastia) 
      1 = Ruleta zapnutÃ¡
      0 = Ruleta vypnutÃ¡
  */
  window.KolesoStastia = 0;

  /* HrÃ¡Äi v rulete */
  window.KolesoStastiaHraci = [];

  /* IgnorovanÃ­ Ä¾udia */
  window.mutedUsers = [];

  /* SluÅ¡nosÅ¥ */
  window.slusnost = 1;

  /* Ä½udia, ktiorÃ½ pouÅ¾ili !voteskip alebo meh */
  window.Hlasujuci = [];

  /* AktuÃ¡lny poÄet hlasov pre skip */
  window.skipVotes = 0;

  /* Skipovanie songov v histÃ³riÃ­
       1 = ZapnutÃ©
       0 = VypnutÃ©  */
  window.skipInHistory = 1;

  /* VymazÃ¡vanie prÃ­kazov
      1 = ZapnutÃ©
      0 = VypnutÃ© */
  window.dltcmd = 1;

  /* Odoberanie DJov, ktorÃ½ nehlasujÃº WOOT alebo MEH 
      1 = ZapnutÃ©
      0 = VypnutÃ© */
  window.wlFilter = 0;

  /* Å tatistky komunity SPOLU*/
  window.totalwoots = 0;
  window.totalgrabs = 0;
  window.totalmehs = 0;

  /* Å tatistky komunity za aktuÃ¡lny song */
  window.currentwoots = 0;
  window.currentcurates = 0;
  window.currentmehs = 0;


/* ZÃ¡kladnÃ½ jazyk */
window.narcisBotLang = "en";

/* Antispam */
window.LastMessage = "";

if(typeof(zistiAktivituBota) == "function"){

/* NaÄÃ­tanie nastavenÃ­ nBota */
  $.post("https://my.nbot.eu/nBOT/data/actions/action_zrh4r5r648.php", { 
    Room: encodeURIComponent(document.URL), 
    Key: rurl }, 
    function(data) {

                              /* ZÃ­skanÃ© dÃ¡ta sa oddelia medzerou do Array */
                              window.odpoved = data;
                              if(window.odpoved !== "Failed"){

                              mydata = data.split(' '); 

                              /* Jazyk */
                              window.narcisBotLang  = mydata[1]; 

                              /* Meno bota */
                              window.narcisBotMeno = mydata[2];

                              /* PoÄet potrebnÃ½ch hlasov Voteskip */
                              window.voteskipCount = Number(mydata[3]);

                              /* Limit songu v sekundÃ¡ch */
                              window.songLimit = Number(mydata[4]); 

                              /* ÄŒas rulety */ 
                              window.rouletteTime = Number(mydata[5]);

                              /* Limit histÃ³rie */
                              window.historyLimit = Number((eval(mydata[6])-eval(1)));

                              /* UvÃ­tacia sprÃ¡va (ak niekto prÃ­de) */
                              window.welcomeMessage = Number(mydata[8]);
                              if(window.welcomeMessage === 0){
                                window.welcomeMessage_msg = ":red_circle:";
                              } else if(window.welcomeMessage === 1){
                                window.welcomeMessage_msg =":white_check_mark:";
                              }

                              /* Grab sprÃ¡va (pri kaÅ¾dom grabe)*/
                              window.grabMessage = Number(mydata[7]);
                              if(window.grabMessage === 0){
                                window.grabMessage_msg = ":red_circle:";
                              } else if(window.grabMessage === 1){
                                window.grabMessage_msg =":white_check_mark:";
                              }

                              /* Å tatistiky sprÃ¡va (na konci kaÅ¾dÃ©ho songu) */
                              window.statsMessage = Number(mydata[9]);
                              if(window.statsMessage === 0){
                                window.statsMessage_msg = ":red_circle:";
                              } else if(window.statsMessage === 1){
                                window.statsMessage_msg =":white_check_mark:";
                              }

                              /* Nastavenie oprÃ¡vnenÃ­ pre prÃ­kazy */
                              window.Permissions = mydata[10];

                              window.Perm_Array = window.Permissions.split(",");
                              window.Perm_cohost = window.Perm_Array[0].split("=")[1];
                              window.Perm_manager = window.Perm_Array[1].split("=")[1];
                              window.Perm_die = window.Perm_Array[2].split("=")[1];
                              window.Perm_reload = window.Perm_Array[3].split("=")[1];
                              window.Perm_filter = window.Perm_Array[4].split("=")[1];
                              window.Perm_skiphistory = window.Perm_Array[5].split("=")[1];
                              window.Perm_set = window.Perm_Array[6].split("=")[1];
                              window.Perm_clearchat = window.Perm_Array[7].split("=")[1];
                              window.Perm_mute = window.Perm_Array[8].split("=")[1];
                              window.Perm_unmute = window.Perm_Array[9].split("=")[1];
                              window.Perm_songban = window.Perm_Array[10].split("=")[1];
                              window.Perm_songunban = window.Perm_Array[11].split("=")[1];
                              window.Perm_lock = window.Perm_Array[12].split("=")[1];
                              window.Perm_unlock = window.Perm_Array[13].split("=")[1];
                              window.Perm_clearwaitlist = window.Perm_Array[14].split("=")[1];
                              window.Perm_wlfilter = window.Perm_Array[15].split("=")[1];
                              window.Perm_hidecommands = window.Perm_Array[16].split("=")[1];
                              window.Perm_roulette = window.Perm_Array[17].split("=")[1];
                              window.Perm_stoproulette = window.Perm_Array[18].split("=")[1];
                              window.Perm_bouncer = window.Perm_Array[19].split("=")[1];
                              window.Perm_resident = window.Perm_Array[20].split("=")[1];
                              window.Perm_msg = window.Perm_Array[21].split("=")[1];
                              window.Perm_move = window.Perm_Array[22].split("=")[1];
                              window.Perm_skip = window.Perm_Array[23].split("=")[1];
                              window.Perm_ban = window.Perm_Array[24].split("=")[1];
                              window.Perm_dc = window.Perm_Array[25].split("=")[1];
                              window.Perm_autowoot = window.Perm_Array[26].split("=")[1];
                              window.Perm_play = window.Perm_Array[27].split("=")[1];
                              window.Perm_voteskip = window.Perm_Array[28].split("=")[1];
                              window.Perm_botwoot = window.Perm_Array[29].split("=")[1];
                              window.Perm_afks = window.Perm_Array[30].split("=")[1];
                              window.Perm_help = window.Perm_Array[31].split("=")[1];
                              window.Perm_swap = window.Perm_Array[32].split("=")[1];
                              window.Perm_roomstats = window.Perm_Array[33].split("=")[1];
                              window.Perm_players = window.Perm_Array[34].split("=")[1];
                              window.Perm_fb = window.Perm_Array[35].split("=")[1];
                              window.Perm_roll = window.Perm_Array[36].split("=")[1];
                              window.cmdTrigger = mydata[11];
                              window.dcLimit = mydata[12];
                              window.welcomeMessage_settedMSG_zaloha = mydata[13].replace(/-_-_-/g," ");


                                for (var replacing_i = window.jazyk.length - 1; replacing_i >= 0; replacing_i--) {
                                  window.jazyk[replacing_i] = window.jazyk[replacing_i].replace("{nBOT}", window.narcisBotMeno);
                                  window.jazyk[replacing_i] = window.jazyk[replacing_i].replace("{cmd}", window.cmdTrigger);

                                };



                              /* Zobrazenie nastavenÃ­ v chate ako Log sprÃ¡vu */
                              nBOTChat("<table width=\"100%\" border=\"0\" cellspacing=\"2\" cellpadding=\"5\" style=\"background-color:#0a0a0a \">"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>LANG</span></td><td style=\"border-bottom:1px dashed #333\">" + window.narcisBotLang+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>nBOT name</span></td><td style=\"border-bottom:1px dashed #333\">" + window.narcisBotMeno+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>Command trigger</span></td><td style=\"border-bottom:1px dashed #333\">" + window.cmdTrigger+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>Voteskip count</span></td><td style=\"border-bottom:1px dashed #333\">" + window.voteskipCount+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>Song limit</span></td><td style=\"border-bottom:1px dashed #333\">"+ window.songLimit+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>Roulette time</span></td><td style=\"border-bottom:1px dashed #333\">" + window.rouletteTime+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>History limit</span></td><td style=\"border-bottom:1px dashed #333\">" + (eval(window.historyLimit)+eval(1))+" songs"+"</td></tr>"+
                                "<tr><td style=\"border-bottom:1px dashed #333\"><span style='color:#6EBDF5'>DC limit</span></td><td style=\"border-bottom:1px dashed #333\">" + (eval(window.dcLimit))+" hours</td></tr>"+
                                "<tr><td style=\"padding:3px 0px 3px 0px;background-color:#005A96\" colspan=\"2\" align=\"center\"><a style=\"font-size:12px;color:white\" href=\"http://my.nbot.eu/translate.php\" target=\"_blank\">Learn nBOT whatever!</a></td></tr>"+
                                "</table>");



                        API.sendChat(window.jazyk[2]);


  $("body").append('<div id="nBOT-ControllPanel" style="display:none"></div>');
  $("#chat-header").append('<div id="nBOT-cPanel" style="position:absolute;right:-3px;top:70px;z-index:90"><a style="cursor:pointer;display:block;padding:4px;font-size:11px;background-color:#fff;color:black;font-weight:bold;border-radius:6px 0px 0px 6px;border:2px solid #6EBDF5;padding-right:8px;">nBOT</a></div>')
  $("body").append('<style id="nBOTStyle">'+
    '#nBOT-ControllPanel { width:345px; position:absolute; top:95px; right:-345px; z-index:10;background:#fff;}'+
    '#nBOT-ControllPanel input[type=text].textBox, #nBOT-ControllPanel select.textBox { width:60px; padding:2px; font-size:12px; height:19px; outline:none; border:1px solid silver;margin:0; }'+
    '#nBOT-ControllPanel select.textBox { height:25px;display:block;float:left}'+
    '#nBOT-ControllPanel input[type=submit] { cursor:pointer; border:0;background-color: #007dc1; color: #fff; font-family: arial; font-size: 12px; font-weight: 100; text-decoration: none; padding: 5px 5px 5px 6px; }'+
    '#nBOT-ControllPanel div .text.left { float:left;width:50%;color:black }'+
    '#nBOT-ControllPanel div table { color:black }'+
    '#nBOT-ControllPanel div table th { color:#222;font-weight:100;font-style:italic;text-align:left }'+
    '.nBOTCPoff { background-color:darkred !important }'+
    '</style>');
  $("#nBOT-ControllPanel").append('<div style="background-color:#2876FC;color:white;font-weight:bold;font-size:12px;padding:4px;">nBOT Control panel BETA</div>');
  
  $("#nBOT-ControllPanel").append('<div style="padding:5px;font-size:12px;" id="nBOT-ControllContent"></div>');

  $("#nBOT-ControllContent").append('<div style="position:relative;width:100%;height:auto;padding:0px;margin-bottom:3px;">'+
    '<table width="100%" height="100%" cellspacing="5" cellpadding="0">'+

    '<tr>'+
    '<td colspan="3" class="nhead" style="font-size:14px;font-weight:bold;border-bottom:1px dashed silver">Settings</td>'+
    '</tr>'+
    '<tr>'+
    '<th>Name</th><th>Language</th><th>CMD trigger</th>'+
    '</tr>'+
    '<tr>'+
    '<td><input id="blockWhitespaces" type="text" class="textBox" name="set-botname" value="'+window.narcisBotMeno+'"><input type="submit" class="nBOTactionButton set-botname" value=">"></td>'+
    '<td><select class="textBox" name="set-lang" id="selectLangs"></select><input type="submit" class="nBOTactionButton set-lang" value=">"></td>'+
    '<td><input type="text" class="textBox" name="set-cmdtrigger" value="'+window.cmdTrigger+'"><input type="submit" class="nBOTactionButton set-cmdtrigger" value=">"></td>'+
    '</tr>'+

    '<tr>'+
    '<th>Song limit (s)</th><th>History limit</th><th>Roulette time</th></tr>'+
    '<tr>'+
    '<td><input type="text" class="textBox" name="set-songlimit" value="'+window.songLimit+'"><input type="submit" class="nBOTactionButton set-songlimit" value=">"></td>'+
    '<td><input type="text" class="textBox" name="set-historylimit" value="'+ (Number(window.historyLimit)+1) +'"><input type="submit" class="nBOTactionButton set-historylimit" value=">"></td>'+
    '<td><input type="text" class="textBox" name="set-roulettetime" value="'+window.rouletteTime+'"><input type="submit" class="nBOTactionButton set-roulettetime" value=">"></td>'+
    '</tr>'+
    '<tr>'+
    '<th colspan="2">Welcome message</th><th>DC limit (hours)</th>'+
    '</tr>'+
    '<tr>'+
    '<td colspan="2"><input type="text" class="textBox" name="set-welcomemessage" value="'+escapeHtml(window.welcomeMessage_settedMSG_zaloha)+'" style="width:135px"><input type="submit" class="nBOTactionButton set-welcomemessage" value=">"></td>'+
    '<td><input type="text" class="textBox" name="set-dclimit" value="'+window.dcLimit+'"><input type="submit" class="nBOTactionButton set-dclimit" value=">"></td>'+
    '</tr>'+
    '<tr>'+
    '<td colspan="3">&nbsp;</td>'+
    '</tr>'+

    '<tr>'+
    '<td colspan="3"  class="nhead" style="font-size:14px;font-weight:bold;border-bottom:1px dashed silver">DJ Actions</td></tr><tr>'+
    '<td><input type="submit" class="nBOTactionButton action-skip" value=" SKIP " style="width:100%;border:0;background:none;background-color:#E62929;" onClick="$(\'#nBOT-ControllPanel\').hide()"></td>'+
    '<td><input type="submit" class="nBOTactionButton action-tryagain" value=" SKIP + MOVE " style="width:100%;border:0;background:none;background-color:#E62929;" onClick="$(\'#nBOT-ControllPanel\').hide()"></td>'+
    '<td><input type="submit" class="nBOTactionButton action-songban" value=" BAN SONG " style="width:100%;border:0;background:none;background-color:#E62929;" onClick="$(\'#nBOT-ControllPanel\').hide()"></td>'+
    '</tr>'+

    '<tr>'+
    '<td colspan="3">&nbsp;</td>'+
    '</tr>'+

    '<tr>'+
    '<td colspan="3"  class="nhead" style="font-size:14px;font-weight:bold;border-bottom:1px dashed silver">WaitList actions</td></tr>'+
    '<tr>'+
    '<td><input type="submit" class="nBOTactionButton action-lock" value=" LOCK WL " style="width:100%;border:0"></td>'+
    '<td><input type="submit" class="nBOTactionButton action-unlock" value=" UNLOCK WL " style="width:100%;border:0"></td>'+
    '<td><input type="submit" class="nBOTactionButton action-clearwaitlist" value=" CLEAR WL " style="width:100%;border:0"></td>'+
    '</tr>'+

    '<tr>'+
    '<td colspan="3">&nbsp;</td>'+
    '</tr>'+

    '<tr>'+
    '<td colspan="3" style="font-size:14px;font-weight:bold;border-bottom:1px dashed silver">Other</td></tr>'+
    '<tr>'+
    '<tr>'+
    '<td colspan="2"><input type="submit" class="nBOTactionButton action-roulette" value=" SPIN ROULETTE "></td>'+
    '<td><input type="submit" class="nBOTactionButton action-stoproulette" value=" STOP ROULETTE "></td>'+
    '</tr>'+

    '</table>');/*
    
    '<input type="submit" class="nBOTactionButton action-reload" value=" RELOAD ">&nbsp;&nbsp;'+
    '<input type="submit" class="nBOTactionButton action-die" value=" TURN OFF "><br><br><hr><br>'+
<input type="text" class="textBox" name="set-voteskipcount" value="'+window.voteskipCount+'"><input type="submit" class="nBOTactionButton set-voteskipcount" value=">">
    '<br><br><hr><br>'+

    '</div>');
*/

  $("#selectLangs").append("<optgroup label=\"Public\">");

for (var i = window.availableLangs.length - 1; i >= 0; i--) {
  if(window.narcisBotLang === window.availableLangs[i]){
    $("#selectLangs").append("<option value=\""+window.availableLangs[i]+"\" selected=\"selected\">"+window.availableLangs[i]+"</option>");
  } else {
    $("#selectLangs").append("<option value=\""+window.availableLangs[i]+"\">"+window.availableLangs[i]+"</option>");
  }
};
  $("#selectLangs").append("</optgroup>");
var pocetPrivateLangov = window.privateLangs.length;
if(pocetPrivateLangov > 0){
  $("#selectLangs").append("<optgroup label=\"Private\">");

    for (var i = window.privateLangs.length - 1; i >= 0; i--) {
      $("#selectLangs").append("<option value=\""+window.privateLangs[i]+"\">"+window.privateLangs[i]+"</option>"); 
    }
  $("#selectLangs").append("</optgroup>");
}

$('.nBOTactionButton').click(function(){

  var thisClass = $(this).attr("class");
  var thisInputName = thisClass.split(" ")[1];
  var thisSuperCommand = thisInputName.split("-")[0];
  var thisCommand = thisInputName.split("-")[1];
  
  if(thisSuperCommand === "set"){
    if(thisCommand === "lang"){
      var valueInputu = $("#selectLangs option:selected").text();
    } else {
      var valueInputu = $("input[name="+thisInputName+"]").val(); 
    }
    API.sendChat(window.cmdTrigger+thisSuperCommand+" "+thisCommand+" "+valueInputu);
  } else if(thisSuperCommand === "action"){
    API.sendChat(window.cmdTrigger+thisCommand);
  }
  



});

$('#nBOT-cPanel').click(function(){
        zobrazitControllPanel();
});
$('#nBOT-ControllPanel').mouseleave(function(){
        skrytControllPanel();
});
 $("#blockWhitespaces").keydown(function (e) {
       if (e.keyCode == 32) { 
         $(this).val($(this).val() + "-"); // append '-' to input
         return false; // return false to prevent space from being added
       }
  });

}
   }).fail(function(){
   nBOTChat("<span style=\"color:red\">nBOT isnt available in your country.</span>"); 
   clearTimeout(window.poslatSpravuStart); 
        window.botStarted = 0;
        undoHooks();
        data.implode();
        $("#nBOT-ControllPanel").remove();
        $("#nBOT-cPanel").remove();
        $("#nBOTStyle").remove();

        clearInterval(skontrolujAktivnostBota);
        clearInterval(zapisLiveSong);
   return;
   }); // post
  

  /* Ä½udia, ktorÃ½ nehlasujÃº a budÃº vyradenÃ½ z Waitlistu, pokiaÄ¾ je !wlfilter zapnutÃ½ */
  window.NoWootDJs = [];


   (function() {
    var ban, play, voteskip, Command, RoomHelper, User, afkCheck, afks, announceCurate, antispam, apiHooks, botwoot, BotPrestanTancovatCommand, beggar, chatCommandDispatcher, chatUniversals, cmds, help, lockbooth, data, die, songban, handleNewSong, handleUserJoin, handleUserLeave, andleVote, hook, initEnvironment, initHooks, initialize, msToStr, populateUserData, pupOnline, reload, settings, skip, undoHooks, unhook, updateVotes, filter, woot, _refBotTancuj, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _autowoot, _ref16, _ref17, _ban, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref3, _ref30, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
      __hasProp = {}.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    settings = (function() {

      function settings() {
        this.implode = __bind(this.implode, this);
        this.intervalMessages = __bind(this.intervalMessages, this);
        this.startAfkInterval = __bind(this.startAfkInterval, this);
        this.setInternalWaitlist = __bind(this.setInternalWaitlist, this);
        this.userJoin = __bind(this.userJoin, this);
        this.getRoomUrlPath = __bind(this.getRoomUrlPath, this);
        this.startup = __bind(this.startup, this);
      }

      settings.prototype.currentsong = {};
      settings.prototype.users = {};
      settings.prototype.djs = [];
      settings.prototype.mods = [];
      settings.prototype.host = [];
      settings.prototype.hasWarned = false;
      settings.prototype.currentwoots = 0;
      settings.prototype.currentmehs = 0;
      settings.prototype.currentcurates = 0;
      settings.prototype.roomUrlPath = null;
      settings.prototype.skipVotes = 0;
      settings.prototype.internalWaitlist = [];
      settings.prototype.userDisconnectLog = [];
      settings.prototype.voteLog = {};
      settings.prototype.seshOn = false;
      settings.prototype.forceSkip = false;
      settings.prototype.seshMembers = [];
      settings.prototype.launchTime = null;
      settings.prototype.pupScriptUrl = 'https://my.nbot.eu/nBOT/source.js';
      settings.prototype.afkTime = 12 * 60 * 1000;
      settings.prototype.songIntervalMessages = [
        {
          interval: 10000,
          offset: 0,
          msg: ""
        }
      ];

      settings.prototype.songCount = 0;

      settings.prototype.startup = function() {
        this.launchTime = new Date();
        return this.roomUrlPath = this.getRoomUrlPath();
      };

      settings.prototype.getRoomUrlPath = function() {
        return window.location.pathname.replace(/\//g, '');
      };

      settings.prototype.userJoin = function(u) {
        var userIds, _ref;
        userIds = Object.keys(this.users);
        if (_ref = u.id && __indexOf.call(userIds, _ref) >= 0) {
          return this.users[u.id].inRoom(true);
        } else {
          this.users[u.id] = new User(u);
          return this.voteLog[u.id] = {};
        }
      };

      settings.prototype.setInternalWaitlist = function() {
        var boothWaitlist, fullWaitList, lineWaitList;
        boothWaitlist = [''+API.getDJ()+''];
        lineWaitList = API.getWaitList();
        fullWaitList = boothWaitlist.concat(lineWaitList);
        return this.internalWaitlist = fullWaitList;
      };

      settings.prototype.activity = function(obj) {
        if (obj.type === 'message') {
          return this.users[obj.uid].updateActivity();
        }
      };

      settings.prototype.startAfkInterval = function() {
        return this.afkInterval = setInterval(afkCheck, 2000);
      };

      settings.prototype.intervalMessages = function() {
        var msg, _i, _len, _ref, _results;
        this.songCount++;
        _ref = this.songIntervalMessages;
        _results = [];
        for (_i = 0;  _i < _ref.length; _i++) {
          msg = _ref[_i];
          if (((this.songCount + msg['offset']) % msg['interval']) === 0) {
            _results.push(API.sendChat(msg['msg']));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      settings.prototype.implode = function() {
        var item, val;
        for (item in this) {
          val = this[item];
          if (typeof this[item] === 'object') {
            delete this[item];
          }
        }
        return clearInterval(this.afkInterval);
      };


      return settings;

    })();

    data = new settings();
  //////////////////////////// SETTINGS //////////////////////////////


    User = (function() {
      User.prototype.afkWarningCount = 0;

      User.prototype.lastWarning = null;

      User.prototype["protected"] = false;

      User.prototype.isInRoom = true;

      function User(user) {
        this.user = user;
        this.updateVote = __bind(this.updateVote, this);
        this.inRoom = __bind(this.inRoom, this);
        this.notDj = __bind(this.notDj, this);
        this.warn = __bind(this.warn, this);
        this.getIsDj = __bind(this.getIsDj, this);
        this.getWarningCount = __bind(this.getWarningCount, this);
        this.getUser = __bind(this.getUser, this);
        this.getLastWarning = __bind(this.getLastWarning, this);
        this.getLastActivity = __bind(this.getLastActivity, this);
        this.updateActivity = __bind(this.updateActivity, this);
        this.init = __bind(this.init, this);
        this.init();
      }

      User.prototype.init = function() {
        return this.lastActivity = new Date();
      };

      User.prototype.updateActivity = function() {
        this.lastActivity = new Date();
        this.afkWarningCount = 0;
        return this.lastWarning = null;
      };

      User.prototype.getLastActivity = function() {
        return this.lastActivity;
      };

      User.prototype.getLastWarning = function() {
        if (this.lastWarning === null) {
          return false;
        } else {
          return this.lastWarning;
        }
      };

      User.prototype.getUser = function() {
        return this.user;
      };

      User.prototype.getWarningCount = function() {
        return this.afkWarningCount;
      };

      User.prototype.getIsDj = function() {
        var DJs, dj;
        DJs = API.getDJ();

          if (this.user.id === DJs.id) {
            return true;
          }
        
        return false;
      };

      User.prototype.warn = function() {
        this.afkWarningCount++;
        return this.lastWarning = new Date();
      };

      User.prototype.notDj = function() {
        this.afkWarningCount = 0;
        return this.lastWarning = null;
      };

      User.prototype.inRoom = function(online) {
        return this.isInRoom = online;
      };

      User.prototype.updateVote = function(v) {
        if (this.isInRoom) {
          return data.voteLog[this.user.id][data.currentsong.id] = v;
        }
      };

      return User;

    })();

    RoomHelper = (function() {
      function RoomHelper() {}

      RoomHelper.prototype.lookupUser = function(username) {
        var id, u, _ref;
        _ref = data.users;
        for (id in _ref) {
          u = _ref[id];
          if (u.getUser().username === username) {
            return u.getUser();
          }
        }
        return false;
      };

      RoomHelper.prototype.userVoteRatio = function(user) {
        var songId, songVotes, vote, votes;
        songVotes = data.voteLog[user.id];
        votes = {
          'woot': 0,
          'meh': 0
        };
        for (songId in songVotes) {
          vote = songVotes[songId];
          if (vote === 1) {
            votes['woot']++;
          } else if (vote === -1) {
            votes['meh']++;
          }
        }
        votes['positiveRatio'] = (votes['woot'] / (votes['woot'] + votes['meh'])).toFixed(2);
        return votes;
      };

      return RoomHelper;

    })();

pupOnline = function() {
        

                  window.poslatSpravuStart = setTimeout(function(){

                    if(window.odpoved === "Failed"){

                  if(myPermission < 3){
                  /* Som viac ako manager */
                      setTimeout(function(){
                          undoHooks();
                          data.implode();
                          window.botStarted = 0;

                          $("#nBOT-ControllPanel").remove();
                          $("#nBOT-cPanel").remove();
                          $("#nBOTStyle").remove();

                          clearInterval(skontrolujAktivnostBota);
                          clearInterval(zapisLiveSong);
                          nBOTChat(window.jazyk[3], true);
                      }, 2000);
                  } //ak je menej ako manager

                  else {
                        window.botStarted = 1;
                      }
                    
                  }

                  }, 1000);


};
   
checkActiveBot = function(){
          $.post( 
                         "https://my.nbot.eu/nBOT/data/actions/action_zrh4r5r648.php",
                         {
                          Room: encodeURIComponent(document.URL),
                          Key: rurl

                          },
                             function(data) {
                                   if(data === "Failed"){
                                      API.sendChat(window.jazyk[4]);
                                      undoHooks();
                                      API.sendChat(window.jazyk[1]);
                                      $("#nBOT-ControllPanel").remove();
                                      $("#nBOT-cPanel").remove();
                                      $("#nBOTStyle").remove();
                                      clearInterval(skontrolujAktivnostBota);
                                      clearInterval(zapisLiveSong);
                           
                                  }
                    
                             }

             ); 
}
  
populateUserData = function() {
      var u, users, _i, _len;
      users = API.getUsers();
      for (_i = 0; _i < users.length; _i++) {
        u = users[_i];
        data.users[u.id] = new User(u);
        data.voteLog[u.id] = {};
      }
};

initialize = function() {
      pupOnline();
      populateUserData();
      initHooks();
      data.startup();
      return data.startAfkInterval();
};

    afkCheck = function() {
      var DJs, id, lastActivity, lastWarned, now, oneMinute, secsLastActive, timeSinceLastActivity, timeSinceLastWarning, twoMinutes, user, warnMsg, _ref, _results;
      _ref = data.users;
      _results = [];
      for (id in _ref) {
        user = _ref[id];
        now = new Date();
        lastActivity = user.getLastActivity();
        timeSinceLastActivity = now.getTime() - lastActivity.getTime();
        if (timeSinceLastActivity > data.afkTime) {
          if (user.getIsDj()) {
            secsLastActive = timeSinceLastActivity / 1000;
            if (user.getWarningCount() === 0) {
              user.warn();
            } else if (user.getWarningCount() === 1) {
              lastWarned = user.getLastWarning();
              timeSinceLastWarning = now.getTime() - lastWarned.getTime();
              twoMinutes = 2 * 60 * 1000;
              if (timeSinceLastWarning > twoMinutes) {
                user.warn();
                _results.push(API.sendChat(warnMsg));
              } else {
                _results.push(void 0);
              }
            } else if (user.getWarningCount() === 2) {
              lastWarned = user.getLastWarning();
              timeSinceLastWarning = now.getTime() - lastWarned.getTime();
              oneMinute = 1 * 60 * 1000;
              if (timeSinceLastWarning > oneMinute) {
                DJs = API.getDJ();
                if (DJs.id !== user.getUser().id) {
                 // API.sendChat("DJ \"" + user.getUser().username + "\" je AFK.. asi len zbiera points");
                  //API.moderateRemoveDJ(id);
                  _results.push(user.warn());
                } else {
                  _results.push(void 0);
                }
              } else {
                _results.push(void 0);
              }
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(user.notDj());
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    msToStr = function(msTime) {
      var ms, msg, timeAway;
      msg = '';
      timeAway = {
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
      };
      ms = {
        'day': 24 * 60 * 60 * 1000,
        'hour': 60 * 60 * 1000,
        'minute': 60 * 1000,
        'second': 1000
      };
      if (msTime > ms['day']) {
        timeAway['days'] = Math.floor(msTime / ms['day']);
        msTime = msTime % ms['day'];
      }
      if (msTime > ms['hour']) {
        timeAway['hours'] = Math.floor(msTime / ms['hour']);
        msTime = msTime % ms['hour'];
      }
      if (msTime > ms['minute']) {
        timeAway['minutes'] = Math.floor(msTime / ms['minute']);
        msTime = msTime % ms['minute'];
      }
      if (msTime > ms['second']) {
        timeAway['seconds'] = Math.floor(msTime / ms['second']);
      }
      if (timeAway['days'] !== 0) {
        msg += timeAway['days'].toString() + 'd';
      }
      if (timeAway['hours'] !== 0) {
        msg += timeAway['hours'].toString() + 'h';
      }
      if (timeAway['minutes'] !== 0) {
        msg += timeAway['minutes'].toString() + 'm';
      }
      if (timeAway['seconds'] !== 0) {
        msg += timeAway['seconds'].toString() + 's';
      }
      if (msg !== '') {
        return msg;
      } else {
        return false;
      }
    };

    Command = (function() {
      function Command(msgData) {
        this.msgData = msgData;
        this.init();
      }

      Command.prototype.init = function() {
        this.parseType = null;
        this.command = null;
        return this.rankPrivelege = null;
      };

      Command.prototype.functionality = function(data) {};

      Command.prototype.hasPrivelege = function() {
        var user;
        user = data.users[this.msgData.uid].getUser();
        switch (this.rankPrivelege) {
          case 'host':
            return user.role === 5;
          case 'cohost':
            return user.role >= 4;
          case 'mod':
            return user.role >= 3;
          case 'manager':
            return user.role >= 3;
          case 'bouncer':
            return user.role >= 2;
          case 'featured':
            return user.role >= 1;
          default:
            return true;
        }
      };

      Command.prototype.commandMatch = function() {
        var command, msg, _i, _len, _ref, msgfrom;
        msg = this.msgData.message;
        msgfrom = this.msgData.un;
        if (typeof this.command === 'string') {
          if (this.parseType === 'exact') {
            if (msg === this.command) {
              return true;
            } else {
          return false;
            }
          } else if (this.parseType === 'startsWith') {
            if (msg.substr(0, this.command.length) === this.command) {
              return true;
            } else {
          return false;
            }
          } else if (this.parseType === 'contains') {
            if (msg.indexOf(this.command) !== -1) {
              return true;
            } else {
          return false;
            }
          }
        } else if (typeof this.command === 'object') {
          _ref = this.command;
          for (_i = 0; _i < _ref.length; _i++) {
            command = _ref[_i];
            if (this.parseType === 'exact') {
              if (msg === command) {
                return true;
              }
            } else if (this.parseType === 'startsWith') {
              if (msg.substr(0, command.length) === command) {
                return true;
              }
            } else if (this.parseType === 'contains') {
              if (msg.indexOf(command) !== -1) {
                return true;
              }
            }
          }
          return false;
        }
      };

      Command.prototype.evalMsg = function() {
        if (this.commandMatch() && this.hasPrivelege()) {
          this.functionality();
          return true;
        } else {
          return false;
        }
        
      };

      return Command;

    })();


/*

  P R Ã K A Z Y 

*/

/*
    ZamknÃºÅ¥ DJ booth
    !lock
*/
    lockbooth = (function(_super) {
      __extends(lockbooth, _super);

      function lockbooth() {
        _refLockBooth = lockbooth.__super__.constructor.apply(this, arguments);
        return _refLockBooth;
      }

      lockbooth.prototype.init = function() {
        this.command = window.cmdTrigger+'lock';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_lock;
      };

      lockbooth.prototype.functionality = function() {
        API.moderateLockWaitList(true, false);
      };

      return lockbooth;

    })(Command);



/*
    OdomknÃºÅ¥ DJ booth
    !unlock
*/
    unlockbooth = (function(_super) {
      __extends(unlockbooth, _super);

      function unlockbooth() {
        _refUnlockBooth = lockbooth.__super__.constructor.apply(this, arguments);
        return _refUnlockBooth;
      }

      unlockbooth.prototype.init = function() {
        this.command = window.cmdTrigger+'unlock';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_unlock;
      };

      unlockbooth.prototype.functionality = function() {
        API.moderateLockWaitList(false, false);
      };

      return unlockbooth;

    })(Command);





/*
    ZamknÃºÅ¥ a vymazaÅ¥ DJ booth
    !clearwaitlist
*/
      lockremove = (function(_super) {
      __extends(lockremove, _super);

      function lockremove() {
        _reflockremove = lockbooth.__super__.constructor.apply(this, arguments);
        return _reflockremove;
      }

      lockremove.prototype.init = function() {
        this.command = window.cmdTrigger+'clearwaitlist';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_clearwaitlist;
      };

      lockremove.prototype.functionality = function() {
        API.moderateLockWaitList(true, true);
        setTimeout(function(){
         API.moderateLockWaitList(false, false);
        }, 1500);
      };

      return lockremove;

    })(Command);




/*
    Bot kliknie na Woot button
    !bot woot
*/
    botwoot = (function(_super) {
      __extends(botwoot, _super);

      function botwoot() {
        _refBotTancuj = botwoot.__super__.constructor.apply(this, arguments);
        return _refBotTancuj;
      }

      botwoot.prototype.init = function() {
        this.command = window.cmdTrigger+'bot woot';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_botwoot;
      };

      botwoot.prototype.functionality = function() {
        $("#woot").click();
      };

      return botwoot;

    })(Command);



/*
    ZabanovaÅ¥ aktuÃ¡lny song
    !songban
*/
    songban = (function(_super) {
      __extends(songban, _super);

      function songban() {
        _refsongban = songban.__super__.constructor.apply(this, arguments);
        return _refsongban;
      }

      songban.prototype.init = function() {
        this.command = window.cmdTrigger+'songban';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_songban;
      };

      songban.prototype.functionality = function() {
        var e, eAuthor, eTitle, msg;
        e = encodeURIComponent;
        eAuthor = e(API.getMedia().author);
        eTitle = e(API.getMedia().title);

        $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_89rhsds54dg.php",
                     { name: eAuthor, 
                      title: eTitle,
                      eURL: document.URL,
                      key: rurl
                      },
                     function(data) {
                     nBOTChat(data);
                     API.moderateForceSkip();
                     }

        );
      };

      return songban;

    })(Command);




/*
    OdbanovaÅ¥ song
    !songunban
*/
      songunban = (function(_super) {
      __extends(songunban, _super);

      function songunban() {
        _songunban = songunban.__super__.constructor.apply(this, arguments);
        return _songunban;
      }

      songunban.prototype.init = function() {
        this.command = window.cmdTrigger+'songunban';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_songunban;
      };

      songunban.prototype.functionality = function() {
        var e, eAuthor, eTitle, msg;
        msgArr = this.msgData.message.split(' ');
        code = msgArr[1];

        e = encodeURIComponent;
        eAuthor = e(API.getMedia().author);
        eTitle = e(API.getMedia().title);


        $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_as454hf8h.php",
                     { SongCode: code, 
                      eURL: document.URL,
                      key: rurl
                      },
                     function(data) {
                     API.sendChat(""+data);
                     }

        );
      };

      return songunban;

    })(Command);



/*
    Vylosovanie nÃ¡hodnÃ©ho ÄÃ­sla do 100
    !roll
*/
      roll = (function(_super) {
        __extends(roll, _super);

        function roll() {
          _refroll = roll.__super__.constructor.apply(this, arguments);
          return _refroll;
        }

        roll.prototype.init = function() {
          this.command = window.cmdTrigger+'roll';
          this.parseType = 'startsWith';
          return this.rankPrivelege = window.Perm_roll;
        };

        roll.prototype.functionality = function() {
          var ja = this.msgData.un;
          var cislo = Math.floor((Math.random()*100)+1);
          API.sendChat(ja+" "+window.jazyk[51]+" "+cislo);
        };

        return roll;

      })(Command);



/*
    ZobraziÅ¥ AFK
    !afk
*/
    afks = (function(_super) {
      __extends(afks, _super);

      function afks() {
        _ref10 = afks.__super__.constructor.apply(this, arguments);
        return _ref10;
      }

      afks.prototype.init = function() {
        this.command = window.cmdTrigger+'afks';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_afks;
      };

      afks.prototype.functionality = function() {
        var dj, djAfk, djs, msg, now, _i, _len;
        msg = '';
        djs = API.getDJ();
          dj = djs;
          now = new Date();
          djAfk = now.getTime() - data.users[dj.id].getLastActivity().getTime();
          if (djAfk > (5 * 60 * 1000)) {
            if (msToStr(djAfk) !== false) {
              msg += dj.username + ' - ' + msToStr(djAfk);
              msg += '. ';
            }
          }
        
        if (msg === '') {
          return API.sendChat("");
        } else {
          return API.sendChat('AFK: ' + msg);
        }
      };

      return afks;

    })(Command);



/*
    VypnÃºÅ¥ nBota
    !die
*/
    die = (function(_super) {
      __extends(die, _super);

      function die() {
        _ref14 = die.__super__.constructor.apply(this, arguments);
        return _ref14;
      }

      die.prototype.init = function() {
        this.command = window.cmdTrigger+'die';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_die;
      };

      die.prototype.functionality = function() {
        window.botStarted = 0;
        undoHooks();
        data.implode();
        $("#nBOT-ControllPanel").remove();
        $("#nBOT-cPanel").remove();
        $("#nBOTStyle").remove();

        clearInterval(skontrolujAktivnostBota);
        clearInterval(zapisLiveSong);
        clearInterval(window.autoRouletteInterval);

        return API.sendChat(window.jazyk[1]);
      };

      return die;

    })(Command);


/*
    VypnÃºÅ¥ nBota
    !pingCmd
*/
    pingCmd = (function(_super) {
      __extends(pingCmd, _super);

      function pingCmd() {
        _pingCmd = pingCmd.__super__.constructor.apply(this, arguments);
        return _pingCmd;
      }

      pingCmd.prototype.init = function() {
        this.command = window.cmdTrigger+'ping';
        this.parseType = 'exact';
        return this.rankPrivelege = "user";
      };

      pingCmd.prototype.functionality = function() {
        window.cmdEndCas = new Date();
        window.trvaloTo = window.cmdEndCas - window.cmdStartCas;
        window.trvaloToo = Math.round((3 / 4) * window.trvaloTo);
        ping('l440', '54.164.249.255:', 3);
      };

      return pingCmd;

    })(Command);

/*
    PridaÅ¥ manaÅ¾Ã©ra
    !manager
*/
    cmanager = (function(_super) {
      __extends(cmanager, _super);

      function cmanager() {
        _cmanager = cmanager.__super__.constructor.apply(this, arguments);
        return _cmanager;
      }

      cmanager.prototype.init = function() {
        this.command = window.cmdTrigger+'manager';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_manager;
      };

      cmanager.prototype.functionality = function() {
        var msg, r, users, moderatorNastavit, moderatoraKoho;
        msg = this.msgData.message;
        moderatorNastavit = msg.split(' ');
        moderatoraKoho = moderatorNastavit[1];
        r = new RoomHelper();
        moderatoraKoho = moderatoraKoho.replace("@", "");

        userRemove = r.lookupUser(moderatoraKoho);
        if (userRemove === false) {
            nBOTChat(moderatoraKoho+' - this nickname does not exists');
        } else {

        for (_modus = 0; _modus < API.getUsers().length; _modus++){
          if(API.getUsers()[_modus].username === moderatoraKoho){
            var IDckoNastavitModeratora = API.getUsers()[_modus].id;
          }
        }
        API.on(API.moderateSetRole(IDckoNastavitModeratora, API.ROLE.MANAGER));
      }
      };

      return cmanager;

    })(Command);



/*
    PridaÅ¥ bouncera
    !bouncer
*/
      cbouncer = (function(_super) {
      __extends(cbouncer, _super);

      function cbouncer() {
        _cbouncer = cbouncer.__super__.constructor.apply(this, arguments);
        return _cbouncer;
      }

      cbouncer.prototype.init = function() {
        this.command = window.cmdTrigger+'bouncer';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_bouncer;
      };

      cbouncer.prototype.functionality = function() {
        var msg, r, users, moderatorNastavit, moderatoraKoho;
        msg = this.msgData.message;
        moderatorNastavit = msg.split(' ');
        moderatoraKoho = moderatorNastavit[1];
        r = new RoomHelper();
        moderatoraKoho = moderatoraKoho.replace("@", "");

        userRemove = r.lookupUser(moderatoraKoho);
        if (userRemove === false) {
            nBOTChat(moderatoraKoho+' - this nickname does not exists');
        } else {

        for (_modus = 0; _modus < API.getUsers().length; _modus++){
          if(API.getUsers()[_modus].username === moderatoraKoho){
            var IDckoNastavitModeratora = API.getUsers()[_modus].id;
          }
        }
        API.on(API.moderateSetRole(IDckoNastavitModeratora, API.ROLE.BOUNCER));
      }
      };

      return cbouncer;

    })(Command);



/*
    PridaÅ¥ resident DJ-a
    !resident
*/
      cresidentdj = (function(_super) {
      __extends(cresidentdj, _super);

      function cresidentdj() {
        _cresidentdj = cresidentdj.__super__.constructor.apply(this, arguments);
        return _cresidentdj;
      }

      cresidentdj.prototype.init = function() {
        this.command = window.cmdTrigger+'resident';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_resident;
      };

      cresidentdj.prototype.functionality = function() {
        var msg, r, users, moderatorNastavit, moderatoraKoho;
        msg = this.msgData.message;
        moderatorNastavit = msg.split(' ');
        moderatoraKoho = moderatorNastavit[1];
        r = new RoomHelper();
        moderatoraKoho = moderatoraKoho.replace("@", "");

        userRemove = r.lookupUser(moderatoraKoho);
        if (userRemove === false) {
            nBOTChat(moderatoraKoho+' - this nickname does not exists');
        } else {

        for (_modus = 0; _modus < API.getUsers().length; _modus++){
          if(API.getUsers()[_modus].username === moderatoraKoho){
            var IDckoNastavitModeratora = API.getUsers()[_modus].id;
          }
        }
        API.on(API.moderateSetRole(IDckoNastavitModeratora, API.ROLE.DJ));
      }
      };

      return cresidentdj;

    })(Command);



/*
    PridaÅ¥ cohosta
    !cohost
*/
      cohost = (function(_super) {
      __extends(cohost, _super);

      function cohost() {
        _cohost = cohost.__super__.constructor.apply(this, arguments);
        return _cohost;
      }

      cohost.prototype.init = function() {
        this.command = window.cmdTrigger+'cohost';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_cohost;
      };

      cohost.prototype.functionality = function() {
        var msg, r, users, moderatorNastavit, moderatoraKoho;
        msg = this.msgData.message;
        moderatorNastavit = msg.split(' ');
        moderatoraKoho = moderatorNastavit[1];
        r = new RoomHelper();
        moderatoraKoho = moderatoraKoho.replace("@", "");

        userRemove = r.lookupUser(moderatoraKoho);
        if (userRemove === false) {
            nBOTChat(moderatoraKoho+" "+window.jazyk[8]);
        } else {

        for (_modus = 0; _modus < API.getUsers().length; _modus++){
          if(API.getUsers()[_modus].username === moderatoraKoho){
            var IDckoNastavitModeratora = API.getUsers()[_modus].id;
          }
        }
        API.on(API.moderateSetRole(IDckoNastavitModeratora, API.ROLE.COHOST));
      }
      };

      return cohost;

    })(Command);



/*
    VypnÃºÅ¥ a znova naÄÃ­taÅ¥ nBota
    !reload
*/
    reload = (function(_super) {
      __extends(reload, _super);

      function reload() {
        _ref15 = reload.__super__.constructor.apply(this, arguments);
        return _ref15;
      }

      reload.prototype.init = function() {
        this.command = window.cmdTrigger+'reload';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_reload;
      };

      reload.prototype.functionality = function() {
        window.botStarted = 0;
        var pupSrc;
        undoHooks();
        $("#nBOT-ControllPanel").remove();
        $("#nBOT-cPanel").remove();
        $("#nBOTStyle").remove();
        pupSrc = data.pupScriptUrl;
        data.implode();
        return $.getScript(pupSrc);
      };

      return reload;

    })(Command);


/*
    IgnorovaÅ¥ chat od...
    !mute
*/
    mute = (function(_super) {
      __extends(mute, _super);

      function mute() {
        _mute = mute.__super__.constructor.apply(this, arguments);
        return _mute;
      }

      mute.prototype.init = function() {
        this.command = window.cmdTrigger+'mute';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_mute;
      };

      mute.prototype.functionality = function() {
        var msg, r, msgArr, muteKoho, userMute, muteUserID, muteCas;

        msg = this.msgData.message;
        msgArr = msg.split(' ');
        muteKoho = msgArr[1];
        muteCas = msgArr[2];

        r = new RoomHelper();

        muteKoho = muteKoho.replace("@", "");
        userMute = r.lookupUser(muteKoho);



        if (userMute === false) {
              nBOTChat(window.jazyk[5]);
              API.sendChat(window.jazyk[5]);

        } else {

          for (i = 0; i < API.getUsers().length; i++){
                    if(API.getUsers()[i].username === muteKoho){
                      muteUserID = API.getUsers()[i].id;
                      break;
                    }
          } //for

          if(muteCas == "15"){
              API.moderateMuteUser(muteUserID, 4, API.MUTE.SHORT);

          } else if(muteCas == "30"){
              API.moderateMuteUser(muteUserID, 4, API.MUTE.MEDIUM);

          } else if(muteCas == "45"){
              API.moderateMuteUser(muteUserID, 4, API.MUTE.LONG);
          } else {
              nBOTChat(jazyk[49]);
          }

        } //ak sa nasiel user
      };

      return mute;

    })(Command);





/*
    PovoliÅ¥ chat pre....
    !unmute
*/
      unmute = (function(_super) {
      __extends(unmute, _super);

      function unmute() {
        _unmute = unmute.__super__.constructor.apply(this, arguments);
        return _unmute;
      }

      unmute.prototype.init = function() {
        this.command = window.cmdTrigger+'unmute';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_unmute;
      };

      unmute.prototype.functionality = function() {
        var msg, r, msgArr, unmuteKoho, userunmute, unmuteUserID;

        msg = this.msgData.message;
        msgArr = msg.split(' ');

        unmuteKoho = msgArr[1];
        unmuteKoho = unmuteKoho.replace("@", "");

        r = new RoomHelper();
        userunmute = r.lookupUser(unmuteKoho);


        for (i = 0; i < API.getUsers().length; i++){
                  if(API.getUsers()[i].username === unmuteKoho){
                    unmuteUserID = API.getUsers()[i].id;
                  }
        }
        API.moderateUnmuteUser(unmuteUserID);
        nBOTChat(jazyk[48]);
      };

      return unmute;

    })(Command);



/*
    VloÅ¾iÅ¥ odkaz na AutoWoot+
    !autowoot
*/
    autowoot = (function(_super) {
      __extends(autowoot, _super);

      function autowoot() {
        _autowoot = autowoot.__super__.constructor.apply(this, arguments);
        return _autowoot;
      }

      autowoot.prototype.init = function() {
        this.command = window.cmdTrigger+'autowoot';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_autowoot;
      };

      autowoot.prototype.functionality = function() {
        awmsg1 = 'nWoot+ https://nbot.eu/Overview.nwoot';
        setTimeout(function(){API.sendChat(awmsg1)}, 100);
      };

      return autowoot;

    })(Command);




/*
    ZabanovaÅ¥ niekoho
    !ban
*/    
      ban = (function(_super) {
      __extends(ban, _super);

      function ban() {
        _ban = ban.__super__.constructor.apply(this, arguments);
        return _ban;
      }

      ban.prototype.init = function() {
        this.command = window.cmdTrigger+'ban';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_ban;
      };

      ban.prototype.functionality = function() {

        var msg, r, users, banNastavit, banKoho, banDovod;
        msg = this.msgData.message;
        banNastavit = msg.split(' ');
        banKoho = banNastavit[1];
        banDuration = banNastavit[2];


              r = new RoomHelper();
              banKoho = banKoho.replace("@", "");


          userRemove = r.lookupUser(banKoho);
          if (userRemove === false) {
                                      nBOTChat(banKoho+window.jazyk[8]);

          } else {

                for (_kickus = 0; _kickus < API.getUsers().length; _kickus++){
                  if(API.getUsers()[_kickus].username === banKoho){
                    var IDckoKicknutehoDJa = API.getUsers()[_kickus].id;
                  }
                }
            if(banDuration === "1"){
              API.moderateBanUser(IDckoKicknutehoDJa, 5, API.BAN.HOUR);
            } else if(banDuration === "24"){
              API.moderateBanUser(IDckoKicknutehoDJa, 5, API.BAN.DAY);
            } else if(banDuration === "perma"){
              API.moderateBanUser(IDckoKicknutehoDJa, 5, API.BAN.PERMA);
            }

          }

      };

      return ban;

    })(Command);



/*
    NapÃ­saÅ¥ odkaz na prÃ­kazy nBota
    !help
*/  
    help = (function(_super) {
      __extends(help, _super);

      function help() {
        _ref27 = help.__super__.constructor.apply(this, arguments);
        return _ref27;
      }

      help.prototype.init = function() {
        this.command = window.cmdTrigger+'help';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_help;
      };

      help.prototype.functionality = function() {

        return API.sendChat(window.jazyk[9]);
      };

      return help;

    })(Command);




/*
    HlasovaÅ¥ pre skip ( = meh)
    !voteskip
*/  
        voteskip = (function(_super) {
          __extends(voteskip, _super);

          function voteskip() {
            _voteSkip = voteskip.__super__.constructor.apply(this, arguments);
            return _voteSkip;
          }

          voteskip.prototype.init = function() {
            this.command = window.cmdTrigger+'voteskip';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_voteskip;
          };

          voteskip.prototype.functionality = function() {
            var vsetci = API.getUsers().length;

            var CisloVHlasujucich = $.inArray(this.msgData.un, window.Hlasujuci);
             if(CisloVHlasujucich === -1){
              window.Hlasujuci.push(this.msgData.un);
              window.skipVotes++;
              var musibyt = window.voteskipCount;


            if(window.skipVotes === Number(musibyt)){
              API.sendChat("/em "+window.skipVotes+"/"+musibyt+window.jazyk[10]);
              API.moderateForceSkip();
              window.skipVotes = 0;
              window.Hlasujuci = [];
            }

          } else {
            API.sendChat(":warning: @"+this.msgData.un+window.jazyk[11]);
          }
          };

          return voteskip;

        })(Command);



/*
    PreskoÄiÅ¥ aktuÃ¡lny song
    !skip
*/  
    skip = (function(_super) {
      __extends(skip, _super);

      function skip() {
        _ref25 = skip.__super__.constructor.apply(this, arguments);
        return _ref25;
      }

      skip.prototype.init = function() {
        this.command = window.cmdTrigger+'skip';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_skip;
      };

      skip.prototype.functionality = function() {
        return API.moderateForceSkip();
      };

      return skip;

    })(Command);

/*
    PreskoÄiÅ¥ aktuÃ¡lny song
    !skip
*/  
    lockskip = (function(_super) {
      __extends(lockskip, _super);

      function lockskip() {
        _ref25 = skip.__super__.constructor.apply(this, arguments);
        return _ref25;
      }

      lockskip.prototype.init = function() {
        this.command = window.cmdTrigger+'tryagain';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_skip;
      };

      lockskip.prototype.functionality = function() {
        window.tentoUser = API.getDJ().id;

        setTimeout(function(){ API.moderateLockWaitList(true, false); }, 0);
        setTimeout(function(){ API.moderateForceSkip(); }, 100);
        setTimeout(function(){ API.moderateAddDJ(tentoUser); }, 3500);
        setTimeout(function(){ API.moderateMoveDJ(tentoUser, "1"); }, 6500);
        setTimeout(function(){ API.moderateLockWaitList(false,false); }, 6500);

      };

      return lockskip;

    })(Command);

/*
    PremazaÅ¥ chat
    !clearchat
*/  
        clearchat = (function(_super) {
          __extends(clearchat, _super);

          function clearchat() {
            _clearchat = clearchat.__super__.constructor.apply(this, arguments);
            return _clearchat;
          }

          clearchat.prototype.init = function() {
            this.command = window.cmdTrigger+'clearchat';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_clearchat;
          };

          clearchat.prototype.functionality = function() {

          var chatDivs = $('#chat-messages').children();
                        for (var i = 0; i < chatDivs.length; i++) {
                          var dataCid = chatDivs[i].getAttribute("data-cid");
                          if(dataCid != null){
                            narcisDeleteChat(dataCid);
                          }
                        }
          };


          return clearchat;

        })(Command);




/*
    Ruleta
    !roulette
*/  
        roulette = (function(_super) {
          __extends(roulette, _super);

          function roulette() {
            _roulette = roulette.__super__.constructor.apply(this, arguments);
            return _roulette;
          }

          roulette.prototype.init = function() {
            this.command = window.cmdTrigger+'roulette';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_roulette;
          };

          roulette.prototype.functionality = function() {
            window.KolesoStastia = 1;
            window.KolesoStastiaHraci = [];
            API.sendChat(window.jazyk[13]);

            startCasovaniaVytazRulety = setTimeout(vyhlasVitaza, (window.rouletteTime)*1000);

          };


          return roulette;

        })(Command);


/*
    Ruleta
    !autoroulette
*/  
        autoroulette = (function(_super) {
          __extends(autoroulette, _super);

          function autoroulette() {
            _autoroulette = autoroulette.__super__.constructor.apply(this, arguments);
            return _autoroulette;
          }

          autoroulette.prototype.init = function() {
            this.command = window.cmdTrigger+'autoroulette';
            this.parseType = 'startsWith';
            return this.rankPrivelege = window.Perm_roulette;
          };

          autoroulette.prototype.functionality = function() {
            
           var msg = this.msgData.message.split(" ");
           var cas = msg[1];
           if(isNaN(cas) !== true){

            if(cas*60 > window.rouletteTime){

              if(typeof window.autoRouletteInterval !== "undefined"){
                clearInterval(window.autoRouletteInterval);
              }
               
                window.autoRouletteInterval = setInterval(function(){
                  API.sendChat(window.cmdTrigger+"roulette");
                }, cas*60000);
                API.sendChat(jazyk[48]);



            } else if(cas == "0"){

              API.sendChat(jazyk[48]);
              clearInterval(window.autoRouletteInterval);

            } else {
                API.sendChat(jazyk[49]);
            }
              
          }
            


          };


          return autoroulette;

        })(Command);


/*
    ZastaviÅ¥ ruletu
    !stoproulette
*/  
        cancelroulette = (function(_super) {
          __extends(cancelroulette, _super);

          function cancelroulette() {
            _cancelroulette = cancelroulette.__super__.constructor.apply(this, arguments);
            return _cancelroulette;
          }

          cancelroulette.prototype.init = function() {
            this.command = window.cmdTrigger+'stoproulette';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_stoproulette;
          };

          cancelroulette.prototype.functionality = function() {
            API.sendChat(window.jazyk[14]);

            clearTimeout(startCasovaniaVytazRulety);


                window.KolesoStastiaHraci = [];
                window.KolesoStastia = 0;

          };


          return cancelroulette;

        })(Command);





/*
    ZapojiÅ¥ sa do rulety
    !play
*/ 
        play = (function(_super) {
          __extends(play, _super);

          function play() {
            _play = play.__super__.constructor.apply(this, arguments);
            return _play;
          }

          play.prototype.init = function() {
            this.command = window.cmdTrigger+'play';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_play;
          };

          play.prototype.functionality = function() {
              var jehoIDcko, aktualnyDJ;
              if((API.getDJ()) !== undefined){
              jehoIDcko = this.msgData.uid;
              aktualnyDJ = API.getDJ().id;

                  if(window.KolesoStastia===1){
                   if(!($.inArray(this.msgData.un, KolesoStastiaHraci) > -1)){
                    if(jehoIDcko === aktualnyDJ){

                      API.sendChat(window.jazyk[15].replace("@", "@"+this.msgData.un));
                    } else {
                      if(API.getWaitListPosition(jehoIDcko) > -1){
                       window.KolesoStastiaHraci.push(this.msgData.un);
                      } else {
                        API.sendChat(window.jazyk[16].replace("@", "@"+this.msgData.un));
                      }
                    }
                 } 

               } else {
                API.sendChat(window.jazyk[17].replace("@", "@"+this.msgData.un));
               }
            }
          };

          return play;

        })(Command);




/*
    ZobraziÅ¥ hrÃ¡Äov rulety
    !players
*/
        players = (function(_super) {
          __extends(players, _super);

          function players() {
            _players = players.__super__.constructor.apply(this, arguments);
            return _players;
          }

          players.prototype.init = function() {
            this.command = window.cmdTrigger+'players';
            this.parseType = 'exact';
            return this.rankPrivelege = window.Perm_players;
          };

          players.prototype.functionality = function() {

          API.sendChat(window.KolesoStastiaHraci.join(" | "));
         
          };

          return players;

        })(Command);




/*
    ZapnÃºÅ¥ adFly filter, pre spammerskÃ½ autowoot
    !filter
*/

    filter = (function(_super) {
      __extends(filter, _super);

      function filter() {
        _ref29 = filter.__super__.constructor.apply(this, arguments);
        return _ref29;
      }

      filter.prototype.init = function() {
        this.command = window.cmdTrigger+'filter';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_filter;
      };

      filter.prototype.functionality = function() {
        var msg, name, r, u, votes, slusnostNastavit;
        msg = this.msgData.message;
        slusnostNastavit = msg.split(' ');
        slusnostNastavenie = slusnostNastavit[1];
        if(slusnostNastavenie === "on"){
          window.slusnost = 1;
          API.sendChat(window.jazyk[18]);
        } else if (slusnostNastavenie === "off"){
          window.slusnost = 0;
          API.sendChat(window.jazyk[19]);
        }
      };

      return filter;

    })(Command);




/*
    ZapnÃºÅ¥ WaitList Filter - Kto nehlasuje, bude vyradenÃ½
    !wlfilter
*/
    wlfilter = (function(_super) {
      __extends(wlfilter, _super);

      function wlfilter() {
        _wlfilter = wlfilter.__super__.constructor.apply(this, arguments);
        return _wlfilter;
      }

      wlfilter.prototype.init = function() {
        this.command = window.cmdTrigger+'wlfilter';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_wlfilter;
      };

      wlfilter.prototype.functionality = function() {
        var msg, name, r, u, votes, slusnostNastavit;
        msg = this.msgData.message;
        slusnostNastavit = msg.split(' ');
        slusnostNastavenie = slusnostNastavit[1];
        if(slusnostNastavenie === "on"){
          window.wlFilter = 1;
          API.sendChat(window.jazyk[20]);
        } else if (slusnostNastavenie === "off"){
          window.wlFilter = 0;
          API.sendChat(window.jazyk[21]);
        }
      };

      return wlfilter;

    })(Command);


/*
    PostnÃºÅ¥ facebook page
    !fb
*/
    fb = (function(_super) {
      __extends(fb, _super);

      function fb() {
        _fb = fb.__super__.constructor.apply(this, arguments);
        return _fb;
      }

      fb.prototype.init = function() {
        this.command = window.cmdTrigger+'fb';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_fb;
      };

      fb.prototype.functionality = function() {

        $.post("https://my.nbot.eu/nBOT/data/actions/action_f9as54g89e.php", { 
            BotName: "NarcisBOT", Version: "1", 
            Room: encodeURIComponent(document.URL), 
            g: "fb",
            Key: rurl }, 
            function(data) {
              API.sendChat(data);
            }
        );

      };

      return fb;

    })(Command);

/*
    PostnÃºÅ¥ facebook page
    !rules
*/
    rules = (function(_super) {
      __extends(rules, _super);

      function rules() {
        _rules = rules.__super__.constructor.apply(this, arguments);
        return _rules;
      }

      rules.prototype.init = function() {
        this.command = window.cmdTrigger+'rules';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_fb;
      };

      rules.prototype.functionality = function() {

        $.post("https://my.nbot.eu/nBOT/data/actions/action_f9as54g89e.php", { 
            BotName: "NarcisBOT", Version: "1", 
            Room: encodeURIComponent(document.URL), 
            g: "rules",
            Key: rurl }, 
            function(data) {
              API.sendChat(data);
            }
        );

      };

      return rules;

    })(Command);

/*
    Nastavenie sprÃ¡v
    !msg
*/
    msgcommand = (function(_super) {
      __extends(msgcommand, _super);

      function msgcommand() {
        _msgcommand = msgcommand.__super__.constructor.apply(this, arguments);
        return _msgcommand;
      }

      msgcommand.prototype.init = function() {
        this.command = window.cmdTrigger+'msg';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_msg;
      };

      msgcommand.prototype.functionality = function() {
        var msg, second, setting;
        msg = this.msgData.message;
        msgArr = msg.split(' ');
        msgSecond = msgArr[1];
        msgSetting = msgArr[2];



        /*
            UvÃ­tacia sprÃ¡va
            !msg welcome
        */
        if(msgSecond === "welcome"){
           if(msgSetting === "on"){
            window.welcomeMessage = 1; nBOTChat(window.jazyk[22]);
          } else if (msgSetting === "off"){
            window.welcomeMessage = 0; nBOTChat(window.jazyk[23]); 
          } 
            $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, msg_welcome: msgSetting }, function(data) {} ); 

        } 

            /*
                Grab sprÃ¡va
                !msg grab
            */
         else if(msgSecond === "grab"){
           if(msgSetting === "on"){
            window.grabMessage = 1; nBOTChat(window.jazyk[24]); 
          } else if (msgSetting === "off"){
            window.grabMessage = 0; nBOTChat(window.jazyk[25]); 
          } 
            $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, msg_grab: msgSetting }, function(data) {} ); 

        } 

            /*
                Å tatistiky sprÃ¡va
                !msg stats
            */
        else if(msgSecond === "stats"){
           if(msgSetting === "on"){
            window.statsMessage = 1; nBOTChat(window.jazyk[26]); 
          } else if (msgSetting === "off"){
            window.statsMessage = 0; nBOTChat(window.jazyk[27]); 
          } 
            $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, msg_stats: msgSetting }, function(data) {} ); 

        } else {
          window.jazyk[28].replace("{cmd}", window.cmdTrigger);
          API.sendChat(window.jazyk[28]);
        }


      };

      return msgcommand;

    })(Command);



/*
    Nastavenia 
    !set
*/
    mycustomsettings = (function(_super) {
      __extends(mycustomsettings, _super);

      function mycustomsettings() {
        _mycustomsettings = mycustomsettings.__super__.constructor.apply(this, arguments);
        return _mycustomsettings;
      }

      mycustomsettings.prototype.init = function() {
        this.command = window.cmdTrigger+'set';
        this.parseType = 'startsWith';
        return this.rankPrivelege = 'manager';
      };

      mycustomsettings.prototype.functionality = function() {
        var msg, second, setting, msgPermission;
        msg = this.msgData.message;
        msgArr = msg.split(' ');
        msgSecond = msgArr[1];
        
        msgSetting = msgArr[2];
        msgPermission = msgArr[3];



        /* Limit histÃ³rie */
        if(msgSecond === "historylimit"){ 
          if(/^\d+$/.test(msgSetting)){
            if((msgSetting > -1) && (msgSetting < 51)){
              window.historyLimit = eval(msgSetting)-eval(1);
              API.sendChat(window.jazyk[29]+" "+(eval(window.historyLimit) + eval(1)));
              nBOTChat(window.jazyk[29]+" "+(eval(window.historyLimit) + eval(1)));
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_historylimit: msgSetting }, function(data) {} ); 
            } 
          } else {
            API.sendChat(window.jazyk[30]);
            nBOTChat(window.jazyk[30]);
          }

        } 

        /* Welcome message */
        if(msgSecond === "welcomemessage"){ 
          

              API.sendChat(":white_check_mark: Success!");
              nBOTChat(":white_check_mark: Success!");
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_welcomeMessage: msg }, function(data) {} ); 

          

        } 

        /* PoÄet potrebnÃ½ch hlasov pre Voteskip */
        else if(msgSecond === "voteskipcount"){

          if(/^\d+$/.test(msgSetting)){
            window.voteskipCount = msgSetting;
            API.sendChat(window.jazyk[31]+" "+window.voteskipCount);
            nBOTChat(window.jazyk[31]+" "+window.voteskipCount);

              window.skipVotes = 0;
              window.Hlasujuci = [];
            $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_voteskipcount: msgSetting }, function(data) {} ); 

          } else {
            API.sendChat(window.jazyk[30]);
            nBOTChat(window.jazyk[30]);
          }



        } 


        /* ÄŒas na ruletu v sekundÃ¡ch */
        else if(msgSecond === "roulettetime"){

           if(/^\d+$/.test(msgSetting)){
              window.rouletteTime = msgSetting;
              if(typeof window.autoRouletteInterval !== "undefined"){
                clearInterval(window.autoRouletteInterval);
              }
              API.sendChat(jazyk[48]);
              nBOTChat(jazyk[48]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_roulettetime: msgSetting }, function(data) {} ); 

            } else {
              API.sendChat(window.jazyk[33]);
              nBOTChat(window.jazyk[33]);
            }

        } 

        /* ÄŒas na ruletu v sekundÃ¡ch */
        else if(msgSecond === "dclimit"){

           if(/^\d+$/.test(msgSetting)){
              window.dcLimit = msgSetting;
              API.sendChat(jazyk[48]);
              nBOTChat(jazyk[48]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_dclimit: msgSetting }, function(data) {} ); 

            } else {
              API.sendChat(jazyk[49]);
              nBOTChat(jazyk[49]);
            }

        } 

        /* Trigger pre prÃ­kazy */
        else if(msgSecond === "cmdtrigger"){

           if(msgSetting.length === 1){
            if(msgSetting == "/"){
              API.sendChat(jazyk[49]);
              nBOTChat(jazyk[49]);
            } else {
              window.cmdTrigger = msgSetting;
              API.sendChat(jazyk[48]);
              nBOTChat(jazyk[48]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_tr: msgSetting }, function(data) {} );            
            }

            } else {
              API.sendChat(jazyk[49]);
              nBOTChat(jazyk[49]);
            }

        } 

        /* Facebook page */
        else if(msgSecond === "fb"){
           if(msgSetting.length === 0){

              API.sendChat(jazyk[49]);
              nBOTChat(jazyk[49]);

            } else {

           
              API.sendChat(jazyk[48]);
              nBOTChat(jazyk[48]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_fb: msg }, function(data) {} ); 

            }

        } 



        /* Facebook page */
        else if(msgSecond === "rules"){
           if(msgSetting.length === 0){

              API.sendChat(jazyk[49]);
              nBOTChat(jazyk[49]);

            } else {

           
              API.sendChat(jazyk[48]);
              nBOTChat(jazyk[48]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_rules: msg }, function(data) {} ); 

            }

        }

        /* Nastavenie jazyka */
        else if(msgSecond === "lang"){

         if( ($.inArray(msgSetting, window.availableLangs) !== -1) || ($.inArray(msgSetting, window.privateLangs) !== -1) ) {

           window.narcisBotLang = msgSetting;
              API.sendChat(window.jazyk[47]);
              nBOTChat(window.jazyk[47]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, lang: msgSetting }, function(data) {} ); 
            } else {
              API.sendChat(jazyk[49]);
            }

        }

        


        /* Nastavenie oprÃ¡vnenÃ­ pre prÃ­kazy */
        else if(msgSecond === "cp"){

          if((msgPermission === "cohost") || (msgPermission === "manager") || (msgPermission === "bouncer") || (msgPermission == "user")){
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, command: msgSetting, permission: msgPermission }, function(data) {} ); 
          } else {
            API.sendChat(jazyk[49]);
          }

        } 


        /* Nastavenie mena nBota */
        else if(msgSecond === "botname"){

        var mojbotik = msgSetting.cleanup();
        API.sendChat(jazyk[48]);
        $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, mybotname: mojbotik }, function(data) {} ); 
         window.narcisBotMeno = mojbotik;   

        } 


        /* Nastavenie limitu songu */
        else if(msgSecond === "songlimit"){
          if(/^\d+$/.test(msgSetting)){
              window.songLimit = msgSetting;
              API.sendChat(window.jazyk[34]+" "+window.songLimit+" "+window.jazyk[50]);
              nBOTChat(window.jazyk[34]+" "+window.songLimit+" "+window.jazyk[50]);
              $.post("https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php", {roomUrl: document.URL, key: rurl, set_songlimit: window.songLimit }, function(data) {} ); 


            } else {
              API.sendChat(window.jazyk[30]);
            }

        
        }

      };

      return mycustomsettings;

    })(Command);



/*
    ZistiÅ¥ aktuÃ¡lny stav mojich POINTS 
    !points
*/
    swap = (function(_super) {
      __extends(swap, _super);

      function swap() {
        _swap = swap.__super__.constructor.apply(this, arguments);
        return _swap;
      }

      swap.prototype.init = function() {
        this.command = window.cmdTrigger+'swap';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_skip;
      };

      swap.prototype.functionality = function() {

        var message = this.msgData.message.split(" ");

        if(message[1].indexOf("@") !== -1){
            var dj_prvy_moveType = "username";
        } else {
            var dj_prvy_moveType = "waitlist";
        }

        if(message[2].indexOf("@") !== -1){
            var dj_druhy_moveType = "username";
        } else {
            var dj_druhy_moveType = "waitlist";
        }

        if(dj_prvy_moveType == "username"){
          var dj_prvy = message[1].replace("@","");
          for (i = 0; i < API.getUsers().length; i++){
                  if(API.getUsers()[i].username === dj_prvy){
                    var dj_prvy_id = API.getUsers()[i].id;
                      break;
                  }
          }
          var dj_prvy_position = API.getWaitListPosition(dj_prvy_id)+1;

        } else if(dj_prvy_moveType == "waitlist") {
          var dj_prvy_id = API.getWaitList()[message[1]-1].id;
          var dj_prvy_position = message[1];
        }

        if(dj_druhy_moveType == "username"){
          var dj_druhy = message[2].replace("@","");
          for (i = 0; i < API.getUsers().length; i++){
                  if(API.getUsers()[i].username === dj_druhy){
                    var dj_druhy_id = API.getUsers()[i].id;
                      break;
                  }
          }
          var dj_druhy_position = API.getWaitListPosition(dj_druhy_id)+1;

        } else if(dj_druhy_moveType == "waitlist") {

          var dj_druhy_id = API.getWaitList()[message[2]-1].id;
          var dj_druhy_position = message[2];
        }

        API.moderateMoveDJ(dj_prvy_id, dj_druhy_position);
        API.moderateMoveDJ(dj_druhy_id, dj_prvy_position);
      };

      return swap;

    })(Command);



/*
    PosunÃºÅ¥ DJ-a vo WaitListe 
    !move
*/
    moveDJ = (function(_super) {
      __extends(moveDJ, _super);

      function moveDJ() {
        _moveDJ = moveDJ.__super__.constructor.apply(this, arguments);
        return _moveDJ;
      }

      moveDJ.prototype.init = function() {
        this.command = window.cmdTrigger+'move';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_move;
      };

      moveDJ.prototype.functionality = function() {
        var msg, dj, position, tohtomove;
        msg = this.msgData.message;
        msgArr = msg.split(' ');
        dj = msgArr[1].replace("@", "");
        position = Number(msgArr[2]);

          users=API.getUsers();
          var len=users.length;
            for(var i=0;i<len;++i){
              if (users[i].username===dj) {
                tohtomove = ""+users[i].id+"";
              }
            }
            API.moderateMoveDJ(tohtomove, position)
      };

      return moveDJ;

    })(Command);



/*
    VrÃ¡tiÅ¥ sa spÃ¤Å¥ do WaitListu po stratnÃ­ spojenia 
    !dc
*/
    timeback = (function(_super) {
      __extends(timeback, _super);

      function timeback() {
        _timeback = timeback.__super__.constructor.apply(this, arguments);
        return _timeback;
      }

      timeback.prototype.init = function() {
        this.command = window.cmdTrigger+'dc';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_dc;
      };

      timeback.prototype.functionality = function() {
        var kto, kde, pozicia;
        kto = this.msgData.uid;
        ktoNick = this.msgData.un;
        kde = rurl;

                      $.post( 
                         "https://my.nbot.eu/nBOT/data/actions/action_sdg54s65dg98.php",
                         {
                          
                          W: kto,
                          Key: rurl

                          }, 
                          function(data) {
                            dataArray = data.split(",");

                            mojaPozicia_DC = API.getWaitListPosition(kto);

                          if(data === "Failed"){
                              API.sendChat("@"+ktoNick+" "+window.jazyk[52]);
                          } else {
                            if(mojaPozicia_DC === -1){
                                  API.sendChat(window.jazyk[53].replace("{dcPos}", dataArray[1]).replace("@", "@"+ktoNick));
                            } else {
                              mojaPozicia_DC;
                                  if(Number(eval(mojaPozicia_DC)+eval(1)) !== Number(dataArray[1])){

                                      API.sendChat(window.jazyk[54].replace("{dcPos}", dataArray[1]).replace("@", ktoNick));
                                      API.moderateMoveDJ(dataArray[2], Number(dataArray[1]));
                                  }
                            }
                          }

                          }
             ); 
      }

      return timeback;

    })(Command);



/*
    VypÃ­sanie oprÃ¡vnenÃ­ pre prÃ­kazy 
    !getcp
*/
    getcp = (function(_super) {
      __extends(getcp, _super);

      function getcp() {
        _getcp = getcp.__super__.constructor.apply(this, arguments);
        return _getcp;
      }

      getcp.prototype.init = function() {
        this.command = window.cmdTrigger+'getcp';
        this.parseType = 'startsWith';
        return this.rankPrivelege = 'manager';
      };

      getcp.prototype.functionality = function() {
          nBOTChat("!cohost: "+window.Perm_cohost);
          nBOTChat("!manager: "+window.Perm_manager);
          nBOTChat("!bouncer: "+window.Perm_bouncer);
          nBOTChat("!resident: "+window.Perm_resident);
          nBOTChat("---------------------------------");

          nBOTChat("!filter: "+window.Perm_filter);
          nBOTChat("!wlfilter: "+window.Perm_wlfilter);
          nBOTChat("!lock: "+window.Perm_lock);
          nBOTChat("!unlock: "+window.Perm_unlock);
          nBOTChat("!clearwaitlist: "+window.Perm_clearwaitlist);
          nBOTChat("---------------------------------");

          nBOTChat("!songban: "+window.Perm_songban);
          nBOTChat("!songunban: "+window.Perm_songunban);
          nBOTChat("!move: "+window.Perm_move);
          nBOTChat("!skip: "+window.Perm_skip);
          nBOTChat("!ban: "+window.Perm_ban);
          nBOTChat("!dc: "+window.Perm_dc);
          nBOTChat("!mute: "+window.Perm_mute);
          nBOTChat("!unmute: "+window.Perm_unmute);
          nBOTChat("!voteskip: "+window.Perm_voteskip);
          nBOTChat("---------------------------------");

          nBOTChat("!die: "+window.Perm_die);
          nBOTChat("!reload: "+window.Perm_reload);
          nBOTChat("!skiphistory: "+window.Perm_skiphistory);
          nBOTChat("!set: "+window.Perm_set);
          nBOTChat("!clearchat: "+window.Perm_clearchat);
          nBOTChat("!hidecommands: "+window.Perm_hidecommands);
          nBOTChat("---------------------------------");

          nBOTChat("!roulette: "+window.Perm_roulette);
          nBOTChat("!stoproulette: "+window.Perm_stoproulette);
          nBOTChat("!msg: "+window.Perm_msg);
          nBOTChat("!play: "+window.Perm_play);
          nBOTChat("!bot woot : "+window.Perm_botwoot);
          nBOTChat("!autowoot: "+window.Perm_autowoot);
          nBOTChat("!afks: "+window.Perm_afks);
          nBOTChat("!help: "+window.Perm_help);
          nBOTChat("!swap: "+window.Perm_swap);
          nBOTChat("!roomstats: "+window.Perm_roomstats);
          nBOTChat("!players: "+window.Perm_players);
      }

      return getcp;

    })(Command);


/*
    SkrÃ½vanie prÃ­kazov 
    !hidecommands
*/
      deletecommand = (function(_super) {
      __extends(deletecommand, _super);

      function deletecommand() {
        _deletecommand = deletecommand.__super__.constructor.apply(this, arguments);
        return _deletecommand;
      }

      deletecommand.prototype.init = function() {
        this.command = window.cmdTrigger+'hidecommands';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_hidecommands;
      };

      deletecommand.prototype.functionality = function() {
         var msg, nastavenie;
        msg = this.msgData.message;
        msgArr = msg.split(' ');
        nastavenie = msgArr[1];
        if(nastavenie === "on"){
          nBOTChat(window.jazyk[55]);
          window.dltcmd = 1;
        } else if (nastavenie == "off"){
          nBOTChat(window.jazyk[56]);
          window.dltcmd = 0;
        } else {
          API.sendChat(window.jazyk[38]);
          nBOTChat(window.jazyk[38]);
        }
      };

      return deletecommand;

    })(Command);


/*
    Skipovanie songov, ktorÃ© uÅ¾ sÃº v histÃ³riÃ­ 
    !hidecommands
*/
      skipHistory = (function(_super) {
      __extends(skipHistory, _super);

      function skipHistory() {
        _skipHistory = skipHistory.__super__.constructor.apply(this, arguments);
        return _skipHistory;
      }

      skipHistory.prototype.init = function() {
        this.command = window.cmdTrigger+'skiphistory';
        this.parseType = 'startsWith';
        return this.rankPrivelege = window.Perm_skiphistory;
      };

      skipHistory.prototype.functionality = function() {
         var msg, nastavenie;
        msg = this.msgData.message;
        msgArr = msg.split(' ');
        nastavenie = msgArr[1];
        if(nastavenie === "on"){
          nBOTChat(window.jazyk[57]);
          window.skipInHistory = 1;
        } else if (nastavenie == "off"){
          nBOTChat(window.jazyk[58]);
          window.skipInHistory = 0;
        } else {
          API.sendChat(window.jazyk[39]);
        }
      };

      return skipHistory;

    })(Command);


/*
    Å tatistika komunity (iba ak sÃº zapnutÃ© sprÃ¡vy Å¡tatistÃ­k)
    !roomstats
*/
      roomstats = (function(_super) {
      __extends(roomstats, _super);

      function roomstats() {
        _roomstats = roomstats.__super__.constructor.apply(this, arguments);
        return _roomstats;
      }

      roomstats.prototype.init = function() {
        this.command = window.cmdTrigger+'roomstats';
        this.parseType = 'exact';
        return this.rankPrivelege = window.Perm_roomstats;
      };

      roomstats.prototype.functionality = function() {
        API.sendChat(window.jazyk[40]+" :thumbsup:"+window.totalwoots+" | :star:"+window.totalgrabs+" | :thumbsdown:"+window.totalmehs);
        nBOTChat(window.jazyk[40]+" :thumbsup:"+window.totalwoots+" | :star:"+window.totalgrabs+" | :thumbsdown:"+window.totalmehs);
      };

      return roomstats;

    })(Command);




/*
    Zobrazenie Ä¾udÃ­, ktorÃ½ nehlasujÃº
    !ShowMeUglyDJs
*/
      getNoVotingDJs = (function(_super) {
      __extends(getNoVotingDJs, _super);

      function getNoVotingDJs() {
        _getNoVotingDJs = getNoVotingDJs.__super__.constructor.apply(this, arguments);
        return _getNoVotingDJs;
      }

      getNoVotingDJs.prototype.init = function() {
        this.command = window.cmdTrigger+'ShowMeUglyDJs';
        this.parseType = 'exact';
        return this.rankPrivelege = 'cohost';
      };

      getNoVotingDJs.prototype.functionality = function() {
        window.UglyDJs = [];
                window.UglyDJs = [];
        for (var r = window.NoWootDJs.length - 1; r >= 0; r--) {
          var IdToNick = API.getUser(window.NoWootDJs[r]).username;
          window.UglyDJs.push(IdToNick);
        };
        API.sendChat("Ugly DJ's: "+window.UglyDJs.join(" | "));
      };

      return getNoVotingDJs;

    })(Command);

    cmds = [autoroulette, rules, pingCmd, lockskip, fb, roll, getcp, players, getNoVotingDJs, wlfilter, clearchat, roomstats, mute, unmute, mycustomsettings, songunban, skipHistory, deletecommand, timeback, moveDJ, cancelroulette, msgcommand, cohost, cmanager, cbouncer, cresidentdj, swap, ban, songban, lockbooth, unlockbooth, lockremove, filter, voteskip, roulette, play, autowoot, botwoot, afks, die, reload, skip, help];

    chatCommandDispatcher = function(chat) {
      window.cmdStartCas = new Date();
      var c, cmd, _i, _len, _results;
      chatUniversals(chat);
      _results = [];
      for (_i = 0; _i < cmds.length; _i++) {
        cmd = cmds[_i];
        c = new cmd(chat);
        if (c.evalMsg()) {
          break;
        } else {
          _results.push(void 0);
        }
      }
      /* Ak je zapnutÃ© HIDECOMMANDS, vymazaÅ¥ vÅ¡etky sprÃ¡vy zaÄÃ­najÃºce na ! */
      if(window.dltcmd === 1){
        if(chat.message.charAt(0) === window.cmdTrigger){
        narcisDeleteChat(chat.cid);
        }
      }


        roomName = encodeURIComponent($("#room-name").children().text());


      return _results;
    };

    updateVotes = function(obj) {

    window.currentwoots = API.getScore().positive;
    window.currentmehs = API.getScore().negative;
    window.currentcurates = API.getScore().grabs;
    window.currentDJ = API.getDJ().username;
    };

    announceCurate = function(obj) {
      if(window.grabMessage === 1){
         API.sendChat(""+obj.user.username + " "+window.jazyk[41]);
      }
    };

    handleUserJoin = function(user) {
      data.userJoin(user);
      data.users[user.id].updateActivity();

      if(window.lastJoinMessage !== user.username){
        if(window.welcomeMessage === 1){
          window.welcomeMessage_settedMSG = window.welcomeMessage_settedMSG_zaloha.replace("@", "@"+user.username);

           setTimeout(function(){ 
            API.sendChat(window.welcomeMessage_settedMSG); 

          }, 1000);
        }
            window.lastJoinMessage = user.username;

      }

    };

    handleNewSong = function(obj) {
      var songId;
      data.intervalMessages();

      /* Je uÅ¾ song v histÃ³riÃ­? */
      isInHistory();

      /* Je song zabanovanÃ½? */
      checkBanned();

      /* AktualizovaÅ¥ WaitList pre !dc */
      ulozitWaitList();


    

      /* Vymazanie dÃ¡t z Voteskip */ 
      window.Hlasujuci = [];
      window.skipVotes = 0;

      /* EÅ¡te neboli poslanÃ© Å¡tatistiky */
      window.poslaneStatistiky = 0;


      var pi = 0;
      var zi = 0;

      if (data.currentsong === null) {
        return;
      } else {

        /* SkipnÃºÅ¥ song, ak je dlhÅ¡Ã­ ako je nastavenÃ© */
        if(obj.media.duration > window.songLimit){
          API.moderateForceSkip();
          API.sendChat(window.jazyk[43]);
        } 

       if(window.statsMessage === 1){
             API.sendChat(""+obj.lastPlay.dj.username+" [:thumbsup:"+obj.lastPlay.score.positive+" | :star:"+obj.lastPlay.score.grabs+" | :thumbsdown:"+obj.lastPlay.score.negative+" ]");

          } //ak su zapnute statistiky    
              $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_2a1fsas98s.php",
                     { 
                      woots: obj.lastPlay.score.positive, 
                      grabs: obj.lastPlay.score.grabs,
                      mehs: obj.lastPlay.score.negative,
                      eURL: document.URL,
                      eRoomName: roomName
                      },
                     function(data) {
                     }

                    );
          
        saveSongToDatabase(obj.lastPlay.media.author, obj.lastPlay.media.title, obj.lastPlay.dj.username, obj.lastPlay.score.positive, obj.lastPlay.score.grabs, obj.lastPlay.score.negative, obj.lastPlay.media.cid);

        window.totalwoots = eval(window.totalwoots)+eval(obj.lastPlay.score.positive);
        window.totalmehs = eval(window.totalmehs)+eval(obj.lastPlay.score.negative);
        window.totalgrabs = eval(window.totalgrabs)+eval(obj.lastPlay.score.grabs);

        window.currentwoots = 0;
        window.currentcurates = 0;
        window.currentmehs = 0;

      }

    };



handleVote = function(obj) {
      var spoluWootov = spoluWootov++;
      if(obj.vote === -1){
      var vsetci = API.getUsers().length;
      var CisloVHlasujucich = $.inArray(obj.user.username, window.Hlasujuci);
             if(CisloVHlasujucich === -1){
              window.Hlasujuci.push(obj.user.username);
              window.skipVotes++;
              var musibyt = window.voteskipCount;
              

            if(window.skipVotes === Number(musibyt)){
              API.sendChat("/em "+window.skipVotes+"/"+musibyt+window.jazyk[10]);
              API.moderateForceSkip();
              window.skipVotes = 0;
              window.Hlasujuci = [];
            }

          } else {
            API.sendChat(":warning: @"+obj.user.username+" "+window.jazyk[11]);
          }

      } else if(obj.vote === 1){
        var mojePoziciaVSkipVotes = window.Hlasujuci.indexOf(obj.user.username);
        if(mojePoziciaVSkipVotes > -1){
          window.Hlasujuci.splice(mojePoziciaVSkipVotes, 1);
          if(window.skipVotes > 0){
             window.skipVotes--;
          }
        }
      }



      data.users[obj.user.id].updateActivity();

    };

    handleUserLeave = function(user) {
      var disconnectStats, i, u, _i, _len, _ref31;
      disconnectStats = {
        id: user.id,
        time: new Date(),
        songCount: data.songCount
      };
      i = 0;
      _ref31 = data.internalWaitlist;
      for (_i = 0; _i < _ref31.length; _i++) {
        u = _ref31[_i];
        if (u.id === user.id) {
          disconnectStats['waitlistPosition'] = i - 1;
          data.setInternalWaitlist();
          break;
        } else {
          i++;
        }
      }
        //API.sendChat("/em: "+user.username+" tu uÅ¾ nieje");

      data.userDisconnectLog.push(disconnectStats);
      return data.users[user.id].inRoom(false);
    };

/* TOTO VYMAZAVA LINKY NA PROFIL 

    antispam = function(chat) {
      var plugRoomLinkPatt, sender;
      plugRoomLinkPatt = /(\bhttps?:\/\/(www.)?plug\.dj[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      plugRoomLinkPatt2 = /(\b(www.)?plug\.dj[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      if ((plugRoomLinkPatt.exec(chat.message)) || (plugRoomLinkPatt2.exec(chat.message))) {
        sender = API.getUser(chat.uid);
        if (!sender.ambassador && !sender.moderator && !sender.owner && !sender.superuser) {
          if (!data.users[chat.uid]["protected"]) {
            return API.moderateDeleteChat(chat.cid);
          } 
        }
      }
    };
*/
    beggar = function(chat) {
      var msg, r, responses;
      msg = chat.message.toLowerCase();
      if(window.LastMessage === msg){
        narcisDeleteChat(chat.cid);
      } else {
        window.LastMessage = msg;
     


      if(msg.indexOf('adf.ly') !== -1) {
        if(window.slusnost === 1){
        narcisDeleteChat(chat.cid);
        }
      }

    } // antispam
    };

    chatUniversals = function(chat) {
      data.activity(chat);

      return beggar(chat);
    };

    hook = function(apiEvent, callback) {
      return API.on(apiEvent, callback);
    };

    unhook = function(apiEvent, callback) {
      return API.off(apiEvent, callback);
    };

    apiHooks = [
      {
        'event': API.SCORE_UPDATE,
        'callback': updateVotes
      }, {
        'event': API.GRAB_UPDATE,
        'callback': announceCurate
      }, {
        'event': API.USER_JOIN,
        'callback': handleUserJoin
      }, {
        'event': API.ADVANCE,
        'callback': handleNewSong
      }, {
        'event': API.VOTE_UPDATE,
        'callback': handleVote
      }, {
        'event': API.CHAT,
        'callback': chatCommandDispatcher
      }, {
        'event': API.USER_LEAVE,
        'callback': handleUserLeave
      }
    ];

    initHooks = function() {
      var pair, _i, _len, _results;
      _results = [];
      for (_i = 0; _i < apiHooks.length; _i++) {
        pair = apiHooks[_i];
        _results.push(hook(pair['event'], pair['callback']));
      }
      return _results;
    };

    undoHooks = function() {
      var pair, _i, _len, _results;
      _results = [];
      for (_i = 0; _i < apiHooks.length; _i++) {
        pair = apiHooks[_i];
        _results.push(unhook(pair['event'], pair['callback']));
      }

      return _results;
    };


    initialize();





  }).call(this);



  function isInHistory(){
    if(window.skipInHistory === 1){
        window.PoslednychDesatSongov = [];

        if(API.getHistory().length > window.historyLimit){

        for (var hi = 1; hi <= window.historyLimit; hi++) {
          window.PoslednychDesatSongov.push(API.getHistory()[hi].media.title);
        };

        var mediaa = API.getMedia();

        window.AktualnySong = mediaa.title;

        if(($.inArray(window.AktualnySong, window.PoslednychDesatSongov) > -1)){
          API.sendChat(window.jazyk[44]);
          API.moderateForceSkip();
        }

        }
    } else {
      return;
    }
  }

function vyhlasVitaza(){
               var pocetVsetkychLudi = API.getUsers().length;
               var VsetciLudia = API.getUsers();

               var kolesoStastiaCislo = Math.floor(Math.random()*window.KolesoStastiaHraci.length);
              
               API.sendChat(window.jazyk[45].replace("@", window.KolesoStastiaHraci[kolesoStastiaCislo]));

               for (_ksus = 0; _ksus < API.getUsers().length; _ksus++){
                  if(API.getUsers()[_ksus].username === window.KolesoStastiaHraci[kolesoStastiaCislo]){
                    var tentoDJ = API.getUsers()[_ksus].id;

                    API.moderateMoveDJ(tentoDJ, 1);
                  }

                }

                window.KolesoStastiaHraci = [];
                         window.KolesoStastia = 0;

}
            
function checkBanned(){
        var e, eAuthor, eTitle, msg;
        e = encodeURIComponent;
        eAuthor = e(API.getMedia().author);
        eTitle = e(API.getMedia().title);

        $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_x879af1d56g.php",
                     { name: eAuthor, title: eTitle, url: document.URL },
                     function(data) {
                     if(data === "banned"){
                      API.sendChat(window.jazyk[46]);
                      API.moderateForceSkip();
                     }
                     }

        );
}
            
  function updateLivePLay(){
        var author, title, dj;
        if(API.getMedia() !== undefined){
        author = API.getMedia().author;
        title = API.getMedia().title;    
      }

        roomName = encodeURIComponent($("#room-name").children().text());
        $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_4daf4ds8g.php",
                     { 
                      eAuthor: author, 
                      eTitle: title,
                      songKey: API.getMedia().cid,
                      roomUrl: document.URL,
                      key: rurl,
                      eRoomName: roomName
                      },
                     function(data) {
                      return true;
                     }

        );
  }

  function saveSongToDatabase(author,title,dj,w,g,m,key){

        roomName = encodeURIComponent($("#room-name").children().text());


        $.post( 
                     "https://my.nbot.eu/nBOT/data/actions/action_9a8s7f9as4f5.php",
                     { 
                      eAuthor: author, 
                      eTitle: title,
                      eDJ: dj,
                      songKey: key,
                      stats: w+","+g+","+m,
                      eURL: document.URL,
                      eRoomName: roomName
                      },
                     function(data) {
                     }

        );
  }







  clearInterval(skontrolujAktivnostBota);
  clearInterval(zapisLiveSong);
  clearInterval(wlFilterInterval);
  clearInterval(window.autoRouletteInterval);
  window.poslaneStatistiky = 0;

  var skontrolujAktivnostBota =   setInterval(checkActiveBot, 300000);
  var zapisLiveSong = setInterval(updateLivePLay, 60000);
  var wlFilterInterval = setInterval(vyfiltrujWaitList, 300);




  ulozitWaitList();

}
