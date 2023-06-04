import React from "react";

export default function Toast() {
    function toggleToast(modifier) {
        document.querySelector("ons-toast[modifier~=" + modifier).toggle();
    }
    return (
        <div>
            <ons-toast modifier="danger thick" animation="fall">
                Danger danger<button onclick={toggleToast("danger")}>OK</button>
            </ons-toast>
            <style jsx>
                {`
                    /* danger */
                    .toast--danger {
                        left: auto;
                        background-color: hsl(348, 100%, 61%);
                    }

                    /* success */
                    .toast--success {
                        left: 0;
                        margin-left: auto;
                        right: 0;
                        top: 50%;
                        height: fit-content;
                        margin-right: auto;
                        width: 150px;
                        border-radius: 30px;
                        background-color: hsl(141, 71%, 48%);
                    }
                    .toast--success__message {
                        margin: 0;
                        text-align: center;
                    }

                    /* thick */
                    .toast--thick__message,
                    .toast--thick__button {
                        font-weight: 700;
                    }
                `}
            </style>
        </div>
    );
}
