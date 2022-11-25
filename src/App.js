import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Enraged Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "💋": "Kiss Mark",
  "💘": "Heart with Arrow",
  "💝": "Heart with Ribbon",
  "💖": "Sparkling Heart",
  "💗": "Growing Heart",
  "💓": "Beating Heart",
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "❤️‍🔥": "Heart on Fire",
  "❤️‍🩹": "Mending Heart"
}

const list = Object.keys(emojiDictionary);

function App() {

  const [meaning,setUserInput]=useState("");

  function userInputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning===undefined){
      meaning = "We Don't Have this Emoji in Our Records";
    }
    setUserInput(meaning);
  }

  function listItemClickHandler(item) {
    var meaning = emojiDictionary[item];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>Samyak's React App</h1>
      <input onChange={userInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>Some Emoji's We Know : </h3>
      {list.map((item) => {
        return (
          <span
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{ display:'inline-block',width:"10rem",height:"3rem",padding: "2px", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default App;
