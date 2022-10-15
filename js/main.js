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
  let descEl = event.currentTarget.querySelector("#procedure .desc");
  let lineEl = event.currentTarget.querySelector("#procedure .line");
  descEl && descEl.classList.toggle("active");
  lineEl && lineEl.classList.toggle("active");
}
