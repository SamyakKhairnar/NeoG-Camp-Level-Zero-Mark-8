import React,{ useState } from 'react';
import './App.css';

const emojiDictionary = {
  "đ": "Grinning Face",
  "đ": "Grinning Face with Big Eyes",
  "đ": "Grinning Face with Smiling Eyes",
  "đ": "Beaming Face with Smiling Eyes",
  "đ": "Grinning Squinting Face",
  "đ": "Grinning Face with Sweat",
  "đ¤Ŗ": "Rolling on the Floor Laughing",
  "đ": "Face with Tears of Joy",
  "đ": "Slightly Smiling Face",
  "đ": "Upside-Down Face",
  "đ": "Winking Face",
  "đ": "Smiling Face with Smiling Eyes",
  "đ": "Smiling Face with Halo",
  "đĨ°": "Smiling Face with Hearts",
  "đ": "Smiling Face with Heart-Eyes",
  "đ¤Š": "Star-Struck",
  "đ": "Face Blowing a Kiss",
  "đ": "Kissing Face",
  "đĒ": "Sleepy Face",
  "đ¤¤": "Drooling Face",
  "đ´": "Sleeping Face",
  "đˇ": "Face with Medical Mask",
  "đ¤": "Face with Thermometer",
  "đ¤": "Face with Head-Bandage",
  "đ¤ĸ": "Nauseated Face",
  "đ¤Ž": "Face Vomiting",
  "đ¤§": "Sneezing Face",
  "đĨĩ": "Hot Face",
  "đĨļ": "Cold Face",
  "đ": "Worried Face",
  "đ": "Slightly Frowning Face",
  "âšī¸": "Frowning Face",
  "đŽ": "Face with Open Mouth",
  "đ¯": "Hushed Face",
  "đ¨": "Fearful Face",
  "đ°": "Anxious Face with Sweat",
  "đĨ": "Sad but Relieved Face",
  "đĸ": "Crying Face",
  "đ­": "Loudly Crying Face",
  "đą": "Face Screaming in Fear",
  "đ": "Confounded Face",
  "đŖ": "Persevering Face",
  "đ": "Disappointed Face",
  "đĨą": "Yawning Face",
  "đ¤": "Face with Steam From Nose",
  "đĄ": "Enraged Face",
  "đ ": "Angry Face",
  "đ¤Ŧ": "Face with Symbols on Mouth",
  "đ": "Smiling Face with Horns",
  "đŋ": "Angry Face with Horns",
  "đ": "Kiss Mark",
  "đ": "Heart with Arrow",
  "đ": "Heart with Ribbon",
  "đ": "Sparkling Heart",
  "đ": "Growing Heart",
  "đ": "Beating Heart",
  "đ": "Revolving Hearts",
  "đ": "Two Hearts",
  "đ": "Heart Decoration",
  "âŖī¸": "Heart Exclamation",
  "đ": "Broken Heart",
  "â¤ī¸âđĨ": "Heart on Fire",
  "â¤ī¸âđŠš": "Mending Heart"
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
      <input onChange={userInputHandler}></input>
      <h2 style={{fontSize:"2rem",color:"red"}}> {meaning} </h2>
      <h2>Some Emoji's We Know : </h2>
      {list.map((item) => {
        return (
          <span
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{ display:'inline-block',width:"8rem",height:"4rem",padding: "2px", fontSize: "2rem", cursor: "pointer" }}
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
