import {keyframes} from 'styled-components'

export const popup = keyframes`
    0%{
        width: 30%;
        height: 60%;
    }

    100%{
        width: 40%;
        height: 70%;
    }
`

export const upperArrowDisappear = keyframes`
    0%{
        top: -10px;
        opacity: 0;
    }

    50%{
        opacity: 1;
    }

    90%{
        opacity: 0;
    }

    100%{
        top: -30px;
        opacity: 0;
    }
`

export const notificationPopUp = keyframes`
    0%{
        top: -100px;
    }

    20%{
        top: 10px;
    }

    80%{
        top: 10px;
    }

    100%{
        top: -100px;
    }
`

export const animatedBackground = keyframes`
    0%{
        background-position: left;
    }

    100%{
        background-position: right;
    }
`

export const noteAppear = keyframes`
    0%{
        opacity: 0.3;
    }

    100%{
        opacity: 1;
    }
`