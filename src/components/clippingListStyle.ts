import styled from "styled-components";

export const ClippingList = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 9999;
height: 100vh;
weight: 100%;
background-color: rgba(0,0,0,.7);
opacity: 0;
visibility: hidden;
display: none;

.popup__close {
    &:link,
    &:visited {
        color: $color-gray-dark;
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        text-decoration: none;
        display: inline-block;
        line-height: 1; // &times is predefined as a text, and it have predefined hight line
        font-size: large;
    }
    &:hover {
        color: $color-primary;
    }
}

.clipping-content {
    position: fix;
    width: 75%;
    margin: 0 auto;
    background-color: white;
}

&:target {
    opacity: 1;
    visibility: visible;
    display:block;
    position: absolute;
    overflow: scroll;

}
&:target clipping-content {
    opacity: 1;
    visibility: visible;
    display:block;
}
`;

export const ClippingItem = styled.div`
padding: 1rem;
`;

