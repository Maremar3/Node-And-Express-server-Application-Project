//Here we have our customer purchase
//Each customers maybe will buy more than one makeup item,here we have each custome
//and his purchase(product he bought)
// Each customer bought more than one product, id(Customer number),UserId is the product number ,customername(customer name name)
//Btand(product brand) and product price

const posts = [
    {
      id: 1,//customer id primery key
      userId: 1,// product Id from userproduct ,relational Key
      customername:"Nana"
    },
    {
      id: 2,
      userId: 1,
      customername:"Saed"
    },
    {
      id: 3,
      userId: 1,
      customername:"Rami"
    },
    {
      id: 4,
      userId: 2,
      customername:"Manal"
    },
    {
      id: 5,
      userId: 2,
      customername:"Maryana"
    },
    {
      id: 6,
      userId: 2,
      customername:"Hane"
    },
    {
      id: 7,
      userId: 3,
      customername:"Wafa"
    },
    {
      id: 8,
      userId: 3,
      customername:"Sara"
    },
    {
      id: 9,
      userId: 3,
      customername:"Raga"
    },
  ];
  
  module.exports = posts;