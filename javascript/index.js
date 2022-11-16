let cont = {
   head:{
      name1:"mohamed ashraf",
      title:"web development",
      symb:"<>",
   },
   social:{
      face:" mohamedashraf",
      insta:"  mohamzdashraf",
      twitter:"  mohamed11ashraf",
   },
   contact:{
      email:"mohamedashraf207777@gmail.com",
      home:"shoubra.street"
   },
   program:{
      html:"html",
      css:"css",
      java:"js"
   },
}
$("#mohamed").text(cont.head.name1);
$("#title").text(cont.head.title);
$("#code").text(cont.head.symb);
$("#face").append(cont.social.face);
$("#insta").append(cont.social.insta);
$("#twitter").append(cont.social.twitter);
$("#email").append(cont.contact.email);
$("#home-id").append(cont.contact.home);
$("#circ").append(cont.program.html);
$("#circ1").append(cont.program.css);
$("#circ2").append(cont.program.java);

