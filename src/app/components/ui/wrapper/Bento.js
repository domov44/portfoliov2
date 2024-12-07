import React, { forwardRef, useRef, useImperativeHandle } from "react";
import styles from "./Bento.module.css";
import Stack from "./Stack";
import Text from "../textual/Text";

const Bento = forwardRef(({ 
  videoSrc, 
  username, 
  onMouseMove, 
  onMouseLeave 
}, ref) => {
  const parentBentoDivRef = useRef(null);
  const bentoDivRef = useRef(null);

  useImperativeHandle(ref, () => ({
    parentBentoDivRef,
    bentoDivRef
  }));

  return (
    <div 
      ref={parentBentoDivRef} 
      className={styles.bentoParentDiv}
    >
      <figure 
        ref={bentoDivRef} 
        className={styles.bentoDiv}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        ></video>
        <Stack>
          <Text>@{username}</Text>
        </Stack>
      </figure>
    </div>
  );
});

export default Bento;