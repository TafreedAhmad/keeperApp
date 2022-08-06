// import logo from './logo.svg';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Note from './components/Note';


// import contacts from './cardFile/contacts';
// import Card from './cardFile/Card';
//////////Cards
// function createCard(contact){
//   return(
//     <Card
//       name={contact.name}
//       img={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   )
// }

// function App() {
//   return (
//     <div className="App">
//         <h1 className="heading">My Contacts</h1>
//         {contacts.map(createCard)};


//     </div>
//   );
// }

//////////////for Dictionary
// import './App.css';
// import Entry from './Dictionary/Entry';
// import emojipedia from './Dictionary/emojipedia';

// function CreateEntry(entry) {
//   return (
//     <Entry
//       key={entry.id}
//       emoji={entry.emoji}
//       name={entry.name}
//       meaning={entry.meaning}
//     />
//   )

// }

// function App() {
//   return (
//     <div className='App'>
      
//       <h1>
//         <span>emojipedia</span>
//       </h1>
//       <dl className='dictionary '>
//       {emojipedia.map(CreateEntry)};
//       </dl>

//     </div>
//   );
// }

import React from "react";
import './Keeper.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import notes from "./notes";
import Note from "./components/Note";


function Newnote(tncon)//title and content
{
  return(
    <Note
    key={tncon.key}
    title={tncon.title}
    content={tncon.content}
    />
  )

}

function App() {
  return (
    <div>
      <Header />
      {notes.map(Newnote)}
      <Footer />
    </div>
  );
}

export default App;
