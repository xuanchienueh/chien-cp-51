let procedureArr = [
    {
      title: "  Learn the skills to become a Full Stack Software Developer ",
    },
    {
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vero?",
    },
    {
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vero?",
    },
  ];
  
  let createItemProcedure = (data) => {
    let contentHTMl = `<div cla-=>
   </div>`;
  };
  
  function handleShowProcedure(e) {
    // console.log(e.target);
    // console.log(event.currentTarget);
    let descEl = event.currentTarget.querySelector(".desc");
    let lineEl = event.currentTarget.querySelector(".line");
    console.log("descEl: ", descEl);
    descEl.classList.toggle("active");
    lineEl.classList.toggle("active");
  }
  