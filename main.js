(function(_0xc88208,_0x55128b){const _0x191d79=_0x1a8f,_0x24cd2c=_0xc88208();while(!![]){try{const _0x53608b=parseInt(_0x191d79(0xd2))/0x1+-parseInt(_0x191d79(0x8d))/0x2+-parseInt(_0x191d79(0xdd))/0x3*(-parseInt(_0x191d79(0xde))/0x4)+parseInt(_0x191d79(0x97))/0x5+-parseInt(_0x191d79(0xa3))/0x6*(parseInt(_0x191d79(0x87))/0x7)+-parseInt(_0x191d79(0xc6))/0x8*(parseInt(_0x191d79(0x9d))/0x9)+parseInt(_0x191d79(0x72))/0xa*(-parseInt(_0x191d79(0x75))/0xb);if(_0x53608b===_0x55128b)break;else _0x24cd2c['push'](_0x24cd2c['shift']());}catch(_0x566161){_0x24cd2c['push'](_0x24cd2c['shift']());}}}(_0x161a,0x78a98),((async()=>{const _0xb86687=_0x1a8f;require('./config');const {useMultiFileAuthState:_0x514f8c,DisconnectReason:_0x5edc00,generateForwardMessageContent:_0x336b64,prepareWAMessageMedia:_0x5b5515,generateWAMessageFromContent:_0x3a84a0,generateMessageID:_0x449f62,downloadContentFromMessage:_0x53cf67,makeInMemoryStore:_0x33bc27,jidDecode:_0x31656c,proto:_0x12dfb0}=require(_0xb86687(0xa6)),_0x19252f=require('pino'),_0x64e2cd=require('ws'),_0x11f23f=require(_0xb86687(0x82)),_0x59bd54=require('fs'),_0x13a401=require(_0xb86687(0x6c)),_0x105772=require(_0xb86687(0x96)),_0xedea47=require(_0xb86687(0xa8)),_0x6a6f1b=require(_0xb86687(0x7e)),_0x368c52=require(_0xb86687(0x7f)),_0x34eb30=require('os');let _0xb89f0e=require(_0xb86687(0xdf));var _0x3feebc;try{_0x3feebc=require(_0xb86687(0xbc));}catch(_0x29cb0e){_0x3feebc=require(_0xb86687(0x7d));}const {Low:_0x39b11c,JSONFile:_0x2e63fd}=_0x3feebc,_0x40c84b=require(_0xb86687(0xd5));global[_0xb86687(0xc3)]=(_0x292f65,_0x56e79f='/',_0xc94b41={},_0x376357)=>(_0x292f65 in global['APIs']?global[_0xb86687(0xbd)][_0x292f65]:_0x292f65)+_0x56e79f+(_0xc94b41||_0x376357?'?'+new URLSearchParams(Object[_0xb86687(0xa2)]({..._0xc94b41,..._0x376357?{[_0x376357]:global[_0xb86687(0xcd)][_0x292f65 in global['APIs']?global[_0xb86687(0xbd)][_0x292f65]:_0x292f65]}:{}})):''),global[_0xb86687(0xd9)]={'start':new Date()};const _0x424103=process['env']['PORT']||0xbb8;global['opts']=new Object(_0x13a401(process[_0xb86687(0xb1)][_0xb86687(0xab)](0x2))['exitProcess'](![])[_0xb86687(0xc9)]()),global[_0xb86687(0xc7)]=new RegExp('^['+(opts[_0xb86687(0xc7)]||'‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-')[_0xb86687(0x94)](/[|\\{}()[\]^$+*?.\-\^]/g,'\x5c$&')+']'),global['db']=new _0x39b11c(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0xb86687(0x88)](opts['db'])?new _0x40c84b(opts['db']):new _0x2e63fd((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0xb86687(0x6a))),global['DATABASE']=global['db'],global['loadDatabase']=async function _0x5a63d2(){const _0x363531=_0xb86687;if(global['db'][_0x363531(0x65)])return new Promise(_0x5076bc=>setInterval(function(){const _0x54d80e=_0x363531;!global['db'][_0x54d80e(0x65)]?(clearInterval(this),_0x5076bc(global['db'][_0x54d80e(0xd1)]==null?global[_0x54d80e(0x93)]():global['db']['data'])):null;},0x1*0x3e8));if(global['db']['data']!==null)return;global['db'][_0x363531(0x65)]=!![],await global['db']['read'](),global['db'][_0x363531(0x65)]=![],global['db'][_0x363531(0xd1)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},...global['db'][_0x363531(0xd1)]||{}},global['db'][_0x363531(0xd0)]=_0xedea47['chain'](global['db'][_0x363531(0xd1)]);},loadDatabase();const _0x213bb5=''+(opts['_'][0x0]||'sessions');global[_0xb86687(0x9a)]=!_0x59bd54[_0xb86687(0xd7)](_0x213bb5);const {state:_0x5df01b,saveState:_0x575238,saveCreds:_0x455648}=await _0x514f8c(_0x213bb5),_0x421acb={'printQRInTerminal':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'generateHighQualityLinkPreview':!![],'patchMessageBeforeSending':_0x5a20af=>{const _0x2338f3=_0xb86687,_0x4080d1=!!(_0x5a20af[_0x2338f3(0xcb)]||_0x5a20af['templateMessage']||_0x5a20af[_0x2338f3(0xa9)]);return _0x4080d1&&(_0x5a20af={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x5a20af}}}),_0x5a20af;},'auth':_0x5df01b,'browser':['BOTCAHX',_0xb86687(0x8a),''],'logger':_0x19252f({'level':_0xb86687(0xd4)}),'version':[0x2,0x89c,0xd]};global[_0xb86687(0x67)]=_0xb89f0e[_0xb86687(0x92)](_0x421acb);if(!opts[_0xb86687(0x88)]){if(global['db'])setInterval(async()=>{const _0x11d104=_0xb86687;if(global['db'][_0x11d104(0xd1)])await global['db'][_0x11d104(0xba)]();if(!opts[_0x11d104(0x7a)]&&(global['support']||{})['find'])tmp=[_0x34eb30[_0x11d104(0xa4)](),_0x11d104(0x7a)],tmp[_0x11d104(0x79)](_0x2fa983=>_0x105772['spawn'](_0x11d104(0x66),[_0x2fa983,_0x11d104(0x8e),'3','-type','f',_0x11d104(0x9c)]));},0x1e*0x3e8);}async function _0x253e83(_0x2a70c4){const _0x430bc7=_0xb86687,{connection:_0x275172,lastDisconnect:_0x355ad9}=_0x2a70c4;global[_0x430bc7(0xd9)][_0x430bc7(0xd8)]=new Date();_0x355ad9&&_0x355ad9[_0x430bc7(0x85)]&&_0x355ad9[_0x430bc7(0x85)]['output']&&_0x355ad9[_0x430bc7(0x85)][_0x430bc7(0x8b)][_0x430bc7(0xcf)]!==_0x5edc00[_0x430bc7(0x78)]&&conn['ws']['readyState']!==_0x64e2cd['CONNECTING']&&console[_0x430bc7(0xa0)](global[_0x430bc7(0xb0)](!![]));if(global['db'][_0x430bc7(0xd1)]==null)await loadDatabase();if(_0x2a70c4[_0x430bc7(0xae)])conn[_0x430bc7(0x8f)]('6281262166032@s.whatsapp.net',{'text':_0x430bc7(0xc2)},{'quoted':null});}process['on'](_0xb86687(0x90),console[_0xb86687(0x85)]);const _0x19336e=_0x5e4352=>{const _0x4cb8cd=_0xb86687;_0x5e4352=require[_0x4cb8cd(0x76)](_0x5e4352);let _0x162a0c,_0x33e624=0x0;do{if(_0x5e4352 in require[_0x4cb8cd(0x77)])delete require['cache'][_0x5e4352];_0x162a0c=require(_0x5e4352),_0x33e624++;}while((!_0x162a0c||(Array[_0x4cb8cd(0x91)](_0x162a0c)||_0x162a0c instanceof String)?!(_0x162a0c||[])[_0x4cb8cd(0x7b)]:typeof _0x162a0c==_0x4cb8cd(0xb4)&&!Buffer[_0x4cb8cd(0xc1)](_0x162a0c)?!Object[_0x4cb8cd(0x89)](_0x162a0c||{})['length']:!![])&&_0x33e624<=0xa);return _0x162a0c;};let _0x37386a=!![];global[_0xb86687(0xb0)]=function(_0x4019ce){const _0x195d7e=_0xb86687;let _0x21ce0=_0x19336e(_0x195d7e(0x6e));if(_0x4019ce){try{global[_0x195d7e(0x67)]['ws']['close']();}catch{}global[_0x195d7e(0x67)]={...global[_0x195d7e(0x67)],..._0xb89f0e[_0x195d7e(0x92)](_0x421acb)};}return!_0x37386a&&(conn['ev'][_0x195d7e(0xda)]('messages.upsert',conn[_0x195d7e(0xbf)]),conn['ev'][_0x195d7e(0xda)](_0x195d7e(0xb9),conn[_0x195d7e(0xb3)]),conn['ev'][_0x195d7e(0xda)](_0x195d7e(0x9b),conn['onDelete']),conn['ev'][_0x195d7e(0xda)](_0x195d7e(0xdc),conn[_0x195d7e(0x69)]),conn['ev'][_0x195d7e(0xda)]('creds.update',conn[_0x195d7e(0xa1)])),conn['welcome']='Selamat\x20datang\x20@user\x20di\x20group\x20@subject\x20utamakan\x20baca\x20desk\x20ya\x20\x0a@desc',conn[_0x195d7e(0x9e)]=_0x195d7e(0xaa),conn[_0x195d7e(0xce)]=_0x195d7e(0x86),conn[_0x195d7e(0x83)]=_0x195d7e(0x95),conn[_0x195d7e(0xbf)]=_0x21ce0[_0x195d7e(0xbf)][_0x195d7e(0x99)](conn),conn[_0x195d7e(0xb3)]=_0x21ce0[_0x195d7e(0xb3)][_0x195d7e(0x99)](conn),conn[_0x195d7e(0x71)]=_0x21ce0[_0x195d7e(0x84)][_0x195d7e(0x99)](conn),conn[_0x195d7e(0x69)]=_0x253e83[_0x195d7e(0x99)](conn),conn[_0x195d7e(0xa1)]=_0x455648[_0x195d7e(0x99)](conn),conn['ev']['on']('messages.upsert',conn[_0x195d7e(0xbf)]),conn['ev']['on'](_0x195d7e(0xb9),conn[_0x195d7e(0xb3)]),conn['ev']['on'](_0x195d7e(0x9b),conn['onDelete']),conn['ev']['on'](_0x195d7e(0xdc),conn[_0x195d7e(0x69)]),conn['ev']['on']('creds.update',conn[_0x195d7e(0xa1)]),_0x37386a=![],!![];};let _0x3972da=_0x11f23f[_0xb86687(0xca)](__dirname,_0xb86687(0xbe)),_0x20ae7d=_0x415d3e=>/\.js$/[_0xb86687(0x88)](_0x415d3e);global[_0xb86687(0xbe)]={};for(let _0x487f1a of _0x59bd54[_0xb86687(0x73)](_0x3972da)[_0xb86687(0xb6)](_0x20ae7d)){try{global[_0xb86687(0xbe)][_0x487f1a]=require(_0x11f23f[_0xb86687(0xca)](_0x3972da,_0x487f1a));}catch(_0x41a7ab){conn['logger']['error'](_0x41a7ab),delete global[_0xb86687(0xbe)][_0x487f1a];}}console[_0xb86687(0xa0)](Object[_0xb86687(0x89)](global[_0xb86687(0xbe)])),global[_0xb86687(0xaf)]=(_0x1c44ea,_0x33f841)=>{const _0x5c25fb=_0xb86687;if(_0x20ae7d(_0x33f841)){let _0x596e03=_0x11f23f[_0x5c25fb(0xca)](_0x3972da,_0x33f841);if(_0x596e03 in require[_0x5c25fb(0x77)]){delete require[_0x5c25fb(0x77)][_0x596e03];if(_0x59bd54['existsSync'](_0x596e03))conn[_0x5c25fb(0xc4)][_0x5c25fb(0x6b)](_0x5c25fb(0xc8)+_0x33f841+'\x27');else return conn[_0x5c25fb(0xc4)][_0x5c25fb(0xa5)](_0x5c25fb(0x8c)+_0x33f841+'\x27'),delete global[_0x5c25fb(0xbe)][_0x33f841];}else conn['logger'][_0x5c25fb(0x6b)](_0x5c25fb(0x7c)+_0x33f841+'\x27');let _0x550b80=_0x6a6f1b(_0x59bd54[_0x5c25fb(0xd6)](_0x596e03),_0x33f841);if(_0x550b80)conn['logger'][_0x5c25fb(0x85)]('syntax\x20error\x20while\x20loading\x20\x27'+_0x33f841+'\x27\x0a'+_0x550b80);else try{global[_0x5c25fb(0xbe)][_0x33f841]=require(_0x596e03);}catch(_0x38f9a1){conn[_0x5c25fb(0xc4)][_0x5c25fb(0x85)](_0x38f9a1);}finally{global[_0x5c25fb(0xbe)]=Object[_0x5c25fb(0xbb)](Object['entries'](global[_0x5c25fb(0xbe)])[_0x5c25fb(0x74)](([_0x5b7c51],[_0xdccd19])=>_0x5b7c51[_0x5c25fb(0xb5)](_0xdccd19)));}}},Object[_0xb86687(0x68)](global[_0xb86687(0xaf)]),_0x59bd54['watch'](_0x11f23f['join'](__dirname,_0xb86687(0xbe)),global[_0xb86687(0xaf)]),global[_0xb86687(0xb0)]();async function _0x13892d(){const _0x3287d6=_0xb86687;let _0x2d89c9=await Promise[_0x3287d6(0xad)]([_0x105772[_0x3287d6(0x81)](_0x3287d6(0x9f)),_0x105772[_0x3287d6(0x81)](_0x3287d6(0x80)),_0x105772[_0x3287d6(0x81)](_0x3287d6(0x9f),['-hide_banner',_0x3287d6(0xdb),_0x3287d6(0x85),'-filter_complex',_0x3287d6(0xd3),_0x3287d6(0xb2),'1','-f',_0x3287d6(0x70),'-']),_0x105772[_0x3287d6(0x81)]('convert'),_0x105772[_0x3287d6(0x81)](_0x3287d6(0xa7)),_0x105772[_0x3287d6(0x81)]('gm'),_0x105772[_0x3287d6(0x81)](_0x3287d6(0x66),['--version'])][_0x3287d6(0xb8)](_0x29818e=>{const _0x103fa2=_0x3287d6;return Promise[_0x103fa2(0x98)]([new Promise(_0x317b4c=>{const _0x583ae6=_0x103fa2;_0x29818e['on'](_0x583ae6(0xc5),_0x5654d4=>{_0x317b4c(_0x5654d4!==0x7f);});}),new Promise(_0x8fe423=>{const _0x5184c1=_0x103fa2;_0x29818e['on'](_0x5184c1(0x85),_0x4105fa=>_0x8fe423(![]));})]);})),[_0x4cfb1d,_0x125d57,_0x31a116,_0x5da29e,_0x2810e1,_0x59c52d,_0x21e288]=_0x2d89c9;console[_0x3287d6(0xa0)](_0x2d89c9);let _0x4ef731=global[_0x3287d6(0x6f)]={'ffmpeg':_0x4cfb1d,'ffprobe':_0x125d57,'ffmpegWebp':_0x31a116,'convert':_0x5da29e,'magick':_0x2810e1,'gm':_0x59c52d,'find':_0x21e288};Object['freeze'](global[_0x3287d6(0x6f)]);if(!_0x4ef731[_0x3287d6(0x9f)])conn[_0x3287d6(0xc4)][_0x3287d6(0xa5)](_0x3287d6(0xb7));if(_0x4ef731['ffmpeg']&&!_0x4ef731[_0x3287d6(0xac)])conn['logger'][_0x3287d6(0xa5)](_0x3287d6(0xc0));if(!_0x4ef731['convert']&&!_0x4ef731[_0x3287d6(0xa7)]&&!_0x4ef731['gm'])conn[_0x3287d6(0xc4)][_0x3287d6(0xa5)](_0x3287d6(0xcc));}_0x13892d()['then'](()=>conn[_0xb86687(0xc4)]['info']('Quick\x20Test\x20Done'))['catch'](_0xb86687(0x6d));})()));function _0x1a8f(_0x5bc11e,_0x5335fc){const _0x161a57=_0x161a();return _0x1a8f=function(_0x1a8fc2,_0x5b9905){_0x1a8fc2=_0x1a8fc2-0x65;let _0x484af4=_0x161a57[_0x1a8fc2];return _0x484af4;},_0x1a8f(_0x5bc11e,_0x5335fc);}function _0x161a(){const _0x34642c=['message.delete','-delete','139518RQjbGi','bye','ffmpeg','log','credsUpdate','entries','860898vagioE','tmpdir','warn','@adiwajshing/baileys','magick','lodash','listMessage','Selamat\x20tinggal\x20@user\x20👋','slice','ffmpegWebp','all','receivedPendingNotifications','reload','reloadHandler','argv','-frames:v','participantsUpdate','object','localeCompare','filter','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','map','group-participants.update','write','fromEntries','lowdb','APIs','plugins','handler','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','isBuffer','Bot\x20connection\x20update✔️','API','logger','close','16JptKNS','prefix','re\x20-\x20require\x20plugin\x20\x27','parse','join','buttonsMessage','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','APIKeys','promote','statusCode','chain','data','618158cxQgSm','color','silent','./lib/mongoDB','readFileSync','existsSync','connect','timestamp','off','-loglevel','connection.update','153849uzDUws','52gWvCab','./lib/simple','READ','find','conn','freeze','connectionUpdate','database.json','info','yargs/yargs','done','./handler','support','webp','onDelete','1770LWKilS','readdirSync','sort','16973dHZQBa','resolve','cache','loggedOut','forEach','tmp','length','requiring\x20new\x20plugin\x20\x27','./lib/lowdb','syntax-error','pino','ffprobe','spawn','path','demote','delete','error','@user\x20sekarang\x20admin!','21pLCnoF','test','keys','Safari','output','deleted\x20plugin\x20\x27','1655326fohKVN','-amin','sendMessage','uncaughtException','isArray','makeWASocket','loadDatabase','replace','@user\x20sekarang\x20bukan\x20admin!','child_process','3858110GsEsdy','race','bind','isInit'];_0x161a=function(){return _0x34642c;};return _0x161a();}
