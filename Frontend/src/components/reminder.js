// Notification logic-->

const showReminder=()=>{
    const reminder=new Notification("You have to do",{
      body:"you have a scrum at 9:00am",
      icon:'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Designer_Shoes_2160x.jpg?v=1630420978'
    })
    // Notification.onClick=(event)=>{
    //   window.location.href='https://google.com';
    // }
  }
  useEffect(()=>{
    if(Notification.permission==="granted" ){
      // alert("we havae a permission");
        showReminder();
    }else if(Notification.permission!=="denied"){
      Notification.requestPermission().then(permission=>{
        console.log(permission);
        if(permission==='granted'){
         showReminder();
        }
      })
    }
  },[])
