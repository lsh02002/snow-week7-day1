import React from "react";

const sheet = document.head.appendChild(document.createElement("style")).sheet;

const css = (styleString) => {
  // We use 36 as the radix here so that the output string uses the 26 alphabet characters as well.
  // Example:
  // a = 11;
  // a.toString(36); // => 'b'
  const className = `css-${sheet.cssRules.length.toString(36)}`;

  sheet.insertRule(`.${className} { ${styleString} }`);

  return className;
};

const mainPicsAreas = css(`
  width:100%;

  display:flex;
  just-content: center;  
  align-items:center;
`);

const mainPicLeft = css(`
  width:33%;   
  padding: 5px;
`);

const mainPicCenter = css(`
  width:33%;
  height: 100%;

  display:flex;
  just-content: center;
  flex-direction: column;
  align-items:center; 

  border:1px solid gray;
  padding: 10px;
`);

const mainPicCenterItem = css(`
  width:100%;  
`);

const mainPicRight = css(`
  width:33%; 
  padding: 5px;
`);

const mainBelowAreas = css(`
  width:100%;  
  display:flex;
  just-content: center;  
  align-items:center;
`);

const mainTexts = css(`
width:65%;
display:flex;
just-content: center;
flex-direction: column;
align-items:center;
`);

const mainTextTitle = css(`
  width:98%;
  font-size: 22px;
  font-weight: bold;
  color: black;
  padding-bottom: 1rem;  
`);

const mainTextContent = css(`
  font-size: 15px;  
  color: black;  
  padding-bottom: 1rem;  
`);

const mainLists = css(`
  width:98%;
  font-size: 14px;  
  color: black;  
  padding-bottom: 1rem;  
`);

const mainTextContent2 = css(`
  width:98%;
  font-size: 14px;  
  color: black;   
  padding-bottom: 1rem;  
`);

const mainItems = css(`
width:35%;
height:100%;
`);

export default function App() {
  return (
    <main>
      <div className={mainPicsAreas}>
        <div className={mainPicLeft}>
          <img src="man-clothes.jpeg" width="100%" alt="" />
        </div>
        <div className={mainPicCenter}>
          <div className={mainPicCenterItem}>
            <img src="left-clothes-pic.jpeg" width="100%" alt="" />
          </div>
          <div className={mainPicCenterItem}>
            <img
              src="overhead-view-womans-casual-outfits.jpg"
              width="100%"
              alt=""
            />
          </div>
        </div>
        <div className={mainPicRight}>
          <img src="man-clothes.jpeg" width="100%" alt="" />
        </div>
      </div>
      <div className={mainBelowAreas}>
        <div className={mainTexts}>
          <div className={mainTextTitle}>Basic Tee 6-Pack</div>
          <div className={mainTextContent}>
            English fiction began with The Pilgrim’s Progress, but nearly 50
            turbulent years, including the Glorious Revolution, passed before it
            made its great leap forward.
          </div>
          <div className={mainLists}>
            <ui>
              Examples of classic novels include:
              <li>Jane Eyre by Charlotte Bronte</li>
              <li>Wuthering Heights by Emily Brontë</li>
              <li>Moby Dick by Herman Melville</li>
              <li>The Great Gatsby by F. Scott Fitzgerald</li>
            </ui>
          </div>
          <div className={mainTextContent2}>
            <font size="15px">English fiction</font>
            <br />
            English fiction began with The Pilgrim’s Progress, but nearly 50
            turbulent years, including the Glorious Revolution, passed before it
            made its great leap forward.
          </div>
        </div>
        <div className={mainItems}>
          <img src="item-detail.jpeg" alt="" />
        </div>
      </div>
    </main>
  );
}
