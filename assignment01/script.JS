// const phrases = [
//   "No",
//   "Are you sure?",
//   "Really sure?",
//   "Like 100% sure?",
//   "Not even a soft maybe?",
//   "Don't do this to me",
//   "I'm gonna cry...",
//   "You're breaking my heart",
//   "Pretty please!!!!! 🥺",
//   "You're missing out on the full package here",
//   "I design. I develop. I build.",
//   "I've got 4.5 stars on Yelp",
//   "I roll a +5 to charisma.",
//   "I helped to defeat the Night Yorb.",
//   "I fought at the Battle of the Five Armies.",
//   "And against Thiala to save Bahumia.",
//   "I'm an asset to ANY team.",
//   "Can we at least talk it over?",
//   "Grab a cup of coffee?",
//   "Seriously????",
//   "At this point you're just being stubborn.",
//   "Did I offend you in a past life?",
//   "If so I'm extremely sorry.",
//   "Fate has brought us together.",
//   "You can't avoid fate.",
//   "I am your destiny.",
//   "Roses are red,",
//   "Violets are blue,",
//   "I am the perfect graphic designer for you.",
//   "Take a chance on me.",
//   "Well...I tried.",
//   "Your loss 😘",
// ];

// function App() {
//   const [noCount, setNoCount] = useState(0);
//   const [yesPressed, setYesPressed] = useState(false);
//   const yesButtonSize = noCount * 15 + 16;

//   function handleNoClick() {
//     setNoCount(noCount + 1);
//   }
//   function getNoButtonText() {
//     return phrases[Math.min(noCount, phrases.length - 1)];
//   }

//   return (
//     <div className="intro-container">
//       {yesPressed ? (
//         <>
//           <div className="text yes-wrapper">
//             &#65290; the designer does a little happy dance inviting you to view
//             their <a href="https://ldulski.myportfolio.com/">✨portfolio✨</a>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="text-wrapper">
//             <div className="intro-text">
//               &#65290; you encountered a graphic designer
//             </div>
//             <div className="question"> will you hire them?</div>
//             <div>
//               <button
//                 className="yesButton"
//                 style={{ fontSize: yesButtonSize }}
//                 onClick={() => setYesPressed(true)}
//               >
//                 Yes
//               </button>
//               <button onClick={handleNoClick} className="noButton">
//                 {getNoButtonText()}
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
