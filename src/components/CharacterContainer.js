import React, { useEffect } from 'react';
import $ from 'jquery';

const AlphabeticalListNavigation = () => {

  const createArrayAtoZ = () => {
    return Array
      .apply(null, { length: 26 })
      .map((x, i) => String.fromCharCode(65 + i));
  }

  const jumptoAnchor = (anchor) => {
    window.location.href = "#" + anchor;
  }

  const createNavigationList = () => {
    const abcChars = createArrayAtoZ();
    let navigationEntries = '';
    abcChars.forEach((char) => {
      navigationEntries += createDivForCharElement(char);
      changeItemState(char);
      addListEntries(char);
    });
    $('#nav').append(navigationEntries);
  }

  const changeItemState = (character) => {
    const characterElement = $('#nav').find(`.CharacterElement[data-filter="${character}"]`);
    $(characterElement).click(() => jumptoAnchor(character));
  }

  const createDivForCharElement = (charToAdd) => {
    return `<div id='CharacterElement' class='CharacterElement' data-filter='${charToAdd}'>${charToAdd}</div>`;
  }

  const addListEntries = (letter) => {
    $('#AppComponent').append(`<div class='AppElement' id='${letter}'>${letter}</div>`);
  }

  useEffect(() => {
    createNavigationList();
  }, []);

  return (
    <div>
      <h1 id="AppName">Program Music Database</h1>
      <div id="nav" className="CharacterContainer"></div>
      <div id="AppComponent"></div>
    </div>
  );
}

export default AlphabeticalListNavigation;
