(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(A,t,a){A.exports={profile:"Profile_profile__2rBC1",description:"Profile_description__1pMyj",avatar:"Profile_avatar__34hJp",name:"Profile_name__1Y7vt",tag:"Profile_tag__3_T7_",location:"Profile_location__Esgw3",label:"Profile_label__3CVDG",stats:"Profile_stats__10A8J",quantity:"Profile_quantity__2PTdW"}},,function(A,t,a){A.exports={statistics:"Statistics_statistics__1IRbU",stat__list:"Statistics_stat__list__ZawNJ",item:"Statistics_item__X2-iM",percentage:"Statistics_percentage__3OCPO"}},function(A,t,a){A.exports={item:"FriendListItem_item__2t9SU",avatar:"FriendListItem_avatar__25U_X",name:"FriendListItem_name__2hPtw",status:"FriendListItem_status__2qJsl",online:"FriendListItem_online__4xndN FriendListItem_status__2qJsl",offline:"FriendListItem_offline__2d-VZ FriendListItem_status__2qJsl"}},function(A){A.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(A){A.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(A,t,a){A.exports={friend__list:"FriendList_friend__list__1RaUH"}},function(A,t,a){A.exports={transaction__history:"TransactionHistory_transaction__history__2VIg_"}},function(A){A.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(A){A.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,function(A,t,a){},function(A,t,a){"use strict";a.r(t);var e=a(2),s=a.n(e),c=a(8),n=a.n(c),i=a(1),r=a.n(i),l=a(0),d=function(A){var t=A.name,a=A.tag,e=A.location,s=A.avatar,c=A.stats,n=c.followers,i=c.views,d=c.likes;return Object(l.jsxs)("div",{className:r.a.profile,children:[Object(l.jsxs)("div",{className:r.a.description,children:[Object(l.jsx)("img",{src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:r.a.avatar}),Object(l.jsx)("p",{className:r.a.name,children:t}),Object(l.jsxs)("p",{className:r.a.tag,children:["@",a]}),Object(l.jsx)("p",{className:r.a.location,children:e})]}),Object(l.jsxs)("ul",{className:r.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:r.a.label,children:"Followers"}),Object(l.jsx)("span",{className:r.a.quantity,children:n})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:r.a.label,children:"Views"}),Object(l.jsx)("span",{className:r.a.quantity,children:i})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:r.a.label,children:"Likes"}),Object(l.jsx)("span",{className:r.a.quantity,children:d})]})]})]})};d.defaultProps={avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"};var o=d,b=a(3),p=a.n(b);function f(){var A=function(){return Math.floor(256*Math.random())},t=A(),a=A(),e=A();return"rgb(".concat(t,",").concat(a,",").concat(e,")")}var u=function(A){var t=A.title,a=A.stats;return Object(l.jsxs)("section",{className:p.a.statistics,children:[t&&Object(l.jsx)("h2",{className:p.a.title,children:t}),Object(l.jsx)("ul",{className:p.a.stat__list,children:a.map((function(A){var t=A.id,a=A.label,e=A.percentage;return Object(l.jsxs)("li",{className:p.a.item,style:{backgroundColor:f()},children:[Object(l.jsx)("span",{className:p.a.label,children:a}),Object(l.jsxs)("span",{className:p.a.percentage,children:[e,"%"]})]},t)}))})]})},m="data:image/jpeg;base64,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",j=a(4),y=a.n(j),x=function(A){var t=A.avatar,a=A.name,e=A.isOnline;return Object(l.jsxs)("li",{className:y.a.item,children:[Object(l.jsx)("span",{className:e?y.a.online:y.a.offline,children:e}),Object(l.jsx)("img",{className:y.a.avatar,src:t,alt:a,width:"48"}),Object(l.jsx)("p",{className:y.a.name,children:a})]})};x.defaultProps={avatar:m,isOnline:!1};var v=x,g=a(9),h=a.n(g),O=function(A){var t=A.friends;return Object(l.jsx)("ul",{className:h.a.friend__list,children:t.map((function(A){var t=A.avatar,a=A.name,e=A.isOnline,s=A.id;return Object(l.jsx)(v,{avatar:t,name:a,isOnline:e},s)}))})};O.defaultProps={avatar:m};var _=O,w=a(10),S=a.n(w),B=function(A){var t=A.items;return Object(l.jsxs)("table",{className:S.a.transaction__history,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:t.map((function(A){var t=A.id,a=A.type,e=A.amount,s=A.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:e}),Object(l.jsx)("td",{children:s})]},t)}))})]})},U=a(5),L=a(7),E=a(11),K=a(12),W=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{name:U.name,tag:U.tag,location:U.location,avatar:U.avatar,stats:U.stats}),Object(l.jsx)(u,{title:"Upload stats",stats:L}),Object(l.jsx)(u,{stats:L}),Object(l.jsx)(_,{friends:E}),Object(l.jsx)(B,{items:K})]})};a(18),a(19);n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.989c0eb3.chunk.js.map