// Keep nav link active when clicked
let link = document.querySelectorAll(".nav-link");
let activeLink = document.querySelector("active")

link.addEventListener('click', function() {
    activeLink.removeAttribute("active")
    this.addClass('active');
});

// $('#navContent a').click(function(){
//     /* remove class from prior active link*/
//     $('.activeLinkClass').removeClass('activeLinkClass');
//     /* "this" is current link clicked*/
//     $(this).addClass('activeLinkClass');
// });

// const sr = ScrollReveal({
//     duration: 2000,
//     distance: '120px',
//     reset: 'true',
// });
//
// sr.reveal('.neon',{
//     origin: 'left',
//     opacity: null,
// });
// sr.reveal('.jumbotron',{
//
// });
// sr.reveal('.lead.text-center');
//
// sr.reveal('.js1',{
//     origin: 'left',
// });
// sr.reveal('.js2',{
//     origin: 'bottom',
// });
// sr.reveal('.js3',{
//     origin: 'right',
// });
// sr.reveal('.title');
// sr.reveal('#projets',{
//     origin: 'left',
//     delay: 300,
// });
// sr.reveal('.row.align-items-center',{
//     delay: 200
// })
// sr.reveal('.bento',{
//     delay: 150,
//     origin: 'right'
// })
// sr.reveal('.julio',{
//     delay: 150,
//     origin: 'left'
// })
