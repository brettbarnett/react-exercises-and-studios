import './styles.css';

function Button() {
   let onLearnMore = function() {
      window.alert("Splish Splash!");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;