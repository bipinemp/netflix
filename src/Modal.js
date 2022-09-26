import React from "react";
import ReactDom from "react-dom";
import { IoMdClose } from "react-icons/io";
import "./modal.css";

const MODAL_STYLES = {
  width: "100%",
  height: "300px",
  position: "fixed",
  color: "white",
  left: "0%",
  right: "0%",
  bottom: "0%",
  backgroundColor: "rgba(0,0,0)",
  zIndex: 1000,
  boxShadow: "0px 0px 4px 0px white",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const CROSS_BTN = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "2em",
  position: "absolute",
  right: "7px",
  top: "5px",
  color: "white",
  zIndex: "9999",
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose} style={CROSS_BTN}>
          <IoMdClose classname="crossicon" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
