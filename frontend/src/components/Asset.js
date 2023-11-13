// React import
import React from "react";

// Style based import
import styles from "../styles/Asset.module.css";

// Package based componenet
import Spinner from "react-bootstrap/Spinner";

const Asset = ({ spinner, src, message }) => {
    return (
        <div className={`${styles.Asset} p-4`}>
            {spinner && <Spinner animation="border" />}
            {src && <img src={src} alt={message} />}
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
};

export default Asset;