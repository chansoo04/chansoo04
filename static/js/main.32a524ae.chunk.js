(this["webpackJsonpimport-test1"]=this["webpackJsonpimport-test1"]||[]).push([[0],{13:function(e,o,n){e.exports=n(37)},18:function(e,o,n){},19:function(e,o,n){},37:function(e,o,n){"use strict";n.r(o);var t=n(0),a=n.n(t),l=n(12),r=n.n(l),c=(n(18),n(19),n(2)),u=n.n(c);var s=function(){var e=window.IMP;return console.log(e),e.init("imp81056428"),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"TEST IMPORT"),a.a.createElement("div",null,a.a.createElement("input",{type:"button",value:"alert",onClick:function(e){u.a.post("/payment/success").then((function(e){alert(e.data)}))}})),a.a.createElement("div",null,a.a.createElement("input",{type:"button",value:"\uacb0\uc81c\ud558\uae30",onClick:function(o){u.a.get("/product").then((function(o){e.request_pay({pg:"html5_inicis",pay_method:"card",merchant_uid:o.data.merchant_uid,name:o.data.product_name,amount:o.data.price,custom_data:"\uc784\uc758\ub370\uc774\ud130",currency:"KRW",language:"ko",buyer_email:"chansoo04@naver.com",buyer_name:"\uc774\ucc2c\uc218",buyer_tel:"010-3030-5139",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc11c\ucd08\uad6c \ubc18\ud3ec\ub3d9",buyer_postcode:"01181"},(function(e){if(e.success){alert("\uacb0\uc81c \uc0dd\uacf5!"),console.log("imp uid: "+e.imp_uid),console.log("merchant_uid: "+e.merchant_uid),console.log("pay_method: "+e.pay_method),console.log("paid_amount: "+e.paid_amount),console.log("status: "+e.status),console.log("name: "+e.name),console.log("pg_provider: "+e.pg_provider),console.log("pg_tid: "+e.pg_tid),console.log("buyer_name: "+e.buyer_name),console.log("buyer_email: "+e.buyer_email),console.log("buyer_tel: "+e.buyer_tel),console.log("buyer_addr: "+e.buyer_addr),console.log("buyer_postcode: "+e.buyer_postcode),console.log("custom_data: "+e.custom_data),console.log("paid_at: "+e.paid_at),console.log("receipt_url: "+e.receipt_url),console.log("apply_num: "+e.apply_num),console.log("vbank_num: "+e.vbank_num);var o=new FormData;o.append("imp_uid",e.imp_uid),o.append("merchant_uid",e.merchant_uid),o.append("pay_method",e.pay_method),o.append("paid_amount",e.paid_amount),o.append("status",e.status),o.append("name",e.name),o.append("pg_provider",e.pg_provider),u.a.post("/payment/success",o).then((function(e){alert(e.data)}))}else alert("\uacb0\uc81c \uc2e4\ud328!"+e.error_code+e.error_msg),console.log("\uc2e4\ud328\ucf54\ub4dc: "+e.error_code),console.log("\uc2e4\ud328 \uba54\uc138\uc9c0: "+e.error_msg),console.log("imp uid: "+e.imp_uid),console.log("merchant_uid: "+e.merchant_uid),console.log("pay_method: "+e.pay_method),console.log("paid_amount: "+e.paid_amount),console.log("status: "+e.status),console.log("name: "+e.name),console.log("pg_provider: "+e.pg_provider),console.log("pg_tid: "+e.pg_tid),console.log("buyer_name: "+e.buyer_name),console.log("buyer_email: "+e.buyer_email),console.log("buyer_tel: "+e.buyer_tel),console.log("buyer_addr: "+e.buyer_addr),console.log("buyer_postcode: "+e.buyer_postcode),console.log("custom_data: "+e.custom_data),console.log("paid_at: "+e.paid_at),console.log("receipt_url: "+e.receipt_url),console.log("apply_num: "+e.apply_num),console.log("vbank_num: "+e.vbank_num),u.a.post("/payment/failure").then((function(e){alert(e.data)}))}))}))}})),a.a.createElement("div",null,a.a.createElement("input",{type:"button",value:"\ud1a0\ud070 \ubc1b\uae30",onClick:function(e){u.a.post("/payment/success").then((function(e){alert(e.data)}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.32a524ae.chunk.js.map