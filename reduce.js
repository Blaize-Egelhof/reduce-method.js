  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:


const nums = [0,1,2,3,4]

const sum = nums.reduce((acc,curr)=>{  //basically the first parameter acts as a tally and holds the value from the first iteration and uses that value on the 2nd,and 3rd etc
  console.log(
    "Accumulator:" , acc, 
    "Current Value:", curr, 
    "Total:", acc +curr 
  );
  return acc + curr;
},0) //Theres 3 total parameters for .reduce , the 3rd is optional, it states what he accumulator needs to start on, by default if its not specifed , when reduce is run , the first item in the array is IGNORED.

console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc,curr) => acc + curr.yrsExperience , 0);

console.log(totalExperience)
// Grouping by a property, and totaling it too

let experienceByProffession = teamMembers.reduce((acc,curr) => {
  let key = curr.profession; 

  if (!acc[key]) {
    acc[key] =curr.yrsExperience;
  }else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProffession)