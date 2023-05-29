const hamzaImgArray = [
    "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202303/monk-mode240323031744.gif",
    "https://miro.medium.com/v2/resize:fit:1400/1*OZ35QG62mcfiquNIoLkdrQ.png",
    "https://www.ridiculouslyefficient.com/content/images/content/v1/56ad0eb962cd942d9e46f366/1454986384971-208XWPHEJ09WKHAVCA5L/monk--c2-a9-whiteisthecolor-fotolia.com_.jpg_.jpg",
    "https://miro.medium.com/v2/resize:fit:15904/1*T20fv0WHW-N-qUCbdxxsTw.jpeg",
    "https://nielsbohrmann.com/wp-content/uploads/2022/11/monk-mode-benefits.png",
    "https://nielsbohrmann.com/wp-content/uploads/2022/11/monk-mode-rules.png"
  ];
  
  const pickRandomHamzaImage = () => {
    const randomIndex = Math.floor(Math.random() * hamzaImgArray.length);
    console.log('randomIndex', randomIndex);
    return hamzaImgArray[randomIndex];
  }
  
  const handleCounter = (newDiv, body) => {
    const hostname = window.location.hostname;
    let count = 1;
    chrome.storage.sync.get([hostname], function (result) {
      if (result[hostname]) count = result[hostname] + 1;
      chrome.storage.sync.set({ [hostname]: count }, function () {
        console.log('Number of times this website was opened ' + count);
        const counterWrapperDiv = document.createElement("div");
        const counterH2 = document.createElement("h2");
        counterH2.innerHTML = `You are on Monk Mode! You have opened this website ${count} times!!`;
        counterWrapperDiv.appendChild(counterH2);
  
        counterWrapperDiv.setAttribute("style", "background: #ff6c00; position: absolute; bottom: 0; left: 0; right: 0; text-align: center; font-family: sans-serif;");
        counterH2.setAttribute("style", "color: white; font-size: 3rem; padding: 10px;")
  
        newDiv.appendChild(counterWrapperDiv);
        body.innerHTML = newDiv.outerHTML;
      });
    });
  }
  
  window.onload = async function () {
    const body = document.getElementsByTagName("body")[0];
  
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = pickRandomHamzaImage();
  
    newDiv.appendChild(newImg);
  
    newDiv.setAttribute("style", "background: #181818; height: 100vh; width: 100%; margin: 0;");
    newImg.setAttribute("style", "margin: auto; height: 100%; width: 100%;");
  
    await handleCounter(newDiv, body);
  }