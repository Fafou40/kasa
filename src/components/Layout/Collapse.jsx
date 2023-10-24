import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const openTabHandler = () => {
    setOpenTab((prevOpenTab) => !prevOpenTab);

    if (iconRotation === 0) {
      // Rotation vers la gauche (-90 degrés) avant la rotation complète (-180 degrés)
      setIconRotation(-90);
      setTimeout(() => setIconRotation(-180), 150); // Définissez une pause pour l'étape intermédiaire
    } else if (iconRotation === -180) {
      // Rotation vers la droite (90 degrés) avant de revenir à la position initiale (0 degrés)
      setIconRotation(90);
      setTimeout(() => setIconRotation(0), 150); // Définissez une pause pour l'étape intermédiaire
    } else {
      setIconRotation(0); // Réinitialisation de la rotation à 0 degrés (vers le bas)
    }
  };

  return (
    <>
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{props.title}</h2>
        <i
          className={`collapse_header_icon icon-rotate`}
          style={{ transform: `rotate(${iconRotation}deg)` }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </div>
      {openTab && <div className="collapse_content">{props.content}</div>}
    </>
  );
};

export default Collapse;
