export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/81Il8QJenEL._SY466_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/514cSQ0O9OL._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51nmEweuRmL._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="JavaScript Pocket Reference" />
         <img src={book2} alt="Python Crash Course" />
         <img src={book3} alt="Java in a Nutshell" />
      </div>      
   );
}