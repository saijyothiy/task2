//    get body tag here

var body=document.getElementById("root"); //parent


// create elements
var h1=document.createElement("h1"); //child
h1.textContent="Resume";
// h1 is child of body tag
body.appendChild(h1);

// create section with main calss
var main=document.createElement("section"); //child
main.classList.add("main");
body.appendChild(main);

// creating leftside article
{/* <article class="leftSide">  // its a child of main */}
var leftSide=document.createElement("article");
leftSide.classList.add("leftSide");
main.appendChild(leftSide);

{/* <section class="image"> // child of leftSide article */}
var image=document.createElement("section");
image.classList.add("image");
leftSide.appendChild(image);

{/* <img src="images/profile.jpg" alt="rajesh profile"> */}
var img=document.createElement("img");
img.src="images/avatar.svg";
img.alt="Sai profile";
image.appendChild(img);

// add hr to the child of leftside
leftSide.appendChild(document.createElement("hr"));

{/* <section class="details"> -->
                <h2>Rajesh</h2> // child of details
                <h4>8998734533</h4> // child of details
                <h4>rajesh@gmail.com</h4> // child of details
            </section>
</section> */}

var details=document.createElement("section");
details.classList.add("details");
leftSide.appendChild(details);

// careting h2 tag
var name1=document.createElement("h2");
name1.textContent="Sai Jyothi";
details.appendChild(name1);
// mobile number
var mobile=document.createElement("h4");
mobile.textContent="9989221750";
details.appendChild(mobile);
// email
var email=document.createElement("h4");
email.textContent="saijyothi@gmail.com";
details.appendChild(email);

// <section class="address">
// <p>S/o Ravindra Babu</p>
// <p>village</p>
// <p>Prathipadu</p>
// <p>Guntur-522015</p>
// </section>
var address=document.createElement("section");
address.classList.add("address");
leftSide.appendChild(address);

// father name
var fname=document.createElement("p");
fname.textContent="D/O Subba Reddy";
address.appendChild(fname);

// village

// dist
var dist=document.createElement("p");
dist.textContent="Guntur- 522007";
address.appendChild(dist);

var rightSide=document.createElement("article");
rightSide.classList.add("rightSide");
main.appendChild(rightSide);

//var detailsr=document.createElement("section");
//detailsr.classList.add("detailsr");
//rightSide.appendChild(detailsr);

var co=document.createElement("section");
co.classList.add("co");
rightSide.appendChild(co);

var coj=document.createElement("h3");
coj.textContent="Career Objective:";
co.appendChild(coj);

var obj=document.createElement("h4");
obj.textContent="-To Work in a meaningful and challenging position that enables me to develop myself as a professional and permit scope for advancement";
co.appendChild(obj);

rightSide.appendChild(document.createElement("hr"));

var ed=document.createElement("section");
ed.classList.add("ed");
rightSide.appendChild(ed);

var ed1=document.createElement("h3");
ed1.textContent="Education:";
ed.appendChild(ed1);

var u=document.createElement("ul");
u.classList.add("u");
ed.appendChild(u);

var i1=document.createElement("li");
i1.textContent="Completed B.Tech from ANU in 2001";
u.appendChild(i1);

var i2=document.createElement("li");
i2.textContent="Completed M.Tech from JNTUK in 2007";
u.appendChild(i2);

var i3=document.createElement("li");
i3.textContent="Awarded PhD from SPMVV in 2018";
u.appendChild(i3);

rightSide.appendChild(document.createElement("hr"));

var we=document.createElement("section");
we.classList.add("we");
rightSide.appendChild(we);

var we1=document.createElement("h3");
we1.textContent="Work Experience:";
we.appendChild(we1);

var u=document.createElement("ul");
u.classList.add("u");
we.appendChild(u);

var l1=document.createElement("li");
l1.textContent="2018- tilldate: working as a professor in VVIT";
u.appendChild(l1);

var l2=document.createElement("li");
l2.textContent="2012-2017: worked as a Assoc.Prof in VVIT";
u.appendChild(l2);

var l3=document.createElement("li");
l3.textContent="2008-2011: worked as a Asst.Prof in VVIT";
u.appendChild(l3);

rightSide.appendChild(document.createElement("hr"));


var st=document.createElement("section");
st.classList.add("st");
rightSide.appendChild(st);

var st1=document.createElement("h3");
st1.textContent="Subjects Taught:";
st.appendChild(st1);

var u1=document.createElement("ul");
u1.classList.add("u1");
st.appendChild(u1);

var l11=document.createElement("li");
l11.textContent="Big Data Analytics";
u1.appendChild(l11);

var l22=document.createElement("li");
l22.textContent="JAVA, ADVANCED JAVA, WEB TECHNOLOGIES";
u1.appendChild(l22);

var l33=document.createElement("li");
l33.textContent="DS, ADS, FLAT and CD";
u1.appendChild(l33);

rightSide.appendChild(document.createElement("hr"));

var p=document.createElement("section");
p.classList.add("p");
rightSide.appendChild(p);

var p1=document.createElement("h3");
p1.textContent="Publications:";
p.appendChild(p1);

var u11=document.createElement("ul");
u11.classList.add("u11");
p.appendChild(u11);

var l111=document.createElement("li");
l111.textContent="Journals:5";
u11.appendChild(l111);

var l222=document.createElement("li");
l222.textContent="Conferences:5";
u11.appendChild(l222);


