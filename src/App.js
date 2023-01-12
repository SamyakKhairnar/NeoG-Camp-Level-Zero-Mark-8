import React,{ useState } from 'react';
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
      <h1>Emoji Interpreter App</h1>
      <h3>An React Applicaton</h3>
      <input onChange={userInputHandler} placeholder='Input Emoji to Know Meaning'></input>
      <h2 className='mean'> {meaning} </h2>
      <h2>Some Emoji's We Know : </h2>
      {list.map((item) => {
        return (
          <span className='emojis'
            key={item}
            onClick={() => listItemClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
      <div className='footer'>
        <p>Copyright &#169; 2022 All Rights Reserved</p>
          <ul className="social-links list-non-bullet">
            <li className="list-item-inline">
              <a className="link" href="https://www.facebook.com/SamyakKhairnar">
                <i className="fa-brands fb fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://twitter.com/SamyakKhairnar">
                <i className="fa-brands tw fa-twitter"></i>
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://github.com/SamyakKhairnar">
                <i className="fa-brands git fa-github"></i>
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://www.linkedin.com/in/samyakkhairnar/">
                <i className="fa-brands in fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default App;
