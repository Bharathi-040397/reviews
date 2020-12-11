const staff=[{
    id : 1,
    img:"satffs/download(1).jpg",
    author : "Nikil",
    job:"Developer",
    info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis",
    },
    {
        id : 2,
        img:"satffs/images.jpg",
        author : "Angela",
        job:"Team leader",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis",
        },
        {
            id : 3,
            img:"satffs/images (1).jpg",
            author : "Balu",
            job:"Full stack developer",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis",
            },
            {
                id : 4,
                img:"satffs/images (2).jpg",
                author : "Bharath",
                job:"Quality checker",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis",
                },
               
     ];
     const img=document.querySelector("#img");
     const author=document.querySelector("#author");
     const job=document.querySelector("#job");
     const info=document.querySelector("#info");
     
     const previous=document.querySelector(".pre-button");
     const next=document.querySelector(".next-button");
     const random=document.querySelector(".random-button");
    let currentItem = 0;
   
window.addEventListener("DOMcontentLoaded",function(){
 showPerson(currentItem);
});
function showPerson(person){
    const item=staff[person];
    img.src=item.img;
    author.textContent= item.author;
    job.textContent=item.job;
    info.textContent=item.info;
}
previous.addEventListener('click',function (){
    currentItem--;
    console.log(currentItem);
 showPerson(currentItem);
});
next.addEventListener('click',function (){
    currentItem++;
 showPerson(currentItem);
});
random.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*staff.length);
    showPerson(currentItem);
});
