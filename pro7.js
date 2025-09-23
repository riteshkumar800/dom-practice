// const m=document.querySelector("month");
// const dy=document.querySelector("day");
// const dt=document.querySelector("date");
// const y=document.querySelector("year");
// const p1=document.createElement("p");
// const p2=document.createElement("p");
// const p3=document.createElement("p");
// const p4=document.createElement("p");

// const date=new Date();
// p1.textContent= date.getMonth();
// p2.textContent= date.getDate();
// p3.textContent= date.getDay();
// p4.textContent= date.getFullYear();

// m.appendChild(p1);
// dy.appendChild(p3);
// dt.appendChild(p2);
// y.appendChild(p4);


// pro7.js — minimal, readable output, keeps your variable names/style

const m  = document.querySelector(".month");
const dy = document.querySelector(".day");
const dt = document.querySelector(".date");
const y  = document.querySelector(".year");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

const date = new Date();

// Month name (e.g., "September")
p1.textContent = date.toLocaleString('default', { month: 'long' });

// Weekday name (e.g., "Monday")
p3.textContent = date.toLocaleString('default', { weekday: 'long' });

// Day of month with leading zero (e.g., "09")
// const dd = String(date.getDate()).padStart(2, '0');
p2.textContent = date.getDate();

// Full year
p4.textContent = date.getFullYear();

  m.appendChild(p1);
 dy.appendChild(p3);
 dt.appendChild(p2);
  y.appendChild(p4);
