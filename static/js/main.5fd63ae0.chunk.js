(this["webpackJsonphot-burgers"]=this["webpackJsonphot-burgers"]||[]).push([[0],{42:function(e,a,t){e.exports=t(57)},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t.n(r),c=t(24),s=t(28),l=[{title:"Hot Burger \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f",url:"hot-burger-tverskaya",id:1},{title:"Hot Burger \u041c\u0430\u0440\u043e\u0441\u0435\u0439\u043a\u0430",url:"hot-burger-maroseyka",id:2},{title:"Hot Burger \u041f\u0435\u0442\u0440\u043e\u0432\u043a\u0430",url:"hot-burger-petrovka",id:3}],u=function(e){var a=Object(r.useState)(!1),t=Object(s.a)(a,2),c=t[0],u=t[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),m=o[0],p=o[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),g=h[0],b=h[1];return n.a.createElement("div",{className:"restaurant_select"},n.a.createElement("div",{className:"restaurant_select_top"},n.a.createElement("div",{onClick:function(){u(!c)},className:"restaurant_select_top-header font-effect-outline"},m||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"),n.a.createElement("div",{className:"arrow_picker"},n.a.createElement("div",{className:"arrow_picker-up"}),n.a.createElement("div",{className:"arrow_picker-down"}))),c?n.a.createElement("div",{className:"restaurant_select_bottom"},n.a.createElement("ul",null,l.map((function(e){return n.a.createElement("li",{onClick:function(){return function(e){var a=e.title,t=e.url;p(a),b(t),u(!1)}(e)},key:e.id},e.title)})))):null,m&&!c?n.a.createElement("button",{onClick:function(){e.history.push("/restaurant/".concat(g))}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"):null)},i=t(18),o=t.n(i),m=t(23),p=t(19),d=t(11),h=t(12),g=t(14),b=t(13),v=function(e){return n.a.createElement("header",{className:"top"},n.a.createElement("div",{className:"wrap"},n.a.createElement("div",{className:"header-content"},n.a.createElement("div",{className:"header-rating"},n.a.createElement("div",{className:"header-rating_tag"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),n.a.createElement("div",{className:"header-rating_icon"},"\u2605\u2605\u2605\u2605\u2605\u2605")),n.a.createElement("div",{className:"header-divider"}),n.a.createElement("h1",{className:"font-effect-fire-animation"},e.title),n.a.createElement("h3",null,n.a.createElement("span",null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0433\u043e\u0440\u044f\u0447\u0438\u0445",n.a.createElement("span",{className:"sub-header"},"#\u0431\u0443\u0440\u0433\u0435\u0440\u043e\u0432"))))))},f=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.total,a=e>0&&e<500?350:99,t=99===a?n.a.createElement("span",{className:"font-effect-neon total_wrap-cheap"},a,"\u20bd"):n.a.createElement("span",null,a,"\u20bd");return n.a.createElement("div",{className:"total"},n.a.createElement("div",{className:"total_wrap"},n.a.createElement("div",null,n.a.createElement("div",null,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 : ",e>0?t:null),n.a.createElement("div",{className:"total_wrap-free"},e<500?"\u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0449\u0435 \u043d\u0430 ".concat(500-e,"\u20bd \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0437\u0430 99\u20bd"):null)),n.a.createElement("div",{className:"total_wrap-final"},"\u0418\u0442\u043e\u0433\u043e: ",e,"\u20bd")))}}]),t}(n.a.Component),E=t(59),O=t(60),j=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).renderOrder=function(a){var t=e.props.burgers[a],r=e.props.order[a],c=t&&"available"===t.status;return t?c?n.a.createElement(E.a,{classNames:"order",key:a,timeout:{enter:5e3,exit:5e3}},n.a.createElement("li",{key:a},n.a.createElement("span",null,n.a.createElement("span",null,r),"\u0448\u0442. ",t.name,n.a.createElement("span",null," ",r*t.price,"\u20bd"),n.a.createElement("button",{className:"cancellItem",onClick:function(){return e.props.deleteFromOrder(a)}},"\xd7")))):n.a.createElement(E.a,{classNames:"order",key:a,timeout:{enter:5e3,exit:5e3}},n.a.createElement("li",{className:"unavailable",key:a},"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, ",t?t.name:"\u0431\u0443\u0440\u0433\u0435\u0440"," \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d ")):null},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this,a=Object.keys(this.props.order),t=a.reduce((function(a,t){var r=e.props.burgers[t],n=e.props.order[t];return r&&"available"===r.status?a+r.price*n:a}),0);return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null,"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"),n.a.createElement(O.a,{component:"ul",className:"order"},a.map(this.renderOrder)),t>0?n.a.createElement(f,{total:t}):n.a.createElement("div",{className:"nothingSelected"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043b\u044e\u0434\u043e \u0438 \u0434\u043e\u0431\u0430\u0432\u0442\u0435 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"))}}]),t}(n.a.Component),y=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createBurger=function(a){a.preventDefault(),console.log("Add Burger");var t={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value||0),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addBurger(t),a.currentTarget.reset()},e}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"burger-edit",onSubmit:this.createBurger},n.a.createElement("input",{ref:this.nameRef,name:"name",type:"text",placeholder:"Name",autoComplete:"off"}),n.a.createElement("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"Price",autoComplete:"off"}),n.a.createElement("select",{ref:this.statusRef,name:"status",className:"status"},n.a.createElement("option",{value:"available"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"),n.a.createElement("option",{value:"unavailable"},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043c\u0435\u043d\u044e")),n.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"Desc"}),n.a.createElement("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"Image",autoComplete:"off"}),n.a.createElement("button",{type:"submit"},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),t}(n.a.Component),N=t(27),k=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).handleChange=function(a){var t=Object(p.a)(Object(p.a)({},e.props.burger),{},Object(N.a)({},a.currentTarget.name,"price"===a.currentTarget.name?parseFloat(a.currentTarget.value)||0:a.currentTarget.value));e.props.updateBurger(e.props.index,t)},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"burger-edit"},n.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",value:this.props.burger.name}),n.a.createElement("input",{onChange:this.handleChange,name:"price",type:"text",value:this.props.burger.price}),n.a.createElement("select",{onChange:this.handleChange,name:"status",className:"status",value:this.props.burger.status},n.a.createElement("option",{value:"available"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"),n.a.createElement("option",{value:"unavailable"},"\u041d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e")),n.a.createElement("textarea",{onChange:this.handleChange,name:"desc",value:this.props.burger.desc}),n.a.createElement("input",{onChange:this.handleChange,name:"image",type:"text",value:this.props.burger.image}),n.a.createElement("button",{onClick:function(){return e.props.deleteBurger(e.props.index)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043c\u0435\u043d\u044e"))}}]),t}(n.a.Component),C=t(21),w=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={photo:"",user:""},e.authHandler=function(){var a=Object(m.a)(o.a.mark((function a(t){var r,n,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=t.user,n=r.email,c=r.photoURL,e.setState({user:n,photo:c});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.default.auth().onAuthStateChanged((function(a){a&&e.authHandler({user:a})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.user,r=a.photo,c=r||"/images/avatar.png";return n.a.createElement("div",{className:"menu-admin"},t?n.a.createElement("div",{className:"login-header"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:c,alt:t})),n.a.createElement("button",{className:"buttonLogout",onClick:this.props.handleLogout},"\u0412\u044b\u0439\u0442\u0438")):null,n.a.createElement("h2",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u041c\u0435\u043d\u044e"),Object.keys(this.props.burgers).map((function(a){return n.a.createElement(k,{key:a,index:a,deleteBurger:e.props.deleteBurger,burger:e.props.burgers[a],updateBurger:e.props.updateBurger})})),n.a.createElement(y,{addBurger:this.props.addBurger}),n.a.createElement("button",{onClick:this.props.loadSampleBurgers},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u0443\u0440\u0433\u0435\u0440\u044b"))}}]),t}(n.a.Component),B={burger1:{name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/cheese.jpg",desc:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0441 \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u0431\u0443\u043b\u043e\u0447\u043a\u043e\u0439.",price:110,status:"available"},burger2:{name:"\u0427\u0438\u043a\u0435\u043d\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/chicken.jpg",desc:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430, \u0441\u043e\u0443\u0441\u0430 \u0411\u0430\u0440\u0431\u0435\u043a\u044e \u0438 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0430\u043b\u0430\u0442\u0430.",price:140,status:"available"},burger3:{name:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/double.jpg",desc:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0438 \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c \u0441\u043e\u0443\u0441\u043e\u043c.",price:200,status:"unavailable"},burger4:{name:"\u0424\u0438\u0448\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/fish.jpg",desc:"\u0420\u044b\u0431\u043d\u043e\u0435 \u0444\u0438\u043b\u0435 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043b\u0435\u0433\u043a\u0438\u043c \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:150,status:"available"},burger5:{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0424\u0440\u0438",image:"/images/fries.jpg",desc:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043b\u043e\u043c\u0442\u0438\u043a\u0438 \u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u043e\u0433\u043e \u0433\u043e\u0440\u044f\u0447\u0435\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0421\u0443\u043f\u0435\u0440 \u0424\u0440\u0438, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u043d\u0435\u043f\u043b\u043e\u0434\u0430!",price:85,status:"available"},burger6:{name:"King \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/ham.jpg",desc:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0438\u0437 100% \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u0441 \u0436\u0430\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043b\u043e\u043c\u0442\u0438\u043a\u0430\u043c\u0438 \u0431\u0435\u043a\u043e\u043d\u0430 \u0438 \u0441\u0432\u0435\u0436\u0438\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c, \u0437\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0435\u0442\u0447\u0443\u043f\u043e\u043c \u0438 \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:450,status:"available"},burger7:{name:"\u041c\u0435\u0433\u0430 \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/mega.jpg",desc:"\u041d\u0430\u0448 \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u0440\u0433\u0435\u0440, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u0430, \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430 \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u0441\u043e\u043b\u0435\u043d\u044b\u0445 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u043e\u0432.",price:500,status:"available"},burger8:{name:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0432 \u041f\u0438\u0442\u0435",image:"/images/pita.jpg",desc:"\u0427\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0442\u043b\u0435\u0442\u044b \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u043f\u043e\u043a\u0440\u044b\u0442\u044b\u0435 \u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440, \u0441\u043e \u0441\u0432\u0435\u0436\u0438\u043c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c \u0432 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u043b\u0435\u043f\u0435\u0448\u043a\u0435.",price:380,status:"available"},burger9:{name:"Village \u0424\u0440\u0438",image:"/images/bakedFries.jpg",desc:"\u041f\u043e\u0440\u0446\u0438\u044f \u0441\u0432\u0435\u0436\u0438\u0445 \u043b\u043e\u043c\u0442\u0438\u043a\u043e\u0432 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u044b\u0445 \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435 \u043f\u043e\u0434 \u043c\u0438\u0440\u043d\u043e \u0442\u043b\u0435\u044e\u0449\u0438\u043c\u0438 \u0443\u0433\u043b\u044f\u043c\u0438",price:90,status:"available"}},S=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).handleClick=function(){e.props.addToOrder(e.props.index)},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.details,a=e.image,t=e.name,r=e.price,c=e.desc,s="available"===e.status;return n.a.createElement("li",{className:"menu-burger"},n.a.createElement("div",{className:"image-container"},n.a.createElement("img",{src:a,alt:t})),n.a.createElement("div",{className:"burger-details"},n.a.createElement("h3",{className:"burger-name"},t,n.a.createElement("span",{className:"price"},r,"\u20bd")),n.a.createElement("p",null,c),n.a.createElement("button",{className:"buttonOrder",disabled:!s,onClick:this.handleClick},s?"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c":"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0442")))}}]),t}(n.a.Component),R=t(37),x=t.n(R),_=t(40),A=(t(52),t(53),_.a.initializeApp({apiKey:"AIzaSyCnv9uzS-WLKSmikr-P_A5TwQCRPngPiIM",authDomain:"very-hot-burgers-4b86a.firebaseapp.com",databaseURL:"https://very-hot-burgers-4b86a-default-rtdb.europe-west1.firebasedatabase.app"})),I=x.a.createClass(A.database()),T=function(e){return n.a.createElement("div",{className:"login-container"},n.a.createElement("nav",{className:"login"},n.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n.a.createElement("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u043e\u0440\u043e\u043b\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 GitHub"),n.a.createElement("button",{className:"github",onClick:function(){return e.authenticate()}},"\u0412\u043e\u0439\u0442\u0438")))},H=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={user:""},e.authHandler=function(){var a=Object(m.a)(o.a.mark((function a(t){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=t.user.email,e.setState({user:r});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.authenticate=function(){var a=new C.default.auth.GithubAuthProvider;A.auth().signInWithPopup(a).then(e.authHandler)},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.default.auth().onAuthStateChanged((function(a){a&&e.authHandler({user:a})}))}},{key:"render",value:function(){return this.state.user?this.props.children:n.a.createElement(T,{authenticate:this.authenticate})}}]),t}(n.a.Component),D=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={burgers:{},order:{}},e.addBurger=function(a){console.log("addBurger",a);var t=Object(p.a)({},e.state.burgers);t["burger".concat(Date.now())]=a,e.setState({burgers:t})},e.updateBurger=function(a,t){var r=Object(p.a)({},e.state.burgers);r[a]=t,e.setState({burgers:r})},e.deleteBurger=function(a){var t=Object(p.a)({},e.state.burgers);t[a]=null,e.setState({burgers:t})},e.deleteFromOrder=function(a){var t=Object(p.a)({},e.state.order);delete t[a],e.setState({order:t})},e.loadSampleBurgers=function(){e.setState({burgers:B})},e.addToOrder=function(a){var t=Object(p.a)({},e.state.order);t[a]=t[a]+1||1,e.setState({order:t})},e.handleLogout=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.default.auth().signOut();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,a=localStorage.getItem(e.restaurantId);a&&this.setState({order:JSON.parse(a)}),this.ref=I.syncState("".concat(e.restaurantId,"/burgers"),{context:this,state:"burgers"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.restaurantId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){I.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return n.a.createElement(H,null,n.a.createElement("div",{className:"burger-paradise"},n.a.createElement("div",{className:"menu"},n.a.createElement(v,{title:"Hot Burger"}),n.a.createElement("ul",{className:"burgers"},Object.keys(this.state.burgers).map((function(a){return n.a.createElement(S,{key:a,index:a,addToOrder:e.addToOrder,details:e.state.burgers[a]})})))),n.a.createElement(j,{burgers:this.state.burgers,order:this.state.order,deleteFromOrder:this.deleteFromOrder}),n.a.createElement(w,{loadSampleBurgers:this.loadSampleBurgers,addBurger:this.addBurger,burgers:this.state.burgers,updateBurger:this.updateBurger,deleteBurger:this.deleteBurger,handleLogout:this.handleLogout})))}}]),t}(n.a.Component),F=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"The page is Not Found"))},L=t(38),P=t(8),J=function(){return n.a.createElement(L.a,null,n.a.createElement(P.c,null,n.a.createElement(P.a,{exact:!0,path:"/",component:u}),n.a.createElement(P.a,{path:"/restaurant/:restaurantId",component:D}),n.a.createElement(P.a,{component:F})))};t(56);Object(c.render)(n.a.createElement(J,null),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5fd63ae0.chunk.js.map