import React, {useState} from "react";
import styled from 'styled-components'


function Wave(){

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return(
        <>
            <Ola className="text-6xl md:text-9xl  ">
                <h2 class='border '>¿Su quequito?</h2>
                <h2 class='wave '>¿Su quequito?</h2>
            </Ola>
        </>
    )
}

export default Wave


const Ola = styled.div`
    font-family: Sigmar , cursive;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width:100vw;
    h2{
        line-height:2;
        position: absolute;
        z-index: 2;
    }
    .border{
        border-width: 0px;
        color:black;
        text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            1px 1px 0 white,
            -1px 1px 0 white;
    }
    .wave{
        color: #ffd1dc;
        animation: wave 3s ease-in-out infinite;
    }

    @keyframes wave{
        0%,100%{
            clip-path: polygon(
                0% 47%,
                10% 48%,
                33% 54%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
        }
        50%{
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
    }
`